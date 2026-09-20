// ⚠️ 自动生成，请勿手改 —— 由 进行中/llm wiki/scripts/publish.py 产出
// 要改内容：编辑 进行中/llm wiki/wiki/**/*.md 后重新发布
import type { WikiMeta, WikiEntry } from "./data";

export const AGENT_SESSION_ENTRIES: WikiEntry[] = [
{
  "id": "as-overview-index",
  "updatedAt": "2026-09-20",
  "wikiSlug": "agent-session",
  "term": "Agent Session Wiki",
  "oneLiner": "Agent Session Wiki",
  "body": [
    "## 结论\n这是从日常 agent 会话中提炼的知识库。**它记录的不是\"做了什么\"，而是\"想清楚了什么\"。**",
    "## 五个类别\n\n| 类别 | 是什么 |\n|---|---|\n| 外部源 | 研究一篇文章/书时的摘要 + 原文链接 |\n| 概念 | 碎片知识，按类别聚合 |\n| 项目 | 正在进行的项目沉淀 |\n| 跨源综述 | 综合多个来源得出的判断 |",
    "## 当前规模（由 lint 每周更新）\n- 外部源：0\n- 概念：0\n- 项目：0\n- 跨源综述：0"
  ]
},
{
  "id": "as-concept-nominal-context-untrustworthy",
  "updatedAt": "2026-09-20",
  "wikiSlug": "agent-session",
  "term": "标称上下文不可信",
  "oneLiner": "标称上下文不可信",
  "body": [
    "## 结论\n**模型对外声明的上下文长度是广告值，不是测量值。** 真正的限制要去读源码里的硬编码，或自己实测。",
    "## 为什么会这样\n标称值走的是对外接口（`/v1/models` 原样透传），而真实闸门在服务端的字符数限制里，两者不联动。超限往往**不报错，而是静默降级**（打包上传 / 分块拼接）。",
    "## 判断方法\n1. 别信 `/v1/models` 的 `max_input_tokens`\n2. 找源码里的 `*_limits` 常量\n3. 用长输入实测，看是报错还是悄悄变慢"
  ]
},
];

export const AGENT_SESSION_META: WikiMeta = {
  slug: "agent-session",
  name: "Agent Session Wiki",
  tagline: "与 AI Agent 对话中沉淀的知识",
  description: "从日常 agent 会话中提炼的知识库。按总览 / 外部源 / 概念 / 项目 / 跨源综述组织。",
  accent: "green",
  icon: "🤖",
  chapters: [
    {
      id: "ch-总览",
      title: "总览",
      entries: [
        { id: "as-overview-index" },
      ],
    },
    {
      id: "ch-LLM 工程",
      title: "LLM 工程",
      entries: [
        { id: "as-concept-nominal-context-untrustworthy" },
      ],
    },
  ],
};
