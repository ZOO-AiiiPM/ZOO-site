// Wiki 搜索：跨知识库检索词条。
//
// 设计取向与 AI 助手的 relatedTerms 一致：纯前端、零依赖、字面匹配。
// 但这里是「人主动搜」，要求不同：
// - 必须同时搜标题与正文（用户会搜正文里出现但标题没有的词）
// - 必须有稳定排序（标题命中 > 正文命中，同分按词条原顺序）
// - 需要给出命中片段，让用户知道为什么这条被搜出来

import { WIKI_ENTRIES, WIKI_META, type WikiEntry } from "@/app/wiki/data";

export interface WikiSearchHit {
  entry: WikiEntry;
  /** 该词条属于当前正在浏览的知识库（用于分组置顶） */
  isCurrentWiki: boolean;
  /** 命中来源：标题级字段 or 正文 */
  matchIn: "title" | "body";
  /** 命中片段（正文命中时截取上下文；标题命中时为 oneLiner） */
  snippet: string;
  /** 片段中需要高亮的词（已去重、按长度降序） */
  highlights: string[];
  /** 标题级字段里命中的词（用于高亮词条名本身） */
  titleHighlights: string[];
  score: number;
}

/** 低于该分数的结果视为噪声，不展示 */
const MIN_SCORE = 4;

/**
 * 把查询切成可匹配的片段。
 *
 * 中文没有空格，整句 substring 匹配几乎必然失败（AI 助手那边就是这个毛病）。
 * 这里对中文额外做 bigram 切分：`用户研究` → `用户` / `户研` / `研究`，
 * 只要正文里出现其中任意一个双字片段就能命中。英文按空白与标点切词。
 */
export function tokenize(query: string): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const segments = q
    .split(/[\s，。？！、；：,.?!;:()（）【】\[\]"'`~～\-—+*/\\|<>《》]+/)
    .filter(Boolean);

  const tokens = new Set<string>();
  for (const seg of segments) {
    if (seg.length < 2) continue;
    // 含中日韩字符 → 额外产生 bigram，提升中文召回
    const hasCjk = /[\u3000-\u9fff\uf900-\ufaff\uff00-\uffef]/.test(seg);
    tokens.add(seg);
    if (hasCjk) {
      for (let i = 0; i + 2 <= seg.length; i++) tokens.add(seg.slice(i, i + 2));
    } else if (seg.length >= 4) {
      // 长英文词也做前缀片段，避免只匹配完整词
      tokens.add(seg);
    }
  }
  return [...tokens].filter((t) => t.length >= 2);
}

/** 标题级字段：命中权重最高 */
function titleHaystack(entry: WikiEntry): string {
  return `${entry.term} ${entry.abbr ?? ""} ${entry.fullName ?? ""}`.toLowerCase();
}

/** 简介：次高权重（它是词条的「一句话定义」，语义最浓缩） */
function oneLinerHaystack(entry: WikiEntry): string {
  return entry.oneLiner.toLowerCase();
}

/** 正文：权重最低，但覆盖面最广 */
function bodyText(entry: WikiEntry): string {
  return [...entry.body, ...(entry.points ?? [])].join("\n").toLowerCase();
}

/** 从正文里截取命中位置周围的片段（按字符切，尽量对齐到句子边界） */
function makeSnippet(text: string, token: string, radius = 46): string {
  const idx = text.toLowerCase().indexOf(token.toLowerCase());
  if (idx < 0) return "";
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + token.length + radius);
  let snippet = text.slice(start, end);
  // 去掉 markdown 噪声，让片段更易读
  snippet = snippet.replace(/^#{1,6}\s*/gm, "").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  return `${start > 0 ? "…" : ""}${snippet}${end < text.length ? "…" : ""}`;
}

/**
 * 搜索词条。
 *
 * @param query      查询串
 * @param currentSlug 当前所在 wiki（结果里优先展示），非 wiki 页可传 undefined
 * @param limit      最多返回条数
 */
export function searchWiki(
  query: string,
  currentSlug?: string,
  limit = 12,
): WikiSearchHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const hits: WikiSearchHit[] = [];

  // 完整查询串（未做 bigram 拆分的原始片段）——命中原词额外加成，
  // 避免「大模型」把「Kano 模型」（bigram「模型」命中）排在「大语言模型」前面。
  const fullSegments = query
    .trim()
    .toLowerCase()
    .split(/[\s，。？！、；：,.?!;:()（）【】\[\]"'`~～\-—+*/\\|<>《》]+/)
    .filter((s) => s.length >= 2);

  for (const entry of WIKI_ENTRIES) {
    const title = titleHaystack(entry);
    const oneLiner = oneLinerHaystack(entry);
    const body = bodyText(entry);

    let score = 0;
    const matched: string[] = [];
    const titleMatched: string[] = [];
    let matchIn: "title" | "body" = "body";
    let snippet = "";

    // 原词完整命中：最高优先
    for (const seg of fullSegments) {
      if (title.includes(seg)) {
        score += 40 + seg.length * 2;
        matched.push(seg);
        titleMatched.push(seg);
        matchIn = "title";
      } else if (oneLiner.includes(seg)) {
        score += 20;
        matched.push(seg);
      } else if (body.includes(seg)) {
        score += 8;
        matched.push(seg);
        if (!snippet) {
          snippet = makeSnippet([...entry.body, ...(entry.points ?? [])].join("\n"), seg);
        }
      }
    }

    for (const token of tokens) {
      // bigram / 分词命中：权重随长度递减，长片段比双字片段更有信息量
      const weight = token.length >= 4 ? 6 : token.length === 3 ? 4 : 2;
      if (title.includes(token)) {
        score += weight * 3;
        matched.push(token);
        titleMatched.push(token);
        matchIn = "title";
        continue;
      }
      // 简介命中
      if (oneLiner.includes(token)) {
        score += weight * 2;
        matched.push(token);
        continue;
      }
      // 正文命中：且只取第一次命中做片段
      if (body.includes(token)) {
        score += weight;
        matched.push(token);
        if (!snippet) {
          snippet = makeSnippet(
            [...entry.body, ...(entry.points ?? [])].join("\n").toLowerCase(),
            token,
          );
        }
      }
    }

    if (matched.length === 0) continue;

    // 命中 token 越多越相关（避免长词条靠单个短词霸榜）
    score += Math.min(matched.length, 5) * 2;

    // 字符覆盖率：查询的每个字在标题/简介里出现过多少。
    // 解决「大模型」搜不到「大语言模型」的问题——bigram「大模」命不中，
    // 但「大」「模」「型」都在标题里，覆盖率 100%，应该提权。
    // 注意：只算标题+简介，不算正文——正文太长几乎必然全覆盖，无区分度。
    const queryChars = [...new Set(query.trim().toLowerCase().replace(/\s/g, ""))];
    if (queryChars.length > 0) {
      const headHay = `${title} ${oneLiner}`;
      const covered = queryChars.filter((ch) => headHay.includes(ch)).length;
      const ratio = covered / queryChars.length;
      // 只奖励高覆盖率，低覆盖率不加分
      if (ratio >= 0.7) score += Math.round(ratio * 14);
    }

    // 弱命中降权：只靠单个 2 字 bigram 命中的正文匹配，多半是噪声
    // （如搜「不存在的东西」时正文里的「存在」「东西」）。
    // 这类结果保留但不应该排到真命中前面。
    const hasStrongMatch = fullSegments.some(
      (seg) => title.includes(seg) || oneLiner.includes(seg) || body.includes(seg),
    );
    const onlyWeakBigram =
      fullSegments.length > 0 &&
      !hasStrongMatch &&
      matched.every((t) => t.length <= 2) &&
      matchIn === "body";
    if (onlyWeakBigram) score -= 8;

    // 当前 wiki 提权：只做同分附近的 tiebreaker，
    // 不能大到翻转「匹配质量」的差距（否则 pm 视图里 Kano 会压过更相关的结果）
    const isCurrentWiki = currentSlug ? entry.wikiSlug === currentSlug : false;
    if (isCurrentWiki) score += 3;

    const inner = matched.filter((t) => t.length >= 2);
    hits.push({
      entry,
      isCurrentWiki,
      matchIn,
      snippet: snippet || entry.oneLiner,
      // 高亮词：长的优先，避免短词覆盖长词
      highlights: [...new Set(inner)].sort((a, b) => b.length - a.length).slice(0, 6),
      titleHighlights: [...new Set(titleMatched)].sort((a, b) => b.length - a.length),
      score,
    });
  }

  // 稳定排序：分数降序 → 当前 wiki 优先 → 保持 data.ts 里的原始顺序
  const order = new Map<string, number>(WIKI_ENTRIES.map((e, i) => [e.id, i] as const));
  hits.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.isCurrentWiki !== b.isCurrentWiki) return a.isCurrentWiki ? -1 : 1;
    return (order.get(a.entry.id) ?? 0) - (order.get(b.entry.id) ?? 0);
  });

  // 最低分阈值：过滤掉只靠一个 2 字 bigram 偶然命中正文的噪声
  // （如搜「不存在的东西」时命中正文里的「存在」）。
  // 标题/简介命中得分远高于此，不会被误伤。
  return hits.filter((h) => h.score >= MIN_SCORE).slice(0, limit);
}

/** 按 wiki 分组，当前 wiki 在前（分组顺序取 WIKI_META 的声明顺序，与 slug 解耦） */
export function groupHits(
  hits: WikiSearchHit[],
): { slug: string; label: string; hits: WikiSearchHit[] }[] {
  const groups: { slug: string; label: string; hits: WikiSearchHit[] }[] = [];
  for (const wiki of WIKI_META) {
    const group = hits.filter((h) => h.entry.wikiSlug === wiki.slug);
    if (group.length === 0) continue;
    groups.push({
      slug: wiki.slug,
      label: wiki.name,
      hits: group,
    });
  }
  // 兜底：命中条目所属 wiki 未在 WIKI_META 中声明时，也要能展示出来
  const known = new Set(groups.map((g) => g.slug));
  for (const h of hits) {
    if (known.has(h.entry.wikiSlug)) continue;
    known.add(h.entry.wikiSlug);
    groups.push({
      slug: h.entry.wikiSlug,
      label: h.entry.wikiSlug,
      hits: hits.filter((x) => x.entry.wikiSlug === h.entry.wikiSlug),
    });
  }
  // 当前 wiki 所在分组置顶
  const currentIdx = groups.findIndex((g) => g.hits.some((h) => h.isCurrentWiki));
  if (currentIdx > 0) {
    const [g] = groups.splice(currentIdx, 1);
    groups.unshift(g);
  }
  return groups;
}
