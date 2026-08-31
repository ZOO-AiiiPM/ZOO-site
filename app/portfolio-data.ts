export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
  evidence: string;
}

export interface PortfolioProject {
  title: string;
  tagline: string;
  introduction: string;
  role: string;
  links: Array<{ label: string; value: string; href?: string }>;
  visual: "insight" | "persona";
}

export const experiences: Experience[] = [
  {
    company: "某 AI 产品团队（Mock）",
    role: "AI 产品经理实习生",
    period: "2026.03 — NOW",
    summary: "参与 AI 功能从需求发现、方案定义到灰度验证的完整链路。",
    details: [
      "整理访谈与反馈，将模糊问题收束为可验证的产品假设。",
      "协同算法与设计完成交互原型，推动关键路径进入灰度测试。",
      "建立效果反馈表，持续记录命中率、失败原因与用户行为。",
    ],
    evidence: "Discovery / AI Product / Delivery",
  },
  {
    company: "某互联网平台（Mock）",
    role: "产品实习生",
    period: "2025.06 — 2025.12",
    summary: "围绕内容消费链路，参与用户研究与版本迭代。",
    details: [
      "从客服工单和行为数据中归纳高频问题，形成需求优先级。",
      "完成关键页面原型与埋点方案，跟进研发、测试与上线验收。",
      "复盘版本数据并补充后续实验建议。",
    ],
    evidence: "Research / Prototyping / Analytics",
  },
  {
    company: "校园创新项目（Mock）",
    role: "产品负责人",
    period: "2024.09 — 2025.05",
    summary: "从一个真实校园问题出发，带领小组做出第一版可用产品。",
    details: [
      "完成 20+ 次轻量访谈，识别核心场景与非目标用户。",
      "用低保真原型验证流程，再逐步收敛功能范围。",
      "组织两轮小范围试用，以反馈推动下一版迭代。",
    ],
    evidence: "0→1 / Facilitation / Validation",
  },
];

export const projects: PortfolioProject[] = [
  {
    title: "mewmo",
    tagline: "最懂你的个性化 AI 学习和创作助手",
    introduction:
      "一个围绕个人兴趣与长期知识积累设计的 AI 学习和创作助手，帮助用户把分散素材整理成可继续思考与创作的上下文。",
    role: "Product / Prototype",
    links: [
      { label: "WEBSITE", value: "待补充" },
      { label: "GITHUB", value: "待补充" },
    ],
    visual: "insight",
  },
  {
    title: "Ask Winston",
    tagline: "让招聘方不只读简历，还能继续追问我",
    introduction:
      "Ask Winston 是内置在个人网站中的 AI 分身。它把静态作品集变成一次可以继续探索的对话，并为每个回答保留个人事实边界。",
    role: "Product / Design / Build",
    links: [
      { label: "WEBSITE", value: "体验产品 ↗", href: "/ask-zoo" },
      { label: "GITHUB", value: "待补充" },
    ],
    visual: "persona",
  },
];

export const skillRows = [
  {
    capability: "研究与定义",
    tools: "访谈 · 竞品分析 · 用户旅程",
    evidence: "从反馈噪音中识别真正问题",
  },
  {
    capability: "数据与验证",
    tools: "SQL · 埋点 · A/B Test",
    evidence: "把主观判断变成可检验假设",
  },
  {
    capability: "原型与交付",
    tools: "Figma · Framer · Vibe Coding",
    evidence: "快速做出可讨论、可运行的版本",
  },
  {
    capability: "AI 产品化",
    tools: "LLM · Agent · Eval",
    evidence: "理解能力边界，也设计失败体验",
  },
  {
    capability: "协作与推进",
    tools: "PRD · Roadmap · Facilitation",
    evidence: "让不同角色围绕同一个结果行动",
  },
];
