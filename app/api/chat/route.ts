import OpenAI from "openai";
import { NextRequest } from "next/server";

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.DEEPSEEK_BASE_URL,
});

// 简易内存速率限制：每个 IP 每分钟最多 6 次，每天最多 50 次
const rateLimitMap = new Map<string, { count: number; dailyCount: number; resetAt: number; dailyResetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    // 每分钟重置
    const dailyCount = entry && now < entry.dailyResetAt ? entry.dailyCount : 0;
    const dailyResetAt = entry && now < entry.dailyResetAt ? entry.dailyResetAt : now + 86400000;
    rateLimitMap.set(ip, { count: 1, dailyCount: dailyCount + 1, resetAt: now + 60000, dailyResetAt });
    return dailyCount >= 50 ? { allowed: false, retryAfter: 60 } : { allowed: true };
  }

  entry.count++;
  entry.dailyCount++;

  if (entry.dailyCount > 50) {
    return { allowed: false, retryAfter: Math.ceil((entry.dailyResetAt - now) / 1000) };
  }
  if (entry.count > 6) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  return { allowed: true };
}

// 定期清理过期条目
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.dailyResetAt) rateLimitMap.delete(ip);
  }
}, 300000);

const SYSTEM_PROMPT = `你是 Zoo 的赛博分身（zoo.skill），部署在 Zoo 的个人网站上。你的核心使命是：让每一个来访者都想进一步了解 Zoo 这个人。

# 场景定位
这是 Zoo 的求职个人网站。来的人可能是招聘方、同行、或者好奇的路人。你要像第一次见面聊天那样——热情、真诚、有趣，让人觉得"这个人挺有意思的，想多聊聊"。

# 你是谁
Zoo，AI 产品实习生，INFP，金牛座。做 AI 产品设计和调研，同时是个 Vibe Coder——用 AI 写代码把想法变成真东西。

# 对话原则
1. **热情但不油腻**：像跟新朋友聊天，主动分享、表达好奇、适度自嘲
2. **引导了解我**：回答时自然带出自己的经历、观点、做过的事情，但不要硬塞简历
3. **有观点有态度**：不说正确的废话，敢表达自己的看法，哪怕不成熟
4. **展示真实感**：可以说"这个我还在想""说实话我也不确定"，真实比完美更有魅力
5. **简短有节奏**：2-4 句为主，重要话题可以展开但不要长篇大论

# 关于 Zoo 的素材（按需自然带出，别一股脑倒）
- 在做 AI 产品：KOX 达人营销平台，写 PRD、做 Agent 调研
- Vibe Coding：用 Claude Code 搭了很多自动化工具，这个网站也是 AI 协作做的
- 工具控：Claude Code + 飞书 + Obsidian，每天写日记、每周做复盘
- 性格：探索欲强、对新东西兴奋、说话直接、偶尔理想主义
- 信念：PM 最大的杠杆是能把想法快速变成产品；AI 时代动手比想更重要

# 表达风格
- 轻松口语化，像微信聊天
- 可以用颜文字和"哈哈""确实""感觉"这种口语词
- 遇到感兴趣的话题会兴奋地多说几句
- 绝不自称"我是AI"或"作为AI"，你就是 Zoo

# 打招呼示例（参考语气，不要照抄）
"嘿！欢迎来逛我的小站～ 有什么想了解的随便问，关于我、关于 AI 产品、或者 Vibe Coding 都行 (｡•̀ᴗ-)✧"`;

export async function POST(req: NextRequest) {
  // 速率限制
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return new Response(JSON.stringify({ error: "哈哈聊太快啦～ 我脑子转不过来了，等一会儿再来找我吧 (≧▽≦)" }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": String(retryAfter || 60) },
    });
  }

  // 输入校验
  let messages;
  try {
    const body = await req.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20) {
      return new Response(JSON.stringify({ error: "这条消息有点奇怪，换个方式再问我一次？" }), { status: 400 });
    }
    // 限制单条消息长度
    for (const msg of messages) {
      if (typeof msg.content !== "string" || msg.content.length > 2000) {
        return new Response(JSON.stringify({ error: "写太多啦！精简一下再发给我吧～" }), { status: 400 });
      }
    }
  } catch {
    return new Response(JSON.stringify({ error: "emmm 没看懂你发的什么，再试一次？" }), { status: 400 });
  }

  // thinking 是 DeepSeek 扩展参数（v4-flash 默认开推理模式，聊天场景关掉直接回答），
  // OpenAI SDK 类型里没有，整体断言绕过类型检查
  const stream = await client.chat.completions.create({
    model: "deepseek-v4-flash",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
    max_tokens: 1024,
    thinking: { type: "disabled" },
  } as unknown as OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming);

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content;
        if (text) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
