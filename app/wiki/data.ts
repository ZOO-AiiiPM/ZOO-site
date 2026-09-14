// Wiki 元数据 + 索引
// 两套 Wiki：产品方法论（PM 视角）+ AI 技术（工程师视角）

export interface WikiMeta {
  slug: "pm" | "ai";
  name: string;          // "产品方法论"
  tagline: string;      // "PM 视角：思维模型 / 方法论 / 用户研究"
  description: string;  // 简介（卡片描述）
  chapters: WikiChapter[]; // 章节目录（左侧 sidebar）
  accent: "green" | "purple" | "pink" | "gold"; // 主色调
}

export interface WikiChapter {
  id: string;        // 用于 hash & sidebar 选中
  title: string;
  entries: WikiEntryRef[]; // 引用 term id（来自 entries 表）
}

export interface WikiEntryRef {
  id: string;        // entries 表中的 term id
}

// 通用词条池（mock，最终内容由用户提供）
export interface WikiEntry {
  id: string;
  updatedAt: string; // 更新时间（YYYY-MM-DD，mock）
  wikiSlug: "pm" | "ai";
  term: string;
  abbr?: string;
  fullName?: string;
  oneLiner: string;
  body: string[];      // 段落 mock（每段一段，可含 ## 二级标题约定）
  points?: string[];   // 关键点 bullet
  source?: { label: string; href: string };
}

// ===== 2 套 Wiki 元数据 =====

export const WIKI_META: WikiMeta[] = [
  {
    slug: "pm",
    name: "产品方法论",
    tagline: "PM 视角 · 思维模型 / 方法论 / 用户研究 / 验证实验",
    description:
      "AI 产品经理日常工作用到的思维框架、流程方法、用户研究技巧与验证实验。内容会随实践持续迭代。",
    accent: "purple",
    chapters: [
      {
        id: "frameworks",
        title: "思维模型",
        entries: [
          { id: "jtbd" },
          { id: "nsm" },
          { id: "aarrr" },
          { id: "kano" },
          { id: "circles" },
          { id: "design-sprint" },
        ],
      },
      {
        id: "method",
        title: "产品方法",
        entries: [
          { id: "user-story" },
          { id: "prd" },
          { id: "mece" },
          { id: "moscow" },
          { id: "rice" },
          { id: "ice" },
          { id: "okr" },
          { id: "user-persona" },
          { id: "user-journey" },
        ],
      },
      {
        id: "research",
        title: "用户研究",
        entries: [
          { id: "user-interview" },
          { id: "empathy-map" },
          { id: "usability-test" },
        ],
      },
      {
        id: "growth",
        title: "增长指标",
        entries: [
          { id: "retention" },
          { id: "ltv-cac" },
          { id: "pmf" },
          { id: "nps" },
        ],
      },
      {
        id: "validation",
        title: "决策验证",
        entries: [
          { id: "ab-test" },
          { id: "wizard-of-oz" },
          { id: "fake-door" },
          { id: "concierge" },
        ],
      },
    ],
  },
  {
    slug: "ai",
    name: "AI 技术",
    tagline: "工程师视角 · RAG / Agent / Prompt / 协议 / 评测",
    description:
      "AI 产品必须懂的技术地基：模型能力、检索增强、Agent 架构、Prompt 工程、协议、评测。讲清楚是什么、为什么、怎么做。",
    accent: "purple",
    chapters: [
      {
        id: "model",
        title: "模型基础",
        entries: [
          { id: "llm" },
          { id: "token" },
          { id: "context-window" },
          { id: "embedding" },
        ],
      },
      {
        id: "rag",
        title: "检索增强",
        entries: [
          { id: "rag" },
          { id: "vector-db" },
          { id: "rerank" },
        ],
      },
      {
        id: "agent",
        title: "Agent 与工具",
        entries: [
          { id: "agent" },
          { id: "function-calling" },
          { id: "mcp" },
          { id: "react-loop" },
        ],
      },
      {
        id: "prompt",
        title: "Prompt 工程",
        entries: [
          { id: "prompt-engineering" },
          { id: "cot" },
          { id: "few-shot" },
        ],
      },
      {
        id: "eval",
        title: "评测与微调",
        entries: [
          { id: "fine-tuning" },
          { id: "rlhf" },
          { id: "evals" },
        ],
      },
    ],
  },
];

// ===== 词条池（mock 内容） =====
export const WIKI_ENTRIES: WikiEntry[] = [
  // ----- PM Wiki -----
  {
    id: "jtbd",
    updatedAt: "2026-08-24",
    wikiSlug: "pm",
    term: "Jobs To Be Done",
    abbr: "JTBD",
    fullName: "Jobs To Be Done",
    oneLiner: "用户不是在买产品，而是在「雇佣」产品完成某个具体的 Job。",
    body: [
      "## 是什么\n\nJobs To Be Done（JTBD，待办任务）由 Clayton Christensen 在《创新者的解答》中系统化提出。它的核心断言是：用户购买产品的根本原因不是产品属性，而是他们要完成的某个具体任务（Job）。用户不是「买了一把电钻」，而是「想在墙上挂一幅画」。\n\nJTBD 的标准三段式表述是：**当我在某个情境下 → 我想要达成某个进展 → 以便我能得到某个结果**。情境是这句话里最容易被忽略、也最关键的部分。",
      "## 为什么有用\n\n传统做法从用户画像出发：25 岁、一线城市、女性、月收入 1.5 万。这些标签描述的是「用户是谁」，但那 25 岁女生早上听播客、午休刷短视频、晚上开白噪音——三种行为背后的 Job 完全不同，而画像一个字都没解释。\n\nJTBD 把视角从「这个用户是谁」转向「这个用户此刻想完成什么」。这是它比 Persona 更接近真实决策动因的原因：**用户会换，但 Job 相对稳定**。也正因如此，它能把竞品重新定义为「所有能满足同一个 Job 的方案」——包括用胶带、用钉子、或者干脆不挂了。",
      "## 怎么做\n\n1. **找出 Job，而不是找需求**：需求常是用户自己给的方案（「我想要搜索框」），Job 是背后的进展（「我想在 3 秒内找到上次看过的文章」）。持续追问 why，直到答案不能再往下问。\n2. **锁定情境**：同一个 Job 在不同情境下会被不同方案满足。明确「什么时候、在哪里、和谁一起、有什么约束」。\n3. **画出替代方案清单**：把用户目前所有的 workaround 都列出来。这些 workaround 就是真正的竞品，也是你产品的机会点。\n4. **区分功能性 / 情感性 / 社会性 Job**：选了 Notion 而不选文档，可能不只是「记录」这个功能 Job，还有「显得我很专业」的社会性 Job。",
      "## 常见坑\n\n- **把 Job 写成功能**：「需要导出 PDF」是功能，「需要把方案交给客户审批」才是 Job。\n- **Job 太宽泛**：「想变得更快乐」无法指导产品决策，必须收敛到可验证的进展。\n- **只访谈现有用户**：从未使用过你产品的人，其 Job 被什么方案满足了，往往更有启发性。\n- **忘了非消费情境**：用户没有「雇佣」任何产品，本身就是一个重要的信号。",
    ],
    points: [
      "句式：当我在〔情境〕下，我想要〔进展〕，以便〔结果〕",
      "一个 Job = 一个具体的进展时刻，不是人口统计标签",
      "持续追问 why：把用户给的方案还原成背后的任务",
      "竞品 = 所有能满足同一 Job 的方案，包含 workaround",
      "用户会换，Job 相对稳定——这是比 Persona 更可靠的锚点",
    ],
    source: { label: "Clayton Christensen", href: "https://www.christenseninstitute.org/jobs-to-be-done/" },
  },
  {
    id: "nsm",
    updatedAt: "2026-08-27",
    wikiSlug: "pm",
    term: "North Star Metric",
    abbr: "NSM",
    fullName: "North Star Metric",
    oneLiner: "一个能反映产品核心价值的唯一指标，全公司围绕它对齐。",
    body: [
      "## 是什么\n\nNorth Star Metric（NSM，北极星指标）是一家公司在某个阶段最应该关注的**唯一**指标。它的作用不是衡量业绩，而是让产品、设计、研发、运营在同一张图上讨论问题——所有人的动作最终都要能回答「这件事能不能提升 NSM」。\n\n典型例子：Airbnb = 订晚数（Nights Booked），Spotify = 听歌时长（Time Spent Listening），Facebook 早期 = 月活，Uber = 周完成行程数。注意它们都不是收入——收入是结果，NSM 是价值。",
      "## 好 NSM 的三个判据\n\n1. **反映用户获得的价值**，而非公司获得的收益。日活不算价值，「用户完成了一次核心行为」才算。付费率是滞后结果，不适合做 NSM。\n2. **是领先指标**：它的变化要能**预言**后续收入，而不是事后解释收入为什么涨了。\n3. **可以被团队影响**：如果 NSM 主要由市场大盘决定，团队再努力也推不动，就失去了对齐意义。",
      "## 怎么做\n\n1. 写下你的产品「用户为什么留下来」的一句话答案，这句话里通常藏着 NSM。\n2. 把它转成一个可测量的行为指标（如「每周 ≥3 次有效对话」）。\n3. 拆解成 Input Metrics（输入指标）：新增、激活、频率、留存各一条，让每个团队都认领其中一条。\n4. 配套反指标（Counter-metric）防止作弊：例如 NSM 是时长时，反指标是「投诉率」或「次日卸载率」。",
      "## 常见坑\n\n- **NSM 选成虚荣指标**：注册数、下载量、页面浏览量这类只涨不跌的数字，无法反映真实价值。\n- **用了滞后指标**：把 GMV / 收入当 NSM，团队只能等结果，无法主动干预。\n- **同时要多个 NSM**：如果每个部门都有「自己的北极星」，那实际上没有北极星。\n- **长期不换**：NSM 应随公司阶段变化。早期（PMF）关注留存，增长期关注频率与推荐，成熟期才看收入结构。",
    ],
    points: [
      "反映用户获得的价值，而非公司获得的收益（收入是结果，不是 NSM）",
      "必须是领先指标：能预言后续收入，而非事后解释",
      "必须可被团队影响，否则失去对齐意义",
      "配 Input Metrics 让各团队认领，配反指标防止作弊",
      "Airbnb = 订晚数；Spotify = 听歌时长；Uber = 周完成行程数",
      "随阶段变化：PMF 期看留存，增长期看频率，成熟期看收入结构",
    ],
    source: { label: "Amplitude", href: "https://amplitude.com/blog/north-star-metric" },
  },
  {
    id: "aarrr",
    updatedAt: "2026-08-30",
    wikiSlug: "pm",
    term: "AARRR 海盗指标",
    abbr: "AARRR",
    fullName: "Acquisition · Activation · Retention · Referral · Revenue",
    oneLiner: "Dave McClure 的增长漏斗：拉新 / 激活 / 留存 / 推荐 / 收入。",
    body: [
      "## 概述\n\nAARRR（俗称「海盗指标」）由 500 Startups 创始人 Dave McClure 提出，把用户生命周期切成五个阶段：Acquisition / Activation / Retention / Referral / Revenue。",
      "## 要点\n\n每个阶段都有自己的核心指标和改进手段。诊断产品增长瓶颈时，先定位到具体一个阶段，再针对优化。",
      "## 渲染范例\n\n本节用于验证 Markdown 各元素渲染是否正确：**加粗文本**、*斜体文本*、`行内代码`、[外部链接](https://nextjs.org)，以及下面的代码块、表格、引用与列表。\n\n### 代码块\n\n```js\n// RICE 评分计算示例\nfunction riceScore(reach, impact, confidence, effort) {\n  const score = (reach * impact * confidence) / effort;\n  return score.toFixed(1);\n}\n\nconsole.log(riceScore(5000, 2, 0.8, 3)); // => \"2666.7\"\n```\n\n```bash\n# 本地启动开发环境\npnpm install && pnpm dev\n```\n\n### 表格\n\n| 维度 | 含义 | 常见取值 |\n| ---- | ---- | ---- |\n| Reach | 单位时间触达的用户数 | 5000 / 月 |\n| Impact | 对单个用户的影响 | 0.25 - 3 |\n| Confidence | 打分者的信心水平 | 0 - 100% |\n| Effort | 所需投入 | 1 - 8 人月 |\n\n### 引用\n\n> 好的北极星指标是领先指标：它能区分因果，而不是事后解释结果。\n\n### 列表\n\n1. 有序列表第一项\n2. 有序列表第二项\n   - 嵌套无序项 A\n   - 嵌套无序项 B\n3. 有序列表第三项\n\n- [ ] 待办：补充分渠道留存数据\n- [x] 已完成：定义主指标与看板\n\n### 分隔线\n\n这是分隔线上方的段落。\n\n---\n\n这是分隔线下方的段落，用于验证 `hr` 元素渲染正常。",
    ],
    points: [
      "Acquisition → 用户从哪来",
      "Activation → 首次体验是否到位",
      "Retention → 是否回来",
      "Referral → 是否带来新用户",
      "Revenue → 付费 / 商业化",
    ],
    source: { label: "Lean Analytics", href: "https://leananalyticsbook.com/" },
  },
  {
    id: "kano",
    updatedAt: "2026-09-01",
    wikiSlug: "pm",
    term: "Kano 模型",
    abbr: "KANO",
    fullName: "Kano Model",
    oneLiner: "把需求分成基本型 / 期望型 / 兴奋型，决定优先级和资源分配。",
    body: [
      "## 是什么\n\nKano 模型由日本学者 Noriaki Kano 在 1980 年代提出，它把需求按「满足程度」与「用户满意度」之间的非线性关系分成几类。和 RICE / MoSCoW 这类纯排序工具不同，Kano 回答的是另一个问题：**这个功能不做，用户会不会不满？做了，用户会不会惊喜？**\n\n五类需求（前四类最常用）：\n\n| 类型 | 缺失时 | 满足时 | 例（外卖 App） |\n| ---- | ---- | ---- | ---- |\n| 基本型 Must-be | 强烈不满 | 无感（理所当然） | 能下单、不丢单 |\n| 期望型 One-dimensional | 不满 | 越做越满意 | 配送时长、价格 |\n| 兴奋型 Attractive | 无感 | 惊喜、口碑传播 | 智能推荐口味 |\n| 无差异 Indifferent | 无感 | 无感 | 换肤主题 |\n| 反向 Reverse | 满意 | 不满 | 强制看开屏广告 |",
      "## 为什么有用\n\n它的最大价值是纠正一个常见直觉偏差：**并不是所有功能都值得投入，也不是做得好用户就会更满意**。\n\n基本型功能做到 90 分用户毫无感觉，做到 60 分却会立刻流失——所以基本型只求「稳定达标」，不值得过度投入。而期望型功能投入产出接近线性，适合做体验优化。兴奋型功能有巨大的差异化回报，但用户不会主动要求，只能靠洞察。\n\n更重要的是**兴奋型会随着时间沉淀为期望型、再变成基本型**。三年前的「免运费」是兴奋型，今天是基本型。这意味着产品的差异化优势会被时间抹平，必须持续创造新的兴奋点。",
      "## 怎么做\n\n1. **问卷法**：每个功能问两题——「如果产品有这个功能，你觉得如何？」「如果没有，你觉得如何？」各给 5 档（喜欢 / 理应如此 / 无所谓 / 勉强接受 / 不喜欢）。\n2. **查表归类**：按两题答案的组合查 Kano 评价表，得出每个功能的类型。\n3. **算系数**：用 Better 系数（满足后的提升）和 Worse 系数（缺失后的伤害）把结果量化，避免只凭印象。\n4. **落到优先级**：基本型保底 → 期望型做扎实 → 兴奋型用少量资源赌差异化。",
      "## 常见坑\n\n- **把兴奋型当成必做**：兴奋型的特征是「用户不会要求」，靠问卷问「你想要吗」通常问不出来，需要靠行为观察和用户研究。\n- **忽略需求会迁移**：只做一次 Kano 调研就长期沿用，会让产品在基本型上越来越重、差异化越来越少。\n- **样本用户是现有用户**：他们已习惯你的产品，对基本型的敏感度会失真，应引入流失用户和竞品用户。\n- **和 RICE 混用**：Kano 判断「性质」，RICE 判断「排序」，先分类再排序，顺序错了会得出荒谬结论。",
    ],
    points: [
      "基本型 Must-be：缺失即不满，达标也无感——只求稳定，不值得过度投入",
      "期望型 One-dimensional：投入产出接近线性，适合做体验优化",
      "兴奋型 Attractive：用户不会主动要求，只能靠洞察，差异化回报最大",
      "无差异 Indifferent：做与不做都无感，纯浪费资源",
      "反向 Reverse：做了反而让用户不满（如强制开屏广告）",
      "需求会迁移：兴奋型随时间沉淀为期望型，再变成基本型",
      "先分类（Kano）再排序（RICE），顺序反了会得出荒谬结论",
    ],
    source: { label: "Noriaki Kano", href: "https://en.wikipedia.org/wiki/Kano_model" },
  },
  {
    id: "circles",
    updatedAt: "2026-09-03",
    wikiSlug: "pm",
    term: "CIRCLES 框架",
    abbr: "CIRCLES",
    fullName: "CIRCLES Method",
    oneLiner: "Meta / Google PM 面试高频：Comprehend · Identify · Report · Cut · List · Evaluate · Summarize。",
    body: [
      "## 是什么\n\nCIRCLES 是 Lewis Lin 在《Decode and Conquer》中总结的 PM 面试答题框架，被 Meta / Google 等公司的面试评分卡广泛采用。七个字母对应七个答题步骤：\n\n| 步骤 | 含义 |\n| ---- | ---- |\n| **C**omprehend | 理解问题，澄清目标与约束 |\n| **I**dentify | 识别目标用户与利益相关方 |\n| **R**eport | 明确用户需求与痛点 |\n| **C**ut | 缩小范围，砍掉不重要的部分 |\n| **L**ist | 列出解决方案 |\n| **E**valuate | 用统一标准权衡方案 |\n| **S**ummarize | 给出推荐并总结理由 |",
      "## 为什么有用\n\n它不是创新方法论，而是一套**在限定时间内不遗漏关键点**的作答结构。产品设计题的常见失败模式是：面试者拿到题立刻跳到方案，讲了七八个点子却说不清给谁解决什么问题，也没有取舍标准。\n\nCIRCLES 用前四步强行按住「别急着给方案」的冲动——真正的产品判断力体现在 Cut 和 Evaluate：你能否说清为什么不选另一个方案。面试官评分卡里权重最高的通常也是这两步。\n\n它也适用于真实工作：任何一次方案评审，如果你想不起上次为什么否决竞品方案，就是漏了 Evaluate。",
      "## 怎么做\n\n1. **Comprehend**：复述问题，主动澄清。可以问「我们更关心增长还是留存？」这类问题——澄清本身就是加分项。\n2. **Identify**：说出具体用户角色，而非「所有人」。能补一句「先不服务 X 类用户」更好。\n3. **Report**：用一两句话把需求翻译成用户语言，最好带一个具体场景。\n4. **Cut**：明确排除项。「我们今天不讨论支付和合规问题」能显著提升作答密度。\n5. **List**：给 3–5 个**方向不同**的方案，不要给同一方案的三个变体。\n6. **Evaluate**：先定标准（影响面 / 成本 / 风险 / 战略契合），再打分。标准要先说，否则显得像事后找理由。\n7. **Summarize**：给出一个明确推荐 + 一句取舍理由 + 一个验证方式。",
      "## 常见坑\n\n- **跳过 Cut**：不做范围收敛，最后讲得很散，也讲不深任何一点。\n- **Evaluate 没有标准**：只说「方案 A 更好」，说不出好在哪把尺子上。\n- **只给安全方案**：全是「优化搜索」这类无风险无亮点的答案，体现不出产品品味。\n- **忘了验证**：没有「怎么知道做对了」这一步，方案就停在纸面上。\n- **生搬硬套**：这是答题脚手架，不是产品流程。真实工作中评估要跟数据和资源走，不必七步齐全。",
    ],
    points: [
      "Comprehend：理解问题与场景，主动澄清目标",
      "Identify：识别目标用户与利益相关方（不要写「所有人」）",
      "Report：把需求翻译成用户语言 + 具体场景",
      "Cut：明确排除项，收敛范围（最容易被跳过的一步）",
      "List：3–5 个方向不同的方案，而非同一方案变体",
      "Evaluate：先说标准再打分——这是评分权重最高的一步",
      "Summarize：明确推荐 + 取舍理由 + 验证方式",
    ],
  },
  {
    id: "design-sprint",
    updatedAt: "2026-09-05",
    wikiSlug: "pm",
    term: "Google Design Sprint",
    fullName: "Google Design Sprint",
    oneLiner: "5 天从问题到原型到用户验证：Understand / Diverge / Decide / Prototype / Validate。",
    body: [
      "## 是什么\n\nDesign Sprint（设计冲刺）由 Google Ventures 的 Jake Knapp 提出，把原本需要数周的「发现问题 → 出方案 → 用户验证」压缩进 **5 个工作日**，周五结束就能拿到真实用户的反馈。\n\n| 天 | 阶段 | 产出 |\n| ---- | ---- | ---- |\n| 周一 | Understand | 专家访谈、用户地图、定义 Sprint 问题 |\n| 周二 | Diverge | 每人独立 Sketch，不讨论（避免从众） |\n| 周三 | Decide | 投票 + 决策，画出 Storyboard |\n| 周四 | Prototype | 做出可点击的低保真原型 |\n| 周五 | Validate | 5 位真实用户一对一测试 |",
      "## 为什么有用\n\n核心前提是：**低精度原型 + 真实用户 + 紧凑节奏，胜过 高保真方案 + 内部讨论 + 慢节奏**。\n\n传统流程最大的浪费不是做得慢，而是花几个月做出一个没人要的东西。Design Sprint 用时间盒（Timebox）暴力压缩讨论空间：因为周四必须出原型，周三就不能无限争论；因为周五要见用户，周四就不能追求完美。**时间约束本身就是决策机制**。\n\n另一个关键设计是周五只找 5 个用户。雅各布·尼尔森的研究表明 5 个用户就能发现约 85% 的可用性问题——目标是「发现明显的问题」，不是统计显著性。",
      "## 怎么做\n\n1. **选对问题**：Sprint 适合「高风险、高不确定性、方向不明」的题，不适合已知答案的增量优化。\n2. **组队 5–7 人**：必须有决策者（Decider）在场，否则周三决定不了。\n3. **周一请专家**：把用户、销售、客服、技术专家请来各讲 15 分钟，让团队快速获得共同事实基础。\n4. **周三用「超级投票」**：每人 3 票（决策者额外多票），把主观争论变成可见的选择。\n5. **周四用现成工具**：Figma / Keynote 足够，不要写代码。原型的唯一目标是「能让用户以为它是真的」。\n6. **周五别辩解**：在用户面前只观察和记录，不解释、不引导、不辩护。",
      "## 常见坑\n\n- **问题太大**：想在一个 Sprint 里解决「如何提升整体留存」，结果什么都验证不了。必须切成具体场景。\n- **决策者缺席**：没有 Decider，周三无法拍板，节奏立刻崩塌。\n- **原型做得太精致**：把四天都花在打磨视觉上，反而没时间验证核心假设。\n- **用户是同事**：测试对象必须是目标用户，内部同事会出于善意给你假阳性反馈。\n- **做完就结束**：Sprint 的输出不是「上线方案」，而是「下一个要验证什么」——它通常需要再跑 1–2 轮。",
    ],
    points: [
      "周一 Understand：专家访谈 + 用户地图 + 定义 Sprint 问题",
      "周二 Diverge：每人独立 Sketch，不讨论以避免从众",
      "周三 Decide：超级投票 + 选出方案 + 画 Storyboard",
      "周四 Prototype：可点击低保真原型，不写代码",
      "周五 Validate：5 位真实用户一对一测试（能发现约 85% 可用性问题）",
      "时间盒本身就是决策机制：周四必须出原型，周三就不能无限争论",
      "必须有 Decider 在场，否则周三拍不了板",
    ],
    source: { label: "Jake Knapp · Sprint", href: "https://www.thesprintbook.com/" },
  },
  {
    id: "user-story",
    updatedAt: "2026-09-06",
    wikiSlug: "pm",
    term: "用户故事",
    abbr: "US",
    fullName: "User Story",
    oneLiner: "「作为 [谁]，我想 [做什么]，以便 [获得什么价值]」。",
    body: [
      "## 概述\n\nUser Story 是从 XP（Extreme Programming）发展出来的需求表达方式，强调「从用户视角描述价值」，而不是「功能列表」。",
      "## 要点\n\n好的 User Story 应该配合 AC（Acceptance Criteria / 验收条件）才能落地，避免「写完故事就不知道做什么」。",
    ],
    points: [
      "聚焦用户价值，不是任务清单",
      "配合 AC（验收条件）才能落地",
      "尽量可独立交付 / 可测试",
      "INVEST：Independent / Negotiable / Valuable / Estimable / Small / Testable",
    ],
  },
  {
    id: "prd",
    updatedAt: "2026-08-24",
    wikiSlug: "pm",
    term: "PRD",
    abbr: "PRD",
    fullName: "Product Requirements Document",
    oneLiner: "产品需求文档：背景 / 目标 / 用户故事 / 范围 / 非目标 / 上线标准。",
    body: [
      "## 概述\n\nPRD（Product Requirements Document）是团队对齐产品决策的核心文档。一份合格的 PRD 应当回答：「为什么做（why）」、「做什么（what）」、「不做什么（out of scope）」、「做到什么程度算交付（launch criteria）」。",
      "## 要点\n\n活文档：PRD 不是写完就归档，而是随着开发过程中的发现持续更新。",
    ],
    points: [
      "Why > What > How，先把动机讲清楚",
      "明确 Out of Scope 比列出功能更重要",
      "上线标准 = 度量 + 功能完备度 + 风险接受度",
      "活文档，不是写完就归档",
    ],
  },
  {
    id: "mece",
    updatedAt: "2026-08-27",
    wikiSlug: "pm",
    term: "MECE 原则",
    abbr: "MECE",
    fullName: "Mutually Exclusive · Collectively Exhaustive",
    oneLiner: "相互独立 / 完全穷尽：分类时不重不漏。",
    body: [
      "## 概述\n\nMECE 是咨询行业（麦肯锡 / BCG）训练结构化思维的基本功。在做问题拆解、用户分群、市场切片时，MECE 是判断「切得好不好」的核心标准。",
      "## 要点\n\nMECE 不是唯一解，但要选一个口径并守住——否则下游的所有讨论都会乱。",
    ],
    points: [
      "咨询 / 战略 / PM 的最底层结构化能力",
      "优先切维度（用户 / 场景 / 阶段）",
      "切完自检：能列全吗？有重叠吗？",
      "MECE 不是永远唯一解，但要选一个口径并守住",
    ],
  },
  {
    id: "moscow",
    updatedAt: "2026-08-30",
    wikiSlug: "pm",
    term: "MoSCoW 优先级",
    fullName: "MoSCoW Prioritization",
    oneLiner: "Must / Should / Could / Won't：把需求切成四个时间盒子。",
    body: [
      "## 概述\n\nMoSCoW 由 Dai Clegg 首创，是迭代 / 项目排期最常用的优先级法。把需求按「本迭代是否交付」切四档，避免「全部都重要」的窘境。",
      "## 要点\n\nWon't 这一档常被忽略，但它恰恰是最有价值的——公开承诺「本轮不做」能避免需求反复回流。",
    ],
    points: [
      "Must：本迭代不交付就失败的",
      "Should：重要但有 workaround",
      "Could：做了更好，不做也成",
      "Won't：本轮明确不做，公开承诺以避免反复",
    ],
  },
  {
    id: "rice",
    updatedAt: "2026-09-01",
    wikiSlug: "pm",
    term: "RICE 评分",
    abbr: "RICE",
    fullName: "Reach · Impact · Confidence · Effort",
    oneLiner: "用四个维度量化需求优先级：触达 / 影响 / 信心 / 成本。",
    body: [
      "## 概述\n\nRICE 由 Intercom 提出，是把「我感觉这个需求重要」转成「可以对比打分的数字」的标准方法。它解决的核心问题是：当 PM 列需求清单时，stakeholder 怎么快速判断优先级。",
    ],
    points: [
      "Reach：单位时间内影响多少用户",
      "Impact：单用户体验上的影响（0.25 / 0.5 / 1 / 2 / 3）",
      "Confidence：信心百分比",
      "Effort：人月 / 人周",
      "Score = (R × I × C) / E",
    ],
    source: { label: "Intercom", href: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
  },
  {
    id: "ice",
    updatedAt: "2026-09-03",
    wikiSlug: "pm",
    term: "ICE 评分",
    abbr: "ICE",
    fullName: "Impact · Confidence · Ease",
    oneLiner: "RICE 的简化版：去掉 Reach，加上 Ease（实施容易度），常用于增长实验。",
    body: [
      "## 概述\n\nICE 是 RICE 的轻量化版本，省掉 Reach（往往难以精确估算），加 Ease（实施难度的反向），更适合增长团队的实验排序。",
    ],
    points: [
      "适合短周期 / 实验密度高的场景",
      "打分 1-10，三个维度相乘",
      "便于跨团队对齐，不容易陷入细节",
    ],
  },
  {
    id: "okr",
    updatedAt: "2026-09-05",
    wikiSlug: "pm",
    term: "OKR",
    abbr: "OKR",
    fullName: "Objectives & Key Results",
    oneLiner: "目标 + 可量化关键结果：把战略翻译成可衡量承诺。",
    body: [
      "## 概述\n\nOKR 由 Andy Grove 在 Intel 时代开创、John Doerr 引入 Google 后被广泛传播。",
      "## 要点\n\n常见误解：把 OKR 当 KPI。区别是：KPI 是「做到什么」，OKR 是「我们要挑战到什么」——目标定得过低会让 OKR 失去意义。",
    ],
    points: [
      "Objective：定性、有野心、有方向感",
      "Key Results：3-5 条、可量化、有时间限制",
      "完成度 0.6-0.7 是常态，1.0 说明定低了",
      "KR ≠ 任务清单，KR 是「我们怎么知道做到了」",
    ],
  },
  {
    id: "user-persona",
    updatedAt: "2026-09-06",
    wikiSlug: "pm",
    term: "用户画像",
    abbr: "Persona",
    fullName: "User Persona",
    oneLiner: "基于真实调研的虚构典型用户，用来对齐团队对「为谁设计」的理解。",
    body: [
      "## 概述\n\nPersona 是「把用户研究结论浓缩成几个好记的角色」的工具。Alan Cooper 在《About Face》中系统化提出。",
      "## 要点\n\n关键陷阱：基于想象编 Persona 而不是基于调研。Persona 一旦脱离真实数据，整个团队的「对齐」就只是「对想象对齐」。",
    ],
    points: [
      "基于调研，不靠想象",
      "一份 Persona = 一段故事 + 行为模式 + 痛点 + 目标",
      "是工具不是结论，团队用它反推决策",
      "别超过 3-4 个，多了等于没分",
    ],
  },
  {
    id: "user-journey",
    updatedAt: "2026-08-24",
    wikiSlug: "pm",
    term: "用户旅程图",
    abbr: "Journey Map",
    fullName: "User Journey Map",
    oneLiner: "把用户从首次接触到完成目标的整条路径画出来，标注阶段 / 行为 / 情绪 / 触点。",
    body: [
      "## 概述\n\nUser Journey Map 由 Bruce Temkin 等推动在 UX 行业普及，是一种「把用户体验扁平化」的图表工具。",
      "## 要点\n\n通常横向是时间 / 阶段，纵向是用户在不同维度的体验（行为、想法、情绪、痛点、触点）。最值钱的是「情绪曲线」——找到体验最低谷。",
    ],
    points: [
      "横向 = 时间 / 阶段；纵向 = 行为 / 想法 / 情绪 / 痛点",
      "情绪曲线最值钱——找到最低谷",
      "触点 = 你能干预的地方",
      "和 Persona 配套使用",
    ],
  },
  {
    id: "user-interview",
    updatedAt: "2026-08-27",
    wikiSlug: "pm",
    term: "用户访谈",
    fullName: "User Interview",
    oneLiner: "通过一对一对话，理解用户的行为、动机、痛点。",
    body: [
      "## 概述\n\nUser Interview 是定性的研究方法，分两类：Problem Interview（验证问题是否存在 / 多严重）和 Solution Interview（验证方案是否有效）。",
      "## 要点\n\n《The Mom Test》提出三条铁律：聊他们的过去、不要聊你的 idea、不要让受访者对你撒谎。",
    ],
    points: [
      "区分 Problem Interview（验证问题存在）和 Solution Interview（验证方案）",
      "问「上次是什么时候 / 在哪 / 你怎么解决」",
      "不要问「你会用吗」（没人会拒绝免费产品）",
      "5-8 人通常能覆盖 80% 主要发现",
    ],
    source: { label: "The Mom Test", href: "https://www.momtestbook.com/" },
  },
  {
    id: "empathy-map",
    updatedAt: "2026-08-30",
    wikiSlug: "pm",
    term: "Empathy Map",
    fullName: "Empathy Map",
    oneLiner: "四象限可视化用户：Says / Thinks / Does / Feels。",
    body: [
      "## 概述\n\nEmpathy Map 由 Dave Gray 在《Gamestorming》中推广，是一种极简但强力的用户理解工具。",
      "## 要点\n\nWorkshop 中常用：每个 Persona 一张图，鼓励团队跨职能共同填写，让所有人对「用户是谁」有共识。",
    ],
    points: [
      "快速把定性发现结构化",
      "和 Persona 配合使用",
      "强调 Says 与 Does 之间的差距（用户言行不一）",
      "Workshop 工具，便于跨职能对齐",
    ],
  },
  {
    id: "usability-test",
    updatedAt: "2026-09-01",
    wikiSlug: "pm",
    term: "可用性测试",
    fullName: "Usability Test",
    oneLiner: "让真实用户完成任务，观察哪里卡住、出错、放弃。",
    body: [
      "## 概述\n\nUsability Test 由 Jakob Nielsen 等人推广，Nielsen Norman Group 的经典发现是：5 个用户能发现 ~85% 的主要可用性问题——不需要大样本。",
    ],
    points: [
      "5 个用户能发现 ~85% 主要问题",
      "Give-then-Think-Aloud：先给任务，再边做边说",
      "关注 Completion Rate / Time on Task / Error Rate",
      "Moderated vs Unmoderated 各有取舍",
    ],
  },
  {
    id: "retention",
    updatedAt: "2026-09-03",
    wikiSlug: "pm",
    term: "留存率",
    abbr: "Retention",
    fullName: "Retention Rate",
    oneLiner: "一段时间后仍回来使用产品的用户占比，是产品价值的核心指标。",
    body: [
      "## 概述\n\nRetention 是判断产品是否真的创造价值的核心指标。高 DAU 没有留存 = 流量游戏，不是产品。",
    ],
    points: [
      "Cohort 留存比 N 日留存更有信息量",
      "次留 / 7 留 / 30 留要分开看",
      "留存曲线扁平化 = PMF 信号",
      "留存下降 = 一定是产品或市场变了",
    ],
  },
  {
    id: "ltv-cac",
    updatedAt: "2026-09-05",
    wikiSlug: "pm",
    term: "LTV / CAC",
    fullName: "Lifetime Value / Customer Acquisition Cost",
    oneLiner: "LTV = 用户终身价值， CAC = 获取一个用户的成本，比值决定商业模式。",
    body: [
      "## 概述\n\nLTV / CAC 是 SaaS 与订阅经济的基础财务指标。它回答的根本问题是：每一块钱花出去，最终能赚回几块钱。",
    ],
    points: [
      "LTV / CAC > 3 通常被认为健康",
      "LTV / CAC < 1 = 烧钱机器",
      "SaaS 看 LTV/CAC；电商看 LTV/COGS",
      "回收周期（CAC Payback）同样关键",
    ],
  },
  {
    id: "pmf",
    updatedAt: "2026-09-06",
    wikiSlug: "pm",
    term: "Product-Market Fit",
    abbr: "PMF",
    fullName: "Product-Market Fit",
    oneLiner: "产品与市场咬合，表现为「供不应求」——用户主动找上门、留存陡升、销售周期缩短。",
    body: [
      "## 概述\n\nPMF 由 Marc Andreessen 系统化提出。Sean Ellis 测试是常用诊断方法：>40% 用户表示「如果这个产品明天消失我会非常失望」即视为达到 PMF 边缘。",
    ],
    points: [
      "Sean Ellis Test：>40% 用户表示「会非常失望」",
      "增长团队介入前必须先有 PMF",
      "PMF 不是一次性事件，可以丢失",
      "最常见死因：扩张过早 / 听完用户的字面意思",
    ],
    source: { label: "Marc Andreessen", href: "https://pmarchive.com/product_market_fit.html" },
  },
  {
    id: "nps",
    updatedAt: "2026-08-24",
    wikiSlug: "pm",
    term: "净推荐值",
    abbr: "NPS",
    fullName: "Net Promoter Score",
    oneLiner: "问「你有多大意愿推荐给朋友」，-100 到 100，越高越健康。",
    body: [
      "## 概述\n\nNPS 由 Fred Reichheld 在 Bain & Company 提出，因问题简单而被广泛使用，但学术界对它的预测力有争议。",
    ],
    points: [
      "Promoter 9-10，Passive 7-8，Detractor 0-6",
      "NPS = Promoter % - Detractor %",
      "适合有传播效应的产品（B2C、工具）",
      "不是万能指标，常和留存互补看",
    ],
  },
  {
    id: "ab-test",
    updatedAt: "2026-08-27",
    wikiSlug: "pm",
    term: "A/B 测试",
    abbr: "A/B",
    fullName: "A/B Testing",
    oneLiner: "随机分两组用户，对比不同版本的指标差异，建立因果。",
    body: [
      "## 概述\n\nA/B 测试是把统计学的随机对照试验搬到产品决策中。Ronny Kohavi 在 Microsoft / Amazon 推动了大量 A/B 测试文化建设。",
    ],
    points: [
      "必备：明确假设 + 主指标 + 显著性水平 + 样本量",
      "Peeking（偷看）会污染显著性",
      "SRM（Sample Ratio Mismatch）= 立刻停",
      "只测能影响决策的实验",
    ],
  },
  {
    id: "wizard-of-oz",
    updatedAt: "2026-08-30",
    wikiSlug: "pm",
    term: "Wizard of Oz",
    fullName: "Wizard of Oz Method",
    oneLiner: "用户以为在和 AI 交互，其实是人在背后操作。低成本地验证 AI 产品体验。",
    body: [
      "## 概述\n\nWizard of Oz 由 Jeff Kelley 在 1970 年代提出。在 AI 产品早期阶段特别有用：用户在意的是「结果」不是「背后是 AI 还是人」。",
    ],
    points: [
      "适合：AI 能力未成熟 / 评估用户真实需求",
      "关键：用户不能察觉是人在演",
      "比做完整模型快 10-100 倍",
      "结论：用户在意的不是 AI，是结果",
    ],
  },
  {
    id: "fake-door",
    updatedAt: "2026-09-01",
    wikiSlug: "pm",
    term: "Fake Door 测试",
    fullName: "Fake Door Test",
    oneLiner: "上线一个还没做的功能入口，看有多少用户点，用兴趣强度验证需求。",
    body: [
      "## 概述\n\nFake Door 是 Landing Page 的产品内版本：在产品里放一个未实现功能的按钮，看转化率来验证需求强度。",
    ],
    points: [
      "测的是「意愿」不是「可行性」",
      "必须给用户明确反馈（Coming Soon）",
      "样本量要够，避免假阳性",
      "和调研互补，但不能替代访谈",
    ],
  },
  {
    id: "concierge",
    updatedAt: "2026-09-03",
    wikiSlug: "pm",
    term: "Concierge MVP",
    fullName: "Concierge MVP",
    oneLiner: "不用产品，靠人手动一对一服务每个用户，验证价值假设。",
    body: [
      "## 概述\n\nConcierge MVP 由 Eric Ries 在《Lean Startup》中推广，是「验证型 MVP」的典型形态。它最适合高价值低频场景。",
    ],
    points: [
      "零技术成本，几小时就能开始",
      "适合高价值低频场景（B2B、咨询）",
      "让你直接听到用户真实的声音",
      "学到的东西直接喂回产品设计",
    ],
    source: { label: "Lean Startup", href: "http://theleanstartup.com/" },
  },

  // ----- AI Wiki -----
  {
    id: "llm",
    updatedAt: "2026-09-05",
    wikiSlug: "ai",
    term: "大语言模型",
    abbr: "LLM",
    fullName: "Large Language Model",
    oneLiner: "在海量文本上预训练的 Transformer 语言模型，是当前 AI 产品能力的底座。",
    body: [
      "## 概述\n\nLLM 是基于 Transformer 架构、在 TB 级文本上预训练的概率语言模型。它对「下一个 token」的预测能力，在 2020 年之后涌现出大量下游能力（推理、工具使用、代码生成等）。",
      "## 要点\n\n对 AI PM 来说，要了解的不只是「它能做什么」，还有「它的失败模式是什么」「成本如何随上下文变化」。",
    ],
    points: [
      "Transformer + 自回归生成是当前主流",
      "涌现能力是规模 + 数据 + 训练的复合结果",
      "幻觉是结构性问题，不会随模型变大自动消失",
      "成本随输入 + 输出 token 线性增长",
    ],
  },
  {
    id: "token",
    updatedAt: "2026-09-06",
    wikiSlug: "ai",
    term: "Token",
    fullName: "Token",
    oneLiner: "LLM 处理文本的最小单位，约等于 0.7 个英文词 / 1-2 个中文字。",
    body: [
      "## 概述\n\nTokenizer 决定 LLM 怎么把字符串切成可计算的单元。OpenAI 用 BPE、Anthropic 用类似的子词切分。",
    ],
    points: [
      "Context Window = 模型一次能看的 token 上限",
      "价格按 token 计，预算与延迟都和它挂钩",
      "中英文 token 密度差 3-4 倍",
      "Tokenizer 决定计费与截断边界",
    ],
  },
  {
    id: "context-window",
    updatedAt: "2026-08-24",
    wikiSlug: "ai",
    term: "上下文窗口",
    abbr: "Window",
    fullName: "Context Window",
    oneLiner: "模型一次请求能处理的最大 token 数。",
    body: [
      "## 概述\n\nContext Window 决定 LLM 能「看到」多少信息。GPT-4 是 8K / 32K / 128K，Claude 已到 200K 甚至 1M。",
      "## 要点\n\n窗口越大 ≠ 越好。Lost-in-the-Middle 现象表明，模型对窗口中间位置的注意力最弱。",
    ],
    points: [
      "Window 决定能塞多少上下文",
      "Lost-in-the-Middle：中间位置注意力最弱",
      "长上下文的延迟与成本不是线性的",
      "超过窗口会被截断或压缩",
    ],
  },
  {
    id: "embedding",
    updatedAt: "2026-08-27",
    wikiSlug: "ai",
    term: "向量嵌入",
    abbr: "Embedding",
    fullName: "Text Embedding",
    oneLiner: "把文本映射到高维空间，语义相近的向量距离更近。",
    body: [
      "## 概述\n\nEmbedding 是 RAG / 搜索 / 推荐 / 去重的底座。文本被映射成 N 维向量后，用余弦相似度或欧氏距离度量语义距离。",
    ],
    points: [
      "RAG / 搜索 / 推荐 / 去重的底座",
      "常用模型：OpenAI text-embedding-3 · BGE · M3E",
      "维度不是越高越好，看下游任务",
      "评估用 MTEB 基准",
    ],
  },
  {
    id: "rag",
    updatedAt: "2026-08-30",
    wikiSlug: "ai",
    term: "检索增强生成",
    abbr: "RAG",
    fullName: "Retrieval-Augmented Generation",
    oneLiner: "让 LLM 在回答前先检索外部知识库，把检索结果喂回 Prompt。",
    body: [
      "## 概述\n\nRAG 由 Lewis et al. 在 2020 年提出，是解决 LLM 知识陈旧与幻觉的标准方案。2023 年后随着 LLM 能力爆发，RAG 几乎是企业知识库的默认架构。",
    ],
    points: [
      "解决 LLM 知识陈旧 / 幻觉问题",
      "Pipeline：Query → Embed → Retrieve → Rerank → Prompt → Generate",
      "向量检索 ≠ 全部，常配合 BM25 / 关键词过滤",
      "评估：检索 Recall@k + 答案 Faithfulness",
    ],
    source: { label: "Lewis et al. 2020", href: "https://arxiv.org/abs/2005.11401" },
  },
  {
    id: "vector-db",
    updatedAt: "2026-09-01",
    wikiSlug: "ai",
    term: "向量数据库",
    fullName: "Vector Database",
    oneLiner: "专门存储与检索高维向量的数据库。",
    body: [
      "## 概述\n\n向量数据库（Vector DB）针对高维向量的相似度检索做了专门优化：HNSW / IVF / ScaNN 等近似最近邻索引。",
      "## 要点\n\n常见选项：Pinecone / Weaviate / Qdrant / Milvus / pgvector / Chroma。",
    ],
    points: [
      "常见选项：Pinecone / Weaviate / Qdrant / Milvus",
      "pgvector：在 Postgres 内做向量检索",
      "权衡：托管 vs 自建 / 成本 vs 性能",
      "评估 Recall / QPS / 内存占用",
    ],
  },
  {
    id: "rerank",
    updatedAt: "2026-09-03",
    wikiSlug: "ai",
    term: "重排序",
    fullName: "Reranking",
    oneLiner: "在向量召回后用更精确但更慢的模型重排序，提升 Top-K 准确率。",
    body: [
      "## 概述\n\nRerank 是 RAG 质量提升的关键步骤：先用向量检索快速召回 Top-50，再用 cross-encoder 重排到 Top-5。",
    ],
    points: [
      "Cross-encoder 比 bi-encoder 准确但慢",
      "常用于向量召回之后",
      "代价：增加一次模型调用 + 延迟",
      "Cohere Rerank / bge-reranker 是常见选择",
    ],
  },
  {
    id: "agent",
    updatedAt: "2026-09-05",
    wikiSlug: "ai",
    term: "AI Agent",
    fullName: "AI Agent",
    oneLiner: "能感知环境、规划步骤、调用工具、自主完成目标的 LLM 系统。",
    body: [
      "## 概述\n\nAgent 是 LLM 应用的高级形态：模型不只是生成文本，而是按计划调用工具、观察结果、决定下一步。",
    ],
    points: [
      "ReAct 循环：Reason → Act → Observe",
      "工具调用 = Agent 的手",
      "记忆 = 短期上下文 + 长期向量记忆",
      "失败模式：循环 / 幻觉工具 / 任务漂移，需要护栏",
    ],
  },
  {
    id: "function-calling",
    updatedAt: "2026-09-06",
    wikiSlug: "ai",
    term: "函数调用",
    abbr: "FC",
    fullName: "Function Calling / Tool Use",
    oneLiner: "LLM 按 JSON Schema 输出结构化参数，由外部系统执行真实动作。",
    body: [
      "## 概述\n\nFunction Calling 让 LLM 从「聊天」进化到「行动」：模型按工具的 Schema 输出 JSON，由代码真正执行，再把结果回灌给模型。",
    ],
    points: [
      "现代 LLM 标配能力",
      "Schema 设计是关键：参数名 / 描述 / 必填 / 枚举",
      "并行调用：一次输出多个 tool_calls",
      "工具结果回灌模型，进入下一轮",
    ],
  },
  {
    id: "mcp",
    updatedAt: "2026-08-24",
    wikiSlug: "ai",
    term: "Model Context Protocol",
    abbr: "MCP",
    fullName: "Model Context Protocol",
    oneLiner: "Anthropic 提出的开放协议：让 LLM 标准化地连接外部工具与数据。",
    body: [
      "## 概述\n\nMCP 由 Anthropic 在 2024 年底提出，主旨是把「LLM ↔ 外部工具」的连接方式标准化，类似 AI 时代的 USB-C。",
    ],
    points: [
      "类似 AI 时代的 USB-C 接口",
      "Server 暴露工具 / 资源；Client（Claude 等）按需调用",
      "降低每个 Agent 写适配器的成本",
      "生态扩展中：文件系统、GitHub、数据库、Slack",
    ],
    source: { label: "Anthropic", href: "https://modelcontextprotocol.io/" },
  },
  {
    id: "react-loop",
    updatedAt: "2026-08-27",
    wikiSlug: "ai",
    term: "ReAct Loop",
    fullName: "Reason + Act",
    oneLiner: "推理与行动交替的 Agent 主循环：思考 → 行动 → 观察。",
    body: [
      "## 概述\n\nReAct 由 Yao et al. 在 2022 年提出，是现代 Agent 的事实标准循环：让模型「先想后做」并把观察结果回灌。",
    ],
    points: [
      "Reason → 思考下一步",
      "Act → 调用工具",
      "Observe → 看工具返回",
      "重复直到任务完成",
    ],
  },
  {
    id: "prompt-engineering",
    updatedAt: "2026-08-30",
    wikiSlug: "ai",
    term: "提示工程",
    abbr: "PE",
    fullName: "Prompt Engineering",
    oneLiner: "通过设计输入指令，让 LLM 输出更可控、更稳。",
    body: [
      "## 概述\n\nPrompt Engineering 是和 LLM 协作的基本功。从写好一段 System Prompt 到设计 few-shot examples，都是 PE 的范畴。",
    ],
    points: [
      "角色设定 / 任务说明 / 格式约束 / 少样本示例",
      "结构化 Prompt（System / Developer / User）",
      "CoT、ReAct、ToT 等推理策略",
      "把 Prompt 当代码：版本化、评估、回归测试",
    ],
  },
  {
    id: "cot",
    updatedAt: "2026-09-01",
    wikiSlug: "ai",
    term: "思维链",
    abbr: "CoT",
    fullName: "Chain of Thought",
    oneLiner: "让 LLM 把推理步骤显式输出，提升复杂任务准确率。",
    body: [
      "## 概述\n\nChain of Thought 由 Wei et al. 在 2022 年提出：通过在 Prompt 中展示「思考过程」，让模型在回答前先写一遍中间步骤。",
    ],
    points: [
      "复杂任务准确率显著提升",
      "Zero-shot：「Let's think step by step」",
      "Few-shot CoT：示例里展示完整推理",
      "自我一致性（Self-Consistency）可继续叠加",
    ],
  },
  {
    id: "few-shot",
    updatedAt: "2026-09-03",
    wikiSlug: "ai",
    term: "少样本提示",
    abbr: "Few-shot",
    fullName: "Few-shot Prompting",
    oneLiner: "在 Prompt 里给几个示例，让 LLM 模仿。",
    body: [
      "## 概述\n\nFew-shot Prompting 是 In-context Learning 的核心机制：不更新模型权重，只靠 Prompt 里的示例教会模型任务格式。",
    ],
    points: [
      "示例质量 > 数量",
      "3-5 个示例通常足够",
      "示例顺序也会影响结果",
      "和 Zero-shot / Chain-of-Thought 可叠加",
    ],
  },
  {
    id: "fine-tuning",
    updatedAt: "2026-09-05",
    wikiSlug: "ai",
    term: "微调",
    abbr: "FT",
    fullName: "Fine-Tuning",
    oneLiner: "在已有预训练模型上用领域数据继续训练，让它更贴合你的任务。",
    body: [
      "## 概述\n\nFine-Tuning 是「当 Prompt + RAG 不够」时的下一步：让模型本身学会特定风格或领域知识。",
    ],
    points: [
      "LoRA / QLoRA 是性价比主流",
      "数据质量 > 数据数量",
      "先做 Prompt / RAG，不够再考虑 FT",
      "评估集必须独立，不能从训练集抽",
    ],
  },
  {
    id: "rlhf",
    updatedAt: "2026-09-06",
    wikiSlug: "ai",
    term: "RLHF",
    abbr: "RLHF",
    fullName: "Reinforcement Learning from Human Feedback",
    oneLiner: "用人类偏好训练奖励模型，再用 RL 优化 LLM。",
    body: [
      "## 概述\n\nRLHF 是 ChatGPT 时代让 LLM「听话」的关键技术。它的局限性：成本高 / 偏好的偏差 / 过度对齐导致 sycophancy。",
    ],
    points: [
      "训练奖励模型 + 用 RL / DPO 优化",
      "成本高，需要大量人类标注",
      "DPO 是 2023 年后简化版",
      "可能导致模型过度迎合用户",
    ],
  },
  {
    id: "evals",
    updatedAt: "2026-08-24",
    wikiSlug: "ai",
    term: "AI 评测",
    abbr: "Evals",
    fullName: "Evals / Evaluations",
    oneLiner: "对 LLM 应用做系统化、可量化的质量评测。",
    body: [
      "## 概述\n\nEvals 是 AI 产品工程化最关键的一环：没有 eval 就不知道 prompt 改动、模型升级、数据更新有没有让它变好。",
    ],
    points: [
      "端到端 eval（答案正确率）vs 组件 eval（检索 Recall@k）",
      "离线数据集必须有代表性",
      "LLM-as-Judge 是 2024 后主流自动化方法",
      "建立回归测试集，每次改动都跑",
    ],
  },
];

export function getWikiMeta(slug: string): WikiMeta | undefined {
  return WIKI_META.find((w) => w.slug === slug);
}

export function getEntry(id: string): WikiEntry | undefined {
  return WIKI_ENTRIES.find((e) => e.id === id);
}

/** 取某套 wiki 的首个词条 id（用于 /wiki/[slug] 自动跳转） */
export function getFirstEntryId(slug: string): string | undefined {
  const wiki = getWikiMeta(slug);
  return wiki?.chapters[0]?.entries[0]?.id;
}