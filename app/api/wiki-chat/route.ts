import OpenAI from "openai";
import { NextRequest } from "next/server";
import { getEntry, getWikiMeta, WIKI_ENTRIES } from "@/app/wiki/data";

// Wiki AI 助手：基于当前词条 + 相关词条上下文回答。
// 与 /api/chat（赛博分身）分开：这里是知识库问答，不是角色扮演。
//
// 默认后端：自建 Gemini relay（对外暴露 OpenAI 兼容端点 /v1beta/openai）。
// relay 内部持有多个上游 key，单个失效时自动轮转到下一个，所以这里只配一个
// 任意非空的占位 key 即可。
//
// 延迟构造 client：模块级 new OpenAI() 在缺少 key 时会让 `next build` 直接失败，
// 构建期不应依赖密钥存在。
let client: OpenAI | null = null;

const DEFAULT_BASE_URL =
  "https://gemini-relay-smoky.vercel.app/816e4039e815a00694f5f9ea42c91ae6b86262d1ce78d109/v1beta/openai";
// relay 会校验模型名：gemini-2.5-flash 已对新用户下架，需用 3.6+ 系列
const DEFAULT_MODEL = "gemini-3.6-flash";

function getClient(): OpenAI {
  if (!client) {
    client = new OpenAI({
      apiKey: process.env.WIKI_AI_API_KEY || process.env.GEMINI_API_KEY,
      baseURL: (
        process.env.WIKI_AI_BASE_URL ||
        DEFAULT_BASE_URL
      ).replace(/\/chat\/completions\/?$/, ""),
    });
  }
  return client;
}

function getModel(): string {
  return process.env.WIKI_AI_MODEL || DEFAULT_MODEL;
}

// 简易内存速率限制：每个 IP 每分钟最多 8 次，每天最多 80 次
const rateLimitMap = new Map<
  string,
  { count: number; dailyCount: number; resetAt: number; dailyResetAt: number }
>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    const dailyCount = entry && now < entry.dailyResetAt ? entry.dailyCount : 0;
    const dailyResetAt =
      entry && now < entry.dailyResetAt ? entry.dailyResetAt : now + 86400000;
    rateLimitMap.set(ip, {
      count: 1,
      dailyCount: dailyCount + 1,
      resetAt: now + 60000,
      dailyResetAt,
    });
    return dailyCount >= 80 ? { allowed: false, retryAfter: 60 } : { allowed: true };
  }

  entry.count++;
  entry.dailyCount++;

  if (entry.dailyCount > 80) {
    return { allowed: false, retryAfter: Math.ceil((entry.dailyResetAt - now) / 1000) };
  }
  if (entry.count > 8) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  return { allowed: true };
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.dailyResetAt) rateLimitMap.delete(ip);
  }
}, 300000);

/** 词条正文（当前词条 + 相关词条）的固定字符上限 */
const MAX_CONTEXT_ENTRIES = 6;
const MAX_CONTEXT_CHARS = 12000;

/**
 * 最大上下文窗口：128k token（自设预算，非模型硬限）。
 * gemini-flash-latest（Gemini 2.5 Flash）实际输入上下文为 1M token，
 * 这里主动收窄到 128k，避免单次请求成本失控。
 */
const MAX_CONTEXT_TOKENS = 128_000;

/** 最大输出 token */
const MAX_OUTPUT_TOKENS = 12_800;

/** 滑动窗口：最多保留最近 12 轮（user+assistant 共 24 条） */
const MAX_HISTORY_MESSAGES = 24;
/** 单条消息硬上限：超出该值的旧消息直接丢弃（不报错） */
const MAX_MESSAGE_CHARS = 4000;

/**
 * 粗略估算 token 数。
 *
 * 中文约 1 字 ≈ 1 token，英文约 4 字符 ≈ 1 token。这里按「保守放大」口径估算：
 * 中日韩字符按 1 token/字，其余按 1 token/3 字符，宁可高估也不低估，
 * 避免实际请求超出预算被网关截断。
 */
function estimateTokens(text: string): number {
  let cjk = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (
      (code >= 0x3000 && code <= 0x9fff) || // CJK 标点 + 汉字
      (code >= 0xf900 && code <= 0xfaff) || // 兼容汉字
      (code >= 0xff00 && code <= 0xffef) // 全角字符
    ) {
      cjk++;
    }
  }
  const rest = text.length - cjk;
  return cjk + Math.ceil(rest / 3);
}

type ChatMsg = { role: "user" | "assistant"; content: string };

/**
 * 滑动截断历史，保证「永不因为聊太久而报错」。
 *
 * 规则（从后往前保留，保证最后一条提问一定在）：
 * 1. 先丢弃内容超长 / 内容为空的旧消息；
 * 2. 再由新到旧累加，同时受两条约束：条数上限、token 预算；
 * 3. 截断后若首条是 assistant，丢掉它——历史必须以 user 开头（部分网关会对
 *    首条 assistant 报错，也避免出现「凭空生成的回答」）；
 * 4. 最后一条 user 消息（当前提问）始终保留，哪怕超出预算。
 *
 * 注意：最后一条提问保留时也不做裁剪，因此若单条提问本身就超出整个
 * 上下文窗口，请求仍会失败——但这属于「单条消息超过窗口」的极端情况，
 * 有 MAX_MESSAGE_CHARS 兜底。
 */
function trimHistory(messages: ChatMsg[], budgetTokens: number): ChatMsg[] {
  const usable = messages.filter(
    (m) => typeof m.content === "string" && m.content.length > 0 && m.content.length <= MAX_MESSAGE_CHARS,
  );
  if (usable.length === 0) return [];

  const kept: ChatMsg[] = [];
  let tokens = 0;
  for (let i = usable.length - 1; i >= 0; i--) {
    const msg = usable[i];
    const isLast = i === usable.length - 1;
    const msgTokens = estimateTokens(msg.content);
    // 当前提问无论如何都带上，否则会答非所问
    if (!isLast) {
      if (kept.length >= MAX_HISTORY_MESSAGES) break;
      if (tokens + msgTokens > budgetTokens) break;
    }
    kept.push(msg);
    tokens += msgTokens;
  }
  kept.reverse();

  // 历史必须以 user 开头
  while (kept.length > 0 && kept[0].role === "assistant") kept.shift();

  // 极端情况：截断后没有 user（比如全是 assistant），退化为只带最后一条 user
  if (!kept.some((m) => m.role === "user")) {
    const lastUser = [...usable].reverse().find((m) => m.role === "user");
    return lastUser ? [lastUser] : [];
  }

  return kept;
}

function renderEntry(entry: NonNullable<ReturnType<typeof getEntry>>): string {
  const parts = [
    `### ${entry.term}${entry.abbr ? `（${entry.abbr}）` : ""}`,
    entry.fullName ? `全称：${entry.fullName}` : "",
    entry.oneLiner,
    entry.body.join("\n\n"),
    entry.points?.length ? entry.points.map((p) => `- ${p}`).join("\n") : "",
    entry.source ? `来源：${entry.source.label} ${entry.source.href}` : "",
  ];
  return parts.filter(Boolean).join("\n");
}

/** 用中文/英文分词粗略匹配同 wiki 内相关词条，作为补充上下文 */
function relatedTerms(excludeIds: Set<string>, query: string, slug: string, limit: number) {
  const q = query.toLowerCase();
  if (q.length < 2) return [];
  const tokens = q
    .split(/[\s，。？！、；：,.?!;:()（）【】\[\]"'`~～\-—+*/\\|]+/)
    .filter((t) => t.length >= 2);

  const pool = WIKI_ENTRIES.filter((e) => e.wikiSlug === slug && !excludeIds.has(e.id));

  const scored = pool
    .map((e) => {
      const hay = `${e.term} ${e.abbr ?? ""} ${e.fullName ?? ""} ${e.oneLiner}`.toLowerCase();
      let score = 0;
      for (const t of tokens) if (hay.includes(t)) score += t.length;
      return { entry: e, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.entry);
}

function buildSystemPrompt(entryId: string, question: string): string {
  const entry = entryId ? getEntry(entryId) : undefined;
  const wiki = entry ? getWikiMeta(entry.wikiSlug) : undefined;

  const contextBlocks: string[] = [];
  if (entry) contextBlocks.push(renderEntry(entry));

  // 常驻面板历史跨词条共享，提问可能已切到别的主题：
  // 不锁定当前词条的 wiki，而是同时搜两套词库，由关键词决定相关词条。
  let budget = MAX_CONTEXT_CHARS - contextBlocks.join("\n\n").length;
  const candidateSlugs: ("pm" | "ai")[] = entry
    ? [entry.wikiSlug, entry.wikiSlug === "pm" ? "ai" : "pm"]
    : ["pm", "ai"];
  const seen = new Set<string>(entry ? [entry.id] : []);
  const related: typeof WIKI_ENTRIES = [];
  for (const slug of candidateSlugs) {
    for (const rel of relatedTerms(seen, question, slug, MAX_CONTEXT_ENTRIES)) {
      if (!seen.has(rel.id)) {
        related.push(rel);
        seen.add(rel.id);
      }
    }
  }
  for (const rel of related) {
    const block = renderEntry(rel);
    if (block.length > budget) break;
    budget -= block.length;
    contextBlocks.push(block);
  }

  const scope = wiki
    ? `当前知识库：《${wiki.name}》（${wiki.tagline}）。`
    : "当前知识库：Winston 的 AI PM 知识库（《产品方法论》+《AI 技术》两套）。";

  return `你是 Winston 个人网站知识库（wiki）里的 AI 助手，帮读者理解站点上的词条内容。

${scope}
${entry ? `读者当前正在阅读的词条是「${entry.term}」。` : "读者现在不在具体词条页上。"}下面是词条正文以及可能相关的词条，作为你的知识来源：

<context>
${contextBlocks.join("\n\n---\n\n")}
</context>

回答要求：
1. **以 context 为主要依据**。context 里有答案就用它，可以展开解释、举例子、补充你的通用知识，但要与词条内容保持一致。
2. context 里没有的直接答案时，明确说"词条里没写这块"，然后基于通用产品/AI 知识给出你自己的解释，并标注这是补充说明。
3. 不要编造 Winston 的个人经历、项目数据或词条里不存在的引用来源。
4. 默认用中文回答，术语保留英文原名（如 JTBD、PMF、RAG）。
5. 篇幅克制：一般 2-5 句或一个小列表，能一句话说清就别写三段。
6. 用 markdown 组织（列表 / 加粗 / 代码），但不要用一级标题，不要输出整篇文档。
7. 如果读者问的是完全无关的话题（比如天气），一句话说明你只负责这个知识库，再引导回词条。`;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return new Response(
      JSON.stringify({ error: "问得有点快啦，稍等一会儿再试～" }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": String(retryAfter || 60) },
      },
    );
  }

  let messages: { role: "user" | "assistant"; content: string }[];
  let entryId: string;
  try {
    const body = await req.json();
    messages = body.messages;
    // entryId 可选：常驻面板的对话历史跨页面共享，
    // 提问时可能已经切到别的词条页，缺失时按全局知识库回答。
    entryId = typeof body.entryId === "string" ? body.entryId : "";
    // 历史长度不再作为报错条件：超长由 trimHistory 按预算滑动截断。
    // 这里只挡「结构上无法处理」的请求（空数组 / 非法 role）。
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "消息格式不对，刷新页面再试一次？" }), {
        status: 400,
      });
    }
    for (const msg of messages) {
      if (msg.role !== "user" && msg.role !== "assistant") {
        return new Response(JSON.stringify({ error: "消息格式不对，刷新页面再试一次？" }), {
          status: 400,
        });
      }
      // content 必须是字符串；长度不做上限报错，超长由 trimHistory 丢弃
      if (typeof msg.content !== "string") {
        return new Response(JSON.stringify({ error: "消息格式不对，刷新页面再试一次？" }), {
          status: 400,
        });
      }
    }
  } catch {
    return new Response(JSON.stringify({ error: "请求解析失败，再试一次？" }), { status: 400 });
  }

  // entryId 给了就必须有效；没给则退化为全局知识库问答。
  if (entryId && !getEntry(entryId)) entryId = "";

  const apiKey =
    process.env.WIKI_AI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "AI 助手还没接上模型服务（缺少 API 配置），请稍后再来" }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  // 上下文预算分配：先给 system prompt（含词条正文）固定额度，
  // 剩余全部留给对话历史；历史超出则从最旧一轮开始丢。
  const CONTEXT_BUDGET_TOKENS = MAX_CONTEXT_TOKENS - MAX_OUTPUT_TOKENS;
  // 关键词检索用用户原始提问（截断前），不受历史裁剪影响
  const lastUserRaw = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const systemPrompt = buildSystemPrompt(entryId, lastUserRaw);
  const systemTokens = estimateTokens(systemPrompt);
  const historyBudget = Math.max(0, CONTEXT_BUDGET_TOKENS - systemTokens);

  // 超长历史按剩余预算滑动截断（保留最近若干轮），用户不会因为聊太久而收到报错
  const trimmed = trimHistory(messages, historyBudget);
  if (trimmed.length === 0) {
    return new Response(JSON.stringify({ error: "消息格式不对，刷新页面再试一次？" }), {
      status: 400,
    });
  }

  let stream;
  try {
    stream = await getClient().chat.completions.create({
      model: getModel(),
      messages: [{ role: "system", content: systemPrompt }, ...trimmed],
      stream: true,
      max_tokens: MAX_OUTPUT_TOKENS,
    });
  } catch (err) {
    const apiErr = err as { status?: number; message?: string; error?: { message?: string } };
    const detail = apiErr?.error?.message || apiErr?.message || "模型服务暂时不可用";
    return new Response(
      JSON.stringify({ error: `AI 助手暂时连不上模型服务：\n${detail}` }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices[0]?.delta as
            | { content?: string | null; reasoning_content?: string | null }
            | undefined;
          // 推理模型（如 gemini-3.x）把思考过程放在 reasoning_content。
          // 这里把它作为独立的 thinking 事件传给前端，在回答气泡上方实时展示，
          // 让用户在等待期间看到「模型在想什么」而不是干等。
          // 注意：思考与正文是两条独立通道，不能混进 text（否则会污染回答）。
          const reasoning = delta?.reasoning_content;
          if (reasoning) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ thinking: reasoning })}\n\n`),
            );
          }
          const text = delta?.content;
          if (text) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      } catch (err) {
        const message = err instanceof Error ? err.message : "生成中断";
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: `回复中断：${message}` })}\n\n`),
        );
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
