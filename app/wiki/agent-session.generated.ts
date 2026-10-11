// ⚠️ 自动生成，请勿手改 —— 由 进行中/llm wiki/scripts/publish.py 产出
// 要改内容：编辑 进行中/llm wiki/wiki/**/*.md 后重新发布
import type { WikiMeta, WikiEntry } from "./data";

export const AGENT_SESSION_ENTRIES: WikiEntry[] = [
{
  "id": "as-overview-overview",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "总览",
  "oneLiner": "总览",
  "body": [
    "## # 总览",
    "## 一、跨源综述（Synthesis · 27）\n\n> 综合 ≥2 个不同来源才成立、可脱离项目带走的判断。\n\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) — 症状看起来在哪一层 ≠ 问题在哪一层；先用最便宜的观测划边界\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) — 分对层只完成一半；契约/适配器没人读，约束就等于不存在\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) — 判断用的那个量不是你要问的东西；代理量只在边界处分叉，且静默\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) — 你查的（文件/状态页/接口返回）不是实际在跑的那一份；观测点要落在执行路径末端\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) — 数字不可信几乎总是归属问题：先问分子是谁、分母是谁、时间窗是什么\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) — 按「寿命」分层：会过期的和不会过期的不能放同一层\n- [同一状态的多个副本必然漂移](/wiki/agent-session/as-synthesis-%E5%90%8C%E4%B8%80%E7%8A%B6%E6%80%81%E7%9A%84%E5%A4%9A%E4%B8%AA%E5%89%AF%E6%9C%AC%E5%BF%85%E7%84%B6%E6%BC%82%E7%A7%BB) — 「它对应的是哪一条标识？」「我手上这份是同一条吗？」「这中间有没有人又写过？」\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82) — 共享层只描述「有哪些位置/步骤」，视觉、格式、业务规则一律外推\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) — 改对代码 ≠ 修好现状；存量数据、旧路径、未同步的层要单独带过来\n- 活的能力取决于增量机制而不是生成质量 — 派生知识（wiki/索引/摘要/洞察）能不能「活」，取决于触发、存量回填、失效作废这三件事，不取决于第一次生成得多好\n- [定义要由使用者确认](/wiki/agent-session/as-synthesis-%E5%AE%9A%E4%B9%89%E8%A6%81%E7%94%B1%E4%BD%BF%E7%94%A8%E8%80%85%E7%A1%AE%E8%AE%A4) — 分类法/术语/协议由单方给出必然错位；定义权要显式交给使用者并确认一次\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) — 单点不产生信息，先造一个 A/B；「说不清」多半是缺参照系\n- 按实际规模选型而不是按方案先进性 — 判据是这一侧的真实规模与边界，不是方案的成熟度；「规模小上重型」与「深处还手搓」是同一个错\n- [收尾要落到确定状态](/wiki/agent-session/as-synthesis-%E6%94%B6%E5%B0%BE%E8%A6%81%E8%90%BD%E5%88%B0%E7%A1%AE%E5%AE%9A%E7%8A%B6%E6%80%81) — 终态必须三选一：成功 / 失败 / 已接管；「等人确认」「idle」都不算结束，任务会安静悬挂\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) — 「谁最新」要靠显式版本记录，不能靠「谁最后返回」\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91) — 「环境侧少了哪个默认？」「两侧的 provider 路径是同一段代码吗？」「两侧共享了哪些可变状态？」\n- [权威终态到达后迟到的写不能覆盖它](/wiki/agent-session/as-synthesis-%E6%9D%83%E5%A8%81%E7%BB%88%E6%80%81%E5%88%B0%E8%BE%BE%E5%90%8E%E8%BF%9F%E5%88%B0%E7%9A%84%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83) — 「权威事件是哪一个？」「结算点在哪一行？」「终态之后的错误怎么处理？」\n- 检索是一条分层链 — 检索是供给/召回/融合/迭代四层链，用单点替代整条链必然静默失效\n- [用户价值要在循环内被验证](/wiki/agent-session/as-synthesis-%E7%94%A8%E6%88%B7%E4%BB%B7%E5%80%BC%E8%A6%81%E5%9C%A8%E5%BE%AA%E7%8E%AF%E5%86%85%E8%A2%AB%E9%AA%8C%E8%AF%81) — 「用户在这一轮能看到什么？」「这一轮的验收标准是什么？」「剩下的部分下一轮怎么接？」\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) — 「谁新/谁全/谁像」都不是判据；先按维度把真源写死，再谈同步\n- 职责要先分家再谈实现 — 两件不同的东西被当成一个，是因为职责边界没显式分开；先分家再谈同步/缓存/编排\n- [能力被环境差异静默改变](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A2%AB%E7%8E%AF%E5%A2%83%E5%B7%AE%E5%BC%82%E9%9D%99%E9%BB%98%E6%94%B9%E5%8F%98) — 「真正执行的是哪一个实体？」「参数是在哪一层被消费的？」「响应里能证明它吗？」\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) — 提供方就绪 ≠ 可用；每一项能力都要问「对面谁在认账」\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) — 功能清单是共有项，天然抹掉差异；差异只在「使用模式」与「去掉它损失什么」两个维度上出现\n- [快照只在建立那一刻成立](/wiki/agent-session/as-synthesis-%E5%BF%AB%E7%85%A7%E5%8F%AA%E5%9C%A8%E5%BB%BA%E7%AB%8B%E9%82%A3%E4%B8%80%E5%88%BB%E6%88%90%E7%AB%8B) — 把「会变的输入」与「建立时机」耦合，就得到一个只在建立那一刻成立的状态；跨过边界后静默失效",
    "## 二、主题聚合（Topics · 20）\n\n> 标题即主题，页内是该主题下的多条判断。\n\n- [AI产品经理的能力三轴](/wiki/agent-session/as-topic-AI%E4%BA%A7%E5%93%81%E7%BB%8F%E7%90%86%E7%9A%84%E8%83%BD%E5%8A%9B%E4%B8%89%E8%BD%B4) — 产品思考 / agent 理解边界 / AI coding 能力三条并列轴；项目不是叙事单位，能力轴才是\n- [UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F) — 原型是唯一真源；逐片对照、共享 primitive、不用替代物、判断机制而非抄常量\n- [个人知识产品的定位](/wiki/agent-session/as-topic-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E5%AE%9A%E4%BD%8D) — 不是更聪明的聊天框，是让知识停在可回看/可视化/可被 AI 洞察的空间；赛道选 learning 而非 coding buddy\n- [产品页信息结构](/wiki/agent-session/as-topic-%E4%BA%A7%E5%93%81%E9%A1%B5%E4%BF%A1%E6%81%AF%E7%BB%93%E6%9E%84) — 每屏一个问题、同类能力用单选纵向 Tab、最精华部分不拆分、roadmap 要标「即将支持」\n- [代码库知识工具的选型](/wiki/agent-session/as-topic-%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9F%A5%E8%AF%86%E5%B7%A5%E5%85%B7%E7%9A%84%E9%80%89%E5%9E%8B) — 给项目做「代码库知识」有三类工具，选型先看你要的是哪一种：会动的架构图（Archify）、人能读的 wiki 文档（DeepWiki-Open / OpenDeepWiki / KT Studio）\n- 几何题3D化的题库定位 — 产品形态是「题库播放器」；模型与切法由题目决定，用户不选\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) — 当前规模下「不要 Redis」：低频任务别上 BullMQ + 托管 Redis\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) — 协作控制面分裂；四层职责（入口/当前/隔离/知识）各配一种文件\n- [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7) — 验证强度按「任务大小 × 所处阶段」分级；原型当合同；规则要能落成硬门槛\n- [执行力的复盘](/wiki/agent-session/as-topic-%E6%89%A7%E8%A1%8C%E5%8A%9B%E7%9A%84%E5%A4%8D%E7%9B%98) — 野心是水不是火；结果锚点 vs 产出锚点；拖延是环境问题；难题逃避待解\n- [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB) — 整体 vs 净成、ROI 成对看、LTV 链路、必须补自然流量/内容/画像\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) — 云端加工厂 + 本地主仓库；Agent 先做可执行入口；AI 执行层可替换\n- [测试策略](/wiki/agent-session/as-topic-%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5) — 测试由四层共同决定（agent.md 定标准 / skill 约束方法 / scripts 执行 / tests+CI 判定）\n- [文档附件解析管线](/wiki/agent-session/as-topic-%E6%96%87%E6%A1%A3%E9%99%84%E4%BB%B6%E8%A7%A3%E6%9E%90%E7%AE%A1%E7%BA%BF) — 分块按结构、表格交执行器、全局任务遍历全块、附件块绑 Session+TTL、格式分流选型\n- [用户访谈与需求挖掘](/wiki/agent-session/as-topic-%E7%94%A8%E6%88%B7%E8%AE%BF%E8%B0%88%E4%B8%8E%E9%9C%80%E6%B1%82%E6%8C%96%E6%8E%98) — 邀约措辞 + 第一句「先给料再提问」\n- [本机资源占用排查](/wiki/agent-session/as-topic-%E6%9C%AC%E6%9C%BA%E8%B5%84%E6%BA%90%E5%8D%A0%E7%94%A8%E6%8E%92%E6%9F%A5) — 本机「卡 / 烫 / 占空间」同一条判据：先分层，再按「丢了能不能重建、会不会影响数据与登录态」决定动不动它\n- [竞品拆解框架](/wiki/agent-session/as-topic-%E7%AB%9E%E5%93%81%E6%8B%86%E8%A7%A3%E6%A1%86%E6%9E%B6) — 用户在哪 / 痛点需求 / 场景 / 商业价值 / 如何评测\n- [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) — data / layout / render 三层分离，section 只分 block|list，逐字段 slot 契约",
    "## 三、可复用的判断（Concepts · 226）\n\n### AI 基础概念（ai-basics · 8）\n\n- [dogfooding](/wiki/agent-session/as-concept-dogfooding) — dogfooding 是「用真实使用来验证产品价值」——但它是必要条件，不是充分条件\n- [scaling-law](/wiki/agent-session/as-concept-scaling-law) — 模型能力随「参数 / 数据 / 算力」的投入而可预测地提升 —— 沿一条平滑的幂律曲线下降，几乎不会失灵\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87) — 同一个词在语境里有 ≥2 种合理解释时，先确认所指再展开 —— 否则整段回答可能都在回答错误的问题\n- [关联规则挖掘的支持度与置信度](/wiki/agent-session/as-concept-%E5%85%B3%E8%81%94%E8%A7%84%E5%88%99%E6%8C%96%E6%8E%98%E7%9A%84%E6%94%AF%E6%8C%81%E5%BA%A6%E4%B8%8E%E7%BD%AE%E4%BF%A1%E5%BA%A6) — support = 组合出现比例，confidence = 出现 A 时 B 也出现；阈值直接填小数\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5) — 选实时还是异步，不看技术难度，看「内容变化有多快」\n- [技术性通缩与经济学通缩](/wiki/agent-session/as-concept-%E6%8A%80%E6%9C%AF%E6%80%A7%E9%80%9A%E7%BC%A9%E4%B8%8E%E7%BB%8F%E6%B5%8E%E5%AD%A6%E9%80%9A%E7%BC%A9) — 两种「东西变便宜」完全不同 —— 技术进步带来的降价是好事\n- [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87) — 「cache hit 为 0」通常不是 bug，而是「每次都是新会话的首请求」\n- [长尾查询](/wiki/agent-session/as-concept-%E9%95%BF%E5%B0%BE%E6%9F%A5%E8%AF%A2) — 长尾查询（搜索量极低、极具体的查询）是选择搜索源的关键判据 —— 头部词谁都能覆盖，长尾才是拉开差距的地方\n\n### LLM 工程（llm-engineering · 41）\n\n- Agent会话要按树保存而不是消息列表 — 一轮 Agent 对话不是「用户消息 + AI 回复」，所以 AiMessage(role, content) 这种表结构装不下它\n- Agent管理的记忆以文件为真相源 — OpenClaw 式 Agent 记忆的核心是：Markdown 文件是记忆真相源，SQLite/embedding 索引只是检索加速器（删掉可重建）\n- [Prompt版本真源在代码而不是平台](/wiki/agent-session/as-concept-Prompt%E7%89%88%E6%9C%AC%E7%9C%9F%E6%BA%90%E5%9C%A8%E4%BB%A3%E7%A0%81%E8%80%8C%E4%B8%8D%E6%98%AF%E5%B9%B3%E5%8F%B0) — Prompt 的版本真源是代码仓库里的 .md 文件（frontmatter 手写 version 整数 + 内容 SHA 算出的 revision），平台侧（Langfuse）\n- RAG是流程不是组件 — RAG = Retrieval → Augmentation → Generation 三段流程\n- 一次调用返回多种产物按内容类型组织prompt — 每篇内容只调用一次 AI，一次返回总结、观点、主题/实体等全部产物\n- [上下文成本由基础上下文和会话数决定](/wiki/agent-session/as-concept-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%88%90%E6%9C%AC%E7%94%B1%E5%9F%BA%E7%A1%80%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%E4%BC%9A%E8%AF%9D%E6%95%B0%E5%86%B3%E5%AE%9A) — 「为什么上下文这么多，不是每轮都压缩吗」——压缩不是每轮发生，且只压历史\n- 上下文按卡片切换会话记忆按账号共享 — 侧栏式 Agent 里，「记得什么」（session 记忆）和「当前在看什么」（context）是两个独立维度：默认只做后者按卡片切换、前者按账号固定\n- 中间进展与最终回答要按phase区分 — 把 agent 的中间进展（「我先看一下……」）当普通 assistant 消息同步，客户端就会收到一堆半截消息\n- [主观判据的prompt规则会随机误触发](/wiki/agent-session/as-concept-%E4%B8%BB%E8%A7%82%E5%88%A4%E6%8D%AE%E7%9A%84prompt%E8%A7%84%E5%88%99%E4%BC%9A%E9%9A%8F%E6%9C%BA%E8%AF%AF%E8%A7%A6%E5%8F%91) — 把「信息是否充足」这类判断完全交给模型主观决定的 prompt 规则，会产生同输入下的随机误报 —— 实测同一篇文章（内容 hash 完全相同、输入 ~5650 tokens 的完整正文）\n- [关键词检索的三个打分缺陷](/wiki/agent-session/as-concept-%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%89%E4%B8%AA%E6%89%93%E5%88%86%E7%BC%BA%E9%99%B7) — 「只在标题级文本里做 substring 匹配、按 token 长度打分、中文按整句切分」这三件事叠加，会让检索只在「提问措辞恰好出现在标题」时有效\n- 兼容端点要防SDK注入非标准字段 — 兼容层按「对面就是真 OpenAI」塞字段，严格校验的端点直接 400；报错像「接口坏了」，其实多了一个 SDK 自己加的字段\n- [分页游标要继承未推进实体的位置](/wiki/agent-session/as-concept-%E5%88%86%E9%A1%B5%E6%B8%B8%E6%A0%87%E8%A6%81%E7%BB%A7%E6%89%BF%E6%9C%AA%E6%8E%A8%E8%BF%9B%E5%AE%9E%E4%BD%93%E7%9A%84%E4%BD%8D%E7%BD%AE) — 多实体共用一个复合游标时，next cursor 必须「继承输入 positions + 仅覆盖本页真正返回边界的实体」\n- [可观测正文要按环境分级放开](/wiki/agent-session/as-concept-%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%AD%A3%E6%96%87%E8%A6%81%E6%8C%89%E7%8E%AF%E5%A2%83%E5%88%86%E7%BA%A7%E6%94%BE%E5%BC%80) — 观测平台默认只记元数据（模型名、token、费用、延迟、成败、工具调用链、workflow 类型与状态），正文（用户输入、prompt、模型输出、工具参数与结果）默认不上报\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6) — 同一模型在「国内版 / 国际版」两组账号间混合调用是默认行为，不需要额外配置——因为路由是 model-aware（模型感知） 的，而不是简单的账号轮询\n- [实体、关键词、标签的区别](/wiki/agent-session/as-concept-%E5%AE%9E%E4%BD%93%E3%80%81%E5%85%B3%E9%94%AE%E8%AF%8D%E3%80%81%E6%A0%87%E7%AD%BE%E7%9A%84%E5%8C%BA%E5%88%AB) — 三者描述的是不同东西：实体 = 文中出现了谁/什么（内容事实），关键词 = 文章在讨论什么（核心概念），标签 = 用户想怎样组织它（用户意图）\n- [工作流按内容类型分开而不是抽象成一条通用流水线](/wiki/agent-session/as-concept-%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%8C%89%E5%86%85%E5%AE%B9%E7%B1%BB%E5%9E%8B%E5%88%86%E5%BC%80%E8%80%8C%E4%B8%8D%E6%98%AF%E6%8A%BD%E8%B1%A1%E6%88%90%E4%B8%80%E6%9D%A1%E9%80%9A%E7%94%A8%E6%B5%81%E6%B0%B4%E7%BA%BF) — 「笔记」和「文章」的后台处理不是同一条流水线换了输入，而是两条不同的业务流水线 —— 只共享底层的任务调度\n- [开关要映射到模型调用才算生效](/wiki/agent-session/as-concept-%E5%BC%80%E5%85%B3%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E6%89%8D%E7%AE%97%E7%94%9F%E6%95%88) — 前端开了\"深度思考\"、请求参数也透传成功，都不代表模型真的开了思考\n- [无入站流量的服务靠数据与配置隔离环境](/wiki/agent-session/as-concept-%E6%97%A0%E5%85%A5%E7%AB%99%E6%B5%81%E9%87%8F%E7%9A%84%E6%9C%8D%E5%8A%A1%E9%9D%A0%E6%95%B0%E6%8D%AE%E4%B8%8E%E9%85%8D%E7%BD%AE%E9%9A%94%E7%A6%BB%E7%8E%AF%E5%A2%83) — 没有入站流量的后台 Worker（队列消费、Cron）不能用域名/端口分环境 —— 它的隔离维度是数据库、env、镜像和调度锁\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3) — 知识库检索不是「搜一次、读一篇」，而是 Agent 主导的迭代 loop：先判任务难度定预算，读不通就换查询再来一轮\n- 模型可见性按入口分批 — 「为什么我没有某个模型」多半不是操作错，而是灰度按入口/账号分批放量\n- 模型ID是入口相关的 — 同一个模型在不同入口的清单里注册的 ID 可能不同（裸名 vs 带 provider 前缀）；合法性由末端网关的模型表决定\n- 派生数据只在写入时入队旧数据要单独回填 — 入队只挂在「新建/更新」事件上，存量数据永远不被处理，失败任务也不会自动复活\n- [相似度分数不等于答案可用](/wiki/agent-session/as-concept-%E7%9B%B8%E4%BC%BC%E5%BA%A6%E5%88%86%E6%95%B0%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%AD%94%E6%A1%88%E5%8F%AF%E7%94%A8) — 分数衡量「像不像」不是「能不能用」；先做条件校验（能不能用）再按分数排序（哪个最像）\n- 混合检索先用RRF融合 — 向量召回与词法召回的原始分数不可比，首版应该用 RRF（Reciprocal Rank Fusion）按「排名」融合，而不是校准分数\n- [物化结果要按版本失效并增量刷新](/wiki/agent-session/as-concept-%E7%89%A9%E5%8C%96%E7%BB%93%E6%9E%9C%E8%A6%81%E6%8C%89%E7%89%88%E6%9C%AC%E5%A4%B1%E6%95%88%E5%B9%B6%E5%A2%9E%E9%87%8F%E5%88%B7%E6%96%B0) — AI 生成的结果（洞察、相关推荐、摘要）不要二选一「实时算」或「生成一次就永久存」，而要当成「带版本的物化结果」：存下来、标版本、被触发条件作废、后台增量刷新。 用户问的正是这个 —— 洞察是存一次，还是随时间刷新？\n- [流自然结束不等于回答完整](/wiki/agent-session/as-concept-%E6%B5%81%E8%87%AA%E7%84%B6%E7%BB%93%E6%9D%9F%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%9B%9E%E7%AD%94%E5%AE%8C%E6%95%B4) — 「流读完了」只说明连接结束；判据是 `finish_reason`，不是「循环退出」\n- [整体时限不能当首字节时限用](/wiki/agent-session/as-concept-%E6%95%B4%E4%BD%93%E6%97%B6%E9%99%90%E4%B8%8D%E8%83%BD%E5%BD%93%E9%A6%96%E5%AD%97%E8%8A%82%E6%97%B6%E9%99%90%E7%94%A8) — `AbortSignal.timeout(N)` 是整体时限，被当成「N 秒无响应就换下一个」会掐死慢启动请求\n- 读图能力看声明字段并按模型实测 — 能不能读图由「消费方读的声明字段」与「后端是否真能读」两件事决定，且不按网关齐步走\n- [短期记忆与长期记忆的边界](/wiki/agent-session/as-concept-%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%E4%B8%8E%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%E7%9A%84%E8%BE%B9%E7%95%8C) — 区分短期/长期记忆用两条边界：是否参与当前任务、是否跨会话持续影响行为\n- [能力链路打通不等于默认开启](/wiki/agent-session/as-concept-%E8%83%BD%E5%8A%9B%E9%93%BE%E8%B7%AF%E6%89%93%E9%80%9A%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%BC%80%E5%90%AF) — 「模型支持 + 链路完整」不等于「用户能用上」—— 中间可能只差一行写死的开关\n- [计数闸门不等于上下文管理](/wiki/agent-session/as-concept-%E8%AE%A1%E6%95%B0%E9%97%B8%E9%97%A8%E4%B8%8D%E7%AD%89%E4%BA%8E%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AE%A1%E7%90%86) — 用「消息条数 ≤ 20」当护栏不是上下文窗口管理：服务端既不截断也不滑动窗口，要么全塞要么 400\n- 评测要先隔离被测层 — 要评「拿到检索结果之后怎么用」，就把检索结果变成可控构造数据，同时让模型调用真实发生\n- [评测规模要与结论的推广范围匹配](/wiki/agent-session/as-concept-%E8%AF%84%E6%B5%8B%E8%A7%84%E6%A8%A1%E8%A6%81%E4%B8%8E%E7%BB%93%E8%AE%BA%E7%9A%84%E6%8E%A8%E5%B9%BF%E8%8C%83%E5%9B%B4%E5%8C%B9%E9%85%8D) — 构造的小样本证明不了规模化检索效果与未见题推广；先问结论要推广到哪里再选数据来源\n- 评测平台是平台层项目规则是适配层 — Langfuse 这类观测/实验平台能承担 prompt 评测，但永远不知道你的业务规则\n- 请求别名不等于实际模型ID — 请求里的模型名可能只是一个别名（路由名），provider 响应里返回的 model 才是实际执行的模型 ID\n- [轮换要带健康状态记忆](/wiki/agent-session/as-concept-%E8%BD%AE%E6%8D%A2%E8%A6%81%E5%B8%A6%E5%81%A5%E5%BA%B7%E7%8A%B6%E6%80%81%E8%AE%B0%E5%BF%86) — 多 key / 多模型轮换不能盲目串行遍历：要记住哪些组合刚坏过、按错误性质设冷却、并给每次尝试设超时，否则一轮请求会把函数执行预算烧光，用户等满超时后仍然失败。\n- 重试分三层不要整体重跑 — 「重试」不是一个动作，而是三个层级，必须分清各自动的是什么：\n- [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) — 用固定 RUN_TIMEOUT_MS（如 10 分钟）来判定一个 agent turn 是否结束，会误杀长任务\n\n### Agent 与 Skills 生态（agent-ecosystem · 40）\n\n- [Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop) — 「能调工具、能循环」只是 harness 的骨架，不是 harness\n- Agent harness 要隔离复现可收尾 — Agent harness 是给 Agent 搭的「调试房间」，本质回答三件事：隔离谁、怎么复现、怎么收尾\n- Agent编排层薄自建优先于重型框架 — 给本地优先的桌面 App 接 Agent，先自建一层很薄的编排层，不要直接引入 LangChain / LangGraph / AutoGen 这类重型框架 —— 能力边界很明确时，重框架带来的抽象成本大于收益。\n- Issue完成由用户验收后再关闭 — 用 Linear/MCP 管项目时，agent 实现完 Issue 后要保持 In Progress 等用户验收，不能自己设 Done\n- [deploy目录是运行配方不是另一套应用](/wiki/agent-session/as-concept-deploy%E7%9B%AE%E5%BD%95%E6%98%AF%E8%BF%90%E8%A1%8C%E9%85%8D%E6%96%B9%E4%B8%8D%E6%98%AF%E5%8F%A6%E4%B8%80%E5%A5%97%E5%BA%94%E7%94%A8) — monorepo 三层分工：apps/ 是程序本身做什么，packages/ 是程序复用哪些能力，deploy/ 是程序怎么运行到服务器上\n- skill约束要区分补短板与替模型判断 — 模型足够强时，很重的 skill 约束反而会限制它的能力 —— 判据是：这条约束在「补模型当下做不到的事」，还是在「替模型做它本可动态判断的决策」\n- skill跨agent加载差异 — 「磁盘上有」≠「本 session 能用」\n- [一次性凭证拿到就落盘](/wiki/agent-session/as-concept-%E4%B8%80%E6%AC%A1%E6%80%A7%E5%87%AD%E8%AF%81%E6%8B%BF%E5%88%B0%E5%B0%B1%E8%90%BD%E7%9B%98) — 授权码换 token 这类「一次性」命令只能成功执行一次\n- [两个执行入口共用一套业务规则](/wiki/agent-session/as-concept-%E4%B8%A4%E4%B8%AA%E6%89%A7%E8%A1%8C%E5%85%A5%E5%8F%A3%E5%85%B1%E7%94%A8%E4%B8%80%E5%A5%97%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99) — 当「用户手动操作」和「Agent 调工具」都会改同一份数据时，必须把确定性业务规则抽到两者共用的 Service 层\n- [交付前先同步主干](/wiki/agent-session/as-concept-%E4%BA%A4%E4%BB%98%E5%89%8D%E5%85%88%E5%90%8C%E6%AD%A5%E4%B8%BB%E5%B9%B2) — 本地验证通过 ≠ 交付可用；先对齐主干，否则合并时冲突与回归\n- 什么该进git什么该ignore — 判断标准是「换台机器 / 换个人能不能复现」：产物与本地状态不进，配方与契约要进\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) — 产物的作者是谁，决定协议该怎么设计\n- [全绿的单测可能测的不是那条链路](/wiki/agent-session/as-concept-%E5%85%A8%E7%BB%BF%E7%9A%84%E5%8D%95%E6%B5%8B%E5%8F%AF%E8%83%BD%E6%B5%8B%E7%9A%84%E4%B8%8D%E6%98%AF%E9%82%A3%E6%9D%A1%E9%93%BE%E8%B7%AF) — 测试绿了但真实 bug 还在，通常不是\"测试没覆盖到\"，而是\"测试覆盖的是另一条链路\"\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D) — 做「手机看/控电脑上的 Agent」时，「手机和电脑同一个会话」有三个不同层级，别把它们当成一回事：①同一个历史 thread\n- [加载skill不等于遵循skill流程](/wiki/agent-session/as-concept-%E5%8A%A0%E8%BD%BDskill%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%81%B5%E5%BE%AAskill%E6%B5%81%E7%A8%8B) — 系统提示词里带上 skill 清单只解决了「发现」；触发时必须主动读 SKILL.md 并按路由执行，否则会出现「用了检查工具」但没走完整流程的执行偏差 —— 这不是 skill 没生效，而是路由与遵循做错了。\n- 协作规则要入Git才算项目资产 — 写给 agent 的协作规则（AGENTS.md、.codex/、.agents/、rules 等）\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) — 同一份产物有两个来源时，不要整体选「更新的那个源」，要按维度分别取权威版本\n- [委派颗粒度要匹配信息缺口](/wiki/agent-session/as-concept-%E5%A7%94%E6%B4%BE%E9%A2%97%E7%B2%92%E5%BA%A6%E8%A6%81%E5%8C%B9%E9%85%8D%E4%BF%A1%E6%81%AF%E7%BC%BA%E5%8F%A3) — research worker 与 issue 不是 1:1；它只用于填补主控暂时不清楚的关键未知点，不是每个 issue 的标配\n- 子issue是发现新范围的结果 — 子 issue 不是预先拆好的清单项，而是执行中才发现的新范围\n- 工作模式切换改变的是harness而非模型 — 同一个模型在不同「模式」下的差别不是换了个名字，而是 harness 变了：执行环境、上下文注入、工具集、权限模型全都不同\n- [手机后台推送要靠服务端远程推送](/wiki/agent-session/as-concept-%E6%89%8B%E6%9C%BA%E5%90%8E%E5%8F%B0%E6%8E%A8%E9%80%81%E8%A6%81%E9%9D%A0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%BF%9C%E7%A8%8B%E6%8E%A8%E9%80%81) — 只靠「App 前台 WebSocket + 本地通知」做不到「电脑上的 agent 跑完就推给手机」\n- [改协议要同时改两端](/wiki/agent-session/as-concept-%E6%94%B9%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%90%8C%E6%97%B6%E6%94%B9%E4%B8%A4%E7%AB%AF) — 项目里有两条链路（如 Claude Code 一套、Codex 一套）时，改 WebSocket 协议或连接逻辑不能只改一边\n- 无头环境连MCP要用APIKey而非OAuth — 要不要用 OAuth 取决于运行形态，不取决于客户端名字：有 GUI 的桌面版能弹窗就走 OAuth，无头 / CI / 服务器场景没有浏览器，只能预先换成 API Key（Bearer Token）。\n- [随时间变化的上下文要逐轮注入](/wiki/agent-session/as-concept-%E9%9A%8F%E6%97%B6%E9%97%B4%E5%8F%98%E5%8C%96%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E8%A6%81%E9%80%90%E8%BD%AE%E6%B3%A8%E5%85%A5) — 会随时间变的值（日期/时间/星期）不能挂在会话级系统提示上，必须逐轮注入\n- [真相源位置决定多端关系](/wiki/agent-session/as-concept-%E7%9C%9F%E7%9B%B8%E6%BA%90%E4%BD%8D%E7%BD%AE%E5%86%B3%E5%AE%9A%E5%A4%9A%E7%AB%AF%E5%85%B3%E7%B3%BB) — 同一个产品，真相源放在本机还是云端，决定了其他端是什么角色、仓库长什么样\n- 终端画面同步Agent状态不稳定 — 用 tmux 把手机接到电脑上同一个 Codex CLI 会话，能实现「电脑和手机看同一个活会话」——因为手机输入真的敲进那个 CLI，电脑 attach 就能看到同一画面。\n- [经验沉淀要在问题验证后按需触发](/wiki/agent-session/as-concept-%E7%BB%8F%E9%AA%8C%E6%B2%89%E6%B7%80%E8%A6%81%E5%9C%A8%E9%97%AE%E9%A2%98%E9%AA%8C%E8%AF%81%E5%90%8E%E6%8C%89%E9%9C%80%E8%A7%A6%E5%8F%91) — ce-compound 这类经验沉淀 skill 不是过程日志，也不该在 worker 每完成一步时运行 —— 它只在一个非平凡问题已经解决并验证后，把解决方法沉淀成可搜索的 durable learning。\n- 编排器只包装已有CLI — 不要重写 Agent 内核，编排层只负责包装已有的 CLI\n- [网页读取工具要受控而不是直连任意URL](/wiki/agent-session/as-concept-%E7%BD%91%E9%A1%B5%E8%AF%BB%E5%8F%96%E5%B7%A5%E5%85%B7%E8%A6%81%E5%8F%97%E6%8E%A7%E8%80%8C%E4%B8%8D%E6%98%AF%E7%9B%B4%E8%BF%9E%E4%BB%BB%E6%84%8FURL) — 给 agent 加网页能力，不是「让它能访问 URL」，而是新增两个受控工具：web_search(query) 和 web_fetch(url)\n- [能从代码库查到的不许问用户](/wiki/agent-session/as-concept-%E8%83%BD%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%BA%93%E6%9F%A5%E5%88%B0%E7%9A%84%E4%B8%8D%E8%AE%B8%E9%97%AE%E7%94%A8%E6%88%B7) — 凡是能从仓库/配置/日志查到的事实，都不该占用用户的回答带宽\n- [自动提交脚本要先确认当前分支](/wiki/agent-session/as-concept-%E8%87%AA%E5%8A%A8%E6%8F%90%E4%BA%A4%E8%84%9A%E6%9C%AC%E8%A6%81%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BD%93%E5%89%8D%E5%88%86%E6%94%AF) — 自动 commit/push 前先确认当前分支，否则会把改动提交到错误的分支\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) — Langfuse 这类可观测平台适合回答「为什么这样做、花了多少」，不能当 Agent 运行状态的真相源 —— 恢复依据必须存在自己的数据库里\n- 远程Agent控制要定义执行协议与状态模型 — 做「手机/网页远程指挥服务器里的 Claude Code/Codex」这类产品，只画 App 页面是不够的\n- 远程控制本机Agent要让bridge跑在本机 — 手机 App 不能直连命令行 Agent（Claude Code/Codex 不是 WebSocket 服务），中间要有一个 bridge 把 CLI 包成 WebSocket。\n- [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) — 跨 agent 的通用脚本不会被某个工具自动执行\n- [项目里的技能可能有多份副本](/wiki/agent-session/as-concept-%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%9A%84%E6%8A%80%E8%83%BD%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%BB%BD%E5%89%AF%E6%9C%AC) — 「项目本地有一套 skills」这句话不足以定位到具体目录 —— 同一个项目里可能同时存在 .agents/skills、.claude/skills、.codex/skills 多份副本，内容还不一致。\n- [验不到的部分要显式记为未验证](/wiki/agent-session/as-concept-%E9%AA%8C%E4%B8%8D%E5%88%B0%E7%9A%84%E9%83%A8%E5%88%86%E8%A6%81%E6%98%BE%E5%BC%8F%E8%AE%B0%E4%B8%BA%E6%9C%AA%E9%AA%8C%E8%AF%81) — 验收受工具能力限制而没覆盖到的项，必须显式写成 blocker，不能含糊带过、更不能写进\"通过\"\n- [内置能力只覆盖它声明的那一段](/wiki/agent-session/as-concept-%E5%86%85%E7%BD%AE%E8%83%BD%E5%8A%9B%E5%8F%AA%E8%A6%86%E7%9B%96%E5%AE%83%E5%A3%B0%E6%98%8E%E7%9A%84%E9%82%A3%E4%B8%80%E6%AE%B5) — 判断框架「是否内置某能力」，要问它覆盖到链路的哪一段，而不是有没有这个词\n\n### 前端工程（frontend · 57）\n\n- Cookie不区分端口所以同域多端口共享登录态 — 在 localhost:3018 登录后访问 localhost:3024 能直接用 —— 因为 Cookie 按域名隔离、不按端口隔离\n- Electron自带浏览器运行时是内存大头 — 内存高不是页面成本，是先付了一整套 Chromium + V8 + 渲染树的运行时基础成本\n- Vercel四个运行环境各填什么变量 — Vercel 一个变量名可以在四个环境填不同值：Production（正式域名吃它）、Preview（PR / 非主分支的临时预览网址）\n- flex子项的百分比max-height不可靠 — 想给 flex 子项加 max-h-full + overflow-hidden 来截断超长内容，会因为父 flex 容器没有显式高度而表现不一致\n- [依赖版本要锁主版本而非一律取最新](/wiki/agent-session/as-concept-%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E8%A6%81%E9%94%81%E4%B8%BB%E7%89%88%E6%9C%AC%E8%80%8C%E9%9D%9E%E4%B8%80%E5%BE%8B%E5%8F%96%E6%9C%80%E6%96%B0) — 装依赖时不要无脑选「更新到最新版本」：脚手架工具可以用最新版，项目运行依赖要按既定主版本锁住\n- [保存失败要落本地草稿并自动重试](/wiki/agent-session/as-concept-%E4%BF%9D%E5%AD%98%E5%A4%B1%E8%B4%A5%E8%A6%81%E8%90%BD%E6%9C%AC%E5%9C%B0%E8%8D%89%E7%A8%BF%E5%B9%B6%E8%87%AA%E5%8A%A8%E9%87%8D%E8%AF%95) — 云端保存失败时，正文不应只活在编辑器内存里\n- [停止与发送原地互换要加点击守卫](/wiki/agent-session/as-concept-%E5%81%9C%E6%AD%A2%E4%B8%8E%E5%8F%91%E9%80%81%E5%8E%9F%E5%9C%B0%E4%BA%92%E6%8D%A2%E8%A6%81%E5%8A%A0%E7%82%B9%E5%87%BB%E5%AE%88%E5%8D%AB) — 「停止」和「发送」放在同一个位置原地互换时，点击停止的瞬间状态已切回 idle、按钮已换成发送，鼠标抬起（click 事件）就落在发送按钮上，把草稿误发出去\n- 兼容fallback会让内容重复渲染 — 为旧模板保留的 fallback 路径，会让同一份内容在新模板里被渲染两次\n- 列表切换要用master-detail而非重建列表 — 左列表 + 右详情的界面，如果点卡片走「完整路由跳转」（/notes/[slug]），每次切换都会经历详情页挂载、列表重新渲染/排序、编辑器初始化，于是容易「选中后列表跳位」。\n- 单例库要显式声明同一版本否则运行时分裂 — 必须全局唯一的库（OTEL provider、React、状态容器等）\n- [可调与固定的边界按语义划分](/wiki/agent-session/as-concept-%E5%8F%AF%E8%B0%83%E4%B8%8E%E5%9B%BA%E5%AE%9A%E7%9A%84%E8%BE%B9%E7%95%8C%E6%8C%89%E8%AF%AD%E4%B9%89%E5%88%92%E5%88%86) — 「哪些样式允许用户调节」不该全局一刀切，边界由语义角色决定\n- 图片加载失败要可重试并升级到HTTPS — 头像/图片「全变成文字」通常是加载失败触发了 fallback，而不是设计改了文案\n- [图片粘贴要上传对象存储换永久URL](/wiki/agent-session/as-concept-%E5%9B%BE%E7%89%87%E7%B2%98%E8%B4%B4%E8%A6%81%E4%B8%8A%E4%BC%A0%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%8D%A2%E6%B0%B8%E4%B9%85URL) — 笔记正文只能存「图片地址」\n- [复制要区分可见文本与富文本](/wiki/agent-session/as-concept-%E5%A4%8D%E5%88%B6%E8%A6%81%E5%8C%BA%E5%88%86%E5%8F%AF%E8%A7%81%E6%96%87%E6%9C%AC%E4%B8%8E%E5%AF%8C%E6%96%87%E6%9C%AC) — 编辑器的「复制」要分两种产物：text/plain 只写屏幕可见文字，text/html 保留富文本\n- [延迟保存要捕获创建时的实体](/wiki/agent-session/as-concept-%E5%BB%B6%E8%BF%9F%E4%BF%9D%E5%AD%98%E8%A6%81%E6%8D%95%E8%8E%B7%E5%88%9B%E5%BB%BA%E6%97%B6%E7%9A%84%E5%AE%9E%E4%BD%93) — 延迟任务（debounce / setTimeout）在触发时才去读「当前活跃对象」，会在切换期间把 A 的数据写到 B 上\n- 引擎不做建模器 — 当渲染引擎需要在代码里手写顶点和面来造模型时，说明分工错了：引擎应该只负责「切模型 / 渲染模型」，建模交给外部工具，产物用标准格式（Blender → GLB）导入。\n- [手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88) — Markdown 实时渲染编辑器一旦核心逻辑是自己手搓、且越补越多，长期维护成本会失控\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1) — isOpen && <内容> 的条件渲染只有「进入动画」——展开时能靠 animate-in 播一次，收起时元素直接从 DOM 卸载，没有可过渡的中间态，所以看起来「无动画」。\n- [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) — 控件能调、值也确实传下去了，不代表会生效 —— 参数必须在消费方被真正消费，否则表现为「调整了没反应」，而且不报错\n- [改版后旧路由仍指向旧实现](/wiki/agent-session/as-concept-%E6%94%B9%E7%89%88%E5%90%8E%E6%97%A7%E8%B7%AF%E7%94%B1%E4%BB%8D%E6%8C%87%E5%90%91%E6%97%A7%E5%AE%9E%E7%8E%B0) — 改版后用户点进某个入口却看到旧界面，第一嫌疑不是「新组件写错了」，而是「那条 route 还 import 着旧组件」\n- 改环境变量要触发云端重建而非重新上传 — 在 Vercel 上改完环境变量，正确动作是「重新构建已有部署」（vercel redeploy <已有部署URL> --target production），而不是 vercel deploy --prod。\n- 新建对话的hero要淡入入场而非加载态 — 用户说「开启新对话的过渡动画」时，指的可能是**入场动效**（hero 区缓缓淡入 + 轻微上移），而不是转圈加载态\n- [显示阈值应按元素可见性而非固定像素](/wiki/agent-session/as-concept-%E6%98%BE%E7%A4%BA%E9%98%88%E5%80%BC%E5%BA%94%E6%8C%89%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81%E6%80%A7%E8%80%8C%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%83%8F%E7%B4%A0) — 「下滑到一定距离后顶栏才显示标题」若用固定像素阈值（如 scrollTop > 18），会因为字号/行高/布局不同而提前或延后出现\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C) — Redis 和 IndexedDB 不是可互换的两种缓存 —— 差别不在性能，在「缓存放在哪一层、给谁用」\n- [本地优先不等于纯文件](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%BA%AF%E6%96%87%E4%BB%B6) — local-first ≠ file-only；卡顿根因通常是网络请求还在切换内容的关键路径上\n- 条件return前必须调用所有hooks — 进入子层白屏、content area 全空、React 渲染 crash，若组件里有「提前 return」，第一嫌疑是 hooks 调用顺序被破坏，而不是后端数据格式。\n- [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1) — 流式渲染时 arr[last] = { role, content } 是整体替换，会把同一对象上后加的 thinking 字段整个丢掉\n- 浅层改URL不会切换组件 — 浅层路由只改地址栏，组件树不变，写在目标路由里的 effect 不会跑\n- 浮层要收敛到一个共享primitive — 所有弹出卡片（菜单/弹窗/下拉）应共用同一个 primitive，而不是每个局部各写一套\n- 滚动层会裁剪溢出内容要与显示层拆开 — 只要一个元素负责 overflow-x: auto，它就会裁剪超出边界的内容\n- [滚动条顶到固定栏要调视口而非隐藏滚动条](/wiki/agent-session/as-concept-%E6%BB%9A%E5%8A%A8%E6%9D%A1%E9%A1%B6%E5%88%B0%E5%9B%BA%E5%AE%9A%E6%A0%8F%E8%A6%81%E8%B0%83%E8%A7%86%E5%8F%A3%E8%80%8C%E9%9D%9E%E9%9A%90%E8%97%8F%E6%BB%9A%E5%8A%A8%E6%9D%A1) — 「滚动条轨道穿过了顶部固定 toolbar」的正确修法是让滚动视口从 toolbar 下方开始（margin-top: 46px，滚动容器作为 flex 子项），滚动条天然不会顶到 toolbar。\n- [焦点环画在圆角外会露出四角](/wiki/agent-session/as-concept-%E7%84%A6%E7%82%B9%E7%8E%AF%E7%94%BB%E5%9C%A8%E5%9C%86%E8%A7%92%E5%A4%96%E4%BC%9A%E9%9C%B2%E5%87%BA%E5%9B%9B%E8%A7%92) — 「边框四角有奇怪的蓝色阴影」不是边框坏了，是 focus ring 画在圆角边框外侧：通用 Input 自带的 focus-visible ring 没有跟随圆角。\n- 父组件每渲染生成新对象会触发effect循环 — 「Maximum update depth exceeded」\n- [环境变量校验要按模块懒加载](/wiki/agent-session/as-concept-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E6%A0%A1%E9%AA%8C%E8%A6%81%E6%8C%89%E6%A8%A1%E5%9D%97%E6%87%92%E5%8A%A0%E8%BD%BD) — 把所有环境变量都设成「启动/初始化时必填」，会让还没开发到的模块阻塞已经可用的功能：只是想登录，Auth 初始化却因为 AI key、对象存储、邮件配置不齐而报错。正解是按模块懒加载——用到哪个模块才校验那组变量。\n- [登录发起与回调必须同域名](/wiki/agent-session/as-concept-%E7%99%BB%E5%BD%95%E5%8F%91%E8%B5%B7%E4%B8%8E%E5%9B%9E%E8%B0%83%E5%BF%85%E9%A1%BB%E5%90%8C%E5%9F%9F%E5%90%8D) — 看到 InvalidCheck: pkceCodeVerifier value could not be parsed 这类登录报错，先查「发起登录的域名」和「回调回来的域名」是否一致。\n- [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7) — 「加缓存」不是一个档位：从会话缓存到完整离线编辑差三个等级，实现与风险都不同 —— 先说清要哪一级，再动手\n- [移动应用正式分发需要签名](/wiki/agent-session/as-concept-%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E6%AD%A3%E5%BC%8F%E5%88%86%E5%8F%91%E9%9C%80%E8%A6%81%E7%AD%BE%E5%90%8D) — iOS 和 Android 的正式安装包都需要签名\n- [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83) — 流式协议里\"权威终态\"（turn.completed）到达后，尾部的 EOF / 传输错误 / 迟到分片都不能把状态改回进行中或失败 —— 否则用户看到\"已完成的回答被截断成半截 + 卡住\"。\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB) — 不要为了「保存及时」改成每个字符都落盘\n- [编辑器与只读渲染要分层](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E4%B8%8E%E5%8F%AA%E8%AF%BB%E6%B8%B2%E6%9F%93%E8%A6%81%E5%88%86%E5%B1%82) — 编辑场景用完整编辑器引擎（Milkdown/ProseMirror），只读场景用轻量自研渲染器 —— 不要拿编辑器去渲染只读内容\n- [编辑器初始化会触发假保存](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BC%9A%E8%A7%A6%E5%8F%91%E5%81%87%E4%BF%9D%E5%AD%98) — 富文本/Markdown 编辑器加载一篇笔记时，会把 Markdown 解析成内部结构再序列化回来，过程中「整理格式」（表格空格、分隔线长度、checkbox 写法）——内容语义没变，但字符串变了。\n- [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81) — 只要「显示什么」依赖「光标在哪」，一旦 selection 状态同步滞后，画面就和真实编辑状态分叉 —— 症状是标记莫名消失、或看起来正常但输入落到错误位置，而内容本身没丢。\n- 编辑重发与重新生成要先截断后续轮次 — 编辑一条历史消息重发、或对某轮点「重新生成」时，必须先把该轮次及之后的所有消息从会话里截断（DB 层 truncateFromTurn + 模型上下文同步截断），再发送新内容\n- [聊天记录要从底部锚定加载](/wiki/agent-session/as-concept-%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E8%A6%81%E4%BB%8E%E5%BA%95%E9%83%A8%E9%94%9A%E5%AE%9A%E5%8A%A0%E8%BD%BD) — 进入聊天会话时应该「直接定位到最下方、向上翻才加载更早消息」，而不是「先全屏 loading、加载完再滚到底」\n- [虚拟列表与布局动画不能同时接管位置](/wiki/agent-session/as-concept-%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E4%B8%8E%E5%B8%83%E5%B1%80%E5%8A%A8%E7%94%BB%E4%B8%8D%E8%83%BD%E5%90%8C%E6%97%B6%E6%8E%A5%E7%AE%A1%E4%BD%8D%E7%BD%AE) — 虚拟滚动用绝对定位 + transform 控制卡片位置，布局动画（如 Motion 的 layout）也修改 position/transform —— 两者同时接管布局就会抖动或位置错位。\n- [解析器卡死看游标是否推进](/wiki/agent-session/as-concept-%E8%A7%A3%E6%9E%90%E5%99%A8%E5%8D%A1%E6%AD%BB%E7%9C%8B%E6%B8%B8%E6%A0%87%E6%98%AF%E5%90%A6%E6%8E%A8%E8%BF%9B) — 流式渲染偶发\"卡死\"、CPU 打满，先怀疑解析循环有没有推进游标，而不是后端或模型\n- [跨源取数据要靠自建代理](/wiki/agent-session/as-concept-%E8%B7%A8%E6%BA%90%E5%8F%96%E6%95%B0%E6%8D%AE%E8%A6%81%E9%9D%A0%E8%87%AA%E5%BB%BA%E4%BB%A3%E7%90%86) — 本地不同端口 = 不同源\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) — 「刚写的字被回退」不是文件写错了，而是异步保存返回顺序不可靠：旧请求晚回来时，把过期的 content_md 又合并回了前端内存\n- [过程展示按时间线分层而不是分组聚合](/wiki/agent-session/as-concept-%E8%BF%87%E7%A8%8B%E5%B1%95%E7%A4%BA%E6%8C%89%E6%97%B6%E9%97%B4%E7%BA%BF%E5%88%86%E5%B1%82%E8%80%8C%E4%B8%8D%E6%98%AF%E5%88%86%E7%BB%84%E8%81%9A%E5%90%88) — Agent 的执行过程应按「一次 turn 的完整时间线」呈现，而不是把 reasoning 和 tool call 各自聚合成组\n- [运行时依赖属于平台不属于业务代码](/wiki/agent-session/as-concept-%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BE%9D%E8%B5%96%E5%B1%9E%E4%BA%8E%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%B1%9E%E4%BA%8E%E4%B8%9A%E5%8A%A1%E4%BB%A3%E7%A0%81) — 构建时冒出 hermes-engine 之类你不认识的依赖，先分清它是「平台/运行时自带的」还是「业务代码引入的」——多半是前者，不要去动它\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8) — 「点击后加载动画」不能用无限循环动画假装：要么绑定真实加载状态，要么基于经过时间连续推进\n- [隐藏态按钮要保留命中区](/wiki/agent-session/as-concept-%E9%9A%90%E8%97%8F%E6%80%81%E6%8C%89%E9%92%AE%E8%A6%81%E4%BF%9D%E7%95%99%E5%91%BD%E4%B8%AD%E5%8C%BA) — 用 pointer-events: none 让 hover 才出现的按钮「不可点」，会让光标先落在该区域时事件被底下的链接/卡片吃掉——按钮随后出现也点不到，表现为「点三点菜单有时候没反应」。\n- [页面切换的四种刷新要分清](/wiki/agent-session/as-concept-%E9%A1%B5%E9%9D%A2%E5%88%87%E6%8D%A2%E7%9A%84%E5%9B%9B%E7%A7%8D%E5%88%B7%E6%96%B0%E8%A6%81%E5%88%86%E6%B8%85) — 「页面慢 / 数据没更新」这类问题，先要问清是哪一种「刷新」—— 四种刷新走的是四条完全不同的链路，混着讨论必然各说各话\n- [页面变慢先查每页鉴权与无分页拉取](/wiki/agent-session/as-concept-%E9%A1%B5%E9%9D%A2%E5%8F%98%E6%85%A2%E5%85%88%E6%9F%A5%E6%AF%8F%E9%A1%B5%E9%89%B4%E6%9D%83%E4%B8%8E%E6%97%A0%E5%88%86%E9%A1%B5%E6%8B%89%E5%8F%96) — 页面「整体卡」通常不是单点故障，而是三层叠加：① 服务端每个页面都先跑鉴权（被强制动态渲染，先等服务器 + 数据库）\n- [首次内容事件不能无条件跳过](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%86%85%E5%AE%B9%E4%BA%8B%E4%BB%B6%E4%B8%8D%E8%83%BD%E6%97%A0%E6%9D%A1%E4%BB%B6%E8%B7%B3%E8%BF%87) — 编辑器为了避免「刚打开就标记为已修改」，常会跳过第一次内容变更事件\n- [骨架屏呼吸动画用独立亮度层](/wiki/agent-session/as-concept-%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%91%BC%E5%90%B8%E5%8A%A8%E7%94%BB%E7%94%A8%E7%8B%AC%E7%AB%8B%E4%BA%AE%E5%BA%A6%E5%B1%82) — 做骨架屏的呼吸/闪烁效果，要分两层：底层是始终不透明、不变化的灰色块\n- 高频手势缩放不要走React状态 — 触控板捏合 / 滚轮缩放掉帧，根因通常不是「事件太多」，而是把每次事件都塞进了 React state，还顺带改了大 DOM 的布局\n\n### 产品方法论（product · 12）\n\n- 一次循环只做一个可体验的v1能力 — 0-1 产品的一次迭代循环，范围应是「用户能真正体验到的、最小的完整 v1 能力」——不是一个微小补丁，也不是一段多周路线图\n- 修复范围分保守彻底与最小闭环 — 同一个问题给两档方案（只改表层 / 从源头重构）是错的提问方式 —— 缺了第三档「最小闭环」：把修复点挪到正确的层，但只加一个字段、不做全量重构\n- [先恢复可信基线再谈重构](/wiki/agent-session/as-product-%E5%85%88%E6%81%A2%E5%A4%8D%E5%8F%AF%E4%BF%A1%E5%9F%BA%E7%BA%BF%E5%86%8D%E8%B0%88%E9%87%8D%E6%9E%84) — 决定「重构项目」之前，先做一次架构与工作流审计，把现状冻结、边界确认 —— 因为要修的往往是契约，不是目录\n- [分享要反映品牌与产品调性](/wiki/agent-session/as-concept-%E5%88%86%E4%BA%AB%E8%A6%81%E5%8F%8D%E6%98%A0%E5%93%81%E7%89%8C%E4%B8%8E%E4%BA%A7%E5%93%81%E8%B0%83%E6%80%A7) — 对外分享出去的页面（分享链接、分享卡片）是品牌触点，不能只是「把内容渲染成普通文档页」\n- [北极星指标要量价值闭环](/wiki/agent-session/as-concept-%E5%8C%97%E6%9E%81%E6%98%9F%E6%8C%87%E6%A0%87%E8%A6%81%E9%87%8F%E4%BB%B7%E5%80%BC%E9%97%AD%E7%8E%AF) — Agent 产品的北极星不该量「调用得勤不勤」，而要量「价值有没有闭环」——用户是否真的把 Agent 的产出采纳并沉淀成了自己的资产\n- [地基阶段先跑通基础件再谈抽象](/wiki/agent-session/as-concept-%E5%9C%B0%E5%9F%BA%E9%98%B6%E6%AE%B5%E5%85%88%E8%B7%91%E9%80%9A%E5%9F%BA%E7%A1%80%E4%BB%B6%E5%86%8D%E8%B0%88%E6%8A%BD%E8%B1%A1) — 做地基阶段（数据层 / 后端基础件）时，先把基础件跑通，不要过早为每个业务做抽象分层\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98) — 用户要「完整方案」时，不要把完整方案砍成 MVP，也不要把完整蓝图理解成「所有东西同一阶段交付」\n- [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3) — 如果一个「知识库」只做到文件夹的形态，它本质上就是笔记的文件夹系统，不该再单独占一个顶层入口 —— 要么降级为笔记里的顶层集合，要么给它文件夹之外的意义\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) — 产品的价值只有变成用户能感知的具体对照时才存在\n- 答疑是功能层搜题只是手段层 — 答疑是用户场景层的完整功能（答对 + 讲明白），搜题只是手段、讲题是另一层\n- 简历写的是解决方案不是执行动作 — 写动作=执行层，写判断（为什么必须解决/错误在哪/怎么验证）=解决方案层\n- 评审设计可行性先问方案再定难度 — 问「这个设计能不能做出来 / 难度多大」时，不能直接给难度分级和实现方向 —— 要先问「你打算怎么做」\n\n### 自我管理与复盘（self-management · 1）\n\n- [学领域先看一流成品而非方法论](/wiki/agent-session/as-concept-%E5%AD%A6%E9%A2%86%E5%9F%9F%E5%85%88%E7%9C%8B%E4%B8%80%E6%B5%81%E6%88%90%E5%93%81%E8%80%8C%E9%9D%9E%E6%96%B9%E6%B3%95%E8%AE%BA) — 方法论是二手归纳；先看一流成品建立「好是什么样」的判据\n\n### 知识库架构（meta）（knowledge-base · 14）\n\n- Agent读语义文件App读结构化存储 — 知识库不该让 agent 直连数据库：SQLite 是导航系统，Markdown 才是知识本体\n- Schema是声明Migration是历史 — schema.prisma 只是「目标结构长什么样」的声明，它不会可靠地把生产库改好\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) — 噪声不该留到提炼时才处理\n- [列表卡片元信息用内容作者而非平台名](/wiki/agent-session/as-concept-%E5%88%97%E8%A1%A8%E5%8D%A1%E7%89%87%E5%85%83%E4%BF%A1%E6%81%AF%E7%94%A8%E5%86%85%E5%AE%B9%E4%BD%9C%E8%80%85%E8%80%8C%E9%9D%9E%E5%B9%B3%E5%8F%B0%E5%90%8D) — 同一份内容在「列表卡片」和「正文」两处的元信息该显示什么，是两套规则：列表卡片要能认出「这是谁写的」（订阅博主名 / 用户编辑过的名字），正文则沿用剪藏那套元信息。\n- [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE) — 内容导入时如果把不同来源的正文塞进同一个字段，就会丢掉「它原本是什么格式」这个信息，渲染时自然选错渲染链\n- [抓取结果不能无条件覆盖源数据](/wiki/agent-session/as-concept-%E6%8A%93%E5%8F%96%E7%BB%93%E6%9E%9C%E4%B8%8D%E8%83%BD%E6%97%A0%E6%9D%A1%E4%BB%B6%E8%A6%86%E7%9B%96%E6%BA%90%E6%95%B0%E6%8D%AE) — 二次抓取（网页全文补全）的结果必须通过有效性检查才能覆盖 RSS 原始内容 —— 否则反爬页面会把干净的标题和摘要覆盖成域名与脚本\n- [放宽过滤会连噪声一起放进来](/wiki/agent-session/as-concept-%E6%94%BE%E5%AE%BD%E8%BF%87%E6%BB%A4%E4%BC%9A%E8%BF%9E%E5%99%AA%E5%A3%B0%E4%B8%80%E8%B5%B7%E6%94%BE%E8%BF%9B%E6%9D%A5) — 为了修「新内容被跳过」而删掉入库过滤条件，会把「只有摘要、没有正文」的条目一起放进来\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A) — 多端产品在写同步协议、迁移方案之前，必须先定「谁是数据权威」（source of truth）\n- [文章元信息用发布日期而非创建日期](/wiki/agent-session/as-concept-%E6%96%87%E7%AB%A0%E5%85%83%E4%BF%A1%E6%81%AF%E7%94%A8%E5%8F%91%E5%B8%83%E6%97%A5%E6%9C%9F%E8%80%8C%E9%9D%9E%E5%88%9B%E5%BB%BA%E6%97%A5%E6%9C%9F) — 剪藏详情页顶部的日期应是「文章发布日期」，不是入库创建日期\n- [权威wiki是索引加精选知识](/wiki/agent-session/as-knowledge-base-%E6%9D%83%E5%A8%81wiki%E6%98%AF%E7%B4%A2%E5%BC%95%E5%8A%A0%E7%B2%BE%E9%80%89%E7%9F%A5%E8%AF%86) — 权威 Wiki 的作用不是「让文档更好看」，而是给人和 Agent 一个统一的 Project Truth（项目事实入口）：Linear 告诉 Agent「这次要做什么」\n- [清洗合并会破坏源格式语义](/wiki/agent-session/as-concept-%E6%B8%85%E6%B4%97%E5%90%88%E5%B9%B6%E4%BC%9A%E7%A0%B4%E5%9D%8F%E6%BA%90%E6%A0%BC%E5%BC%8F%E8%AF%AD%E4%B9%89) — 把飞书导出的原文清洗、合并成 Markdown 时，格式语义会静默丢失 —— 而验收标准是「渲染出来的样子」，不是「文本内容对不对」\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) — 不是所有 session 都值得入库：只有能提炼出概念或 topic 的轮才进\n- 知识库先编译再查而不是查询时拼原文 — 传统 RAG 每次提问都从原始文档的 chunk 里临时拼答案\n- [首次导入与增量更新要用不同规则](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E7%94%A8%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99) — 「首次订阅导入」和「定时增量更新」是两种不同任务，不能共用一条固定条数的抓取规则 —— 否则首次的截断设置会被后续增量立刻抵消\n\n### 本机排障（diagnosis · 53）\n\n- GitHub打不开先分清主站与静态资源域名 — 用户说\"打不开某个站点\"时，先问清是整站不通还是只有部分资源不通 —— 按域名分层测一遍，比直接归因\"被墙了\"准确得多\n- [清理客户端缓存先分清哪层可丢](/wiki/agent-session/as-concept-%E6%B8%85%E7%90%86%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98%E5%85%88%E5%88%86%E6%B8%85%E5%93%AA%E5%B1%82%E5%8F%AF%E4%B8%A2) — 「浏览器缓存占了 22G」是几层混在一起；判据是「丢了会不会影响数据与登录态」\n- INSERT OR IGNORE会让旧行不更新 — 「DB 里新数据的字段是对的，界面上旧数据还是旧值」——先查插入语句是不是 INSERT OR IGNORE\n- MCP连不上先分层定位配置令牌与代理 — MCP 连不上时按「配置 → 令牌 → 代理/TLS」分层定位，不要一上来就重装或反复重登\n- worktree是独立目录产物与配置都隔离 — git worktree 不是「在当前目录切了个分支」，而是「分支 + 一个独立文件夹」\n- [两条写入路径要用内容判重](/wiki/agent-session/as-concept-%E4%B8%A4%E6%9D%A1%E5%86%99%E5%85%A5%E8%B7%AF%E5%BE%84%E8%A6%81%E7%94%A8%E5%86%85%E5%AE%B9%E5%88%A4%E9%87%8D) — 当同一条数据有两条写入路径（本地直写 + 远端镜像回灌）时，只用 id 去重一定会重复 —— 因为两条路径会给出不同的 id\n- 中转源不更新先分清是哪一层 — 聚合端「这条源没更新」时，先数一下这条源经过几层中转\n- [迁移文件存在不等于数据库已升级](/wiki/agent-session/as-concept-%E8%BF%81%E7%A7%BB%E6%96%87%E4%BB%B6%E5%AD%98%E5%9C%A8%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B7%B2%E5%8D%87%E7%BA%A7) — 有 migration 文件 ≠ 它被执行过；schema 声明与库的真实结构是两件事\n- [端口占用会把你连到别人的服务](/wiki/agent-session/as-concept-%E7%AB%AF%E5%8F%A3%E5%8D%A0%E7%94%A8%E4%BC%9A%E6%8A%8A%E4%BD%A0%E8%BF%9E%E5%88%B0%E5%88%AB%E4%BA%BA%E7%9A%84%E6%9C%8D%E5%8A%A1) — 自己刚起的服务端口被别的 worktree 占着，请求打到别人的进程上，症状与根因完全错位\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) — 当运行时的东西已经全部来自数据库，仓库里的 prototypes/、旧文档、旧测试假数据、旧 migration 默认值仍然存在，会让 agent 反复误判「还有一套本地实现」。\n- 以前能用最近坏了先查自己改了什么 — 「之前没问题、最近出问题」时，默认假设是自己这边的改动造成的回归：先去翻最近几次提交动了哪条链路，而不是先怀疑外部源（网站改版、上游接口、环境）\n- [停机前先确认有可恢复备份](/wiki/agent-session/as-concept-%E5%81%9C%E6%9C%BA%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E6%9C%89%E5%8F%AF%E6%81%A2%E5%A4%8D%E5%A4%87%E4%BB%BD) — 对生产数据做需要停机的变更（迁移、替换数据库、重写存储）之前，必须先确认存在可恢复的备份 —— 优先用平台自带的卷级 snapshot，而不是自己临时想办法\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) — 500 status code (no body) 这种「有状态码、无响应体」的报错是平台层（Vercel 函数超时/崩溃）的格式\n- [凭据正确却被拒先查登录校验哪个字段](/wiki/agent-session/as-concept-%E5%87%AD%E6%8D%AE%E6%AD%A3%E7%A1%AE%E5%8D%B4%E8%A2%AB%E6%8B%92%E5%85%88%E6%9F%A5%E7%99%BB%E5%BD%95%E6%A0%A1%E9%AA%8C%E5%93%AA%E4%B8%AA%E5%AD%97%E6%AE%B5) — 「账号密码是对的，但 API 说凭据无效」不一定错在密码 —— 先看登录逻辑用哪个字段做校验\n- [凭据来源不唯一会让客户端反复刷新](/wiki/agent-session/as-concept-%E5%87%AD%E6%8D%AE%E6%9D%A5%E6%BA%90%E4%B8%8D%E5%94%AF%E4%B8%80%E4%BC%9A%E8%AE%A9%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%8F%8D%E5%A4%8D%E5%88%B7%E6%96%B0) — 同一份 auth 文件里并存登录态与注入 key 两套凭据来源时，客户端刷新会互相触发 —— 表现为「一打开就反复刷新」\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) — 「我本地 app 还是旧版本、新功能都没有」这类症状，第一件事不是查功能代码，而是确认你实际打开的是哪一份产物：安装目录（/Applications/*.app）里的是旧版本，刚构建出的新版本还躺在构建输出目录里。\n- 只有第一发失败要查冷启动与连接重试 — 「每个会话第一发必失败、重试就好」是服务端无状态依赖的冷启动，不是业务逻辑\n- 合并绿灯要对应当前HEAD — PR 上的绿灯针对的是那个提交，不是刚改好的版本；本地未 push 的修复不在其中\n- [合盖仍会睡眠后台任务会被中断](/wiki/agent-session/as-concept-%E5%90%88%E7%9B%96%E4%BB%8D%E4%BC%9A%E7%9D%A1%E7%9C%A0%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E4%BC%9A%E8%A2%AB%E4%B8%AD%E6%96%AD) — 想让 Codex/Claude 这类后台任务跑完，不能靠 agent 自己的设置——它们没有「合盖后继续跑」的开关，控制权在 macOS 电源管理\n- [同一应用开出两个窗口先查单实例限制](/wiki/agent-session/as-concept-%E5%90%8C%E4%B8%80%E5%BA%94%E7%94%A8%E5%BC%80%E5%87%BA%E4%B8%A4%E4%B8%AA%E7%AA%97%E5%8F%A3%E5%85%88%E6%9F%A5%E5%8D%95%E5%AE%9E%E4%BE%8B%E9%99%90%E5%88%B6) — 桌面应用出现两个窗口，先怀疑两件事：框架没做单实例限制、旧进程没退出 —— 而不是渲染 bug\n- [同目录多会话会抢分支](/wiki/agent-session/as-concept-%E5%90%8C%E7%9B%AE%E5%BD%95%E5%A4%9A%E4%BC%9A%E8%AF%9D%E4%BC%9A%E6%8A%A2%E5%88%86%E6%94%AF) — Git 的 HEAD / 当前分支是「目录级」状态，不是「会话级」状态\n- 回滚要保留数据迁移的兼容路径 — 代码可以回滚到上一个版本，但已经跑过的数据迁移不会自己回滚 —— 所以「回滚」这件事必须在写迁移时就设计好兼容路径，而不是出事时才发现回不去\n- 备用构建目录不要嵌在next目录里 — 为了在别的端口起第二个 dev server 而改 distDir 时，把临时目录放在 .next 里面（如 .next/codex-3001）\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86) — 判断「这条内容到底有没有入库」时，必须拿系统间共享的那条标识去对照\n- 开PR前先确认基线的远端状态 — 本地主线领先远端主线很多提交时，从功能分支直接开 PR 会把这一长串与本次任务无关的历史一起带进去\n- [异步补齐长期不生效要查写入失败](/wiki/agent-session/as-concept-%E5%BC%82%E6%AD%A5%E8%A1%A5%E9%BD%90%E9%95%BF%E6%9C%9F%E4%B8%8D%E7%94%9F%E6%95%88%E8%A6%81%E6%9F%A5%E5%86%99%E5%85%A5%E5%A4%B1%E8%B4%A5) — 「异步生成的内容（正文、缩略图、转码）标题摘要早就有、正文迟迟不补」，如果已经超过正常窗口很久，那就不是「还在处理中」，而是写入侧失败\n- 打不开的app先查隔离标记与签名 — 下载来的 .app 带 quarantine 属性又只有 ad-hoc 签名时会被 Gatekeeper 拦下\n- [抓取要存清洗后的正文而不是整页](/wiki/agent-session/as-concept-%E6%8A%93%E5%8F%96%E8%A6%81%E5%AD%98%E6%B8%85%E6%B4%97%E5%90%8E%E7%9A%84%E6%AD%A3%E6%96%87%E8%80%8C%E4%B8%8D%E6%98%AF%E6%95%B4%E9%A1%B5) — 抓取类系统应该存「清洗后的正文」，不是「抓到的原始响应」\n- [接口验证通过不等于浏览器已登录](/wiki/agent-session/as-concept-%E6%8E%A5%E5%8F%A3%E9%AA%8C%E8%AF%81%E9%80%9A%E8%BF%87%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%B2%E7%99%BB%E5%BD%95) — 「验证 API 登录」和「浏览器页面建立登录会话」是两件事 —— 接口返回 200 只能说明账号有效，不代表浏览器拿到了 session cookie\n- [改远端库结构前先确认库身份与回滚](/wiki/agent-session/as-concept-%E6%94%B9%E8%BF%9C%E7%AB%AF%E5%BA%93%E7%BB%93%E6%9E%84%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BA%93%E8%BA%AB%E4%BB%BD%E4%B8%8E%E5%9B%9E%E6%BB%9A) — db:push 这类直接改远端数据库持久结构的操作，执行前必须先确认「这是测试库、共享库还是生产库」以及有无 migration 与回滚能力 —— 它改的不是本地代码，是所有人共用的持久结构。\n- [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE) — 「重新部署」不一定应用新配置 —— 有些平台会复用旧的部署清单\n- [文件被回退先分清是工具还是并发会话](/wiki/agent-session/as-concept-%E6%96%87%E4%BB%B6%E8%A2%AB%E5%9B%9E%E9%80%80%E5%85%88%E5%88%86%E6%B8%85%E6%98%AF%E5%B7%A5%E5%85%B7%E8%BF%98%E6%98%AF%E5%B9%B6%E5%8F%91%E4%BC%9A%E8%AF%9D) — 看到「文件被 linter 大幅回退了」，第一步不是去查 linter 配置，而是先确认这个工具到底有没有写文件的能力\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90) — 聚合式的 pnpm dev 会启动整条后端链路，且很可能读到生产环境变量 —— 本地开发在悄悄消耗生产资源\n- [本地测试要显式覆盖数据源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E8%A6%81%E6%98%BE%E5%BC%8F%E8%A6%86%E7%9B%96%E6%95%B0%E6%8D%AE%E6%BA%90) — 分支的 .env.local 常是指向主项目根目录的软链，里面写的是远程/生产数据源\n- [本机卡顿先清残留开发进程](/wiki/agent-session/as-concept-%E6%9C%AC%E6%9C%BA%E5%8D%A1%E9%A1%BF%E5%85%88%E6%B8%85%E6%AE%8B%E7%95%99%E5%BC%80%E5%8F%91%E8%BF%9B%E7%A8%8B) — 开发时「莫名越来越卡」，常见根因不是当前代码死循环，而是环境被残留进程拖爆：多个端口的 dev server、遗留的 build 进程、旧的 .next-* 缓存目录同时存在。\n- [杀端口要区分服务端与客户端连接](/wiki/agent-session/as-concept-%E6%9D%80%E7%AB%AF%E5%8F%A3%E8%A6%81%E5%8C%BA%E5%88%86%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B8%8E%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5) — lsof -ti:PORT | xargs kill -9 会同时杀掉监听该端口的服务端进程和连到该端口的客户端进程（浏览器渲染进程），要先用 lsof -i:PORT 看清 COMMAND 再挑着杀。\n- 样式丢失先核对类名再怀疑缓存与权限 — 「CSS 完全没渲染」这类现象，排查顺序应从「当前组件用的类名」与「CSS 文件里实际存在的类名」是否对得上开始，而不是先怀疑缓存或文件权限\n- [滚动部署期间改库结构会撞上旧容器的锁](/wiki/agent-session/as-concept-%E6%BB%9A%E5%8A%A8%E9%83%A8%E7%BD%B2%E6%9C%9F%E9%97%B4%E6%94%B9%E5%BA%93%E7%BB%93%E6%9E%84%E4%BC%9A%E6%92%9E%E4%B8%8A%E6%97%A7%E5%AE%B9%E5%99%A8%E7%9A%84%E9%94%81) — 在滚动部署（rolling deploy）的平台上对 SQLite 做结构/模式迁移，会失败在 PRAGMA journal_mode=DELETE 这类需要独占锁的步骤上 —— 因为新容器启动时旧容器还持有锁。\n- 真机白屏先分清Debug包与证书 — iOS 真机装上 App 却打不开/白屏/闪退，先别怀疑业务代码\n- 项目占空间先查构建缓存与旧worktree — 一个 monorepo「占了十几个 G」，通常不是源码占的，而是构建缓存 + 旧 worktree + 构建产物\n- [观测平台的环境维度由数据产生](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E7%9A%84%E7%8E%AF%E5%A2%83%E7%BB%B4%E5%BA%A6%E7%94%B1%E6%95%B0%E6%8D%AE%E4%BA%A7%E7%94%9F) — 观测平台（Langfuse）的环境列表是数据驱动的：只有当至少一条带 environment=X 的 trace 上报过，UI 里才会出现 X 这个选项\n- 讲bug先讲现象再讲根因 — 解释一个 bug 时，先说「你会看到什么坏现象」，再说根因和改法\n- [远端主线可能与本地主线无共同祖先](/wiki/agent-session/as-concept-%E8%BF%9C%E7%AB%AF%E4%B8%BB%E7%BA%BF%E5%8F%AF%E8%83%BD%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%B8%BB%E7%BA%BF%E6%97%A0%E5%85%B1%E5%90%8C%E7%A5%96%E5%85%88) — 看到「远端 main 很旧」时，先别假设是普通分叉\n- [集成已合并不等于运行时已启用](/wiki/agent-session/as-concept-%E9%9B%86%E6%88%90%E5%B7%B2%E5%90%88%E5%B9%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E8%BF%90%E8%A1%8C%E6%97%B6%E5%B7%B2%E5%90%AF%E7%94%A8) — 「代码已接入」与「运行时已启用」是两个状态；配置为空时常被设计成静默关闭\n- [需要认证的命令不要并行执行](/wiki/agent-session/as-concept-%E9%9C%80%E8%A6%81%E8%AE%A4%E8%AF%81%E7%9A%84%E5%91%BD%E4%BB%A4%E4%B8%8D%E8%A6%81%E5%B9%B6%E8%A1%8C%E6%89%A7%E8%A1%8C) — 并行跑两条需要登录的命令，两条都会各自发现「当前未登录」并各自发起一次授权流程，于是浏览器弹出两个授权页\n- 面板多出的固定区块先查数据源再改前端 — 前端\"总是显示一个不该有的卡片\"，且不随切换条件变化时，问题多半在数据链路而不是渲染逻辑：请求被转发到了固定实例，而该实例的数据里包含了对端实例的信息\n- 验收要按唯一标识选中实例 — 跑的是刚构建的新 binary，却用应用名去激活和截图（osascript tell application \"Mewmo\" / pgrep -x mewmo）\n- [高负载发烫先排除负载而非硬件](/wiki/agent-session/as-concept-%E9%AB%98%E8%B4%9F%E8%BD%BD%E5%8F%91%E7%83%AB%E5%85%88%E6%8E%92%E9%99%A4%E8%B4%9F%E8%BD%BD%E8%80%8C%E9%9D%9E%E7%A1%AC%E4%BB%B6) — 无风扇机型「莫名发烫」的第一假设应是持续负载，不是硬件故障\n- 同名provider冲突会让模型路由漂移 — 自定义与内置 provider 同名时，只带模型名、不带 provider 的会话会解析到内置后端；用报错措辞判断请求实际落在谁那里",
    "## 四、待探索（有问题没答案 —— 最有价值的钩子）\n\n- 遇到**具体难题**想逃避，怎么破（已有环境/具体动作框架，缺难题切入法）\n- 各渠道免费额度的**刷新机制**横向对比\n- 数据缺**趋势视角**：环比/同周期对比怎么建\n- 「RAG vs 微调」补成正式概念页（clean 里只有 agent 提及，缺提问作为依据）\n- 访谈中段怎么追深（第一句开场已解决，缺中段追问框架）\n- 「一个 Goal 里同时有笔记 / wiki / chat」怎么建模\n- 内置能力只覆盖它声明的那一段 —— 仅 2026-08-03 一个来源日\n- 迁移要连归属信息一起搬 —— 仅 2026-08-10 一个来源日\n- 叙事单位是能力轴，不是项目 —— 仅 2026-08-20 一个来源日\n- 构造的测试数据要标为构造，不能算作真实缺陷 —— 缺第二个来源日\n- 相似度分数不等于答案可用 —— 缺第二个来源日\n- 结论的推广范围决定实验用构造数据还是真实链路 —— 缺第二个来源日\n\n---\n\n*共 273 页 · 更新于 2026-10-11*"
  ]
},
{
  "id": "as-concept-dogfooding",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "dogfooding",
  "oneLiner": "**结论：dogfooding 是「用真实使用来验证产品价值」——但它是必要条件，不是充分条件。**",
  "body": [
    "## 词源\n\n\"Eating your own dog food\"。1980 年代美国一个狗粮广告：公司高管**亲自吃自家狗粮**来证明品质。后来被软件行业借用成行业黑话。",
    "## 为什么重要（也是它最容易被误解的地方）\n\n| | 状态 |\n|---|---|\n| **是 dogfooding** | 自己就是第一个用户，每天用、每天踩坑 |\n| **不是 dogfooding** | 闭门造车，凭「我觉得值得做」就动手 |\n\n它比「多调研几个 app」更进一步：\n\n- **调研**看别人怎么做\n- **dogfood**验证**你自己会不会天天用它**\n\n> **判据**：如果开发者自己都不想用，用户大概率也不会。",
    "## ⚠️ 最大的坑：幸存者偏差\n\n你是作者，**太懂产品了**——知道它该怎么用、哪里有坑、为什么要这样设计。普通用户没有这份心智模型。\n\n所以：\n\n```\ndogfooding  = 必要条件（连自己都不想用，肯定有问题）\n            ≠ 充分条件（自己用得爽，不代表别人用得爽）\n```\n\n**必须配合真实用户反馈**（user research / 用户访谈）来补「自己 ≠ 用户」的盲区。",
    "## 相关\n\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5) —— 同类「看似显然、实则有坑」的产品判断\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 都是「先定义清楚再下结论」"
  ]
},
{
  "id": "as-concept-scaling-law",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "scaling-law",
  "oneLiner": "**结论：模型能力随「参数 / 数据 / 算力」的投入而可预测地提升** —— 沿一条平滑的幂律曲线下降，几乎不会失灵。这是整个 AI 行业「大力出奇迹」信仰的数学基础。",
  "body": [
    "## 三个自变量\n\n| 变量 | 含义 | 类比 |\n|---|---|---|\n| **参数量 N** | 模型的容量 | 「脑容量」 |\n| **数据量 D** | 训练喂入的 token 数 | 「阅读量」 |\n| **算力 C** | 前两者的乘积再乘常数 | ≈ 训练成本 |",
    "## 两篇奠基之作（这里有个「打脸」故事）\n\n| 工作 | 核心结论 |\n|---|---|\n| **Kaplan et al. 2020**（OpenAI） | 首次系统给出幂律公式：loss 与 N、D、C 各自呈平滑幂律关系。主张**优先堆大模型** → 直接催生 GPT-3 路线 |\n| **Chinchilla 2022**（DeepMind） | **打脸修正**：同样算力下应**等比放大模型与数据**（约每参数配 20 token）。「中等模型 + 海量数据」比「巨大模型 + 数据不足」更划算 —— 70B 的 Chinchilla 打赢了 280B 的 GPT-3 |\n\n> **可复用的判断**：当一个领域出现「只要加 X 就能变强」的经验规律时，先问「比例关系对不对」。\n> Chinchilla 的价值不在于推翻 scaling，而在于指出**两个变量必须配比**，单堆一个会浪费算力。",
    "## 后续演化\n\n- **推理时扩展（test-time compute）**：o1/o3 路线发现「让模型多想一会儿」（生成更多思考 token）也服从类似规律 —— scaling 从训练阶段延伸到推理阶段\n- **涌现能力（emergent abilities）争议**：小模型完全不会、大模型突然会的能力（如多步推理）是否真实，还是评测指标造成的假象，学界至今有争论\n- **数据墙（data wall）**：互联网高质量文本接近用尽，纯堆 D 遇到物理上限，合成数据成为新战场",
    "## 为什么产品人要懂\n\n它把「做更强的模型」从玄学变成**可预算的工程问题** —— 花多少钱、买多少卡、换多少能力提升，可以提前估算。\n\n这也解释了行业叙事的转向：预训练 scaling 边际收益递减后，大家去找**新的 scaling 维度**（推理时算力、Agent 工作流、工具调用），而不是继续堆参数。",
    "## 相关\n\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6) — 模型能力之外的工程约束\n- [技术性通缩与经济学通缩](/wiki/agent-session/as-concept-%E6%8A%80%E6%9C%AF%E6%80%A7%E9%80%9A%E7%BC%A9%E4%B8%8E%E7%BB%8F%E6%B5%8E%E5%AD%A6%E9%80%9A%E7%BC%A9) —— 技术规律的边界与代价"
  ]
},
{
  "id": "as-concept-一词多义先确认所指",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "一词多义先确认所指",
  "oneLiner": "**结论：同一个词在语境里有 ≥2 种合理解释时，先确认所指再展开** —— 否则整段回答可能都在回答错误的问题。",
  "body": [
    "## 为什么这是真问题\n\n「回归」在 AI PM 语境下至少有四种完全不同的含义：\n\n| 用法 | 含义 | 场景 |\n|---|---|---|\n| **回归测试** | 改了代码后重跑已有用例，确认没搞坏老功能 | 软件/QA，**面试高频** |\n| **回归 / 逻辑回归** | ML 任务类型：输出连续值叫回归，输出类别叫分类 | 算法 |\n| 回归本质 | 偏思维方法的用法（回到第一性原理） | 口头表达 |\n| 自回归 | 模型结构（autoregressive） | LLM 原理 |\n\n⚠️ 特别注意：**「逻辑回归」名字带回归，但干的是分类的活**（输出概率）—— 这是最经典的命名陷阱。",
    "## 处理动作（可复用）\n\n```\n1. 察觉歧义：这个词我能给出几种合理解释？\n2. 若 ≥2 种 → 不要猜，直接问：「你问的是 A 还是 B？」\n3. 给出候选时带上各自的一句话定义（让对方能选）\n4. 确认后再展开完整回答\n```\n\n**关键**：第 3 步很值 —— 只说「你指的是哪个？」对方还得自己想；**给出两个候选+各一句话定义**，对方一句「第一个」就能继续。",
    "## 更深的信号\n\n同一句话**被反复追问**（如「回归」跨 4 个 agent 问过），说明：\n\n- 它不是「不懂」，而是**知识体系里有洞** —— 每次用到就临时查\n- 这类词**值得单独成页**，而不是留在对话里重复消耗\n\n> **反复追问 = 需求强度的天然标注。** 不用额外打分，行为本身已经把权重标好了。",
    "## 相关\n\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 同源判断：**先定义清楚（口径/所指），再下结论**\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) —— 「反复提问权重更大」这条标准的来源\n- [定义要由使用者确认](/wiki/agent-session/as-synthesis-%E5%AE%9A%E4%B9%89%E8%A6%81%E7%94%B1%E4%BD%BF%E7%94%A8%E8%80%85%E7%A1%AE%E8%AE%A4) —— 同源：定义的权威要显式交接，模糊只会静默错位"
  ]
},
{
  "id": "as-concept-关联规则挖掘的支持度与置信度",
  "updatedAt": "2026-07-09",
  "wikiSlug": "agent-session",
  "term": "关联规则挖掘的支持度与置信度",
  "oneLiner": "**关联规则挖掘从「事务集合」里找形如 `A -> B` 的规则。两个门槛：support（支持度）= 该组合在全部记录中出现的比例；confidence（置信度）= 出现 A 时 B 也出现的比例。最小支持度 2% / 最小置信度 7% 就填 0.02 / 0.07。**",
  "body": [
    "## 流程（把两列合成事务集合）\n\n1. 预处理：清洗、缺失值、类型转换（数字列先转字符串）。\n2. 用 `Column Aggregator` 把「客户类型」「产品编号」合成集合列 `[全球通, 159]` —— **必须选聚合方式（List / Set）**，只拖列不选聚合方式会报错。\n3. 接 `Association Rule Learner`，选该集合列为 transaction column，设 support / confidence。",
    "## 输出格式的坑\n\n节点输出的箭头方向容易读反：\n\n```\nConsequent  <---  Items      读作  Items -> Consequent\n```\n\n所以 `Consequent = 159, Items = [动感地]` 其实是 `动感地 -> 159`。要保留题目要的方向（客户类型 -> 产品编号），用 Row Filter 筛掉反方向，再用 String Manipulation 整理成 `动感地 -> 159`。"
  ]
},
{
  "id": "as-concept-实时与异步",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "实时与异步",
  "oneLiner": "**结论：选实时还是异步，不看技术难度，看「内容变化有多快」。** 变化快、时效敏感的必须实时；相对稳定、按天消费的，异步更优。",
  "body": [
    "## 一句话区分\n\n| | 用户看到的是 |\n|---|---|\n| **实时（同步）** | 「现在」的世界 —— 事情发生瞬间就处理、状态立刻同步 |\n| **异步** | 「过去某个时刻」的快照 —— 先攒起来，等系统有空或到点了批量处理 |",
    "## 反面案例：ONE 的卡片为什么翻车\n\n钉钉 ONE 把 AI 工作卡片放在**服务端异步生产**（隔一段时间生成一批），结果出现一串致命问题：\n\n| 问题 | 本质 |\n|---|---|\n| 卡片重复 | 生产时刻与消费时刻错位，同一内容生成了两版 |\n| 显示未读但实际已读 / 红点不消 | 状态没有实时同步回原场域 |\n| **读到已被撤回的敏感消息、编辑前的旧版本** | 最危险 —— 过期快照还在给用户看 |\n\n原作者的判断很犀利：用户在卡片里消费的对象 **80% 以上是 IM 消息本身**，而 IM 消息频次高、变化快 —— **「不实时就意味着对用户的欺诈」**。\n\n> ⚠️ **关键区分**：错的不在「用了异步」，而在「把高频易变的内容塞进了异步管线」。",
    "## 异步的正确适用场景\n\n异步不是次优选择，它在合适的场景里是三赢：\n\n| 受益方 | 收益 |\n|---|---|\n| **生产侧** | 低频批量处理，AI 成本大幅降低 |\n| **用户侧** | 一次读到高信息量，不被打扰 |\n| **产品侧** | 培养周期性打开的习惯 |\n\n典型成功案例：**ChatGPT Pulse** —— 夜里异步生成，早上给你读日报。用户预期本来就是「一天看一次」，异步完全够用。",
    "## 可复用的选型判据\n\n```\n内容变化越快、时效越敏感（IM、协作文档、状态流）\n    → 必须实时\n\n内容相对稳定、按天/按次消费（日报、摘要、研究简报）\n    → 异步更优（且成本低一个量级）\n```\n\n**追问自己**：如果我这里延迟 10 分钟，用户会不会看到「已经不存在的东西」？\n会 → 实时；不会 → 异步。",
    "## 相关\n\n- [长尾查询](/wiki/agent-session/as-concept-%E9%95%BF%E5%B0%BE%E6%9F%A5%E8%AF%A2) —— 另一个「按场景选型」的例子\n- [dogfooding](/wiki/agent-session/as-concept-dogfooding) —— 同属「看似显然、实则有坑的产品判断」"
  ]
},
{
  "id": "as-concept-技术性通缩与经济学通缩",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "技术性通缩与经济学通缩",
  "oneLiner": "**结论：两种「东西变便宜」完全不同 —— 技术进步带来的降价是好事；货币现象的通缩是经济病。** 混为一谈会误判形势。",
  "body": [
    "## 两个概念\n\n| | 摩尔定律 | 通货紧缩 |\n|---|---|---|\n| **一句话** | 芯片晶体管数约每 18~24 个月翻倍，性能升、单位成本降 | 整体物价水平**持续下跌**的宏观现象 |\n| **判据** | 观察到的经验规律（非物理定律） | CPI 连续为负 |\n| **价格下跌的原因** | 技术进步、效率提升 | 需求不足、货币收紧 |\n| **是好事吗** | ✅ 好事，普惠 | ❌ 衰退信号 |",
    "## 通缩为什么是「病」（反直觉）\n\n东西变便宜听起来是好事，但它会触发**通缩螺旋**：\n\n```\n今天买比明天贵 → 大家持币观望\n    → 需求萎缩\n    → 企业降价裁员\n    → 收入下降\n    → 需求更萎缩……\n```\n\n同时**实际债务变重**：欠的钱名义不变，但钱更值钱了。\n\n典型案例：1929 大萧条、日本「失去的三十年」。",
    "## 关键区分（这才是价值所在）\n\n问「电子产品越来越便宜，算通缩吗？」——**不算**。\n\n```\n技术性降价：生产率提升 → 同价买到更多 → 良性、普惠\n经济学通缩：货币购买力上升 + 需求萎缩 → 恶性、衰退\n```\n\n所以 AI 圈说「AI 让算力和智能的成本按摩尔定律式下降」，指的是**前者**。",
    "## 摩尔定律的现状\n\n物理极限逼近（制程进入纳米级，漏电和散热问题凸显），纯摩尔定律**明显放缓**。业界靠 **Chiplet（芯粒，把多颗小芯片封装协作）**、先进封装等路线续命。黄仁勋还造了个梗：「黄氏定律」—— GPU 的 AI 性能增长远超摩尔定律。",
    "## 相关\n\n- [scaling-law](/wiki/agent-session/as-concept-scaling-law) —— 同属「技术规律的边界在哪」\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 同源判断：**先分清是哪个口径/哪个概念，再下结论**\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-缓存命中率",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "缓存命中率",
  "oneLiner": "**结论：「cache hit 为 0」通常不是 bug，而是「每次都是新会话的首请求」。** 先排除这个，再怀疑实现。",
  "body": [
    "## 内存缓存的典型实现\n\n一个模块级内存变量 + TTL：\n\n```\nremoteCache = 模块级变量\nCACHE_MS = 10 分钟\n只有「同一页面会话、且 10 分钟内」再次访问，才命中缓存\n```",
    "## 命中率为 0 的三种原因\n\n| 原因 | 说明 |\n|---|---|\n| **页面刚刷新 / 进程重启** | 内存缓存清空，**第一次必然现拉** |\n| **传了 force=true / 点了重试** | 主动绕过缓存 |\n| **上次 fetch 失败** | 没写进缓存就抛错，下次仍要走网络 |",
    "## 诊断时的关键区分\n\n⚠️ **测量动作本身可能绕过被测对象。**\n\n实测踩过：在 bash 里直接 `curl` 拉接口，**绕过了应用自己的缓存层** —— 于是「cache hit = 0」是必然的，因为根本没经过缓存。这是**测错了对象**，不是系统有问题。\n\n```\n正确顺序：\n1. 先确认「你在哪看到的这个指标」（GUI 面板？还是自己 curl 的统计？）\n2. 若是自己 curl → 那是绕过缓存的结果，不说明问题\n3. 若是应用面板 → 再查上面三种原因\n```",
    "## 可复用的判断\n\n> **看到一个「指标异常」时，先问：这个指标是从哪来的、经过了我以为的那条路径吗？**",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该 synthesis 的一处实例：拿「命中率数字」当实现是否有 bug 的判据\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 同源判断：**先确认数值的来路，再解释它**\n- [页面变慢先查每页鉴权与无分页拉取](/wiki/agent-session/as-concept-%E9%A1%B5%E9%9D%A2%E5%8F%98%E6%85%A2%E5%85%88%E6%9F%A5%E6%AF%8F%E9%A1%B5%E9%89%B4%E6%9D%83%E4%B8%8E%E6%97%A0%E5%88%86%E9%A1%B5%E6%8B%89%E5%8F%96) —— 同属「先分清卡在哪一层再谈优化」"
  ]
},
{
  "id": "as-concept-长尾查询",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "长尾查询",
  "oneLiner": "**结论：长尾查询（搜索量极低、极具体的查询）是选择搜索源的关键判据** —— 头部词谁都能覆盖，长尾才是拉开差距的地方。",
  "body": [
    "## 定义\n\n- **头部 query**：高频大词 —— 「天气」「股票」「ChatGPT」，每天几百万次，所有引擎都覆盖得好\n- **长尾 query**：低频具体词 —— 「2024 年青海玉树某寺庙壁画修复资金来源」「某小众 npm 包 v0.3 的 breaking change 列表」，单个词**月搜索量可能只有几次**\n\n名字来自长尾分布：头部少数词占大部分流量，但**海量低频词加起来的总量反而更大**，像一条长长的尾巴。",
    "## 为什么它跟搜索质量直接相关\n\n搜索引擎靠**爬虫**建索引：\n\n| | 头部词 | 长尾词 |\n|---|---|---|\n| 指向的页面 | 大站、热门页 | 小论坛帖、个人博客、GitHub issue、冷门文档 |\n| 爬取情况 | 所有引擎都爬到 | **只有爬得最广最深的引擎有** |\n\n所以：**Google 源（Serper/SerpApi）的长尾覆盖最好；独立索引（如 Brave）越冷门越容易搜不到。**",
    "## 可复用的判断\n\n选搜索源时，不要用「搜 ChatGPT 试试」来判断 —— 那测不出差异。**要用你自己领域里的冷门具体问题去测**：\n\n```\n如果你搜的常常是「新、偏、小众」的东西\n    → 优先选索引广度最大的源（Google 系）\n\n如果只搜常见技术话题\n    → 轻量源也够用，且更快更便宜\n```",
    "## 相关\n\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5) —— 同类「按场景选型」的判断"
  ]
},
{
  "id": "as-concept-Agent-会话要按树保存而不是消息列表",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "Agent 会话要按树保存而不是消息列表",
  "oneLiner": "**一轮 Agent 对话不是「用户消息 + AI 回复」，所以 `AiMessage(role, content)` 这种表结构装不下它。** 一条会话里还有 Tool Call、Tool Result、压缩摘要、分支和「当前激活的节点」—— 它是一棵可以恢复的会话树。",
  "body": [
    "## 消息列表装不下的东西\n\n| 内容 | 为什么必须存 |\n|---|---|\n| Tool Call / Tool Result | 决定模型下一轮看到什么；丢了就复现不出当时的判断 |\n| 压缩摘要（compaction） | 长会话的历史已被替换成摘要，不存就无法恢复上下文 |\n| 分支 / 当前 leaf | 会话可以从某个节点分叉，得知道「现在在哪一支」 |\n| 模型切换、活动工具 | 同一会话可能换过模型 |\n\n典型一轮的实际结构：用户说「帮我润色当前笔记」→ Agent 调读取工具 → 工具返回正文 → Agent 调写入工具 → 工具返回待确认提案 → Agent 回复「已准备好修改，请确认」。这些都要按类型落库，服务重启后据此重建上下文，而不是只靠内存。",
    "## 与之配套的执行状态\n\n会话内容之外还要有「这一轮请求」的状态记录（如 `AiTurn`）：请求幂等 ID、状态（running / succeeded / failed / interrupted）、执行者、**lease 过期时间**、对应的用户/助手节点、最终输出、错误码。\n\n它解决三件事：**浏览器超时重试同一请求不会重复执行**（幂等）、**进程崩溃后能判断这轮是否还活着**（lease 可接管）、**失败可归因**（错误码与输出分离）。",
    "## 相关\n\n- 阻塞式工具与提案确认 —— Tool Result 里那一环为什么必须回到 loop\n- [Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop) —— 会话与生命周期是 harness 的一部分\n- [上下文成本由基础上下文和会话数决定](/wiki/agent-session/as-concept-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%88%90%E6%9C%AC%E7%94%B1%E5%9F%BA%E7%A1%80%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%E4%BC%9A%E8%AF%9D%E6%95%B0%E5%86%B3%E5%AE%9A) —— 存了树不代表要全塞给模型\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 谁是最新节点要靠显式记录"
  ]
},
{
  "id": "as-concept-Agent-管理的记忆：文件是真相源，索引只是加速器",
  "updatedAt": "2026-07-23",
  "wikiSlug": "agent-session",
  "term": "Agent 管理的记忆：文件是真相源，索引只是加速器",
  "oneLiner": "**OpenClaw 式 Agent 记忆的核心是：Markdown 文件是记忆真相源，SQLite/embedding 索引只是检索加速器（删掉可重建）；记忆由 Agent 自己读写，后台再定期把每日经历提炼成长期摘要。它既不是结构化用户画像数据库（Memobase），也不是独立的 memory item 服务（Mem0），而是 local-first、Agent-managed memory。**",
  "body": [
    "## 一、默认三层文件\n\n| 文件 | 角色 | 是否常驻上下文 |\n|---|---|---|\n| `MEMORY.md` | 长期记忆：用户稳定偏好、背景、长期目标、重要决策、持续生效的规则、Agent 吸取的教训 | 是，所以必须短而精炼 |\n| `memory/YYYY-MM-DD.md` | 情景记忆：每日工作日志与经历 | 否，靠 `memory_search` 按需召回 |\n| `DREAMS.md` | 巩固过程的审查面：后台反思、候选记忆、巩固结果 | 否，供人检查「Agent 为什么决定记住这件事」 |\n\n`MEMORY.md` 在形态上类似 Letta 的 Memory Block，但载体就是普通 Markdown。\n\n由此形成一条流水线：**每日详细经历 → 定期提炼 → 长期稳定摘要**。",
    "## 二、索引与召回\n\n- `memory-core` 把 Markdown 切 chunk，索引进每个 Agent 独立的 SQLite。\n- 混合信号：FTS5/BM25（名字、ID、错误信息等精确文本）+ embedding（语义）+ 文件名/路径；另有可选时间衰减（旧日记降权）与可选 MMR（避免召回重复内容）。\n- 对外只有两个基础工具：`memory_search`（找相关记忆）、`memory_get`（读具体文件或行）。",
    "## 三、可迁移的判断\n\n- **索引不是真相源。** 索引删了 Markdown 还在，可以重建 —— 所以索引层的选型、损坏、迁移都不构成数据风险。\n- **常驻上下文的必须是提炼后的长期摘要**，原始经历留在按需召回的层里。\n- **自动巩固要有可审查的面。** 让 Agent 自主决定「记住什么」时，把候选与理由写出来给人看，是可控性的前提。\n\n来源：OpenClaw 官方文档 Memory overview / Memory search（docs.openclaw.ai）。",
    "## 相关\n\n- [短期记忆与长期记忆的边界](/wiki/agent-session/as-concept-%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%E4%B8%8E%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%E7%9A%84%E8%BE%B9%E7%95%8C)\n- 知识库先编译再查而不是查询时拼原文\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90)"
  ]
},
{
  "id": "as-concept-Prompt版本真源在代码而不是平台",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "Prompt版本真源在代码而不是平台",
  "oneLiner": "**Prompt 的版本真源是代码仓库里的 `.md` 文件（frontmatter 手写 `version` 整数 + 内容 SHA 算出的 `revision`），平台侧（Langfuse）只是只读投影：在平台网页或 Playground 改 prompt 不会改变 Agent 行为。**",
  "body": [
    "## 生效路径\n\n```\napps/*/prompts/*.md   ← frontmatter: id / task / version（手动递增）\n    │  loadWorkflowPrompt() 读文件 + 解析 frontmatter\n    │  revision = SHA-256(全文) 前 16 位（自动，改一个字就变）\n    ▼\nworkflow 用文件内容作 system prompt（代码里没有任何 getPrompt() 调用）\n```",
    "## 单向同步与它带来的安全边界\n\n- 部署前跑同步脚本，把代码里的 prompt 推到平台：**内容没变不产生新版本，变了才产生新版本**；模型调用会标注用了哪个 prompt、哪个版本。\n- 因此**在平台里调试 prompt 是完全安全的沙盒**：看 trace、开 playground、甚至建 prompt 都不影响生产行为；真正生效的唯一方式是改文件并部署。\n- 反过来，如果产品要的是「网页改 prompt、不重新部署就立即生效」，那是另一套机制（运行时拉取 + 版本绑定），**当前没有做** —— 选之前先明确谁是真源，否则会同时存在两个可写的版本源。",
    "## 排查提示\n\n「线上 prompt 行为不对」先确认生效的是哪一份：改的是文件还是平台？部署是否带上了这次改动？（见 [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE)）",
    "## 相关\n\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) —— 同一形状：平台解释「为什么」，真源在别处\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90)\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD)\n- 评测平台是平台层项目规则是适配层\n- [主观判据的prompt规则会随机误触发](/wiki/agent-session/as-concept-%E4%B8%BB%E8%A7%82%E5%88%A4%E6%8D%AE%E7%9A%84prompt%E8%A7%84%E5%88%99%E4%BC%9A%E9%9A%8F%E6%9C%BA%E8%AF%AF%E8%A7%A6%E5%8F%91)\n- [可观测正文要按环境分级放开](/wiki/agent-session/as-concept-%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%AD%A3%E6%96%87%E8%A6%81%E6%8C%89%E7%8E%AF%E5%A2%83%E5%88%86%E7%BA%A7%E6%94%BE%E5%BC%80)"
  ]
},
{
  "id": "as-concept-RAG-是流程不是组件",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "RAG 是流程不是组件",
  "oneLiner": "**RAG = Retrieval → Augmentation → Generation 三段流程。只生成 embedding、只做相似搜索，都不算 RAG；必须把检索结果送进生成模型才成立。判断一个功能「是不是 RAG」，看的是链路而不是用了什么库。**",
  "body": [
    "## 一、三段式\n\n```text\n用户问题或当前内容\n→ Retrieval：检索相关资料\n→ Augmentation：把资料加入模型上下文\n→ Generation：模型基于这些资料生成回答\n```",
    "## 二、由此推出的两种常见形态\n\n1. **固定链路的 RAG Workflow**：检索在调用模型前固定执行。\n   例：笔记更新 → 生成 embedding → 算相似 → 取相关正文片段 → 拼进 prompt → 模型输出「观点重复 / 观点变化 / 完整性」等洞察。可称为「基于历史内容的异步 RAG」。\n2. **Agentic RAG / Tool-based RAG**：检索不是固定步骤，而是 agent 自己决定搜什么、读什么——先调搜索工具，再对结果调读取工具，把工具结果放进会话上下文后回答。\n\n两者差别在于**谁决定检索**（流程 vs agent），不在于有没有向量库。",
    "## 三、什么不算 RAG\n\n- 摘要 workflow：单篇正文 → 模型 → 摘要。没有检索外部内容，只是普通上下文生成。\n- 只建 embedding 索引、只算相似度、只存相似关系 —— 这些是检索基础设施，没进生成环节就不构成 RAG。\n- 反过来：Agent 已具备 RAG 的交互框架，但检索器如果还是全文关键词，也只算「框架在、检索基础」。",
    "## 相关\n\n- 混合检索先用RRF融合\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)\n- 知识库先编译再查而不是查询时拼原文\n- [短期记忆与长期记忆的边界](/wiki/agent-session/as-concept-%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%E4%B8%8E%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%E7%9A%84%E8%BE%B9%E7%95%8C)\n- [网页读取工具要受控而不是直连任意URL](/wiki/agent-session/as-concept-%E7%BD%91%E9%A1%B5%E8%AF%BB%E5%8F%96%E5%B7%A5%E5%85%B7%E8%A6%81%E5%8F%97%E6%8E%A7%E8%80%8C%E4%B8%8D%E6%98%AF%E7%9B%B4%E8%BF%9E%E4%BB%BB%E6%84%8FURL) —— 生成前的取数环节：读取要经受控工具而非直连 URL"
  ]
},
{
  "id": "as-concept-一次调用返回多种产物，按内容类型组织-prompt",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "一次调用返回多种产物，按内容类型组织 prompt",
  "oneLiner": "**每篇内容只调用一次 AI，一次返回总结、观点、主题/实体等全部产物；prompt 按「内容类型」组织，不按「功能」拆成多次请求。**",
  "body": [
    "## - 按功能拆（总结一次、打标一次）会把同一篇内容重复送进模型，成本与延迟都翻倍。\n- 按内容类型命名文件与 prompt（`article.ts` / `article.zh.md`），顶层能力叫 `processArticle` / `analyzeArticle` 而不是 `summarizeArticle` —— 名字要能容纳后续新增字段，否则改名会引发反复重构。\n- 不同内容类型用不同 prompt：外部文章做客观总结；用户笔记做「思考镜像」（识别意图、核心判断、未解决问题）。\n- 输出结构按未来最全的形态设计（如预留 `relations` 字段），这样检索能力成熟后不必重做 Provider 层。\n- 「知识关联」要先分清是哪种：A 生成关联线索（`topics`/`entities`/`keywords`，不依赖用户库）；B 返回真实关联条目（先检索用户库，再把候选一并交给模型）。前置检索不算 AI 调用，但依赖搜索基础设施。",
    "## 相关\n\n- [实体、关键词、标签的区别](/wiki/agent-session/as-concept-%E5%AE%9E%E4%BD%93%E3%80%81%E5%85%B3%E9%94%AE%E8%AF%8D%E3%80%81%E6%A0%87%E7%AD%BE%E7%9A%84%E5%8C%BA%E5%88%AB)\n- 知识库先编译再查而不是查询时拼原文\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82)"
  ]
},
{
  "id": "as-concept-上下文成本由基础上下文和会话数决定",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "上下文成本由基础上下文和会话数决定",
  "oneLiner": "**「为什么上下文这么多，不是每轮都压缩吗」——压缩不是每轮发生，且只压历史。每次请求仍要带：系统/开发者指令、项目 AGENTS/rules/skills 列表、工具 schema、压缩后的历史摘要、最近几轮原文。如果这堆基础包袱本身就很大，压缩历史也只能从 180k 降到 130k，不会降到 10k。**",
  "body": [
    "## 成本公式\n\n每小时消耗 ≈ 请求次数 × 每次上下文大小。三个乘数都可优化：\n\n1. **会话数**：多个 session 并发/交替跑，每个都自带一份系统上下文、项目上下文、摘要和最近历史。\n2. **请求次数**：同一功能多线程反复跑。\n3. **单次上下文**：重规则 + 多工具 + 长历史 + 长工具输出。",
    "## 优化手段\n\n- 一个功能只留一个主 session，做完归档\n- 新任务开新线程只带 10–20 行 handoff，不继承整段历史\n- 命令输出限量（精确文件 + 行号 + `max_output_tokens`），避免全量 diff / 全仓 rg / 长日志\n- 长规则迁到按需 reference，`AGENTS.md` 只放每次都要看的短规则\n- 简单 UI 小改用轻量模型/低推理，别每个按钮都上高推理\n- 少开并行 subagent",
    "## 看账要区分 cached\n\n日志里的 total 大头常是 cached input（重复前缀）。真实新增 = 非缓存输入 + 输出。判断「贵不贵」要看非缓存部分，但缓存仍占窗口、仍计入 total。",
    "## 相关\n\n- 上下文按信任等级分层\n- [计数闸门不等于上下文管理](/wiki/agent-session/as-concept-%E8%AE%A1%E6%95%B0%E9%97%B8%E9%97%A8%E4%B8%8D%E7%AD%89%E4%BA%8E%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AE%A1%E7%90%86)\n- [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87)"
  ]
},
{
  "id": "as-concept-上下文按卡片切换，会话记忆按账号共享",
  "updatedAt": "2026-07-25",
  "wikiSlug": "agent-session",
  "term": "上下文按卡片切换，会话记忆按账号共享",
  "oneLiner": "**侧栏式 Agent 里，「记得什么」（session 记忆）和「当前在看什么」（context）是两个独立维度：默认只做后者按卡片切换、前者按账号固定。代价是——换了卡片，之前的对话记录还在，记忆会跨卡片串味。**",
  "body": [
    "## 机制\n\n```text\n固定 chatId（每用户一个默认 Session）\n  + 当前卡片的 type / id / title\n  + 本轮用户消息\n```\n\n- 打开笔记 A、切到笔记 B、打开剪藏或订阅文章 → **都是同一个 Session**；关闭再打开侧栏，恢复同一会话与全部历史消息。不同用户之间才隔离。\n- 每张卡片变化的只是本轮注入的 `context`，Agent 因此知道「当前在看哪张卡片」，但对话记忆不随卡片重置。",
    "## 两条可迁移判断\n\n1. **共享历史 ≠ 重置上下文。** 想让每个卡片/每个文档各自一段对话，必须显式创建独立 chat，而不是靠「换了卡片」自动分家。\n2. **默认单会话是省掉 UI 的结果，不是设计结论。** 产品里虽然 API 支持创建非默认 Chat，但侧栏没有「新建 / 切换 / 清空对话」入口，实际效果就是每账号一条长期会话 —— 记忆污染的代价由此而来。",
    "## 相关\n\n- [短期记忆与长期记忆的边界](/wiki/agent-session/as-concept-%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%E4%B8%8E%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%E7%9A%84%E8%BE%B9%E7%95%8C) —— 会话记忆属于短期，但「跨卡片共享」说明它的作用域可以大于当前任务\n- 上下文按信任等级分层 —— 当前页面内容该放在哪一层（Reminder 每轮生成、不进历史）\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D) —— 同属「共享」这个词的三个层级，别混为一谈"
  ]
},
{
  "id": "as-concept-中间进展与最终回答要按-phase-区分",
  "updatedAt": "2026-07-08",
  "wikiSlug": "agent-session",
  "term": "中间进展与最终回答要按 phase 区分",
  "oneLiner": "**把 agent 的中间进展（「我先看一下……」）当普通 assistant 消息同步，客户端就会收到一堆半截消息。区分依据是事件里的 `phase` 字段，不是输出长度。**",
  "body": [
    "## 字段\n\n原生 Codex JSONL 里 `agent_message` 带 `phase`：\n\n| phase | 含义 | 该不该当可见回复 |\n|---|---|---|\n| `commentary` | 中间进展 / 过程说明 | 否 |\n| `final_answer` | 最终回复 | 是 |\n| （其后）`task_complete` | 任务终态事件 | 用于判定结束，不是消息 |\n\n现在的 parser 把 `commentary` 也当普通 assistant 消息同步，于是手机把「我先看一下…」这类短进展当成一条消息弹出来。",
    "## 配套的两条\n\n- **终态只认 `turn/completed`**：`thread/status/changed: idle` 不能当回复结束，否则最终答案还没来就转圈/丢结果。\n- **错误也要回传**：Codex 内部 `Turn error` 若只进本机日志，手机端看起来就是「完全没回复」；要把错误写进那条 assistant 消息，不留空气泡。",
    "## 相关\n\n- [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) —— 同一条链路的终态判定：等真实事件，不等时长\n- 阻塞式工具与提案确认 —— 同一「事件流要有语义类型」的家族\n- [过程展示按时间线分层而不是分组聚合](/wiki/agent-session/as-concept-%E8%BF%87%E7%A8%8B%E5%B1%95%E7%A4%BA%E6%8C%89%E6%97%B6%E9%97%B4%E7%BA%BF%E5%88%86%E5%B1%82%E8%80%8C%E4%B8%8D%E6%98%AF%E5%88%86%E7%BB%84%E8%81%9A%E5%90%88)"
  ]
},
{
  "id": "as-concept-主观判据的prompt规则会随机误触发",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "主观判据的prompt规则会随机误触发",
  "oneLiner": "**把「信息是否充足」这类判断完全交给模型主观决定的 prompt 规则，会产生同输入下的随机误报 —— 实测同一篇文章（内容 hash 完全相同、输入 ~5650 tokens 的完整正文）3 次独立生成，2 次误报「原文信息不足」，1 次正常。**",
  "body": [
    "## 机制\n\n规则原文只写「正文信息不足时明确写『原文信息不足』，并只说明能够确认的内容」，**没有给任何判定标准**。轻量模型面对长文时会把「输出长度装不下这么多内容」自我开脱成「信息不足」，随机走进这条逃生通道。\n\n⇒ 规则要写成**可判定的条件**（有明确触发信号、可被外部证据检验），或者把它从「模型判断」降级为「有明确条件的输出分支」。",
    "## 排查这类问题的方法论\n\n1. **先证明模型当时收到了什么输入**：输入 token 数、正文内容 hash、文章与摘要的关联是否正确。三项都对 → 排除数据、归一化、关联问题，才轮到 prompt。\n2. **不要用「删掉那句话」或输出后处理来掩盖**：那会盖住真实的数据一致性问题。\n3. **分清同症状的不同根因**：另一类「摘要与正文不符」是**旧摘要对应旧正文**——正文更新时版本递增却不清空摘要，补漏只扫 `summary=null`，旧摘要因此不失效重跑（见 [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91)）。prompt 误判 vs 陈旧派生数据，先分开再动手。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该骨架在 prompt 层的实例\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC)\n- 派生数据只在写入时入队旧数据要单独回填\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91)\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)\n- [Prompt版本真源在代码而不是平台](/wiki/agent-session/as-concept-Prompt%E7%89%88%E6%9C%AC%E7%9C%9F%E6%BA%90%E5%9C%A8%E4%BB%A3%E7%A0%81%E8%80%8C%E4%B8%8D%E6%98%AF%E5%B9%B3%E5%8F%B0)\n- 一次调用返回多种产物按内容类型组织prompt\n- 假成功要有真失败信号"
  ]
},
{
  "id": "as-concept-关键词检索的三个打分缺陷",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "关键词检索的三个打分缺陷",
  "oneLiner": "**「只在标题级文本里做 substring 匹配、按 token 长度打分、中文按整句切分」这三件事叠加，会让检索只在「提问措辞恰好出现在标题」时有效；改进顺序是：正文入索引并加字段权重 → IDF → 中文 bigram。**",
  "body": [
    "## 一、现状的检索长什么样\n\n1. **分词**：取最后一条用户消息，按标点切，token 长度 ≥ 2。纯中文长句基本是**整句一刀**。\n2. **打分**：`hay = term + abbr + fullName + oneLiner`，命中 token 就 `score += token.length`。**正文完全不参与**。\n3. **选取**：按分降序取前 N，再按顺序塞进字符预算。",
    "## 二、因此会哑火的场景\n\n- 答案在正文里但标题没有 → 命中 0 条（例如问\"怎么找到用户真正想要的东西\"，正文有 job story，标题没有）。\n- 中文近义改述（\"目标用户画像\" vs \"典型用户长什么样\"）匹配不上。\n- 长 token 天然占优（按长度加权），且**同一 token 重复命中不重复加分** —— `\"JTBD JTBD JTBD\"` 和 `\"JTBD\"` 同分。\n- 完全没有 IDF：到处出现的\"用户\"和稀有的\"job story\"权重一样。",
    "## 三、分级改进\n\n**L1（纯代码，零新依赖，收益最大）**\n\n- 索引字段扩到 `+ body + points`；**标题命中 ×3、正文命中 ×1**，并给单文档贡献设上限，防长词条通吃。\n- 引入 IDF：`tf * log(N/df)`，让高频词降权、稀有词升权。\n- 中文改用 **bigram**（`用户研究` → `用户/户研/研究`），英文小写化 + 简单词干。\n- 命中位置和次数都计入，而不是只算一次 substring。\n\n**L2（结构化，适合个人知识库体量）**\n\n- 每条词条手写 `related: id[]`，或从正文用约定标记自动抽取。\n- 当前词条的相关词条**永远优先进 context**，关键词检索只补剩余槽位。质量上限由结构决定，而不是靠运气匹配。\n\n**仍未解决的**：L1/L2 都是词面匹配，同义改述依旧召回不到 —— 那需要 embedding 语义召回（见 [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)）。",
    "## 相关\n\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)（检索的三层：引擎 / 协议 / Agent loop）\n- [长尾查询](/wiki/agent-session/as-concept-%E9%95%BF%E5%B0%BE%E6%9F%A5%E8%AF%A2)（搜索源的选择）\n- 上下文按信任等级分层（哪些内容该优先进 context）\n- 检索是一条分层链 —— 本条是该链的召回层"
  ]
},
{
  "id": "as-concept-兼容端点要防-SDK-注入非标准字段",
  "updatedAt": "2026-07-28",
  "wikiSlug": "agent-session",
  "term": "兼容端点要防 SDK 注入非标准字段",
  "oneLiner": "**OpenAI 兼容层通常会按「对面就是真 OpenAI」往请求体里塞字段，而严格校验的兼容端点会直接 400。** 报错看起来像「接口坏了」，其实多出来的是一个 SDK 自己加的字段。",
  "body": [
    "## 实测形态：`store:false` 让 Gemini 兼容层拒收\n\n| 探测 | 结果 |\n|---|---|\n| `chat/completions` 干净请求 | 200 ✅ |\n| 同上 + `store:false` | 400 ❌ `Unknown name \"store\": Cannot find field` |\n| 流式干净请求 | 200 ✅ |\n| 流式 + `store:false` | 400 ❌ |\n| `openai/embeddings`（对照） | 200 ✅ |\n\n- 字段不是业务代码写的，是 Pi SDK 的 `openai-completions` 适配器自动注入的。\n- 自定义 relay 域名不在 SDK 的「非标准端点」白名单里，所以每个文本请求都会被塞进去。\n- 路由、key 轮换、模型 id 全部正常 —— **relay 没坏，是请求体多了一个字段。**",
    "## 为什么「本地能用」掩盖了它\n\n本地 `.env.local` 没配 `GEMINI_BASE_URL` → fallback 到 Google 原生地址 → 走 SDK 内置的原生 provider，**根本不经过会注入 `store` 的 OpenAI 适配器**。生产配了 relay，对话和 summary 走同一条 openai-completions 路径，于是生产上所有文本请求大概率都 400。本地好 ≠ 生产好，因为两者走的是不同协议路径。",
    "## 可迁移的判断\n\n- 兼容层报「Unknown name / Cannot find field」时，先 dump 出实际请求体，比对干净请求，找多出来的字段，而不是先怀疑网关。\n- 接入自建/第三方兼容端点时，要主动处理三件事：把域名加入 SDK 的非标准端点白名单、在适配层剥离非标准字段、或改走原生协议端点。\n- 排查「本地正常生产异常」时，第一问是「两边是不是同一条协议路径」，而不是「代码是不是同一份」。",
    "## 相关\n\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本地与生产各自跑的是不同的 provider 路径\n- 中转源不更新先分清是哪一层 —— 先定位到「请求体」这一层，再谈修复\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6) —— 同一 relay 上的路由与模型 id 是另一个维度\n- 模型可见性按入口分批\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91)\n- [能力被环境差异静默改变](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A2%AB%E7%8E%AF%E5%A2%83%E5%B7%AE%E5%BC%82%E9%9D%99%E9%BB%98%E6%94%B9%E5%8F%98)\n- 请求别名不等于实际模型ID"
  ]
},
{
  "id": "as-concept-分页游标要继承未推进实体的位置",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "分页游标要继承未推进实体的位置",
  "oneLiner": "**多实体共用一个复合游标时，next cursor 必须「继承输入 positions + 仅覆盖本页真正返回边界的实体」。只编码本页边界，会让先耗尽的实体位置丢失 —— 它从 epoch 重放，其他实体继续翻页时重复下发数据。**",
  "body": [
    "## 缺陷形态\n\n`nextState` 只写入本页返回了行的那几个实体：\n\n- 实体 A 第 1 页就取完了 → 本页返回 0 行 → A 没有边界 → 若 next cursor 不含 A 的位置，A 就被重置到起点。\n- 后续页里 A 又从头返回一遍。数据看起来\"没丢\"，但增量同步变成重复同步。",
    "## 正确做法\n\n`paginateEntities(..., positions)`：\n\n1. 以**输入的 positions** 为基线；\n2. 本页返回了边界行的实体 → 覆盖为新的边界；\n3. 没返回边界（耗尽/无数据）的实体 → **保留输入里的位置**。\n\n这样最终 `hasMore = false` 的那次 cursor 仍包含全部实体的已知位置。",
    "## 配套测试\n\n- 不对称多页（不同实体在不同页耗尽）；\n- 最终增量 cursor 的回归断言；\n- 首屏从 epoch 开始时，\"从未有过数据的实体\"没有位置是正确行为，不是丢位置。",
    "## 相关\n\n- 重试分三层不要整体重跑 —— 同族：局部状态不要被整体重算覆盖\n- [两条写入路径要用内容判重](/wiki/agent-session/as-concept-%E4%B8%A4%E6%9D%A1%E5%86%99%E5%85%A5%E8%B7%AF%E5%BE%84%E8%A6%81%E7%94%A8%E5%86%85%E5%AE%B9%E5%88%A4%E9%87%8D) —— 同一目的：防重复下发\n- INSERT OR IGNORE会让旧行不更新 —— 增量状态被写坏的另一形态\n- [同一状态的多个副本必然漂移](/wiki/agent-session/as-synthesis-%E5%90%8C%E4%B8%80%E7%8A%B6%E6%80%81%E7%9A%84%E5%A4%9A%E4%B8%AA%E5%89%AF%E6%9C%AC%E5%BF%85%E7%84%B6%E6%BC%82%E7%A7%BB)\n- 乐观并发要先查后改会双赢"
  ]
},
{
  "id": "as-concept-可观测正文要按环境分级放开",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "可观测正文要按环境分级放开",
  "oneLiner": "**观测平台默认只记元数据（模型名、token、费用、延迟、成败、工具调用链、workflow 类型与状态），正文（用户输入、prompt、模型输出、工具参数与结果）默认不上报；要放开也只按环境分级放开，不要为了调试把生产全量打开。**",
  "body": [
    "## 为什么不直接全开\n\nblast radius（隐私影响半径）太大：一次打开，生产用户的原文与模型输出全部进入第三方平台。**隐私是默认值问题，不是事后过滤问题。**",
    "## 分级方案\n\n- `development`：记录**脱敏 + 截断**后的 Input/Output。\n- `production`：默认关闭；只对失败请求或极低比例请求采样。\n- Prompt、正文、输出都设最大长度上限。\n- 上报前移除邮箱、Token、Cookie、URL 参数等可能的个人数据。\n- 评测（eval）用人工准备的数据集，**不依赖生产原文**。",
    "## 副作用：本地调试看不到正文，所以要留开关\n\n脱敏逻辑若写死，本地调 prompt 时平台上只能看到「调了几次模型、用了哪些工具、花了多少 token」，看不到模型到底说了什么——而这恰恰是调 prompt 最想看的。\n\n⇒ 正确形态是**一个开关：本地可关、线上强制不可关**。既不是全局关掉脱敏，也不是把逻辑写死。",
    "## 分层：采集标准 vs 展示平台\n\n- **OpenTelemetry**：埋点与运输标准，负责收集 Trace（调用链）/ Metric / Log，并记录模型调用与工具执行之间的父子关系（Span）。\n- **Langfuse**：AI 可观测平台，负责展示与分析模型请求、Tool Call、Token、成本与错误，底层通过 OTel Span 接入。\n\n所以「平台上能不能看到正文」由**自己的上报代码**决定，不是平台能力问题；排查时先看上报层，而不是怀疑平台。",
    "## 相关\n\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) —— 平台解释「为什么」，运行状态真源在自家数据库\n- 上下文按信任等级分层\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86)\n- [观测平台的环境维度由数据产生](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E7%9A%84%E7%8E%AF%E5%A2%83%E7%BB%B4%E5%BA%A6%E7%94%B1%E6%95%B0%E6%8D%AE%E4%BA%A7%E7%94%9F)\n- 假成功要有真失败信号 —— 本条是该 synthesis 的第五处证据：无数据被误读成配置问题，实际是上报侧静默关掉了"
  ]
},
{
  "id": "as-concept-多账号模型路由机制",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "多账号模型路由机制",
  "oneLiner": "同一模型在「国内版 / 国际版」两组账号间**混合调用是默认行为，不需要额外配置**——因为路由是 **model-aware（模型感知）** 的，而不是简单的账号轮询。",
  "body": [
    "## 三层机制\n\n1. **按模型目录筛选账号**\n   每个账号带一份 `Models` 目录（从上游拉取）。轮询只在**能服务该模型**的账号里挑（`itemCouldServeModel`）。若某账号目录未知（`Models == nil`），则**失败开放**（认为它什么都能服务）。\n\n2. **请求内锁区，请求间交替**\n   命中的账号会**钉住 region 覆盖整个请求**（`lastRegion`），避免 failover 重试时中途跨区翻转。\n   于是：交替发生在**不同对话之间**；同一段对话（按首条消息哈希粘账号）中途不换。\n\n3. **额度互补与自动冷却**\n   某账号额度耗尽会自动冷却，后续请求落到另一区；反过来同理。这是\"混用\"真正的收益点——**不是负载均衡，是额度池合并**。",
    "## 推论\n\n- 只有**两边目录都有**的模型才会真正跨区轮转；只有一边有的模型，路由根本不会送过去（不是\"会被拒绝\"，是\"不会选中\"）。\n- 想确认某次请求实际落在哪个账号，看响应头里的账号标识。\n- 想强制某类流量只走某一区：用请求头指定，或把 Key 绑定到 region。",
    "## 相关\n\n- Agent模型接入与额度机制\n- 模型可见性按入口分批 —— 「谁接得到」由账号/入口目录决定"
  ]
},
{
  "id": "as-concept-实体、关键词、标签的区别",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "实体、关键词、标签的区别",
  "oneLiner": "**三者描述的是不同东西：实体 = 文中出现了谁/什么（内容事实），关键词 = 文章在讨论什么（核心概念），标签 = 用户想怎样组织它（用户意图）。**",
  "body": [
    "## ```text\nTopic：所在领域\nKeyword：核心概念\nEntity：具体对象（人 / 组织 / 产品 / 技术 / 地点 / 事件）\n```\n\n- 实体由 AI 从内容事实提取，数量可以多，用来发现内容关系 —— 两篇没有共同关键词但都提到同一实体，就能建立关系；同一实体要消歧成统一对象（避免「OpenAI」与「Open AI」并存）。\n- 标签来自用户的组织意图，用户可增删，数量应克制，用来分类、筛选、建立个人知识体系；不要求正文出现标签原文。\n- 即使名字相同，意义也不同：实体 Langfuse = 这篇文章确实提到了它；标签 Langfuse = 用户希望把它归入这个分类。\n- 存储要分开（`entities + content_entities` / `tags + taggables`）；AI 可以建议标签，但**不能把所有实体都变成标签**，否则标签系统很快堆满公司名、人名和产品名。",
    "## 相关\n\n- 一次调用返回多种产物按内容类型组织prompt\n- [列表卡片元信息用内容作者而非平台名](/wiki/agent-session/as-concept-%E5%88%97%E8%A1%A8%E5%8D%A1%E7%89%87%E5%85%83%E4%BF%A1%E6%81%AF%E7%94%A8%E5%86%85%E5%AE%B9%E4%BD%9C%E8%80%85%E8%80%8C%E9%9D%9E%E5%B9%B3%E5%8F%B0%E5%90%8D)"
  ]
},
{
  "id": "as-concept-工作流按内容类型分开而不是抽象成一条通用流水线",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "工作流按内容类型分开而不是抽象成一条通用流水线",
  "oneLiner": "**「笔记」和「文章」的后台处理不是同一条流水线换了输入，而是两条不同的业务流水线 —— 只共享底层的任务调度。** 把它们抽象成「统一的 AI 任务」是抽象过头：看起来优雅，实际会丢掉「不同类型该做什么」这个信息。",
  "body": [
    "## 两条流水线各自要做什么\n\n```text\n笔记保存后  → 找相关旧内容 → 检查思考是否全面 → 检查是否已表达过相同观点 → 对比新旧观点变化 → 结果浮到笔记旁\n文章到库后  → 生成摘要 → 找相关/相似内容 → 在合适时机浮出\n```",
    "## 共享的只有「执行引擎」\n\n两条流水线共用的仅是基础设施能力：任务创建、领取、lease 防卡死、失败重试、指数退避、内容版本校验、超时隔离、运行日志。任务记录带 `kind`（summary / embedding / relation / note_insight）、`target`（note / clip / feed_entry）、`inputVersion`、`status`、`attempt`。\n\n核心规则：**内容版本变了旧任务不能覆盖新内容；同内容同版本同模型不重复生成；单任务失败不中断整批；最多重试三次；调度进程退出后状态仍在数据库里。**",
    "## 边界：工作流不是 Agent\n\n后台工作流是**纯工作流** —— 不启动 Agent Harness、不创建会话、不跑 Tool Loop、没有主动对话能力，只按任务记录执行固定步骤。Agent 是另一套主动能力，通过 Skill 去调用工作流提供的查询接口。\n\n反过来，**交互式的事不能排进后台工作流**：用户问答、润色扩写、确认后的即时反馈必须在请求里实时执行（见 [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B)）。",
    "## 相关\n\n- Agent编排层薄自建优先于重型框架 —— 同族的「别过度抽象」判断\n- 按实际规模选型而不是按方案先进性 —— 抽象层级的成本正比于覆盖组合数\n- [物化结果要按版本失效并增量刷新](/wiki/agent-session/as-concept-%E7%89%A9%E5%8C%96%E7%BB%93%E6%9E%9C%E8%A6%81%E6%8C%89%E7%89%88%E6%9C%AC%E5%A4%B1%E6%95%88%E5%B9%B6%E5%A2%9E%E9%87%8F%E5%88%B7%E6%96%B0) —— 这两条流水线产出的结果怎么保鲜\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) —— 共享的调度层怎么实现\n- 职责要先分家再谈实现 —— 先分清是两条流水线，再谈共享什么"
  ]
},
{
  "id": "as-concept-开关要映射到模型调用才算生效",
  "updatedAt": "2026-08-01",
  "wikiSlug": "agent-session",
  "term": "开关要映射到模型调用才算生效",
  "oneLiner": "**前端开了\"深度思考\"、请求参数也透传成功，都不代表模型真的开了思考。判据只有一条：真正发给 provider 的那次 generation 请求里有没有对应的推理参数。没有 → 观测里的 reasoning tokens 为 0 不是统计错，是链路最后一跳缺失。**",
  "body": [
    "## 一次实例\n\n- 顶层 trace 的输入里确实有 `\"thinking\": true` —— 按钮和请求透传都成功。\n- 但真正发给 DeepSeek 的 3 次 generation 请求里，**没有 `reasoning_effort` / `thinking` 或任何推理参数，`modelParameters` 是空对象**。\n- 于是 `reasoningTokens = 0`。观测没有错，是运行时根本没把开关映射到模型调用。",
    "## 判断顺序\n\n1. UI 状态是否变了（最不可靠，只证明按钮能点）\n2. 应用层请求参数里有没有这个开关（证明透传成功）\n3. **实际 provider 调用的 request 里有没有对应字段**（唯一能证明生效的）\n4. 观测指标（token 计数）用来交叉验证，不是根因\n\n同类情形见 [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9)：值传到了，消费方没读，表现是\"调了没反应且不报错\"。",
    "## 相关\n\n- [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) —— 同一形状：生效点在消费方，不在传递方\n- [能力链路打通不等于默认开启](/wiki/agent-session/as-concept-%E8%83%BD%E5%8A%9B%E9%93%BE%E8%B7%AF%E6%89%93%E9%80%9A%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%BC%80%E5%90%AF) —— 相邻问题：链路通了但默认关着\n- 请求别名不等于实际模型ID —— 同一会话：观测只能证明\"到了哪一层\"\n- 中间进展与最终回答要按phase区分 —— 同一族：事件要有语义类型才算被正确消费"
  ]
},
{
  "id": "as-concept-整体时限不能当首字节时限用",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "整体时限不能当首字节时限用",
  "oneLiner": "**`AbortSignal.timeout(N)` 是「这次请求从头到尾只给 N 秒」的整体时限，不是「N 秒内没响应就换下一个」的首字节时限。** 把它当成后者写进中转/网关的重试逻辑，会掐死所有慢启动的请求。",
  "body": [
    "## 判据与现象：\n\n- 推理模型（如 gemini-3.x）先产出大量思考 token 才吐正文，**首字节常在 6~28 秒**；给 8 秒整体时限，等于必然在思考阶段就掐断。\n- 症状是「回答说到一半没了」，且**耗时集中在同一个值附近**（如每次 17~19 秒挂断），说明是固定超时切断连接，而不是模型自己停的。\n- 想要「不响应就换 key/模型」的语义，要用**首字节超时**（连上并收到第一片后才开始计时）或连接超时 + 读超时分离，而不是一个总时长。\n\n修法优先级：\n\n1. **网关侧（根因）**：把流超时从 ~20s 大幅调高；若必须在超时前收尾，要主动 flush 一个 `finish_reason: \"length\"` 而不是直接断流。\n2. 服务端补偿：流自然结束但没见到 `finish_reason` 时，向前端发明确的 `{truncated: true}` 事件。\n3. 前端可感知：收到 `truncated` 时提示「回答被上游截断，可重试」，不要静默当完整答案渲染。\n\n> 同族判断见 [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A)：凡是拿「时长」当「是否完成/是否可用」的代理，都会在真实耗时分叉时误杀。",
    "## 相关\n\n- [流自然结束不等于回答完整](/wiki/agent-session/as-concept-%E6%B5%81%E8%87%AA%E7%84%B6%E7%BB%93%E6%9D%9F%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%9B%9E%E7%AD%94%E5%AE%8C%E6%95%B4)\n- 重试分三层不要整体重跑\n- 账号冷却不要按错误码一刀切"
  ]
},
{
  "id": "as-concept-无入站流量的服务靠数据与配置隔离环境",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "无入站流量的服务靠数据与配置隔离环境",
  "oneLiner": "**没有入站流量的后台 Worker（队列消费、Cron）不能用域名/端口分环境 —— 它的隔离维度是数据库、env、镜像和调度锁。**",
  "body": [
    "## 这类服务的环境隔离手段：\n\n| 维度 | 作用 |\n|---|---|\n| 数据库 | 真正的隔离线：测试库与正式库必须分开，否则测试任务被正式 Worker 消费掉 |\n| env 文件 | 独立 `.env.worker.staging`（`NODE_ENV`、观测平台 environment 标签） |\n| 镜像 | 复用同一份**不可变镜像**，只换 env 与目录，避免测试的是另一份代码 |\n| Compose project name / 目录 | 让两套进程互不覆盖 |\n| 调度锁（flock） | 防止两边 Cron 撞在同一份任务上 |\n\n**关键判据：隔离要看「共享了什么可变状态」，而不是看「进程跑在哪」。** 一个 worker 只要连了正式库，就算部署在另一个目录、另一个 Compose 项目里，也等于没有测试环境。\n\n验收方式也顺着这条线：测试侧 enqueue 一条任务 → 手动跑一次 staging worker → 校验结果与用量事件 → **确认正式库任务数量完全不变**。\n\n相关：[deploy目录是运行配方不是另一套应用](/wiki/agent-session/as-concept-deploy%E7%9B%AE%E5%BD%95%E6%98%AF%E8%BF%90%E8%A1%8C%E9%85%8D%E6%96%B9%E4%B8%8D%E6%98%AF%E5%8F%A6%E4%B8%80%E5%A5%97%E5%BA%94%E7%94%A8)、[本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90)、派生数据只在写入时入队旧数据要单独回填"
  ]
},
{
  "id": "as-concept-检索要按难度迭代",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "检索要按难度迭代",
  "oneLiner": "**知识库检索不是「搜一次、读一篇」，而是 Agent 主导的迭代 loop：先判任务难度定预算，读不通就换查询再来一轮；停止条件看覆盖度，不看命中数量。**",
  "body": [
    "## 一、三层要分开看\n\n```text\n检索引擎：怎样找得准\n工具协议：怎样把结果交给 Agent\nAgent Loop：Agent 怎样判断继续找还是停止\n```\n\n1. **检索引擎**（你的判断，22:22）：纯文本检索不够 → 关键词召回（FTS/BM25）+ 语义召回（Embedding）→ 融合（RRF）→ **重排序** → 去重与多样化。召回单位应是 **chunk（片段）**，不是整篇笔记。\n2. **工具协议**：返回多篇候选 + 命中片段，而不是只给标题列表。\n   - `limit` 是**本轮取多少**，不是整个任务的上限\n   - `cursor` 是分页书签（不透明 token），支持继续翻页\n3. **Agent Loop**：Agent 自己决定搜索深度。",
    "## 二、读取不应永远从开头\n\n现在只读「正文第 0 → 12,000 字符」，这在检索场景里是错的：搜索已经定位到 `chunk-18`，就该读它**前后几段**，确认相关后再扩大范围。\n\n```text\n搜索命中片段 → 读命中片段上下文 → 相关则扩大 / 不相关则换查询\n```\n\n「查一个事实」和「总结整篇笔记」不该走同一条昂贵路径。",
    "## 三、难度怎么判（你的假设 + 修正）\n\n你的假设（22:45）：提问**越精简越简单**，越模糊越困难；很难的还要 `ask_user_question`。\n\n修正：**问题长度不代表难度**，它最多是很弱的信号。「我该怎么办？」很短，但目标、背景、评价标准全不清楚。\n\n真正要判三个维度：\n\n1. **意图清晰度** —— 目标、范围、对象、期望结果是否明确\n2. **证据与推理范围** —— 定位一个事实，还是要多来源比较归纳\n3. **行动风险** —— 错了是否有明显影响\n\n所以至少分三档，**「复杂」和「模糊」不是一回事**：\n\n```text\n简单：清晰、范围窄、低风险\n复杂：问题清晰，但需要多来源或多步推理\n模糊：缺少目标、范围或关键条件\n```\n\n`ask_user_question` 也不是因为问题难，而是因为**缺少只有用户才能决定的信息**。存在阻断性歧义才打断；能作低风险合理假设就说明假设后继续。",
    "## 四、证据充分的停止条件\n\n数量是搜索预算，**覆盖度才是完成标准**：\n\n- 所有关键子问题都有直接证据\n- 关键结论不是仅由重复材料支撑\n- 没有尚未处理的重要冲突\n- 继续搜索已经很少产生新信息\n\n> 「直到返回所有相关内容」是理想但不可证明的目标 —— 无法可靠判断「已经找全」。所以分工是：普通检索 loop 打底，`deep-research` 扩大证据覆盖，`deep-insight` 找联系、矛盾与盲点。",
    "## 相关\n\n- [长尾查询](/wiki/agent-session/as-concept-%E9%95%BF%E5%B0%BE%E6%9F%A5%E8%AF%A2)（搜索源的选择）\n- 上下文按信任等级分层（同一次讨论的另一半）\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87)（歧义要先确认）\n- [关键词检索的三个打分缺陷](/wiki/agent-session/as-concept-%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%89%E4%B8%AA%E6%89%93%E5%88%86%E7%BC%BA%E9%99%B7) —— 引擎层为什么找不准\n- 检索是一条分层链 —— 本条是该链的迭代层"
  ]
},
{
  "id": "as-concept-模型-ID-是入口相关的",
  "updatedAt": "2026-08-10",
  "wikiSlug": "agent-session",
  "term": "模型 ID 是入口相关的",
  "oneLiner": "**同一个模型在不同 agent 入口的模型清单里，注册的 ID 可能不一样（裸名 vs 带 provider 前缀）。报 `Invalid model name` / 404 时，第一步是查「该入口清单里这个模型到底写成什么」，而不是照搬另一条链路里能用的那个名字。**",
  "body": [
    "## 实例\n\n同一个 `GPT-5.6-Sol`，同一台机器上三家清单的写法不同：\n\n| 入口 | 清单里的 ID |\n|---|---|\n| Codex | `gpt-5.6-sol`（裸名） |\n| pi / Claude Code | `chatgpt/gpt-5.6-sol`（带 provider 前缀） |\n\n而用户的中转网关真实模型 ID 是**裸名**。于是出现：\n\n- 原生 Codex 直连中转 → 裸名可用（Codex 自己会把短名解析成完整路由）\n- 平台网关（`cindy_gateway` 一类本地转发）→ 模型表只认它自己清单里的写法，传另一种就 400/404",
    "## 结论\n\n- **模型名的合法性由末端网关的模型表决定**，不由「你在别处能跑」决定。前缀是网关用来路由到某个上游 provider 的，不是装饰。\n- 因此「直连中转可用」**不能**推出「平台的网关链路可用」——两条链路的模型表是两份。\n- 排查顺序：先拿到该入口的模型清单（或清单来源），确认完整 ID；再看真正发出去的那次请求里的 `model` 字段是什么。\n- 这也解释了为什么「以前能用、最近坏了」常常不是模型坏了，而是**入口换了**（换了 agent、换了会话来源、换了网关）。",
    "## 相关\n\n- 请求别名不等于实际模型ID —— 别名是请求侧的名字，实际 ID 以响应为准\n- 模型可见性按入口分批 —— 同一账号不同入口的模型可用性本就不同步\n- [能力被环境差异静默改变](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A2%AB%E7%8E%AF%E5%A2%83%E5%B7%AE%E5%BC%82%E9%9D%99%E9%BB%98%E6%94%B9%E5%8F%98) —— 名字一样、路径不同的同族现象\n- Agent模型接入与额度机制"
  ]
},
{
  "id": "as-concept-模型可见性按入口分批，不是按账号一刀切",
  "updatedAt": "2026-09-05",
  "wikiSlug": "agent-session",
  "term": "模型可见性按入口分批，不是按账号一刀切",
  "oneLiner": "**「为什么我没有某个模型」多半不是操作错，而是灰度按入口/账号分批放量。** 同一账号在网页端、API、CLI 三个入口的模型可用性**不同步**，所以排查的第一步是**分入口**，而不是先怀疑自己漏了什么步骤。",
  "body": [
    "## 一、灰度（staged rollout）的放量顺序\n\n新模型的开放是**分批**的，不是全量同时上线：\n\n- 先向部分企业访问计划开放，再逐步覆盖 API → Plus / Pro / Business / Enterprise\n- **付费 ≠ 立刻可见**：还要过账号、地区、工作区、具体产品入口这几道\n\n推论：`我看不到` 与 `我没有权限` 是两件事。前者可能只是**批次还没轮到**。",
    "## 二、入口之间不共享可见性\n\n关键机制：**CLI 的模型可用性与 ChatGPT 网页端、API 不一定同步。**\n在 CLI 里看不到，不代表网页端/API 也没有；反过来同理。\n\n所以「某个模型消失了/没出现」的排查顺序是：\n\n1. 更新客户端到最新版本\n2. 退出后重新登录账号\n3. 确认当前用的是正确的**组织 / 工作区**\n4. 若是 API，确认账号已拿到该模型的**权限**\n\n只有这四步都过了，才值得怀疑是权限本身的问题。",
    "## 三、别把「会话自报的模型标识」当成你的账号权限\n\n会话里 agent 自报的模型名（例如它说自己是某个具体版本），是**当前会话暴露给它的标识**，\n只说明「这次对话跑在哪个模型上」，**不代表你的账号拥有该模型**。\n\n把这两者混起来，就会得出「我明明有 X 却调不到」这种自相矛盾的结论 —— 参见 [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87)（同一个词在说不同的东西）。",
    "## 相关\n\n- Agent模型接入与额度机制（同一条主线：能力与额度都**按账号/入口的实际口径**算，不按你脑中的口径算）\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6)（落点由账号目录决定，可观测才能判断「谁接得到」）\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-派生数据只在写入时入队，旧数据要单独回填",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "派生数据只在写入时入队，旧数据要单独回填",
  "oneLiner": "**embedding / 索引 / 摘要这类派生数据，如果入队只挂在「新建」或「标题正文更新」事件上，那么存量数据永远不会被处理，失败任务也不会自动复活。** 此时「查不到/搜不出来」不是检索层坏了，是数据层从来没被喂过。",
  "body": [
    "## 实测形态：45 条笔记 40 条从未入队\n\n```text\n旧笔记：      从未创建过 embedding run（没有 backfill 机制）\n失败笔记：    停在 failed，不会自动 retry\n同版本再保存： 用同一个幂等键，不会重新创建任务\n```\n\n而执行器本身是好的——当天新订阅的文章已成功生成 `gemini-embedding-001 / 768维` 向量。所以主因是**缺少历史补跑 + 失败恢复**，不是 worker、数据库或 cron 又断了。",
    "## 可迁移的判断\n\n设计任何「写入时触发的派生数据」时，必须同时回答三问：\n\n1. **存量怎么办？** 上线这条派生逻辑之前已经存在的数据，谁把它们跑一遍（backfill / 迁移）？\n2. **失败怎么办？** 失败任务有没有重试或复活入口？部署新配置后，旧的 failed 任务会不会自动重跑？\n3. **同一输入重复保存会不会重新入队？** 幂等键在防重复的同时，也可能挡住「想重试」的那一次。\n\n三问里任何一问没答案，这类功能上线后就一定会出现「新数据正常、老数据永久缺失」的静默缺口。",
    "## 相关\n\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 本条是该 synthesis 的一处实例：新逻辑只对未来经过该路径的对象生效\n- [异步补齐长期不生效要查写入失败](/wiki/agent-session/as-concept-%E5%BC%82%E6%AD%A5%E8%A1%A5%E9%BD%90%E9%95%BF%E6%9C%9F%E4%B8%8D%E7%94%9F%E6%95%88%E8%A6%81%E6%9F%A5%E5%86%99%E5%85%A5%E5%A4%B1%E8%B4%A5) —— 那页查「写不进去」，本条查「从来没入队 / 不重试」\n- INSERT OR IGNORE会让旧行不更新 —— 同形：新逻辑修对了，旧行被跳过\n- 知识库先编译再查而不是查询时拼原文\n- 活的能力取决于增量机制而不是生成质量 —— 本条是该 synthesis 的一处证据：缺的是「触发 / 存量 / 失效」三问里的存量与重试"
  ]
},
{
  "id": "as-concept-流自然结束不等于回答完整",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "流自然结束不等于回答完整",
  "oneLiner": "**「流读完了」只说明连接结束，不说明回答生成完了 —— 判据必须是 `finish_reason`，不是「循环退出」。**",
  "body": [
    "## 正常结束是 `finish_reason: \"stop\"`，撞输出上限是 `\"length\"`。如果收到的是 `null`，表示流**没走完就被外部关掉了**。可直接用于定位的证据：\n\n- `finish_reason: null`（而非 stop/length）；\n- 整个响应只有 **1 个 chunk id**，且多次复现都在同一耗时附近挂断 → 上游有固定超时；\n- 上游实际模型与配置里写的不一致 → 轮换/中转层在生效，故障点在中转而不在业务代码。\n\n**为什么用户看不到任何错误**：中转「干净地关闭连接」（`done`）时不会抛错，服务端的 `catch (stream)` 分支不触发，于是顺手补了个 `[DONE]`；前端收到 `done` 就正常退出消费循环，把残缺内容当完整答案渲染。整条链路没有一处认为「出错了」。\n\n所以正确做法是**把「缺少终止原因」当成一种失败信号显式传递**：服务端发现「流自然结束但没见到 `finish_reason`」就下发 `{truncated: true}`，前端据此在气泡尾部提示「回答被上游截断，可重试」，而不是静默补 `[DONE]`。\n\n**附带的取证陷阱**：推理模型会先用思考 token 吃掉预算，只累加 `delta.content` 统计出的正文长度**不能反推** `max_tokens` 是否被撞到（例如 1024 上限下正文只落 84 字，是因为 `reasoning_content` 占了大头）。统计输出长度时必须把思考内容一起算，否则会得出「84 字就触发 length」这种反直觉且错误的结论。",
    "## 相关\n\n- [整体时限不能当首字节时限用](/wiki/agent-session/as-concept-%E6%95%B4%E4%BD%93%E6%97%B6%E9%99%90%E4%B8%8D%E8%83%BD%E5%BD%93%E9%A6%96%E5%AD%97%E8%8A%82%E6%97%B6%E9%99%90%E7%94%A8)\n- 假成功要有真失败信号\n- 中间进展与最终回答要按phase区分\n- [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83)"
  ]
},
{
  "id": "as-concept-混合检索先用-RRF-融合",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "混合检索先用 RRF 融合",
  "oneLiner": "**向量召回与词法召回的原始分数不可比，首版应该用 RRF（Reciprocal Rank Fusion）按「排名」融合，而不是校准分数。中文语料不要用 `to_tsvector('simple')` 做词法召回——它没有中文分词，改用 `pg_trgm`。重排器（cross-encoder）留成可选端口，不要第一版就上。**",
  "body": [
    "## 一、推荐的首版链路\n\n```text\n当前内容\n├─ embedding → pgvector Top 50\n└─ 标题/摘要/标签/正文前段 → pg_trgm Top 50\n                          ↓\n                  RRF 融合 → 最终 Top 5\n                          ↓\n                    关系落库\n```",
    "## 二、为什么是 RRF\n\n`score = 1/(k + vectorRank) + 1/(k + lexicalRank)`\n\n- 不比较两路不可比的原始分数，因此**不需要校准 cosine 与文本相似度的区间**。\n- 确定性强，方便测试和复现。\n- 只在单路出现的内容也能参与，只是排名更低。\n- 无额外模型调用和成本，适合异步 workflow。",
    "## 三、两个具体坑\n\n1. **中文分词**：`to_tsvector('simple')` 对连续中文不是可靠的关键词基线（等于整句一刀）。改用 `pg_trgm`（Neon PG15 已支持）；Neon 的 `pg_search` 已弃用，不要新接。\n2. **trigram 的输入长度**：词法侧只索引有限长度的字段（标题 + 摘要 + 标签 + 正文前段），不要拿两篇完整长文直接做 trigram 比较。",
    "## 四、什么时候才加重排\n\nRRF 之后可选接 cross-encoder reranker：它同时读「当前内容 + 候选内容」，比向量距离更能区分**主题相同但观点无关 / 用词相似但语义不同**。代价是每个 Run 多一次模型或 rerank API 调用。做法是先 RRF 到 Top 20，再重排取 Top 5。",
    "## 五、不要第一版就引框架\n\n已有 `AiRun`、版本控制、Workflow Port、关系落库时，LangChain / LlamaIndex / 额外检索服务只会再包一层。\n→ 参见 Agent编排层薄自建优先于重型框架",
    "## 相关\n\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)\n- [关键词检索的三个打分缺陷](/wiki/agent-session/as-concept-%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%89%E4%B8%AA%E6%89%93%E5%88%86%E7%BC%BA%E9%99%B7)\n- RAG是流程不是组件\n- 检索是一条分层链 —— 本条是该链的融合/排序层"
  ]
},
{
  "id": "as-concept-物化结果要按版本失效并增量刷新",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "物化结果要按版本失效并增量刷新",
  "oneLiner": "**AI 生成的结果（洞察、相关推荐、摘要）不要二选一「实时算」或「生成一次就永久存」，而要当成「带版本的物化结果」：存下来、标版本、被触发条件作废、后台增量刷新。** 用户问的正是这个 —— 洞察是存一次，还是随时间刷新？",
  "body": [
    "## 三个错误答案\n\n- **每次保存都算**：笔记每 800ms 自动保存，写一句就分析一次 —— 又贵又抖，还会在用户没写完时过早下结论。\n- **每次打开页面都实时算**：用户要等模型和向量计算，页面打开变慢。\n- **首次生成后永远不变**：库越大，旧结论越不准。",
    "## 正确形态：SWR 式物化\n\n```text\n写入侧：停止编辑约 2 分钟 → 标记待处理 → Cron 生成 → 落库（带版本）\n读取侧：打开页面 → 立即展示已存结果 → 若已 stale，后台刷新替换\n手动侧：高优先级任务，走同一套队列，而不是同步请求\n```\n\n每条结果记录版本与失效依据，例如：`noteId / noteVersion / kind / relatedSetHash / corpusRevision / promptVersion / model / generatedAt / supersededAt`。**触发失效的条件**：正文变了、Top-K 相关内容明显变了、新内容与它建立高相似关系、prompt 或模型版本变了、用户手动要求重算。",
    "## 关键约束：不能「每加一篇就重算全部」\n\n正确做法是反向的：新内容先算向量 → 找出真正受影响的少数对象 → 更新关联 → 只把这几条标记 stale。**作废要精确到「受影响的那几个」，刷新要留给下一次 Cron。**",
    "## 相关\n\n- [工作流按内容类型分开而不是抽象成一条通用流水线](/wiki/agent-session/as-concept-%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%8C%89%E5%86%85%E5%AE%B9%E7%B1%BB%E5%9E%8B%E5%88%86%E5%BC%80%E8%80%8C%E4%B8%8D%E6%98%AF%E6%8A%BD%E8%B1%A1%E6%88%90%E4%B8%80%E6%9D%A1%E9%80%9A%E7%94%A8%E6%B5%81%E6%B0%B4%E7%BA%BF) —— 这些结果由哪条流水线产出\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 版本比对才决定谁作废谁\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 规则改了，已有物化结果不会自己更新\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C) —— 「旧结果先展示、后台替换」的缓存同族\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) —— 刷新任务排在哪\n- 活的能力取决于增量机制而不是生成质量 —— 本条是该 synthesis 的一处证据：判据从「生成一次」换成「带版本 + 作废 + 增量刷新」"
  ]
},
{
  "id": "as-concept-相似度分数不等于答案可用",
  "updatedAt": "2026-10-10",
  "wikiSlug": "agent-session",
  "term": "相似度分数不等于答案可用",
  "oneLiner": "**检索的相似度分数衡量的是「像不像」，不是「能不能用」。** 一道只改了一个关键数字、或换了一个否定词的题，",
  "body": [
    "## 在语义上可以高度相似，但答案完全不同 —— 于是**分数越高，误用答案的风险越大**。",
    "## 一、分数与可用性之间隔着三件事\n\n| 分数能说明 | 分数说明不了 |\n|---|---|\n| 文本/语义接近 | 题干关键条件是否一致 |\n| 属于同一知识点 | 选项是否只是顺序变化 |\n| 可能是同一道题 | 返回的答案与解析是否自洽 |\n\n所以「命中」不是一个阈值判断，而是**一组条件校验**：关键数字、约束条件、设问方式、选项内容，\n逐项对上才能用它的答案；对不上就降级为「相似题参考」，另行解答或澄清。",
    "## 二、阈值本身的三个问题\n\n看到一个像 `0.85` 这样的阈值，要问：\n\n1. **它是谁定的、依据是什么？** 没有标注集算出来的阈值只是拍的。\n2. **它测的是什么相似度？** 题干文字、图片、向量空间，量纲不同，同一个数字含义不同。\n3. **它是全局一个值吗？** 不同题型/科目/长短文本，合适的阈值本就不同。",
    "## 三、正确的检查顺序\n\n```text\n先按条件校验（能不能用）\n  → 再按分数排序（哪一个最像）\n```\n\n反过来做（先取最高分再直接使用）就是「把相似当成了等价」。",
    "## 相关\n\n- 检索是一条分层链 —— 分数只是召回层的一个信号，不能当终局判据\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 相似度是「答案可用」的代理，代理不能替真值\n- 评测要先隔离被测层 —— 校验规则要能被单独评测，才看得出它是否有效\n- 混合检索先用RRF融合 —— 融合排序解决「排第几」，不解决「能不能用」"
  ]
},
{
  "id": "as-concept-短期记忆与长期记忆的边界",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "短期记忆与长期记忆的边界",
  "oneLiner": "**区分短期/长期记忆用两条边界：是否参与当前任务、是否跨会话持续影响行为。短期（工作/会话记忆）可以丢、可以压缩成摘要；长期（持久记忆）必须有来源、时间、置信度、适用范围，并且能被修改、撤销、遗忘。检索索引不是记忆。**",
  "body": [
    "## 一、短期记忆（工作 / 会话记忆）\n\n- 作用范围：当前任务、当前页面、当前会话。\n- 内容：最近几轮对话、当前笔记、未保存草稿、刚搜索出的结果、工具调用结果。\n- 允许不完整、不稳定，重点是帮 agent 完成当前任务。\n- 会话结束可丢弃，或压缩成摘要。\n- **关键推论：出现在上下文里 ≠ 长期事实。** 不能因为它被看到过就自动升级为长期记忆。",
    "## 二、长期记忆（持久记忆）\n\n- 作用范围：跨多个会话。\n- 准入标准：未来仍可能有用、相对稳定、能改变 agent 行为或检索结果。\n- 元数据是硬要求：来源、时间、置信度、适用范围；且可修改 / 撤销 / 遗忘。\n- **反例**：不是聊天记录的无限累积，也不是向量库里的全部内容。\n\n长期记忆内部还要再分两类，否则「偏好」和「经历」会混成同一种数据：\n\n1. **事实 / 偏好记忆** —— 用户明确表达或多次稳定表现的信息（如「回答用中文、要简短」）。\n2. **事件 / 观点记忆** —— 用户做过什么、讨论过什么、观点如何演变（如「上个月开始研究向量数据库」「这个观点后来变了」）。",
    "## 三、检索 ≠ 记忆\n\n> 向量搜索负责「找相关材料」；长期记忆负责「保存经过筛选、未来可复用的用户信息」。\n\nembedding 索引、内容相似关系（relation）都是**检索层**，不等于用户记忆。初版建议：先跑通「短期上下文 + 内容检索」，长期记忆只接受**用户明确要求记住**的内容，以及**多次证据确认**的偏好——不要一开始就自动记住所有聊天。",
    "## 相关\n\n- 上下文按信任等级分层\n- 知识库先编译再查而不是查询时拼原文\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)\n- Agent管理的记忆以文件为真相源 —— 长期记忆的一种落地形态：文件为真源、索引可重建"
  ]
},
{
  "id": "as-concept-能力链路打通不等于默认开启",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "能力链路打通不等于默认开启",
  "oneLiner": "**「模型支持 + 链路完整」不等于「用户能用上」—— 中间可能只差一行写死的开关。**",
  "body": [
    "## 思考（thinking/reasoning）功能的实例：整条链路是通的 —— 模型原生支持、`thinking_delta` 事件被转发、reasoning token 用量被统计上报、前端有可折叠的思考块 UI。但普通对话仍然看不到思考过程，原因是路由里一行：\n\n```ts\nthinkingLevel: selected?.modelPurpose === \"agent.deep_insight\" ? \"medium\" : \"off\"\n```\n\n于是只有 Deep Insight 技能能思考，普通 chat 恒为 `off`。\n\n两个可迁移的点：\n\n- **判断「能力有没有」要看开关，而不是看链路。** 检查顺序应是「模型支持 → 事件与用量链路 → UI → **调用参数**」，最后一环最容易漏，也最容易被误判成「没这个能力」。\n- **开启是成本决策，不是技术决策。** 打开思考只改一行，代价是响应延迟和 reasoning token 费用。所以合理做法是按用途分级（重任务开、日常对话关），而不是全局一刀切 —— 与「模型可见性按入口分批」同一思路。\n\n相关：模型可见性按入口分批、[Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop)、[能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 本条是该 synthesis 的第九处证据：链路全通，但「认账」的最后一跳（调用参数）恒为 off"
  ]
},
{
  "id": "as-concept-计数闸门不等于上下文管理",
  "updatedAt": "2026-09-14",
  "wikiSlug": "agent-session",
  "term": "计数闸门不等于上下文管理",
  "oneLiner": "**用「消息条数 ≤ 20」当护栏不是上下文窗口管理：服务端既不截断也不滑动窗口，要么全塞要么 400。最坏输入没有 token 级兜底，用户体验是\"聊到第 11 轮突然报错\"。**",
  "body": [
    "## 一、20 条是数组元素数，不是轮数\n\n每次用户发问都会往数组里塞 `user` + 空的 `assistant` 占位，所以 20 条 ≈ **10 轮用户提问**就触顶。第 11 轮服务端直接返回 400（前端把它当错误弹出）。\n\n关键点：这个限制**只管这一次请求**，判断依据是 `body.messages` 的全量长度，**不做截断、不做滑动窗口**。",
    "## 二、每轮实际上下文上限（无护栏）\n\n服务端只是把 `system + messages` 全量转发：\n\n| 组成 | 量级 |\n|---|---|\n| system prompt（含词条正文 context 预算） | 12000 字符 |\n| 历史消息 20 × 2000 字 | 40000 字符 |\n| 合计 | ≈ 52000 字符 ≈ 5~9 万 token |\n\n两个限制（条数、单条字数）**独立校验、乘起来没人管**。真要触发，要么模型报 context 超限，要么被网关静默截断 —— 表现为\"AI 忘了前面说过的话\"。实际因为 prompt 强制简短很少打满，但这是一个**没有护栏的边界**。",
    "## 三、输出侧\n\n`max_tokens: 2048`（约 1300~2000 中文字）。对\"2-5 句\"的 prompt 约束绰绰有余，几乎不会打满 —— 除非模型失控或 reasoning 挤占预算（见 Agent模型接入与额度机制）。",
    "## 四、推论\n\n- **计数闸门 ≠ 上下文管理**：前者是硬拒绝，后者应是滑动窗口 / 按 token 截断 / 摘要压缩。\n- 会话状态的生命周期要一起看：前端 state 只在组件存活期，刷新即失；只有落 sessionStorage 的场景才跨刷新保留。",
    "## 相关\n\n- [上下文成本由基础上下文和会话数决定](/wiki/agent-session/as-concept-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%88%90%E6%9C%AC%E7%94%B1%E5%9F%BA%E7%A1%80%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%E4%BC%9A%E8%AF%9D%E6%95%B0%E5%86%B3%E5%AE%9A) —— 为什么压了历史也不小\n- 上下文按信任等级分层\n- Agent模型接入与额度机制\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5)\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-评测平台是平台层，项目规则是适配层",
  "updatedAt": "2026-06-12",
  "wikiSlug": "agent-session",
  "term": "评测平台是平台层，项目规则是适配层",
  "oneLiner": "**Langfuse 这类观测/实验平台能承担 prompt 评测，但永远不知道你的业务规则；业务规则必须由项目自己以适配层的形式喂进去。** 因此结论是：不要自己造 Prompt Lab / Skill Lab / Tool Lab，改为「平台承担 Lab 功能，项目只写适配代码」。",
  "body": [
    "## 分工\n\n```text\nLangfuse  = 平台层：prompt 版本、数据集、实验、trace、评分、历史对比\n项目适配层 = fixtures（假数据/输入/上下文）\n           + cases（项目用例定义）\n           + runners（调用本项目 prompt/skill/tool）\n           + evaluators（项目自定义 scorer）\n```\n\n平台能回答「用了哪个 prompt 版本、哪个 case 失败、原始输出是什么、分数比上次差没有、trace 断在哪」。平台**不能**回答「哪些 fieldPath 合法、结构化 JSON 怎样才算保留列表、这个 skill 应返回哪些风险项、能不能编造指标、确认卡需要哪些字段」——这些项目知识必须由项目提供。",
    "## Langfuse 与 Promptfoo 的区别\n\n两者默认重心不同，Langfuse 确实能在一部分场景替代 Promptfoo：\n\n```text\nLangfuse  = 团队级调试/观测/实验平台（有 hosted state）\nPromptfoo = 本地优先的 prompt/agent 测试运行器（配置 + assertions，不依赖平台账号）\n```\n\nPromptfoo 的优势是本地启动快、配置简单、assertions 直接（JSON 校验、包含/不包含、自定义 JS/Python）、适合在 CI 当测试跑。",
    "## 常见误判：上传固定输出 ≠ 链路回归\n\n把固定的 `modelOutput` case 上传到平台跑 experiment，只验证了**解析与契约**（输出是否合法 JSON、tool call 契约、字段路径、禁用 token）。它不覆盖：不同版本 prompt 对比、真实模型输出、单个业务 skill、工具安全测试、端到端链路回归。评估覆盖面要按「测的是解析还是链路」区分，别把前者当成后者。",
    "## 相关\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条是该骨架的一处实例：适配层写了，还要真的跑真链路才算落地\n- Agent harness 要隔离复现可收尾 —— 项目侧的调试房间与平台侧评测的分工\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 同为「平台层 vs 项目层」的真源划分"
  ]
},
{
  "id": "as-concept-评测要先隔离被测层：外部依赖可控、模型调用真实",
  "updatedAt": "2026-10-10",
  "wikiSlug": "agent-session",
  "term": "评测要先隔离被测层：外部依赖可控、模型调用真实",
  "oneLiner": "**要评「Agent 拿到检索结果之后怎么用」，就必须把检索结果变成可控的构造数据，同时让模型调用真实发生。** 否则召回波动和被测策略的效果混在一起，结果无法归因。",
  "body": [
    "## 一、隔离的是「不确定的那一段」\n\n评测对象是 **Agent + 工具使用规则**，不是搜索服务的召回能力。所以：\n\n- **替换**：真实搜索 → 测试版工具，按用例编号返回准备好的内容；\n- **保留**：模型调用、工具调用决策、回答生成、完整调用链。\n\n调用链固定为：`输入题目 → Agent 决定是否调工具 → 工具返回指定结果 → Agent 给出答案与解析 → 保存完整过程`。\n这样单独检验的是「拿到结果之后如何使用」，暂不评价召回。",
    "## 二、构造情形要覆盖「像但不对」\n\n围绕同一个失效假设（相似题答案被误用），每道题配五种返回，覆盖从正常到冲突的梯度：\n\n| 检索情形 | 构造方式 | 观察重点 |\n|---|---|---|\n| 原题命中 | 返回同一道题及正确答案、解析 | 改进策略是否影响正常答疑 |\n| 选项重排 | 题干相同、打乱选项顺序，返回原选项字母 | 是否照抄答案字母 |\n| 条件变化 | 改一个影响答案的数字或约束，返回改后的题与答案 | 是否把相似题当原题 |\n| 无结果 | 返回 `found=false` | 是否能独立解题 |\n| 答案冲突 | 题干相同，但答案与解析结论互相矛盾 | 是否检查依据一致性 |",
    "## 三、三条执行纪律\n\n1. **只改一处**：B 方案相对 A 只增加「检索结果使用前校验」，其余提示词与配置保持一致。不同时改模型、讲解风格、记忆机制 —— 否则判断不出效果来自哪项改动。\n2. **不向 Agent 暴露用例标签**：标签（如「这是条件变化用例」）只存在于测试编排里，泄露就等于给答案。\n3. **未调用工具也要记录**：Agent 根本没调工具，说明**调用策略本身**有问题，属于有效结果，不是无效样本。",
    "## 四、构造数据必须标注来源\n\n人为改写的检索结果要标为「构造测试数据」，**不能称作线上真实错误**。\n判据：**证据的强度取决于它是怎么来的**；把构造样本说成真实缺陷，结论会被高估。\n\n同一条纪律还管到「谁提供的数据」：评测集若由他人（如测试同学）提供，\n贡献就只能写成**执行评测与问题定位**，不能写成「我构建了评测集」——\n数据来源决定了哪部分能算你的成果。",
    "## 五、隔离出来的层要显式声明边界\n\n替换掉真实检索后，结论只覆盖「拿到结果之后如何使用」这一层。\n所以：**不能因为跑通了实验，就说优化了真实检索系统**；\n涉及召回率/覆盖率的问题（库里有没有、找不找得到）属于被替换掉的那一层，不在结论范围内。",
    "## 相关\n\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— A/B 两方案跑同一批用例，差异才有意义\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 用「构造数据可控」换掉真实召回的不可控，是在为归因排除代理噪声\n- [测试策略](/wiki/agent-session/as-topic-%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5) —— 本页是「集成/评测」侧的方法：先隔离出要测的那一层，再串回真实链路\n- [相似度分数不等于答案可用](/wiki/agent-session/as-concept-%E7%9B%B8%E4%BC%BC%E5%BA%A6%E5%88%86%E6%95%B0%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%AD%94%E6%A1%88%E5%8F%AF%E7%94%A8) —— 检索结果可控之后，判据本身也要选对\n- [评测规模要与结论的推广范围匹配](/wiki/agent-session/as-concept-%E8%AF%84%E6%B5%8B%E8%A7%84%E6%A8%A1%E8%A6%81%E4%B8%8E%E7%BB%93%E8%AE%BA%E7%9A%84%E6%8E%A8%E5%B9%BF%E8%8C%83%E5%9B%B4%E5%8C%B9%E9%85%8D) —— 本页是「受控小样本」，那条讲它的边界与升级到真实链路的路径"
  ]
},
{
  "id": "as-concept-评测规模要与结论的推广范围匹配",
  "updatedAt": "2026-10-11",
  "wikiSlug": "agent-session",
  "term": "评测规模要与结论的推广范围匹配",
  "oneLiner": "**构造的小样本实验能验证「策略在受控输入下的行为」，但证明不了「规模化检索效果」和「能否推广到没见过的题」。**",
  "body": [
    "## 所以设计实验前先回答：**这份结论要推广到哪里？** 再决定用构造数据还是真实链路。\n「几道精心设计的陷阱题」能检查基本功能，但不足以体现海量、多题型下的真实难点。",
    "## 一、两种「海量」要分开\n\n| 海量指什么 | 带来的难度 | 构造实验能否覆盖 |\n|---|---|---|\n| 海量**题库** | 真实检索的召回与相似题混淆 | ❌ 人工构造的检索返回证明不了 |\n| 海量**用户问题** | 覆盖度与评测代表性 | ❌ 抽样不足就外推不了 |\n\n用人工构造的检索结果，只能研究 **Agent 如何使用依据**；\n要证明真实题库的检索效果，必须走真实搜题服务。两者不能互相替代。",
    "## 二、规模化评测的四步\n\n1. **用真实链路建立基线，先找问题** —— 真实题经实际搜题服务与 Agent，保留检索结果、工具调用、最终答案与解析。**不预设「某个错误一定是最大问题」，让数据说。** 起步用探索集（如 100～200 道），按题型、文字/图片输入分层抽样，避免只挑容易拿到的题。\n2. **把「答错」拆成可行动的环节** —— 题目理解 / 工具调用 / 检索结果 / 依据使用 / 推理解答。**最终答案对错用于衡量效果，Trace 用于定位原因**；证据不足就标为待核查，不强行归因。\n3. **针对高频错误设计策略，讨论取舍** —— 比较的不只是「加不加一句校验」，而是：全量核验 vs 按题型触发，各减少多少错误、增加多少耗时？检索与独立求解冲突时，何时继续答、何时澄清或拒答？**正确性、覆盖率、成本与等待时间之间怎么取舍，才是产品策略价值所在。**\n4. **用未见题检验能否推广** —— 分开发集/验证集，同源题、近重复题、同一道题的变式放在同一侧；开发集调方案，冻结后再跑验证集。",
    "## 三、报告口径要防「刷分」\n\n只报整体正确率会掩盖问题，还要同时报：\n\n- 各题型正确率；\n- **答案正确但解析错误**的比例；\n- **回答覆盖率** —— 否则可以靠多拒答把准确率「做高」；\n- **原来答对、改后答错**的数量（回退）；\n- 单题耗时与调用成本。\n\n对很小的差异，需要更多样本或重复运行，**不能凭几道题的提升下结论**。",
    "## 四、样本覆盖要能被解释\n\n海量场景不要求跑遍所有题，但要求说清：**样本覆盖了什么、遗漏了什么、结论能推广到哪里。**\n没有真实使用分布时，就明确声明这是「覆盖性测试集」，不称作线上代表性样本。",
    "## 相关\n\n- 评测要先隔离被测层 —— 隔离是为了单独评「拿到结果之后怎么用」；本页讲它的边界与升级路径（要评规模效果就得回真实链路）\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 用构造样本代替真实分布，是在拿代理量换归因能力，必须显式声明适用范围\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 覆盖率、回退数、解析正确率都是口径的一部分，只报一个数就会失真\n- [测试策略](/wiki/agent-session/as-topic-%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5) —— 本页是「集成/评测」在规模维度上的延伸\n- 通过只证明它实际驱动的路径 —— 构造实验只驱动了受控那条路，不能宣称真实检索被优化"
  ]
},
{
  "id": "as-concept-请求别名不等于实际模型-ID",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "请求别名不等于实际模型 ID",
  "oneLiner": "**请求里的模型名可能只是一个别名（路由名），provider 响应里返回的 `model` 才是实际执行的模型 ID。两者不同不是错误，不该去\"修正\"它 —— 该修的是观测层把实际 ID 丢掉了。**",
  "body": [
    "## 一次实例\n\n- 请求 `model: deepseek-chat`，DeepSeek 返回 `model: deepseek-v4-flash`。\n- 最初被当成\"请求名与返回名不一致 = bug\"。用户的判断相反：**实际返回的才是对的，模型 ID 就应该以返回为准**。\n- 真正的缺陷在适配器：Pi 的 Responses adapter 解析了响应的 `id` / `usage` / `status`，唯独没保存 `response.model` → `AssistantMessage.responseModel = undefined` → Langfuse 回退显示请求别名，事实被抹掉。",
    "## 结论\n\n- 观测数据要**分开存两个字段**：`requestedModel`（别名/路由名）与 `responseModel`（实际模型），而不是强行让它们相等。\n- 不要把返回的实际 ID 硬编码进适配器；provider 将来返回别的 ID 也要如实记录。\n- 这属于纯 observability 元数据修复，不改请求、不改推理行为。",
    "## 相关\n\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) —— 同一取向：观测层显示的是它收到的，不是真实发生的\n- [开关要映射到模型调用才算生效](/wiki/agent-session/as-concept-%E5%BC%80%E5%85%B3%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E6%89%8D%E7%AE%97%E7%94%9F%E6%95%88) —— 同一会话的另一处：观测能证明的只有\"传到了哪一层\"\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6) —— 别名与路由的关系\n- [能力被环境差异静默改变](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A2%AB%E7%8E%AF%E5%A2%83%E5%B7%AE%E5%BC%82%E9%9D%99%E9%BB%98%E6%94%B9%E5%8F%98)\n- 兼容端点要防SDK注入非标准字段"
  ]
},
{
  "id": "as-concept-读图能力看声明字段，并按模型逐个实测",
  "updatedAt": "2026-09-25",
  "wikiSlug": "agent-session",
  "term": "读图能力看声明字段，并按模型逐个实测",
  "oneLiner": "**模型能不能读图由两件独立的事决定：① 客户端读的那个声明字段（`modalities.input` 是否含 `\"image\"`）；② 该模型后端是否真的能读。两者都不能从「名字看着像视觉模型」推断出来。**",
  "body": [
    "## 一、判定权在声明字段，不在「附件」标记\n\nopencode 判定能否读图**只看 `modalities.input` 是否包含 `\"image\"`**；`attachment: true` 单独写没用。\n于是「配置里明明标了支持附件，模型却读不了图」的根因不是模型不行，而是**消费方读的不是那个字段**。\n\n两个推论：\n\n- 能力是否存在，取决于**消费方实际读的那一处**，与声明得多漂亮无关 —— 同族见 [开关要映射到模型调用才算生效](/wiki/agent-session/as-concept-%E5%BC%80%E5%85%B3%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E6%89%8D%E7%AE%97%E7%94%9F%E6%95%88)、[能力链路打通不等于默认开启](/wiki/agent-session/as-concept-%E8%83%BD%E5%8A%9B%E9%93%BE%E8%B7%AF%E6%89%93%E9%80%9A%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%BC%80%E5%90%AF)。\n- 因此**不能批量给所有模型加 `image`**。批量加等于用声明掩盖未验证，把一个真实差异（有的模型确实读不了）变成静默的假成功。",
    "## 二、声明之后仍要按模型实测：能力不按网关齐步走\n\n同一网关内部，模型能力**不齐**，不能按网关整体推断：\n\n| 网关 / 模型 | 读图 |\n|---|---|\n| `workbuddy-gl`：balanced / fast / default / primary / gpt-5.4·5.5·5.6 系列 / hy3 / hy4 / deepseek-v4.1-flash / kimi-k2.8 / kimi-k3 | ✅ 真读图 |\n| `workbuddy-gl`：`glm-5.3` | ❌ 明确回复「不支持图片输入」 |\n| `deepseek`（官方） | ✅ 真读图 |\n| `cli2api`（qwen） | ❌ 不读图 |\n| `amd-radeon` | ❌ 明确报错 `does not support image input` |\n\n结论：**「这个网关支持读图」是个错的问题**，正确的问题是「这个网关里的哪个模型支持」。这与 模型可见性按入口分批 同源 —— 可用性/能力都是**按具体条目**放量，不按账号或网关一刀切。",
    "## 三、判定方法与未验证项\n\n- **判定用真值，不用名字**：喂一张双色图问颜色，答对才算真读图。名字里带视觉/多模态语义的模型也可能是空壳 —— 见 [能力被环境差异静默改变](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A2%AB%E7%8E%AF%E5%A2%83%E5%B7%AE%E5%BC%82%E9%9D%99%E9%BB%98%E6%94%B9%E5%8F%98)。\n- **测不出来的必须记为未验证**，不能按「应该支持」写进配置：`deep-model` / `gemini-3.5-flash` 返回空、`b.ai` 余额为 0、`zcode` 502 —— 这三类都是**环境没给出结论**，不是「不支持」。参见 [验不到的部分要显式记为未验证](/wiki/agent-session/as-concept-%E9%AA%8C%E4%B8%8D%E5%88%B0%E7%9A%84%E9%83%A8%E5%88%86%E8%A6%81%E6%98%BE%E5%BC%8F%E8%AE%B0%E4%B8%BA%E6%9C%AA%E9%AA%8C%E8%AF%81)。",
    "## 相关\n\n- [能力被环境差异静默改变](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A2%AB%E7%8E%AF%E5%A2%83%E5%B7%AE%E5%BC%82%E9%9D%99%E9%BB%98%E6%94%B9%E5%8F%98) —— 本条是它在「模型能力按条目放量」上的一处实例\n- 模型可见性按入口分批 —— 能力按条目放量，不按账号/网关一刀切\n- [内置能力只覆盖它声明的那一段](/wiki/agent-session/as-concept-%E5%86%85%E7%BD%AE%E8%83%BD%E5%8A%9B%E5%8F%AA%E8%A6%86%E7%9B%96%E5%AE%83%E5%A3%B0%E6%98%8E%E7%9A%84%E9%82%A3%E4%B8%80%E6%AE%B5) —— 同源：问「覆盖到哪一段」，而不是「有没有这个词」\n- 模型ID是入口相关的 —— 名字一样、后端不同\n- Agent模型接入与额度机制"
  ]
},
{
  "id": "as-concept-轮换要带健康状态记忆",
  "updatedAt": "2026-09-14",
  "wikiSlug": "agent-session",
  "term": "轮换要带健康状态记忆",
  "oneLiner": "**多 key / 多模型轮换不能盲目串行遍历：要记住哪些组合刚坏过、按错误性质设冷却、并给每次尝试设超时，否则一轮请求会把函数执行预算烧光，用户等满超时后仍然失败。**",
  "body": [
    "## 一、盲目串行的算术\n\n`4 key × 3 模型 = 12` 组，上游单次约 **8 秒** → 全试一遍 **96 秒**，直接撞上 Vercel `maxDuration: 60`。表现是：\n\n```\n连续 3 次：60.003s 超时 → 429\n```\n\n比不轮换更糟 —— 用户等 60 秒然后失败。",
    "## 二、健康状态记忆\n\n进程级内存表：`health: Map<\"key::model\", {until, status}>`。\n\n**冷却时长按错误性质区分**（这是关键，不能一律 30 秒）：\n\n| 错误 | 冷却 | 理由 |\n|---|---|---|\n| 429 配额耗尽 | **10 分钟** | 额度按天重置，几秒内不可能恢复 |\n| 503 模型过载 | 60 秒 | 通常几十秒恢复 |\n| 403 / 404 | 5 分钟 | 凭据或模型名问题，短期不自愈 |\n| 500 / 502 / 504、网络抛错 | 30 秒 | 网关抖动 |\n\n**排序：健康组合优先，冷却组合排后而不是删除** —— 健康表是临时的，全部冷却时仍要有兜底可试。\n\n```js\nconst ordered = [...combos.filter(c => !c.cooling), ...combos.filter(c => c.cooling)];\n```\n\n**单次尝试超时 8 秒**，防止一个慢组合拖死整轮；**最后一组不加超时**（反正没有下一组，不如多等一会）。成功即 `markSuccess` 清除冷却，稳定态下第一组就命中，只需一次上游往返。",
    "## 三、边界：无状态部署让健康表打折\n\nVercel 是无状态的，每次请求可能落在**不同实例**，健康表不共享。所以冷却只是「本实例的经验」，效果是概率性的 —— 实测同样逻辑耗时在 **1.7s ~ 31s** 之间波动。\n\n结论：健康记忆能显著降低最坏耗时，但不能替代**跨实例的共享状态**（真要稳定就得放 Redis / KV 之类）。",
    "## 相关\n\n- 账号冷却不要按错误码一刀切（把网络级抖动误当账号级故障的反例）\n- Agent模型接入与额度机制（额度池、轮换为何\"一下子满了\"）\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6)（上游自带账号冷却的做法）\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC)（429 与 503 不能混为一类）"
  ]
},
{
  "id": "as-concept-重试分三层不要整体重跑.md",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "重试分三层不要整体重跑.md",
  "oneLiner": "**「重试」不是一个动作，而是三个层级，必须分清各自动的是什么：**",
  "body": [
    "## | 层级 | 重试的是 | 好比 |\n|---|---|---|\n| 模型调用重试 | 只重发那一次 AI 请求 | 打电话没通，重拨 |\n| DB 写入重试 | 只重试那一次数据库操作 | 存文件失败，再存一次 |\n| **turn 整体重试** | 把「写消息 → 跑模型 → 落库」整轮从头再来 | 整通业务流程推倒重办 |",
    "## 为什么整体重跑要交给用户而不是服务端\n\n一个 turn 里可能已经产生副作用：模型已调用、token 已扣、提案已建。服务端盲目自动重跑整轮有重复执行与重复计费的风险。所以现在的设计是：**turn 整体重来由用户点「重新尝试」触发，服务端不自动做。**\n\n推论：**健壮性改进优先补最底层那格**（给 DB 写入加重试），这样冷启动首发能无感通过，又不去碰「整轮自动重跑」那块有副作用风险的区域。",
    "## turn 是什么\n\n一轮对话回合：`turns.begin`（写用户消息 + 建 turn 租约）→ `runtime.run`（调模型、模型决定调工具、生成回复）→ `turns.complete`（回复/提案/引用落库）。**三步全成功才算这个 turn 成功**，中间任一步失败整轮判失败。",
    "## 相关\n\n- 只有第一发失败要查冷启动与连接重试\n- [保存失败要落本地草稿并自动重试](/wiki/agent-session/as-concept-%E4%BF%9D%E5%AD%98%E5%A4%B1%E8%B4%A5%E8%A6%81%E8%90%BD%E6%9C%AC%E5%9C%B0%E8%8D%89%E7%A8%BF%E5%B9%B6%E8%87%AA%E5%8A%A8%E9%87%8D%E8%AF%95)\n- 阻塞式工具与提案确认\n- [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A)\n- [整体时限不能当首字节时限用](/wiki/agent-session/as-concept-%E6%95%B4%E4%BD%93%E6%97%B6%E9%99%90%E4%B8%8D%E8%83%BD%E5%BD%93%E9%A6%96%E5%AD%97%E8%8A%82%E6%97%B6%E9%99%90%E7%94%A8)"
  ]
},
{
  "id": "as-concept-长任务不要用固定超时判定",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "长任务不要用固定超时判定",
  "oneLiner": "**用固定 `RUN_TIMEOUT_MS`（如 10 分钟）来判定一个 agent turn 是否结束，会误杀长任务。长任务本来就可能超过 10 分钟，所以判据不能是「时长」，而应该是「真实事件 / 真实状态」。**",
  "body": [
    "## 正确判据\n\n- **优先等结构化事件**：`turn/completed`、`turn/interrupted`、app-server 关闭等。\n- 在等不到明确事件时，才退回「空闲时长」启发式（如终端画面/流稳定若干秒），并把它当作兜底而非主判据。\n- 状态上区分「仍在运行」和「已停止」：超时不应该直接「停止并丢弃」，而应表达为「仍在运行」。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 「固定时长」是「任务是否结束」的代理，长任务上必然分叉\n- 阻塞式工具与提案确认\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5)\n- 中间进展与最终回答要按phase区分 —— 同一条 agent 事件流上的两个「判据/字段」问题\n- [整体时限不能当首字节时限用](/wiki/agent-session/as-concept-%E6%95%B4%E4%BD%93%E6%97%B6%E9%99%90%E4%B8%8D%E8%83%BD%E5%BD%93%E9%A6%96%E5%AD%97%E8%8A%82%E6%97%B6%E9%99%90%E7%94%A8)"
  ]
},
{
  "id": "as-concept-Agent-Harness-不只是-Tool-Loop",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "Agent Harness 不只是 Tool Loop",
  "oneLiner": "**「能调工具、能循环」只是 harness 的骨架，不是 harness。** 一个 Agent 服务如果只是「固定系统提示词 + 硬编码工具 + 框架提供的 Tool Loop」，那它只是 MVP —— 缺的是记忆、技能注册表、上下文工程和运行生命周期。",
  "body": [
    "## 最小骨架 vs 完整 harness\n\n| 只有骨架（MVP） | harness 该有的 |\n|---|---|\n| 固定 Markdown 系统提示词 | 提示词分层与版本管理 |\n| 工具硬编码在文件里 | Tool Registry + 参数校验 |\n| Skill 是两个枚举（在提示词后拼一段） | 可注册、可配置、用户可自定义的 Skill 系统 |\n| 短期「记忆」= 把最近 N 条原始消息重塞给模型 | Token 预算、摘要压缩、重要信息保留、上下文淘汰 |\n| 无 | 长期记忆：偏好 / 事实 / 习惯 / 人物的抽取、召回、更新、遗忘 |\n| 无 | 运行状态、步骤日志、上下文快照、暂停恢复、重试策略 |\n| 无 | 定时任务能反过来触发某个 Skill |",
    "## 判据：别把「用了别人的 loop」当成「有自己的 harness」\n\n调用 `ToolLoopAgent` 之类的现成 loop，说明**循环本身**不用自己写；但 harness 的其余部分不会因此出现。判断一个 Agent 服务成熟度时，逐项问上面右列 —— 缺的那一列才是真正的工作量。\n\n另：写入类工具的安全边界（提案 → 用户确认 → 执行）是骨架里**做对了**的部分，应该保留而不是重写（见 阻塞式工具与提案确认）。",
    "## 附：现成 loop 长什么样（以 Vercel AI SDK 的 `ToolLoopAgent` 为例）\n\n它的定义就是 **Agent = LLM + Tools + Loop**：\n\n```text\n用户消息 → 调模型 → 模型要调 tool？\n                     是 → 执行 tool → 结果塞回消息 → 再调模型 …\n                     否 → 输出最终 text，结束\n```\n\n停止条件（源码注释）：模型不再返回 tool-calls（正常结束）／tool 没有 `execute`（要外部接）／tool 需要 approval（`needsApproval`）／命中 `stopWhen`（默认约 20 步）。\n\n它是一个 **SDK 自带的 tool-calling 状态机**，不是自研类、也不是 LangGraph / Mastra；业务库、鉴权、propose-confirm 都在它外面。旧名叫 `Experimental_Agent`，现已正名。\n\n→ 这正是本节的主题：**把「循环」外包出去，剩下的 harness（记忆、技能注册表、上下文工程、运行生命周期）一件都不会因此出现。**",
    "## 相关\n\n- Agent编排层薄自建优先于重型框架 —— 哪些底层该复用、哪些边界必须自建\n- 阻塞式工具与提案确认 —— 写工具如何暂停等确认\n- [上下文成本由基础上下文和会话数决定](/wiki/agent-session/as-concept-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%88%90%E6%9C%AC%E7%94%B1%E5%9F%BA%E7%A1%80%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%E4%BC%9A%E8%AF%9D%E6%95%B0%E5%86%B3%E5%AE%9A) —— 短期记忆为什么不能靠「塞最近 N 条」\n- 远程Agent控制要定义执行协议与状态模型 —— 运行状态与生命周期\n- Agent会话要按树保存而不是消息列表 —— 会话与运行生命周期是 harness 的一部分\n- [网页读取工具要受控而不是直连任意URL](/wiki/agent-session/as-concept-%E7%BD%91%E9%A1%B5%E8%AF%BB%E5%8F%96%E5%B7%A5%E5%85%B7%E8%A6%81%E5%8F%97%E6%8E%A7%E8%80%8C%E4%B8%8D%E6%98%AF%E7%9B%B4%E8%BF%9E%E4%BB%BB%E6%84%8FURL) —— 工具是 runtime 注册的受控能力，不是「模型能访问 URL」\n- Agent harness 要隔离复现可收尾 —— 同名不同义：那条指「调试用 harness」，本条指「产品里的 Agent 运行骨架」"
  ]
},
{
  "id": "as-concept-Agent-harness-要隔离、可复现、可收尾",
  "updatedAt": "2026-06-12",
  "wikiSlug": "agent-session",
  "term": "Agent harness 要隔离、可复现、可收尾",
  "oneLiner": "**Agent harness 是给 Agent 搭的「调试房间」，本质回答三件事：隔离谁、怎么复现、怎么收尾。**",
  "body": [
    "## 在真实产品链路里调 Agent，每次试错都可能污染数据、改坏真实内容、占用共享缓存、和别人的调试互相干扰。所以 harness 不是替代真实产品，而是让你能反复问：收到的上下文对不对、工具调用格式对不对、流式有没有卡住、失败信息是否清楚、会不会误写真实数据。",
    "## 三问\n\n| 问题 | 内容 |\n|---|---|\n| 隔离谁 | 数据（假 fixture）、缓存（独立 Redis / key 前缀）、端口（独立服务）、模型调用（假模型或录播响应）、日志 |\n| 怎么复现 | 固定测试数据 + 固定输入 + 固定模型响应，让失败可重跑 |\n| 怎么收尾 | 每次生成 run id 便于看日志，调试结束清掉测试数据与缓存 |\n\n默认不写真实数据，是 harness 的第一原则。",
    "## 隔离也适用于配置\n\n多项目共用同一个 CLI 时，**不要改全局配置来满足单个项目**。全局 provider/base_url 一改，所有项目、所有新开线程都会跟着变。更保守的做法是给该项目单独的 profile 配置文件 + 项目专用 env + 一个启动脚本，全局命令仍走默认。\n\n前提认知：这类 CLI 通常**没有「按项目自动切 provider」的稳定字段**（只有项目 trust 之类的配置），provider 是全局或 profile 层的。所以「进入目录就自动用这套 key」要么靠改全局（风险最大），要么靠 direnv / alias / wrapper 注入。",
    "## 成熟路径：先工程接口，后薄包装\n\n第一版 harness 用起来「麻烦」通常不是方向错，而是停在底层工程接口：\n\n- 本地离线回归和外部平台协作被有意分开（一个不需要 key，一个需要 key 和 label）\n- 默认保护隐私与稳定性，不上传 prompt / 原文 / provider 输出\n- 暴露的是一串细碎命令，对日常使用太碎\n\n缺的是面向日常的**薄包装**（2–3 个入口命令 + 一页「改 prompt → 跑 → 可选上传 → 再推 label」的文档），而不是把底层设计推倒。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 同源：harness 要能观察到真实输入输出，而不是靠代理指标\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条是该骨架的一处实例：harness 只有真的被日常跑起来才算落地\n- 评测平台是平台层项目规则是适配层 —— 平台侧评测与项目侧 harness 的分工\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) —— 隔离与配置分层是控制面里「独立协作」那一层"
  ]
},
{
  "id": "as-concept-Agent-编排层薄自建优先于重型框架",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "Agent 编排层薄自建优先于重型框架",
  "oneLiner": "**给本地优先的桌面 App 接 Agent，先自建一层很薄的编排层，不要直接引入 LangChain / LangGraph / AutoGen 这类重型框架 —— 当能力边界很明确（读笔记、读文件、写笔记）时，权限边界比「框架功能丰富」更重要。** 这里的「自建」不是自己训练模型，也不是从零写 LLM，而是自己定义工具、权限、上下文与错误处理。",
  "body": [
    "## 薄自建层要自己定义什么\n\n- Agent 能调用哪些工具：`list_notes`、`read_note`、`read_file`、`write_note`\n- 工具怎么接 Tauri / vault / 文件系统\n- 写入前要不要用户确认\n- 上下文怎么塞：当前笔记、选中文件、搜索结果\n- 错误怎么显示：没权限、文件太大、笔记冲突、写入失败\n\n优点是贴合「本地优先、文件是真相源、写笔记走现有 vault 契约、API key 运行时配置」，代码量可控，第一版不被框架抽象绑住。代价是高级能力要自己补：多步计划、任务队列、长程记忆、工具重试。",
    "## 开源框架的适用面与代价\n\n框架的价值在**复杂任务流**：例如「扫描整个知识库 → 找主题 → 生成报告 → 拆成多篇笔记 → 反复修订」，这时 agent graph、memory、workflow、multi-agent、观测调试确实省事。\n\n代价是：多数框架默认服务端 / 云端思路，和 Tauri 桌面、本地文件权限、vault 原子写入、前端状态机不完全贴合；还会引入依赖、抽象层与调试成本。**最危险的是写文件 / 写笔记这类能力被框架包装得太深后，权限边界会变模糊。**",
    "## 推荐路线：混合\n\n- 不接完整开源 Agent App，也不引入重型 agent framework\n- 复用现有 AI SDK / 模型的 tool calling 能力\n- 自己定义工具层、权限层、笔记读写层、UI 状态\n- 将来真要复杂工作流，再单独评估是否引入「流程图式编排」（如 LangGraph）\n\n这样第一版能快，架构也不会死。",
    "## 要不要做「统一 engine」：按 provider × 平台定价\n\n同一个判断在「多 agent 接入」上的翻版：**抽象层的成本正比于「要覆盖的 provider 数 × 平台数」，而不是正比于「架构看起来是否优雅」。** 只有 Claude Code + Codex 两个 provider、电脑 server + 手机 App 两个入口时，做完整 engine（provider 切换、平台 adapter、command engine）是过度设计；保留两个原生 bridge、只抽极小的共享 helper 就够。反过来，要做 10+ agent、13 个平台、多用户权限时，engine 才回本。\n\n判据：**先数清楚要覆盖的组合数，再决定抽象层级**；抽象本身不产生价值，覆盖组合数才产生价值。",
    "## 修正：复用成熟 harness 的底层，只自建业务边界\n\n后续讨论把「薄自建」的边界校准得更精确 —— 判据是**这项能力是不是业务专属**：\n\n- **不该自建（直接复用底层）**：多 provider 协议、流式输出、tool call / tool result 标准化、参数校验、思考等级、provider 重试与超时、prompt cache、token 用量与成本计算、API Key / OAuth 凭据管理、fake provider 测试。自己写一遍只会把时间耗在各家 tool calling 的差异上。\n- **必须自建**：Skill 注册与权限、用户权限、Action 提案与确认、删除到废纸篓之类的业务规则、数据库状态、prompt 与可观测、产品专属上下文检索。\n- **仍然不要做的**：把整个系统交给 LangGraph / Mastra 全家桶。它们功能全，但会和已有的 PostgreSQL 对话 / Action / Cron / 可观测平台形成**两套状态系统**，而这里要跑的并不是数小时的复杂研究 Agent。\n\n另一条容易误判的边界：**「调用了别人的 Tool Loop」不等于「有了自己的 harness」**。\n`ToolLoopAgent` + 固定系统提示词 + 硬编码工具，只是调用了框架提供的 loop；harness 的其余部分（记忆、技能注册表、上下文工程、运行生命周期）仍然是缺的（见 [Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop)）。",
    "## 相关\n\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D) —— 同轮讨论的展开：不做通用 engine，只把「会话真源 + 同步协议」定清\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) —— 本文是该 topic 里「AI 执行层」判断的展开\n- 阻塞式工具与提案确认 —— 写入类工具如何暂停等确认\n- [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3) —— 同族判据：新增入口/依赖前先问去掉它会损失什么"
  ]
},
{
  "id": "as-concept-Issue-完成由用户验收后再关闭",
  "updatedAt": "2026-07-12",
  "wikiSlug": "agent-session",
  "term": "Issue 完成由用户验收后再关闭",
  "oneLiner": "**用 Linear/MCP 管项目时，agent 实现完 Issue 后要保持 `In Progress` 等用户验收，不能自己设 `Done`。** 状态闭环：Spec → 实现 → 用户验收 → 才 Done。",
  "body": [
    "## 三条协作规则\n\n1. **每次新对话先读 `In Progress` Issue 及最新评论**，优先关注用户的中文验收反馈；英文的 AI 完成说明**不算用户需求或验收结论**。\n2. **用户建 Issue 要求处理时**，先读完整 Issue 与评论，再用**中文发 Spec 评论**（问题、目标行为、范围、验收标准、待确认项），对齐后再实现。\n3. **实现完成后用中文评论**根因、改动、验证结果、未验证项、风险与提交；Issue 保持 `In Progress` 等验收；用户确认通过后再补验收结论并设 `Done`。",
    "## 为什么\n\n只写「动作三条」不够 —— 会漏掉「AI 自己完成后直接关 Issue」这个失败模式。把**状态机写死**（谁有权改到 Done）比写动作更能防住它。",
    "## 相关\n\n- 协作规则要入Git才算项目资产\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- Agent harness 要隔离复现可收尾"
  ]
},
{
  "id": "as-concept-deploy目录是运行配方不是另一套应用",
  "updatedAt": "2026-07-22",
  "wikiSlug": "agent-session",
  "term": "deploy目录是运行配方不是另一套应用",
  "oneLiner": "**monorepo 三层分工：`apps/` 是程序本身做什么，`packages/` 是程序复用哪些能力，`deploy/` 是程序怎么运行到服务器上。`deploy/` 不放业务逻辑，它是现有 app 的「安装和启动说明」。**",
  "body": [
    "## 一、判断某个文件该放哪\n\n| 内容 | 归属 |\n|---|---|\n| 某个可独立启动的服务/命令 | `apps/` |\n| 被多个 app 复用的适配器、schema、类型 | `packages/` |\n| Dockerfile、compose、`.env.*.example`、部署 README | `deploy/` |\n\n推论：**通用 provider adapter 放 `packages/`，workflow 编排放 `apps/`** —— 前者被复用，后者是可执行逻辑。",
    "## 二、一个易混点：配置放在 deploy，但读取方是 app\n\n`deploy/<service>/.env.*` 只是**把配置注入容器/进程**；运行时实际读取配置的仍然是 `apps/` 里的代码。调用链是：\n\n```text\ndeploy/<svc>/compose.yml\n→ 启动 apps/<svc> 的命令\n→ apps/<svc> 执行\n→ packages/* 调外部服务 / 读写数据库\n```\n\n所以「环境变量该放哪」要问两个问题：**谁读取它**（决定文件属于哪个服务的配置契约），**谁部署它**（决定文件放在哪个 deploy 目录）。",
    "## 三、配置按边界分，不按习惯分\n\n沿用 web 的根目录 `.env.local` 习惯到独立的 worker 服务上是错的：worker 属于后台进程，不是 web。**每个可独立部署的单元应有自己的配置契约**（并配 `.example` + gitignore），既避免把某类专用 key 暴露给 web 进程，也让预览/生产沿用同一份契约。",
    "## 相关\n\n- Schema是声明Migration是历史\n- [两个执行入口共用一套业务规则](/wiki/agent-session/as-concept-%E4%B8%A4%E4%B8%AA%E6%89%A7%E8%A1%8C%E5%85%A5%E5%8F%A3%E5%85%B1%E7%94%A8%E4%B8%80%E5%A5%97%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99)\n- [Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop)"
  ]
},
{
  "id": "as-concept-skill-约束要区分「补模型短板」与「替模型做判断」",
  "updatedAt": "2026-07-18",
  "wikiSlug": "agent-session",
  "term": "skill 约束要区分「补模型短板」与「替模型做判断」",
  "oneLiner": "**模型足够强时，很重的 skill 约束反而会限制它的能力 —— 判据是：这条约束在「补模型当下做不到的事」，还是在「替模型做它本可动态判断的决策」。前者该留，后者在强模型上只换来延迟和返工。**",
  "body": [
    "## 这条判断的由来\n\n用户在使用 Superpowers 这类重流程 skill 时的两个体感：\n\n1. **重的 skill 约束了模型能力** —— 模型（sol）已经很强，很多步骤本来可以由它自己判断。\n2. **但不敢全砍** —— 担心完全不用 skill 体验反而更差，想保留一部分开发流程规范。\n\n所以问题不是「用不用 skill」，而是**约束的边界划在哪**。",
    "## 判据：补短板 vs 替判断\n\n| 约束类型 | 例子 | 强模型下的处理 |\n|---|---|---|\n| 补模型短板 | 强制先复现再改、强制跑验证、强制记录决策 | 保留 —— 模型不会自发保持一致性 |\n| 替模型做判断 | 规定每一步先做哪个子任务、固定探索顺序 | 可放宽 —— 强模型能动态决定 |\n\n流程规范（评审、验证、分支纪律）属于第一类：它们约束的不是「怎么想」，而是「不许跳过」。见 [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7) —— 那份分级里「小功能不该走重流程」是同一条判据在流程粒度上的落地。",
    "## 待验证\n\n这是用户转述的外部说法（原话：「听别人说的，但是我还没测试过」），**尚未 A/B 验证**。\n\n可验证方式：同一批任务分别用「重 skill / 轻 skill / 无 skill」跑，对比耗时与结果质量，重点看「去掉某条约束后，模型是否仍然自发做到了它」。只有「去掉就退化」的约束才算补短板。",
    "## 相关\n\n- [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7) —— 同族判据：验证强度按任务大小与阶段分级，而非一刀切\n- Agent编排层薄自建优先于重型框架 —— 抽象/框架的成本要对着真实规模算\n- 工作模式切换改变的是harness而非模型 —— 约束来自 harness，不是模型本身"
  ]
},
{
  "id": "as-concept-Skill-跨-agent-会静默失效",
  "updatedAt": "2026-08-27",
  "wikiSlug": "agent-session",
  "term": "Skill 跨 agent 会静默失效",
  "oneLiner": "**「磁盘上有」≠「本 session 能用」。** 技能目录存在、软链也在，但 agent 的 `available_skills` 里没有它 —— 这不是没装，而是**加载阶段整体跳过**，且不报错。",
  "body": [
    "## 一、静默失效的根因：frontmatter 不兼容\n\n同一个 `SKILL.md` 在不同 agent 里的解析规则不同。写入了某家专属字段（如 `tools` / `argument-hint` / `user-invocable`），别的 agent 解析 frontmatter 失败，处理方式是**整个跳过该 skill**，而不是忽略未知字段、降级加载。\n\n排查顺序（先证伪再改）：\n\n1. 确认文件/软链确实在目标 agent 的 skills 目录下；\n2. 对比**同目录下能正常加载**的 skill（如 `grill-me`）的 frontmatter —— 差异字段就是嫌疑；\n3. 删掉非通用字段，重启 agent 再看 `available_skills`。",
    "## 二、第二个坑：skill 内部路径写死到某个 agent 的目录\n\n`SKILL.md` 里 `SCRIPT=~/.claude/skills/<x>/scripts/...` 这种绝对路径，一旦 skill 被分发到别的 agent 目录，路径就断了 —— **即使加载成功也跑不起来**。\n\n规则：skill 要共享，内部引用就必须相对自身目录（或由运行时注入），不能硬编码到某一个 agent 的配置目录。",
    "## 三、为什么会同时踩两个坑：集中分发放大了兼容性\n\n技能由 skillhub 集中管理（`~/.skillshub/` 是仓库，各 agent 的 skills 目录里放**软链**指向它），一份技能同时挂在多个 agent 下。\n\n好处是改一处全体生效；代价是**任何一处兼容性问题会被复制到所有 agent**，而且第一个暴露它的往往是「平时不用的那个 agent」。所以新增/迁移 skill 时，要在**每个**接入的 agent 里各验证一次加载，而不是只测写它的那家。",
    "## 相关\n\n- [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6)（同为「配置层错位导致静默失效」）\n- 上下文按信任等级分层（skill 的定位：教为什么，不规定每一步）\n- skill约束要区分补短板与替模型判断 —— 约束的取舍：补短板 vs 替模型判断"
  ]
},
{
  "id": "as-concept-一次性凭证拿到就落盘",
  "updatedAt": "2026-09-13",
  "wikiSlug": "agent-session",
  "term": "一次性凭证拿到就落盘",
  "oneLiner": "**授权码换 token 这类「一次性」命令只能成功执行一次。必须在第一次执行时就把结果写进文件，不能先跑一遍「看看结果对不对」，再跑第二遍去保存 —— 第二遍必然失效，凭证直接丢。**",
  "body": [
    "## 踩坑形态\n\n```\n生成授权链接 → 用户登录 → 拿 token → 存成账号文件 → 重启服务\n```\n\n- 前三步都成功了（能确认 uid、区域、有效期），**证明账号本身没问题**；\n- 第四步翻车：agent 想「先试试再保存」，而那个取 token 的命令是**单次有效**的，\n  重跑即失效，刚拿到的凭证就此丢失；\n- 结果：账号信息「看过一眼」但没落盘，服务里账号数不变，**用户必须重新点一次链接**。",
    "## 规则\n\n1. **拿到即写盘**，验证时从盘上读，而不是重新取一次。\n2. 执行前先判断命令是否幂等 —— **授权码、一次性 token、非幂等创建接口都属于「只有一次机会」**。\n3. 失败重试前先确认：这次重试会不会把已到手的凭证作废。",
    "## 代价不对称\n\n表面上只多花用户一次点击（约 30 秒），但真正的代价是**信任**：\n用户看到的是「登录成功了却什么都没发生」，需要 agent 再解释一遍才敢重试。\n**能一次到位的流程，不要为了「先确认一下」而分两次做。**",
    "## 相关\n\n- [需要认证的命令不要并行执行](/wiki/agent-session/as-concept-%E9%9C%80%E8%A6%81%E8%AE%A4%E8%AF%81%E7%9A%84%E5%91%BD%E4%BB%A4%E4%B8%8D%E8%A6%81%E5%B9%B6%E8%A1%8C%E6%89%A7%E8%A1%8C) —— 同类：一次性授权流程不能重复触发\n- CLI登录会在平台侧注册一个Agent联系人\n- 阻塞式工具与提案确认\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-两个执行入口共用一套业务规则",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "两个执行入口共用一套业务规则",
  "oneLiner": "**当「用户手动操作」和「Agent 调工具」都会改同一份数据时，必须把确定性业务规则抽到两者共用的 Service 层；否则会长出两条业务路径，然后以你察觉不到的方式各自漂移。**",
  "body": [
    "## 分层依据：不确定性归 Agent，确定性归 Service\n\n- Agent 负责不确定的判断：用户想做什么、该查什么、该调哪个工具、要几步。\n- Application Service 负责确定性规则：这个用户是否拥有该对象、版本是否仍有效、删除是否只能进废纸篓、是否已执行过（幂等）、哪些更新必须在同一事务里。\n\n模型**永远不能直接拿数据库连接或生成 SQL**。链路固定为：模型输出 Tool Call → Tool Registry → 参数校验 → Application Service → Repository → ORM → 数据库。模型即使选错工具、被提示词注入、传错参数，也绕不过 Service 里的 ownership / 版本 / 幂等检查。",
    "## 不抽 Service 会长成什么样\n\n```text\n用户手动编辑：web API  → 直接写数据库\nAgent 编辑：  agent 工具 → 另一套写库逻辑\n```\n\n随后必然出现：一条路径检查版本、另一条不检查；一条进废纸篓、另一条直接删；一条刷新缓存、另一条不刷新导致界面显示旧内容；修 bug 只修到其中一条。",
    "## 边界判据\n\n- `packages/*` 是**进程内调用的代码库**，`apps/*` 才是**部署单元** —— 不要为了分层而把共享规则拆成微服务。\n- **不要为还没有第二个消费者的东西提前建 package**：编排先留在 `apps/agent`，共用能力放进已有的 `packages/ai` + 新的 `packages/application`，等真有第二个消费者再拆。\n- 确认闸门（提案 → 用户确认 → 执行）是**宿主**的事，不是模型的事（见 阻塞式工具与提案确认）。",
    "## 相关\n\n- 阻塞式工具与提案确认 —— 写操作如何暂停等确认，确认权为什么不能给模型\n- Agent编排层薄自建优先于重型框架 —— 哪些底层复用、哪些业务边界自建\n- 职责要先分家再谈实现 —— 同族骨架\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) —— 本文是该 topic 里「AI 能力分层」的展开\n- [deploy目录是运行配方不是另一套应用](/wiki/agent-session/as-concept-deploy%E7%9B%AE%E5%BD%95%E6%98%AF%E8%BF%90%E8%A1%8C%E9%85%8D%E6%96%B9%E4%B8%8D%E6%98%AF%E5%8F%A6%E4%B8%80%E5%A5%97%E5%BA%94%E7%94%A8) —— 同一套业务规则的运行侧：deploy 只管怎么跑起来"
  ]
},
{
  "id": "as-concept-交付前先同步主干",
  "updatedAt": "2026-07-31",
  "wikiSlug": "agent-session",
  "term": "交付前先同步主干",
  "oneLiner": "**worker 交付（进入 In Review）前必须先把最新 `origin/main` 合进来并重跑完整验证。** 否则会出现 Change Propagation Failure（变更传播失败）：worker 分支本地全绿，但 GitHub 基于最新 `main` 创建 synthetic merge（临时合并提交）后，新加入的文件才暴露编译错误（如 `TS1375`），CI 红。",
  "body": [
    "## 门槛命令（示例）\n\n```bash\ngit fetch origin main\ngit merge --no-edit origin/main\npnpm db:generate && pnpm lint && pnpm build && pnpm test:unit\n```\n\n跑完才能进 `In Review`。",
    "## 为什么不能只看本地绿灯\n\n本地分支是在旧基线上验证的；主干同时被别人推进。CI 合并前会在最新主干上再合一次，那一刻才是真实状态。**「本地全绿」证明的是旧基线下的正确性。**",
    "## 相关\n\n- 合并绿灯要对应当前HEAD\n- 开PR前先确认基线的远端状态\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)"
  ]
},
{
  "id": "as-concept-什么该进-git，什么该-ignore",
  "updatedAt": "2026-07-28",
  "wikiSlug": "agent-session",
  "term": "什么该进 git，什么该 ignore",
  "oneLiner": "**git 里放的只有一种东西：团队共享的事实源。** 判断一个文件该进 git 还是 ignore，问三个问题，三关都过才进：",
  "body": [
    "## ```text\n1. 换一台机器 / 换一个人 clone 下来，还需要它吗？   否 → ignore（个人/本机私有）\n2. 它能被命令重新生成吗？                            能 → ignore（可再生产物，入库只制造噪声与冲突）\n3. 它含密钥/密码吗？                                 含 → 永远 ignore（安全红线）\n```",
    "## 套到 AI 协作型仓库\n\n| 类别 | 例子 | 归属 | 原因 |\n|---|---|---|---|\n| 源代码 / 文档 | `apps/` `packages/` `docs/` | ✅ git | 事实源本体 |\n| 依赖 / 构建产物 | `node_modules/` `.next/` `.turbo/` | ❌ ignore | 一条命令可再生 |\n| 密钥 | `.env.local` | ❌ ignore | 秘密 |\n| **协作数据** | 任务 PRD、验收记录、`workflow.md`、`workspace/` 日志 | ✅ git | 人工产出、不可再生；多个 AI 会话并行且会话常挂，**git 是它们之间唯一可靠的共享记忆** |\n| 协作脚本 | `.trellis/scripts/*.py` | ✅ git（项目决策） | 严格说可再生产，但入库保证 clone 即用、版本一致 |\n| **运行时状态** | `.runtime/`、`.developer`、`.current-task`、`__pycache__` | ❌ ignore | 每个人/每个会话都不一样，入库会互相覆盖打架 |\n| 项目级 skill | `.agents/skills/` | ✅ git | 团队共享能力 |\n| 平台适配层 | `.claude/` `.qoder/` | ❌ ignore（现状） | 被视为「个人用什么工具」的本地偏好，核心逻辑都在共享层 |\n\n一句话记忆：**协作工具的「内容」进 git，「状态」进 ignore。** 目录整体入库、里面的 runtime 文件单独排除，就是这个切分。",
    "## 为什么会犹豫\n\n反复纠结通常是因为少了第 2 问的答案：**「它能不能被重新生成」是可判定的，而「它重不重要」不是。** 先问可再生性，再问共享性。",
    "## 相关\n\n- 协作规则要入Git才算项目资产 —— 本条是它在「哪些文件」层面的操作化\n- Agent管理的记忆以文件为真相源 —— 为什么会话状态要以文件/git 为记忆载体\n- [自动提交脚本要先确认当前分支](/wiki/agent-session/as-concept-%E8%87%AA%E5%8A%A8%E6%8F%90%E4%BA%A4%E8%84%9A%E6%9C%AC%E8%A6%81%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BD%93%E5%89%8D%E5%88%86%E6%94%AF) —— 入库动作本身的护栏\n- [同目录多会话会抢分支](/wiki/agent-session/as-concept-%E5%90%8C%E7%9B%AE%E5%BD%95%E5%A4%9A%E4%BC%9A%E8%AF%9D%E4%BC%9A%E6%8A%A2%E5%88%86%E6%94%AF)"
  ]
},
{
  "id": "as-concept-作者是AI时协议要唯一规范答案",
  "updatedAt": "2026-06-11",
  "wikiSlug": "agent-session",
  "term": "作者是AI时协议要唯一规范答案",
  "oneLiner": "**产物的作者是谁，决定协议该怎么设计。** 作者是人 → 友好 = 好记、可推断；作者是 AI skill → 友好 = **低歧义、唯一规范写法、可自动校验**。同一份协议里并存多套等价写法（别名），对人只是麻烦，对 AI 是**随机性**：它会随机挑一套，而且漏字段没人拦。",
  "body": [
    "## 一、前提：模板作者不是人\n\n本项目的模板 HTML/CSS 不由人编写，而是由 AI 通过 skill 生成后直接写入数据库。所以不能按人类直觉评估「协议好不好用」（「`item.*` 挺通用啊」），要按 AI 的失败模式评估：\n\n- AI 不怕字段名抽象，怕**同一语义有多种写法**（`basics.name` 与 `profile.name` 都能用）。\n- AI 不怕规则多，怕**规则隐含**（哪些字段必须预留，文档里没写）。\n- AI 不会因为漏一个字段而察觉 —— **漏了不报错**，页面只是空白。",
    "## 二、唯一规范答案：内部兼容，对外只暴露一套\n\n做法是分层，不是删代码：\n\n```text\nrender / 数据层：继续兼容多套别名（旧模板已在用，不能破坏）\nskill 层：只告诉 AI 一套推荐写法\n```\n\n即「兼容 ≠ 推荐」：老写法继续能渲染，但不再出现在 skill 的规范里。这个状态要显式命名成 **deprecated**，而不是含糊的「也可以这样写」——`deprecated = 还能用 + 不要再生成 + 未来可迁移`。",
    "## 三、`required` 有两种含义\n\n「必含字段」不能笼统地叫 required，要拆开：\n\n| 名称 | 约束谁 | 含义 |\n|---|---|---|\n| `content_required` | 用户表单 | 简历内容必填 —— 实际基本没有强必填，简历可以是空的 |\n| `template_coverage_required` | AI 生成的模板 | 模板结构里**必须预留这些 slot** |\n\n关键区别：用户没填 `item.link`，渲染为空没问题；但模板 HTML 里**根本没有** `item.link` 的 slot，用户以后填了也永远显示不出来。所以「必含」约束的是**模板能力覆盖**，不是**用户内容填充**。",
    "## 四、闸门放在校验器，不放在 prompt 记忆\n\n靠 skill prompt 记住「必须覆盖哪些字段」不可靠；可靠的是入库前跑 **coverage validator**，漏字段直接报错。协议文档（机器可读 JSON）应被 validator 与 skill 共同消费 —— **契约被消费才不是摆设**。\n\n**06-11 实证：校验器只查了一半。** `insert-template` 当时只校验 required slot bindings（如 `item.title / item.meta / item.link`），不拦截三件事：HTML 里用了旧私有语义 class（`.pro-item-title`）、CSS 里继续写私有语义 selector、CSS 里把 renderer-owned 的底座规则（空值隐藏、contact spacing、正文行高）又塞回来。**只要校验器不管这些，未来导入模板仍会重新污染数据库** —— 说明「把闸门放进 validator」不能只做字段覆盖，还要做命名与职责边界的校验。",
    "## 五、三类文件：真源 / 契约 / 说明\n\n给 AI 消费的协议，文件分三层，并明确谁是真源：\n\n```text\n运行代码      → 系统真正执行；与文档冲突时以代码为准（真源）\n机器可读契约  → JSON：字段清单 + canonical / required / deprecated；给 skill、validator、测试消费\n人类说明文档  → MD：写法规范、示例、禁止项\n```\n\n判据：**「真实使用」= 运行时会 import/执行，或被 validator 读取**；否则只是说明。",
    "## 六、落地顺序\n\n先补 AI 的**输入**与**校验**（协议文档 → skill → coverage 校验 → 批量修存量模板），render 层的命名重构延后。理由：漏渲染的根因是「skill 不知道有哪些字段、也没有校验」，不是 render 机制本身。",
    "## 相关\n\n- [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) —— 本条服务的协议与逐字段契约\n- [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) —— 同为「中立源 + 薄适配」：格式差异不写进通用件\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条是该骨架的一处实例：契约要被 validator 读才算落地"
  ]
},
{
  "id": "as-concept-全绿的单测可能测的不是那条链路",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "全绿的单测可能测的不是那条链路",
  "oneLiner": "**测试绿了但真实 bug 还在，通常不是\"测试没覆盖到\"，而是\"测试覆盖的是另一条链路\"。判定方式：把测试里构造的输入形状，和真实故障时的输入形状逐项对照 —— 差在哪一项，就是没被覆盖的那条路。**",
  "body": [
    "## 一次实例\n\n修复\"流式回答卡死\"时，单测只覆盖了：\n\n- 「收到 terminal 后 EOF 报错」\n- scheduler（调度）行为\n\n而真实故障链是：**长工具结果 + 长 Markdown + React 状态更新**同时存在。于是单测全绿，真实 bug 仍在。\n\n同类第二例：worker 找到了一个可稳定复现的 bug（terminal 后 transport error 覆盖完成态），但它**没有取得原事故的浏览器 body-read error telemetry，也没做真实浏览器验收**；用户修复后又复现了卡死 —— 说明这个诊断最多覆盖一条故障路径，不是\"经常卡死\"的完整根因。所以 Issue 退回 `In Progress` 是正确的：**修了一个真实 bug ≠ 修好了用户报的问题**。",
    "## 可迁移的判断\n\n- 绿灯的证明范围 = 测试构造的输入形状。要把结论扩展到真实场景，必须先证明输入形状一致。\n- 复现出一个 bug 之后，要问的是\"这是用户那次的那条路径吗\"，而不是\"我修好了 bug 吗\"。\n- 缺 telemetry 时不要二选一定根因（帧没到 / 前端丢弃 / 主线程阻塞），先补日志记录真实 `event/seq` 与状态迁移，再改。",
    "## 相关\n\n- [测试策略](/wiki/agent-session/as-topic-%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5) —— 主题聚合页：分层测试的分工\n- 通过只证明它实际驱动的路径 —— 本条是该 synthesis 的第一处证据：绿灯的证明范围 = 被驱动的那条路\n- 合并绿灯要对应当前HEAD —— 同一族：绿灯的证明范围有前提\n- [经验沉淀要在问题验证后按需触发](/wiki/agent-session/as-concept-%E7%BB%8F%E9%AA%8C%E6%B2%89%E6%B7%80%E8%A6%81%E5%9C%A8%E9%97%AE%E9%A2%98%E9%AA%8C%E8%AF%81%E5%90%8E%E6%8C%89%E9%9C%80%E8%A7%A6%E5%8F%91) —— 未经验证的结论不该当成果沉淀\n- 假成功要有真失败信号\n- 验收要按唯一标识选中实例"
  ]
},
{
  "id": "as-concept-共享历史不等于共享活会话",
  "updatedAt": "2026-08-10",
  "wikiSlug": "agent-session",
  "term": "共享历史不等于共享活会话",
  "oneLiner": "**做「手机看/控电脑上的 Agent」时，「手机和电脑同一个会话」有三个不同层级，别把它们当成一回事：①同一个历史 thread；②同一个正在运行的 turn；③同一个电脑界面（Desktop/CLI 当前窗口）。只共享 ①，手机上能看到上文，但那不是「活的同一个进程」。**",
  "body": [
    "## 三个层级\n\n| 层级 | 含义 | 能不能做到 |\n|---|---|---|\n| ① 同一历史会话 | 用同一个 `threadId` / 会话记录 | 可以 |\n| ② 同一运行中 turn | 手机发消息进入同一个常驻 runtime，实时收 delta | 可以（需常驻 app-server） |\n| ③ 同一电脑界面 | 手机发的消息直接出现在已打开的 Desktop/CLI 窗口里 | 最难，取决于该界面是否连同一个 runtime |",
    "## 「新进程 + resume threadId」的迷惑性\n\n`codex exec resume <threadId> \"...\"` 是**每条消息新起一个一次性进程**，只是带着上次的 thread id。所以：\n\n- 手机能看到上文 → 因为 resume 带了历史，**不是**因为进程还活着。\n- 它属于「① 共享历史」，不是「② 共享活会话」。\n- 副作用：`codex exec` 本来就是一次性进程，退出码异常时桥接服务会当成错误 → 手机上表现为「卡在生成中 / code exit」。\n\n判据：**如果每发一条消息电脑上就多一个 `codex exec` 子进程，那就只是共享历史。**\n\n**「引用会话」也不等于「在该会话上继续」。** 手机端引用一个已导入的会话、然后从引用卡片开始新对话时，平台是**新建**一个会话（历史消息只是被读进来当上下文），消息记在新会话里，原会话保持不动。所以「我在那个会话里发了消息」和「那个会话里多了我的消息」是两件事 —— 想真正接续，要在会话列表里**打开原会话**再发。",
    "## 独立 app-server 也能实现层级 ②，但必须成为唯一真源\n\n官方 remote-control 会被「第三方 key 不能用」卡住，所以另起一个独立 app-server 是对的。但独立 app-server 要真同步，前提是**电脑端和手机端都走这同一个 app-server**：\n\n```\n电脑端输入/界面 ─┐\n                ├─→ 同一个 owned app-server ─→ 事件广播给所有客户端\n手机端输入/界面 ─┘\n```\n\n硬边界：**如果电脑端仍用官方 Desktop 作为主界面，而它不连这个 owned app-server，那独立 app-server 看不到它的实时流。** 想同步，电脑端入口也得改走同一个 bridge（本地 Web UI / menubar companion / CLI wrapper 皆可）。",
    "## 第三条路线：原生会话镜像器（文件 watcher）\n\n如果坚持「电脑端继续用原生 Codex CLI / Desktop，不改输入入口」，那就不是 owned runtime，而是**镜像器**：\n\n```\n原生 Codex CLI / Desktop\n  → 写 ~/.codex/session_index.jsonl、~/.codex/sessions/**/*.jsonl\ncodex-server.mjs\n  → 监听文件变化 → 增量解析 user / assistant 可见消息 → 推给手机 App\n手机 App → 展示历史；要续聊时用 threadId resume\n```\n\n它的能力边界很干净：\n\n| 能力 | 能否 |\n|---|---|\n| 电脑发消息、手机同步 | 能（加强现有导入逻辑） |\n| 准实时同步 | 能 —— **前提是原生运行时会边跑边写 JSONL**；若只在结束后落盘，就只能结束后同步 |\n| 手机接续（resume） | 能 |\n| 手机中断 / 接管电脑原生正在跑的 turn | 一般不行 —— 那个进程不是 bridge 启动的 |\n\n**判断依据：真源（谁拥有正在跑的那个 turn）决定实时性上限。** 想让电脑原生输入也被实时同步，只有两条路——要么电脑端入口改走同一个 bridge（= owned app-server），要么退化成文件镜像器（准实时 + 不能接管）。",
    "## 不做通用 engine 的判断\n\n**要不要抽象出统一 `Engine`，按「要覆盖多少个 provider × 多少个平台」定价**：只有 Claude Code + Codex 两个 provider、电脑 server + 手机 App 两个入口时，做完整 engine（provider 切换、平台 adapter、command engine）是过度设计。保留两个原生 bridge，只抽很小的共享层（`bridge-events.mjs` / `thread-store.mjs` 这类）即可。参见 Agent编排层薄自建优先于重型框架。",
    "## 相关\n\n- 远程控制本机Agent要让bridge跑在本机\n- 远程Agent控制要定义执行协议与状态模型\n- 终端画面同步Agent状态不稳定 —— 想连「界面」一起同步时的另一条路线（tmux）\n- Agent编排层薄自建优先于重型框架\n- 上下文按卡片切换会话记忆按账号共享 —— 同一条「共享」谱系：会话记忆按账号共享，上下文按卡片切换\n- 同名provider冲突会让模型路由漂移 —— 同一会话的另一处坑：导入只带消息不带 provider 归属，续聊时会解析到错误的供应商"
  ]
},
{
  "id": "as-concept-内置能力只覆盖它声明的那一段",
  "updatedAt": "2026-08-03",
  "wikiSlug": "agent-session",
  "term": "内置能力只覆盖它声明的那一段",
  "oneLiner": "**判断一个框架「是否内置某能力」时，要问的是它覆盖到链路的哪一段，而不是有没有这个词。** 名字相近的 feature 往往只覆盖首尾一小段，中间整段仍要自建。",
  "body": [
    "## 例子：attachment support ≠ 文件管线\n\nAgent 框架的「附件支持」实际只做了一件事 —— **消息可以携带图片**（如 `agent.prompt(text, images)` 传 base64）。\n\n它**不含**：OCR、PDF/Word/Excel 解析、结构化分块、向量检索、TTL 存储。\n\n于是可以据此简化方案：\n\n```text\n普通图片 + 视觉模型      → 直接复用框架已有的图片入口\n扫描 PDF / Office 文档   → 仍需自建解析与 OCR 管线\nchunk / 向量 / 过期清理  → 仍需自建\n```\n\n**该复用的复用，该自建的老实自建** —— 不要因为「框架说支持附件」就以为不用写解析层，也不要因为框架只支持图片就把整套协议重造一遍。",
    "## 相关\n\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 同源：能力是否真的存在，要看它落到链路哪一段\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82) —— 复用已有的入口，把差异留在扩展层\n- [文档附件解析管线](/wiki/agent-session/as-topic-%E6%96%87%E6%A1%A3%E9%99%84%E4%BB%B6%E8%A7%A3%E6%9E%90%E7%AE%A1%E7%BA%BF) —— 这条判断在附件场景下的完整落法\n- [Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop) —— 同源：harness 的边界比名字暗示的大/小"
  ]
},
{
  "id": "as-concept-加载skill不等于遵循skill流程",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "加载skill不等于遵循skill流程",
  "oneLiner": "**系统提示词里带上 skill 清单只解决了「发现」；触发时必须主动读 `SKILL.md` 并按路由执行，否则会出现「用了检查工具」但没走完整流程的执行偏差 —— 这不是 skill 没生效，而是路由与遵循做错了。**",
  "body": [
    "## 两层机制\n\n1. **索引层（自动加载）**：系统提示词只包含每个可用 skill 的名称、简介和 `SKILL.md` 路径。\n2. **内容层（主动读取）**：完整内容不会自动进上下文，触发某个 skill 时必须自己去 read。",
    "## 两种失败模式要分开\n\n| 失败 | 表现 | 例子 |\n|---|---|---|\n| **routing** | 该触发哪个 skill 判断错 | 把「摘要问题」自行归到某个现有生产事故任务，而不是先确认当前任务上下文 |\n| **compliance** | 读了，但没按流程阶段执行 | 跑了 before-dev / check 两个检查 skill，却跳过了任务创建与关联、没先更新 PRD 和验收标准 |\n\n**「用了检查工具」不等于「遵循完整工作流」。** 检查 skill 是工作流里的两个点，不是工作流本身。",
    "## 常见冲突源\n\n执行器自带的取向（例如「尽快持续完成任务」）会覆盖项目级流程。**冲突时应以项目规则为准**：先 `start` 建立任务上下文 → 明确关联/创建任务 → 更新 PRD/design/implement → 再编码 → check → finish。",
    "## 自查话术\n\n被问「你有没有按流程」时，能答出三件事才算真遵循：这个阶段该由哪个 skill 负责、我实际读了哪几个、我漏了哪几个阶段。",
    "## 相关\n\n- skill跨agent加载差异\n- skill约束要区分补短板与替模型判断\n- [项目里的技能可能有多份副本](/wiki/agent-session/as-concept-%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%9A%84%E6%8A%80%E8%83%BD%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%BB%BD%E5%89%AF%E6%9C%AC)\n- 协作规则要入Git才算项目资产"
  ]
},
{
  "id": "as-concept-协作规则要入-Git-才算项目资产",
  "updatedAt": "2026-07-25",
  "wikiSlug": "agent-session",
  "term": "协作规则要入 Git 才算项目资产",
  "oneLiner": "**写给 agent 的协作规则（`AGENTS.md`、`.codex/`、`.agents/`、rules 等）如果被 `.gitignore` 挡在外面，就只在自己本机有效，不是项目资产 —— 换机器、换协作者、换 agent、换 worktree 都会丢。**",
  "body": [
    "## 配套判断\n\n- 规则文件要像代码一样入 Git，才能被版本化、被他人复用。\n- 规则里少写「会变的事实」：写死的「当前分支是 2.0」在主线变成 `main` 后就过期，反而误导。多写稳定的硬规则，少写随时漂移的现状快照。",
    "## 症状：新 worktree 里 hook 不生效\n\n在独立 worktree 里测 hook 完全没反应，不是「分支禁用了 hook」，而是**未跟踪的文件不会随 worktree 出现**：\n\n- 主工作区有 `.qoder/settings.json` 和 hook 脚本，两个 worktree 里连 `.qoder/` 目录都没有。\n- 根 `.gitignore` 的规则挡住了 `.qoder/`，`git ls-files -- .qoder` 为空 —— 配置从未被跟踪。\n- 新建 worktree 只检出该分支**已提交**的文件，被忽略的配置自然不在，平台也就没有可注册的 hook。\n\n修法：`.gitignore` 放行（`!/.qoder/`）→ 提交配置与 hooks → 合入或 cherry-pick 到需要的分支；已有 worktree 更新到该提交后才生效。同理 `.trellis/` 等平台目录若希望所有 worktree 行为一致，也必须是 Git 跟踪的项目文件。",
    "## 相关\n\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- Agent harness 要隔离复现可收尾"
  ]
},
{
  "id": "as-concept-多源更新按维度取真源",
  "updatedAt": "2026-06-10",
  "wikiSlug": "agent-session",
  "term": "多源更新按维度取真源",
  "oneLiner": "**同一份产物有两个来源时，不要整体选「更新的那个源」，要按维度分别取权威版本。** 更新模板 skill 的实例：skill 文档本身以上游仓库（`Rory-X/intro-builder` 的 `upstream/main`）更新一点，而 schema 协议以本地改造为最新 —— 正确做法是**拉取上游 skill，再在它之上叠加本地的协议改造**。",
  "body": [
    "## 为什么不能整体选一边\n\n- 只取本地 → 丢掉上游新增的 skill 内容。\n- 只取上游 → 丢掉本地已定稿的新 schema。\n- **上游新 ≠ 全对，本地新 ≠ 全对**：新旧是按维度判定的，不是按来源判定的。",
    "## 落地动作\n\n1. 先明确每个维度的真源：skill 正文 → 上游；协议 / 字段 → 本地。\n2. 以**上游为基线**拉下来，再把本地改造应用上去（而不是反向合并）。\n3. 改完跑校验（JSON parse、`tsc --noEmit`），并明确列出「还没同步的层」，避免文档与运行时各说各话。",
    "## 相关\n\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) —— 真源 / 契约 / 说明三层的划分\n- skill跨agent加载差异 —— 技能分发同属「多端消费同一份产物」\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条是该骨架的一处实例：「还没同步的层」要能被校验发现\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-委派颗粒度要匹配信息缺口",
  "updatedAt": "2026-07-31",
  "wikiSlug": "agent-session",
  "term": "委派颗粒度要匹配信息缺口",
  "oneLiner": "**research worker 与 issue 不是 1:1；它只用于填补主控暂时不清楚的关键未知点，不是每个 issue 的标配。**",
  "body": [
    "## 三个容易混淆的概念要分开：\n\n| 概念 | 是什么 |\n|---|---|\n| `research/` 目录 | 存调研证据的**文档目录**，不代表必须启动 agent |\n| research worker | **临时只读子 agent**，调查关键未知点，可选 |\n| implementation worker | 真正实现 issue、创建 branch/worktree/PR 的 worker，与 issue **1:1** |",
    "## 派不派的判据\n\n- 已有清楚的 spec 和代码边界 → **不派**。\n- 多个 issue 共用一套工程背景 → 由主控**只审计一次**。\n- 只有陌生技术选型、跨层契约不清或仓库证据很多时 → 派**一个**专项 research worker。\n\nresearch worker **不创建 branch / worktree / PR**，也不与 issue 1:1。",
    "## 反面案例\n\n为并行启动 3 个 issue，分别派 3 个 research worker 去「检查边界」，结果它们重复读同一个工程 —— 这是错误的 delegation granularity（委派颗粒度），成本翻倍、信息不增。",
    "## 相关\n\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- 编排器只包装已有CLI\n- Agent编排层薄自建优先于重型框架\n- [能从代码库查到的不许问用户](/wiki/agent-session/as-concept-%E8%83%BD%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%BA%93%E6%9F%A5%E5%88%B0%E7%9A%84%E4%B8%8D%E8%AE%B8%E9%97%AE%E7%94%A8%E6%88%B7)"
  ]
},
{
  "id": "as-concept-子-issue-是发现新范围的结果，不是返工单",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "子 issue 是发现新范围的结果，不是返工单",
  "oneLiner": "**验收失败不能默认拆 Sub-issue** —— 否则一个 Issue 会不断碎裂，责任也被转移。Sub-issue 是 **scope discovery（发现新范围）**的结果，不是普通返工单。",
  "body": [
    "## 规则\n\n- 未满足原 Issue 的 Acceptance Criteria：**退回原 worker**，在同一 session / worktree / branch / PR 中修复（保持 1:1）。\n- 验收时发现**新的独立范围**：由主控创建 Sub-issue，并生成新的 Trellis task、worker session、worktree、branch、PR。\n- 新 Sub-issue 若阻塞原功能，原 Issue 保持未完成；不阻塞则进 backlog。\n- **worker 无权自行拆 Issue**，只能向主控提出拆分建议。\n\n配套的 authority split（权威分工）：Linear 管 Issue 身份与优先级 · Trellis 管 PRD/设计/验收条件 · GitHub 管分支/Commit/PR/CI · 编排器（AO）只管临时 session/worktree/执行器 · 主控 Codex 负责调度、监控、验收与状态同步。**执行器永远只是可替换 adapter，不拥有任务状态** —— 否则它挂掉时其他三层都不知道任务做到哪。",
    "## 相关\n\n- Issue完成由用户验收后再关闭\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- [用户价值要在循环内被验证](/wiki/agent-session/as-synthesis-%E7%94%A8%E6%88%B7%E4%BB%B7%E5%80%BC%E8%A6%81%E5%9C%A8%E5%BE%AA%E7%8E%AF%E5%86%85%E8%A2%AB%E9%AA%8C%E8%AF%81)\n- [委派颗粒度要匹配信息缺口](/wiki/agent-session/as-concept-%E5%A7%94%E6%B4%BE%E9%A2%97%E7%B2%92%E5%BA%A6%E8%A6%81%E5%8C%B9%E9%85%8D%E4%BF%A1%E6%81%AF%E7%BC%BA%E5%8F%A3)"
  ]
},
{
  "id": "as-concept-工作模式切换改变的是-harness-而非模型",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "工作模式切换改变的是 harness 而非模型",
  "oneLiner": "**同一个模型在不同「模式」下的差别不是换了个名字，而是 harness 变了：执行环境、上下文注入、工具集、权限模型全都不同。**",
  "body": [
    "## | 维度 | 通用任务 harness | 代码仓库 harness |\n|---|---|---|\n| 执行环境 | 云端隔离环境 | 本机 `cwd` / 仓库 / 依赖 |\n| 上下文注入 | 对话、上传文件、插件、连接器 | 自动读 `AGENTS.md`、项目配置、skills、rules、MCP |\n| 工具侧重 | 搜索、文档、PPT、表格、远程浏览器 | 文件编辑、Shell、Git、测试、diff、worktree、PR |\n| 权限模型 | 托管环境 + 工作区策略 | 本机 sandbox（read-only / workspace-write / full-access）+ 审批 |\n\n判据：**要动代码就选仓库感知的 harness，做调研/报告/PPT 才切到通用 harness。** 切过去后模型可能还是很强，但会失去「仓库规则 + 本地 Shell + Git + 测试」这一整套约束；两者通常共享核心能力、额度和用量。",
    "## 相关\n\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D)\n- 协作规则要入Git才算项目资产\n- skill跨agent加载差异"
  ]
},
{
  "id": "as-concept-手机后台推送要靠服务端远程推送",
  "updatedAt": "2026-07-08",
  "wikiSlug": "agent-session",
  "term": "手机后台推送要靠服务端远程推送",
  "oneLiner": "**只靠「App 前台 WebSocket + 本地通知」做不到「电脑上的 agent 跑完就推给手机」。** iOS 退后台会很快挂起 App 的 JS/业务代码，WebSocket 不能长期稳定保持；本地通知只能在 App **已经拿到事件之后**才弹。App 被挂起时收不到「电脑 Codex 完成了」这个事件，也就没机会发通知。",
  "body": [
    "## 为什么微信能做到\n\n不是微信 App 在后台一直收 WebSocket，而是链路里多了一层**公网服务端 + 官方推送通道**：\n\n```\n对方 → 微信服务器（常驻在线）→ Apple APNs → iOS 系统弹通知 → 点开才唤醒 App 拉消息\n```",
    "## 对「远程 agent 客户端」的推论\n\n电脑桥接服务**不在公网**，完成事件发生在你本机，手机退后台后收不到它的 WebSocket，所以本地通知天然不可靠。要稳定，必须补一条：\n\n```\n电脑桥接 → 推送中转服务 / APNs → iPhone 系统通知 → 打开 App 后同步 session\n```\n\n- **只在手机 App 里改本地通知，做不到微信那种稳定性** —— 缺的是服务端那一环。\n- 因此「前台实时同步」和「后台可靠推送」是两个独立能力：前者靠 WebSocket，后者必须有服务端中转。",
    "## 相关\n\n- 远程控制本机Agent要让bridge跑在本机 —— 桥在本机是「能操作 Mac 文件」的前提，但正是它导致后台推送缺公网一环\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5) —— 前台流式与后台通知的边界\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D) —— 同属「手机看电脑 agent」的层级划分"
  ]
},
{
  "id": "as-concept-改协议要同时改两端",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "改协议要同时改两端",
  "oneLiner": "**项目里有两条链路（如 Claude Code 一套、Codex 一套）时，改 WebSocket 协议或连接逻辑不能只改一边。要同时检查：服务端（bridge）、客户端的类型与连接逻辑、以及设置页里展示给用户的协议说明。最容易出的问题是「设置页显示连上了，但聊天页监听的是另一套连接」。**",
  "body": [
    "## 做法\n\n把这条约束写进给 agent 看的项目说明书（如 `AGENTS.md`），让每次改协议时自动带上「两端 + 说明页」的检查清单。",
    "## 相关\n\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86)\n- 远程Agent控制要定义执行协议与状态模型\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82)"
  ]
},
{
  "id": "as-concept-无头环境连-MCP-要用-API-Key-而非-OAuth",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "无头环境连 MCP 要用 API Key 而非 OAuth",
  "oneLiner": "**要不要用 OAuth 取决于运行形态，不取决于客户端名字：有 GUI 的桌面版能弹窗就走 OAuth，无头 / CI / 服务器场景没有浏览器，只能预先换成 API Key（Bearer Token）。**",
  "body": [
    "## - OAuth 首次连接需要人盯着屏幕点授权，无头环境会卡住或失败。\n- 替代方案是提前生成 Personal API Key，放进 `Authorization: Bearer ...`，服务器直接放行，不需要任何弹窗。\n- 反过来的误判也要避免：**桌面版客户端跑在本地 Mac 上、有浏览器，照样可以 OAuth**，不能因为它跑在终端里就归到「无头」。\n- 统一用 API Key 的好处是多个客户端配置一致、能跑在无人值守环境；代价是密钥要自己保管与轮换。",
    "## 相关\n\n- MCP连不上先分层定位配置令牌与代理\n- [一次性凭证拿到就落盘](/wiki/agent-session/as-concept-%E4%B8%80%E6%AC%A1%E6%80%A7%E5%87%AD%E8%AF%81%E6%8B%BF%E5%88%B0%E5%B0%B1%E8%90%BD%E7%9B%98)\n- CLI登录会在平台侧注册一个Agent联系人"
  ]
},
{
  "id": "as-concept-真相源位置决定多端关系",
  "updatedAt": "2026-07-21",
  "wikiSlug": "agent-session",
  "term": "真相源位置决定多端关系",
  "oneLiner": "**同一个产品，真相源放在本机还是云端，决定了其他端是什么角色、仓库长什么样。** 先问「谁是真源」，多端关系与仓库形态都是它的下游推论，不是可以单独挑的选项。",
  "body": [
    "## | | 真相源在本机桌面端 | 真相源在云端 |\n|---|---|---|\n| 其他端是什么 | WebUI 是桌面的**远程遥控器** | Web / 手机 / 扩展都是**服务端的客户端** |\n| 中继的角色 | Gateway 只做 session/auth 与协议转发，**不干活** | 服务端自己就是执行者 |\n| 仓库形态 | Cargo workspace（Rust crates）+ 语言子工程 | pnpm + Turborepo monorepo |\n\n具体对照：LiveAgent 的真源是 Tauri 进程（握有 FS / Shell / SQLite / MCP / Memory / Cron 的高权限），WebUI 通过 Go Gateway 走 WS + Protobuf 接入，本身无本机权限；mewmo 的真源是云端 PostgreSQL，长任务由 worker 消费队列，各端只是它的客户端。",
    "## 可迁移的判断\n\n- **「哪端能干活」不是功能取舍，而是真源位置的必然结果。** 想让 Web 端也能执行，不是给 Web 加权限，而是要么把真源搬到云端，要么让本机进程成为唯一入口。\n- **中继层要克制。** 真源在本机时，Gateway 的职责只有会话与鉴权、协议转发；一旦它开始处理业务，就会出现第二个真源。",
    "## 相关\n\n- 远程控制本机Agent要让bridge跑在本机 —— 真源在本机时，入口与广播该放在哪\n- 远程Agent控制要定义执行协议与状态模型\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) —— 云端加工厂 + 本地主仓库的分工\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 多源更新时按维度定真源"
  ]
},
{
  "id": "as-concept-终端画面同步-Agent-状态不稳定",
  "updatedAt": "2026-07-07",
  "wikiSlug": "agent-session",
  "term": "终端画面同步 Agent 状态不稳定",
  "oneLiner": "**用 tmux 把手机接到电脑上同一个 Codex CLI 会话，能实现「电脑和手机看同一个活会话」——因为手机输入真的敲进那个 CLI，电脑 attach 就能看到同一画面。但它同步的是「终端画面」，不是「结构化事件」，所以不稳定。不稳定的不是 tmux 本身，是我们只能看屏幕。**",
  "body": [
    "## tmux 路线的链路与优势\n\n```\n手机 App ↔ WebSocket ↔ 桥接服务 ↔ tmux send-keys / capture-pane ↔ Codex CLI（电脑可 attach）\n```\n\n优势：不再每条消息开 `codex exec`；手机输入进入同一个活的 CLI；电脑端能看到同一画面；`code exit` 类退出顺序问题自然消失。",
    "## 为什么说「不稳定」\n\n| 风险 | 原因 |\n|---|---|\n| 结束判断不准 | app-server 会发 `turn/completed`；tmux 只能靠「画面几秒没变」或「看到提示符」猜，可能早也可能晚 |\n| 输出夹杂 UI 文本 | 抓的是整个终端画面（状态栏/进度/颜色控制符），要额外清洗 |\n| 改版即失效 | 解析依赖「终端长什么样」，CLI 改提示符/布局/状态栏就要跟着调 |\n| 结构化能力弱 | 拿不到 approval、tool call、文件变更等事件，只能从文本推断 |\n| 并发麻烦 | 一个 pane 同一时间最好只跑一个任务，连发消息要排队 |",
    "## 结论：按目标选后端\n\n- 要**稳定的 agent 后端** → app-server（结构化事件）。\n- 要**电脑和手机真正同步同一个可见会话** → tmux（画面同步），但接受它是「终端遥控方案」，标成实验后端，不要立刻替换掉 exec。\n\ntmux 同步的是**电脑终端里的 Codex CLI**，不是 Codex Desktop App 的当前窗口。",
    "## 相关\n\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D)\n- 远程控制本机Agent要让bridge跑在本机\n- 远程Agent控制要定义执行协议与状态模型"
  ]
},
{
  "id": "as-concept-经验沉淀要在问题验证后按需触发",
  "updatedAt": "2026-07-31",
  "wikiSlug": "agent-session",
  "term": "经验沉淀要在问题验证后按需触发",
  "oneLiner": "**ce-compound 这类经验沉淀 skill 不是过程日志，也不该在 worker 每完成一步时运行 —— 它只在一个非平凡问题已经解决并验证后，把解决方法沉淀成可搜索的 durable learning。**",
  "body": [
    "## 触发条件\n\n只收「已解决 + 已验证」的非平凡问题，一次 run 只沉淀 **一条** learning；跳过例行工作、未完成问题、未验证的结论。\n\n```\n实现 → 自测通过 → 判断是否有可复用经验\n                     ↓ 有\nce-compound headless lightweight → 提交文档 → 推送 → In Review\n```\n\n产物默认是 `docs/solutions/<category>/<learning>.md`（未配自定义 `docs_root` 时），记录问题表现、失败尝试、根因、最终方案、验证证据与预防方法，并去重已有 learning。",
    "## 怎么让 worker 用上\n\n写成 **standing rule（常驻规则）** 放进 worker prompt，而不是依赖 `/ce-compound` 这种特定客户端命令 —— 语义化要求「invoke the ce-compound skill」兼容性更好。若项目把 `.opencode/skills`、`.codex/skills`、`.claude/skills` 软链到 `.agents/skills`，三类 worker 都能发现同一份 skill（见 [项目里的技能可能有多份副本](/wiki/agent-session/as-concept-%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%9A%84%E6%8A%80%E8%83%BD%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%BB%BD%E5%89%AF%E6%9C%AC)）。\n\n**默认 lightweight 模式**：完整模式会搜旧文档、查重、扫历史会话、调度多个研究 agent 做语义验证，适合高价值架构经验，但放在每个 worker 的日常收尾里成本过高。",
    "## 与晋升门禁的关系\n\n沉淀出的 learning 仍是**候选经验**，不等于可直接改长期 spec —— 晋升要经过去重、验证、分类（见 [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) 的 Lesson Gate）。",
    "## 相关\n\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- [加载skill不等于遵循skill流程](/wiki/agent-session/as-concept-%E5%8A%A0%E8%BD%BDskill%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%81%B5%E5%BE%AAskill%E6%B5%81%E7%A8%8B)\n- 协作规则要入Git才算项目资产"
  ]
},
{
  "id": "as-concept-编排器只包装已有-CLI，不自己实现-Agent",
  "updatedAt": "2026-07-31",
  "wikiSlug": "agent-session",
  "term": "编排器只包装已有 CLI，不自己实现 Agent",
  "oneLiner": "**AO 这类 Agent 编排器不实现 Agent，它只「包装」本机已装好的 CLI（claude-code / codex / opencode …）：模型、订阅、技能都是那个 CLI 自己的。** 一次委派的完整链路：",
  "body": [
    "## 1. **接单**：桌面按钮 / `ao spawn` / `POST /api/v1/sessions` 都打到同一个 daemon API，请求只有四样：项目、名字、harness、prompt。\n2. **隔离**：分配会话 ID，在仓库外建独立 worktree + 专属分支（如 `ao/<name>/root`），worker 碰不到主目录，也碰不到其他 worker。\n3. **启动**：在 tmux 会话里拉起对应 CLI，cwd 设为该 worktree —— 所以能 `tmux ls` / `capture-pane` 观察它。\n4. **下发**：注入系统提示（编排器的规矩）+ 任务 prompt，之后不干预它的思考过程。\n5. **监控**：只观察不控制 —— 运行时探测器（进程还活着吗、终端在滚动吗）推导 `working / idle / dead`；SCM 探测器定期问 GitHub（PR / CI / review）。\n6. **收货**：**PR 即交付**；正常开发任务在 PR 合并后可自动终结会话（`terminateOnPrMerge`）。\n\n一句话：**委派 = 开一块隔离工地（worktree）+ 雇一个你已有的工人（CLI harness in tmux）+ 塞任务书（prompt）+ 用摄像头盯进度（探测器→看板），验收标准是 PR。**\n\n主控（orchestrator）会话与 worker 的差别只在系统提示：主控被教「拆任务、用 `ao` 派活」，worker 被教「干活、提 PR」。",
    "## 实操补充\n\n- 文档型 skill（如 `using-ao`）教的是 `ao` CLI 用法；只装了桌面版、没有 CLI 时，把 CLI 语义翻译成 daemon HTTP API 调用即可。\n- 大 monorepo 里文件监听可能爆句柄（`EMFILE`），先 `ulimit -n` 提高上限再重启会话。",
    "## 相关\n\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- Agent编排层薄自建优先于重型框架\n- 远程Agent控制要定义执行协议与状态模型\n- Agent harness 要隔离复现可收尾"
  ]
},
{
  "id": "as-concept-网页读取工具要受控而不是直连任意URL",
  "updatedAt": "2026-07-22",
  "wikiSlug": "agent-session",
  "term": "网页读取工具要受控而不是直连任意URL",
  "oneLiner": "**给 agent 加网页能力，不是「让它能访问 URL」，而是新增两个受控工具：`web_search(query)` 和 `web_fetch(url)`。搜索服务与读取服务是两件事（一个返回结果列表，一个把指定 URL 转成适合模型读的文本），并且读取侧必须加白名单/SSRF 防护、超时、响应大小限制、缓存和来源返回。**",
  "body": [
    "## 一、典型链路\n\n```text\n用户问题\n→ web_search（搜索服务）→ 结果列表\n→ agent 选择 URL\n→ web_fetch（读取服务）→ 正文文本\n→ agent 总结并附来源\n```\n\n搜索端点与读取端点通常是两个不同的服务（如 `s.jina.ai` 搜索、`r.jina.ai` 读取），所以是**两个工具、两把用途**，不是「一个搜索工具顺便读页面」。",
    "## 二、为什么必须受控\n\n让模型直接访问任意 URL，会同时打开三类风险：\n\n1. **SSRF / 内网探测**：模型可被诱导去读内网地址。\n2. **超大响应**：整页 HTML 灌进上下文，token 与费用失控。\n3. **费用失控**：搜索/读取按次计费，agent 循环里可以反复调。\n\n所以实现时要加：**URL 白名单、超时、响应大小上限、缓存、来源回传**。返回结果要带来源，否则总结无法溯源。",
    "## 三、判断「某个服务能不能接进来」要分层\n\n- **有读取/搜索工具注册在 runtime 里吗？** —— 没有就是「当前不支持」，与有没有 key 无关。\n- **key 是哪一层的？** 搜索/读取服务的 key ≠ 模型 provider 的 key，配置位置也不同（属于 agent 服务的环境变量，而不是模型接入配置）。\n- **模型侧支持 Function Calling ≠ 已有工具**：工具是 runtime 注册的，模型只是决定调不调。",
    "## 相关\n\n- [Agent Harness 不只是 Tool Loop](/wiki/agent-session/as-concept-Agent-Harness-%E4%B8%8D%E5%8F%AA%E6%98%AF-Tool-Loop)\n- 无头环境连MCP要用APIKey而非OAuth\n- RAG是流程不是组件"
  ]
},
{
  "id": "as-concept-能从代码库查到的不许问用户",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "能从代码库查到的不许问用户",
  "oneLiner": "**需求澄清（brainstorm）阶段的证据规则：能从代码库查到的答案不许问用户，只问仓库回答不了的问题 —— 产品意图、范围、验收标准。** 把可自查的事实问题丢给用户，等于把 agent 的检索成本转嫁给唯一的时间瓶颈。",
  "body": [
    "## 为什么这条要写成硬契约\n\n- 用户对代码库细节的回答往往不精确，还会引入新的错误前提；仓库是这些问题唯一的真值源。\n- 问「这个函数在哪调用的」和问「你希望失败时是静默还是报错」是两类问题：**前者是事实检索，后者是意图决策。** 混在一起问，用户会开始替你读代码。\n- 配套的一条同样重要：**用户说「做吧」不等于批准实现。** 非平凡任务至少要有一轮「最终计划摘要」的确认才能动代码 —— 批准方向 ≠ 批准方案。",
    "## 可迁移的判断\n\n- 提问前先自问：「这个答案在不在这台机器上？」在 → 自己查，别问。\n- 只在两个维度上向用户提问：**意图**（想要什么、为什么）与**边界**（范围、验收、优先级）。\n- 把「确认计划摘要」当成一个独立的闸门，而不是把「用户点头了」当成开工信号。",
    "## 相关\n\n- 阻塞式工具与提案确认 —— 确认闸门属于宿主，不属于模型\n- skill约束要区分补短板与替模型判断 —— 该写进契约的是判断规则，不是替模型想\n- Issue完成由用户验收后再关闭 —— 同一取向：用户的确认是状态机里的一环\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88)\n- [委派颗粒度要匹配信息缺口](/wiki/agent-session/as-concept-%E5%A7%94%E6%B4%BE%E9%A2%97%E7%B2%92%E5%BA%A6%E8%A6%81%E5%8C%B9%E9%85%8D%E4%BF%A1%E6%81%AF%E7%BC%BA%E5%8F%A3)"
  ]
},
{
  "id": "as-concept-自动提交脚本要先确认当前分支",
  "updatedAt": "2026-07-28",
  "wikiSlug": "agent-session",
  "term": "自动提交脚本要先确认当前分支",
  "oneLiner": "**会自动 commit 的脚本（会话结束写日志、任务归档）如果不检查当前分支，就会把文档提交串进别人还没写完的 feature 分支。** 后果是文档被「劫持」在别人的 PR 里，只能手工救。",
  "body": [
    "## 实测形态\n\nTrellis 的 `add_session.py` / `task.py archive` 会自动提交日志与任务文档。现有 `safe_commit.py` 只做了两层护栏（只 `add` 特定路径、绝不 `-f` 强加），**缺的正是「我现在在哪个分支」这一问**。真实事故：在 `codex/zoo-74-*` feature 分支上跑一次 `task.py archive`，Trellis 文档就被提交进了那个分支。\n\n修法很小：auto-commit 前判断「当前分支不是 main 就拒绝自动提交」，打印提示让人自己处理（config 可配例外分支）。",
    "## 配套：密钥扫描要进 CI 门禁，而不是靠人工 grep\n\n同一批需求里的另一半：把 gitleaks 装进 CI，**每个 PR 的 diff 自动扫疑似密钥，扫到就红灯不让合**。\n\n- 起因也是真实事故：PR 的 session 简报里带进过本地测试账号密码（评估无害，但暴露了「AI 写的简报会原样进仓库」这个模式风险）。\n- 入库几百个文件前手工 grep 一遍密钥，是**把一次性人工动作当成了机制**。人工检查在「每次都要做」的场景里必然漏。\n- 这类门禁要与既有的「CI 门禁补建」任务合并做，别重复建设。",
    "## 可迁移的判断\n\n- 任何**自动化写入动作**（commit、push、部署、改库）都要在动手前确认「我作用在哪个对象/分支/环境上」。\n- 护栏要挡的是「作用对象错了」，不是「内容不对」。`safe_commit` 的路径白名单挡不住分支错。\n- 靠人工纪律守住的检查项，最终都要变成 CI 里的一条规则。",
    "## 相关\n\n- 什么该进git什么该ignore —— 入库内容的判据；本条是入库动作的护栏\n- [同目录多会话会抢分支](/wiki/agent-session/as-concept-%E5%90%8C%E7%9B%AE%E5%BD%95%E5%A4%9A%E4%BC%9A%E8%AF%9D%E4%BC%9A%E6%8A%A2%E5%88%86%E6%94%AF) —— 分支错位的另一种成因\n- Issue完成由用户验收后再关闭 —— 协作状态机里的自动动作同样需要护栏\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)"
  ]
},
{
  "id": "as-concept-观测平台不能当运行状态真相源",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "观测平台不能当运行状态真相源",
  "oneLiner": "**Langfuse 这类可观测平台适合回答「为什么这样做、花了多少」，不能当 Agent 运行状态的真相源 —— 恢复依据必须存在自己的数据库里。**",
  "body": [
    "## - 观测平台负责：模型/工具调用的 trace/span、prompt/token/耗时/成本、链路与质量评估、调试与运营观察。\n- 自己的 PostgreSQL 负责：`agent_runs`（目标/状态/发起者/当前步骤）、`agent_steps`、`agent_approvals`（危险写操作的待确认）、`agent_events`（前端恢复与实时展示）、产物/失败原因/重试次数/幂等键。\n- 理由：观测平台不可用、保留策略变化或 trace 写入失败时，Agent 不能因此失去恢复依据。\n- 一句话边界：**数据库决定 Agent 现在在做什么，观测平台解释它为什么这样做。**\n\n配套的架构分界：**产品 + AI**（确定性、短时、单步，如文章总结/打标）继续由 Web/Worker 调 `packages/ai`；**AI Agent**（目标导向、多步、可暂停确认、失败恢复）独立成 `agent-server`。`packages/ai` 降级为模型适配与通用原语，编排、状态、工具不能再放进去。",
    "## 相关\n\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)\n- Agent编排层薄自建优先于重型框架\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88)"
  ]
},
{
  "id": "as-concept-远程-Agent-控制要定义执行协议与状态模型",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "远程 Agent 控制要定义执行协议与状态模型",
  "oneLiner": "**做「手机/网页远程指挥服务器里的 Claude Code/Codex」这类产品，只画 App 页面是不够的。必须在 PRD 里定清两块：App 与服务器之间的「执行控制协议」，以及服务器要保存的「状态模型」。否则两端各写各的，后面接不起来。**",
  "body": [
    "## 一、执行控制协议\n\n规定 App 发什么、服务器回什么，而不是只说「发送消息」。要有明确的**消息类型 + 字段 + 流程**：\n\n- 怎么创建会话、怎么发送消息\n- 怎么表示运行开始、怎么流式返回内容（`assistant_delta` / `tool_output`）\n- 怎么表示完成/失败、怎么取消任务\n- 怎么请求文件树、出错时返回什么",
    "## 二、服务器状态模型\n\n规定服务器保存哪些实体及关系：\n\n```\nSession 会话\n  └── Message 消息\n  └── Run 执行任务\n        └── Event 流式事件\n```\n\n一个 Session 有 workspace、`activeRunId` 等；一个 Run 是一次 Claude Code/Codex 执行，带 status、tool。",
    "## 相关\n\n- 远程控制本机Agent要让bridge跑在本机\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88)\n- Agent编排层薄自建优先于重型框架"
  ]
},
{
  "id": "as-concept-远程控制本机-Agent-要让-bridge-跑在本机",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "远程控制本机 Agent 要让 bridge 跑在本机",
  "oneLiner": "**手机 App 不能直连命令行 Agent（Claude Code/Codex 不是 WebSocket 服务），中间要有一个 bridge 把 CLI 包成 WebSocket。关键约束：Agent 只能操作它所在机器的文件，所以想操作 Mac 上的项目，bridge 就必须跑在 Mac 上。**",
  "body": [
    "## 链路\n\n```\n手机 App → WebSocket → bridge（本机） → 调用本机 claude 命令 → 把输出转成 stream 回传\n```",
    "## 部署位置决定能操作谁的文件\n\n| bridge 位置 | 能操作 |\n|---|---|\n| Mac 本机 | Mac 项目 ✓ |\n| 云服务器 | 只能操作服务器文件，看不到 Mac 的 `/Users/...` |",
    "## 想「服务器入口 + 操作 Mac 项目」\n\n把公网流量转发回 Mac（Tailscale / Cloudflare Tunnel / ngrok / 蒲公英组网），Claude 仍在 Mac 上跑。给别人用公网 `wss` 时必须加 token 鉴权，否则拿到地址就能操作你的 Mac。",
    "## 相关\n\n- [改协议要同时改两端](/wiki/agent-session/as-concept-%E6%94%B9%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%90%8C%E6%97%B6%E6%94%B9%E4%B8%A4%E7%AB%AF) —— bridge 侧改了，客户端与设置页也要一起改\n- 远程Agent控制要定义执行协议与状态模型\n- Agent编排层薄自建优先于重型框架\n- CLI登录会在平台侧注册一个Agent联系人\n- [真相源位置决定多端关系](/wiki/agent-session/as-concept-%E7%9C%9F%E7%9B%B8%E6%BA%90%E4%BD%8D%E7%BD%AE%E5%86%B3%E5%AE%9A%E5%A4%9A%E7%AB%AF%E5%85%B3%E7%B3%BB) —— 真源在本机时，各端角色与中继职责都是它的下游推论"
  ]
},
{
  "id": "as-concept-通用脚本要靠工具适配器接入",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "通用脚本要靠工具适配器接入",
  "oneLiner": "**跨 agent 的通用脚本不会被某个工具自动执行。** 要让 Claude 启用它，必须有**工具专属 hook 适配层**：在 `settings` 里注册的是适配器，不是通用脚本本身。",
  "body": [
    "## 调用链\n\n```\nClaude SessionStart\n  -> .claude/settings.local.json          # 注册点\n    -> .claude/hooks/session-brief.js     # Claude 适配器\n      -> .agent/scripts/agent-brief.js    # 跨 agent 通用脚本\n```\n\n适配器用环境变量（`AGENT_BRIEF_JSON=1`）让通用脚本切换输出格式——产出 Claude hook 需要的 JSON（`hookSpecificOutput.hookEventName` + `additionalContext`）。**通用脚本保持中立，格式差异由适配器决定。**",
    "## 为什么保留 wrapper，而不是直接注册通用脚本\n\n不要在 `settings` 里直接写：\n\n```json\n\"command\": \"node \\\"$CLAUDE_PROJECT_DIR/.agent/scripts/agent-brief.js\\\"\"\n```\n\n因为 Claude 可能从 `.claude/worktrees/*` 里启动，此时 `$CLAUDE_PROJECT_DIR/.agent/...` **可能不存在**。wrapper 会向上查找项目根，更稳。",
    "## 可迁移的判断\n\n「一套内容，多端消费」时，分层是：**中立数据源 → 每端一个薄适配器 → 各端注册点**。把某一端的格式要求写进通用脚本，等于把通用件绑死在单个工具上。",
    "## 相关\n\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) —— 入口统一之后，还得有工具适配层才能跑通\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) —— 同为「中立源 + 薄适配，格式差异不进通用件」\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条是该骨架的一处实例：适配器不写，通用件就不会被调用"
  ]
},
{
  "id": "as-concept-随时间变化的上下文要逐轮注入",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "随时间变化的上下文要逐轮注入",
  "oneLiner": "**凡是「值会随时间变」的上下文（当前日期、时间、星期），都不能挂在会话级系统提示上，必须逐轮注入。**",
  "body": [
    "## 原因在会话的生命周期：agent 的 chat session 是长驻的（按会话缓存，只有 `/reset`、`/cd` 之类才重建），会话级系统提示只在**建立那一刻**算一次。跨过午夜后，写在里面的日期就是过期的——而「今天/昨天/上周」这类相对表述恰恰要靠它。\n\n判据与做法：\n\n- 判断上下文该放哪一层，看**它变不变**：不变的身份、规则、记忆可以放会话级；会变的时钟必须每轮重算。\n- 优先用「每轮触发、只影响本轮」的钩子（如 `before_agent_start` 返回覆盖后的 systemPrompt），而不是往用户消息里拼前缀——前者不写进会话历史、不污染可见消息、也不额外占上下文。\n- **显式指定时区**（如 `Asia/Shanghai`），不要依赖进程环境变量：由 launchd / 容器启动的进程 TZ 不可靠，换机器还会错。\n- 粒度给到「日期 + 时分 + 星期」：光有日期不足以支撑「今晚 12 点前」「明天上午」这类相对表述。\n- 单次赋值即可，无需链式处理——钩子拿到的 `event.systemPrompt` 已经是链路当前值。\n\n> 更一般的形态：**把「会变的输入」与「建立时机」解耦**。任何在初始化时算一次、却被长期复用的状态（日期、版本号、健康表、权限快照），都会在跨过某个边界后静默失效。",
    "## 相关\n\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D)\n- [内置能力只覆盖它声明的那一段](/wiki/agent-session/as-concept-%E5%86%85%E7%BD%AE%E8%83%BD%E5%8A%9B%E5%8F%AA%E8%A6%86%E7%9B%96%E5%AE%83%E5%A3%B0%E6%98%8E%E7%9A%84%E9%82%A3%E4%B8%80%E6%AE%B5)"
  ]
},
{
  "id": "as-concept-项目里的技能可能有多份副本",
  "updatedAt": "2026-06-24",
  "wikiSlug": "agent-session",
  "term": "项目里的技能可能有多份副本",
  "oneLiner": "**「项目本地有一套 skills」这句话不足以定位到具体目录 —— 同一个项目里可能同时存在 `.agents/skills`、`.claude/skills`、`.codex/skills` 多份副本，内容还不一样（有的只有一部分）。按一个目录名去找就断言「没有这套 skills」，结论会是错的。**",
  "body": [
    "## 实测形态：某项目 `.agents/skills` 里只有 `speckit-*`，`.claude/skills` 里却有大部分目标技能，而完整的那套在**另一个项目**的 `.agents/skills` 里。",
    "## 根因\n\n「skills 放在哪」没有唯一约定，各 agent 工具各用各的目录名，于是同一批技能会在一个项目里散成多份。",
    "## 可复用动作\n\n1. 听到「项目里有 X」时，**先枚举所有候选目录**（`.agents/skills`、`.claude/skills`、`.codex/skills`），而不是只查被点名的那一个。\n2. 多个候选都命中时，**比对内容完整度**，取全集所在的位置作为来源。\n3. 复制目标也要覆盖各 agent 的目录，而不是只补一处。",
    "## 相关\n\n- skill跨agent加载差异 —— 目录/字段不兼容导致静默失效，同属「配置层错位」\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) —— 同为「看到的不是全貌就下结论」\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同源判断：先确认是哪一份，再谈有没有\n- [依赖版本要锁主版本而非一律取最新](/wiki/agent-session/as-concept-%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E8%A6%81%E9%94%81%E4%B8%BB%E7%89%88%E6%9C%AC%E8%80%8C%E9%9D%9E%E4%B8%80%E5%BE%8B%E5%8F%96%E6%9C%80%E6%96%B0) —— 同属「环境不一致导致的漂移」"
  ]
},
{
  "id": "as-concept-验不到的部分要显式记为未验证",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "验不到的部分要显式记为未验证",
  "oneLiner": "**验收受工具能力限制而没覆盖到的项，必须显式写成 blocker，不能含糊带过、更不能写进\"通过\"。缺证据的项默认是未验证 —— \"没测到\"和\"测了通过\"是两种结论。**",
  "body": [
    "## 一、现象\n\n自动化验收跑通了它**能看到**的部分（六个一级入口的 iconLeft/textLeft 几何、侧栏宽度、文字不越界、暗色截图正常），但 runtime 对页面里的 React button **只聚焦、不派发状态变更**，所以\"实点展开/收起\"和\"切到浅色主题\"这两项**根本没执行**。\n\n正确处置：在 PR 验收说明和 Issue 评论里明确记录为 **Browser runtime blocker**，并声明\"不要声称这两项通过\"。",
    "## 二、为什么必须显式\n\n- 验收结论会被下游（评审人、用户、后续自动化）当作\"已确认\"。把未覆盖项混进\"通过\"，等于发出一个假信号，等用户真机点到才发现。\n- 未验证项通常恰好是**交互类**（点击、状态切换、主题）—— 也就是最容易坏、最该验的那一类。几何和静态截图正常，不代表交互正常。",
    "## 三、可迁移的写法\n\n任何验收报告分三栏，缺一栏就是信息缺失：\n\n| 栏 | 内容 |\n|---|---|\n| 已验证 | 结论 + 证据（截图/日志/命令输出） |\n| **未验证** | 项 + **为什么**（工具/runtime blocker、环境缺失） |\n| 失败 | 现象 + 证据 |\n\n判据一句话：**没有新鲜证据的项，写\"未验证\"，不写\"通过\"。**",
    "## 相关\n\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 未验证项就是\"还没被消费方认账\"\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 用几何/截图代理交互行为，是代理量替代真值\n- [全绿的单测可能测的不是那条链路](/wiki/agent-session/as-concept-%E5%85%A8%E7%BB%BF%E7%9A%84%E5%8D%95%E6%B5%8B%E5%8F%AF%E8%83%BD%E6%B5%8B%E7%9A%84%E4%B8%8D%E6%98%AF%E9%82%A3%E6%9D%A1%E9%93%BE%E8%B7%AF) —— 同为\"绿灯覆盖不到真实链路\"\n- Issue完成由用户验收后再关闭 —— 未验证项要留给用户验收\n- 假成功要有真失败信号"
  ]
},
{
  "id": "as-concept-Cookie-不区分端口，所以同域多端口共享登录态",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "Cookie 不区分端口，所以同域多端口共享登录态",
  "oneLiner": "**在 `localhost:3018` 登录后访问 `localhost:3024` 能直接用 —— 因为 Cookie 按域名隔离、不按端口隔离。** 同时这解释了一个反向现象：只要密钥不同，同一个 Cookie 就解不开。",
  "body": [
    "## - 会话 Cookie 的作用域是 host，端口不参与匹配，所以同一域名的不同端口会互相携带。\n- 能否「认」这份 Cookie 取决于**服务端解密密钥是否相同**：`NEXTAUTH_SECRET` 用来加密、签名、解密会话 Cookie，换回主项目的真实密钥后就能识别既有登录状态；用 `.env.example` 的占位密钥则报 `no matching decryption secret`。\n- 因此 worktree / 多端口调试时，**`.env.local` 里的会话密钥要和主项目一致**（软链接即可），但 `NEXTAUTH_URL` 要改成当前端口。\n- 反过来，`NEXTAUTH_SECRET` 是服务器端密钥，**不是登录密码、也不是第三方 API Key**；它应保持私密、稳定、不入 Git，一旦修改，所有已有登录会话立即失效。\n\n排查提示：改了端口后「登录态丢失」通常不是 Cookie 不共享，而是密钥对不上；「登录态串了」才是 Cookie 共享域过宽。",
    "## 相关\n\n- [登录发起与回调必须同域名](/wiki/agent-session/as-concept-%E7%99%BB%E5%BD%95%E5%8F%91%E8%B5%B7%E4%B8%8E%E5%9B%9E%E8%B0%83%E5%BF%85%E9%A1%BB%E5%90%8C%E5%9F%9F%E5%90%8D)\n- worktree是独立目录产物与配置都隔离\n- [接口验证通过不等于浏览器已登录](/wiki/agent-session/as-concept-%E6%8E%A5%E5%8F%A3%E9%AA%8C%E8%AF%81%E9%80%9A%E8%BF%87%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%B2%E7%99%BB%E5%BD%95)"
  ]
},
{
  "id": "as-concept-Electron-自带浏览器运行时是内存大头",
  "updatedAt": "2026-07-31",
  "wikiSlug": "agent-session",
  "term": "Electron 自带浏览器运行时是内存大头",
  "oneLiner": "**用 Electron 做桌面壳时，「内存占用高」不是页面本身的成本，而是先付了一套完整浏览器运行时的基础成本：Chromium 内核、V8、DOM/CSS 渲染树，以及 Renderer / GPU / Network 多个隔离进程（通常还带 Node.js runtime）。** 即使窗口里只有一个列表，也是先付这套运行时，而不是「列表本身」的内存。",
  "body": [
    "## 对比：SwiftUI 复用 macOS 已加载的系统 UI 框架；WKWebView 复用系统 WebKit，通常比自带 Chromium 更轻，同时仍能复用 Web UI —— 代价是与 Chrome 渲染细节可能略有差异，JS 与本地数据仍需 bridge。",
    "## 壳的三种选择\n\n| 方案 | 复用 | 代价 |\n|---|---|---|\n| SwiftUI 原生 | 系统 UI 框架 | 要重写一套 UI |\n| WKWebView 壳 | 系统 WebKit + Web UI | bridge、渲染细节差异 |\n| Electron | 自带 Chromium + Web UI | 常驻浏览器运行时内存 |",
    "## 不要凭印象否决壳方案\n\n把**长期驻留内存设成硬验收指标**，做最小原型实测 SwiftUI 与 WKWebView 两条路径再决策。前提是先回答「这个 App 是不是全天常驻」——常驻型（持续承接剪藏、订阅、同步）才必须严格控制内存。\n\n多标签切换不必照抄 Chrome 的多网页模型：可以让**一个 WKWebView 始终常驻**，前端只切换当前标签对应的页面，后台标签只保存轻量状态；切换时不重启 WebView、不重新下载 JS、不访问网络。\n\n延迟不要口头保证，先写成硬验收（如 **P95 标签切换 <100ms 且不显示 loading**），达不到再考虑保留最近使用页面的渲染状态，不提前引入 Chrome 式（Frozen / Discarded）淘汰机制。",
    "## 相关\n\n- [本机资源占用排查](/wiki/agent-session/as-topic-%E6%9C%AC%E6%9C%BA%E8%B5%84%E6%BA%90%E5%8D%A0%E7%94%A8%E6%8E%92%E6%9F%A5) —— 本条是它在「内存」这一层的实例\n- 列表切换要用master-detail而非重建列表\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C)\n- [本机卡顿先清残留开发进程](/wiki/agent-session/as-concept-%E6%9C%AC%E6%9C%BA%E5%8D%A1%E9%A1%BF%E5%85%88%E6%B8%85%E6%AE%8B%E7%95%99%E5%BC%80%E5%8F%91%E8%BF%9B%E7%A8%8B)\n- 项目占空间先查构建缓存与旧worktree\n- [运行时依赖属于平台不属于业务代码](/wiki/agent-session/as-concept-%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BE%9D%E8%B5%96%E5%B1%9E%E4%BA%8E%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%B1%9E%E4%BA%8E%E4%B8%9A%E5%8A%A1%E4%BB%A3%E7%A0%81)"
  ]
},
{
  "id": "as-concept-Vercel-的四个运行环境各填什么变量",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "Vercel 的四个运行环境各填什么变量",
  "oneLiner": "**Vercel 一个变量名可以在四个环境填不同值：Production（正式域名吃它）、Preview（PR / 非主分支的临时预览网址）、Development（本地 `vercel env pull` 默认拉的）、Pre-production（准生产 / staging，上线前演练）。**",
  "body": [
    "## 各自该填什么\n\n| 环境 | 用途 | 填值原则 |\n|---|---|---|\n| Production | 正式线上（如 `xxx.vercel.app`） | 正式云数据库、正式 OAuth、`NEXTAUTH_URL=https://正式域名` |\n| Preview | PR / 分支预览 | 测试库、测试 OAuth —— **别连正式库**，避免预览污染正式数据 |\n| Development | 本地开发 | 本机用，不等于线上 |\n| Pre-production | 准生产 / staging | 接近正式配置，但仍建议单独库 |",
    "## 配套事实\n\n- `vercel env pull apps/web/.env.local` 默认拉 **Development**。\n- 环境变量挂在 **Vercel 项目** 上，不挂在本地文件夹上 —— 所以 `vercel link` / `env add` 在项目根目录做即可，不必进子目录。\n- 排查「线上注册失败」先看 **Production 的 `DATABASE_URL`**，因为测的是正式站点。\n- Neon / Redis 都只是一条 URL（`DATABASE_URL` / `REDIS_URL`），不像 Google 是 client id + secret。",
    "## Preview 内部还有三种作用域\n\n同一个变量在 Preview 里可以只给一部分部署：\n\n| 作用域 | 生效范围 | 特点 |\n|---|---|---|\n| 当前分支 Preview | 只注入该分支产生的 Preview | 最安全；**它是永久保存的**，只是范围窄 —— 其他 PR、Production 都不吃它 |\n| 全部 Preview | 以后所有 PR 的 Preview 自动拥有 | 最省事，适合私人项目 |\n| Production | 只给正式环境 | 不该长期把正式 key 借给 Preview |\n\n所以「只绑定当前 PR 分支」不等于「只能用一次」：该分支后续重新部署、PR 更新代码都继续生效，除非手动删除。\n\n配套建议：模型名与有限额的 Preview key 配「全部 Preview」，但**不要长期复用 Production 的 key**。\nNeon 的逻辑不同 —— 仓库永久保存 `NEON_PROJECT_ID` / `NEON_API_KEY`，每个 PR 自动建一个临时数据库分支，PR 关闭后删除。理想组合是「永久 Preview AI 配置 + 每个 PR 独立临时数据库」。",
    "## 相关\n\n- 改环境变量要触发云端重建而非重新上传\n- [一次性凭证拿到就落盘](/wiki/agent-session/as-concept-%E4%B8%80%E6%AC%A1%E6%80%A7%E5%87%AD%E8%AF%81%E6%8B%BF%E5%88%B0%E5%B0%B1%E8%90%BD%E7%9B%98)"
  ]
},
{
  "id": "as-concept-flex-子项的百分比-max-height-不可靠",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "flex 子项的百分比 max-height 不可靠",
  "oneLiner": "**想给 flex 子项加 `max-h-full` + `overflow-hidden` 来截断超长内容，会因为父 flex 容器没有显式高度而表现不一致。** 要么用**固定 px 的 max-height**，要么用 **JS 算容器高度后动态裁条数**。",
  "body": [
    "## 症状\n\n给 bars 子容器加 `max-h-full overflow-hidden` 后，条数多的文件 bars **完全消失**；加 `min-h-0` 也不行；不加 overflow 限制则正常，但超长时溢出底部（不截断）；外层加 `overflow-hidden` 又会把 hover 面板裁掉。",
    "## 根因\n\nbars 容器是 flex 子项，`max-h-full` 相对的是 flex 容器的高度，**而 flex 容器没有显式高度**（由 `top/bottom` 定位隐含）。百分比 max-height 在 flex 子项上表现不一致：条数少时不触发；条数多时触发了，但 computed height 变成 0，于是把所有 bars 都隐藏了。",
    "## 两个可行方向\n\n- **JS 计算容器高度**，动态 slice bars 数量（最稳）；\n- **CSS 用固定 px 值**（如 `max-h-[400px]`）而不是百分比。",
    "## 可迁移的判断\n\n「百分比高度」在 CSS 里永远依赖父级有确定高度。父级是 `absolute + top/bottom`、`flex`、`grid` 这类**高度隐含**的容器时，百分比会退化成不可预期值。遇到「有时生效有时不生效」的尺寸问题，先问：**这个百分比相对谁算，那个「谁」有确定高度吗？**",
    "## 相关\n\n- 滚动层会裁剪溢出内容要与显示层拆开 —— 同源：先问「约束施加在谁身上」，再问尺寸为什么不对\n- 样式丢失先核对类名再怀疑缓存与权限 —— 另一类「样式不生效」的先分诊顺序"
  ]
},
{
  "id": "as-concept-依赖版本要锁主版本而非一律取最新",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "依赖版本要锁主版本而非一律取最新",
  "oneLiner": "**装依赖时不要无脑选「更新到最新版本」：脚手架工具可以用最新版，项目运行依赖要按既定主版本锁住。** 否则会出现「安装器悄悄把架构升级了」——例如任务书写的是 Next.js 15，而 `next@latest` 已经跨到 16，无脑 latest 就等于偷换了大版本。",
  "body": [
    "## 分档策略\n\n| 依赖 | 策略 |\n|---|---|\n| 脚手架 / 工具链（turbo、typescript 等） | 可用当前稳定最新版或同大版本最新版 |\n| 框架本体（next） | **pin 主版本**（`next@15`），不要用 `latest` |\n| 有状态服务（postgres:15、redis:7） | 按任务书固定，不升大版本 |\n| 其他库 | 能 pin 主版本就 pin，避免后续 agent 环境不一致 |\n\n一句话：**脚手架可以最新，运行依赖按任务书主版本锁住。**",
    "## 相关\n\n- [环境变量校验要按模块懒加载](/wiki/agent-session/as-concept-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E6%A0%A1%E9%AA%8C%E8%A6%81%E6%8C%89%E6%A8%A1%E5%9D%97%E6%87%92%E5%8A%A0%E8%BD%BD) —— 环境不一致导致的漂移：一处“按模块校验”的做法\n- 评测平台是平台层项目规则是适配层\n- [项目里的技能可能有多份副本](/wiki/agent-session/as-concept-%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%9A%84%E6%8A%80%E8%83%BD%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%BB%BD%E5%89%AF%E6%9C%AC) —— 同属「环境不一致导致的漂移」\n- [运行时依赖属于平台不属于业务代码](/wiki/agent-session/as-concept-%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BE%9D%E8%B5%96%E5%B1%9E%E4%BA%8E%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%B1%9E%E4%BA%8E%E4%B8%9A%E5%8A%A1%E4%BB%A3%E7%A0%81) —— 同属「先分清这份依赖/配置该由谁提供」\n- 单例库要显式声明同一版本否则运行时分裂 —— 同一取向的另一半：装的时候定版本，跑的时候必须解出同一个实例\n- 项目占空间先查构建缓存与旧worktree —— 同族：依赖层的问题会以「整个仓库都不对」的形式呈现"
  ]
},
{
  "id": "as-concept-保存失败要落本地草稿并自动重试",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "保存失败要落本地草稿并自动重试",
  "oneLiner": "**云端保存失败时，正文不应只活在编辑器内存里。做法：内容一变就写本地草稿（localStorage），后台 debounce 上传；上传成功清草稿，失败保留并自动退避重试。切换卡片再切回来时优先显示本地草稿，于是「刚粘贴的图片还没传上云」也不会消失。**",
  "body": [
    "## 为什么\n\n用户明确要求：保存失败时本地要有、切换回来仍显示，**只做自动重试**（不引入复杂的冲突合并）。",
    "## 与延迟落盘的分工\n\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB)：正常路径——内存即时、落盘 debounce。\n- 本文：失败路径——落盘失败时用本地草稿兜底 + 重试。\n- 二者都不等于「每字符落盘」。",
    "## 边界\n\n这层只保证「编辑器里产生的正文/markdown 不丢」。图片文件真正上传对象存储换永久 URL 是另一件事，见 [图片粘贴要上传对象存储换永久URL](/wiki/agent-session/as-concept-%E5%9B%BE%E7%89%87%E7%B2%98%E8%B4%B4%E8%A6%81%E4%B8%8A%E4%BC%A0%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%8D%A2%E6%B0%B8%E4%B9%85URL)。",
    "## 相关\n\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB) —— 正常路径；本条是它的失败路径分支\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) —— 同属「保存链路不可靠」这一类\n- [首次内容事件不能无条件跳过](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%86%85%E5%AE%B9%E4%BA%8B%E4%BB%B6%E4%B8%8D%E8%83%BD%E6%97%A0%E6%9D%A1%E4%BB%B6%E8%B7%B3%E8%BF%87) —— 同属编辑器「变更/保存判定」的边界条件\n- [图片粘贴要上传对象存储换永久URL](/wiki/agent-session/as-concept-%E5%9B%BE%E7%89%87%E7%B2%98%E8%B4%B4%E8%A6%81%E4%B8%8A%E4%BC%A0%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%8D%A2%E6%B0%B8%E4%B9%85URL)"
  ]
},
{
  "id": "as-concept-停止与发送原地互换要加点击守卫",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "停止与发送原地互换要加点击守卫",
  "oneLiner": "**「停止」和「发送」放在同一个位置原地互换时，点击停止的瞬间状态已切回 idle、按钮已换成发送，鼠标抬起（click 事件）就落在发送按钮上，把草稿误发出去。修法：离开「发送中」状态后加一段点击守卫（如 500ms），只挡鼠标点击提交，不挡 Enter 发送。**",
  "body": [
    "## 机制\n\n`click` 在 mousedown/mouseup 都完成才派发，而按钮的身份在 mousedown 与 mouseup 之间已经改变 → 用户按下的是停止，触发的是发送。这是**同一坐标承载两种语义动作**的固有竞态，不是偶发 bug。",
    "## 修法取舍\n\n- 加时间窗守卫最简单，代价是「停止后极短时间内无法点击发送」（Enter 不受影响）。\n- 更彻底的做法是**让两个动作不共享同一命中区**（位置分离，或保持元素身份只换内容）。\n- 一般化：任何「同一控件原地切换语义」的交互（播放/暂停、开始/停止、展开/收起）都要考虑这个竞态。",
    "## 相关\n\n- [隐藏态按钮要保留命中区](/wiki/agent-session/as-concept-%E9%9A%90%E8%97%8F%E6%80%81%E6%8C%89%E9%92%AE%E8%A6%81%E4%BF%9D%E7%95%99%E5%91%BD%E4%B8%AD%E5%8C%BA) —— 同属「按钮命中区与状态切换」类问题\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9)\n- 条件return前必须调用所有hooks"
  ]
},
{
  "id": "as-concept-兼容-fallback-会让内容重复渲染",
  "updatedAt": "2026-06-11",
  "wikiSlug": "agent-session",
  "term": "兼容 fallback 会让内容重复渲染",
  "oneLiner": "**为旧模板保留的 fallback 路径，会让同一份内容在新模板里被渲染两次。** 症状是技能 / 总结 / 荣誉 / 作品集 / 自定义模块**重复显示**，而列表模块（工作 / 教育 / 项目 / 科研）正常 —— 差异不在数据，在模板有没有新槽。",
  "body": [
    "## 机制\n\n- **新路径**：`section.body` 直接取块状富文本（`skills` → `content.skills`，`summary/awards/portfolio` → 对应顶层字段）。\n- **旧路径**：旧模板只有 `section.items`，为了让块状模块也能显示，`deriveItems` 把**同一份富文本**包成一个「假 item」塞进 `item.bullets`。\n\n新模板同时写了 `<slot data-bind=\"section.body\">` 和 `<slot data-bind=\"section.items\" data-template=\"item\">`，两条路径各渲染一次 → 重复。",
    "## 解法：在渲染器里记「本 section 是否已有新槽」\n\n渲染时记录当前 section 模板是否含 `section.body`；若该 section 是 `kind === \"block\"` 且模板已有 `section.body`，就**跳过 fallback 的假 item**。",
    "## 第二种来源：迁移脚本把「一行」替换成「一组」\n\n模板批量迁移时，占位符被替换成「渲染全部 X」的循环，也会造成重复：旧模板本来有多行联系方式（电话 / 邮箱 / 地点 / 网站各一行），迁移时**每一行都被换成 `profile.contacts` 循环**，于是 4–5 行变成 4–5 组重复联系方式。\n\n同一批迁移还会顺带造成另一种坏结果：把模板专属类换成通用类（`.modern-contact-item` → `.contact-item`），原 CSS 选择器不再命中，图标变大、挤成奇怪的两行 —— **「重复」和「样式丢失」可能出自同一次迁移，但根因不同，要分开定位**。\n\n判据：迁移脚本里凡是「把一个占位符替换成对集合的循环」，都要先确认原位置的语义是**一行**还是**一组**；是「一行」就不能换成循环。",
    "## 可迁移的判断\n\n- 加兼容层时，要问「新路径和旧路径会不会同时命中同一份数据」，并给新路径一个**已消费标记**。\n- 列表模块不出问题不代表机制对 —— 只是因为它的 `section.body` 为空，两条路径天然互斥。**只在块状数据上暴露的 bug，最容易被判成「个别模板的问题」。**\n- 反过来也说明 `section.body` 不能随便往存量模板上加：曾经加它导致过块状模块双渲染。",
    "## 相关\n\n- [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) —— block / list 两种形态与本条同源\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) —— 兼容层是「旧的东西还在运行时活着」\n- [可调与固定的边界按语义划分](/wiki/agent-session/as-concept-%E5%8F%AF%E8%B0%83%E4%B8%8E%E5%9B%BA%E5%AE%9A%E7%9A%84%E8%BE%B9%E7%95%8C%E6%8C%89%E8%AF%AD%E4%B9%89%E5%88%92%E5%88%86) —— 同一天同一项目的另一处修改"
  ]
},
{
  "id": "as-concept-列表切换要用-master-detail-而非重建列表",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "列表切换要用 master-detail 而非重建列表",
  "oneLiner": "**左列表 + 右详情的界面，如果点卡片走「完整路由跳转」（`/notes/[slug]`），每次切换都会经历详情页挂载、列表重新渲染/排序、编辑器初始化，于是容易「选中后列表跳位」。改成 master-detail（点卡片只改选中态，不跳路由）更稳。**",
  "body": [
    "## 两种模型\n\n| | 路由详情页 | master-detail |\n|---|---|---|\n| 点击卡片 | 进入 `/notes/[slug]`，路由变化 | 只改 `selectedId/slug` |\n| 左列表 | 每次切换重新挂载/排序 | 只加载一次，滚动容器不重建 |\n| 代价 | 能直接分享/刷新单篇链接，前进后退自然 | 需自己同步 URL（`history.pushState`）保留直达链接 |\n| 稳定性 | 易出现选中后跳位 | 列表根本不重建，不跳 |",
    "## 做法\n\n- 左侧列表只加载一次，点击只改选中态；右侧切换当前内容。\n- URL 用 `history.pushState` 或轻量路由同步成 `/notes/slug`，保留直达链接。\n- 直接打开 `/notes/slug` 时，再初始化选中那一篇。\n\n**判据：问题不是「按更新时间排序」，而是「切换时列表被重建」。** 正确解法是让列表不重建，而不是取消排序——甚至可以在「离开/切换区/刷新」时才重排。\n\n参考：Mac Notes 也按更新时间排却不明显卡顿，因为它左栏一直在、编辑器切换不驱动左栏重新加载、数据本地增量更新。",
    "## 相关\n\n- [编辑器初始化会触发假保存](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BC%9A%E8%A7%A6%E5%8F%91%E5%81%87%E4%BF%9D%E5%AD%98) —— 路由重建时编辑器初始化会顺带触发假保存，加重跳位\n- [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1)\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C) —— 跨栏目切换（页面卸载重建）时，靠浏览器侧内容缓存 + 后台刷新补回体验，而不是让列表接口带回全文\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) —— 缓存化之后要处理返回顺序，避免旧响应盖住新状态\n- [复制要区分可见文本与富文本](/wiki/agent-session/as-concept-%E5%A4%8D%E5%88%B6%E8%A6%81%E5%8C%BA%E5%88%86%E5%8F%AF%E8%A7%81%E6%96%87%E6%9C%AC%E4%B8%8E%E5%AF%8C%E6%96%87%E6%9C%AC)\n- [可调与固定的边界按语义划分](/wiki/agent-session/as-concept-%E5%8F%AF%E8%B0%83%E4%B8%8E%E5%9B%BA%E5%AE%9A%E7%9A%84%E8%BE%B9%E7%95%8C%E6%8C%89%E8%AF%AD%E4%B9%89%E5%88%92%E5%88%86)\n- [聊天记录要从底部锚定加载](/wiki/agent-session/as-concept-%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E8%A6%81%E4%BB%8E%E5%BA%95%E9%83%A8%E9%94%9A%E5%AE%9A%E5%8A%A0%E8%BD%BD) —— 同为「不要为了数据把整个视图重建/清空」"
  ]
},
{
  "id": "as-concept-单例库要显式声明同一版本，否则运行时分裂",
  "updatedAt": "2026-07-25",
  "wikiSlug": "agent-session",
  "term": "单例库要显式声明同一版本，否则运行时分裂",
  "oneLiner": "**必须全局唯一的库（OTEL provider、React、状态容器等），只要有一个消费方没有显式声明版本，包管理器就会解出第二个版本，把整套 peer 依赖图复制一份 —— 结果是运行时出现两个 provider、注册与读取各走一份。**",
  "body": [
    "## 案例（pnpm monorepo）\n\n- `apps/ai-workflows` 显式锁定 `@opentelemetry/api@1.9.0`，Agent 包没有直接声明 → pnpm 自动解到 `1.9.1` → 整套 OTEL peer graph 被复制，`pnpm-lock.yaml` 多出约 259 行重复依赖。\n- 修法只有一个：给 Agent 也加上**同样的精确版本**，再重生成 lockfile。",
    "## 判据与修法\n\n| 信号 | 含义 |\n|---|---|\n| lockfile 里同一包出现两个版本、大段重复行 | 依赖图被复制，单例前提已破 |\n| 运行时「provider 分裂」类报错（追踪/上下文/状态取不到） | 往往就是两份实例 |\n| 只在部分包里声明版本 | 未声明的那份会被解析成「最近版本」 |\n\n原则：**需要单例的库，在所有消费方显式声明同一精确版本**；不要依赖传递依赖「碰巧一致」。",
    "## 相关\n\n- [依赖版本要锁主版本而非一律取最新](/wiki/agent-session/as-concept-%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E8%A6%81%E9%94%81%E4%B8%BB%E7%89%88%E6%9C%AC%E8%80%8C%E9%9D%9E%E4%B8%80%E5%BE%8B%E5%8F%96%E6%9C%80%E6%96%B0) —— 同一取向的另一半：装的时候怎么定版本\n- [项目里的技能可能有多份副本](/wiki/agent-session/as-concept-%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%9A%84%E6%8A%80%E8%83%BD%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%BB%BD%E5%89%AF%E6%9C%AC) —— 同属「同一份东西出现多副本」"
  ]
},
{
  "id": "as-concept-可调与固定的边界按语义划分",
  "updatedAt": "2026-06-10",
  "wikiSlug": "agent-session",
  "term": "可调与固定的边界按语义划分",
  "oneLiner": "**「哪些样式允许用户调节」不该全局一刀切，边界由语义角色决定。** 同一份模板里，顶部身份区（姓名 / 求职方向 / 联系方式）应当**固定**字号与行距、不受智能排版影响；正文（公司 / 职位 / 时间 / 技术栈 / bullet）必须全部走 CSS 变量，才可调。",
  "body": [
    "## 一次实例（红调封面）\n\n- 现象：正文里的 公司 / 学校 / 项目名、时间、职位 / 角色、技术栈 / 链接行 都写死 `px` 字号 → 智能排版对它们无效。\n- 修正：正文改为 `calc(var(--font-size) * 1.08)` / `var(--font-size)` / `var(--line-height)`；只有 `.crimson-banner` 保留固定值。\n- 判定原话：**只有「顶部 banner 个人信息」可以写死，因为这是不能动的**。",
    "## 两个容易漏的点\n\n1. **固定不能只固定 `font-size`。** banner 还会继承页面 `line-height`，所以行距同样会被排版设置带跑。固定区必须同时锁 `font-family` / `font-size` / `line-height` —— 是**做隔离**，不是只改一个属性。\n2. **检查要区分两类固定值。** 全库扫描出「存在非 `var()` 字号」不等于都错：必须拆成「允许固定的标题 / 装饰区」与「正文错误固定」，不能用全局规则一刀切判定，否则规则不是误报就是漏报。",
    "## 可迁移的判断\n\n- 可调 / 固定是**语义属性**，不是 CSS 属性：同一个 `font-size`，在身份区该固定，在正文该走变量。\n- 防回归检查必须能表达这种区分（红调检查：banner 必须固定 + 正文必须走变量），否则只能靠人肉判断。",
    "## 相关\n\n- [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) —— 「能调但不生效」的另一半：值到了，还得有消费方\n- [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) —— 本条服务的模板层"
  ]
},
{
  "id": "as-concept-图片加载失败要可重试并升级到-HTTPS",
  "updatedAt": "2026-06-12",
  "wikiSlug": "agent-session",
  "term": "图片加载失败要可重试并升级到 HTTPS",
  "oneLiner": "**头像/图片「全变成文字」通常是加载失败触发了 fallback，而不是设计改了文案。** 两个隐蔽原因：源本来没有图片地址（`favicon_url` 为空）；以及**失败的 URL 被当前会话永久记住，不再重试**。",
  "body": [
    "## 要点\n\n- **失败状态不能永久化。** 一次失败就整场会话不再重试，会把偶发的网络抖动放大成「全都坏了」。要有重试与失效机制。\n- **明文 HTTP 图片在桌面 WebView 里比命令行更容易被拦。** 命令行 `curl` 能取到图，不代表 WebView 能加载；`http://` 的图源要优先升级为 `https://`。\n- **兜底要有第二来源。** 可升级的转 HTTPS，不可升级的退回域名 favicon，而不是直接显示文字。\n- 判定「是网络问题还是数据问题」时，先分清「这个源本来就没有图」和「有图但这次没加载出来」。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该 synthesis 的一处实例：拿「会话级失败缓存」当本次加载结果\n- 样式丢失先核对类名再怀疑缓存与权限 —— 同类：先分清「本来就没有」与「这次没生效」\n- 兼容fallback会让内容重复渲染 —— 同为 fallback 路径带来的意外结果\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) —— 先判断失败归属：数据源缺失还是加载环节被拦"
  ]
},
{
  "id": "as-concept-图片粘贴要上传对象存储换永久URL",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "图片粘贴要上传对象存储换永久URL",
  "oneLiner": "**笔记正文只能存「图片地址」。粘贴图片若不真正上传到云端，markdown 里留下的会是 `blob:` 或超长 `data:`，都不适合长期保存：`blob:` 只在当前浏览器会话有效，刷新/换设备即失效；`data:` 把整张图塞进正文，数据库膨胀、列表/同步/编辑器变慢。正解是上传对象存储（如 Cloudflare R2，类 S3），正文只存永久 URL。**",
  "body": [
    "## 标准流程\n\n1. 用户粘贴图片\n2. 编辑器拦截剪贴板里的图片文件\n3. 前端上传到后端接口（如 `/api/uploads`）\n4. 后端存到对象存储\n5. 后端返回公开 URL\n6. 编辑器把图片节点替换为 `![image](https://.../xxx.png)`\n7. 正文保存这个永久 URL",
    "## 难点\n\n- 接 Milkdown/Crepe 的图片上传插件或 paste handler\n- 后端上传接口接对象存储\n- 上传失败要保留本地预览并能重试（见 [保存失败要落本地草稿并自动重试](/wiki/agent-session/as-concept-%E4%BF%9D%E5%AD%98%E5%A4%B1%E8%B4%A5%E8%A6%81%E8%90%BD%E6%9C%AC%E5%9C%B0%E8%8D%89%E7%A8%BF%E5%B9%B6%E8%87%AA%E5%8A%A8%E9%87%8D%E8%AF%95)）",
    "## 相关\n\n- [复制要区分可见文本与富文本](/wiki/agent-session/as-concept-%E5%A4%8D%E5%88%B6%E8%A6%81%E5%8C%BA%E5%88%86%E5%8F%AF%E8%A7%81%E6%96%87%E6%9C%AC%E4%B8%8E%E5%AF%8C%E6%96%87%E6%9C%AC) —— 同属「编辑器与系统剪贴板/二进制通道的交互」\n- [保存失败要落本地草稿并自动重试](/wiki/agent-session/as-concept-%E4%BF%9D%E5%AD%98%E5%A4%B1%E8%B4%A5%E8%A6%81%E8%90%BD%E6%9C%AC%E5%9C%B0%E8%8D%89%E7%A8%BF%E5%B9%B6%E8%87%AA%E5%8A%A8%E9%87%8D%E8%AF%95)\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8) —— 上传过程同样要用真实进度，不用假动画\n- 图片加载失败要可重试并升级到HTTPS\n- Agent读语义文件App读结构化存储"
  ]
},
{
  "id": "as-concept-复制要区分可见文本与富文本",
  "updatedAt": "2026-07-12",
  "wikiSlug": "agent-session",
  "term": "复制要区分可见文本与富文本",
  "oneLiner": "**编辑器的「复制」要分两种产物：`text/plain` 只写屏幕可见文字，`text/html` 保留富文本；不能让 Markdown 源码（`#`、`**`）或 `<br>` 字面量进入纯文本通道。**",
  "body": [
    "## 根因（Milkdown）\n\nMilkdown 的剪贴板插件会把「非纯文本选择」主动序列化成 **Markdown** 写进 `text/plain`，其中的原始 HTML 节点又被序列化回 `<br>`。所以选中复制后粘出来的内容带 `#`/`**`/`<br>`，与 ChatGPT、豆包的可见文本复制行为不同。",
    "## 两条复制路径的契约\n\n| 动作 | 产物 | 期望 |\n|---|---|---|\n| 点「复制全文」 | Markdown 源码 | 给纯文本/开发用途，保留 `#`、`**` |\n| 选中/全选后 `Cmd/Ctrl+C` | 屏幕可见内容 | 粘到 Word 保留标题加粗；粘到微信无 `<br>`；粘到纯文本框无 `#`/`**` |\n\n- 剪贴板内部仍要携带富文本数据，否则 Word 之类无法保留格式 —— 但**用户看到的内容不出现 HTML 标签**。\n- 实现上**不额外加 `onCopy`**，只覆盖 Milkdown 那条错误的纯文本序列化规则。",
    "## 相关\n\n- [图片粘贴要上传对象存储换永久URL](/wiki/agent-session/as-concept-%E5%9B%BE%E7%89%87%E7%B2%98%E8%B4%B4%E8%A6%81%E4%B8%8A%E4%BC%A0%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%8D%A2%E6%B0%B8%E4%B9%85URL)\n- [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81)\n- [编辑器初始化会触发假保存](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BC%9A%E8%A7%A6%E5%8F%91%E5%81%87%E4%BF%9D%E5%AD%98)"
  ]
},
{
  "id": "as-concept-延迟保存要捕获创建时的实体",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "延迟保存要捕获创建时的实体",
  "oneLiner": "**延迟任务（debounce / setTimeout）在触发时才去读「当前活跃对象」，会在切换期间把 A 的数据写到 B 上。** 修法两条：创建任务时就捕获当时的实体 id 并显式传下去；实体短暂变为 `null` 时也要先 flush 待保存内容。",
  "body": [
    "## 症状\n\n「笔记无法编辑，始终显示同一份笔记」——切来切去内容互相覆盖，看起来像编辑器坏了。",
    "## 根因链\n\n1. 正文编辑不是每敲一字就保存，而是 1 秒 debounce。\n2. 用户编辑 A 后 1 秒内切到 B。\n3. B 的完整正文还没加载完，父层传给编辑器的 `note` 短暂变成 `null`。\n4. 旧逻辑在 `note === null` 时直接 `return`，**没有把 A 的待保存内容 flush 掉**。\n5. 计时器随后触发，保存逻辑默认取「当前 active tab id」。\n6. 此时 active tab 已是 B → **A 的正文被写进 B**。",
    "## 两层防护\n\n- `note === null` 时，也用 `lastNoteIdRef` 把上一条的 pending title/content 保存到**旧 id**；\n- debounce 创建时就捕获当前 `note.id`，触发时显式传这个 id，**不再临时读当前 active tab**。",
    "## 可迁移的判断\n\n「延迟执行 + 读取全局当前值」是一类通用 bug 形状，和业务无关：\n\n- 定时器 / debounce / 动画帧 / 请求重试，只要回调里读的是**共享的可变当前指针**，切换对象就会写错目标；\n- 修法统一是**闭包捕获 + 显式传参**，不要依赖回调执行时的环境状态；\n- 加载态（`null` / loading）不是「什么都不用做」，而是**最需要 flush 的时刻**。",
    "## 相关\n\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB) —— 同一保存链路的另一半：延迟多久、延迟什么\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) —— 同一条保存链路的第三种乱序：过期响应回写正文"
  ]
},
{
  "id": "as-concept-引擎不做建模器，复杂模型交给外部工具",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "引擎不做建模器，复杂模型交给外部工具",
  "oneLiner": "**当渲染引擎需要在代码里手写顶点和面来造模型时，说明分工错了：引擎应该只负责「切模型 / 渲染模型」，建模交给外部工具，产物用标准格式（Blender → GLB）导入。**",
  "body": [
    "## 一、判断信号\n\n代码里出现这种「建模」写法，就是分不清职责：\n\n```js\n// 手写顶点与面：引擎在充当建模器\nconst geometry = {\n  vertices: [[0,0,0],[2,0,0],[2,1,0]],\n  faces: [[0,1,2]]\n}\n```\n\n手写顶点、面、法线很容易错，而且**肉眼调比例极其痛苦** —— 复杂模型效果差，本质原因就在这里，不在渲染算法。",
    "## 二、正确分工\n\n| 环节 | 工具 |\n|---|---|\n| 建模 | Blender（导出 glTF/GLB）或网页建模工具 |\n| 加载 | Three.js `GLTFLoader` 读 `.glb` / `.gltf` |\n| 计算 | 现有引擎对每个 mesh 应用切割 plane，再算截面 |\n\nGLB 适合 Web/H5：一个文件包含 mesh、材质、层级，移动端加载也方便。\n\n题目数据里只需声明引用：\n\n```js\n{ id: \"q80\", model: { type: \"glb\", url: \"/models/q80.glb\" }, cutMode: \"free\" }\n```\n\n引擎侧补的是「加载 → 遍历 mesh → 应用 plane → 算截面」，而不是新增建模能力。",
    "## 三、边界\n\n- **简单图形不值得建模** —— 参数化就能生成，交给人工建模是无意义的开销。\n- 这条只对**复杂模型**成立：难点在复杂模型怎么变成一个可信的 3D 数据。\n- 反过来，用外部工具也不等于还原正确：类型（参数体 / 方块体 / 自定义多面体）选错，模型再精细也是错的。",
    "## 相关\n\n- 几何题3D化的题库定位 —— 本条服务的场景：模型由题目决定\n- 一次循环只做一个可体验的v1能力 —— 先跑通「外部建模 → 前端加载 → 切割」的最小闭环\n- [手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88) —— 同源：核心职责该不该自己写，判据是「是否在重写成熟能力」"
  ]
},
{
  "id": "as-concept-手搓编辑器核心逻辑到深处要评估换社区方案",
  "updatedAt": "2026-06-28",
  "wikiSlug": "agent-session",
  "term": "手搓编辑器核心逻辑到深处要评估换社区方案",
  "oneLiner": "**Markdown 实时渲染编辑器一旦核心逻辑是自己手搓、且越补越多，长期维护成本会失控；到某个深度应优先评估社区方案，而不是继续手搓。** 判据是「你已经在重写一个成熟编辑器内核的职责」。",
  "body": [
    "## **补充（2026-06-28 修正）：换社区方案不等于直接用它的默认规则。** 编辑器要拆成两层看：**底层内核**（光标/选区/撤销/快捷键/markdown 语法识别）和**live preview 规则层**（隐藏 `**`、把 `- ` 换成圆点这类显示规则）。前者几乎都该复用成熟内核，后者才是手感差异所在。Atomic Editor 本身也是基于 CodeMirror 6 做的——问题不是 CodeMirror 不行，而是 Atomic 在 CodeMirror 之上加了它自己的一套 live preview 规则，和想要的 Obsidian 手感不一致。所以正确做法是：**直接用 CodeMirror 6 自己搭 live preview 规则层，而不是放弃 CodeMirror、也不是照单全收 Atomic 的默认规则。**",
    "## 手搓范围越深，边界 bug 越多\n\n不只是把 `**粗体**` 渲染成粗体，还包括：表格直接可编辑、checkbox 可点击、图片直接显示、链接点击、当前行显示原始 Markdown 而其他行渲染、中文粗体/斜体兼容补丁、表格光标移动与增删行列、DOM 内容回写 Markdown。**这些都很容易出边界 bug，尤其表格。**",
    "## 评估优先级\n\n| 方案 | 特点 |\n|---|---|\n| `@atomic-editor/editor` | 最贴合：CodeMirror + Obsidian 风格实时渲染，支持表格/图片/任务列表，Markdown 原文是唯一数据源 |\n| `codemirror-live-markdown` | 更像 CodeMirror 插件，可细粒度替换 `livePreview.ts`，但版本偏 alpha，稳定性待验 |\n| `codemirror-markdown-hybrid` | 功能全但社区信号弱，核心编辑器不建议押上 |\n| MDXEditor / Milkdown | 更成熟，但迁移成本大，体验会更像富文本而非 CodeMirror Markdown |\n\n结论：**手搓方向能跑，但长期难维护；先用 Atomic Editor 做小实验，看能否覆盖当前最难的场景（表格）。**",
    "## 选型是「内核 + 规则层」的组合，不是二选一\n\n把上面这张表按两层重读，判断会清楚很多：\n\n| 层 | 判断 |\n|---|---|\n| 底层编辑内核 | 不要手搓，用成熟的（CodeMirror 6 等） |\n| live preview 规则层 | 这才是决定「像不像 Obsidian」的地方，值得自己搭 |\n\n因此「评估社区方案」的结论要加一句限定：**先评估它能否替换内核，再评估它的规则层要不要留。** 一个方案内核很好但规则层不合手，正解是保留内核、替换规则层，而不是整个换掉或整个照抄。\n\n> 认知演化：2026-06-25 把 Atomic Editor 列为「最贴合」，隐含假设是「整体采用」；2026-06-28 拆出两层后发现真正的冲突只在规则层，结论从「选哪个现成方案」变成「复用内核、自建规则层」。",
    "## 相关\n\n- [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81)\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB)\n- 引擎不做建模器\n- [编辑器与只读渲染要分层](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E4%B8%8E%E5%8F%AA%E8%AF%BB%E6%B8%B2%E6%9F%93%E8%A6%81%E5%88%86%E5%B1%82)"
  ]
},
{
  "id": "as-concept-折叠动画要有收起态过渡",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "折叠动画要有收起态过渡",
  "oneLiner": "**`isOpen && <内容>` 的条件渲染只有「进入动画」——展开时能靠 `animate-in` 播一次，收起时元素直接从 DOM 卸载，没有可过渡的中间态，所以看起来「无动画」。要做双向折叠动画，必须让内容保持挂载，改用高度过渡。**",
  "body": [
    "## 现象与根因\n\n- 症状：基础信息折叠后**收起时无动画**；自定义模块**完全无动画**（连展开也没有）。\n- 根因：这些区块用的是 `isOpen && <内容>`。展开 = 元素插入 + 进入动画；收起 = 元素移除，没有\"从 1 到 0\"的过程可播。\n- 自定义模块更彻底：它连展开动画都没有，等于整块没有折叠过渡。",
    "## 做法\n\n和其它 section 对齐，改成**保持挂载 + 网格行高过渡**：\n\n```text\ngrid-rows-[1fr]  →  grid-rows-[0fr]   +  opacity 过渡\n```\n\n这样收起时内容仍在 DOM 里，只是被行高与透明度渐变掉，进出都有动画。改完要补对应单测（`basics-editor.test.tsx`、`custom-section-editor.test.tsx`）并跑 `tsc --noEmit`。",
    "## 判据\n\n问一句就够了：**「这个动画是在元素被插入/移除时播的，还是在一个持续存在的元素上过渡的？」** 前者只能单向。",
    "## 相关\n\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8) —— 同源：动画必须由真实状态驱动，不能靠\"看起来像\"\n- 高频手势缩放不要走React状态 —— 同源：动画类效果要挑对承载方式\n- [焦点环画在圆角外会露出四角](/wiki/agent-session/as-concept-%E7%84%A6%E7%82%B9%E7%8E%AF%E7%94%BB%E5%9C%A8%E5%9C%86%E8%A7%92%E5%A4%96%E4%BC%9A%E9%9C%B2%E5%87%BA%E5%9B%9B%E8%A7%92) —— 同一天同一编辑器的另一处「通用样式没被单独覆盖」\n- [骨架屏呼吸动画用独立亮度层](/wiki/agent-session/as-concept-%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%91%BC%E5%90%B8%E5%8A%A8%E7%94%BB%E7%94%A8%E7%8B%AC%E7%AB%8B%E4%BA%AE%E5%BA%A6%E5%B1%82) —— 同族：动画层与静态层分开，改一个不破坏另一个"
  ]
},
{
  "id": "as-concept-控件参数要在下游被消费",
  "updatedAt": "2026-06-09",
  "wikiSlug": "agent-session",
  "term": "控件参数要在下游被消费",
  "oneLiner": "**控件能调、值也确实传下去了，不代表会生效 —— 参数必须在消费方被真正消费，否则表现为「调整了没反应」，而且不报错。排查动作是逐条对照「上游传了什么」与「下游消费了什么」，再决定改哪一层。**",
  "body": [
    "## 一次实例\n\n- 现象：调「标题间距」控件没有反应，怀疑是表单/HTML 的问题。\n- 根因：渲染器确实收到了 `--heading-gap`，但**当前模板（红调封面）的 CSS 里完全没有这个变量** —— 参数传进去了，没人消费。所以这不是表单问题，是**当前模板 CSS/HTML** 的问题，只需更新这一个模板。",
    "## 为什么容易查错方向\n\n「没反应」天然像是交互层的问题（控件没绑定、状态没更新）。但只要值已经到达渲染器，问题就已经转移到下游。判断依据是**值有没有到**，不是**界面像不像坏了**。\n\n同一类静默失效还有：表单字段有、模板没写对应 slot → 用户填了也永远不显示（见 [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) 的逐字段清单）。",
    "## 相关\n\n- [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) —— 消费方就是模板 HTML/CSS 的 slot 与变量\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 先判断问题归表单层还是模板层，再动手\n- 面板多出的固定区块先查数据源再改前端 —— 同源：先看数据链路是否到达，再改渲染"
  ]
},
{
  "id": "as-concept-改版后旧路由仍指向旧实现",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "改版后旧路由仍指向旧实现",
  "oneLiner": "**改版后用户点进某个入口却看到旧界面，第一嫌疑不是「新组件写错了」，而是「那条 route 还 import 着旧组件」。** 新版布局只在列表页生效、入口路由没一起切过去，旧 route 就会绕开新布局，直接渲染旧页面。",
  "body": [
    "## 一、典型症状\n\n- 新版列表/面板已经做好了，但点标题、点列表项、或直接开某个 URL 后，看到的还是老式编辑页。\n- 新布局组件（如 `ListColumn + ReaderSurface`）明明存在，却只在部分路径出现。\n- 表现像「功能缺失 / 没生效」，实际是**两条渲染路径并存**，用户走的是旧那条。",
    "## 二、根因与排查\n\n根因示例：`notes/[slug]/page.tsx` 仍引用旧的 `NoteEditorPage`，该页面完全绕过了原型的新布局，于是点击标题/列表后进入了旧编辑页。\n\n排查顺序：\n\n1. 找到用户实际进入的那条 route 文件；\n2. 看它 `import` / 渲染的是**哪个组件**（而不是看新组件写没写）；\n3. 对比新布局是否被该 route 引用——没被引用，就是没接上。",
    "## 三、可迁移的判断\n\n- **改版要按「入口清单」收口，不是按「新组件写完」收口。** 同一个功能往往有多个入口（点标题、点列表项、直接访问 URL、旧书签），要逐个确认都指向新实现。\n- **「新组件存在」≠「用户会用到它」。** 判断界面行为要看入口路由指向谁，而不是仓库里有没有新代码。\n- 旧 route 保留 = 一条隐形的旧路径，会让新版看起来「时好时坏」。",
    "## 相关\n\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同一取向：先确认「用户实际碰到的是哪一份」，再查实现\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) —— 「代码里有什么」不等于「运行时用什么」\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 改对代码 ≠ 修好现状；旧路径要单独带过来\n- [改协议要同时改两端](/wiki/agent-session/as-concept-%E6%94%B9%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%90%8C%E6%97%B6%E6%94%B9%E4%B8%A4%E7%AB%AF) —— 同一取向：入口/协议改了，所有指向它的地方都要一起改\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条是该骨架的一处实例：入口实际 import 的那份组件\n- 浅层改URL不会切换组件"
  ]
},
{
  "id": "as-concept-改环境变量要触发云端重建，而不是重新上传部署",
  "updatedAt": "2026-07-09",
  "wikiSlug": "agent-session",
  "term": "改环境变量要触发云端重建，而不是重新上传部署",
  "oneLiner": "**在 Vercel 上改完环境变量，正确动作是「重新构建已有部署」（`vercel redeploy <已有部署URL> --target production`），而不是 `vercel deploy --prod`。后者会从本地上传一整个新包（在有缓存 / worktree 的 monorepo 里体积异常大），做的却是同一件事。**",
  "body": [
    "## 机制\n\n- 环境变量挂在**项目**上，不挂在本地某个文件夹上 —— 所以改完变量，需要的是让云端**重新构建**，让构建期注入新值。\n- `vercel deploy` = 从本地发一个新部署包；`vercel redeploy` = 让 Vercel 用现有源码在云端重建。\n- 两者「意图」相同（都想让新配置生效），但 `deploy` 多做了「上传本地文件」这件无用且昂贵的事。改环境变量的场景，用户自己就能判断出「我只是改了环境重新加载，不需要上传」。",
    "## 相关\n\n- 项目占空间先查构建缓存与旧worktree\n- Vercel四个运行环境各填什么变量 —— 同一条 Vercel 部署链路上的另一环：变量该填到哪个环境"
  ]
},
{
  "id": "as-concept-新建对话的hero要淡入入场而非加载态.md",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "新建对话的hero要淡入入场而非加载态.md",
  "oneLiner": "**用户说「开启新对话的过渡动画」时，指的可能是**入场动效**（hero 区缓缓淡入 + 轻微上移），而不是转圈加载态。这是纯 CSS 动画，改动很小 —— 先确认是「等数据」还是「内容出现的方式」，两者实现完全不同。**",
  "body": [
    "## 落地要点\n\n- 分层错后（如输入框比标题晚 90ms）比整体同时淡入更像「缓缓出现」。\n- 入场动画期间不要同时有骨架屏闪烁，否则两种动效打架；两者只能留一个。\n- 尊重系统「减弱动态效果」（prefers-reduced-motion）设置时自动禁用。",
    "## 相关\n\n- [骨架屏呼吸动画用独立亮度层](/wiki/agent-session/as-concept-%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%91%BC%E5%90%B8%E5%8A%A8%E7%94%BB%E7%94%A8%E7%8B%AC%E7%AB%8B%E4%BA%AE%E5%BA%A6%E5%B1%82)\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1)\n- [显示阈值应按元素可见性而非固定像素](/wiki/agent-session/as-concept-%E6%98%BE%E7%A4%BA%E9%98%88%E5%80%BC%E5%BA%94%E6%8C%89%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81%E6%80%A7%E8%80%8C%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%83%8F%E7%B4%A0)\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8)"
  ]
},
{
  "id": "as-concept-显示阈值应按元素可见性而非固定像素",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "显示阈值应按元素可见性而非固定像素",
  "oneLiner": "**「下滑到一定距离后顶栏才显示标题」若用固定像素阈值（如 `scrollTop > 18`），会因为字号/行高/布局不同而提前或延后出现。用户要的是「原 title 完全离开顶栏覆盖区后才显示」——判据应是标题元素的实际位置（是否已滚出覆盖区），不是固定距离。**",
  "body": [
    "## 做法\n\n- 读正文标题元素的位置判断是否离开 toolbar 覆盖区，而不是读固定 scrollTop。\n- 显示后的 toolbar title 应可点击，点击平滑回到阅读区顶部。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该 synthesis 的一处实例：拿「固定滚动距离」当元素是否可见的判据\n- [UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F) —— 本条是「判断机制而非抄常量」的具体实例\n- [滚动条顶到固定栏要调视口而非隐藏滚动条](/wiki/agent-session/as-concept-%E6%BB%9A%E5%8A%A8%E6%9D%A1%E9%A1%B6%E5%88%B0%E5%9B%BA%E5%AE%9A%E6%A0%8F%E8%A6%81%E8%B0%83%E8%A7%86%E5%8F%A3%E8%80%8C%E9%9D%9E%E9%9A%90%E8%97%8F%E6%BB%9A%E5%8A%A8%E6%9D%A1)\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8)"
  ]
},
{
  "id": "as-concept-服务端缓存与浏览器缓存的边界",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "服务端缓存与浏览器缓存的边界",
  "oneLiner": "**Redis 和 IndexedDB 不是可互换的两种缓存 —— 差别不在性能，在「缓存放在哪一层、给谁用」。**",
  "body": [
    "## 判断规则：**用户私有内容（笔记、剪藏正文）缓存在浏览器侧，不复制进服务端缓存**；服务端 Redis 保留给队列、限流这类与用户内容无关的职责。不要因为「项目里已经有 Redis」就把 API 响应也塞进去。\n\n| | Redis | IndexedDB |\n|---|---|---|\n| 位置 | 服务端，应用与数据库之间 | 浏览器，页面与网络之间 |\n| 共享范围 | 跨请求、跨用户（进程外） | 单浏览器、单用户 |\n| 生命周期 | 服务端 TTL / 淘汰策略控制 | 跨会话存活，换设备即失效 |\n| 典型用途 | 队列、限流、会话、共享缓存 | 离线数据、本地草稿、会话级内容缓存 |\n\n三条推论：\n\n1. **缓存的目的是「少一次远端往返」时，两层都能做，但先问数据是不是用户私有。** 私有正文进服务端缓存 = 把同一份私有数据再多复制一处，暴露面变大，而收益只在「多用户命中同一 key」时才成立 —— 个人知识库场景不成立。\n2. **「已经有 Redis」不等于「该用它做内容缓存」。** 队列是进程内必需的基础设施，内容缓存是可选的优化，两者共用一套 Redis 不冲突，但职责要分开声明。\n3. **切栏目卡顿的修法不是「让列表接口带回全文」。** 正确姿势是浏览器侧会话级缓存 + 请求去重 + 后台静默刷新：先拿缓存立即渲染，再在后台刷新，而不是把大字段塞回列表响应。\n\n本日实例（mewmo）：Web 端已同时使用远端 Upstash Redis 与远端 Neon，但 Redis 只服务 BullMQ，没有缓存笔记 / 剪藏的 API 响应，所以每次切栏目仍然访问远端数据库。方案定为浏览器会话级缓存 + 后台刷新，而不是把全文放进服务端缓存。",
    "## 相关\n\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5) —— 队列与缓存常在同一套 Redis 上，但属于不同的时序模型\n- [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87) —— 服务端缓存的收益要用命中率衡量，浏览器缓存则看「是否省下这次请求」\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A) —— 「哪一层持有数据」和「哪一层持有缓存」是同一个模型问题的两面\n- 知识库先编译再查而不是查询时拼原文 —— 同属「在什么时刻、哪一层把数据整理好」的取舍\n- 列表切换要用master-detail而非重建列表 —— 浏览器侧缓存是为了让列表不被重建时仍能立即显示\n- [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7) —— 从会话缓存到完整离线编辑的三个档位\n- [页面切换的四种刷新要分清](/wiki/agent-session/as-concept-%E9%A1%B5%E9%9D%A2%E5%88%87%E6%8D%A2%E7%9A%84%E5%9B%9B%E7%A7%8D%E5%88%B7%E6%96%B0%E8%A6%81%E5%88%86%E6%B8%85) —— 先定位慢在哪一条链路，再决定用哪层缓存\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) —— Redis 去掉队列职责后，剩下的边界在哪"
  ]
},
{
  "id": "as-concept-本地优先不等于纯文件",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "本地优先不等于纯文件",
  "oneLiner": "**「local-first（本地优先）」和「file-only（只用文件）」不是一回事。** 用户感知到的「切换笔记很卡、图片加载慢」，根因通常不是「数据库天生慢」，而是**网络请求还在切换内容的 critical path（关键路径）上**。把 PostgreSQL 换成服务器上的文件，网络等待依然存在，体验不会发生质变。",
  "body": [
    "## 推荐切分：内容文件化，索引/状态仍用数据库\n\n| 数据 | 本地 | 云端 |\n|---|---|---|\n| 笔记正文 | `notes/{id}.md` | 镜像 / 同步记录 |\n| 剪藏、文章正文 | `content/{id}.html` / `.md` | 对象存储或按需保留 |\n| 图片、附件 | `assets/{hash}.{ext}`，下载一次后离线读 | 对象存储 |\n| 标题、标签、排序、已读、版本 | SQLite / SwiftData | PostgreSQL |\n| 搜索索引 | SQLite FTS / Spotlight | 服务端搜索 |\n| 离线操作、同步队列 | SQLite outbox | Sync API |\n| 账号、AI、自动化 | 不落普通文件 | PostgreSQL + Worker |\n\n原则是**所有界面先读本地、写入先落本地**，后台异步同步。纯文件方案做到后面仍会被迫补一套索引、状态库和同步日志 —— 相当于自己重造一个更难维护的数据库。",
    "## Web 端同样适用，但不能依赖普通文件目录\n\n用 **IndexedDB / OPFS** 做持久本地副本：UI 先显示本地内容，再静默同步。第一次打开仍需网络，之后切换访问过的内容基本不等待。",
    "## 顺带要修的两条关键路径\n\n- **页面导航不要连续访问服务器**：从「等 RSC 响应 → 再请求详情 → 再加载正文」改成「先读本地缓存显示 → 后台查更新 → 无感替换」。\n- **图片不要每次临时去原站抓**：入库时抓一次、压缩成缩略图 / WebP、存入对象存储、页面用稳定地址，浏览器再做本地磁盘缓存。经服务端代理远程抓取时，代理要读完整个图片才返回，超时可达十几秒。",
    "## 相关\n\n- [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7)\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C)\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B)\n- [页面变慢先查每页鉴权与无分页拉取](/wiki/agent-session/as-concept-%E9%A1%B5%E9%9D%A2%E5%8F%98%E6%85%A2%E5%85%88%E6%9F%A5%E6%AF%8F%E9%A1%B5%E9%89%B4%E6%9D%83%E4%B8%8E%E6%97%A0%E5%88%86%E9%A1%B5%E6%8B%89%E5%8F%96)"
  ]
},
{
  "id": "as-concept-条件-return-前必须调用所有-hooks",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "条件 return 前必须调用所有 hooks",
  "oneLiner": "**进入子层白屏、content area 全空、React 渲染 crash，若组件里有「提前 return」，第一嫌疑是 hooks 调用顺序被破坏，而不是后端数据格式。** 修法是把子层用到的 `useState / useRef / useEffect / useCallback` 全部移到任何条件 `return` 之前。",
  "body": [
    "## 症状与机制\n\n- 初始在总览层：`navStack.length === 0` → 执行到 `if (isAtRoot) return (...)`\n- 子层用到的 hooks 写在条件 return **之后**，这一轮根本没被调用\n- 点击进入下一层：不再提前 return，React 发现「这个组件比上次多调用了一批 hooks」\n- React 判定 hook 顺序损坏 → 渲染崩溃 → 白屏\n\n关键点：**hooks 必须在每次 render 时以相同顺序、相同数量调用**，不能放在条件 return 后面。这是组件结构问题，不是状态数据问题。",
    "## 排查顺序（避免查错方向）\n\n1. 先看组件有没有「条件 return + 后面还有 hooks」的结构 —— 这是最低成本的一刀\n2. 再排除后端：command 返回格式不符、参数反序列化 panic\n3. 环境噪音要认出来：非 Tauri 环境（普通浏览器开 `localhost`）报 `Cannot read properties of undefined (reading 'invoke')` 是**预期行为**（没有 `__TAURI__`），不是 root cause",
    "## 相关\n\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) —— 同源：前端状态生命周期问题，症状都在界面上、根因不在数据\n- 讲bug先讲现象再讲根因\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 同一类「能力看似就绪但对面不认」：这里的不认账方是运行时/构建器\n- [图片粘贴要上传对象存储换永久URL](/wiki/agent-session/as-concept-%E5%9B%BE%E7%89%87%E7%B2%98%E8%B4%B4%E8%A6%81%E4%B8%8A%E4%BC%A0%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%8D%A2%E6%B0%B8%E4%B9%85URL)\n- 父组件每渲染生成新对象会触发effect循环 —— 同属「React 渲染/依赖不稳定」的静默故障"
  ]
},
{
  "id": "as-concept-流式更新要合并字段而非替换对象",
  "updatedAt": "2026-09-14",
  "wikiSlug": "agent-session",
  "term": "流式更新要合并字段而非替换对象",
  "oneLiner": "**流式渲染时 `arr[last] = { role, content }` 是整体替换，会把同一对象上后加的 `thinking` 字段整个丢掉；增量更新必须写成 `{ ...prev, content }`。**",
  "body": [
    "## 一、Bug 形态\n\n```js\n// 新增字段\ninterface ChatMessage { role; content; thinking?: string }\n\n// 出错的地方：整体赋值，不是合并\nupdated[updated.length - 1] = { role: \"assistant\", content: assistantContent };\n```\n\n时序上只坏一瞬间：\n\n```\nt=0s    思考事件涌入（617 个）→ thinking 累积到 1742 字   ✅\nt=10s   第一个 text 事件到达  → thinking 被整个清空       ❌ 就这一瞬间\nt=10s+  后续 text 事件        → 只更新 content\n```",
    "## 二、为什么特别隐蔽\n\n- **时间窗口极窄**：只在「思考流结束、正文第一个分片到达」的那一帧触发。\n- **只在有思考的请求里出现**：上游触发思考是概率性的（实测 4 次里 3 次有），无思考的请求完全正常，看起来像是\"偶发\"。\n- **传输层是无辜的**：用页面内 `fetch` 直接抓流验证，后端确实发了 N 个 thinking 事件、前端也确实显示过。问题不在网络、不在上游，而在本地 state 更新方式。",
    "## 三、通用规则\n\n**给已有对象新增可选字段时，任何「整体赋值」的更新点都是定时炸弹。** 流式 / 增量更新一律 spread 合并（`{ ...prev, [field]: value }`），或者用不可变更新工具。这类 bug 不会报错，只会静默丢字段。",
    "## 相关\n\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8)（同一天的前端状态与动画问题）\n- 讲bug先讲现象再讲根因"
  ]
},
{
  "id": "as-concept-浅层改-URL-不会切换组件",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "浅层改 URL 不会切换组件",
  "oneLiner": "**用浅层 URL 变更（`history.pushState` / 框架的 shallow routing）实现「选中就换地址」时，地址栏变了但组件树没变。** 任何写在目标路由组件里的 effect（例如 `setContentContext`）都不会执行，于是出现「内容看得见，AI 却认为未绑定」的双状态。",
  "body": [
    "## 实测形态：/clips 根页面 vs /clips/[id] 详情路由\n\n- `/clips` 根页面点击剪藏后，只做浅层 URL 变更，用户**始终停留在根页面组件**上。\n- 正文能正常显示：它来自 `/api/clips/:id`。\n- 上下文绑定 `setContentContext` 只写在 `ClipDetailClient.tsx`（详情路由组件）里 → 永远不会执行。\n- 对照检查 notes、feeds 都有绑定，只有 clips 根页面有这个缺口。\n\n修法：在**真正渲染内容的那一层**补上与详情路由一致的绑定 effect（跟随选中项，取消选中/卸载时清空）；或者让选中真正走路由切换。",
    "## 可迁移的判断\n\n- 「同一个对象，界面显示有、下游却认为没有」这类**双状态**，先问：这两个状态是不是由同一份组件生命周期的 effect 驱动的？\n- 有「根页面 + 详情路由」两种入口的模块，绑定逻辑必须两处都有，或者下沉到共用的渲染层。只写在一处，另一处就是静默缺口。\n- 浅层改 URL 的代价是：**URL 是给人看的，不是给组件树用的**。依赖「路由变了组件就会跟着重建」的假设会失效。",
    "## 相关\n\n- [改版后旧路由仍指向旧实现](/wiki/agent-session/as-concept-%E6%94%B9%E7%89%88%E5%90%8E%E6%97%A7%E8%B7%AF%E7%94%B1%E4%BB%8D%E6%8C%87%E5%90%91%E6%97%A7%E5%AE%9E%E7%8E%B0) —— 同族：入口指向的不是你以为的那份\n- [两个执行入口共用一套业务规则](/wiki/agent-session/as-concept-%E4%B8%A4%E4%B8%AA%E6%89%A7%E8%A1%8C%E5%85%A5%E5%8F%A3%E5%85%B1%E7%94%A8%E4%B8%80%E5%A5%97%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99) —— 同一取向：两条入口要么共用一层，要么必然漂移\n- [页面切换的四种刷新要分清](/wiki/agent-session/as-concept-%E9%A1%B5%E9%9D%A2%E5%88%87%E6%8D%A2%E7%9A%84%E5%9B%9B%E7%A7%8D%E5%88%B7%E6%96%B0%E8%A6%81%E5%88%86%E6%B8%85) —— 「地址变了」属于哪一种变化，要先分清\n- [改协议要同时改两端](/wiki/agent-session/as-concept-%E6%94%B9%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%90%8C%E6%97%B6%E6%94%B9%E4%B8%A4%E7%AB%AF)\n- 列表切换要用master-detail而非重建列表"
  ]
},
{
  "id": "as-concept-浮层要收敛到一个共享-primitive",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "浮层要收敛到一个共享 primitive",
  "oneLiner": "**所有弹出卡片（菜单/弹窗/下拉）应共用同一个 primitive，而不是每个局部各写一套。用户对这类浮层有一套固定规范，散着实现必然逐项漂移。**",
  "body": [
    "## 用户定的浮层规范\n\n- 浅色模式白色 raised 底\n- 点击其他区域可关闭\n- 默认从触发器「右下」弹出，符合右手习惯\n- 开/关都有过渡动画（不要 `display` 硬切）\n- 每个选项都有 icon",
    "## 共享 primitive 要承担的公共行为\n\n- portal 到 body + fixed 定位 + 视口夹取（clamp）\n- 外部点击、Escape 关闭；**嵌套时 Escape 只关最上层**（capture 阶段处理并阻止冒泡，避免一次 Escape 同时关掉下拉和整个弹窗）\n- 动画原点跟随 clamp 后的实际方向（被右边界拉左则 origin 切到 right，被底部拉上则切到 bottom），否则动效方向与弹出方向打架\n- 边界不只按 window：AI 栏/侧栏打开时，主工作区内的浮层要按主内容区域夹取，否则会压进 AI 栏",
    "## 相关\n\n- [UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F) —— 本条服务的主题：浮层规范要忠于原型\n- [隐藏态按钮要保留命中区](/wiki/agent-session/as-concept-%E9%9A%90%E8%97%8F%E6%80%81%E6%8C%89%E9%92%AE%E8%A6%81%E4%BF%9D%E7%95%99%E5%91%BD%E4%B8%AD%E5%8C%BA) —— 同属「浮层交互细节」\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1)\n- [可调与固定的边界按语义划分](/wiki/agent-session/as-concept-%E5%8F%AF%E8%B0%83%E4%B8%8E%E5%9B%BA%E5%AE%9A%E7%9A%84%E8%BE%B9%E7%95%8C%E6%8C%89%E8%AF%AD%E4%B9%89%E5%88%92%E5%88%86)\n- [骨架屏呼吸动画用独立亮度层](/wiki/agent-session/as-concept-%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%91%BC%E5%90%B8%E5%8A%A8%E7%94%BB%E7%94%A8%E7%8B%AC%E7%AB%8B%E4%BA%AE%E5%BA%A6%E5%B1%82) —— 同族：视觉结构复用同一套，动画只动会变的那一层"
  ]
},
{
  "id": "as-concept-滚动层会裁剪溢出内容，要与显示层拆开",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "滚动层会裁剪溢出内容，要与显示层拆开",
  "oneLiner": "**只要一个元素负责 `overflow-x: auto`，它就会裁剪超出边界的内容。** 所以「表格要能横向滚动」和「控制按钮要露在表格外侧」不能由同一个元素承担 —— 把 `.cm-md-table-wrap` 本身设成 `overflow-x: auto`，原本定位在表格上方/左侧的按钮就被裁掉了。",
  "body": [
    "## 症状\n\n给表格加横向滚动后，控制按钮消失（被裁），但按钮的定位值没改过。",
    "## 修法：拆成两层 DOM\n\n```html\n<div class=\"cm-md-table-wrap\">        <!-- 不滚动，负责让溢出内容可见 -->\n  <div class=\"cm-md-table-scroll\">    <!-- 只负责横向滚动 -->\n    <table class=\"cm-md-table\">...</table>\n  </div>\n</div>\n```\n\n- `.cm-md-table-wrap { overflow: visible; }`\n- `.cm-md-table-scroll { overflow-x: auto; max-width: 100%; }`\n- 按钮仍按**表格外侧**定位，不进滚动裁剪层，也不塞进单元格内容区。",
    "## 被否掉的方向：把按钮塞进单元格内部\n\n第一反应是「把按钮放进单元格里就不怕被裁」。**这是错的**：单元格内部空间有限，内容一多就遮挡表格内容（第一行/第一列内容短时才勉强能用）。**问题不该用「换个地方放」解决，而该用「把职责分开」解决** —— 滚动是一层，显示是另一层。",
    "## 可迁移的判断\n\n遇到「加了某个样式后，**别的东西**不见了」，先看这个样式是否引入了 `overflow` 裁剪。滚动容器天然是裁剪容器，把「需要溢出显示的元素」和「需要滚动的容器」放在同一层，冲突是必然的。",
    "## 相关\n\n- flex子项的百分比max-height不可靠 —— 同为「容器高度/裁剪导致的尺寸意外」，都要先问「约束施加在谁身上」\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1) —— 同类：动画/滚动这类视觉行为的实现层要单独考虑\n- [虚拟列表与布局动画不能同时接管位置](/wiki/agent-session/as-concept-%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E4%B8%8E%E5%B8%83%E5%B1%80%E5%8A%A8%E7%94%BB%E4%B8%8D%E8%83%BD%E5%90%8C%E6%97%B6%E6%8E%A5%E7%AE%A1%E4%BD%8D%E7%BD%AE) —— 同属「滚动/布局实现层的冲突」"
  ]
},
{
  "id": "as-concept-滚动条顶到固定栏要调视口而非隐藏滚动条",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "滚动条顶到固定栏要调视口而非隐藏滚动条",
  "oneLiner": "**「滚动条轨道穿过了顶部固定 toolbar」的正确修法是让滚动视口从 toolbar 下方开始（`margin-top: 46px`，滚动容器作为 flex 子项），滚动条天然不会顶到 toolbar。用 `scrollbar-width: none` 隐藏滚动条只是治标，还违背原型、丢掉了滚动位置反馈。**",
  "body": [
    "## 三个「看起来对」的伪修\n\n| 伪修 | 为什么不对 |\n|---|---|\n| 隐藏滚动条 | 治标，原型本就有滚动条 |\n| 给正文加 top padding | 滚动视口没变，轨道仍覆盖 toolbar 区 |\n| 内层 editor 高度 100% | 高度模型错了，只是视觉凑合 |",
    "## 验证要盯高度模型\n\n用运行时量测确认：滚动容器的 `top` 应等于 toolbar 的 `bottom`，且 `scrollbar-width` 不是 `none`。",
    "## 相关\n\n- 滚动层会裁剪溢出内容要与显示层拆开\n- 浮层要收敛到一个共享primitive"
  ]
},
{
  "id": "as-concept-焦点环画在圆角外会露出四角",
  "updatedAt": "2026-06-09",
  "wikiSlug": "agent-session",
  "term": "焦点环画在圆角外会露出四角",
  "oneLiner": "**「边框四角有奇怪的蓝色阴影」不是边框坏了，是 focus ring 画在圆角边框外侧：通用 `Input` 自带 `focus-visible:ring-3 focus-visible:ring-ring/50`，ring 在圆角外圈露出一圈蓝色。修法是针对这个输入框 `focus-visible:ring-0` 并保留蓝色边框，不要动通用组件。**",
  "body": [
    "## 怎么认出来\n\n- 现象集中在**四角**，不是整条边 —— 圆角处 ring 与边框之间露出的面积最大。\n- 只在**聚焦**时出现（点进输入框编辑时才看到）。\n- 追溯来源是**继承的通用样式**，不是这个组件自己写的边框。",
    "## 做法\n\n只改出问题的那一个输入框（例：简历名称）：\n\n```text\n保留蓝色边框\nfocus-visible:ring-0   去掉外圈 ring\n```\n\n不动通用 `Input` —— 否则会影响其它表单输入框的聚焦反馈。",
    "## 相关\n\n- 样式丢失先核对类名再怀疑缓存与权限 —— 同源：先确认是哪个样式在生效，再怀疑环境\n- 讲bug先讲现象再讲根因 —— 沟通侧：先说\"四角有蓝影\"，再说 ring\n- [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) —— 同一天、同一编辑器的另一处\"样式看起来不对\"\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1) —— 同一天同一编辑器的另一处「通用组件默认行为」问题\n- [可调与固定的边界按语义划分](/wiki/agent-session/as-concept-%E5%8F%AF%E8%B0%83%E4%B8%8E%E5%9B%BA%E5%AE%9A%E7%9A%84%E8%BE%B9%E7%95%8C%E6%8C%89%E8%AF%AD%E4%B9%89%E5%88%92%E5%88%86) —— 同源：改动要落在正确的那一层（单个输入框 vs 通用组件）"
  ]
},
{
  "id": "as-concept-父组件每渲染生成新对象会触发-effect-循环",
  "updatedAt": "2026-07-07",
  "wikiSlug": "agent-session",
  "term": "父组件每渲染生成新对象会触发 effect 循环",
  "oneLiner": "**「Maximum update depth exceeded」这类 React 无限更新，常见根因是引用不稳定：子组件在 `useEffect` 里回填草稿，父组件每次渲染都 `setItems` 生成新对象 → `selectedItem` 变化 → callback 变化 → effect 再跑，形成循环。**",
  "body": [
    "## 循环链\n\n```\n子组件 effect 回填本地草稿\n  → 调父组件更新回调\n  → 父组件 setItems([...]) 生成新对象/新数组\n  → selectedItem 引用变化\n  → 传给子组件的 callback 引用变化\n  → 子组件 effect 依赖变化，再次执行\n  → 回到第一步（无限）\n```",
    "## 判据与做法\n\n- 现象是 `Maximum update depth exceeded`，堆栈会指向某个在 effect 里反复触发的更新函数。\n- 关键是**引用稳定性**：父组件每渲染生成新对象/新数组，会让 `memo` 失效、让 effect 依赖「每次都变」。\n- 修法方向：内容没变就不要更新父 state（先比较再 set），或用稳定引用（`useCallback`/`useMemo`/规范化更新），并补一个锁住「内容没变不更新父 state」的测试。",
    "## 相关\n\n- 条件return前必须调用所有hooks —— 另一类 React 渲染期约束\n- [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1) —— 同属「整体替换 vs 稳定更新」问题\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB) —— 另一类 React effect / 状态回填的时序陷阱"
  ]
},
{
  "id": "as-concept-环境变量校验要按模块懒加载",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "环境变量校验要按模块懒加载",
  "oneLiner": "**把所有环境变量都设成「启动/初始化时必填」，会让还没开发到的模块阻塞已经可用的功能：只是想登录，Auth 初始化却因为 AI key、对象存储、邮件配置不齐而报错。正解是按模块懒加载——用到哪个模块才校验那组变量。**",
  "body": [
    "## > 同理：校验还该按运行范围（Production / Preview / 开发）分别要求，本地只该校验它真正会用到的那一组。",
    "## 症状\n\n`packages/shared/src/env.ts` 全局校验 → 只做账号密码登录也要求 AI / R2 / Resend 配置齐全，否则启动即炸。",
    "## 按模块拆\n\n| 模块 | 需要的变量 |\n|---|---|\n| Auth | `DATABASE_URL`、`NEXTAUTH_SECRET`、`NEXTAUTH_URL`、OAuth 相关 |\n| AI | 用到时才校验 AI key |\n| 文件上传 | 用到时才校验对象存储（R2 等） |\n| 邮件 | 用到时才校验 Resend |\n\n短期可先填占位值让流程不炸，长期把校验拆开，避免未开发模块阻塞。",
    "## 相关\n\n- Agent harness 要隔离复现可收尾 —— 同类：配置/环境的作用域要按使用场景隔离，而不是全局一刀切\n- [依赖版本要锁主版本而非一律取最新](/wiki/agent-session/as-concept-%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E8%A6%81%E9%94%81%E4%B8%BB%E7%89%88%E6%9C%AC%E8%80%8C%E9%9D%9E%E4%B8%80%E5%BE%8B%E5%8F%96%E6%9C%80%E6%96%B0) —— 同属「环境不一致导致的漂移」\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 变量声明了不够，启动流程那个「认账方」才决定它是否真的生效"
  ]
},
{
  "id": "as-concept-登录发起与回调必须同域名",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "登录发起与回调必须同域名",
  "oneLiner": "**看到 `InvalidCheck: pkceCodeVerifier value could not be parsed` 这类登录报错，先查「发起登录的域名」和「回调回来的域名」是否一致。PKCE 的 code verifier 存在发起时那个域名下的 cookie 里，跨域名回调就读不到，校验必然失败。**",
  "body": [
    "## 判断依据\n\n看日志里这两个域名是否相同：\n\n- 开始登录请求的域名\n- 回调回来的域名\n\n常见成因：从临时部署域名（如 `xxx-q1u6nmek1-xxx.vercel.app`）点了登录，但 NextAuth / Google 回调回到了正式域名（`xxx.vercel.app`）。两个域名 cookie 不互通 → 报 `error=Configuration`。",
    "## 处理\n\n1. 只从正式域名入口登录（无痕窗口，或清掉相关 cookie 后重试）。\n2. Google Console 里回调地址只保留正式那条：`https://<正式域名>/api/auth/callback/google`。\n3. 注意这既不是「Google client 配错」，也不是「数据库没填」——是登录流程跨了两个域名。",
    "## 相关\n\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86)\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)\n- [接口验证通过不等于浏览器已登录](/wiki/agent-session/as-concept-%E6%8E%A5%E5%8F%A3%E9%AA%8C%E8%AF%81%E9%80%9A%E8%BF%87%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%B2%E7%99%BB%E5%BD%95) —— 同一条登录链路的两个独立环节（回调域名 / 会话建立）\n- [凭据正确却被拒先查登录校验哪个字段](/wiki/agent-session/as-concept-%E5%87%AD%E6%8D%AE%E6%AD%A3%E7%A1%AE%E5%8D%B4%E8%A2%AB%E6%8B%92%E5%85%88%E6%9F%A5%E7%99%BB%E5%BD%95%E6%A0%A1%E9%AA%8C%E5%93%AA%E4%B8%AA%E5%AD%97%E6%AE%B5) —— 同为「认证失败但根因不在密码」"
  ]
},
{
  "id": "as-concept-离线存储的三个等级",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "离线存储的三个等级",
  "oneLiner": "**「加缓存」不是一个档位：从会话缓存到完整离线编辑差三个等级，实现与风险都不同 —— 先说清要哪一级，再动手。**",
  "body": [
    "## | 等级 | 能力 | 代价 |\n|---|---|---|\n| 统一会话缓存 | 返回已访问页面立即显示，刷新后丢失 | 内存 Map + 请求去重 + 后台刷新 |\n| 持久化只读缓存 | 刷新/断网后仍可阅读最近内容 | IndexedDB；仍不能可靠离线编辑 |\n| 完整离线存储 | 断网可增删改，联网后同步 | Service Worker + 离线操作队列 + 冲突合并 |\n\n完整离线存储的四个部分：持久化数据层（IndexedDB）、应用外壳离线化（Service Worker / Cache Storage，否则断网连页面都打不开）、离线修改队列、同步与冲突处理（版本号 / `updatedAt` / 内容合并）。\n\n判据：\n\n- 缓存解决的是「有网络时把等待从用户面前挪到后台」，**不会让第一次请求凭空消失**，也不消除鉴权与数据库的真实耗时。\n- 完整离线编辑涉及临时 ID、同步队列、版本冲突、附件同步，与「页面切换慢」不是同一个问题，不要塞进同一个 Issue。\n- 私有内容缓存必须按账号隔离（`userId + resourceId`），登出/切号清空；私人笔记不能进公共 CDN 缓存。\n- 列表只缓存轻量字段（标题、摘要、更新时间），正文按需加载。",
    "## 相关\n\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C)\n- [保存失败要落本地草稿并自动重试](/wiki/agent-session/as-concept-%E4%BF%9D%E5%AD%98%E5%A4%B1%E8%B4%A5%E8%A6%81%E8%90%BD%E6%9C%AC%E5%9C%B0%E8%8D%89%E7%A8%BF%E5%B9%B6%E8%87%AA%E5%8A%A8%E9%87%8D%E8%AF%95)\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9)\n- [清理客户端缓存先分清哪层可丢](/wiki/agent-session/as-concept-%E6%B8%85%E7%90%86%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98%E5%85%88%E5%88%86%E6%B8%85%E5%93%AA%E5%B1%82%E5%8F%AF%E4%B8%A2)"
  ]
},
{
  "id": "as-concept-移动应用正式分发需要签名",
  "updatedAt": "2026-07-07",
  "wikiSlug": "agent-session",
  "term": "移动应用正式分发需要签名",
  "oneLiner": "**iOS 和 Android 的正式安装包都需要签名。签名 = 给 App 盖一个「开发者私章」，系统用它确认：包是谁发布的、后续更新是不是同一发布者、包有没有被篡改。**",
  "body": [
    "## 两种包\n\n| | Debug 包 | Release 包 |\n|---|---|---|\n| 签名 | 系统临时 debug 签名 | 你的 keystore |\n| 用途 | 开发调试、装机测试 | 正式分发 |\n| 限制 | 不能作为正式分发 | 升级须用同一把 keystore，否则系统认为「不是同一个 App」而更新失败 |\n\nAndroid 的 keystore 通常是 `.jks` / `.keystore`，是那把「私章」文件：**丢了影响以后发新版，泄露了别人可能冒充你发包。**",
    "## 做法\n\n- 分两段推进：先接通 **debug / 本地 APK 安装验证**，确保能跑；再补 **release 签名 APK/AAB**。\n- release 阶段自动检查 keystore 是否存在，不存在就引导生成，并把敏感文件放到**不提交**的位置。",
    "## 相关\n\n- 真机白屏先分清Debug包与证书\n- [一次性凭证拿到就落盘](/wiki/agent-session/as-concept-%E4%B8%80%E6%AC%A1%E6%80%A7%E5%87%AD%E8%AF%81%E6%8B%BF%E5%88%B0%E5%B0%B1%E8%90%BD%E7%9B%98)"
  ]
},
{
  "id": "as-concept-终态已到达后补写不能覆盖它",
  "updatedAt": "2026-08-01",
  "wikiSlug": "agent-session",
  "term": "终态已到达后补写不能覆盖它",
  "oneLiner": "**流式协议里\"权威终态\"（`turn.completed`）到达后，尾部的 EOF / 传输错误 / 迟到分片都不能把状态改回进行中或失败 —— 否则用户看到\"已完成的回答被截断成半截 + 卡住\"。判据：状态收敛点要前移到终态事件，而不是等流自然读完。**",
  "body": [
    "## 缺陷形态\n\n```text\nAgent 已完成 → 数据库已存完整回复 → Langfuse trace 完整 → HTTP 200\n→ 但读 SSE 尾部/EOF 时发生 transport error\n→ 旧代码进入 catch，用\"不完整的流式内容 + failed 状态\"覆盖已收到的完成态\n→ Web 显示半截内容或像卡住\n```\n\n关键认知：**HTTP 200 只代表响应头成功，不保证 SSE body 能读完。**\n\n第二个变体：terminal 到了但 `store.status` 仍在等 trailing `result` / EOF 才转 idle → 正文已经出现，停止按钮却一直保留。修法同样是**把结算点前移到 `turn.completed`**，并对已收到终态后的错误做 lifecycle reconciliation（保留 completed，不让 catch 覆盖）。",
    "## 相关\n\n- 中间进展与最终回答要按phase区分 —— 同一链路：终态只认 `turn/completed`，`idle` 不能当结束\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) —— 同一取向：迟到的写不能覆盖更新的权威状态\n- [停止与发送原地互换要加点击守卫](/wiki/agent-session/as-concept-%E5%81%9C%E6%AD%A2%E4%B8%8E%E5%8F%91%E9%80%81%E5%8E%9F%E5%9C%B0%E4%BA%92%E6%8D%A2%E8%A6%81%E5%8A%A0%E7%82%B9%E5%87%BB%E5%AE%88%E5%8D%AB) —— 状态收敛不及时暴露在 UI 上的另一形态\n- [权威终态到达后迟到的写不能覆盖它](/wiki/agent-session/as-synthesis-%E6%9D%83%E5%A8%81%E7%BB%88%E6%80%81%E5%88%B0%E8%BE%BE%E5%90%8E%E8%BF%9F%E5%88%B0%E7%9A%84%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83)\n- [收尾要落到确定状态](/wiki/agent-session/as-synthesis-%E6%94%B6%E5%B0%BE%E8%A6%81%E8%90%BD%E5%88%B0%E7%A1%AE%E5%AE%9A%E7%8A%B6%E6%80%81)"
  ]
},
{
  "id": "as-concept-编辑即时反馈与落盘延迟分离",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "编辑即时反馈与落盘延迟分离",
  "oneLiner": "**不要为了「保存及时」改成每个字符都落盘。** 正确拆法是：**内存立即更新**（UI / 切换 / 当前状态马上最新），**落盘仍 debounce**（1000ms → 300-500ms），**切笔记 / blur / 卸载时立即 flush**。",
  "body": [
    "## 为什么每字落盘不行\n\n一次保存不是轻量 state 更新，链路是：\n\n```\n读当前 vault 文件 → atomic 写 .md → 再读回完整 note → 对正文分词 → 更新 SQLite FTS 搜索索引\n```\n\n每个字符都调后端，在长笔记、中文输入、连续输入时会明显增加 IO 和索引压力，**也更容易制造写入乱序 race**（即 [延迟保存要捕获创建时的实体](/wiki/agent-session/as-concept-%E5%BB%B6%E8%BF%9F%E4%BF%9D%E5%AD%98%E8%A6%81%E6%8D%95%E8%8E%B7%E5%88%9B%E5%BB%BA%E6%97%B6%E7%9A%84%E5%AE%9E%E4%BD%93) 那类问题）。",
    "## 拆解表\n\n| 关注点 | 做法 |\n|---|---|\n| 用户感知 | 内存立即更新，UI 立刻反映 |\n| 持久化 | debounce 300-500ms |\n| 边界安全 | 切换 / blur / 卸载立即 flush |\n| 搜索索引 | 跟落盘节奏走，不跟按键走 |",
    "## 判断依据\n\n要改的是「前端感知立即保存」，不是「每字同步写文件 + 建索引」。当前 1 秒的主要问题**不是数据丢失，而是体感慢 + 切换边界风险**——所以优化方向是「内存 immediate + 落盘 300-500ms」，而不是取消 debounce。",
    "## 相关\n\n- [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81) —— 同源：编辑器里「界面显示」与「真实状态」是两件事，不能互相替代\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9)"
  ]
},
{
  "id": "as-concept-编辑器与只读渲染要分层",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "编辑器与只读渲染要分层",
  "oneLiner": "**编辑场景用完整编辑器引擎（Milkdown/ProseMirror），只读场景用轻量自研渲染器 —— 不要拿编辑器去渲染只读内容。**",
  "body": [
    "## 笔记编辑用 `@milkdown/crepe`（底层 ProseMirror）是对的；但对话回复、分享页这类只读场景不该复用它，三个硬伤：\n\n1. **实例开销**：一个 Milkdown 实例 = 一个完整 ProseMirror 编辑器（schema/transaction、光标选区、输入法、undo 栈）。对话页几十条消息各起一个实例，内存与初始化耗时都会爆。轻量渲染器每条消息只是一次纯函数解析。\n2. **流式天敌**：编辑器期望「拥有」文档状态，流式 delta 只能整篇 `setContent` 重灌 → 全量重建文档树 + DOM diff → 闪烁卡顿。它本来就不是为 token 流设计的。\n3. **包体积**：编辑器全家桶很大，只读场景不该背这个运行时。\n\n分层方式：\n\n| 场景 | 需求 | 用什么 |\n|---|---|---|\n| 笔记编辑 | 双向、可交互、光标/选区 | 完整编辑器 |\n| 分享页展示 | 单向、只读 | 轻量渲染器 |\n| 对话回复 | 单向、只读、**高频流式** | 轻量渲染器（与分享页共用一条管线） |\n\n判据：**看这个场景要不要「写」和「光标」，而不是看它显示的是不是 markdown。** 多个只读场景应共用同一条渲染管线，编辑器专心做编辑 —— 这也是「引擎不做建模器」的同一取向：各自干最擅长的事。\n\n相关：引擎不做建模器、[手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88)、兼容fallback会让内容重复渲染",
    "## 相关\n- [手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88)\n- [本地优先不等于纯文件](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%BA%AF%E6%96%87%E4%BB%B6)\n- [编辑器初始化会触发假保存](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BC%9A%E8%A7%A6%E5%8F%91%E5%81%87%E4%BF%9D%E5%AD%98)\n\n- 引擎不做建模器\n- 兼容fallback会让内容重复渲染"
  ]
},
{
  "id": "as-concept-编辑器初始化会触发假保存",
  "updatedAt": "2026-07-07",
  "wikiSlug": "agent-session",
  "term": "编辑器初始化会触发假保存",
  "oneLiner": "**富文本/Markdown 编辑器加载一篇笔记时，会把 Markdown 解析成内部结构再序列化回来，过程中「整理格式」（表格空格、分隔线长度、checkbox 写法）——内容语义没变，但字符串变了。如果保存逻辑只看「字符串不同」，就会把「打开」误判成「用户编辑了」，触发一次假保存。**",
  "body": [
    "## 假保存的连锁后果\n\n```\n打开笔记 → 编辑器 round-trip → 字符串变化 → 误判为用户编辑\n  → 发保存请求 → 数据库 updatedAt 变新\n  → 列表按 updatedAt 倒序 → 当前卡片被弹到顶部\n  → 左侧列表滚动位置跳走（看起来像「滚动记忆失败」）\n```\n\n所以「点开卡片后列表跳位」的根因往往不是滚动记忆，而是**假保存改了排序字段**。",
    "## 修法\n\n1. **忽略初始化那次更新**：已有内容的笔记，编辑器初始化时的第一次 Markdown 更新直接丢弃；只有之后真正编辑产生的更新才保存。空笔记仍保留第一次真实输入保存，避免新建丢内容。\n2. **当前正在查看/编辑的项不因自动保存即时重排**：列表默认仍按 `updatedAt` 排序，但被选中的卡片不立刻弹到顶部，等离开、切换区、刷新列表时再重排。这样既保留「最近编辑在上面」，又不跳动。\n3. 更彻底的方向是让左侧列表**根本不重建**（见 master-detail），而不是「滚走后再恢复」。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 「字符串 diff」是「用户是否编辑」的代理，只在格式整理处分叉\n- 列表切换要用master-detail而非重建列表 —— 让左侧列表根本不重建，比「滚走后再恢复」更彻底\n- 讲bug先讲现象再讲根因"
  ]
},
{
  "id": "as-concept-编辑器显示不能脱离真实光标状态",
  "updatedAt": "2026-06-16",
  "wikiSlug": "agent-session",
  "term": "编辑器显示不能脱离真实光标状态",
  "oneLiner": "**只要「显示什么」依赖「光标在哪」，一旦 selection 状态同步滞后，画面就和真实编辑状态分叉 —— 症状是标记莫名消失、或看起来正常但输入落到错误位置，而内容本身没丢。** 稳妥做法是让显示少依赖光标，或让落点直接由真实 selection 决定。",
  "body": [
    "## 案例一：标题的 `#` 被误隐藏\n\nlive preview 把标题 `## ` 前面的 `HeaderMark` 节点 `Decoration.replace({})`（画面上替换为空），本意是「光标在本行显示 `##`、离开则隐藏」。这个判断依赖 `cursorLine`（CodeMirror 当前 selection 同步出的光标行）。偶发情况下 selection / decoration 状态不同步，代码误判「光标不在这一行」，于是 `## ` 被隐藏，只剩放大的标题正文。\n\n- 不是 markdown 内容真的丢了，也不是保存层问题 —— **只是显示层把 `#` 藏了**\n- 修法：标题仍按 `## ` 放大，但不再隐藏 `HeaderMark`，让 `#` 一直显示（放弃「隐藏标记」这个特性，换稳定性）",
    "## 案例二：toolbar 插入的 checkbox 光标落点错位\n\n点 toolbar 的 checkbox 后画面看起来正常（只有一个 checkbox），但真实光标 / selection 仍在 task marker **前面**；用户接着输入，文字被插到 `- [ ]` 前面，变成 `看- [ ]`。\n\n- 判定要点：**「点击后看起来正常」不代表状态正确** —— 要区分「视觉已更新」与「selection 已更新」\n- 症状形态与案例一同源：显示层与真实编辑状态不同步",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该 synthesis 的一处实例：显示要由真实光标位置决定\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) —— 同源：界面状态与真实状态的时序错位\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 本条是该骨架的一处实例\n- 条件return前必须调用所有hooks —— 同属「子层/编辑器状态与显示不一致」\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB)\n- [手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88) —— 同属编辑器内核 / 规则层的职责划分\n- [解析器卡死看游标是否推进](/wiki/agent-session/as-concept-%E8%A7%A3%E6%9E%90%E5%99%A8%E5%8D%A1%E6%AD%BB%E7%9C%8B%E6%B8%B8%E6%A0%87%E6%98%AF%E5%90%A6%E6%8E%A8%E8%BF%9B)"
  ]
},
{
  "id": "as-concept-编辑重发与重新生成要先截断后续轮次.md",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "编辑重发与重新生成要先截断后续轮次.md",
  "oneLiner": "**编辑一条历史消息重发、或对某轮点「重新生成」时，必须先把该轮次及之后的所有消息从会话里截断（DB 层 `truncateFromTurn` + 模型上下文同步截断），再发送新内容；否则是在对话尾部追加，历史越改越长、模型上下文里同时存在新旧两个版本。**",
  "body": [
    "## 要点\n\n- **截断是双份的**：存储层删掉原轮次及之后的消息，模型上下文也必须同步截断 —— 只删一边会出现「界面干净了但模型仍看得见旧答案」。\n- **「重新生成」不该只对最后一条可用**：任意历史轮次都可以，前提是有截断能力。\n- 交互上要给出明确状态（如「正在编辑之前的消息」提示芯片 + 可取消），否则用户不知道自己在改写历史。",
    "## 相关\n\n- Agent会话要按树保存而不是消息列表 —— 想保留分支时，截断就不该是唯一手段\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9)\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB)\n- [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83)"
  ]
},
{
  "id": "as-concept-聊天记录要从底部锚定加载",
  "updatedAt": "2026-07-08",
  "wikiSlug": "agent-session",
  "term": "聊天记录要从底部锚定加载",
  "oneLiner": "**进入聊天会话时应该「直接定位到最下方、向上翻才加载更早消息」，而不是「先全屏 loading、加载完再滚到底」。** 后者会表现为：每次点击先黑屏，再从上往下刷内容，和微信 / Codex 这类成熟产品的方向相反。",
  "body": [
    "## 两个独立毛病\n\n| 现象 | 根因 | 修法 |\n|---|---|---|\n| 点进去先黑屏 | 聊天页有一个**全屏 `loading` 门闩**，要等「读最近消息 + 读 session + 读 file tree + 检查是否还有更早消息 + 设置顶部滚动目标」全做完才渲染 | 永不显示全屏 loading：先渲染空聊天框架和输入栏，再后台查 |\n| 内容从上往下刷 | 加载方向反了 | **底部锚定**：进入即定位最下方，上滑才加载旧消息 |",
    "## 正确顺序\n\n1. 进入会话永远不黑屏、不显示全屏 loading。\n2. 先渲染空聊天框架 + 输入栏。\n3. 本地最近若干条（如 5 条）读到后立即显示。\n4. 旧消息、文件树、历史列表全部**后台**查。\n5. 上滑才加载旧消息。\n6. 不再用「加载完再滚到底部」，改为底部锚定。\n\n判据：**「加载」是后台行为，不该挡住首屏。** 任何需要「等一堆 IO 完再显示」的列表页，都该先出一个骨架/容器。",
    "## 相关\n\n- 列表切换要用master-detail而非重建列表 —— 同为「不要为了数据把整个视图重建/清空」\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1) —— 同族：交互状态缺失导致观感断裂"
  ]
},
{
  "id": "as-concept-虚拟列表与布局动画不能同时接管位置",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "虚拟列表与布局动画不能同时接管位置",
  "oneLiner": "**虚拟滚动用绝对定位 + `transform` 控制卡片位置，布局动画（如 Motion 的 `layout`）也修改 position/`transform` —— 两者同时接管布局就会抖动或位置错位。**",
  "body": [
    "## - 普通列表：动画库管进入、退出和补位（`initial`/`animate`/`exit` + `AnimatePresence` + `layout`）。\n- 虚拟列表：位置交给虚拟滚动，动画只管透明度、缩放等视觉属性，不碰布局。\n- 引入动画库的代价是新增依赖与客户端包体，还要理解它的布局动画机制；只有多个列表都要统一增删排序动画时才划算，单个列表用 CSS 就够。\n- 虚拟滚动本身解决的是「几千条数据不渲染几千个 DOM」：只创建可视区附近的节点并复用，滚动时不断复用并计算位置。",
    "## 相关\n\n- 列表切换要用master-detail而非重建列表\n- [显示阈值应按元素可见性而非固定像素](/wiki/agent-session/as-concept-%E6%98%BE%E7%A4%BA%E9%98%88%E5%80%BC%E5%BA%94%E6%8C%89%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81%E6%80%A7%E8%80%8C%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%83%8F%E7%B4%A0)\n- [依赖版本要锁主版本而非一律取最新](/wiki/agent-session/as-concept-%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E8%A6%81%E9%94%81%E4%B8%BB%E7%89%88%E6%9C%AC%E8%80%8C%E9%9D%9E%E4%B8%80%E5%BE%8B%E5%8F%96%E6%9C%80%E6%96%B0)"
  ]
},
{
  "id": "as-concept-解析器卡死看游标是否推进",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "解析器卡死看游标是否推进",
  "oneLiner": "**流式渲染偶发\"卡死\"、CPU 打满，先怀疑解析循环有没有推进游标，而不是后端或模型。典型形态：某条分支既不消费输入也不前进 index，`while` 空转。**",
  "body": [
    "## 一次实例\n\n流式 Markdown 解析器死循环：\n\n```text\n模型流式输出列表\n→ 某一帧内容刚好停在 \"- \" / \"1. \" / \"# \"\n→ 列表解析器认为内容不完整（要求标记后必须已有内容）\n→ 段落解析器又拒绝把它当普通文本（拒绝列表前缀）\n→ 解析游标 index 没有前进\n→ while 永久空转 → 浏览器 renderer 100% CPU\n→ 后续 SSE terminal 无法处理 → 页面一直显示停止按钮\n```\n\n所以它表现得\"偶发\"：只有 React 刷新恰好撞上**未完成的 Markdown 标记**才触发。最小探针证实 `\"- \"` / `\"1. \"` / `\"# \"` 永久不返回，而完整的 `\"- item\"` 正常返回。",
    "## 可迁移的判断\n\n- **偶发 + CPU 高 + 后续事件全部不处理** = 同步循环卡住，不是网络问题。后续事件收不到处理，是因为主线程被占满。\n- 增量解析器必须保证**每条分支都推进游标**：要么消费至少一个字符，要么明确 `break`。多个解析器互相推诿（\"这不该我处理\"）时，兜底分支必须存在。\n- 流式输入会在任意字符处截断，解析器必须能处理**半截标记**（`\"- \"` 后面还没内容）。",
    "## 相关\n\n- 高频手势缩放不要走React状态 —— 同一族：主线程被同步计算占满\n- [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1) —— 流式链路上的另一处状态处理\n- 零延迟零尝试说明请求没发出去 —— 同为\"看起来卡住\"的不同层根因\n- [全绿的单测可能测的不是那条链路](/wiki/agent-session/as-concept-%E5%85%A8%E7%BB%BF%E7%9A%84%E5%8D%95%E6%B5%8B%E5%8F%AF%E8%83%BD%E6%B5%8B%E7%9A%84%E4%B8%8D%E6%98%AF%E9%82%A3%E6%9D%A1%E9%93%BE%E8%B7%AF)\n- [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83)"
  ]
},
{
  "id": "as-concept-跨源取数据要靠自建代理",
  "updatedAt": "2026-09-19",
  "wikiSlug": "agent-session",
  "term": "跨源取数据要靠自建代理",
  "oneLiner": "**本地不同端口 = 不同源。A 端口的看板要读 B 端口服务的数据，浏览器同源政策会拦下，除非对方显式放行。此时\"UI 做不出来\"的真相是\"数据拿不到\"，解法是在自己这边加一层代理，而不是改前端。**",
  "body": [
    "## 一、症状与误判\n\n自己写一个看板（8777）去读官方服务（3010）的数据，页面**能连上服务器但拿不到数据**，显示的内容要么是假的、要么只来自极少数放行的接口。\n\n容易被当成\"前端写得不好 / UI 不够好看\"，实际是**同源政策**在拦：隔壁楼的人来拿东西，除非对方明确欢迎，一律拦下。实测该服务**只对\"模型列表\"这一个接口放行**，其他全部默认拒绝。\n\n**判断动作**：先逐个接口试哪些能读通。如果只有个别接口通，问题不在前端代码。",
    "## 二、解法：加一层同源代理\n\n```\n你的看板  →  你自己的代理  →  官方服务\n（同源，放行）   （服务器间调用，无同源限制）\n```\n\n看板不直接请求官方服务，而是请求**同源的本地代理**，由代理在服务端去取官方数据再回传。服务端之间互相调用不受同源政策约束。\n\n落地通常是三件事：写一个小代理脚本（几十行，用系统自带 Python 即可）、把启动脚本从静态文件服务器换成这个代理、然后前端再谈样式与图表。",
    "## 三、连带的产品权衡\n\n走代理之后，原本每次都要手动输入的 API Key 可以存在代理侧，打开看板就有数据。**代价是密钥落在本地文件里** —— 这是「免密便利」与「手动输入更保险」之间的选择，属于需要用户本人拍板的安全取舍，不能替他默认。",
    "## 相关\n\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)（同为先定位故障层）\n- 零延迟零尝试说明请求没发出去（另一类\"看起来是网络，其实是本地\"）\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-过期响应不能覆盖当前编辑内容",
  "updatedAt": "2026-06-05",
  "wikiSlug": "agent-session",
  "term": "过期响应不能覆盖当前编辑内容",
  "oneLiner": "**「刚写的字被回退」不是文件写错了，而是异步保存返回顺序不可靠：旧请求晚回来时，把过期的 `content_md` 又合并回了前端内存。** 修法：本地输入给正文版本号 +1，发起保存时记住版本号，返回时若当前版本已更新，则**不允许这次返回覆盖正文**。",
  "body": [
    "## 一、链路与故障点\n\n```\nCodeMirror（受控，value={note.content_md}）\n  ← React state（内存里的笔记对象）\n  ← 后台 debounce 写 vault 文件\n```\n\n用户输入 A → 内存 A → 后台保存 A；继续输入 B → 内存 AB → 保存 AB。**若「保存 A」比「保存 AB」更晚返回**，旧代码把 `{...n, ...patch, updated_at: now}` 合并回内存，`patch` 里带着旧 `content_md`，CodeMirror 收到 `value=A`，画面回退。",
    "## 二、为什么保存返回本来就要回写内存\n\n保存成功带回的是**只有后端才知道的结果**：`updated_at`（列表排序/时间显示）、`title` 变化导致的 slug / 文件名变化（`untitled.md` → `项目复盘.md`）、`content_loaded` 状态。所以不能「保存返回就一律不回写」。\n\n正确边界：\n\n| 内容 | 能否回写 |\n|---|---|\n| `updated_at` / slug / id / `content_loaded` | ✅ 回写 |\n| `content_md` | 仅当**没有更晚的本地输入**时才允许 |\n\n一句话：**保存成功可以更新元信息，但不能用过期正文覆盖正在编辑的正文。**",
    "## 三、同源的显示问题：live preview 由光标位置决定\n\nMarkdown live preview 里 `---` 与横线同时出现，是因为规则写成了「光标在本行：显示 `---`，但仍然画横线」。改成**光标在本行只显示源码 `---`，离开本行才隐藏源码、只显示渲染结果**，才是 Obsidian 那种体验。\n\n两者共享同一主题：**编辑器显示什么，要由「本地最新状态 / 光标位置」决定，而不是由过期的远端返回或固定的渲染规则决定。**",
    "## 相关\n\n- [延迟保存要捕获创建时的实体](/wiki/agent-session/as-concept-%E5%BB%B6%E8%BF%9F%E4%BF%9D%E5%AD%98%E8%A6%81%E6%8D%95%E8%8E%B7%E5%88%9B%E5%BB%BA%E6%97%B6%E7%9A%84%E5%AE%9E%E4%BD%93) —— 同一保存链路的另一种乱序：写错目标对象\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB) —— 延迟多久、延迟什么\n- [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1) —— 另一类「静默覆盖」的更新 bug\n- 编辑重发与重新生成要先截断后续轮次"
  ]
},
{
  "id": "as-concept-过程展示按时间线分层而不是分组聚合",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "过程展示按时间线分层而不是分组聚合",
  "oneLiner": "**Agent 的执行过程应按「一次 turn 的完整时间线」呈现，而不是把 reasoning 和 tool call 各自聚合成组。层级：外层 `Agent Turn`（折叠容器）→ 逐个 `Generation` → 其中穿插 reasoning 与 tool call（保留视觉区别，但不分组）。**",
  "body": [
    "## 具体取舍\n\n- 删掉「已完成 N 步操作」这种**聚合层**：聚合把顺序信息吃掉了，用户要的是\"第几步做了什么\"。\n- reasoning 与 tool call **同属一条时间线**，不再分别包组；但视觉上要区分（reasoning 用引用样式 `｜`，tool call 用工具图标 + 状态）。\n- **工具详情在调用过程中展开，最终输出时折叠**：执行时用户需要看到细节，完成后需要的是结果。\n- final generation 出现后，前面整个 `agent.turn` 自动折叠；用户重新展开时应**直接完整展示**，不再有二级\"查看详情\"。\n- 历史对话也要能恢复完整过程（不能只在流式当下有，回看就丢）。",
    "## 判据\n\n「不区分思考组和动作组，但仍区分事件类型」—— 时间线顺序是信息，事件类型是语义，两者都要保留；被砍掉的只是冗余的分组容器。",
    "## 相关\n\n- 中间进展与最终回答要按phase区分 —— 数据层要先能区分过程与最终回答\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1) —— 折叠交互的实现细节\n- 浮层要收敛到一个共享primitive —— 同一取向：层级收敛，而不是叠加容器\n- [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83)\n- Agent会话要按树保存而不是消息列表"
  ]
},
{
  "id": "as-concept-运行时依赖属于平台不属于业务代码",
  "updatedAt": "2026-07-07",
  "wikiSlug": "agent-session",
  "term": "运行时依赖属于平台不属于业务代码",
  "oneLiner": "**构建时冒出 `hermes-engine` 之类你不认识的依赖，先分清它是「平台/运行时自带的」还是「业务代码引入的」——多半是前者，不要去动它。**",
  "body": [
    "## 判据\n\n- React Native / Expo 原生 app 不是纯网页，手机上跑 JS 需要一个 JS 引擎。RN 现在默认用 **Hermes**（启动快、内存低、和新架构配合好），构建时 iOS 原生工程要把它作为原生依赖装进去，所以会去下载 `hermes-ios-*.tar.gz`。\n- 这类依赖**不是新加的东西**，也和业务代码无关，是 RN 0.83 / Expo 55 这套运行时的正常依赖。",
    "## 做法\n\n- 想「不用 Hermes」理论上可以改回 JavaScriptCore，但**不建议**：会影响原生配置、性能、兼容性。\n- 排查构建问题时，先把「平台自带」和「业务引入」分开；真正的故障（如下载慢、中文路径编码）往往在别处，而不是引擎本身坏了。",
    "## 相关\n\n- [依赖版本要锁主版本而非一律取最新](/wiki/agent-session/as-concept-%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E8%A6%81%E9%94%81%E4%B8%BB%E7%89%88%E6%9C%AC%E8%80%8C%E9%9D%9E%E4%B8%80%E5%BE%8B%E5%8F%96%E6%9C%80%E6%96%B0)\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)"
  ]
},
{
  "id": "as-concept-进度条要由真实进度驱动",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "进度条要由真实进度驱动",
  "oneLiner": "**「点击后加载动画」不能用无限循环动画假装：要么绑定真实加载状态，要么基于经过时间连续推进。用 rAF 的帧间隔（`dt ≈ 16ms`）去判断 60ms 定时器，条件永远不成立。**",
  "body": [
    "## 一、需求本身有四个约束\n\n1. 覆盖范围要完整 —— 侧边栏的品牌栏与主 nav 是**两个独立元素**（只是恰好都高 60px、都有底边框），只给主 nav 挂动画，左边自然是空的。\n2. 要**一直从左到右扫过**，不是闪烁。\n3. 扫到**尽头时刚好加载完成** —— 与加载状态同步。\n4. 到尽头后**停在满格**，等加载完才消失。",
    "## 二、坏掉的推进逻辑（根因）\n\n```js\nconst dt = now - last;   // ≈ 16ms（两帧间隔）\nlast = now;              // 每帧都重置\nif (dt >= TICK_MS) {     // 16 >= 60 → 永远 false\n  setProgress(...)\n}\n```\n\n两个叠加错误：\n\n- `dt` 单帧只有 ~16ms，**永远达不到 60ms**，`setProgress` 在绝大多数帧里根本不执行；\n- `last = now` 每帧重置，`dt` 永远累积不起来。\n\n真正把进度推到 100% 的是 `pathname` effect 里的一次性赋值。于是视觉上就是 **0 → 100%，中间没有任何帧** —— 这就是\"固定时间快速闪过、与加载不同步\"。\n\n**正确做法**：按**经过时间**做连续计算（`elapsed / duration`），而不是用帧间隔做定时判定。",
    "## 三、验证时的采样陷阱\n\n用 `MutationObserver` 观察 `style` 变化来采样进度，只拿到 4 个点 —— 因为 rAF 每帧写入相同的值会被浏览器合并，只有真正变化的属性才触发。要验证中间帧，得**连续读取**，不能依赖观察器。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该 synthesis 的一处实例：拿「帧间隔/循环动画」当真实进度\n- [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1)（同一天的前端状态更新问题）\n- 样式丢失先核对类名再怀疑缓存与权限（先确认元素是不是同一个）\n- 高频手势缩放不要走React状态（同类：高频更新不该驱动框架状态）"
  ]
},
{
  "id": "as-concept-隐藏态按钮要保留命中区",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "隐藏态按钮要保留命中区",
  "oneLiner": "**用 `pointer-events: none` 让 hover 才出现的按钮「不可点」，会让光标先落在该区域时事件被底下的链接/卡片吃掉——按钮随后出现也点不到，表现为「点三点菜单有时候没反应」。正解是按钮视觉隐藏但保留命中区（`pointer-events: auto`）。**",
  "body": [
    "## 症状与根因\n\n- 症状：卡片右侧的三点菜单有时点击无反应。\n- 根因：隐藏态按钮 `pointer-events: none`，事件穿透到底层元素。",
    "## 相关\n\n- 图片加载失败要可重试并升级到HTTPS\n- 浮层要收敛到一个共享primitive"
  ]
},
{
  "id": "as-concept-页面切换的四种刷新要分清",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "页面切换的四种刷新要分清",
  "oneLiner": "**「页面慢 / 数据没更新」这类问题，先要问清是哪一种「刷新」—— 四种刷新走的是四条完全不同的链路，混着讨论必然各说各话。**",
  "body": [
    "## 1. **页面切换**：点导航，Next.js 拉目标路由数据，浏览器不整页重启。\n2. **后台刷新数据**：先显示内存里的旧数据，再请求 API 取最新（stale-while-revalidate）。\n3. **浏览器整页刷新**：按 `⌘R`，React 与内存缓存全部重建。\n4. **后台任务刷新**：Cron 抓订阅、生成摘要，与页面加载是另一套机制。\n\n推论：\n\n- 定位性能问题先测量属于哪一种。实测主要等待发生在 Next.js 路由切换与鉴权，而不是数据库查询 → 先做导航即时反馈 + 会话缓存，别急着上 Redis。\n- 「按 `⌘R` 后也要立即显示上次内容」需要持久化缓存（IndexedDB），复杂度与会话缓存不是一个量级，应拆成独立问题。\n- 拆 Issue 也按这个分界：后台任务调度 vs 前端导航/缓存/API 性能；可能共享数据库根因，但拿到证据前不要合并。",
    "## 相关\n\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C)\n- [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7)\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5)"
  ]
},
{
  "id": "as-concept-页面变慢先查每页鉴权与无分页拉取",
  "updatedAt": "2026-07-09",
  "wikiSlug": "agent-session",
  "term": "页面变慢先查每页鉴权与无分页拉取",
  "oneLiner": "**页面「整体卡」通常不是单点故障，而是三层叠加：① 服务端每个页面都先跑鉴权（被强制动态渲染，先等服务器 + 数据库）；② 客户端 shell 挂载后又补拉侧边栏数据；③ 列表接口没有分页，一次全量取回。数据越多越明显。**",
  "body": [
    "## 定位顺序\n\n1. 看浏览器网络，哪条最慢：`/login`、`/api/feeds` 还是 `/api/feed-entries` —— 一眼定位主瓶颈。\n2. 检查列表接口是否分页：无分页的 `findMany` 会把一个类型下的条目全拿回，还会额外查一次关联表（如算收藏状态），随数据量线性变重。\n3. 检查部署区域与数据库区域是否一致：跨区域往返会额外增加延迟。",
    "## 相关\n\n- [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87)\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C) —— 先分清卡在哪一层（服务端渲染/鉴权 vs 浏览器缓存），再谈优化"
  ]
},
{
  "id": "as-concept-首次内容事件不能无条件跳过",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "首次内容事件不能无条件跳过",
  "oneLiner": "**编辑器为了避免「刚打开就标记为已修改」，常会跳过第一次内容变更事件。但如果这次事件本身就是用户的真实输入（例如空正文里第一次粘贴图片），无条件跳过会把它整个丢掉，表现为「粘了图但保存不了」。判据应是「内容是否仍等于初始内容」，不是「事件序号」。**",
  "body": [
    "## 症状与根因\n\n- 症状：正文为空时粘贴图片，图片进了编辑器却没触发保存；后端 PATCH 本身允许 `content: \"\"` 或图片 markdown，不是 API 拒绝。\n- 根因：保存逻辑跳过 Crepe 编辑器的第一次 `markdownUpdated` 事件，本意是过滤「打开笔记时的初始化事件」。空正文场景下，首次粘贴图片的 markdown 恰好是第一次事件，被误判为初始化而丢弃。",
    "## 修法\n\n第一次事件只在**内容仍等于初始内容**时才跳过；若已从空内容变为 `![image](...)` 这类真实变更，则正常保存。",
    "## 相关\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 本条是该 synthesis 的一处实例：拿「事件序号」当内容是否变化的代理\n- [编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB)\n- [延迟保存要捕获创建时的实体](/wiki/agent-session/as-concept-%E5%BB%B6%E8%BF%9F%E4%BF%9D%E5%AD%98%E8%A6%81%E6%8D%95%E8%8E%B7%E5%88%9B%E5%BB%BA%E6%97%B6%E7%9A%84%E5%AE%9E%E4%BD%93)"
  ]
},
{
  "id": "as-concept-骨架屏呼吸动画用独立亮度层",
  "updatedAt": "2026-07-21",
  "wikiSlug": "agent-session",
  "term": "骨架屏呼吸动画用独立亮度层",
  "oneLiner": "**做骨架屏的呼吸/闪烁效果，要分两层：底层是始终不透明、不变化的灰色块；上层是一个与底层同形状的 `::after` 伪元素，颜色稍亮，只让它缓慢升降透明度。动画只动上层，底色永远不透明。**",
  "body": [
    "## ```text\n稍亮遮罩：  透明 → 微亮 → 透明     ← 唯一在动的\n固定底色：  始终不透明、不变化\n页面背景：  不会透出来\n```",
    "## 为什么不直接动整个骨架\n\n- **直接改整个骨架的透明度**：会露出后面的页面背景，出现「两层页面」的感觉，观感不稳定。\n- **`filter: brightness()`**：深浅主题下难以精确控制亮度，容易过曝或看不出变化。\n- **独立亮度层**：亮度变化被约束在一个不透明的底上，深浅主题各自调一层颜色即可。",
    "## 可迁移的判断\n\n**动画要只动「会变的那一层」，固定不动的部分保持不透明。** 形状与质感由复用真实卡片结构保证一致，动画层只负责节奏感——两件事分开，改一个不会破坏另一个。",
    "## 相关\n\n- 浮层要收敛到一个共享primitive —— 同族：视觉层复用同一套结构\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1) —— 另一条「动画状态要显式设计」的经验\n- 新建对话的hero要淡入入场而非加载态"
  ]
},
{
  "id": "as-concept-高频手势缩放不要走-React-状态",
  "updatedAt": "2026-06-05",
  "wikiSlug": "agent-session",
  "term": "高频手势缩放不要走 React 状态",
  "oneLiner": "**触控板捏合 / 滚轮缩放掉帧，根因通常不是「事件太多」，而是把每次事件都塞进了 React state，还顺带改了大 DOM 的布局。** 正确做法：缩放过程中用 `ref + requestAnimationFrame` 直接改预览 DOM 的 `style.zoom` 和外壳宽度，React state 只保存最终倍率 / 指示器 / 重置。",
  "body": [
    "## 一、掉帧的五个叠加原因\n\n1. **每次捏合都 `setUserZoom`** —— pinch 会连续触发大量 `wheel` 事件，每个事件都进 React state，触发整棵预览重新 render。\n2. **`CSS zoom` 不是 GPU 合成层动画** —— `zoom` 会触发布局重算与重绘；`transform: scale()` 多数情况可以走 compositor。\n3. **缩放同时改外壳宽度** —— `zoomedWidth = A4_WIDTH_PX * effectiveZoom` 每次变化都会让外层滚动区的 `scrollWidth` 重算。\n4. **预览 DOM 被重复渲染** —— 隐藏测量容器 + 可见分页，缩放 state 变化会把它们一起走一遍。\n5. **没有 `requestAnimationFrame` 节流** —— `wheel` 频率可能高于屏幕刷新率，事件来一次更新一次，主线程被打满。\n\n真正的组合是：**`CSS zoom` + React state 高频更新 + 大 DOM 重排**。",
    "## 二、可迁移的判断\n\n- **高频连续手势（pinch / drag / resize）不该驱动框架状态**，应该直接写 DOM 样式；框架状态只留「最终值」。\n- 优化方向不是换掉 `zoom`，而是**把高频路径移出渲染链路**——保留 `zoom` 的纵向滚动优势（`transform: scale` 不改变布局尺寸，滚动条行为会变）。\n- 定位这类问题时，先问「这个值变一次，要重排多大的 DOM」，而不是先怀疑事件监听写错了。",
    "## 三、跨平台适配：判断修饰键语义，不判断系统\n\n缩放逻辑里写 `if (!e.ctrlKey && !e.metaKey) return;`，就同时覆盖了 macOS（`Cmd + 滚轮`）和 Windows（`Ctrl + 滚轮`、Precision Touchpad 捏合在 Chrome/Edge 里通常也表现为 `ctrlKey + wheel`）。\n\n**不要按操作系统分支**——按输入语义（修饰键）判断，能力自然跨平台。没适配的部分要明说：触屏 pinch 需要额外的 `pointer/touch` 手势逻辑，当前没有。",
    "## 相关\n\n- flex子项的百分比max-height不可靠 —— 同类：CSS 机制本身决定了代价\n- [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8) —— 高频 UI 更新的另一种状态设计"
  ]
},
{
  "id": "as-concept-一次循环只做一个可体验的-v1-能力",
  "updatedAt": "2026-08-09",
  "wikiSlug": "agent-session",
  "term": "一次循环只做一个可体验的 v1 能力",
  "oneLiner": "**0-1 产品的一次迭代循环，范围应是「用户能真正体验到的、最小的完整 v1 能力」——不是一个微小补丁，也不是一段多周路线图；而循环能不能启动，取决于证据门槛和能力地图是否够新。**",
  "body": [
    "## 一、范围判定：一个 loop = 一个连贯的 v1 能力\n\n```text\n太小（补丁）→ 用户感受不到变化\n刚好（v1 能力）→ 端到端可体验，允许跨多个文件/模块\n太大（路线图）→ 不是一次循环，是无法验证的赌注\n```\n\n关键取舍：**允许为「端到端可体验」而跨模块改动**，但不允许扩张成「一次做完整个路线图」。\nv2/v3 只记录不执行 —— 记录是为了不丢，不执行是为了能验证。",
    "## 二、能力地图：按用户能力组织，不按代码模块\n\n维护一份当前的能力边界地图（历史日志 ≠ 地图，地图 ≠ 当前证据，三者互不替代）。\n\n| 维度 | 要求 |\n|---|---|\n| 组织方式 | **用户能力**（代码路径只是某条能力下的证据） |\n| 每条能力记录 | 状态、新鲜度、上次核查日期、证据、边界、明确的 non-goals、可见缺口 |\n| 新鲜度取值 | 只有三个：`confirmed` / `stale` / `unknown` |\n| 使用规则 | **只有 `confirmed` 的边界才能作为推荐依据** |\n\n「按用户能力组织」是这份地图最容易被做错的地方 —— 一旦按模块/页面/实现层来分，它就退化成代码结构图，回答不了「用户现在到底能做什么」。",
    "## 三、证据门槛：证据不足时不许发明方向\n\n推荐之前必须先看够证据（最近几次循环日志、能力地图、产品契约、相关代码路径、当前 git 状态、涉及 UX 时必须看真实渲染态）。\n\n- 涉及 UX / 产品流的推荐，**必须看真实产品表面**（浏览器、真机、截图、日志），不能用 mock 替代；真看不到就明说。\n- 若关键产品表面无法查看 → 把这些能力标为 `unknown`，并**声明本轮证据受限**，在决策依赖它们时停下或提问。\n- 证据太薄时，**问一个聚焦的产品上下文问题**，而不是编一个方向。\n\n门槛通过的标准：主推荐能引用具体观察 + 相关能力条目都有明确新鲜度 + 备选方案都能给出「为什么可以推迟」的理由。",
    "## 四、每个 loop 都必须命名一个北极星指标\n\n指标要写全：名称、为什么对 0-1 重要、当前基线（及基线来源）、v1 的目标、怎么检查、以及不可回退的护栏（构建健康、无障碍、无可见溢出、无 console 错误、持久化不被破坏、数据契约不变、用户数据不丢）。\n\n**没有指标，就没有这一轮循环。** 指标选什么见 [北极星指标要量价值闭环](/wiki/agent-session/as-concept-%E5%8C%97%E6%9E%81%E6%98%9F%E6%8C%87%E6%A0%87%E8%A6%81%E9%87%8F%E4%BB%B7%E5%80%BC%E9%97%AD%E7%8E%AF)。",
    "## 五、批准闸门：产品代码改动前必须明确批准\n\n先给出「产品推荐 + 实施方案」，等明确批准后才动产品代码；只有用户已经批准过那一份具体方案时才可以跳过。\n遇到会改变产品行为、有数据丢失风险、暴露密钥或使验证无法完成的阻塞项 —— **停下报告，不要猜**。",
    "## 相关\n\n- [北极星指标要量价值闭环](/wiki/agent-session/as-concept-%E5%8C%97%E6%9E%81%E6%98%9F%E6%8C%87%E6%A0%87%E8%A6%81%E9%87%8F%E4%BB%B7%E5%80%BC%E9%97%AD%E7%8E%AF) —— 指标该量什么（本条只规定「每轮必须有」）\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) —— 「用户能体验到」是范围判定的同一把尺\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) —— 证据门槛的同源判断：没有依据就不下结论\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-修复范围分保守、彻底与最小闭环三档",
  "updatedAt": "2026-06-15",
  "wikiSlug": "agent-session",
  "term": "修复范围分保守、彻底与最小闭环三档",
  "oneLiner": "**同一个问题给两档方案（只改表层 / 从源头重构）是错的提问方式 —— 缺了第三档「最小闭环」：把修复点挪到正确的层，但只加一个字段、不做全量重构。** 范围取舍的标准是「修在源头」与「改动面」两个轴，不是「快」与「对」两个极端。",
  "body": [
    "## 一、三档是什么\n\n以「订阅条目的公众号封面拿不到」为例：\n\n| 档 | 做法 | 代价 | 结果 |\n|---|---|---|---|\n| **保守** | 只改前端：继续从 `content_html` 里多匹配几种 `<img>` 当缩略图 | 风险低、快 | 源里没这张图时**永远拿不到**，「单独获得封面」做不扎实 |\n| **彻底** | 抓取阶段抽共享模块：media thumbnail / enclosure / og:image / 正文首图兜底，存成结构化字段 | 动 Rust parser + 数据结构 + schema，范围大、回归测试多 | 正确，但把一次修复变成一次重构 |\n| **最小闭环** | 只给订阅条目加一个 `cover_image` 字段，在抓取处填它 | 比保守可靠，不做大重构 | 修复落在源头，改动面可控 |",
    "## 二、判据\n\n- **能不能落在源头** —— 只在前端补救 = 打补丁，源里没有的信息补不出来；信息在源里就该在源里被提取。\n- **改动面是否被最小化** —— 「顺便把逻辑抽成共享模块」是**独立的重构目标**，不该塞进一次修复里；它值得做，但要单独立项。",
    "## 三、可复用动作\n\n遇到「改 A 还是重构 B」的二选一时：\n\n1. 先问「信息/行为**源头**在哪一层」（见 [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B)）。\n2. 把修复点挪到那一层，**但只加它需要的那一个字段 / 那一处消费**。\n3. 把「抽共享模块 / 统一实现」单独记为后续目标，不在本轮扩张。\n\n> 二选一的提问本身就是信号：**选项只有「太小」和「太大」时，缺的是中间那档。**",
    "## 相关\n\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条的定位步骤：先定层，再定范围\n- 一次循环只做一个可体验的v1能力 —— 范围控制的同一把尺：够端到端，不扩成路线图\n- [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) —— 只改表层的另一种静默失效：值到了，消费方没接\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 「抽共享模块」属于可复用物治理，应独立进行"
  ]
},
{
  "id": "as-concept-分享要反映品牌与产品调性",
  "updatedAt": "2026-07-07",
  "wikiSlug": "agent-session",
  "term": "分享要反映品牌与产品调性",
  "oneLiner": "**对外分享出去的页面（分享链接、分享卡片）是品牌触点，不能只是「把内容渲染成普通文档页」。它要延续产品本身的视觉语言，否则用户会觉得「这不像我的产品」。**",
  "body": [
    "## 判据：延续既有调性，不要另起一套\n\n用户否掉第一版分享页的理由很具体，可以直接当规则：\n\n- **不要自造主题色**：产品原本是纯黑白灰 + 暖黄背景，分享页却设了个固定红色主题色 → 违和。**分享页应复用产品已有的色彩体系**，而不是引入新的强调色。\n- **层次要按既有隐喻**：想要「大背景 → 中背景（像 PDF/书页）→ 小背景（纸面）」的三层阅读结构，且每一层要做得干净；粗糙的装饰（莫名黑线、奇怪悬浮阴影）反而减分。\n- 细节：分享页要有品牌 topbar/logo/只读标识，并提供基本的**深色模式 / 跟随系统**切换。\n- 参考历史：用户此前说过「前端不做 marketing hero，要做可用体验」，所以分享页是「品牌化的阅读外壳」，不是营销页。",
    "## 相关\n\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F)\n- 引擎不做建模器"
  ]
},
{
  "id": "as-concept-北极星指标要量价值闭环",
  "updatedAt": "2026-08-08",
  "wikiSlug": "agent-session",
  "term": "北极星指标要量价值闭环",
  "oneLiner": "**Agent 产品的北极星不该量「调用得勤不勤」，而要量「价值有没有闭环」——用户是否真的把 Agent 的产出采纳并沉淀成了自己的资产。**",
  "body": [
    "## 一、痛点定位：Agent 变成可有可无\n\n你的判断（16:33）：用户积累了大量笔记，说明他需要这个记录型产品，但**没有对 Agent 养成使用习惯** —— 说明产品只解决了「知识」的问题，没有解决「AI」的问题，Agent 就变成了可有可无的功能。而且用户得到一份看起来合理的总结后没有下一步，**漏斗末端没有分层**，无法知道是哪一环导致他不再用。",
    "## 二、价值激活时刻\n\n你提出的定义（16:42）：**价值激活发生在用户对 Agent 产出感到满意、并把它保存进知识资产的那一刻**；因此最该埋点的是「保存」这个动作，再用它结合活跃度分析采纳频率。\n\n需要区分的是：**工具被调用是 Agent 的行为，不是用户的采纳行为**。模型可以调用写入工具，但用户拒绝提案或写入失败，此时记激活就是假阳性。",
    "## 三、指标口径（你的方案）\n\n北极星候选：**所有用户每周的 Agent 平均活跃天数**\n\n```text\n分子 = 一周内每个用户的去重活跃天数之和\n分母 = 该周 Agent 周活用户数\n```\n\n选择**天数**而非**调用次数**的理由（你的原话）：\n\n- 调用次数不公平：C 端用户习惯不同，某天深度学习会长时间使用，另一些天调用很少，次数无法公平反映价值\n- 活跃天数更能反映**使用的深度与时长**\n- 一周 7 天对 C 端产品是较平衡的观察窗：产品若无吸引力，用户会在几天内流失",
    "## 四、未决问题\n\n- 活跃天数只能说明「用户在多少个不同日期触发过 Agent」，**不能同时证明留存、深度和时长**；回答越差、用户反复纠正重试，活跃天数反而可能升高 —— 所以它更像**健康指标**而非价值指标。\n- 保存率能衡量一种价值激活，但总结、讲解、检索类任务可能本就无需保存。\n- 待回答：**只允许取一个证据时，看什么能区分「满意地完成任务」与「觉得没用而流失」？**\n- 待回答：**看到「保存过的用户留存是未保存用户两倍」，能否直接把提高保存率设为核心目标？**",
    "## 相关\n\n- [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB)（口径先于数值，同属指标方法论）\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)（价值要被用户感知）\n- 一次循环只做一个可体验的v1能力 —— 每轮的范围判定"
  ]
},
{
  "id": "as-concept-地基阶段先跑通基础件再谈抽象",
  "updatedAt": "2026-06-25",
  "wikiSlug": "agent-session",
  "term": "地基阶段先跑通基础件再谈抽象",
  "oneLiner": "**做地基阶段（数据层 / 后端基础件）时，先把基础件跑通，不要过早为每个业务做抽象分层。** 地基任务本身价值在「跑通」，此时加很多抽象会拖慢，而且后面真正接业务时更难用。同理，前端也先把**全路由静态骨架**落地，让后续接真实 API 时不需要再改页面结构。",
  "body": [
    "## 基础件形态：数据库为中心，其他做成薄薄一层\n\n- `packages/db` —— 最核心：schema、client、notes/clips/feeds/tags 的 CRUD\n- `packages/shared` —— 公共校验（环境变量、创建/更新笔记、订阅源的 Zod schema）\n- `packages/auth` —— 只负责登录配置，不写业务数据逻辑\n- `packages/queue` —— 只定义队列与 `addJob()`\n- `packages/storage` / `packages/email` —— 只负责上传删除 / 发信\n\n执行顺序：先写实施 plan → 先写测试 → 再实现基础件 → 最后跑验证，如实说明哪些受环境变量或 Docker 影响没跑通。",
    "## 前端骨架：全路由先落地\n\n所有路由都建出来（marketing / auth / app 三组），登录后布局含左侧导航、顶部栏、右侧面板；列表页用 mock 数据验证虚拟滚动；编辑页集成主编辑器入口并留备选切换位。**好处是后续接 API 不需要再改页面结构。** 反面做法是先做一堆没被真实页面验证过的 UI 组件。",
    "## 相关\n\n- 一次循环只做一个可体验的v1能力\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98)\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82)"
  ]
},
{
  "id": "as-concept-完整蓝图不等于同阶段交付",
  "updatedAt": "2026-06-25",
  "wikiSlug": "agent-session",
  "term": "完整蓝图不等于同阶段交付",
  "oneLiner": "**用户要「完整方案」时，不要把完整方案砍成 MVP，也不要把完整蓝图理解成「所有东西同一阶段交付」；正确形态是「全量架构 + 分阶段落地 + 风险门控」。** 把「要做什么」（全量）和「什么时候做」（阶段）分成两个维度，才能既不漏系统、又不承诺一次交完。",
  "body": [
    "## 完整方案至少要覆盖的六块\n\n只写技术结构不算完整方案，还缺：\n\n1. **产品版图** —— 2.0 到底包含哪些用户能力（笔记、剪藏、订阅、搜索、AI 回顾、标签/知识库、多端同步、浏览器扩展、账号/订阅/支付、Admin、导入 1.x 数据）\n2. **数据权威模型** —— 云端 PostgreSQL 是不是 source of truth？本地是缓存还是可离线编辑的真相？原 vault 文件还保留吗？能否导出完整本地知识库？见 [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A)\n3. **同步协议** —— 版本字段、sync cursor、pull/push/conflict、tombstone、改名与附件规则、两端跑同一组测试用例\n4. **迁移方案** —— 2.0 不能无视 1.x：扫描本地 vault、导入 Markdown/HTML/clips/feeds、绑定本地路径与云端 ID、失败回滚、可否选择「不上传只本地用」\n5. **各端完整范围** —— 例如 Apple 端不只是「调 API」，而是完整客户端：SwiftUI、SwiftData、SyncEngine、Keychain、Share Extension、Spotlight、Menu Bar、全局快捷键、推送、自适应布局、打包签名审核\n6. **后端完整范围** —— 把散落在 Web API / packages / agent 里的职责收拢成明确的后端边界",
    "## 常见失误\n\n把「完整方案」和「分阶段落地」对立起来，于是要么交一份被砍到只剩骨架的 MVP，要么承诺一次性把所有端和系统做完。**架构上可以全量，交付上必须分阶段。**",
    "## 相关\n\n- 一次循环只做一个可体验的v1能力 —— 阶段内怎么切\n- 修复范围分保守彻底与最小闭环 —— 同一套「范围分档」思路\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B)\n- [地基阶段先跑通基础件再谈抽象](/wiki/agent-session/as-concept-%E5%9C%B0%E5%9F%BA%E9%98%B6%E6%AE%B5%E5%85%88%E8%B7%91%E9%80%9A%E5%9F%BA%E7%A1%80%E4%BB%B6%E5%86%8D%E8%B0%88%E6%8A%BD%E8%B1%A1) —— 蓝图分阶段落地时，地基期先跑通基础件"
  ]
},
{
  "id": "as-concept-容器要有超出文件夹的意义才值得独立入口",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "容器要有超出文件夹的意义才值得独立入口",
  "oneLiner": "**如果一个「知识库」只做到文件夹的形态，它本质上就是笔记的文件夹系统，不该再单独占一个顶层入口 —— 要么降级为笔记里的顶层集合，要么给它文件夹之外的意义。** 否则用户找内容时，得先想「这是笔记还是知识库」，这是凭空多出来的一道认知成本。",
  "body": [
    "## 两条出路\n\n| 方向 | 做法 |\n|---|---|\n| 降级 | 把笔记升级成「全部笔记 / 最近 / 文件夹集合」的结构，知识库只是笔记里的顶层彩色集合；一个入口找所有内容 |\n| 赋义 | 保留独立知识库，但它必须比文件夹多一层：独立资料源、剪藏引用、AI 上下文范围、阅读队列、整理输出、知识卡片 |\n\n判据：**问「去掉这个入口，用户会损失什么能力」**。答不出来，说明它只是文件夹。",
    "## 边界没定，数据先混进来的代价\n\n`query::list_notes` 把 `library/` 下的知识库笔记一起扫进了普通笔记区，于是它们出现在笔记列表里；但笔记区的打开 / 编辑逻辑仍按普通 `wiki/notes` 笔记设计，结果就是「在知识库里创建的笔记，在笔记区显示得出来却打不开」。\n\n- 先定边界（知识库笔记算不算笔记区内容），再改前端 —— 否则只是把不一致从一处挪到另一处\n- 一个列表混入第二种数据来源前，先确认两种来源的操作语义是否一致",
    "## 时机\n\n若 1.0 的重点是写作与整理手感，**先别急着实现知识库 UI，回头重构信息架构**；等真的有了「按知识库做 AI 上下文 / 资料源 / 总结沉淀」的能力，再把它独立出来。",
    "## 相关\n\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 本条是该 synthesis 的第四处证据：判据是「去掉它用户会损失什么」，不是功能清单\n- 一次循环只做一个可体验的v1能力"
  ]
},
{
  "id": "as-concept-用户可感知的价值与差异化表达",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "用户可感知的价值与差异化表达",
  "oneLiner": "用户可感知的价值与差异化表达",
  "body": [
    "## # 用户可感知的价值与差异化表达",
    "## 结论\n\n> 产品的价值只有变成**用户能感知的具体对照**时才存在。\n> 讲不清「和不用它的差别」，就等于没价值。",
    "## 推导\n\n你反复追问同一件事（\"转换成用户可感知的内容要怎么转换会显得更好？\"\n→ \"产品对外宣传的让用户可感知到的点，在于哪里？我觉得这里讲的还不够有区别化\"），\n最后在 canvas 里落成了结构化答案。",
    "## 框架\n\n### 一、可感知的本质\n不是罗列功能，而是给出**对照**。用户只有在 A/B 之间才产生感知。\n\n### 二、差异化的三层\n| 层 | 说明 |\n|---|---|\n| 品类 | 你和谁站在一起（用户拿什么类比你） |\n| 品牌 | 提到你时用户脑子里浮现什么 |\n| 功能 | 具体能力上的差别 |\n\n原表述的问题通常是：只在功能层打转，没有品类和品牌的对照。\n\n### 三、提炼公式\n```\n价值陈述 = 痛点 + 场景 + 对比 + 结果\n```\n四个要素缺一个就空：\n- **痛点**：他此刻正在被什么折磨\n- **场景**：什么时候发生\n- **对比**：不用/用别家的分别是什么\n- **结果**：能量化的变化",
    "## 给自己的检查\n\n写完任何一句宣传语，逐项打钩：痛点真吗？场景具体吗？有对比吗？结果可量化吗？\n\n四项全无 → 这不是表达问题，是产品价值没想清楚。",
    "## 相关\n- [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB)\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [分享要反映品牌与产品调性](/wiki/agent-session/as-concept-%E5%88%86%E4%BA%AB%E8%A6%81%E5%8F%8D%E6%98%A0%E5%93%81%E7%89%8C%E4%B8%8E%E4%BA%A7%E5%93%81%E8%B0%83%E6%80%A7) —— 品牌触点那一层的「用户能不能感知到价值」\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 本条是该 synthesis 的第二处证据：功能清单是共有项，对照才是差异项\n- [北极星指标要量价值闭环](/wiki/agent-session/as-concept-%E5%8C%97%E6%9E%81%E6%98%9F%E6%8C%87%E6%A0%87%E8%A6%81%E9%87%8F%E4%BB%B7%E5%80%BC%E9%97%AD%E7%8E%AF)"
  ]
},
{
  "id": "as-concept-答疑是功能层，搜题只是手段层",
  "updatedAt": "2026-10-10",
  "wikiSlug": "agent-session",
  "term": "答疑是功能层，搜题只是手段层",
  "oneLiner": "**「答疑」是用户场景层面的完整功能：既要答对，也要讲明白；「搜题」只是获取依据的实现手段，「讲题」是组织解释的另一层。因此不能把「回答的正确性」全部划给搜题，也不能把答疑只理解成语言表达。**",
  "body": [
    "## 一、三层各自负责什么\n\n| 概念 | 含义 | 需要关注什么 |\n|---|---|---|\n| **答疑** | 解决用户对一道题或知识点的疑问，是**上层产品功能** | 是否答对、是否解决疑惑 |\n| **搜题** | 从题库获取匹配题目、答案与解析，是**实现手段** | 找没找到、是否同一道题、依据是否有效 |\n| **讲题** | 根据题目和依据组织解释，并承接追问 | 推理是否正确、关键步骤是否完整、用户能否理解 |\n\n**搜题负责找到依据，讲题负责解释依据，最终回答的正确性需要两者共同保证。** 两个反例：\n搜到了正确答案，模型仍可能讲错推理；没搜到原题，也可能独立解对。\n所以「正确性」不是搜题的专属责任。",
    "## 二、阶段目标由产品决定，不是能力上限\n\n「先做普通的答疑，能让他快速找到答案就够」—— 这是**产品目标的取舍**，\n不是「答疑只需要正确性」。同一功能可以有两个深度：\n\n```text\n第一层：先让用户拿到正确答案（准确）\n第二层：在正确之上还有好坏 —— 逻辑是否清晰、有没有跳步、是否完整\n```\n\n判断某一层要不要做，看的是**产品目标**；但描述这个功能时，\n不能用「只做第一层」倒推出「这个功能只有第一层」。",
    "## 三、可迁移的动作\n\n拆解一个 AI 功能时，先问三件事：\n\n1. **这个功能的名字指的是哪一层**（用户场景 / 实现手段 / 输出质量）？\n2. **它内部有几层职责，各自负责什么**？（对照 职责要先分家再谈实现）\n3. **「正确性」由哪一层保证**？如果全压在一个手段层上，另外那层一旦失效就不报错。",
    "## 四、在简历与叙事上的应用\n\n同一个项目，写法可以落在两层完全不同的地方：\n\n| 写法 | 落在哪一层 |\n|---|---|\n| 「接入搜题接口、配置调用规则、设计图片映射」 | 手段层（执行动作） |\n| 「针对主页图文答疑缺少题库依据的问题，引入题库检索降低直接解题出错的风险」 | 功能层（答疑质量） |\n\n两个由此推出的判断：\n\n1. **主线是答疑，搜题只是其中一种手段** —— 一旦让手段当了主线，叙事就从「解决用户的什么问题」滑成「我调用了什么」，简单的局部需求被拔高成项目核心。\n2. **要讲深，讲的是「为什么答错 / 依据可不可信 / 怎么验证」，不是技术名词** —— 接口、字段、平台都是载体；能展开的是问题识别、方案取舍与验证口径。\n\n详见 简历写的是解决方案不是执行动作。",
    "## 相关\n\n- 简历写的是解决方案不是执行动作 —— 本条在「怎么写」上的落点\n- 检索是一条分层链 —— 搜题属于供给/召回层，它只是答疑这条链的一段\n- 职责要先分家再谈实现 —— 本条是它在「功能 vs 手段」上的一次应用\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) —— 用户感知到的是答疑，不是搜题"
  ]
},
{
  "id": "as-concept-简历写解决方案不写执行动作",
  "updatedAt": "2026-10-10",
  "wikiSlug": "agent-session",
  "term": "简历写解决方案不写执行动作",
  "oneLiner": "**简历要写的是「业务层的问题 + 技术层的解决方案」，不是「我调用了什么接口」。** 判定一句话：",
  "body": [
    "## **写的是动作（配置了、接入了、设计了）→ 执行层；写的是判断（为什么必须解决、错误产生在哪、为什么这样选、怎么验证）→ 解决方案层。**",
    "## 一、同一件事的两种写法\n\n| | 写法 | 读者得到什么 |\n|---|---|---|\n| **执行** | 接入搜题接口、配置调用规则、设计图片映射 | 你会操作这套系统 |\n| **方案** | 针对相似题条件差异导致答案误用的问题，区分原题匹配与相似题参考，校验题干关键条件与选项一致性，按匹配情况采取不同答疑策略，并用专项评测验证误用风险 | 你识别了问题、选了机制、能证明有效 |\n\n**产品化不是把动词换大**（「配置」改「设计」）。是把**为什么做、错在哪、怎么判断有效**补上；\n实现细节留到面试被追问时再展开。",
    "## 二、不要让手段当主线\n\n一个**本身很简单**的局部需求（例如「把已有的搜题能力接到对话入口」）被当成项目主线后，\n整段经历会退化成「我做了个工具」。判断依据是**它有没有判断价值**：\n需求简单、动作单一，就应当降级为某个优化点里的一个动作，而不是撑起整个项目。\n（详见 答疑是功能层搜题只是手段层）",
    "## 三、深度从哪来：不是技术名词\n\n想让一段经历「讲得深」，靠的不是往里塞 RAG / 向量库 / 知识图谱这类词，\n而是沿这条链回答清楚：\n\n```text\n业务上为什么这个问题不可接受\n  → 错误具体产生在哪一层\n  → 选择什么机制解决、放弃了什么\n  → 用什么口径验证它真的有效\n```\n\n**术语只用来解释取舍，不用来充深度。** 没做过的层不要写成做过 ——\n贡献只需要覆盖你真正能影响的那一层，但你要能解释整条链的边界。",
    "## 四、两条线要分开\n\n想讲深，往往要「补课」（理解当时没参与的层）。这时必须区分：\n\n- **经历线**：当时系统怎么跑、你负责什么、改了什么、结果如何；\n- **学习线**：后来才理解的技术，用于解释方案与讨论取舍。\n\n**后补的内容标为「复盘实验 / 独立实践」，不能倒写成实习期间已上线的成果。**",
    "## 相关\n\n- [AI产品经理的能力三轴](/wiki/agent-session/as-topic-AI%E4%BA%A7%E5%93%81%E7%BB%8F%E7%90%86%E7%9A%84%E8%83%BD%E5%8A%9B%E4%B8%89%E8%BD%B4) —— 简历的叙事单位是能力轴，不是项目；本条是它在「每条轴怎么写」上的落点\n- 答疑是功能层搜题只是手段层 —— 功能 vs 手段，是本条在项目主线上的应用\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 同样是「不要罗列，要讲出判断」\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98) —— 只写实际交付的那部分，不把蓝图当成果"
  ]
},
{
  "id": "as-concept-评审设计可行性先问方案，再定难度",
  "updatedAt": "2026-09-15",
  "wikiSlug": "agent-session",
  "term": "评审设计可行性先问方案，再定难度",
  "oneLiner": "**问「这个设计能不能做出来 / 难度多大」时，不能直接给难度分级和实现方向 —— 要先问「你打算怎么做」。** 因为「做出来」指的是什么没确认之前，难度这把尺子量的东西是错的：把「复刻一张既定视觉稿」按「给自己的名字做一套视觉系统」来答，结论看着合理，方向已经偏了。",
  "body": [
    "## 一、先分清「复刻」还是「自建」\n\n同一张设计稿，两种目标的方案与难度完全不同：\n\n| 目标 | 成功标准 | 难度来源 |\n|---|---|---|\n| **复刻稿件** | 构图、位置、比例接近一比一 | 固定比例画布 + 逐元素对齐 |\n| **自建视觉系统** | 一套可贯穿全站的符号语言 | 符号体系设计与一致性 |\n\n混用会直接跑偏：11:21 的回答把任务理解成「把 Winston 这个名字转成视觉语言」，给的是一套符号发展思路（`W` 作骨架、字母拆材质、像素头像作角色）；18:28 被纠正 —— 「不是这样，你的思路错了。先问问你的方案是什么」，随后承认方向偏成了「给文字加纹理」，而截图的核心不是这个。\n\n**「完全复刻稿件的每个字体、纹理、几何细节」不该作为第一目标** —— 这一条是两种目标都适用的取舍。",
    "## 二、确认是「复刻」之后的可落地拆法\n\n（纠正后的拆法由 agent 给出，此处作为该判断的落地示例。）\n\n1. **把稿件当成固定比例画布**：外层边框、顶部导航栏高度、首屏高度都固定（`calc(100vh - 边距)`），不让内容自动堆叠变形。\n2. **主体字标不是文字，是若干独立视觉字形**：每个字母一个独立 SVG/Canvas 图层，轮廓统一、内部材质不同；用 mask / clipPath / pattern 实现，而不是给文字换背景。\n3. **角色嵌进构图里，而不是漂浮在角落**：角色是中央字母的一部分，滚动时才从字形中拆出、进入下一个节点。\n4. **动效是「构图内动效」**：字形内部纹理缓移、图层视差，滚动时整块画布重新编排，而不是单纯背景加速。\n5. **首屏各元素严格对齐稿件位置，再考虑响应式**。\n6. **分三步实现、每步验证后再扩展**：静态构图 → 字母内部动画 → 角色拆解与滚动编排。",
    "## 三、动手前先复述理解，让用户确认\n\n「区块对齐」这类需求是**组合约束**：13:36 的需求只有一句「welcome 区块高度减半，使它和六宫格的上半部分对齐」。agent 连改两版都跑偏（先连宽度一起砍，再反复调高度），最后自己复盘根因：\n\n> **「我两次都没在改之前先复述理解让你确认。」**\n\n约束不完整时（只说了高度，没说宽度动不动），**该问，不能猜**。改之前把理解复述成一句可确认的话：「只动高度，宽度一行不改 —— 对吗？」",
    "## 四、可迁移的规则\n\n- **难度问题 = 约束问题**：没有约束（复刻对象、画布比例、完成度目标、时间盒）就没有难度，只有形容词。\n- **评审不是复述需求，是先把需求翻译成方案**：用户说「不需要过度评审」，指的是不要写长篇评述，而不是不要给方案。\n- **分层交付优于一次性铺开**：先让最不确定的一层（静态构图）达到可比对的状态，再叠加动效。\n- **改动前先复述理解**：约束有歧义时先问再动手，比改错两版再回滚便宜。",
    "## 五、反过来的边界：没有歧义就不要问\n\n提问的成本要**按歧义大小来付**。上面说的是「约束不完整时必须问」，这里说的是它的反面。\n\n09-15 19:18 你直接打断：「不是，你听懂没，问的都是什么问题」。当时 agent 连续四轮用提问工具去问「这些 `1.` 是独立条目还是一个序列」这类**已被上下文和规范唯一确定**的问题，把你的时间花在了没有信息量的确认上。agent 自己承认：**「这个没有歧义，我直接做。」**\n\n| 情形 | 动作 |\n|---|---|\n| 约束有歧义、目标有多个所指、改动不可逆 | **先问**（或先复述理解让用户确认） |\n| 上下文/规范已能唯一确定 | **直接做**，把判断依据写出来，让用户事后纠错 |\n| 用户**显式说了**「先别动手 / 先别改」 | **一律先给根因和方案**，等确认再动 |\n\n第三种情形高于前两种：**用户的显式暂停指令不能被「上下文已能确定」覆盖。** 07-08 17:36 用户明确说「你也先别急着动手改，从全局角度思考」，agent 仍按之前「直接执行到测试完成」的模式改了代码，17:49 被追问「怎么又直接做了」；根因是**沿用了上一轮的协作节奏，而没读这一轮用户给的显式约束**。\n\n误用任一侧的代价不同：该问不问 → 改错两版再回滚；不该问而问 → 消耗用户注意力，且用户答完还未必答得比上下文准。",
    "## 相关\n\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87) —— 同源判断：「做出来」也有多种所指，先确认再回答\n- 一次循环只做一个可体验的v1能力 —— 分三步、每步可验证的同一把尺\n- 样式丢失先核对类名再怀疑缓存与权限 —— 同轮教训的另一半：截图 ≠ 代码"
  ]
},
{
  "id": "as-concept-学领域先看一流成品而非方法论",
  "updatedAt": "2026-07-19",
  "wikiSlug": "agent-session",
  "term": "学领域先看一流成品而非方法论",
  "oneLiner": "**要学一个领域（设计 / 产品），直接看一流从业者的成品，而不是先看方法论。** 方法论是别人对结果的二次归纳，成品才是未经转述的一手信号；先看成品能直接建立「好是什么样」的判据，之后读方法论才有东西可对照。",
  "body": [
    "## - **成品是一手，方法论是二手**：先接触二手归纳，会把「作者的取舍」当成领域规律，学到的是某一种流派而非领域本身。\n- **成品提供判据**：看过足够多一流成品，才有能力判断一份方法论在讲的是平均水平还是顶尖水平。缺了这一步，方法论之间无法排序。\n- **可迁移的看片单**：PM 向（Sachin Rekhi / Ravi Mehta / Julian Shapiro / Lenny's Newsletter / Shreyas Doshi），工程与设计工程向（Brittany Chiang / Lee Robinson / shadcn / Emil Kowalski / Rauno / Josh Comeau / Adam Wathan），作品集视觉向（Awwwards portfolio / Godly / SiteInspire）。同一领域取 10–15 个不同作者的成品，比只读一家方法论信息量大。",
    "## 相关\n\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [竞品拆解框架](/wiki/agent-session/as-topic-%E7%AB%9E%E5%93%81%E6%8B%86%E8%A7%A3%E6%A1%86%E6%9E%B6)"
  ]
},
{
  "id": "as-concept-Agent-读语义文件，App-读结构化存储",
  "updatedAt": "2026-06-15",
  "wikiSlug": "agent-session",
  "term": "Agent 读语义文件，App 读结构化存储",
  "oneLiner": "**知识库不该让 agent 直连数据库：SQLite 是导航系统，Markdown 才是知识本体。** App 用它做检索 / 排序 / 状态，agent 用语义文件做理解 / 改写 / 迁移；两边不是二选一，而是分工。",
  "body": [
    "## 一、两者定位不同\n\n| | SQLite（结构化记录） | Markdown（语义文件） |\n|---|---|---|\n| agent 读到的东西 | 表、字段、行（需要先懂 schema、写 SQL） | 标题、正文、frontmatter、链接、路径 |\n| 强项 | 快、可筛选、可排序、可聚合（万篇级仍稳） | 语义自明、人和外部工具都能直接消费 |\n| 弱项 | 语义弱，对人和外部 agent 不透明 | 大规模查询不如 DB |\n\n关键差别不在「能不能读」，而在**读到的信息里有没有上下文线索**。Markdown 的路径、标题层级、frontmatter、双链天然就是语义；SQLite 的一行只是字段集合。",
    "## 二、为什么不让 agent 直连 DB\n\n1. **耦合内部实现** —— schema 一改，skill / prompt 全要跟着改。\n2. **容易读到衍生数据** —— FTS 表、缓存表、状态表不是用户知识本身。\n3. **不利于外部工具** —— 不是每个 agent 环境都方便开 SQLite，但几乎都能读一个 Markdown 目录。\n4. **上下文质量更差** —— 行数据缺语义线索，agent 更容易误把索引当主数据。",
    "## 三、推荐分工\n\n```text\nAgent 要理解 / 改内容   → 读写 Markdown\nApp 要检索 / 排序 / 状态 → 读 SQLite\nSQLite 坏了             → 从 Markdown 重建\nMarkdown 坏了           → 那才是真数据损坏\n```\n\n即：**Markdown 是唯一真源，SQLite 是可重建的派生层。**",
    "## 四、两者组合的最佳路径：先筛选，再读全文\n\n不要「全扫文件」，也不要「只信 DB 里的摘要」：\n\n```text\nSQLite FTS / metadata 找候选（如最近 30 天的 iOS 笔记 → 20 篇）\n    → agent 读这 20 篇 Markdown 全文\n    → 总结 / 回答\n```\n\nDB 只负责把候选范围缩小，召回质量仍由正文（Markdown）承担 —— 这也解释了为什么检索的改进重点在正文入索引而不是把 DB 字段做多。",
    "## 相关\n\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 「真源只有一个」的同源判断：Markdown 是本体，DB 可重建\n- [关键词检索的三个打分缺陷](/wiki/agent-session/as-concept-%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%89%E4%B8%AA%E6%89%93%E5%88%86%E7%BC%BA%E9%99%B7) —— DB 侧只做候选筛选，正文才承担召回\n- [跨源取数据要靠自建代理](/wiki/agent-session/as-concept-%E8%B7%A8%E6%BA%90%E5%8F%96%E6%95%B0%E6%8D%AE%E8%A6%81%E9%9D%A0%E8%87%AA%E5%BB%BA%E4%BB%A3%E7%90%86) —— 同属「数据该由哪一层持有」的取舍\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 本条是该骨架的一处实例：真源唯一 + 派生层可重建"
  ]
},
{
  "id": "as-concept-Schema-是声明，Migration-是历史",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "Schema 是声明，Migration 是历史",
  "oneLiner": "**`schema.prisma` 只是「目标结构长什么样」的声明，它不会可靠地把生产库改好；真正把数据库改到那个结构的是版本化的 migration 历史。** 只有 schema 没有 migration，等于「代码完成」但不「可部署」。",
  "body": [
    "## 两者的分工\n\n```text\nschema.prisma  ──(migrate dev)──▶  migration.sql  ──(migrate deploy)──▶  生产库\n```\n\n- **Schema**：有哪些表、字段、类型、默认值、关系、唯一约束与索引、要生成哪些客户端 API。\n- **Migration**：目录形式的变更历史，每个目录里是明确的 SQL。部署时按顺序只执行尚未执行的，执行记录存在数据库自己的迁移表里。",
    "## `db push` 与 `migrate deploy` 不能混用\n\n| | `db push` | `migrate deploy` |\n|---|---|---|\n| 依据 | 当前 schema | 已提交的 migration |\n| 版本历史 | 无 | 有，可审查、可回放 |\n| 风险 | 可能删除/重建/重命名字段 | 有明确顺序 |\n| 适用 | 临时、本地、可销毁的库 | Preview / Staging / Production |",
    "## 已有生产库接 migration 的顺序\n\n不能直接生成 migration 了事，要先做 baseline：**核对生产/预览库的真实结构 → 备份并检查 drift → 为现有库设计基线 → 再生成增量 migration → 在独立分支库上验证 → 最后才应用**。测试脚本也要从 `db push` 改成临时库上的 `migrate deploy`，否则测试永远验证不到真实迁移路径。",
    "## 相关\n\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A) —— 迁移之前先确定谁是权威\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 迁移就是「把存量带过来」的正式手段\n- [改远端库结构前先确认库身份与回滚](/wiki/agent-session/as-concept-%E6%94%B9%E8%BF%9C%E7%AB%AF%E5%BA%93%E7%BB%93%E6%9E%84%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BA%93%E8%BA%AB%E4%BB%BD%E4%B8%8E%E5%9B%9E%E6%BB%9A) —— 动生产结构前的确认项\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同一取向：先确认生效的是哪一份"
  ]
},
{
  "id": "as-concept-入库前先分层清洗",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "入库前先分层清洗",
  "oneLiner": "**噪声不该留到提炼时才处理。** 在「提炼」之前单独加一层**只做过滤、不做判断**的清洗层，提炼质量才有保证。",
  "body": [
    "## 理由（你自己提的）：无用内容（寒暄、`hi`、工具回显）堆叠起来再送去提炼，「就显得非常的乱，模型提取的效果也并不好」。所以顺序是：\n\n```\n原始会话  →  ① 清洗层（每天一次，机械过滤）  →  ② 提炼层（判断哪些成知识）  →  wiki\n```",
    "## 两层的服务对象不同\n\n这是这个设计真正的支点：\n\n| 层 | 干什么 | 服务对象 |\n|---|---|---|\n| 清洗层 | 机械过滤：开场白、`hi`、agent 叙述、工具回显 | **agent**（让提炼输入干净） |\n| 提炼层 | 判断：哪一轮是知识、该进哪个类别 | **人**（产出给人读） |\n\n「**这个是针对 agent 的**」——清洗层的价值不在产出物本身，而在于**降低下一层的判断难度**。它本身可以完全扔掉。",
    "## 和「筛选标准」的分工\n\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) 回答：**收什么**（对未来有帮助 / 知识型非动作 / 反复提问权重更大）。\n- 本页回答：**在哪一层收**。\n\n先分层，再谈标准：如果不分层，标准再准也是在噪声里做判断，成本高且不稳。",
    "## 反直觉点\n\n直觉上「多一层 = 多一道工序 = 更慢」。这里相反：**先丢垃圾比先读垃圾更省**。\n清洗层是机械的、可批量的；提炼层是判断的、昂贵的。把机械活提前做掉，等于把昂贵的那层喂干净。",
    "## 相关\n\n- [清洗合并会破坏源格式语义](/wiki/agent-session/as-concept-%E6%B8%85%E6%B4%97%E5%90%88%E5%B9%B6%E4%BC%9A%E7%A0%B4%E5%9D%8F%E6%BA%90%E6%A0%BC%E5%BC%8F%E8%AF%AD%E4%B9%89) —— 过滤之后若要合并，必须做渲染级验收\n- [放宽过滤会连噪声一起放进来](/wiki/agent-session/as-concept-%E6%94%BE%E5%AE%BD%E8%BF%87%E6%BB%A4%E4%BC%9A%E8%BF%9E%E5%99%AA%E5%A3%B0%E4%B8%80%E8%B5%B7%E6%94%BE%E8%BF%9B%E6%9D%A5) —— 过滤层调参时，「修漏」与「修假」必须同时管"
  ]
},
{
  "id": "as-concept-列表卡片元信息用内容作者而非平台名",
  "updatedAt": "2026-07-08",
  "wikiSlug": "agent-session",
  "term": "列表卡片元信息用内容作者而非平台名",
  "oneLiner": "**同一份内容在「列表卡片」和「正文」两处的元信息该显示什么，是两套规则：列表卡片要能认出「这是谁写的」（订阅博主名 / 用户编辑过的名字），正文则沿用剪藏那套元信息。** 列表卡片如果优先取 `sourceName`（平台/站点名），用户看到的就是网站域名，认不出内容来源。",
  "body": [
    "## 症状与根因\n\n- 现象：Today 页卡片显示的是网站域名，而不是订阅的博主名。\n- 根因：卡片取的是 `sourceName`（站点/平台名），而订阅场景里用户关心的是「我订阅的这个人」。知识库 feed_entry 同样优先 `sourceName`，同一个错。\n- 正确取法：**列表卡片优先取 feed 的 `title`（订阅名 / 用户编辑过的名字）**；正文 reader 的元信息逻辑保持不变，仍与剪藏一致。",
    "## 一般化\n\n一个内容对象上通常挂着多套「名字」：平台名、站点域名、内容作者名、用户改过的显示名。**「显示哪一个」取决于消费位置，不取决于字段叫什么。**\n\n| 位置 | 该显示 | 原因 |\n|---|---|---|\n| 列表卡片 | 内容作者 / 订阅名 | 用户是按「人/源」在扫列表，域名没有区分度 |\n| 正文页 | 与剪藏一致的元信息 | 打开后要回答「这是什么、从哪来」，需要站点等上下文 |\n\n推论：**同一字段在列表和正文里的优先级可以不同**，不要用一套 `sourceLabel` 逻辑套所有位置；否则必然有一处显示错。",
    "## 相关\n\n- [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE) —— 同一条导入链路的相邻判断：来源类型要落库，展示层别临时推断\n- [文章元信息用发布日期而非创建日期](/wiki/agent-session/as-concept-%E6%96%87%E7%AB%A0%E5%85%83%E4%BF%A1%E6%81%AF%E7%94%A8%E5%8F%91%E5%B8%83%E6%97%A5%E6%9C%9F%E8%80%8C%E9%9D%9E%E5%88%9B%E5%BB%BA%E6%97%A5%E6%9C%9F) —— 元信息该存哪个字段，要在抓取阶段定清"
  ]
},
{
  "id": "as-concept-导入要保留来源类型以选对渲染链",
  "updatedAt": "2026-07-06",
  "wikiSlug": "agent-session",
  "term": "导入要保留来源类型以选对渲染链",
  "oneLiner": "**内容导入时如果把不同来源的正文塞进同一个字段，就会丢掉「它原本是什么格式」这个信息，渲染时自然选错渲染链。** 表现为：知识库里的剪藏打开后不像剪藏，而是像普通笔记。",
  "body": [
    "## 症状与根因\n\n| 现象 | 根因 |\n|---|---|\n| 知识库里的剪藏内容格式和剪藏区不一样 | 订阅导入时把 HTML 正文直接塞进 `content_md`，于是走了 Markdown 渲染链 |\n| 同一个剪藏，从「已有剪藏」导入是对的，从「订阅」导入是错的 | 两条导入路径给的正文格式不同（前者已是解析后的正文格式），但落库字段相同 |\n\n**格式与字段是两件事**：`content_html` 和 `content_md` 不是可互换的容器。剪藏解析器会把网页转成适合 `ClipReader` 的正文格式；跳过这一步直接落库，等于把 HTML 当成 Markdown 读。",
    "## 判断与做法\n\n1. **落库时要保留来源类型**（如 `kind: 'note' | 'clip' | 'html'`），它决定打开时用哪个渲染器 —— 图标、阅读器、滚动行为都跟着这个类型走。\n2. **多来源入口必须收敛到同一个「归一化」步骤**：不管从剪藏导入还是从订阅导入，都先转成该类型对应的正文格式，再落同一个字段。否则每加一条导入路径就会多一种格式事故。\n3. 症状「格式不对」先问：**这条内容是从哪个入口进来的？它进来时是什么格式？** 而不是先怀疑渲染器。",
    "## 延伸：来源类型要落库，别在显示层临时推断\n\n同一个问题在**展示层**的翻版：知识库里的剪藏卡片该显示「文章 / 媒体 / 视频」图标，而不是统一的剪藏图标。但数据模型里没有持久化的内容类型字段，只能靠 `url` / `sourceName` 做启发式判断（域名命中 YouTube/B 站 → 视频；命中少数派/36氪 等 → 媒体；其余 → 文档）。\n\n- 启发式能用，是因为「先加剪藏再加知识库」引用的是同一条 `clip` 记录，`url` / `sourceName` 还在。\n- 代价：规则散在显示层，每加一处展示就要重算一次，且判断标准不一致。\n- 更稳的做法：**创建剪藏时识别一次 `contentType` 落库，之后全局复用**。\n\n判据同一条：**「它是什么类型」是一次性可判定的信息，就应该在入库时算一次存下来，而不是留给每个消费者各自推断。**",
    "## 相关\n\n- [文章元信息用发布日期而非创建日期](/wiki/agent-session/as-concept-%E6%96%87%E7%AB%A0%E5%85%83%E4%BF%A1%E6%81%AF%E7%94%A8%E5%8F%91%E5%B8%83%E6%97%A5%E6%9C%9F%E8%80%8C%E9%9D%9E%E5%88%9B%E5%BB%BA%E6%97%A5%E6%9C%9F) —— 同一条入库链路的元信息侧：要单独存的字段也要在抓取阶段一并提取\n- [清洗合并会破坏源格式语义](/wiki/agent-session/as-concept-%E6%B8%85%E6%B4%97%E5%90%88%E5%B9%B6%E4%BC%9A%E7%A0%B4%E5%9D%8F%E6%BA%90%E6%A0%BC%E5%BC%8F%E8%AF%AD%E4%B9%89) —— 同为「格式语义在管道中静默丢失」，那条讲**合并**环节，这条讲**导入**环节\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) —— 归一化步骤就是清洗层该做的事\n- 兼容fallback会让内容重复渲染 —— 另一类「渲染链选择错误」的后果\n- [列表卡片元信息用内容作者而非平台名](/wiki/agent-session/as-concept-%E5%88%97%E8%A1%A8%E5%8D%A1%E7%89%87%E5%85%83%E4%BF%A1%E6%81%AF%E7%94%A8%E5%86%85%E5%AE%B9%E4%BD%9C%E8%80%85%E8%80%8C%E9%9D%9E%E5%B9%B3%E5%8F%B0%E5%90%8D) —— 同一条入库链路的显示侧：卡片元信息该取哪个字段"
  ]
},
{
  "id": "as-concept-抓取结果不能无条件覆盖源数据",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "抓取结果不能无条件覆盖源数据",
  "oneLiner": "**二次抓取（网页全文补全）的结果必须通过有效性检查才能覆盖 RSS 原始内容 —— 否则反爬页面会把干净的标题和摘要覆盖成域名与脚本。**",
  "body": [
    "## 典型链路：RSS 提供正确标题 + 摘要 → 抓详情页遇到反爬 → 抓到一段 JavaScript 但「结果非空」→ 无条件覆盖 → 渲染器出于安全删除 `<script>` → 页面显示「暂无正文内容」，标题退化成域名。\n\n条件式全文补全：\n\n1. RSS 已有足够正文 → 直接使用，不访问网页。\n2. 只有短摘要 → 才尝试访问网页补全文。\n3. 网页结果必须通过有效性检查（不能只有脚本、验证码、登录页或域名标题）。\n4. 无效就放弃，保留 RSS 的标题、摘要、作者。\n5. 正文确定之后，才调用 AI 总结。\n\n推论：**非空 ≠ 有效**，抓取器的判据不能只看「结果是否为空」。同一批文章「有的正常有的不正常」，往往就是「有的抓成功、有的撞上反爬」的同一条逻辑。",
    "## 相关\n\n- [首次导入与增量更新要用不同规则](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E7%94%A8%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99)\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97)\n- [放宽过滤会连噪声一起放进来](/wiki/agent-session/as-concept-%E6%94%BE%E5%AE%BD%E8%BF%87%E6%BB%A4%E4%BC%9A%E8%BF%9E%E5%99%AA%E5%A3%B0%E4%B8%80%E8%B5%B7%E6%94%BE%E8%BF%9B%E6%9D%A5)\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86)"
  ]
},
{
  "id": "as-concept-放宽过滤会连噪声一起放进来",
  "updatedAt": "2026-06-23",
  "wikiSlug": "agent-session",
  "term": "放宽过滤会连噪声一起放进来",
  "oneLiner": "**为了修「新内容被跳过」而删掉入库过滤条件，会把「只有摘要、没有正文」的条目一起放进来。** 修漏和修假是两件事，改闸门时必须同时设质量下限，否则噪声立刻从新开的口子涌入。",
  "body": [
    "## 这次的形状：为了让新文章不被跳过，去掉了「`content_html` 长度 > 100」的过滤 → 结果同一源里只有 RSS `description`（约 40 字摘要）、没有 `content:encoded` 正文的条目也入库了。",
    "## 正确的改法是换判据，不是拆闸门\n\n- ❌ 删掉「必须有正文」的检查\n- ✅ 把判据换成**按源类型定义**的：中转源（WeRSS）条目**必须有正文**，不能拿 `description` 当正文兜底；摘要长度这类间接指标不能代替「正文是否存在」这个语义判断。",
    "## 一般化\n\n任何入库闸门都同时承担两个职责：**挡住噪声**（假）和**别误杀**（漏）。调参时只盯着一侧，另一侧必然失守。\n\n推论：**「不要入库没内容的东西」应该是入库层的硬约束，而不是靠上游少发或下游人肉清理。**",
    "## 相关\n\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) —— 收什么\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) —— 在哪一层收"
  ]
},
{
  "id": "as-concept-数据权威模型要先于同步与迁移确定",
  "updatedAt": "2026-06-25",
  "wikiSlug": "agent-session",
  "term": "数据权威模型要先于同步与迁移确定",
  "oneLiner": "**多端产品在写同步协议、迁移方案之前，必须先定「谁是数据权威」（source of truth）；这块不定，后面的同步、迁移、冲突、离线都会乱。** 这是完整方案里最容易缺、也最关键的一环。",
  "body": [
    "## 必须回答的四个问题\n\n- 2.0 之后云端 PostgreSQL 是 source of truth 吗？\n- 各端本地库（如 SwiftData）只是缓存，还是可离线编辑的本地真相？\n- 原来的 vault Markdown / HTML 文件还保留吗？\n- 用户能不能导出完整本地知识库？",
    "## 定完权威模型后，同步协议要写死这些\n\n- 每条数据带 `id / version / updatedAt / deletedAt / deviceId`\n- 客户端保存 sync cursor\n- 服务端提供 pull / push / conflict response\n- 删除用 tombstone，不物理删除\n- 标题改名、slug 改名、HTML 笔记、附件都要有规则\n- Web 和原生端（Swift）必须跑同一组同步测试用例",
    "## 迁移不能后补\n\n2.0 不能无视 1.x。要写清：首次启动扫描本地 vault；Markdown / HTML / clips / feeds 怎么导入云端；本地文件路径与云端 ID 怎么绑定；迁移失败如何回滚；用户是否可以选择「不上传，只本地使用」。",
    "## 相关\n\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 单条数据层面的「真源」判定\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 冲突合并时的时序依据\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98)\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B)"
  ]
},
{
  "id": "as-concept-文章元信息用发布日期而非创建日期",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "文章元信息用发布日期而非创建日期",
  "oneLiner": "**剪藏详情页顶部的日期应是「文章发布日期」，不是入库创建日期；创建日期只属于左侧列表。二者混用会让用户看到错误时间。前提是数据模型要分别存这两类字段——只有创建时间时，详情页只能拿它硬凑。**",
  "body": [
    "## 需要单独存的字段\n\n- 文章侧元信息（详情页展示）：发布日期、作者、来源名\n- 系统侧时间（列表/排序）：创建时间",
    "## 提取要点\n\n以公众号文章为例，`nickname` / `author` / `publish_time`（或 `ct`）这些字段不在正文 `#js_content` 里，而在页面脚本变量中，必须在抓取阶段提取并随剪藏落库，详情页才能渲染。",
    "## 相关\n\n- [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE) —— 同一条入库链路的上游环节\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A) —— 哪些字段该单独存，属于数据模型决定"
  ]
},
{
  "id": "as-concept-清洗合并会破坏源格式语义",
  "updatedAt": "2026-09-15",
  "wikiSlug": "agent-session",
  "term": "清洗合并会破坏源格式语义",
  "oneLiner": "**把飞书导出的原文清洗、合并成 Markdown 时，格式语义会静默丢失 —— 而验收标准是「渲染出来的样子」，不是「文本内容对不对」。** 内容一字不差，结构仍可能全错。",
  "body": [
    "## 一、三类现象（你当场逐个抓出来的）\n\n| 你看到的现象 | 根因 |\n|---|---|\n| 4 条编号条目被渲染成**一整段**，没分成 4 行 | Markdown 单个换行不产生新段落，需要**空行**或行尾两个空格 |\n| 列表前两项**序号消失**，第三项掉出列表变成普通段落 | `3.` 后**缺空格** → 该项不被识别为列表项，连带前面几项的解析一起错乱 |\n| 「有序列表**都是 1.**」 | 飞书里手写的 `1.` 由**显示端自动编号**，导出成 Markdown 后原样保留 —— 编号是假的 |\n\n你连问三轮（「这里的换行不是没变化吗」「为什么还有空行」「有序列表都是 1.」）才把三类问题区分开：**它们根因不同，不能用一个修法糊过去。**",
    "## 二、两条可迁移的判断\n\n1. **显示端生成的信息，导出即失真。** 自动编号、列表样式这类不属于源数据，一旦离开原编辑器就必须自己重建。\n2. **格式验收只能看渲染。** 只 grep / diff 文本会漏掉整类结构问题；必须看渲染后的 DOM 或截图，再决定是否算修好。",
    "## 三、修法\n\n- `\\d+.` 后补空格（与 `-` 后补空格同理），让列表项被正确识别\n- 连续列表项之间补空行，避免被当成同一段落\n- 源里全为 `1.` 的「小标题式」条目，按语义重新编号（RBAC0/1/2/3 是同一序列）",
    "## 相关\n\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) —— 清洗层的职责是过滤；**合并**一旦动了格式，就必须有渲染级验收\n- [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE) —— 同源的另一环节：这条讲**合并**，那条讲**导入**\n- 讲bug先讲现象再讲根因 —— 你追问的始终是现象（「换行没生效」），根因要自己去找\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-知识入库的筛选标准",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "知识入库的筛选标准",
  "oneLiner": "**不是所有 session 都值得入库：只有能提炼出概念或 topic 的轮才进。** 入库标准三条（你自己定的）：",
  "body": [
    "## 1. **对未来有帮助**\n2. **是知识型内容，不是动作层面**\n3. **有反复的疑问和思考、反复的提问 —— 这一条权重更大**",
    "## 为什么这样定\n\n- 全量入库 = 噪音淹没信号。判断成本只是从「提炼时」挪到了「检索时」，而检索时**没有上下文**，更判不动。\n- 「**反复提问**」是需求强度的**天然标注**：不用额外打分，行为本身已经把权重标好了。同一个疑问跨天跨 session 出现，说明它是真痛点，不是随口一问。\n- 「**动作层面**」不收：文件路径、命令参数、执行步骤都会过期，复用价值低。",
    "## 衍生的质疑（未决）\n\n- **概念 / topic 的划分是 agent 界定的，不是你先定义的** —— 你当场追问「这是你界定的吗」。\n  分类法若由 agent 单方面给出，使用者长期会错位；schema 必须由使用者确认过一次才算数。\n- 「知识单元 / 知识簇」同样是**被追问后才补的定义**，不是先有框架再落地。",
    "## 相关\n\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97)（在哪一层收）\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87)\n- [放宽过滤会连噪声一起放进来](/wiki/agent-session/as-concept-%E6%94%BE%E5%AE%BD%E8%BF%87%E6%BB%A4%E4%BC%9A%E8%BF%9E%E5%99%AA%E5%A3%B0%E4%B8%80%E8%B5%B7%E6%94%BE%E8%BF%9B%E6%9D%A5) —— 放宽准入时，噪声会从新开的口子涌入\n- [定义要由使用者确认](/wiki/agent-session/as-synthesis-%E5%AE%9A%E4%B9%89%E8%A6%81%E7%94%B1%E4%BD%BF%E7%94%A8%E8%80%85%E7%A1%AE%E8%AE%A4) —— 「概念/topic 的划分是谁定的」这一追问的综合判断\n- [权威wiki是索引加精选知识](/wiki/agent-session/as-knowledge-base-%E6%9D%83%E5%A8%81wiki%E6%98%AF%E7%B4%A2%E5%BC%95%E5%8A%A0%E7%B2%BE%E9%80%89%E7%9F%A5%E8%AF%86)"
  ]
},
{
  "id": "as-concept-知识库先编译再查，而不是查询时拼原文",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "知识库先编译再查，而不是查询时拼原文",
  "oneLiner": "**传统 RAG 每次提问都从原始文档的 chunk 里临时拼答案；LLM Wiki 式做法是先用 agent 把资料编译成持久、可维护的 Markdown 知识层，之后查询读的是这个已整理的结构。核心差别不是「要不要检索」，而是「知识在什么时刻被整理成结构」。**",
  "body": [
    "## 一、三层结构\n\n- `Raw sources`：原始资料，不可变，是事实源。\n- `Wiki`：LLM 生成并维护的页面（实体页 / 概念页 / 来源页 / 综合页 / 对比页）。\n- `Schema`：类似 `AGENTS.md`，规定怎么建页、命名、更新、查询。\n\n隐喻：**Obsidian 是 IDE，LLM 是程序员，wiki 是 codebase**。",
    "## 二、「不用 RAG」不等于「不检索」\n\n知识库小的时候，靠 `index.md` 就能定位；变大后 `index.md` 太长，必须补定位机制。Karpathy 也说中等规模 `index.md` 可用、变大再加本地搜索。\n\n两种定位机制角色不同：\n\n| | Embedding | Rerank |\n|---|---|---|\n| 作用 | 召回候选（粗找） | 精排候选（判断哪些最该读） |\n| 输入 | query + 全库向量 | query + 少量候选文本 |\n| 速度 / 成本 | 快、低 | 慢、较高 |\n| 缺点 | 容易泛相关 | 不适合扫全库 |\n\n流程：`query → embedding/BM25 召回约 50 条 → rerank 挑前 5 → LLM 读`。",
    "## 三、可迁移的判断\n\n- 反对的是**「每次都从 raw docs 临时拼答案」**，不是反对 agent 去查页面。\n- 选型先问：**知识在什么时刻被整理成结构** —— 查询时（RAG）还是入库时（编译）。\n- 编译层能持续维护（去重、检测矛盾、补链、健康检查），这是纯检索层拿不到的。\n\n来源：Karpathy 的 LLM Wiki gist（raw sources / wiki / schema 三层）；claude-obsidian 把该思路产品化（丢入网页/PDF/聊天记录 → 自动抽实体与概念、建双链、检测矛盾、会话结束更新 `hot.md`、健康检查孤儿页与死链）。",
    "## 相关\n\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86)\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97)\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A)\n- Agent读语义文件App读结构化存储\n- 检索是一条分层链 —— 本条是那条链的供给层\n- [代码库知识工具的选型](/wiki/agent-session/as-topic-%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9F%A5%E8%AF%86%E5%B7%A5%E5%85%B7%E7%9A%84%E9%80%89%E5%9E%8B)"
  ]
},
{
  "id": "as-concept-首次导入与增量更新要用不同规则",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "首次导入与增量更新要用不同规则",
  "oneLiner": "**「首次订阅导入」和「定时增量更新」是两种不同任务，不能共用一条固定条数的抓取规则 —— 否则首次的截断设置会被后续增量立刻抵消。**",
  "body": [
    "## ```text\n新增订阅 → 一次性首次导入：读当前快照，按用户选择回溯 N 篇，记录当前最顶部条目游标\n定时 Cron → 增量：从游标向现在，有多少新文章处理多少，不补被用户排除的旧历史\n```\n\n- 「有多少读多少」= 处理本次 RSS 提供的所有未见新条目，**不是每次重跑完整历史**。\n- 游标优先用 RSS 的 `guid` 或条目 URL，而不是单纯比较时间；首次导入时记下当时最顶部条目，之后只处理出现在它前面的新条目。\n- **首次导入不该依赖 Cron**：Cron 的职责只是发现并处理新文章。把首次导入标记成 `queued` 交给 Cron 接管，是职责错位。\n\n实测症状：用户选 5 篇，首次确实写入 5 篇，34 秒后 Cron 用固定「最新 10 条」补回剩余旧文章 —— 设置生效了，但被后续增量抵消，看起来像没生效。",
    "## 相关\n\n- [抓取结果不能无条件覆盖源数据](/wiki/agent-session/as-concept-%E6%8A%93%E5%8F%96%E7%BB%93%E6%9E%9C%E4%B8%8D%E8%83%BD%E6%97%A0%E6%9D%A1%E4%BB%B6%E8%A6%86%E7%9B%96%E6%BA%90%E6%95%B0%E6%8D%AE)\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B)\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A)\n- 活的能力取决于增量机制而不是生成质量 —— 本条是该 synthesis 的一处证据：首次与增量是两种任务，共用一条规则会互相抵消"
  ]
},
{
  "id": "as-concept-GitHub-打不开先分清主站与静态资源域名",
  "updatedAt": "2026-09-19",
  "wikiSlug": "agent-session",
  "term": "GitHub 打不开先分清主站与静态资源域名",
  "oneLiner": "**用户说\"打不开某个站点\"时，先问清是整站不通还是只有部分资源不通 —— 按域名分层测一遍，比直接归因\"被墙了\"准确得多。**",
  "body": [
    "## 一、实测分层结果\n\n| 目标 | 结果 |\n|---|---|\n| `github.com` | ✅ 200（稍慢） |\n| `api.github.com` | ✅ 200（很快） |\n| `raw.githubusercontent.com` | ❌ 超时，`http_code=000` |\n\n主站与 API 都通，只有静态资源域名不通。**这是中国大陆最常见的 GitHub 症状：主站能开，raw 与 release 下载不通。**\n\n对应的用户体感不是\"网页打不开\"，而是：README 里图片裂了、README 显示空白、点下载/克隆失败。**报障描述与真实故障点经常不是一回事。**",
    "## 二、DNS 层的异常信号\n\n`dig` 同时报了：\n\n```\n;; Warning: Message parser reports malformed message packet.\n```\n\n这个警告通常意味着**本地有 DNS 劫持 / 代理软件在中间插手**（Clash / Surge / AdGuard 之类 fake-ip 模式，或运营商 DNS 污染）。典型原因是代理开了 fake-ip 但分流规则漏了某个域名，于是走直连被墙。",
    "## 三、可复用的排查动作\n\n1. **按域名分层测**：主站、API、raw、codeload（clone/下载）分别测，锁定范围。\n2. **让用户在浏览器里对照打开**一个主站链接和一个 raw 链接，看哪个挂 —— 直接区分\"整站\"还是\"静态资源\"。\n3. **问清具体错误**：`ERR_CONNECTION_TIMED_OUT` / `ERR_CONNECTION_RESET` / 一直转圈，指向不同原因。\n4. **代理用户先试全局模式**再复测，用来区分\"规则漏了\"还是\"线路本身不通\"。",
    "## 相关\n\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)（同为\"先定层再排查\"）\n- 讲bug先讲现象再讲根因\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-INSERT-OR-IGNORE-会让旧行不更新",
  "updatedAt": "2026-06-16",
  "wikiSlug": "agent-session",
  "term": "INSERT OR IGNORE 会让旧行不更新",
  "oneLiner": "**「DB 里新数据的字段是对的，界面上旧数据还是旧值」——先查插入语句是不是 `INSERT OR IGNORE`。** 老记录已存在时整行被跳过，提取 / 解析逻辑改对以后，刷新也不会回填旧行，只有新入库的记录才有新值。",
  "body": [
    "## 现场\n\n- 现象：订阅列表封面显示正文第一张图，而不是 RSS feed 的题图（enclosure）\n- 后端提取逻辑已修对，DB 里**新入库文章**的 `cover_image` 确实是正确题图（已验证某 source 最新文章）\n- 但列表里仍看到正文图 —— 因为 `feed_entries` 用的是 `INSERT OR IGNORE`，旧文章的那一行 `cover_image` 还是空值 / 旧值",
    "## 排查要点\n\n1. 别停在「DB 里有正确值」——要问「这条正确值是新行还是旧行」\n2. 顺手排除掉不成立的怀疑：「前端走了另一条查询路径」在当前代码里不成立 —— 没有「全部」源，只有一条 `listEntriesForSource(source_id)` 数据路径\n3. 后端提取逻辑升级必须配一条回填（UPDATE / 一次性迁移），否则修复只对新数据生效",
    "## 相关\n\n- 修复范围分保守彻底与最小闭环 —— 同一封面提取问题的修复范围取舍\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 本条是该骨架的一处实例：只改提取逻辑，存量行不会跟上\n- 以前能用最近坏了先查自己改了什么\n- 图片加载失败要可重试并升级到HTTPS"
  ]
},
{
  "id": "as-concept-MCP-连不上先分层定位配置令牌与代理",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "MCP 连不上先分层定位配置令牌与代理",
  "oneLiner": "**MCP 连不上时按「配置 → 令牌 → 代理/TLS」分层定位，不要一上来就重装或反复重登。** 症状都是「连不上」，但断点可能在三层里的任意一层。",
  "body": [
    "## 分层排查顺序\n\n1. **配置层**：注册项是否还在（如 `~/.codex/config.toml` 里的 MCP 注册）。\n2. **令牌层**：授权是否有效、凭据是否加载。\n3. **代理层**：请求是否经本机代理、TLS 是否握手成功。\n\n判定技巧：**直连能拿到标准响应、经代理失败**，就能把锅锁死在代理层。实测：直连 `mcp.linear.app` 稳定返回标准 OAuth `401`（说明端点与令牌链路正常），而经过本机 HTTP/SOCKS 代理时 **TLS 握手直接失败** → 根因是 MCP 初始化继承了全局代理，连接在发送有效令牌前就被代理关闭。\n\n- 验证手段：用**一次性 `NO_PROXY`** 绕过代理复现，不改永久配置。\n- 修复方向：把该域名加入绕过代理的名单，而不是重新授权。",
    "## 「登录失效」可能是两个不同问题\n\n同一个「每次都要重新登录」的体感，背后其实是两件事，要分开归因：\n\n1. **配置项消失**：注册项被覆盖/删除，但插件文件与 Keychain 授权仍在（谁覆盖的若无审计证据，不能断言）。\n2. **代理阻断**：令牌已加载，但请求经代理时 TLS 被关闭 —— 看起来像登录失效，实际是网络问题。\n\n把两者混为一谈，就会误判成「OAuth 每次失效」，然后反复重登（治标不治本）。一次性做法：注册持久化在全局配置、凭据放系统 Keychain、故障域名绕过代理、MCP 名称固定不生成新凭据槽位。",
    "## 「授权过」不等于「这次连着」\n\n排查前先分清两样东西：\n\n- **授权缓存**（如 `~/.claude/mcp-needs-auth-cache.json`）只记录「某个会话里你同意过这个服务器的 OAuth」，作用是避免重复弹确认框。\n- **当前会话连哪些 MCP**，由**这个会话加载的 MCP 配置文件**决定。\n\n所以「我之前明明授权过 Linear，为什么现在没连上」的答案通常是：授权记录还在，但当前会话的配置里根本没有 Linear 这一项（它在另一个客户端的配置里），于是服务器压根没被启动。\n\n**授权是「允许连」，配置才是「去连接」。** 两者分属不同层，别用一层的证据去证明另一层。",
    "## 相关\n\n- 中转源不更新先分清是哪一层 —— 同为「同一症状、多层链路」的分层定位\n- 零延迟零尝试说明请求没发出去 —— 从响应特征反推断点在哪一层\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)\n- [一次性凭证拿到就落盘](/wiki/agent-session/as-concept-%E4%B8%80%E6%AC%A1%E6%80%A7%E5%87%AD%E8%AF%81%E6%8B%BF%E5%88%B0%E5%B0%B1%E8%90%BD%E7%9B%98)\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例：配置/令牌/代理三层定位\n- 无头环境连MCP要用APIKey而非OAuth —— 同一问题的另一面：运行形态决定凭证方式"
  ]
},
{
  "id": "as-concept-worktree-是独立目录，产物与配置都隔离",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "worktree 是独立目录，产物与配置都隔离",
  "oneLiner": "**git worktree 不是「在当前目录切了个分支」，而是「分支 + 一个独立文件夹」。因此在 worktree 里跑出来的服务、以及它的 `.env.local`，都只在那个目录生效：主目录照旧编译、照旧读自己的配置。看不到新效果、或改了环境变量不生效，先确认服务是从哪个目录启动的。**",
  "body": [
    "## 一、两个典型症状\n\n1. **「为什么其他分支能直接编译出效果，你的却是独立的」**\n   因为改动在隔离目录里，主目录跑的服务当然看不到。要看到效果只有两条路：进 worktree 目录启动服务，或把分支 merge / cherry-pick 回主目录（主目录若脏改动多，先评估冲突风险）。\n2. **「环境变量到底在哪个文件改」**\n   看服务从哪个目录启动：在哪个目录跑 `pnpm dev`，就改哪个目录的 `.env.local`。worktree 有自己的 `.env.local`，改主目录那份不会生效。",
    "## 二、可迁移的判断\n\n- **配置是就近解析的，不是全局的**：报错「key 没配」时先确认进程的工作目录，再确认改的是不是那份文件。\n- **隔离目录的收益与代价是同一件事**：好处是不污染主目录的一堆未提交改动；代价是产物与配置都不共享，必须显式合并或对齐。\n- 分支 ≠ 目录。说「切到某个分支看效果」之前，先确认那个分支 checkout 在哪个目录。\n- **分支是目录级状态，不是会话级**：同目录开多个会话会互相抢分支（见 [同目录多会话会抢分支](/wiki/agent-session/as-concept-%E5%90%8C%E7%9B%AE%E5%BD%95%E5%A4%9A%E4%BC%9A%E8%AF%9D%E4%BC%9A%E6%8A%A2%E5%88%86%E6%94%AF)）。",
    "## 三、worktree 里连不上的两个变体\n\n1. **接口返回 500 空响应**：`.env.local` 不被 Git 复制到新 worktree，认证配置校验失败 → `POST /api/login` 返回 500 空体。做法是软链接到主项目那份（`ln -s`），**链接不复制密钥**，主项目改配置后两边同时生效。\n2. **所有页面 404**：`next dev` 与 `next build` 共用 `apps/web/.next`，生产构建覆盖了正在运行的开发路由产物 —— 进程还活着，路由清单已失效。**跑 `next build` 前先停 dev。**\n\n另一个连带症状值得记住：前端假设「失败响应一定是 JSON」而直接 `res.json()`，空响应就抛 `Unexpected end of JSON input`，把真正的 500 错误遮住了。**错误处理不健壮会把根因藏起来**，排查时先看网络层的真实状态码，别被前端异常误导。",
    "## 相关\n\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同一取向：先确认跑的是哪一份\n- Cookie不区分端口所以同域多端口共享登录态 —— 同一 worktree 场景的另一半：cookie 与密钥\n- 备用构建目录不要嵌在next目录里 —— 构建/运行目录的位置会影响行为\n- [改版后旧路由仍指向旧实现](/wiki/agent-session/as-concept-%E6%94%B9%E7%89%88%E5%90%8E%E6%97%A7%E8%B7%AF%E7%94%B1%E4%BB%8D%E6%8C%87%E5%90%91%E6%97%A7%E5%AE%9E%E7%8E%B0) —— 同类：入口指向的不是你以为的那份"
  ]
},
{
  "id": "as-concept-两条写入路径要用内容判重",
  "updatedAt": "2026-07-08",
  "wikiSlug": "agent-session",
  "term": "两条写入路径要用内容判重",
  "oneLiner": "**当同一条数据有两条写入路径（本地直写 + 远端镜像回灌）时，只用 `id` 去重一定会重复 —— 因为两条路径会给出不同的 id。** 判重必须用「内容 + 会话 + 时间窗」这类与来源无关的特征。",
  "body": [
    "## 症状与根因\n\n- 现象：手机自己发的一条测试消息，同步回来后又在列表里出现了一次。\n- 链路：App 本地先写入一次（本地 + app-server 流式）；随后 watcher 从 `~/.codex` 读到同一轮，用**另一个 message id** 当 `session_delta` 推回 App；本地 `upsert` 只按 `id` 去重，于是当成新消息再插一条。\n- 根因：**去重键 `id` 是「路径相关」的，而重复判定需要「内容相关」的键。**",
    "## 正确做法\n\n- 远端导入时增加**镜像重复判断**：同一内容、同一会话、相近时间窗内视为同一条，不再插入。\n- 不要为了省事**关掉 watcher** —— 电脑原生同步还要靠它。去重是写入层的职责，不是数据源的职责。\n- 一般化：**「同一实体的多个 id」是常态**（本地 id / 服务端 id / 镜像 id / 原始链接）。判重时用最靠近内容的那套特征。",
    "## 相关\n\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86) —— 反面同族：那条讲「对照时要用两端都认的 key」，这条讲「去重时不能用来源相关的 key」\n- INSERT OR IGNORE会让旧行不更新 —— 同为「写入策略选错」导致的数据异常\n- [文件被回退先分清是工具还是并发会话](/wiki/agent-session/as-concept-%E6%96%87%E4%BB%B6%E8%A2%AB%E5%9B%9E%E9%80%80%E5%85%88%E5%88%86%E6%B8%85%E6%98%AF%E5%B7%A5%E5%85%B7%E8%BF%98%E6%98%AF%E5%B9%B6%E5%8F%91%E4%BC%9A%E8%AF%9D) —— 同为「同一份数据被两处改写」"
  ]
},
{
  "id": "as-concept-中转源不更新，先分清是哪一层",
  "updatedAt": "2026-06-23",
  "wikiSlug": "agent-session",
  "term": "中转源不更新，先分清是哪一层",
  "oneLiner": "**聚合端「这条源没更新」时，先数一下这条源经过几层中转。** 直连 RSS 只有两段（源站 → 聚合端），中转源（WeRSS 这类：公众号 → 中转服务抓取 → 中转 feed → 聚合端拉取）有三段，**任一环没准点都表现成同一个症状：聚合端没更新**。",
  "body": [
    "## 用「同类源的差异」切分故障层\n\n最快的定位手段是看**同一批订阅里哪类源是正常的**：\n\n- 正常的那批（如人人都是产品经理）是**普通 RSS**，绕过了中转层 → 说明聚合端的调度与拉取链路本身没问题。\n- 异常的那批都是**中转源** → 问题在中转层（没抓到 / 正文没补好 / feed 没刷新）或中转的调度没准点。\n\n推论：**「有的源正常」不等于「聚合端正常」**，要先把源按链路类型分组再比较，否则会误把中转层的锅算到聚合端。",
    "## 相关\n\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86) —— 分层之后，还要用对标识来确认到底有没有更新\n- 以前能用最近坏了先查自己改了什么 —— 时间维度的归因：先排除自己的回归"
  ]
},
{
  "id": "as-concept-仓库残留会误导对现状的判断",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "仓库残留会误导对现状的判断",
  "oneLiner": "**当运行时的东西已经全部来自数据库，仓库里的 `prototypes/`、旧文档、旧测试假数据、旧 migration 默认值仍然存在，会让 agent 反复误判「还有一套本地实现」。** 排查当前行为要直接看运行时真实数据源，不拿本地原型当依据。",
  "body": [
    "## 一、五类强误导信号\n\n| 信号 | 为什么误导 |\n|---|---|\n| `prototypes/` 里留着完整 HTML 模板 | 看起来像真实模板，slot 还完整，容易被当成运行时模板来排查 |\n| 历史文档仍在描述「已上线三套内置模板」 | 历史上下文被当成当前事实 |\n| 单测里构造的假数据行 id 就是 `professional/classic/modern` | 像内置模板注册表，其实只是模拟的 DB row |\n| 旧 migration 的 `templateId DEFAULT 'professional'` | 默认值虽已 drop，搜索时仍会看到痕迹 |\n| 目录名仍叫 `lib/templates` | 本身没问题，但配合上面几条就形成「有本地模板系统」的错觉 |",
    "## 二、要记住的现状表述\n\n> 运行时模板只来自数据库表。`prototypes/` 是历史原型 / 参考文件，不参与渲染。`professional/classic/modern` 若存在，也是数据库 row 的 id，不是本地模板分支。",
    "## 三、可迁移的判断\n\n- **「代码里有什么」≠「运行时用什么」。** 判断当前架构要查运行时数据源（DB row、真实请求返回），仓库里的文件只能证明「曾经这样」。\n- 历史残留越多，越要显式写一条「现状事实」来抵消——否则每个新来的 agent（或人）都会重踩一次。\n- 自己也要认账：这次被 `prototypes` 误导过，之后排查页面模板直接查 DB 的 `html/css`。",
    "## 相关\n\n- 面板多出的固定区块先查数据源再改前端 —— 同一取向：先看数据链路，再改渲染\n- 以前能用最近坏了先查自己改了什么 —— 另一种「默认假设」导致的误判\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架在「读代码」场景的实例\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条是该骨架的一处实例：文件里有什么 ≠ 运行时用什么"
  ]
},
{
  "id": "as-concept-以前能用最近坏了，先查自己最近的改动",
  "updatedAt": "2026-06-04",
  "wikiSlug": "agent-session",
  "term": "以前能用最近坏了，先查自己最近的改动",
  "oneLiner": "**「之前没问题、最近出问题」时，默认假设是自己这边的改动造成的回归：先去翻最近几次提交动了哪条链路，而不是先怀疑外部源（网站改版、上游接口、环境）。** 外部源没变，也完全能解释全部症状。",
  "body": [
    "## 一、排查顺序\n\n1. 列最近的改动，尤其**最近的修复提交**——修复往往就是下一次故障的起点。\n2. 把症状按「链路换实现的时间点」对齐：症状是跟着某次提交出现的，就是回归。\n3. 只有当自己的改动解释不了现象时，再去怀疑外部。",
    "## 二、修复补丁常把旧问题换个形态暴露\n\n为修「图片显示成 `![](url)` 字面量」，parser 从输出 Markdown 改成输出 inline HTML，同时加了兜底「渲染前剥掉所有 `<span>`」。图片是好了，但副作用是：靠 `span/section` 组织版式的页面（公众号文章）段落和样式被压平。\n\n教训：补丁解决的是**现象**，如果它的作用面比问题大（这里是全局剥标签），副作用就会以另一种症状出现。改全局渲染规则前，先想清楚有哪些页面依赖被改掉的结构。",
    "## 三、换存储载体会让数据质量问题从隐性变显性\n\n同一段内容，从 SQLite（只当 app 内部数据用）改成落盘 Markdown 文件后，parser 输出质量就变成了「数据真相」：以前视觉问题不显眼，现在文件里第 18 行就是一整条超长 inline HTML，一眼可见。\n\n推论：**持久化位置/格式变更后，要重新审视上游产物的质量**。问题不是新产生的，只是从看不见变成看得见。",
    "## 四、连带的表象不要单独修\n\n窗口偏移是这个坏数据的第二后果（超长 inline HTML + 缺横向溢出约束把阅读区撑宽，露出透明背景），不是布局单独写错。先修根因，表象跟着消失。",
    "## 相关\n\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) —— 本条补上时间维度的归因：先看自己最近改了什么\n- 讲bug先讲现象再讲根因\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B)"
  ]
},
{
  "id": "as-concept-停机前先确认有可恢复备份",
  "updatedAt": "2026-07-24",
  "wikiSlug": "agent-session",
  "term": "停机前先确认有可恢复备份",
  "oneLiner": "**对生产数据做需要停机的变更（迁移、替换数据库、重写存储）之前，必须先确认存在可恢复的备份 —— 优先用平台自带的卷级 snapshot，而不是自己临时想办法。**",
  "body": [
    "## 判断与顺序\n\n1. 先查平台是否提供卷级 backup / snapshot 能力；有就直接用平台能力。\n2. 平台没有，才自己加**管理员下载备份通道**。\n3. **不会在无备份的情况下替换数据库。**",
    "## 为什么\n\n- 「先停机、再迁移、再起服务」的窗口里，任何一步失败都可能只剩一个半迁移状态的库；没有备份就没有退路。\n- 数据安全要求会直接改变执行顺序：原本可以直接推进的迁移，会因为「还没有可恢复备份」而先停在准备阶段。\n- 备份是**前置条件**，不是出问题后的补救手段 —— 事后才发现没有备份就来不及了。",
    "## 相关\n\n- [滚动部署期间改库结构会撞上旧容器的锁](/wiki/agent-session/as-concept-%E6%BB%9A%E5%8A%A8%E9%83%A8%E7%BD%B2%E6%9C%9F%E9%97%B4%E6%94%B9%E5%BA%93%E7%BB%93%E6%9E%84%E4%BC%9A%E6%92%9E%E4%B8%8A%E6%97%A7%E5%AE%B9%E5%99%A8%E7%9A%84%E9%94%81) —— 需要停机窗口的具体场景\n- [改远端库结构前先确认库身份与回滚](/wiki/agent-session/as-concept-%E6%94%B9%E8%BF%9C%E7%AB%AF%E5%BA%93%E7%BB%93%E6%9E%84%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BA%93%E8%BA%AB%E4%BB%BD%E4%B8%8E%E5%9B%9E%E6%BB%9A) —— 同族：先确认库身份与回滚能力\n- Schema是声明Migration是历史\n- 回滚要保留数据迁移的兼容路径"
  ]
},
{
  "id": "as-concept-先分清平台错误还是应用错误",
  "updatedAt": "2026-09-14",
  "wikiSlug": "agent-session",
  "term": "先分清平台错误还是应用错误",
  "oneLiner": "**`500 status code (no body)` 这种「有状态码、无响应体」的报错是平台层（Vercel 函数超时/崩溃）的格式；应用代码的错误都会是带 `{\"error\": \"...\"}` 的 JSON。凭响应体就能先分流排查方向。**",
  "body": [
    "## 一、判断依据\n\n| 形态 | 归属 | 往哪查 |\n|---|---|---|\n| `500 status code (no body)` | **平台**（函数超时 / 崩溃） | 平台函数日志、`maxDuration`、执行耗时 |\n| `{\"error\": \"...\"}` JSON | **应用代码** | 自己代码里的错误分支 |\n\n格式本身是信号：应用层只要还能返回，就一定会带上自己的错误体；返回不了，才是平台在替你回。\n\n### 客户端（IDE）的报错同样按「归属层」先分流\n\n`Invalid signature, please retry.` 这类**带 Retry 按钮的英文报错**，先别去查自己的代码：**先在仓库里搜这个字符串**——搜不到、且项目错误文案都是中文、dev server 日志干净，就说明它来自 IDE 的 AI 对话客户端到模型网关的签名校验，与项目代码、worktree、dev server 都无关。\n\n常见诱因：网络代理干扰（请求被篡改/重放）、本机时钟漂移（签名带时间戳）、登录态过期。处理是点 Retry / 加直连规则 / 重新登录，**不要当成项目 bug 去改代码**。\n\n判据：**报错文案的语言与风格和项目不一致 + 仓库里搜不到该字符串** ⇒ 归属在外部层。它只会打断当前那次生成，不会破坏已执行的远程操作（SSH 上跑完的命令是原子完成的）。",
    "## 二、配套动作\n\n- **先复测线上**：如果生产环境此刻 200（哪怕要 14s），说明是**间歇性故障**，不要按\"服务挂了\"去改代码。\n- 平台函数超时往往和**重试链的总耗时**耦合（见 [轮换要带健康状态记忆](/wiki/agent-session/as-concept-%E8%BD%AE%E6%8D%A2%E8%A6%81%E5%B8%A6%E5%81%A5%E5%BA%B7%E7%8A%B6%E6%80%81%E8%AE%B0%E5%BF%86)：盲目串行 12 组 × 8s = 96s > 60s 上限）。",
    "## 三、附带的一次误判澄清\n\n「主题闪烁」只在**客户端导航**时出现（Provider 新挂载，异步读 `localStorage`，此时页面已有旧主题状态）；**全页刷新本来就正常**，所以\"我刷新没遇到\"与\"存在这个问题\"并不矛盾。影响极小 → 优先级低。",
    "## 相关\n\n- 零延迟零尝试说明请求没发出去（同为「从错误形态反推归属层」）\n- GitHub打不开先分清主站与静态资源域名\n- [轮换要带健康状态记忆](/wiki/agent-session/as-concept-%E8%BD%AE%E6%8D%A2%E8%A6%81%E5%B8%A6%E5%81%A5%E5%BA%B7%E7%8A%B6%E6%80%81%E8%AE%B0%E5%BF%86)\n- 讲bug先讲现象再讲根因\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-凭据来源不唯一会让客户端反复刷新",
  "updatedAt": "2026-10-03",
  "wikiSlug": "agent-session",
  "term": "凭据来源不唯一会让客户端反复刷新",
  "oneLiner": "**同一份凭据文件里并存两套认证来源时（如 ChatGPT 的 OAuth 登录态 + 第三方工具注入的中转 `OPENAI_API_KEY`），客户端的刷新逻辑会在两套凭据之间互相触发，表现为「一打开就反复刷新」。判据：先看 `auth_mode` 声明的是哪一套，再看文件里实际有哪几套凭据——两者对不上，就是来源不唯一。**",
  "body": [
    "## 判据：字段声明的和文件里有的对不上\n\n以 Codex 的 `~/.codex/auth.json` 为例：\n\n- `auth_mode: \"chatgpt\"` → 声明走 OAuth，靠 `tokens.refresh_token` 定期刷新；\n- 同一文件里却出现 `OPENAI_API_KEY: \"sk-...\"` → 另一套 key 认证。\n\n`auth_mode` 只声明了**一套**，文件里实际躺着**两套**。谁都不确定该用哪个，刷新就会来回打架。",
    "## 定位动作（按顺序）\n\n1. 看 `auth_mode` 声明的是哪一套认证。\n2. 列出文件里**实际存在**的凭据字段（`tokens.*` vs `*_API_KEY`），确认是不是只有一套。\n3. 看 `config.toml` 期望哪一套：`model_provider` + `base_url` + `requires_openai_auth` 决定客户端打算用登录态还是 key。**配置期望 key、auth 里却是登录态（或反之）= 冲突。**\n4. 有历史副本时比对 `last_refresh` 与 token 的 `exp`：旧副本的 token 已过期却仍被读，是反复刷新的直接线索。",
    "## 处理：让来源唯一\n\n- 二选一，不要并存：要么纯登录态（登出后重新登录，清掉被注入的 key），要么纯 key（换成 key 认证的 provider）。\n- key 若曾写进会被外发的文件（聊天/网盘/同步目录），按泄漏处理并轮换。\n- 第三方配置切换工具（如 cc-switch）往 auth 里写过 key 后，即使工具已卸载，残留也不会自动清除。",
    "## 相关\n\n- [凭据正确却被拒先查登录校验哪个字段](/wiki/agent-session/as-concept-%E5%87%AD%E6%8D%AE%E6%AD%A3%E7%A1%AE%E5%8D%B4%E8%A2%AB%E6%8B%92%E5%85%88%E6%9F%A5%E7%99%BB%E5%BD%95%E6%A0%A1%E9%AA%8C%E5%93%AA%E4%B8%AA%E5%AD%97%E6%AE%B5) —— 同族：先确认客户端在校验哪个字段\n- 同名provider冲突会让模型路由漂移 —— 配置层的同名冲突；本条是凭据层的来源冲突\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 同一条原则：一个维度只能有一个真源\n- [验不到的部分要显式记为未验证](/wiki/agent-session/as-concept-%E9%AA%8C%E4%B8%8D%E5%88%B0%E7%9A%84%E9%83%A8%E5%88%86%E8%A6%81%E6%98%BE%E5%BC%8F%E8%AE%B0%E4%B8%BA%E6%9C%AA%E9%AA%8C%E8%AF%81) —— 本条根因来自一次实际比对，修复效果未在该会话中复验"
  ]
},
{
  "id": "as-concept-凭据正确却被拒先查登录校验哪个字段",
  "updatedAt": "2026-07-24",
  "wikiSlug": "agent-session",
  "term": "凭据正确却被拒先查登录校验哪个字段",
  "oneLiner": "**「账号密码是对的，但 API 说凭据无效」不一定错在密码 —— 先看登录逻辑用哪个字段做校验。** 实测：登录只按 `users.username` 匹配，而用户提供的是 `users.email`，凭据本身没错，是**标识字段错配**。",
  "body": [
    "## 为什么容易误判\n\n认证失败通常只有一种对外表现（401 / 拒绝），但内部原因至少三类：\n\n1. 密码错\n2. 账号不存在\n3. **校验用的字段与用户提供的凭据不是同一个**（username ≠ email）\n\n第三类的症状和前两类完全一样，但**改密码永远修不好**，反复重试还可能触发账号锁定。",
    "## 正确做法\n\n- 读登录校验代码，确认 `WHERE` 用的是哪个字段（username？email？手机号？），再确认用户给的凭据落在哪个字段。\n- 一次性重置脚本要**同时按 username 或 email 查找匹配账号**，只改密码哈希，不新建用户、不动业务数据。\n- 重试要有上限：停止重试是为了避免账号被锁定，不代表服务端坏了 —— 不要把它当成根因。",
    "## 相关\n\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86) —— 同族：先确认「用的是不是同一个标识」\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87)"
  ]
},
{
  "id": "as-concept-功能缺失先确认运行的是哪份产物",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "功能缺失先确认运行的是哪份产物",
  "oneLiner": "**「我本地 app 还是旧版本、新功能都没有」这类症状，第一件事不是查功能代码，而是确认你实际打开的是哪一份产物：安装目录（`/Applications/*.app`）里的是旧版本，刚构建出的新版本还躺在构建输出目录里。构建完成 ≠ 安装完成。**",
  "body": [
    "## 一、为什么容易误判\n\n- 构建流水线（build / test / bundle）与「安装到用户会点开的位置」是两件独立的事。跑完 `build` 只说明产物生成了，不代表 Launchpad/Finder 打开的入口被替换。\n- 打包器打的 bundle 也可能带旧版本号：改版本号后若只重跑了构建、没重跑打包步骤，产物名字对了、内容还是旧的。\n- 用户感知到的是「功能缺失」，很自然会往功能实现上找，而真相在分发链路上。",
    "## 二、排查顺序\n\n1. 确认打开的绝对路径（`/Applications/xxx.app` vs 构建输出目录里的 bundle）。\n2. 读那份产物的版本号，而不是读源码里的版本号。\n3. 再确认打包步骤是否在版本号变更**之后**重跑过。",
    "## 三、可迁移的判断\n\n- **「改了代码」和「用户能用到」之间隔着构建、打包、安装三段**，任何一段没跟上，症状都表现为「功能不存在」。\n- 版本号这种元数据要在打包步骤里生成，否则会与实际内容脱节。\n- 覆盖安装前先备份旧版，回滚成本才低。",
    "## 相关\n\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) —— 同一取向：判断现状要看真正在跑的那一份，而不是「文件里有什么」\n- [改版后旧路由仍指向旧实现](/wiki/agent-session/as-concept-%E6%94%B9%E7%89%88%E5%90%8E%E6%97%A7%E8%B7%AF%E7%94%B1%E4%BB%8D%E6%8C%87%E5%90%91%E6%97%A7%E5%AE%9E%E7%8E%B0) —— 同类：入口指向的还是旧实现\n- 真机白屏先分清Debug包与证书 —— 同类：先分清跑的是哪份产物/哪个构建\n- 以前能用最近坏了先查自己改了什么 —— 另一种默认假设导致的误判\n- [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE) —— 同族：部署成功 ≠ 新配置生效"
  ]
},
{
  "id": "as-concept-只有第一发失败要查冷启动与连接重试.md",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "只有第一发失败要查冷启动与连接重试.md",
  "oneLiner": "**「每个会话的第一发稳定失败、点重试就好」这种模式，先查服务端无状态依赖的冷启动，而不是业务逻辑。** 实例：Neon serverless 计算实例闲置后自动挂起，下一次连接要先唤醒（约 2.1s 握手），第一发的查询在唤醒完成前失败 → 应用层 DB 操作没有任何重试 → 整个 turn 被兜底成 500 → 前端弹「暂时遇到问题」；重试时实例已热，秒过。",
  "body": [
    "## 分诊要点\n\n- **失败点是稳定的、可重复的**（每次会话首发、耗时相近）⇒ 排除随机 bug，找「一次性初始化」的东西。\n- **失败发生在业务动作之前**：本例卡在写用户消息 + 建 turn 租约的 DB 操作，在 `reply.hijack()`（设 200）之前，所以拿到的是**未映射的内部错误**（领域错误会是 409/400），而不是明确的业务错误码。\n- **错误文本看不到时**，先确认日志级别（`logger: false` 会让「日志干净」变成假象），再决定要不要临时开日志复现。",
    "## 修在哪一层\n\n补**最底层**那格：给 DB 写入加 1~2 次短退避重试。**不要动「整轮 turn 自动重跑」**——一个 turn 里可能已经产生副作用（模型已调用、已计费、已建提案），盲目重跑会重复执行。",
    "## 第二处实例（2026-08-03 @ 15:54）\n\n同一种形态再现于 Neon：`P1001: Can't reach database server` 发生在 `migrate deploy` 时，**SQL 根本没执行**（migration 仍是待执行状态）；同一命令重试即成功。判据一样 —— **连接层的瞬时失败不要当成「SQL 写错了」**，先复测连接（域名解析 / `5432` 端口 / 能否读库状态），再决定重跑还是查语句。",
    "## 相关\n\n- [迁移文件存在不等于数据库已升级](/wiki/agent-session/as-concept-%E8%BF%81%E7%A7%BB%E6%96%87%E4%BB%B6%E5%AD%98%E5%9C%A8%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B7%B2%E5%8D%87%E7%BA%A7)\n- [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A)\n- [异步补齐长期不生效要查写入失败](/wiki/agent-session/as-concept-%E5%BC%82%E6%AD%A5%E8%A1%A5%E9%BD%90%E9%95%BF%E6%9C%9F%E4%B8%8D%E7%94%9F%E6%95%88%E8%A6%81%E6%9F%A5%E5%86%99%E5%85%A5%E5%A4%B1%E8%B4%A5)\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) —— 从错误形态反推归属层\n- [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE)"
  ]
},
{
  "id": "as-concept-合并绿灯要对应当前-HEAD",
  "updatedAt": "2026-07-31",
  "wikiSlug": "agent-session",
  "term": "合并绿灯要对应当前 HEAD",
  "oneLiner": "**GitHub 显示「可合并」、CI 全绿，针对的是那个绿色提交，不是刚改好的版本。** worker 在本地又提交了修复但未 push 时，分支显示 `ahead 1`，PR 上的绿灯仍是旧代码的结果 —— **不能作为验收依据**。",
  "body": [
    "## 验收前必须核对\n\n1. 绿灯 CI 对应的 commit 是不是当前最新 HEAD。\n2. 本地未 push 的提交先 push，再重跑 CI。\n3. 之前的 APPROVED / review 是否已随 HEAD 变化而过时。",
    "## 为什么容易误判\n\n「代码写完了」「测试通过了」都发生在本地，而 PR 页面展示的是远端最后一次推送的结果。两者之间只要有一次本地提交，状态就不同步了。同理，卡片显示「可合并」也可能只是旧基线恰好没冲突。",
    "## 相关\n\n- [交付前先同步主干](/wiki/agent-session/as-concept-%E4%BA%A4%E4%BB%98%E5%89%8D%E5%85%88%E5%90%8C%E6%AD%A5%E4%B8%BB%E5%B9%B2)\n- 开PR前先确认基线的远端状态"
  ]
},
{
  "id": "as-concept-合盖仍会睡眠后台任务会被中断",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "合盖仍会睡眠后台任务会被中断",
  "oneLiner": "**想让 Codex/Claude 这类后台任务跑完，不能靠 agent 自己的设置——它们没有「合盖后继续跑」的开关，控制权在 macOS 电源管理。机器一旦睡眠，后台任务就停/断。**",
  "body": [
    "## 做法\n\n- 插电时不自动睡眠：`sudo pmset -c sleep 0`（屏幕仍可 `displaysleep` 自动关）\n- 临时保持唤醒：`caffeinate -dimsu`，直到手动 `Ctrl+C`",
    "## 关键限制\n\n**MacBook 合盖通常仍会睡眠**，除非接电源 + 外接显示器/键鼠进入 clamshell 模式。否则合盖想继续跑，`caffeinate` 也不一定可靠。\n\n最稳方案：插电、不合盖、屏幕可自动关闭，并设置不自动睡眠。",
    "## 想「合盖也继续跑」的四条路\n\n| 方案 | 有效性 | 备注 |\n|---|---|---|\n| 外接模式（clamshell） | ✅ 正规 | 接电源 + 外接显示器（+键鼠）后合盖不睡眠 |\n| `caffeinate -is` | ⚠️ 部分 | 只能阻止插电下的**空闲**睡眠，**拦不住合盖触发的睡眠** |\n| `sudo pmset -a disablesleep 1` | ✅ 无外接也有效 | 用完记得 `disablesleep 0` 关回来；散热变差、电池持续耗电 |\n| Amphetamine（App Store） | ✅ 省心 | 勾选 Closed-Display Mode，图形界面可控 |\n\n注意：睡眠期间进程是**被冻结**而不是被杀，开盖会恢复；但长任务可能因网络长连接（SSH / API / SSE）超时在唤醒后报错。",
    "## 相关\n\n- [高负载发烫先排除负载而非硬件](/wiki/agent-session/as-concept-%E9%AB%98%E8%B4%9F%E8%BD%BD%E5%8F%91%E7%83%AB%E5%85%88%E6%8E%92%E9%99%A4%E8%B4%9F%E8%BD%BD%E8%80%8C%E9%9D%9E%E7%A1%AC%E4%BB%B6)\n- 远程控制本机Agent要让bridge跑在本机"
  ]
},
{
  "id": "as-concept-同一应用开出两个窗口先查单实例限制",
  "updatedAt": "2026-06-12",
  "wikiSlug": "agent-session",
  "term": "同一应用开出两个窗口先查单实例限制",
  "oneLiner": "**桌面应用出现两个窗口，先怀疑两件事：框架没做单实例限制、旧进程没退出 —— 而不是渲染 bug。** 两次启动（例如重跑 dev 命令）就会留下两个独立进程实例，各自开一个窗口。",
  "body": [
    "## 排查顺序：\n\n1. 确认是不是自己又启动了一次（`pnpm tauri dev` 之类）\n2. 看旧实例是否还在运行、窗口是否只是没关闭\n3. 框架默认是否提供 single-instance 限制；没有就补上，避免用户误开多实例\n\n判定要点：两个窗口内容/主题可能不同（一个是你之前的运行、一个是最新启动的），这恰恰说明是**两个进程**，而不是一个进程渲染了两次。",
    "## 相关\n\n- [杀端口要区分服务端与客户端连接](/wiki/agent-session/as-concept-%E6%9D%80%E7%AB%AF%E5%8F%A3%E8%A6%81%E5%8C%BA%E5%88%86%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B8%8E%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5) —— 同类：先分清有几个进程/连接，再动手\n- 以前能用最近坏了先查自己改了什么 —— 先怀疑自己又启动了一次，而不是先改代码\n- 零延迟零尝试说明请求没发出去 —— 同类：从「现象计数」反推归属层"
  ]
},
{
  "id": "as-concept-同名-provider-冲突会让模型路由漂移",
  "updatedAt": "2026-08-10",
  "wikiSlug": "agent-session",
  "term": "同名 provider 冲突会让模型路由漂移",
  "oneLiner": "**自定义 provider 与内置 provider 用了同一个 id 时，一个「只带了模型名、没带 provider」的会话在解析归属时会命中内置的那个，于是模型名被规范化成 `provider/model` 并路由到内置后端——请求发去了别处，而配置看起来完全没变。**",
  "body": [
    "## 触发链\n\n1. 导入外部会话（原生 Codex → 平台）时**只导入了消息**，`provider_id` 留空，模型字段还是原生的裸名。\n2. 从该会话派生新对话时，平台要把裸名解析回具体供应商。\n3. 此时若自定义供应商和内置供应商**同名**（都叫 `chatgpt`），解析会命中内置的那个。\n4. 模型名被规范化成带前缀的完整 ID，请求发给**内置后端**而不是用户自己的中转 → 报错。",
    "## 判据：用报错措辞判断请求实际落在谁那里\n\n这是本条最有价值的可迁移动作 —— 同一类 404，措辞能区分后端：\n\n| 措辞 | 说明请求发到了 |\n|---|---|\n| `not supported by any configured account in this group` | 官方后端（措辞里带「account / group」这类官方账号体系词汇） |\n| `Invalid model name passed in model=...` | 中转/兼容网关（措辞只谈模型名） |\n\n所以**不要只看状态码**。404/400 本身不告诉你落在哪一层，错误文案才告诉你。",
    "## 规避\n\n- 自定义 provider **起一个不与内置重名的 id**（如用自己中转的名字），这是成本最低的根治。\n- 导入/迁移来的会话要**显式重绑 provider**，不要依赖自动解析。\n- 派生新对话（引用卡片 → 新建）时，确认新会话继承的 provider 是不是你期望的那个。",
    "## 相关\n\n- 模型ID是入口相关的 —— 前缀是怎么被加上的\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) —— 同族：先定位归属层\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 同名实体必须有唯一的 id 约定\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)"
  ]
},
{
  "id": "as-concept-同目录多会话会抢分支",
  "updatedAt": "2026-07-21",
  "wikiSlug": "agent-session",
  "term": "同目录多会话会抢分支",
  "oneLiner": "**Git 的 `HEAD` / 当前分支是「目录级」状态，不是「会话级」状态。** 多个 agent 会话打开同一个目录时，其中一个执行 `git switch <branch>`，这个目录的当前分支立刻变了，**其他会话看到的也是这个分支** —— 不是「它影响了别的会话」，而是它们本来就在同一份 working tree 上。",
  "body": [
    "## 隔离的唯一手段是独立 worktree\n\n```bash\ngit worktree add .worktrees/zoo-19 -b codex/zoo-19-...\n```\n\n独立 worktree 是「分支 + 一个独立文件夹」，各会话的分支才互不影响。",
    "## 可迁移的判断\n\n**遇到「我这边没动，别处却变了」，先确认这个状态的作用域是目录级还是会话级。** 分支、`.env`、构建产物都属目录级；把它们当会话级私有状态用，必然互相踩。",
    "## 相关\n\n- worktree是独立目录产物与配置都隔离 —— 同一机制的产物与配置侧面\n- [文件被回退先分清是工具还是并发会话](/wiki/agent-session/as-concept-%E6%96%87%E4%BB%B6%E8%A2%AB%E5%9B%9E%E9%80%80%E5%85%88%E5%88%86%E6%B8%85%E6%98%AF%E5%B7%A5%E5%85%B7%E8%BF%98%E6%98%AF%E5%B9%B6%E5%8F%91%E4%BC%9A%E8%AF%9D) —— 并发会话写冲突的排查顺序\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) —— 一 agent 一 worktree 一 branch 的隔离层设计"
  ]
},
{
  "id": "as-concept-回滚要保留数据迁移的兼容路径.md",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "回滚要保留数据迁移的兼容路径.md",
  "oneLiner": "**代码可以回滚到上一个版本，但已经跑过的数据迁移不会自己回滚 —— 所以「回滚」这件事必须在写迁移时就设计好兼容路径，而不是出事时才发现回不去。**",
  "body": [
    "## 机制\n\n镜像/代码的回滚是**换一个 tag**（可追踪、可复现），成本极低；数据库结构变更是一次性、不可逆的。两者不对称：\n\n```\n代码回滚：docker pull <上一个 commit SHA> + up -d   ← 秒级\n数据回滚：无（除非迁移本身写了向后兼容）\n```\n\n⇒ 旧版本代码若读不懂新结构（或缺列、缺表），回滚就等于把服务打挂。因此：\n\n- 迁移优先选**向后兼容**的形态：先加列/加表、双写、再切读，最后才删旧结构。\n- 破坏性变更（删列/改名）要和代码切换分开发布，中间留一个「新旧都能跑」的版本。\n- 回滚步骤必须**在发布前就写下来**并验证过，不是事后补文档。",
    "## 相关\n\n- [停机前先确认有可恢复备份](/wiki/agent-session/as-concept-%E5%81%9C%E6%9C%BA%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E6%9C%89%E5%8F%AF%E6%81%A2%E5%A4%8D%E5%A4%87%E4%BB%BD)\n- [滚动部署期间改库结构会撞上旧容器的锁](/wiki/agent-session/as-concept-%E6%BB%9A%E5%8A%A8%E9%83%A8%E7%BD%B2%E6%9C%9F%E9%97%B4%E6%94%B9%E5%BA%93%E7%BB%93%E6%9E%84%E4%BC%9A%E6%92%9E%E4%B8%8A%E6%97%A7%E5%AE%B9%E5%99%A8%E7%9A%84%E9%94%81)\n- Schema是声明Migration是历史\n- [改远端库结构前先确认库身份与回滚](/wiki/agent-session/as-concept-%E6%94%B9%E8%BF%9C%E7%AB%AF%E5%BA%93%E7%BB%93%E6%9E%84%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BA%93%E8%BA%AB%E4%BB%BD%E4%B8%8E%E5%9B%9E%E6%BB%9A)\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91)"
  ]
},
{
  "id": "as-concept-备用构建目录不要嵌在-next-目录里",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "备用构建目录不要嵌在 next 目录里",
  "oneLiner": "**为了在别的端口起第二个 dev server 而改 `distDir` 时，把临时目录放在 `.next` 里面（如 `.next/codex-3001`）会触发 Next 16/Turbopack 的目录写入与 manifest 竞态，页面直接报 `Internal Server Error`（找不到 `routes-manifest.json` / `pages-manifest.json`）。改用 `.next-codex-3001` 这种与 `.next` 同级的目录即可。**",
  "body": [
    "## 连带问题\n\n- 备用 distDir 目录若不在 eslint ignore 里（默认只忽略 `**/.next/**`），`eslint .` 会把它当源码扫，产生莫名其妙的 lint 失败。构建产物目录要显式排除。\n- `next.config.mjs` 是 JS 文件，eslint 若没声明 Node globals，直接访问 `process.env` 会报 `no-undef`。",
    "## 相关\n\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)"
  ]
},
{
  "id": "as-concept-对照两端要用同一条标识",
  "updatedAt": "2026-06-23",
  "wikiSlug": "agent-session",
  "term": "对照两端要用同一条标识",
  "oneLiner": "**判断「这条内容到底有没有入库」时，必须拿系统间共享的那条标识去对照。** 用中转平台的内部 URL 去查聚合端，明明已经入库也会看起来像没更新。",
  "body": [
    "## 具体到这次：聚合端存的是 feed 里的 `guid/link`，也就是**公众号原文链接**（`mp.weixin.qq.com/s/...`）；用户拿来对照的是中转平台自己的页面 URL（`/views/article/<id>`）。两者不是同一套标识，于是「查不到 = 没更新」的结论是假的——实际那条已经带正文入库了。",
    "## 一般化\n\n排查「两端数据不一致」时先问一句：**我用来对照的 key，是不是两端都认的那个 key？**\n\n- 不是同一个 key → 先换 key 重查，再谈有没有 bug。\n- 同一内容在两套系统里有多套 ID（内部 ID / 原始链接 / 中转页 URL）时，以**最靠近内容源的那套**为准。\n\n推论：**表象「没更新」有两个来源——真的没同步，和标识不匹配。** 后者成本极低，应该先排除。",
    "## 相关\n\n- 中转源不更新先分清是哪一层 —— 排除标识问题后，再去分层定位\n- 以前能用最近坏了先查自己改了什么"
  ]
},
{
  "id": "as-concept-开-PR-前先确认基线的远端状态",
  "updatedAt": "2026-07-18",
  "wikiSlug": "agent-session",
  "term": "开 PR 前先确认基线的远端状态",
  "oneLiner": "**本地主线领先远端主线很多提交时，从功能分支直接开 PR 会把这一长串与本次任务无关的历史一起带进去。开 PR 前先比较本地主线与远端主线，别只看自己的分支。**",
  "body": [
    "## 实际情形\n\n一次「合并收尾」中，提交后检查远端才发现：`origin/main` 停在 7 月 12 日，而本地 `main` 已领先 76 个提交。此时直接开 ZOO-17 的 PR，会把那 76 个历史提交全部带进去 —— PR 的 diff 已经不等于这次任务的范围。",
    "## 处理顺序\n\n1. 先量差距：本地主线比远端领先多少提交\n2. 判断这些提交是否已在别处开过 PR / 合并过\n3. 再选合并方式：先同步主线，或让 PR 基于远端主线，而不是直接推分支",
    "## 与「无共同祖先」的区别\n\n| 情形 | 特征 | 处理 |\n|---|---|---|\n| 本文 | 有共同祖先，本地只是没推 | 同步主线后再开 PR |\n| [远端主线可能与本地主线无共同祖先](/wiki/agent-session/as-concept-%E8%BF%9C%E7%AB%AF%E4%B8%BB%E7%BA%BF%E5%8F%AF%E8%83%BD%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%B8%BB%E7%BA%BF%E6%97%A0%E5%85%B1%E5%90%8C%E7%A5%96%E5%85%88) | `merge-base` 找不到共同祖先，是两套独立历史 | 备份旧远端 + 改默认分支策略 |\n\n两者共同点：**「远端 main 很旧」不是普通分叉，先诊断再动手。**",
    "## 相关\n\n- [远端主线可能与本地主线无共同祖先](/wiki/agent-session/as-concept-%E8%BF%9C%E7%AB%AF%E4%B8%BB%E7%BA%BF%E5%8F%AF%E8%83%BD%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%B8%BB%E7%BA%BF%E6%97%A0%E5%85%B1%E5%90%8C%E7%A5%96%E5%85%88)\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)"
  ]
},
{
  "id": "as-concept-异步补齐长期不生效要查写入失败",
  "updatedAt": "2026-07-24",
  "wikiSlug": "agent-session",
  "term": "异步补齐长期不生效要查写入失败",
  "oneLiner": "**「异步生成的内容（正文、缩略图、转码）标题摘要早就有、正文迟迟不补」，如果已经超过正常窗口很久，那就不是「还在处理中」，而是写入侧失败。** 异步阶段只能解释秒级/分钟级延迟，解释不了小时级的长期缺失。",
  "body": [
    "## 症状与误判\n\n- 现象：部分文章只有标题和摘要，`content:encoded` 一直为空。\n- 误判：agent 用「RSS 先出标题摘要，正文稍后异步补齐」当根因。用户直接指出：**「有的文章已经出现摘要和标题很久了，仍然没有补齐正文」** —— 这句话把「正常短暂异步」和「真故障」分开了。\n- 真正根因：单篇正文约 17 KB，但实际保存了完整微信网页 3.4 MB，且同一份内容重复存到 SQLite、单篇缓存、RSS 文件缓存三处 → **磁盘被占满 → 正文其实抓到了，但写不进数据库** → 对外表现就是「只有标题摘要」。",
    "## 可迁移的判断\n\n- **磁盘满是隐性故障源**：它很少以「磁盘满」报错出现，而是以「某类写入静默失败」出现。存储告警要早于功能异常。\n- 排查顺序：先确定正常的异步窗口有多长（秒级还是分钟级）→ 超窗仍缺 → 去查写入链路的失败记录与磁盘/配额，而不是继续等或继续解释异步机制。\n- 判断「还在处理中」要有证据：队列里还有这条任务、有重试记录。没有证据的「稍后会好」就是掩盖故障。",
    "## 相关\n\n- [抓取要存清洗后的正文而不是整页](/wiki/agent-session/as-concept-%E6%8A%93%E5%8F%96%E8%A6%81%E5%AD%98%E6%B8%85%E6%B4%97%E5%90%8E%E7%9A%84%E6%AD%A3%E6%96%87%E8%80%8C%E4%B8%8D%E6%98%AF%E6%95%B4%E9%A1%B5) —— 本次故障的上游原因：存储放大把磁盘占满\n- 中转源不更新先分清是哪一层 —— 同样先分层定位，再谈修复\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)\n- [实时与异步](/wiki/agent-session/as-concept-%E5%AE%9E%E6%97%B6%E4%B8%8E%E5%BC%82%E6%AD%A5)"
  ]
},
{
  "id": "as-concept-打不开的-app-先查隔离标记与签名",
  "updatedAt": "2026-07-28",
  "wikiSlug": "agent-session",
  "term": "打不开的 app 先查隔离标记与签名",
  "oneLiner": "**从网络/聊天工具下载来的 `.app` 带着 `com.apple.quarantine` 扩展属性，若它又只有 ad-hoc 签名（严格签名校验不通过），就会被 Gatekeeper 拦下，表现为「无法打开 / 来源不明 / 已损坏」。** 解除隔离标记即可启动：",
  "body": [
    "## ```bash\nxattr -dr com.apple.quarantine \"/path/to/App.app\"\nopen \"/path/to/App.app\"\n```",
    "## 那四行命令里，真正起作用的是第三步\n\n```bash\nmkdir -p \"$HOME/Applications\"                              # 1 保证目标目录存在\nditto \"/Applications/X.app\" \"$HOME/Applications/X.app\"     # 2 复制一份到用户目录\nxattr -dr com.apple.quarantine \"$HOME/Applications/X.app\"  # 3 解除隔离 ← 关键\nopen \"$HOME/Applications/X.app\"                            # 4 启动\n```\n\n- **复制不是必须的**，直接对 `/Applications` 里的原件执行 `xattr -dr` + `open` 也行。复制只是为了避开系统目录权限、并保留一份原件。\n- 用 `ditto` 而不是 `cp`，是因为 `.app` 本质是 App Bundle 目录，`ditto` 能保留权限、符号链接与扩展属性。\n- 所以「只执行后两步打不开」的原因很简单：如果副本还没被创建，第 3、4 步操作的就是一个不存在的路径。",
    "## 风险与边界\n\n- 解除隔离**绕过了一部分 macOS 安全检查**，只对来源可信、确定没被篡改的 app 做。\n- 它修不了真正损坏、架构不兼容或签名有严重问题的 app —— 只是移除了「下载隔离」这一个障碍。\n- 用 `xattr -l <app>` 能看到隔离属性及其来源（例如 `WeChat`）；对比两个副本的隔离状态可以直接定位差异。",
    "## 相关\n\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) —— 先判断是系统安全机制还是应用自身\n- 以前能用最近坏了先查自己改了什么\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90)\n- 真机白屏先分清Debug包与证书\n- [移动应用正式分发需要签名](/wiki/agent-session/as-concept-%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E6%AD%A3%E5%BC%8F%E5%88%86%E5%8F%91%E9%9C%80%E8%A6%81%E7%AD%BE%E5%90%8D)\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)"
  ]
},
{
  "id": "as-concept-抓取要存清洗后的正文而不是整页",
  "updatedAt": "2026-07-24",
  "wikiSlug": "agent-session",
  "term": "抓取要存清洗后的正文而不是整页",
  "oneLiner": "**抓取类系统应该存「清洗后的正文」，不是「抓到的原始响应」。** 存整页会把一条 17 KB 的正文变成 3.4 MB（约 200 倍），再在数据库、单篇缓存、RSS 文件缓存里各存一份，磁盘会被放大到远超预期。",
  "body": [
    "## 症状与根因\n\n- 现象：服务磁盘很快被占满，之后写入开始静默失败（见 [异步补齐长期不生效要查写入失败](/wiki/agent-session/as-concept-%E5%BC%82%E6%AD%A5%E8%A1%A5%E9%BD%90%E9%95%BF%E6%9C%9F%E4%B8%8D%E7%94%9F%E6%95%88%E8%A6%81%E6%9F%A5%E5%86%99%E5%85%A5%E5%A4%B1%E8%B4%A5)）。\n- 根因两条：\n  1. **保存了完整微信文章页面**——包含大量脚本、运行组件、Base64 资源，而这些对阅读正文毫无用处。\n  2. **同一份内容重复保存多份**——SQLite、单篇文章缓存、RSS 文件缓存各一份。",
    "## 正确做法\n\n- 清洗在**入库前**做：只提取正文（以及必要的元数据/图片引用），原始响应不落库。\n- 同一条内容只保留一个真相源，其余（RSS 文件、缓存）按需生成而不是各存一份。\n- 修复要连存量一起处理：扩容磁盘恢复写入 → 改抓取逻辑 → 清掉已有的巨大缓存与原始网页数据。",
    "## 可迁移的判断\n\n- 存储里放的应该是**要展示/要用的内容**，不是**收到的原始字节**。\n- 抓取器的存储占用要按「单条正文大小 × 条数 × 副本数」估算；副本数是隐藏的乘数。\n- 抓取链路的容量问题通常**先打爆磁盘，再表现为功能异常**，所以磁盘用量是这类系统的一等指标。",
    "## 相关\n\n- [异步补齐长期不生效要查写入失败](/wiki/agent-session/as-concept-%E5%BC%82%E6%AD%A5%E8%A1%A5%E9%BD%90%E9%95%BF%E6%9C%9F%E4%B8%8D%E7%94%9F%E6%95%88%E8%A6%81%E6%9F%A5%E5%86%99%E5%85%A5%E5%A4%B1%E8%B4%A5) —— 存储放大的下游后果\n- [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87)\n- 中转源不更新先分清是哪一层"
  ]
},
{
  "id": "as-concept-接口验证通过不等于浏览器已登录",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "接口验证通过不等于浏览器已登录",
  "oneLiner": "**「验证 API 登录」和「浏览器页面建立登录会话」是两件事 —— 接口返回 200 只能说明账号有效，不代表浏览器拿到了 session cookie。**",
  "body": [
    "## 两个独立的失败点\n\n- **账号**：用接口验证过（`email / test123` 对本地 API 返回 200）→ 账号本身有效。\n- **浏览器会话**：截图里的页面仍是未登录的独立上下文，不会因为命令行验证过账号就自动登录。",
    "## 常见连带坑：页面没挂载\n\n登录页的 React 交互没有 hydration 时，点击按钮会**退化成普通 GET 表单提交**，地址栏出现邮箱和密码参数，页面仍停在登录页。看起来像「账号密码不对」，其实是**页面挂载失败**。\n\n> 归因别下错：账号有效 + 会话没建 + 表单没挂载，三个状态要分开说；不要把「浏览器没拿到 cookie」表述成「浏览器不可用」。",
    "## 相关\n\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)\n- 零延迟零尝试说明请求没发出去\n- 真机白屏先分清Debug包与证书\n- [登录发起与回调必须同域名](/wiki/agent-session/as-concept-%E7%99%BB%E5%BD%95%E5%8F%91%E8%B5%B7%E4%B8%8E%E5%9B%9E%E8%B0%83%E5%BF%85%E9%A1%BB%E5%90%8C%E5%9F%9F%E5%90%8D) —— 同一条登录链路的另一个环节：回调域名不匹配会导致 PKCE 校验失败\n- [凭据正确却被拒先查登录校验哪个字段](/wiki/agent-session/as-concept-%E5%87%AD%E6%8D%AE%E6%AD%A3%E7%A1%AE%E5%8D%B4%E8%A2%AB%E6%8B%92%E5%85%88%E6%9F%A5%E7%99%BB%E5%BD%95%E6%A0%A1%E9%AA%8C%E5%93%AA%E4%B8%AA%E5%AD%97%E6%AE%B5) —— 同一条登录链路的另一环：校验字段错配也会伪装成认证失败\n- 通过只证明它实际驱动的路径 —— 本页是该 synthesis 的第四处证据：API 200 只驱动了「账号有效」这一条路"
  ]
},
{
  "id": "as-concept-改远端库结构前先确认库身份与回滚",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "改远端库结构前先确认库身份与回滚",
  "oneLiner": "**`db:push` 这类直接改远端数据库持久结构的操作，执行前必须先确认「这是测试库、共享库还是生产库」以及有无 migration 与回滚能力 —— 它改的不是本地代码，是所有人共用的持久结构。**",
  "body": [
    "## 为什么不能默默执行\n\n- 会真实执行 DDL（新增字段、唯一索引），可能**短暂锁表**，影响所有连接该库的用户。\n- 若项目没有正式 migration 和自动回滚流程，一旦误改生产/共享数据**无法回退**。\n- 无法确认库的用途时，默认按「可能是生产」对待。",
    "## 授权要精确到变更清单\n\n授权只覆盖**已检查过的变更**（例如 4 个字段 + 1 个唯一索引）；执行前重新检查 diff，**出现额外变更（删表/删字段/改历史数据）就立即停止**。\n\n> 判据：操作是否触及「远端持久结构」。改本地文件、跑本地测试不需要这种授权；`db:push` 到远端需要。",
    "## 共享库里可能有别的分支的表\n\n实测：给共享 Neon 库补一个字段时，发现库里有当前分支 schema 不认识、但**已有 4 行数据**的 `video_details` 表（别的分支在用）。此时用 `--accept-data-loss` 强行对齐 schema，就会为了修一个字段误删别人的数据。\n\n正确处理：\n\n- 用**只增加字段的幂等迁移**（`ALTER TABLE ... ADD COLUMN IF NOT EXISTS`）补字段，不动其他表。\n- 启动防线改成「执行增量迁移 / 校验」，而不是每次拿整个分支 schema 强推共享库。\n\n> 一条更普适的判据：**共享资源的操作要按「最小变更集」授权，而不是按「让当前分支跑起来」授权。** 前者的失败模式是多改一点，后者的失败模式是删掉别人的数据。",
    "## 相关\n\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A)\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90)\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 改完结构后，存量数据同样不会自动跟上"
  ]
},
{
  "id": "as-concept-改配置后要确认部署真的用了新配置",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "改配置后要确认部署真的用了新配置",
  "oneLiner": "**「重新部署」不一定应用新配置 —— 有些平台会复用旧的部署清单。** 实测：连续两次 `redeploy` 都复用了旧清单，实际仍以**空的 `startCommand`** 启动，所以新配置（一次性迁移变量、启动命令）根本没生效；这不是脚本失败，是平台的部署语义。",
  "body": [
    "## 判断与做法\n\n- **部署成功 ≠ 新配置生效。** 要读部署**之后**实际生效的清单/环境变量/启动命令，用它来验证，而不是看「redeploy 成功」的状态。\n- 需要让当前服务配置真正生效时，改用**会重建清单的路径**（例如源码上传部署），成功后必要时再上传一次正常配置恢复。\n- 一般化：不同平台的「重新部署」语义不同 —— 有的重放旧清单，有的重新构建并重新解析配置。用之前先确认它属于哪种。",
    "## 相关\n\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同族：判断现状要看真正在跑的那一份，而不是「配置里写了什么」\n- 以前能用最近坏了先查自己改了什么\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90)\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条是该骨架的一处实例：部署状态页不是实际生效的清单"
  ]
},
{
  "id": "as-concept-文件被回退先分清是工具还是并发会话",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "文件被回退先分清是工具还是并发会话",
  "oneLiner": "**看到「文件被 linter 大幅回退了」，第一步不是去查 linter 配置，而是先确认这个工具到底有没有写文件的能力。** 如果 lint 脚本只是 `eslint .`（没有 `--fix`），那它**不可能改文件**，这条线索当场排除 —— 剩下的嫌疑只有「另一个 session 同时在写同一批文件」。",
  "body": [
    "## 分诊顺序\n\n1. **核对被怀疑的工具是否有写能力。** 看脚本本身（有没有 `--fix`、格式化、`checkout`、`restore`）。没有写能力 → 直接排除，不要在这条线上耗时间。\n2. **看工作区还剩哪些改动、哪些文件同时带着多个来源的 diff。** 若一个文件里既有本轮改动、又有别人先前的差异，它就是**并发冲突高风险文件**。\n3. **确认是否有并行 session 在改同一批文件**（同一 worktree 内的多 session 与跨 worktree 是两种不同情形）。",
    "## 修复原则：按 hunk 合并，不整文件回滚\n\n- **先暂停所有在改同一批文件的 session**，否则边修边被覆盖。\n- 找到另一个 session 的目标改动来源，先保存它的 diff/patch。\n- **不要 `reset` 整个文件** —— 会把别人的改动一起删掉。正确做法是「按 hunks 合并」：保留别人的改动，再把自己的 patch 重新套上。\n- 只碰自己这轮真正改过的文件，不是自己改的文件不动。\n- **验证只跑 `lint` / `build`**，不跑任何带 `--fix`、格式化、`checkout`、`restore` 的命令 —— 那会再制造一次「文件被改回去」。",
    "## 可迁移的判断\n\n**归因「是谁改的」之前，先确认被怀疑的对象是否具备「改」的能力。** 不具备写能力的工具/命令可以直接从嫌疑名单里划掉；剩下能改文件的只有「并发写者」和「你自己」。这条和「先分清平台错误还是应用错误」是同一个动作：**先用排除法把不可能的分支砍掉，再在剩余分支里找根因。**",
    "## 相关\n\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) —— 并发写冲突是隔离层（一 agent 一 worktree 一 branch）要解决的核心问题\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) —— 同为「先分诊再动手」\n- 以前能用最近坏了先查自己改了什么 —— 另一条归因顺序"
  ]
},
{
  "id": "as-concept-本地开发脚本可能连生产资源",
  "updatedAt": "2026-07-14",
  "wikiSlug": "agent-session",
  "term": "本地开发脚本可能连生产资源",
  "oneLiner": "本地开发脚本可能连生产资源",
  "body": [
    "## # 本地开发脚本可能连生产资源\n\n**结论：聚合式的 `pnpm dev` 会启动整条后端链路，且很可能读到生产环境变量 —— 本地开发在悄悄消耗生产资源。**",
    "## 现象\n\n服务还没部署到服务器，托管 Redis / 数据库的用量已经在持续上涨，而且「没人用也在涨」。",
    "## 根因\n\n1. 根目录的 `pnpm dev` 走 `turbo run dev`，不只启动网页，也会启动本地 Worker\n2. 本地 Worker 用的还是**生产的 `REDIS_URL`**（环境变量文件里就写着生产的那个）\n\n于是本地进程成了一个隐形的生产消费者：即使没有真实任务，Worker 也在监听队列、发心跳、\n跑定时检查，全部计到生产账上。",
    "## 判据\n\n排查「没人用却在涨的用量」时，**把本地开发进程也算进消费者清单**：\n\n- 先列出本地在跑哪些进程（`pnpm dev` 这类脚本实际拉起了几个服务）\n- 再看这些进程读的是哪套环境变量\n\n修法是给本地指向独立的 dev 资源，或在本地用独立的环境变量文件，\n不要靠「我记得我没开」来判断。",
    "## 相关\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91)\n- [无入站流量的服务靠数据与配置隔离环境](/wiki/agent-session/as-concept-%E6%97%A0%E5%85%A5%E7%AB%99%E6%B5%81%E9%87%8F%E7%9A%84%E6%9C%8D%E5%8A%A1%E9%9D%A0%E6%95%B0%E6%8D%AE%E4%B8%8E%E9%85%8D%E7%BD%AE%E9%9A%94%E7%A6%BB%E7%8E%AF%E5%A2%83)"
  ]
},
{
  "id": "as-concept-本地测试要显式覆盖数据源",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "本地测试要显式覆盖数据源",
  "oneLiner": "**分支的 `.env.local` 常是指向主项目根目录的软链，里面写的是远程/生产数据源。直接 `source .env.local` 启动，本地服务就接到了线上数据库 —— 表现为「找不到本地账号」「数据对不上」。**",
  "body": [
    "## 正确做法\n\n- 模型/密钥配置**沿用**根 env（那部分本来就是要共享的）；\n- `DATABASE_URL` / `REDIS_URL` 这类**数据源必须显式覆盖**到本地容器（如 `127.0.0.1:55432` / `127.0.0.1:56379`）。\n\n也就是说：`source` 根 env 之后追加覆盖，而不是\"整套 env 二选一\"。",
    "## 为什么会踩\n\n- 上一次成功的启动可能用了启动参数显式覆盖，所以\"之前一直好好的\"；换了启动方式就丢了覆盖。\n- 软链让\"分支自己的配置\"看起来存在，实际内容是主目录那份。\n\n判据：启动前问一句「这个进程连的是哪套库」，而不是「我 source 了哪个文件」。",
    "## 相关\n\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90) —— 同一风险：本地进程吃生产资源\n- worktree是独立目录产物与配置都隔离 —— 软链 env 是它的常见变体\n- [无入站流量的服务靠数据与配置隔离环境](/wiki/agent-session/as-concept-%E6%97%A0%E5%85%A5%E7%AB%99%E6%B5%81%E9%87%8F%E7%9A%84%E6%9C%8D%E5%8A%A1%E9%9D%A0%E6%95%B0%E6%8D%AE%E4%B8%8E%E9%85%8D%E7%BD%AE%E9%9A%94%E7%A6%BB%E7%8E%AF%E5%A2%83) —— 隔离手段：数据与配置\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91)"
  ]
},
{
  "id": "as-concept-本机卡顿先清残留开发进程",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "本机卡顿先清残留开发进程",
  "oneLiner": "**开发时「莫名越来越卡」，常见根因不是当前代码死循环，而是环境被残留进程拖爆：多个端口的 dev server、遗留的 `build` 进程、旧的 `.next-*` 缓存目录同时存在。**",
  "body": [
    "## 排查动作\n\n1. 列出端口监听，确认有几个 dev server 在跑（常见于用不同端口做验证后没关）\n2. 停掉遗留的 `build` / `next build` 进程\n3. 删掉旧生成缓存目录（`.next-codex-*`、`.next-*verify` 等）\n4. 只保留当前主服务，再测热请求耗时",
    "## 另一种症状：端口「假活」\n\n`localhost` 打不开时，先看是不是**旧开发进程假活**：端口仍被占用，但 HTTP 请求一直超时。常见根因是**开发服务运行期间又执行了生产构建，两者共用 `.next` 缓存**，把正在跑的 dev server 拖死。\n\n- 判定：端口在监听 + 请求超时（不是 `connection refused`）。\n- 处理：停掉卡死进程，**用独立缓存目录重启**服务，再测响应耗时（恢复正常后约零点几秒）。\n- 见 备用构建目录不要嵌在next目录里 —— 同一个 `.next` 被多进程共用的连带坑。",
    "## 注意区分层次\n\n机器层面可能另有高负载来源（如 Xcode / iOS Simulator 编译、WindowServer、编辑器），会和浏览器、拖动、热更新一起变慢。清残留只解决「服务侧」那一份。",
    "## 相关\n\n- [高负载发烫先排除负载而非硬件](/wiki/agent-session/as-concept-%E9%AB%98%E8%B4%9F%E8%BD%BD%E5%8F%91%E7%83%AB%E5%85%88%E6%8E%92%E9%99%A4%E8%B4%9F%E8%BD%BD%E8%80%8C%E9%9D%9E%E7%A1%AC%E4%BB%B6)\n- [合盖仍会睡眠后台任务会被中断](/wiki/agent-session/as-concept-%E5%90%88%E7%9B%96%E4%BB%8D%E4%BC%9A%E7%9D%A1%E7%9C%A0%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E4%BC%9A%E8%A2%AB%E4%B8%AD%E6%96%AD) —— 同为机器资源层（睡眠/后台）问题\n- [杀端口要区分服务端与客户端连接](/wiki/agent-session/as-concept-%E6%9D%80%E7%AB%AF%E5%8F%A3%E8%A6%81%E5%8C%BA%E5%88%86%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B8%8E%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5)\n- 备用构建目录不要嵌在next目录里\n- Electron自带浏览器运行时是内存大头"
  ]
},
{
  "id": "as-concept-杀端口要区分服务端与客户端连接",
  "updatedAt": "2026-09-14",
  "wikiSlug": "agent-session",
  "term": "杀端口要区分服务端与客户端连接",
  "oneLiner": "**`lsof -ti:PORT | xargs kill -9` 会同时杀掉监听该端口的服务端进程和连到该端口的客户端进程（浏览器渲染进程），要先用 `lsof -i:PORT` 看清 COMMAND 再挑着杀。**",
  "body": [
    "## 一、踩的坑\n\n清理 3456 端口时，`lsof -ti:3456` 返回的列表里除了 `next-server`，还混着 **Chrome 的渲染进程**（它们只是*连接*到 3456 的客户端，不是服务端）。一把 `xargs kill -9` 把整个列表都杀了。",
    "## 二、影响与恢复\n\n浏览器主进程（另一个 PID、已运行数天、13 个子进程）**没有被误杀**，被杀的只是渲染进程与 3456 的 socket 连接，Chrome 会自动重建连接。所以这次是虚惊，但同样的手法用在别的端口上完全可能真的关掉用户的东西。",
    "## 三、正确做法\n\n```bash\nlsof -i:3456          # 先看 COMMAND / PID / 连接方向\nkill <next-server 的 PID>   # 只杀服务进程\n```\n\n`-t` 只输出 PID，丢掉了判断依据；排查端口占用时不要用它一把梭。",
    "## 相关\n\n- 讲bug先讲现象再讲根因\n- [高负载发烫先排除负载而非硬件](/wiki/agent-session/as-concept-%E9%AB%98%E8%B4%9F%E8%BD%BD%E5%8F%91%E7%83%AB%E5%85%88%E6%8E%92%E9%99%A4%E8%B4%9F%E8%BD%BD%E8%80%8C%E9%9D%9E%E7%A1%AC%E4%BB%B6)\n- [同一应用开出两个窗口先查单实例限制](/wiki/agent-session/as-concept-%E5%90%8C%E4%B8%80%E5%BA%94%E7%94%A8%E5%BC%80%E5%87%BA%E4%B8%A4%E4%B8%AA%E7%AA%97%E5%8F%A3%E5%85%88%E6%9F%A5%E5%8D%95%E5%AE%9E%E4%BE%8B%E9%99%90%E5%88%B6) —— 同类：先分清有几个进程，再动手"
  ]
},
{
  "id": "as-concept-样式丢失先核对类名，再怀疑缓存与权限",
  "updatedAt": "2026-09-07",
  "wikiSlug": "agent-session",
  "term": "样式丢失先核对类名，再怀疑缓存与权限",
  "oneLiner": "**「CSS 完全没渲染」这类现象，排查顺序应从「当前组件用的类名」与「CSS 文件里实际存在的类名」是否对得上开始，而不是先怀疑缓存或文件权限。** 类名对不上是最高频、也最容易被跳过的根因：文件存在、import 正常、规则上千行，看起来一切都对，但组件根本不用这些选择器。",
  "body": [
    "## 排查顺序\n\n| 顺序 | 检查 | 说明 |\n|---|---|---|\n| 1 | **类名是否匹配** | 重写组件（如 `page.tsx`）后，CSS 若停留在旧版类名上（旧版 `grid` 卡片类 vs 新版索引页类），规则再多也全部不命中 |\n| 2 | 编辑历史是否弄丢了样式 | 用脚本改写 CSS 时容易把规则插到顶部或覆盖掉主体，导致「文件在、样式没了」 |\n| 3 | 文件权限 | `-rw-------`（600）这类权限确实可能让构建进程读不到，但它是**次要嫌疑**，放在类名之后 |\n\n**反面教材**：先按权限和 import 排查，得出「一切看起来正常」的结论；真正原因是改造索引页时把新样式写进了另一个文件（后又删除），而 `wiki.css` 从未同步到新版类名。",
    "## 延伸：截图 ≠ 代码（HMR 中间态）\n\n缓存/热更新不只是「看不到最新」，也可能让你**看到不存在的中间态**：dev server 的 HMR 缓存会让页面停留在上一版，于是「代码已回退」而截图仍是旧样子，双方据此互相误判（09-07 13:36 的复盘：用户以为 agent 又改错了，直接要求「回到最初状态」）。\n\n**因此判断样式是否生效，以代码为准，不以截图为唯一依据**；看到的结果与刚写的代码不符时，先怀疑是中间态（刷新/重启 dev server 再确认），别急着改第三版。",
    "## 相关\n\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) —— 同一习惯：先确认「是不是同一件事」，再往下查\n- [高负载发烫先排除负载而非硬件](/wiki/agent-session/as-concept-%E9%AB%98%E8%B4%9F%E8%BD%BD%E5%8F%91%E7%83%AB%E5%85%88%E6%8E%92%E9%99%A4%E8%B4%9F%E8%BD%BD%E8%80%8C%E9%9D%9E%E7%A1%AC%E4%BB%B6) —— 同类经验：先排除最容易错的那一层\n- 讲bug先讲现象再讲根因 —— 沟通层：先对齐「看到的坏」是什么\n- 评审设计可行性先问方案再定难度 —— 同轮教训的另一半：改前先复述理解\n- 图片加载失败要可重试并升级到HTTPS —— 同类：先分清「本来就没有」与「这次没加载出来」"
  ]
},
{
  "id": "as-concept-清理客户端缓存先分清哪层可丢",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "清理客户端缓存先分清哪层可丢",
  "oneLiner": "**「浏览器缓存占了 22G」不是缓存本身有问题，而是几个不同的层被混在一起：可丢弃的加速层、共享的内容寻址仓库、以及悄悄下载的模型权重。删之前先分层，判据是「丢了会不会影响数据与登录态」。**",
  "body": [
    "## | 占用 | 是什么 | 删了会怎样 |\n|---|---|---|\n| Service Worker 缓存（Cache Storage） | 网站自己管理的后台缓存，用来离线可用/秒开/后台同步 | **安全**：下次重新从服务器拉。数据在服务端，登录态在 Cookies，都不受影响。代价只是「离线打开一个从没访问过且已删缓存的页面」会失败 |\n| pnpm store（`~/Library/pnpm/store`） | **内容寻址**的共享仓库，各项目 `node_modules` 是硬链接指过来 | 用 `pnpm store prune` 只删无引用的孤儿包 = 安全；**直接 `rm -rf` 会打断所有项目的 node_modules** |\n| `~/Library/Caches/pnpm` | 元数据/下载缓存，与 store 不是一回事 | 可以更激进地清 |\n| `OptGuideOnDeviceModel`（4G，`weights.bin`，模型 `v3Nano` = Gemini Nano） | Chrome 自动下载的**端侧模型权重**，供页面摘要/写作助手/自动填充/DevTools AI 用 | 安全：不影响浏览、历史、密码、登录态；启用相关 AI 功能时会重新下载 |\n\n要点：\n\n- 判断一个缓存能不能删，看**它是不是「可从别处重建」**。加速层与模型权重都可重建；硬链接指向的共享 store 一旦整目录删掉，别的项目立刻坏。\n- 缓存体积往往暴露使用史，可作为旁证：飞书（Feishu/Lark）多租户文档 + 多维表格把完整数据与图片塞进本地缓存，单它一家就占了约 20G / 91%；`bytedance.larkoffice.com` 这类内部租户的缓存，人已离开就基本无用。\n- 官方提供的 prune 语义才是安全的：`pnpm store status` 报 \"Packages in the store are untouched\" 说明无损坏包，可放心 prune。\n- 端侧模型是**静默下载**的：Chrome 判断机器够强就自己拉了 4G，用户往往毫无察觉 —— 所以「我没装过什么大东西」不等于「没有大文件」。",
    "## 相关\n\n- [本机资源占用排查](/wiki/agent-session/as-topic-%E6%9C%AC%E6%9C%BA%E8%B5%84%E6%BA%90%E5%8D%A0%E7%94%A8%E6%8E%92%E6%9F%A5) —— 本条是它在「磁盘」这一层的实例\n- 项目占空间先查构建缓存与旧worktree\n- [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7)\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C)\n- Electron自带浏览器运行时是内存大头"
  ]
},
{
  "id": "as-concept-滚动部署期间改库结构会撞上旧容器的锁",
  "updatedAt": "2026-07-24",
  "wikiSlug": "agent-session",
  "term": "滚动部署期间改库结构会撞上旧容器的锁",
  "oneLiner": "**在滚动部署（rolling deploy）的平台上对 SQLite 做结构/模式迁移，会失败在 `PRAGMA journal_mode=DELETE` 这类需要独占锁的步骤上 —— 因为新容器启动时旧容器仍在服务，并持续持有数据库锁。** 这不是迁移脚本写错，而是部署方式与「改库」天然冲突。",
  "body": [
    "## 为什么\n\n- 滚动部署的设计就是**新旧容器重叠**：新容器起来、健康后旧容器才退出。\n- SQLite 是单机文件锁模型，切换 journal mode、重写库文件这类操作需要**没有其他连接**。\n- 于是迁移在拿锁处被拒。此时保护逻辑起了作用：**旧库和在线服务都没坏**（这是好事，不是失败）。",
    "## 正确处理\n\n- 需要一次**短暂停机窗口**（先停旧实例、再迁移、再起新实例），而不是在滚动部署中硬试。\n- 停机前必须**先有可恢复备份**：优先用平台提供的卷级 backup/snapshot；平台没有，才自己加管理员下载备份通道。\n- **绝不在没有备份的情况下替换/重写生产数据库。**",
    "## 相关\n\n- [停机前先确认有可恢复备份](/wiki/agent-session/as-concept-%E5%81%9C%E6%9C%BA%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E6%9C%89%E5%8F%AF%E6%81%A2%E5%A4%8D%E5%A4%87%E4%BB%BD)\n- [改远端库结构前先确认库身份与回滚](/wiki/agent-session/as-concept-%E6%94%B9%E8%BF%9C%E7%AB%AF%E5%BA%93%E7%BB%93%E6%9E%84%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BA%93%E8%BA%AB%E4%BB%BD%E4%B8%8E%E5%9B%9E%E6%BB%9A) —— 同族：改远端持久结构前先确认影响面与回滚\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)"
  ]
},
{
  "id": "as-concept-真机白屏先分清-Debug-包与证书",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "真机白屏先分清 Debug 包与证书",
  "oneLiner": "**iOS 真机装上 App 却打不开/白屏/闪退，先别怀疑业务代码。两个最平凡的原因：一是证书没被手机信任（iPhone 拦截），二是装的是 Debug 包。**",
  "body": [
    "## Debug 包的坑\n\nDebug 包不内置完整 JS，打开后会去开发机找 Metro dev server。默认地址是 `localhost:8081`——真机上的 `localhost` 是手机自己，不是 Mac，所以必然连不上。\n\n- 让 Metro 监听局域网：以 `--host lan` 启动，手机通过 Mac 局域网 IP 访问。\n- 或打 Release 包，让 App 不依赖 Metro、像普通 App 一样直接打开。",
    "## 判断顺序\n\n1. 证书是否已被信任\n2. 装的是 Debug 还是 Release\n3. 若是 Debug：Metro 是否在跑、地址是否可达",
    "## 相关\n\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)\n- 图片加载失败要可重试并升级到HTTPS —— 真机上的加载失败也可能是网络/证书层\n- 远程控制本机Agent要让bridge跑在本机\n- 打不开的app先查隔离标记与签名"
  ]
},
{
  "id": "as-concept-端口占用会把你连到别人的服务",
  "updatedAt": "2026-08-03",
  "wikiSlug": "agent-session",
  "term": "端口占用会把你连到别人的服务",
  "oneLiner": "**「我起的服务没报错，但行为不对」时，先确认那个端口上监听的到底是不是你起的进程。** 端口被另一个项目的同类服务占用时，启动脚本可能照样成功（或你根本没注意），而请求全部打到了别人的服务上 —— 症状与「自己代码有 bug」完全一样。",
  "body": [
    "## 实例形态\n\n```text\n你以为：3102 = 我刚启动的 Agent\n实际：  3102 = 另一个 worktree 的 Next Web\n结果：  上传失败（错误来自另一个应用），排查方向被带偏\n```\n\n关键在于：**这个错误不会指向端口冲突**。上层把错误统一收口后，只显示「上传失败」，看起来像业务逻辑问题。",
    "## 动作\n\n- 启动后不要只确认「没报错」，要确认**这个端口上是哪个进程 / 哪个应用**。\n- 端口被占时换一个空闲端口启动，并同步改掉所有指向它的下游配置（前后端地址要一起改）。\n- 多 worktree 并行开发时，给每个 worktree 固定一组端口，避免每次靠运气。",
    "## 相关\n\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条是它的第八处证据：端口上跑的不是你以为的那一份\n- worktree是独立目录产物与配置都隔离 —— 多 worktree 是端口冲突的高发场景\n- [杀端口要区分服务端与客户端连接](/wiki/agent-session/as-concept-%E6%9D%80%E7%AB%AF%E5%8F%A3%E8%A6%81%E5%8C%BA%E5%88%86%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B8%8E%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5) —— 同族：端口上的连接分两类，不能一起杀\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 「上传失败」只是收口症状，先分层\n- 只有第一发失败要查冷启动与连接重试 —— 同为「失败现象与根因不在同一层」"
  ]
},
{
  "id": "as-concept-观测平台的环境维度由数据产生",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "观测平台的环境维度由数据产生",
  "oneLiner": "**观测平台（Langfuse）的环境列表是数据驱动的：只有当至少一条带 `environment=X` 的 trace 上报过，UI 里才会出现 X 这个选项。没有数据 ≠ 配置没生效，而是压根没上报。**",
  "body": [
    "## 所以「Langfuse 已上线」和「本地也在上报」是两件事：\n\n- 「上线」指生产部署完成 —— 生产服务注入了密钥，trace 带 `environment=production`，所以 UI 里看得到 production。\n- 本地看不到 development，不是环境配置问题，而是本地一条 trace 都没发出去。\n\n排查本地不上报的两个静默根因（都在代码里，不报错）：\n\n1. **进程里没有密钥**：`tsx watch src/index.ts` 这类 dev 脚本不会自动加载根目录 `.env.local`（不像 Next.js）。要显式注入：`tsx watch --env-file=../../.env.local src/index.ts` 或 `dotenv -e ../../.env.local -- pnpm dev`。\n2. **缺 key 时静默降级**：观测初始化在两个密钥都缺失时直接返回 noop，连 warning 都不打 —— 服务照常运行，只是观测悄悄关了。\n\n推论：合法的环境标签集合由「实际部署注入了什么」决定（本例只有 production / development，preview 不注入）。\n\n相关：[观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90)、[本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90)、[可观测正文要按环境分级放开](/wiki/agent-session/as-concept-%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%AD%A3%E6%96%87%E8%A6%81%E6%8C%89%E7%8E%AF%E5%A2%83%E5%88%86%E7%BA%A7%E6%94%BE%E5%BC%80)",
    "## 相关\n- 假成功要有真失败信号 —— 本条是该 synthesis 的第五处证据：缺 key 时观测初始化直接返回 noop，连 warning 都不打\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90)\n- [可观测正文要按环境分级放开](/wiki/agent-session/as-concept-%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%AD%A3%E6%96%87%E8%A6%81%E6%8C%89%E7%8E%AF%E5%A2%83%E5%88%86%E7%BA%A7%E6%94%BE%E5%BC%80)\n\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90)"
  ]
},
{
  "id": "as-concept-讲-bug-先讲现象，再讲根因",
  "updatedAt": "2026-09-07",
  "wikiSlug": "agent-session",
  "term": "讲 bug 先讲现象，再讲根因",
  "oneLiner": "**解释一个 bug 时，先说「你会看到什么坏现象」，再说根因和改法。** 只讲根因（变量语义混乱、断点不同步）时，听者连「坏在哪」都还没建立，方案再对也无从判断。",
  "body": [
    "## 两轮追问暴露的落差\n\n| 轮次 | 用户说 | 说明 |\n|---|---|---|\n| 17:07 | 「没懂你目前讲到的 bug 的修复方案是什么」 | 上一轮只讲了\"哪里坏\"（根因层），没讲怎么修 |\n| 17:10 | 「不是，我是还是不懂你的那里坏是什么」 | 换成讲根因 + CSS 变量后仍没懂 —— 要的是**肉眼可见的症状** |\n\n直到第三轮改口径「只讲肉眼可见的现象，不谈 CSS」，对话才对上。**用户说的\"坏\"是现象，不是根因。**",
    "## 现象层怎么写\n\n每个 bug 用四段式：\n\n1. **你在**：具体页面 / 屏幕宽度（如 `/wiki/pm/rice`、窗口 760–1100px）\n2. **你想**：期望发生什么\n3. **你做**：触发的操作\n4. **实际**：看到的错误结果（可配简单示意图）\n\n例：「点左上角 `←`，没回到有那两张大卡片的 `/wiki`，而是被丢到 PM 这套的第一个词条。」\n\n**别用实现术语代替现象**：`--wiki-sidebar-w` 语义混乱、`left` 走 fallback `260px` —— 这些是根因，不是\"坏\"。",
    "## 相关\n\n- 样式丢失先核对类名再怀疑缓存与权限 —— 同类：先确认现象 / 事实，再往下推理\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87) —— 用户纠正 agent 理解偏差的同一模式\n- [杀端口要区分服务端与客户端连接](/wiki/agent-session/as-concept-%E6%9D%80%E7%AB%AF%E5%8F%A3%E8%A6%81%E5%8C%BA%E5%88%86%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B8%8E%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5) —— 现象先行的另一个实例"
  ]
},
{
  "id": "as-concept-迁移文件存在不等于数据库已升级",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "迁移文件存在不等于数据库已升级",
  "oneLiner": "**代码里有了 migration 文件，不代表数据库已经执行过它。** 缺迁移时数据库会明确报「表不存在」，但如果错误被上层统一收口，用户看到的只是「上传失败」这种无信息量的提示。",
  "body": [
    "## 症状与真相的距离\n\n```text\n代码：请把附件写进 AgentFileAttachment\n数据库：我没有这张表\n用户看到：附件上传失败\n```\n\n- 「上传失败」是**前端把后端错误统一收口**后的提示，它只说明「这一层失败了」，不说明失败在哪一层。\n- 同一句提示背后可能是完全不同的原因：迁移未执行、key 没配、请求打到了别的服务、文件格式不走该链路。**先分层，别按提示字面猜。**",
    "## 判据\n\n- 直连库看**表是否存在 / `migrate status` 是否 up to date**，而不是看仓库里有没有那个 migration 目录。\n- 应用迁移前先确认 `DATABASE_URL` 指向的是哪个库 —— 这个动作会改真实数据库结构，不能对生产库盲跑。",
    "## 相关\n\n- Schema是声明Migration是历史 —— 那条讲 schema 与 migration 的分工；本条讲「文件存在 ≠ 已执行」\n- 通过只证明它实际驱动的路径 —— 同源：迁移文件“存在”只证明“写过了”，不证明“跑过了”\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 「上传失败」只是收口后的症状，归属层要靠便宜观测划出来\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 同源：新逻辑要显式落到存量对象上\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同源：代码里有什么，和运行时在用什么是两件事\n- [本地测试要显式覆盖数据源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E8%A6%81%E6%98%BE%E5%BC%8F%E8%A6%86%E7%9B%96%E6%95%B0%E6%8D%AE%E6%BA%90) —— 迁移要作用在正确的库上"
  ]
},
{
  "id": "as-concept-远端主线可能与本地主线无共同祖先",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "远端主线可能与本地主线无共同祖先",
  "oneLiner": "**看到「远端 main 很旧」时，先别假设是普通分叉。用 `git merge-base main origin/main` 判断：找不到共同祖先，说明它们是两套独立历史（例如远端 main 是旧发布线，本地 main 是重写后的新主线）。这种情况不能普通 merge。**",
  "body": [
    "## 处理顺序\n\n1. 确认远端默认 HEAD 到底是哪条分支（可能已经不是 `main`，而是 `2.0` 之类）\n2. 先备份旧 `origin/main`\n3. 再用 `--force-with-lease` 或改默认分支策略处理",
    "## 相关\n\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)\n- 以前能用最近坏了先查自己改了什么\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- 开PR前先确认基线的远端状态 —— 同属「先看清基线再动手」"
  ]
},
{
  "id": "as-concept-集成已合并不等于运行时已启用",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "集成已合并不等于运行时已启用",
  "oneLiner": "**「代码已接入」（integration merged）和「运行时已启用」（runtime enabled）是两个状态，很多集成被设计成配置为空时静默关闭。** 于是仓库里、CI 里、本地 `.env.local` 里都能看到它「接上了」，生产上却一行数据都没有，而且不报任何错。",
  "body": [
    "## 实测形态：Langfuse 项目零数据\n\n- 代码侧：`langfuse.ts` 已用 OTel SpanProcessor 埋点，PR 已合入，看起来「接了」。\n- 运行侧：Production Agent / Worker 容器的 env 里**没有** `LANGFUSE_PUBLIC_KEY` / `LANGFUSE_SECRET_KEY` / `LANGFUSE_BASE_URL`。\n- 设计侧：部署说明明确写「两个 key 都为空时静默关闭 tracing」→ 走到 noop 空实现。\n- 本地侧：`.env.local` 里有一套真实 key，所以本地测试「能 trace」，进一步加深「已经接好了」的错觉。\n\n要启用不需要改代码，只需把 key 注入容器环境并重建。**问题从来不是代码没接，而是没人核对运行时到底拿到了什么配置。**",
    "## 一条配套判据：观测链路独立于业务链路\n\n```\n模型调用：  Agent ──→ gemini-relay ──→ Google\nLangfuse：  Agent ──────────────────→ cloud.langfuse.com\n```\n\ntracing 在 Agent 进程内埋点后直传 Langfuse，**不经过模型 relay**。所以「走不走中转」和「trace 能不能用」是两个独立问题；排查时先把业务链路和观测链路分开，不要用一个的现象去解释另一个。\n\n同理，trace 里看不到 prompt/正文不是坏了：`redactLangfuseData` 把 prompt/content/input/output 打码成 `[REDACTED]`，是有意设计——看得到结构与指标（model、usage、cost、turn 状态），看不到对话原文。",
    "## 可迁移的判断\n\n- 验证一个集成是否生效，要查**运行进程实际拿到的配置**（容器 env / 启动参数）和**外部系统里是否有数据**，而不是查代码、文档、CI 绿灯或本地环境。\n- 看到「静默关闭」「空值时 noop」这类设计，就要把「启用」当成一个必须单独验收的动作。\n- 空配置 + 静默降级 = 零错误信息的假成功。这类失败不会出现在日志里。",
    "## 相关\n\n- [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE) —— 同族：部署成功 ≠ 新配置生效\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) —— 观测平台本身也可能根本没被启用\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条是该骨架的一处实例：代码/本地配置都是「应该是什么」的声明\n- 中转源不更新先分清是哪一层\n- 假成功要有真失败信号\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91)"
  ]
},
{
  "id": "as-concept-需要认证的命令不要并行执行",
  "updatedAt": "2026-07-05",
  "wikiSlug": "agent-session",
  "term": "需要认证的命令不要并行执行",
  "oneLiner": "**并行跑两条需要登录的命令，两条都会各自发现「当前未登录」并各自发起一次授权流程，于是浏览器弹出两个授权页。正解是先单独跑一条确认登录态（如 `whoami`），再跑下一条。**",
  "body": [
    "## 症状与根因\n\n- 症状：一次操作后浏览器开出两个授权 tab。\n- 根因：`vercel whoami` 与 `vercel env ls` 并行，二者都检测到未登录，各自触发 device login。",
    "## 相关\n\n- [一次性凭证拿到就落盘](/wiki/agent-session/as-concept-%E4%B8%80%E6%AC%A1%E6%80%A7%E5%87%AD%E8%AF%81%E6%8B%BF%E5%88%B0%E5%B0%B1%E8%90%BD%E7%9B%98) —— 同属「一次性流程不能被重复触发」\n- 零延迟零尝试说明请求没发出去\n- 以前能用最近坏了先查自己改了什么"
  ]
},
{
  "id": "as-concept-面板上多出的固定区块先查数据源再改前端",
  "updatedAt": "2026-09-19",
  "wikiSlug": "agent-session",
  "term": "面板上多出的固定区块先查数据源再改前端",
  "oneLiner": "**前端\"总是显示一个不该有的卡片\"，且不随切换条件变化时，问题多半在数据链路而不是渲染逻辑：请求被转发到了固定实例，而该实例的数据里包含了对端实例的信息。**",
  "body": [
    "## 一、判断信号\n\n- 该区块**永远存在**，不跟随你访问哪个端口/参数变化 → 说明不是前端条件渲染写错，而是**输入数据里本来就有它**。\n- 面板的代理把某类请求**转发到固定的一个实例**（硬编码），而两个实例在服务端**互设为 peer** → 返回的数据天然带着对端账号信息，前端只能把它渲染出来。\n\n**所以\"去掉显示\"最干净的做法是断掉数据源里的对端部分，而不是在前端加过滤。** 顺带清掉那些为了区分\"分区\"而加的标识 chip，避免同一个困惑再次出现。",
    "## 二、通用规则\n\n**当\"显示不对\"而渲染条件看起来没错时，先去核对接口实际返回了什么。** 反过来「少了东西」也一样：某类数据只剩几条时，先确认数据源里真的只有这几条（而不是前端过滤或自己改坏的），再谈修法。 前端只能显示它拿到的东西；把链路里混入的多余数据断掉，比在展示层打补丁更彻底，也不会留下\"下次换个人又漏出来\"的隐患。",
    "## 相关\n\n- [跨源取数据要靠自建代理](/wiki/agent-session/as-concept-%E8%B7%A8%E6%BA%90%E5%8F%96%E6%95%B0%E6%8D%AE%E8%A6%81%E9%9D%A0%E8%87%AA%E5%BB%BA%E4%BB%A3%E7%90%86)（同一天的另一处\"看起来是前端，其实是链路\"）\n- [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF)\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-concept-项目占空间先查构建缓存与旧-worktree",
  "updatedAt": "2026-10-08",
  "wikiSlug": "agent-session",
  "term": "项目占空间先查构建缓存与旧 worktree",
  "oneLiner": "**一个 monorepo「占了十几个 G」，通常不是源码占的，而是构建缓存 + 旧 worktree + 构建产物。排查时按「安全可删 → 需确认」的顺序看，先释放不碰代码/git/数据库的那部分。**",
  "body": [
    "## 典型占用分布\n\n| 位置 | 性质 | 能否安全删 |\n|---|---|---|\n| `.turbo/cache`（Turborepo 构建缓存） | 缓存，会自动再生成 | ✅ 可立即删 |\n| `worktree/*`（各分支独立目录，含 iOS/Rust/Xcode 产物） | 旧分支产物 | 需确认分支是否还要 |\n| `apps/web/.next` | 构建产物 | ⚠️ 服务运行中先别碰 |\n| `node_modules` / `.git` | 依赖 / 版本库 | ❌ 不动 |",
    "## 做法\n\n- 先删构建缓存（`.turbo/cache` 之类），它不影响源码、会自动重建，往往一次就释放最大一块。\n- 再决定是否清理旧 worktree 和 `.next`；正在运行的服务用着的产物先别动。\n- 结合磁盘剩余空间判断紧急度。",
    "## 别漏了系统级的构建缓存\n\n按项目目录排查只看到一半。macOS「关于本机 → 储存空间」里的「**开发者工具**」不是某个软件，\n而是系统把 **Xcode 产生的构建缓存、代码索引、真机调试文件、模拟器数据**归到这一类。实测大头是：\n\n| 位置 | 性质 | 能否安全删 |\n|---|---|---|\n| Xcode **DerivedData**（`~/Library/Developer/Xcode/DerivedData`） | 编译产物与模块索引 | ✅ 可删，会重建 |\n| iOS **Device Support** | 真机系统符号（调试、解析崩溃栈用） | ⚠️ 删了下次连真机重新下载 |\n| 模拟器数据 | 模拟器设备镜像 | ✅ 可删不用的设备 |\n\n两个容易误判的点：\n\n- **临时构建目录删了，Xcode 缓存还在**：工程源目录在 `/tmp` 下已被清掉，DerivedData 里那份同名缓存会一直留着 —— 所以「我早就删了那个项目」不等于空间已释放。\n- **容量对不上先看十进制/二进制**：系统面板用十进制 GB，`du` 用二进制 GiB，同一个目录显示 20.15 GB / 19 GiB 是同一块空间，不是两处占用。\n\n所以排查顺序是：先按项目目录清（缓存 / 旧 worktree / 构建产物），再查 Xcode DerivedData 与模拟器。",
    "## 相关\n\n- [本机资源占用排查](/wiki/agent-session/as-topic-%E6%9C%AC%E6%9C%BA%E8%B5%84%E6%BA%90%E5%8D%A0%E7%94%A8%E6%8E%92%E6%9F%A5) —— 本条是它在「磁盘」这一层的实例\n- worktree是独立目录产物与配置都隔离 —— 旧 worktree 之所以占空间大，正因为产物各存一份\n- [本机卡顿先清残留开发进程](/wiki/agent-session/as-concept-%E6%9C%AC%E6%9C%BA%E5%8D%A1%E9%A1%BF%E5%85%88%E6%B8%85%E6%AE%8B%E7%95%99%E5%BC%80%E5%8F%91%E8%BF%9B%E7%A8%8B)\n- 备用构建目录不要嵌在next目录里\n- [清理客户端缓存先分清哪层可丢](/wiki/agent-session/as-concept-%E6%B8%85%E7%90%86%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98%E5%85%88%E5%88%86%E6%B8%85%E5%93%AA%E5%B1%82%E5%8F%AF%E4%B8%A2)"
  ]
},
{
  "id": "as-concept-验收要按唯一标识选中实例，不能按名字",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "验收要按唯一标识选中实例，不能按名字",
  "oneLiner": "**跑的是刚构建的新 binary，却用应用名去激活和截图（`osascript tell application \"Mewmo\"` / `pgrep -x mewmo`），Launch Services 按名字解析，命中了 `/Applications/mewmo.app`（旧版、另一个 bundle id）—— 于是\"验收新 UI\"实际看的是旧界面。名字不是身份，唯一标识才是。**",
  "body": [
    "## 一、现象与根因\n\n- 构建产物在临时 DerivedData 里，安装目录里是旧版本，两者**应用名相同、bundle id 不同**。\n- 按名字选进程（应用名、进程名、bundle 显示名）时，命中的是系统解析顺序里的第一个，不是你要验的那个。\n- 更危险的是：它不报错。旧版只是\"长得不一样\"，于是结论可能是\"新 UI 没生效\"，也可能是\"通过\"（把旧版截图当验收证据）。",
    "## 二、做法\n\n1. **启动**：临时 DerivedData + 唯一 `PRODUCT_BUNDLE_IDENTIFIER`，直接启动**绝对路径**的 binary，不走 `open -a`/应用名。\n2. **激活与截图**：按该进程的**精确 PID**（窗口截图按精确 window id，如 `screencapture -l <windowID>`），不按应用名/pgrep 模糊匹配。\n3. **判断画面前**：先核对 executable path / bundle id / PID 三者一致，再看画面。\n4. **多档位重复**：深浅主题、compact/regular/wide 三档窗口，每一档都要重新走这套精确选择。\n5. 若确实拿不到可裁剪的本任务窗口，**不拿旧版截图顶替**，如实记为未验证。",
    "## 三、可迁移\n\n任何\"选中一个实例\"的动作——杀进程、截图、连服务、读日志——凡是用名字或模糊匹配（`pgrep`/`pkill`/`tell application`/默认端口）的，都可能命中另一个同名的旧实例。验收证据里必须带唯一标识（PID / bundle id / 绝对路径 / window id），否则证据无法证明它对应的是被验收的那一份。",
    "## 相关\n\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) —— 同源：先确认打开的是哪一份产物\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条是该 synthesis 在\"进程/窗口选择\"上的具体形态\n- 以前能用最近坏了先查自己改了什么 —— 另一种默认假设导致的误判\n- [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86)"
  ]
},
{
  "id": "as-concept-高负载发烫先排除负载而非硬件",
  "updatedAt": "2026-08-12",
  "wikiSlug": "agent-session",
  "term": "高负载发烫先排除负载而非硬件",
  "oneLiner": "**结论：无风扇机型「莫名发烫」的第一假设应是持续负载，不是硬件故障。** 判断顺序：先找出高功耗进程 → 全部退出 → 等 3–5 分钟看是否迅速降温。",
  "body": [
    "## 机制：无风扇机型把功耗直接变成体感温度\n\nMacBook Air 一类的无风扇机器，十几瓦的**持续**功耗没有风扇可以吹走，只能靠机身散热，于是直接表现成「明明没干什么却很烫」。因此体感温度高 ≠ 负载高，但持续功耗是充分条件。\n\n一个可用的分界线：**系统没有报过热或降频、电池温度正常 → 属于「负载很高所以烫」，不像硬件问题。**",
    "## 排查顺序（从最可能到最不可能）\n\n| 层 | 典型表现 |\n|---|---|\n| 前台应用 | 播放视频的浏览器页面进程可以长期占住 30%–60% CPU |\n| **后台应用（最易漏）** | 窗口已关但进程还在，仍在持续吃 GPU；「不在前台」不等于不耗电 |\n| 系统进程 | 窗口服务类进程（合成/绘制）会随页面数量一起涨 |\n| 常驻服务脚本 | 开发/同步类常驻进程会间歇冲到高 CPU |\n| 内存压力 | 压缩内存升高意味着换页开销也在消耗 |\n\n**排查动作本身要留证据：** 先记录当前功耗/温度基线，退出应用后再看一次，才有对照。否则只是「感觉好像凉了」。",
    "## 判断规则\n\n- 退出高负载进程后 **3–5 分钟内迅速降温** → 主因确认是负载，无需维修。\n- 降温不明显、且系统出现降频/过热告警 → 才转向硬件。",
    "## 相关\n\n- [本机资源占用排查](/wiki/agent-session/as-topic-%E6%9C%AC%E6%9C%BA%E8%B5%84%E6%BA%90%E5%8D%A0%E7%94%A8%E6%8E%92%E6%9F%A5) —— 本条是它在「CPU / 温度」这一层的实例\n- [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87) —— 同属本机排障，共同的判断习惯是**先排除最平凡的解释，再怀疑异常**。\n- [合盖仍会睡眠后台任务会被中断](/wiki/agent-session/as-concept-%E5%90%88%E7%9B%96%E4%BB%8D%E4%BC%9A%E7%9D%A1%E7%9C%A0%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E4%BC%9A%E8%A2%AB%E4%B8%AD%E6%96%AD) —— 同为「机器层面的功耗/睡眠」而非代码问题\n- [本机卡顿先清残留开发进程](/wiki/agent-session/as-concept-%E6%9C%AC%E6%9C%BA%E5%8D%A1%E9%A1%BF%E5%85%88%E6%B8%85%E6%AE%8B%E7%95%99%E5%BC%80%E5%8F%91%E8%BF%9B%E7%A8%8B) —— 另一类持续负载：残留开发进程"
  ]
},
{
  "id": "as-topic-AI产品经理的能力三轴",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "AI产品经理的能力三轴",
  "oneLiner": "**AI 产品经理要证明的是三条并列的能力轴：① 产品思考 ② agent 理解边界 ③ AI coding 能力。**",
  "body": [
    "## **三者是并列关系，不是递进** —— 缺任何一条，叙事就退化成「参与过一个 AI 项目」。\n\n**同一个项目可以同时承载三条轴**，所以项目本身不是叙事单位，能力轴才是。",
    "## 为什么是这三条\n\n- **产品思考** —— AI 产品里「做什么」不再是默认答案，要能给出取舍。\n- **agent 理解边界** —— 知道 agent 能做到哪、会在哪里失效，是 AI PM 与普通 PM 的分界。\n- **AI coding 能力** —— 自己能动手，判断才不依赖别人的转述。",
    "## 相关\n\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) —— 同一道理在对外表达上：给对照，不给清单\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 「能力轴 vs 项目清单」是该 synthesis 在求职叙事上的同形\n- [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) —— 简历这件事的工程侧"
  ]
},
{
  "id": "as-topic-UI原型保真",
  "updatedAt": "2026-07-09",
  "wikiSlug": "agent-session",
  "term": "UI原型保真",
  "oneLiner": "**做有原型的界面时，原型是唯一真源：要求「完全忠于原型」，不接受「差不多」的近似替代。** 这个主题下的几条判断：",
  "body": [
    "## - **逐片对照，不整块重写**：把浮层按家族（菜单/弹窗/下拉/编辑器菜单）一片片审，每片都对照原型的具体数值（尺寸、间距、icon、定位）。\n- **共享 primitive 优先**：公共行为（白底、外点关闭、右下弹出、开合过渡、icon）收敛到一处，避免逐页补丁互相打架。见 浮层要收敛到一个共享primitive。\n- **不用替代物**：原型里有的 icon 就用真的 icon，不用文字符号/emoji；原型没有毛玻璃就不加毛玻璃。\n- **考虑周边状态**：浮层弹出要顾及 AI 栏打开、侧栏折叠等状态下的定位与夹取。\n- **判断机制而非抄常量**：原型 JS 里的阈值若与用户要的机制冲突（如固定像素 vs 元素可见性），按用户要的机制实现。见 [显示阈值应按元素可见性而非固定像素](/wiki/agent-session/as-concept-%E6%98%BE%E7%A4%BA%E9%98%88%E5%80%BC%E5%BA%94%E6%8C%89%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81%E6%80%A7%E8%80%8C%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%83%8F%E7%B4%A0)。\n- **把原型当合同**：UI 任务固定成 ① 找到对应原型 → ② 截一张目标状态图 → ③ 找真实组件位置 → ④ 只搬必要结构/样式，不凭感觉重画 → ⑤ 同 viewport 验证桌面 + 移动、浅色 + 深色。慢的不是看原型，是没把原型当合同导致返工。\n- **原型不能替代眼睛**：UI 的核心是「原型先行 + 截图验证 + 深浅色验证」，静态测试只能兜底。见 [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7)。\n- **原生化只改外壳，不改结构**：把 Web 产品做成原生 App 时，原生只该体现在菜单、焦点、键盘、窗口行为上；结构、信息架构、状态与视觉 token（侧栏/列表宽度、圆角、面板层级）仍以 Web 为事实源。退化成系统默认 `NavigationSplitView/List/toolbar` 视觉、自动生成英文标题、系统蓝色链接，是 **spec compliance（规范一致性）失败**，不是合理的 macOS native adaptation。\n- **CI 绿不代表看起来还是这个产品**：CI 只证明能构建。视觉一致性要靠深浅主题 × 三种窗口尺寸的真实构建截图验收，且这类缺陷应作为验收缺陷发回原 worker，而不是当 style 问题放过。",
    "## 相关\n\n- 修复范围分保守彻底与最小闭环\n- 一次循环只做一个可体验的v1能力\n- [折叠动画要有收起态过渡](/wiki/agent-session/as-concept-%E6%8A%98%E5%8F%A0%E5%8A%A8%E7%94%BB%E8%A6%81%E6%9C%89%E6%94%B6%E8%B5%B7%E6%80%81%E8%BF%87%E6%B8%A1)\n- [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7)\n- [产品页信息结构](/wiki/agent-session/as-topic-%E4%BA%A7%E5%93%81%E9%A1%B5%E4%BF%A1%E6%81%AF%E7%BB%93%E6%9E%84)"
  ]
},
{
  "id": "as-topic-个人知识产品的定位",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "个人知识产品的定位",
  "oneLiner": "个人知识产品的定位",
  "body": [
    "## # 个人知识产品的定位\n\n**结论：不是「更聪明的聊天框」，也不是「个人版 Notion / Linear」。定位是让知识留在一个可反复回看、可可视化、可被 AI 洞察的空间里；任务与日程只是这个空间的一部分。**",
    "## 一、赛道选择：做 learning，不做 coding buddy\n\n判断（10:36）：最近大家都在做 workbuddy / 编程 buddy，**似乎没有人做 study buddy**。\n所以定位可以是「学习的平台」——用户接入自己的 provider model，产品侧对「学习」这件事做优化。",
    "## 二、Goal 是长期上下文容器，不是项目文件夹\n\n定义（11:06 / 11:24）：\n\n> 用户自定义设置自己的目标 —— 无论是项目还是单纯学一个东西，都是长期目标之一。\n> 每个 goal 里可以存放：用户自己写的笔记、调研出来的 wiki、AI 创建的 wiki。\n\nAgent 因为知道用户的日程-目标-任务，所以能拆解目标、分析难题；笔记也沉淀在同一个 goal 下。\n\n**Goal 不限定为学习目标。** 曾把 Goal 收窄成「只允许『学习某个主题并完成一个产出』」，用户明确不接受 ——\n项目型目标与学习型目标是同一层抽象，都是长期目标。相应地，task / calendar 也只是 Goal 里的一部分\n（像 Linear 的项目管理，但管理对象是长期的 goal），不能反客为主变成通用个人项目管理工具。",
    "## 三、与 Notion / flomo 的分野：用完即走 vs 一个空间\n\n判断（11:24）：\n\n- Notion、flomo 这类工具的使用模式是**用完即走**；而「存放知识库、启迪思考」应该发生在**同一个空间**里。\n- Notion 类产品更偏**企业的问答和做事**（完成任务）；个人场景更在于**洞察、思考**。\n- 所以要同时做到三件事：创建笔记等任务、更针对性地 chat、创建 wiki —— 让知识沉淀下来，\n  可以反复看、可视化，AI 可以在上面洞察与思考。",
    "## 待探索\n\n- 定位与数据模型的落点：「一个 Goal 里同时有笔记 / wiki / chat」怎么建模，尚未定义。\n- 与 [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) 的分工：本页管「做什么、给谁」，那页管云端/本地边界。",
    "## 相关\n\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B)\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 本页是该 synthesis 的第一处证据（功能清单抹掉差异，使用模式才分得开）\n- [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3)\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [北极星指标要量价值闭环](/wiki/agent-session/as-concept-%E5%8C%97%E6%9E%81%E6%98%9F%E6%8C%87%E6%A0%87%E8%A6%81%E9%87%8F%E4%BB%B7%E5%80%BC%E9%97%AD%E7%8E%AF)"
  ]
},
{
  "id": "as-topic-产品页信息结构",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "产品页信息结构",
  "oneLiner": "产品官网/介绍页如何组织信息的一组判断。",
  "body": [
    "## 每屏只回答一个问题\n\n好的参考站值得借的不是视觉风格，而是 **editorial pacing（编辑式节奏）**：每个 section 只回答一个问题，顺序大致是「一句定位 → 一张主视觉 → 一组证明 → 一个可展开模块 → 收口 CTA」。每屏边界明确，才不会把标题、截图和流程线塞进同一视口里（那就是「乱七八糟」的来源）。\n\n推论：**不要在页面上出现「基础功能」这类说明性标题**。第二屏直接进入能力本身，标题由能力承担。",
    "## 同类能力用纵向 Tab + 单选展开\n\n功能多时：左侧纵向 Tab 列表，右侧是对应文字与大幅截图。**始终只有一个处于激活态（单选展开），不要做多个同时展开的手风琴** —— 否则一屏一个主题的节奏会再次被打破。\n\n每个功能的文案按「它是什么 + 对用户有什么用」展开，而不是罗列技术能力。",
    "## 最精华的部分不拆分\n\n越是核心、越能体现产品思维的能力，越不应该被切成并列 Tab 稀释 —— 它应该是整页的高潮段落，用一段连续叙事贯穿（本例：Agent 贯穿「信息收集 → 知识加工与洞察 → 引入第三方视角」）。",
    "## 未来功能要标注「即将支持」\n\nroadmap 上的能力可以重点展示，但必须显式标注状态（可用 / 即将支持），并让「现在可用」与「持续进化」分组呈现。否则官网承诺与实际产品不一致，会伤害可信度。\n\n相关：[用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)、[分享要反映品牌与产品调性](/wiki/agent-session/as-concept-%E5%88%86%E4%BA%AB%E8%A6%81%E5%8F%8D%E6%98%A0%E5%93%81%E7%89%8C%E4%B8%8E%E4%BA%A7%E5%93%81%E8%B0%83%E6%80%A7)、[UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F)"
  ]
},
{
  "id": "as-topic-代码库知识工具的选型",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "代码库知识工具的选型",
  "oneLiner": "**给项目做「代码库知识」有三类工具，选型先看你要的是哪一种：会动的架构图（Archify）、人能读的 wiki 文档（DeepWiki-Open / OpenDeepWiki / KT Studio）、跟着代码走的活索引（GitNexus）。要\"活\"，关键不在生成而在增量更新机制。**",
  "body": [
    "## 一、先分清三个不同诉求\n\n| 诉求 | 工具 | 输出 |\n|---|---|---|\n| 沟通用的架构图 | Archify（agent skill） | 单文件交互式 HTML 图，5 种图型 |\n| 人能读的 wiki 文档 | DeepWiki-Open / OpenDeepWiki / KT Studio | 多页文档站（+ 图 / 思维导图 / 聊天） |\n| 让 agent 快速了解项目且随改动更新 | GitNexus | 知识图谱索引 + 由它生成的 wiki |\n\n- **Archify 只是可视化，不是 wiki**：定位是「把技术意图变成沟通产物」，没有篇章、没有搜索索引、没有持续更新。\n- **同名要小心**：官方 DeepWiki（`deepwiki.com`，以及 MCP 服务）是闭源 SaaS，**只认公开 GitHub 仓库，私有项目用不了**；`DeepWiki-Open` 是借用名字的 MIT 开源自部署复刻，可传私有仓库 token 或直接处理本地代码。两者不是一回事。\n- **「活的 wiki」的关键是增量机制**：`gitnexus analyze` 建图后**自动 reindex**（代码一变图就更新），`gitnexus wiki` 从图重新生成 wiki（几秒）；OpenDeepWiki 自带 scheduled incremental update pipeline，最接近\"wiki 自己会更新\"，但要在后台常驻 docker 服务。生成一次不难，\"跟着改\"才难。\n- **别浪费已有资产**：项目的 `.trellis/spec/` + agent 强加载的 `AGENTS.md` 本身就是\"让 agent 了解项目\"的活机制，wiki 可以视为它的**人读界面**，两者叠加才是完整答案。",
    "## 二、顺带确认的两个事实\n\n- **agent skill 装在项目 `.agents/skills/` 的意义**：该 agent 每次会话启动扫描此目录，skill 的 `description` 进可用技能列表，配套 CLI/renderers 一起生效；只对本项目生效、随 git 走（团队共享）。`~/.config/opencode/skills/` 之类全局目录才是所有项目通用。\n- **`.agents/skills/` 的受众**：Codex CLI 会读（这是它的官方技能目录），Claude Code 不读（只认 `~/.claude/skills/`）。想让某 skill 只归 opencode，得放 `.opencode/skills/`；但若该目录本身是指向 `.agents/skills` 的软链，就**做不到项目级独占**。",
    "## 相关\n\n- skill跨agent加载差异 —— 同一目录下的加载规则差异\n- [项目里的技能可能有多份副本](/wiki/agent-session/as-concept-%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%9A%84%E6%8A%80%E8%83%BD%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%BB%BD%E5%89%AF%E6%9C%AC) —— 多副本带来的漂移\n- 知识库先编译再查而不是查询时拼原文 —— 同类：先建索引再消费\n- 活的能力取决于增量机制而不是生成质量 —— 选型判据：比「生成得怎么样」更该比「怎么跟着代码变」"
  ]
},
{
  "id": "as-topic-几何题-3D-化的题库定位",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "几何题 3D 化的题库定位",
  "oneLiner": "**几何题的产品形态应该是「题库播放器」，不是自由探索平台：组合分支已经是题库的标准形态，截面分支同样适合题库，只是「预设立方体」这个壳不对。题目形态不止参数体 / 方块体两类；基础图形只有服务于刷真题才有意义。**",
  "body": [
    "## 一、组合分支 = 题库播放器的标准形态\n\n判断依据是页面已经长成了题库该有的样子：题号、题干、页码、组合/分解进度、颜色图例、固定的题目数据。到这一步它**已经不是自由平台**，而是题库产品。",
    "## 二、截面分支也适合题库，错的是「预设立方体」\n\n- 现状：每个 chip 是**自由预设体**，用户自己选方向、偏移、倾角 → 更像工具，不像题库讲解。\n- 应该变成：**每道题自带一个模型 + 一组切面步骤**。\n- 截面的多样性不是障碍，反而说明它适合题库化 —— 每道截面题本来就有固定的立体和固定的切法。",
    "## 三、题库化的原则：模型与切法由题目决定，用户不选\n\n> **题目加载什么模型，不让用户选；题目需要什么切面，不让用户猜；用户只拖动 / 点击看过程。**\n\n题库只要记录四件事：立体由哪些基本体组成、正确切面在哪里、截面长什么样、哪个选项匹配。",
    "## 四、题目形态不止两类\n\n原以为截面题只有「参数体」和「方块堆叠」两类；实测原题（题 80）**中间有一面是斜的，不是正方体堆叠** → 必须有第三类：**自定义多面体（顶点 + 面 + P/Q/R 三点切面）**。\n\n按方块堆叠去表达斜面题，即使看起来「能跑」，也是错的 —— **类型先对了才算还原**，近似模型不等于原题。",
    "## 五、基础图形的定位：服务于真题才有意义\n\n- 用户的根本需求是**刷题、练真题**，不是玩基础几何。\n- 简单图形不需要人工建模，**这类需求本身意义不大**；难点在复杂模型。\n- 所以基础图形只能是「真题不会时的辅助演示」（如空心圆柱斜切看不懂 → 先看 30 秒基础演示），不能作为主产品。\n- 判断标准：**和真题绑定时才有意义**；脱离真题做开放工具，用户价值会弱。",
    "## 相关\n\n- 一次循环只做一个可体验的v1能力 —— 先做第一版标准题库，而不是继续做自由平台\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) —— 「服务于真题」就是用户能感知的价值所在\n- 引擎不做建模器 —— 复杂模型交给外部工具建模，引擎只负责切与渲染"
  ]
},
{
  "id": "as-topic-后台任务队列选型",
  "updatedAt": "2026-07-20",
  "wikiSlug": "agent-session",
  "term": "后台任务队列选型",
  "oneLiner": "后台任务队列选型",
  "body": [
    "## # 后台任务队列选型",
    "## 结论\n\n**用高吞吐队列框架（BullMQ + 托管 Redis）跑每天几百个低频任务，是架构与成本模型不匹配 —— 过度设计。**\n选型的尺度是**任务频率**，不是框架的先进性：低频 + 要可靠 → 一张数据库任务表；高频 + 要吞吐 → 专用队列。",
    "## 一、先校准口径：计费单位不是任务数\n\n托管 Redis 统计的是**底层 Redis command 次数**，不是业务任务数，也不是存储量。\n\n「才 192 个 RSS 任务，500K 怎么一下就没了」—— 两个量纲根本不同：\n\n- BullMQ 一次任务 = 入队 + 置状态 + 领取 + 加锁 + 续期 + 完成 + 事件记录等多条命令\n- 空队列每 5 秒重新阻塞读取：3 个消费者 ≈ 51,840 次/天\n- 每 30 秒的卡死检查：3 个消费者 ≈ 8,640 次/天\n- 存储 95 KB / 256 MB 完全说明不了调用量\n\n所以「用量突然见底」不等于「任务变多了」。先问分子分母（见 [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC)）。",
    "## 二、为什么可靠队列既有「超时」又有「持续检查」\n\nBullMQ 同时用了两套机制，不是它设计啰嗦：\n\n1. Worker 领到任务后创建一把带 TTL 的锁（如 30 秒）\n2. Worker 活着就不断续期\n3. Worker 崩溃 → 锁自动超时消失\n4. **但锁消失不会自动把任务从「处理中」改回「等待中」**\n5. 所以还需要一个**存活的观察者**定期找「仍在处理中但锁已不存在」的任务，重新入队\n\n为什么不能只靠超时：Node 的 `setTimeout` 随进程崩溃一起消失；Redis TTL 只能删锁，\n做不了「改状态 + 重新入队」这种多步迁移；Redis 过期事件通知不是可靠消息，断线会丢。\n\n**结论：问题不在于「存在卡死检查」，而在于这套机制按高吞吐假设配置了检查频率，又被多份消费者放大。**",
    "## 三、替代方案：一张数据库任务表\n\n```text\nbackground_jobs\n  id / type / payload / status / run_at\n  locked_until / attempts / last_error\n  created_at / finished_at\n```\n\n- Worker 每 30 秒一次数据库查询，领取所有类型的待执行任务（≈ 2,880 次查询/天）\n- 领取时写 `locked_until`（如 5 分钟）；正常完成标记成功\n- 每 5 分钟统一回收已超过 `locked_until` 的任务\n- 只有真正可能跑超 5 分钟的任务才续锁\n- 失败最多重试 3 次并记录错误\n- 空闲时可逐步拉长到 60 秒，有任务时缩短\n\n它保留了超时、锁、失败重试、崩溃恢复，但不再为低频业务维持高频轮询。\n适用边界示例（RSS 抓取 + AI 总结共表共 Worker），未来 Agent 自动化继续复用同一张表。",
    "## 四、两个常见放大器\n\n1. **同一调度职责有多个所有者**：Web runtime 与常驻 Worker 都启动 Feed scheduler，\n   同一批订阅被重复检查。生产应默认只留 Worker，Web 侧要显式 opt-in（`FEED_REFRESH_SCHEDULER=on`），\n   并把它加进全局环境变量白名单。\n2. **每次入队重建连接**：快捷入队函数各自 `createQueue` 会泄漏 producer 连接，\n   表现为连接数异常（重启后 42 → 6）。所有入队入口要复用同一个 queue helper。",
    "## 五、「不要 Redis」的真正含义\n\n不是 Redis 无用，而是**当前规模下没有匹配它的职责**：任务改走数据库表 + Cron 后，BullMQ 不再需要它；页面加速由浏览器缓存与路由优化负责。**不要为了已经不存在的问题继续保留一套基础设施。**\n\n两个容易被顺带误判的点：\n\n- **把用户凭证放进 Redis 不会更快**：JWT 会话本来就是「浏览器存签名 Cookie → 服务端验签名」，不需要每次查 Session；再复制进 Redis 等于多一次网络请求，还增加串用户与泄露风险。\n- **Redis 只能缩短「API 查数据」这一小段**。用户返回已访问页面时，浏览器缓存是 0 次网络请求，而 Redis 仍要经过 浏览器 → Vercel → Upstash 一跳，反而更慢。**私有且频繁修改的内容不适合放服务端缓存。**\n\n未来真正需要 Redis 的场景：限流、验证码、公共热点内容缓存、多服务器锁。",
    "## 六、执行形态：Cron 与常驻 Worker 怎么分\n\n判据不是「哪个技术更先进」，而是**这件事能不能等**：\n\n- **能等的**（批量、可延迟、可重试）：剪藏 / RSS 自动摘要、Embedding 生成、相关推荐更新、失败重试与卡死任务接管、日报周报 → PostgreSQL 任务表 + 每分钟 one-shot Cron。\n- **不能等的**（用户正盯着屏幕）：Sidebar 问答、润色扩写、用户确认后的即时反馈 → 必须在 Web 请求里实时调用模型。\n\n交互式 Agent 若也排进 Cron，用户每次对话要等一分钟。所以这是**两套并存的执行形态**，不是「用 Cron 替换 Worker」：\n工作流层 = 队列 + Cron；Agent 层 = Web 请求实时执行。\n\n既然部署方向已经是 Cron、常驻 Worker 实际没在用，就不该为了 AI 再引入一套常驻进程，更不该连带引入 BullMQ / Redis。\n\nAI Cron 的领取与容错（与 §三 的数据库任务表同构）：每分钟一次、主机 `flock` 防重叠、条件更新原子领取、5 分钟 lease 允许接管卡死任务、每批限量、单任务超时隔离、最多三次指数退避、内容版本变化时旧任务标记 `superseded`（不允许旧任务覆盖新内容）。\n\n命名上要区分：**「每分钟启动一次、做完就退出」与「24 小时常驻监听队列」是两种运行形态**，即使放在同一个 app 目录里也不该混成一个概念（见 [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) §十二）。",
    "## 相关\n\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C) —— Redis 的职责边界\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90) —— 为什么还没上线就在消耗\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 数字不可信先查归属\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B) —— 常驻 Worker 放在哪"
  ]
},
{
  "id": "as-topic-多Agent协作控制面",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "多Agent协作控制面",
  "oneLiner": "**多 agent 协作的核心矛盾不是「文档不够多」，而是「协作控制面分裂」**——不同 agent 从不同入口进来，读到不同的状态和知识，于是每次都得靠人转述。",
  "body": [
    "## 症状：开了多 agent，总要人工告诉别的 agent 当前进度、规则变了没；写了文档但别处没更新；做过的东西反复造轮子。",
    "## 问题定义收敛成四层\n\n| 层 | 解决什么 | 关键词 |\n|---|---|---|\n| 0 统一入口 | Claude / Codex / Cursor 读到的规则不一样 | 所有 agent 读同一套规则 |\n| 1 共享当前进度 | 谁在干什么、做到哪、下一个怎么接 | 当前、临时、跨 worktree |\n| 2 独立协作 | 多 agent 不互相踩代码、不混改、不覆盖 | 一人一个 worktree + branch |\n| 3 复用知识 | 做过的找不到、相似 bug 反复踩 | 长期知识、可搜索、跟 Git 走 |\n\n这四层不要混：**把「当前状态」写进「长期知识」，或反过来，都会让下一层失真。**",
    "## 每层对应一种文件，职责单一\n\n```\n入口层：agent.md / AGENTS.md / CLAUDE.md    → 统一入口\n当前层：~/.agent-state/<proj>/STATUS.md     → 现在谁在做什么\n隔离层：git branch + git worktree           → 并行施工隔离\n历史层：journal.md                          → 为什么当时这么做\n知识层：.agent/registry/                    → 组件 / bug / 惯例索引\n复盘层：lessons/                            → 心智模型怎么改\n规格层：specs/ + .specify/                  → 要做什么、怎么做\n```\n\n一句话：**status 管现在，journal 管过去，registry 管可复用，lesson 管教训，branch/worktree 管隔离。**\n\n- `status.md` 不是日志，是「当前战场地图」：当前分支 / 目标 spec / 正在动的文件 / 不要碰的文件 / 最近一次验证结果 / 阻塞点 / 下一步 1-3 件 / 最后更新人。要短、可覆盖。\n- `registry` 不要写成百科。组件条目只回答「干什么、在哪、什么时候复用、有什么坑」；bug 条目必须写「症状 → 根因 → 修法 → 防复发信号」，只写「修好了」等于没写。\n- `lesson` 不要被 registry 顶替：registry 负责「下次能搜到」，lesson 负责「为什么会发生、之后心智模型怎么改」。复杂 bug 可以两边都写。",
    "## 跨 worktree 的依赖与共享配置\n\n隔离层只解决「不互相踩」，不解决「怎么共享」。依赖的分发规则：\n\n- 共享依赖、vendor 库、共享配置**默认落 main**，feature 分支通过 `merge` / `rebase` main 拿到；\n- **worktree 之间只共享提交，不共享工作区**：staged 但未 commit 的依赖不算进仓库，别的 worktree 看不到 —— 所以「我装好了」不等于「别人有了」；\n- `node_modules` 不进 git；国内项目不建议外部 CDN，依赖应本地化 vendor。\n\n配套的防撞车机制（隔离层的执行细则）：开工前写 session 卡、声明 `touching` 与 `do-not-touch`、看到别人声明在改的文件就不碰、**一 agent 一 worktree 一 branch**。",
    "## 版本线与分支模型\n\n`main` = 稳定发布版；大版本用一条**集成分支**（如 `1.0version`）承载；小功能分支一律从集成分支开出，做完合回集成分支；集成分支整体测试稳定后，再一次性 `merge` 进 `main`。\n\n```\nmain\n  └─ 1.0version            ← 大版本集成区\n       ├─ 1.0-toc\n       ├─ 1.0-ai-panel\n       └─ 1.0-settings\n```\n\n- 不要让所有人直接改 `main`，也尽量不要所有人直接改集成分支 —— 集成分支是汇总区，不是公共工作区。\n- 多个分支各有未提交改动时，**不要把未收口的状态直接塞进 `main`**：先把各自的改动提交或明确丢弃，再评估大功能分支。\n- 落后的分支不要在落后状态上继续堆，基于最新基线重开一个小分支单独合。\n- 「在分支中开分支」= 从当前点开新分支：在 worktree 里 `git switch -c <new>`，或从主目录 `git worktree add <dir> -b <new> <base>`（后者更适合一 agent 一 worktree，不占用原 worktree）。",
    "## 推倒重来之前：先开保险分支，不要拿 stash 当主备份\n\n要 `reset --hard upstream/main` + 重装依赖这种「推倒重来」时，**第一步不是 pull，而是先把本地改动完整落成提交**：\n\n```bash\n git switch -c codex/backup-before-rebuild\n git add -A\n git commit -m \"wip: save local work before rebuild\"\n# 之后才切回 main、fetch upstream、reset --hard、重装依赖\n```\n\n- `git stash` 不适合做主备份：它不覆盖未跟踪的新文件，也不形成一个可随时回来挑改动的基线。\n- 备份分支的价值是「可挑拣」：重建后从 backup 分支里按需重新合入需要的改动（登录页修正、schema 文档、skill、测试……），而不是全量回放。\n- 推倒重来前先清点本地有哪些未提交改动（含未跟踪文件），确认都进了备份分支再 reset。",
    "## 领先/落后只是提交计数，不是先进程度\n\n```\nA---B---C main\n \\\n  D---E old-branch\n```\n\nold-branch 对 main「领先 2」，同时「落后 2」。**领先只说明有 main 没有的提交**，不等于更新、更先进，也不代表应该直接合。\n\n所以判断一条老分支要不要处理，**不能看领先数**，要看 diff 内容和产品是否还需要：可能是（a）有价值但还没合、（b）已被别处用另一种方式实现、（c）旧实验/废弃，可直接清理。",
    "## worktree 的两个坑\n\n- **分支不是目录，不能 `cd` 到分支**。worktree 已经把每条分支 checkout 到一个固定文件夹，要进的是文件夹。在主目录里 `git checkout <branch>` 会被拒绝，因为该分支已被某个 worktree 占用 —— 这正是「两个目录不会同时改同一条分支」的保护。看别的 agent 的改动用 `cd <worktree>` 或 `git -C <worktree> diff`。\n- **`.git/worktrees/<旧名>` 是 Git 内部元数据，别手删**。分支改名后元数据目录名可能还是旧的（旧名对应新分支），Git 照样能对应上；worktree 目录里的 `.claude/settings.local.json` 是该 worktree 自己的配置，也不是旧分支残留。",
    "## worktree 的第三个坑：detached HEAD 让别人看不到你\n\n用 `git worktree add --detach` 建的 session worktree **不挂任何分支**，停在 `origin/main` 上。好处是接活之前不会多出空分支；代价是**别人在分支列表里看不到你的工作**，会被问「为什么没看到你的分支」。\n\n对应约定：\n\n- **分支对应 issue**，不是对应 session。接到 issue 才从 `origin/main` 切 `fix/zoo-XX-...`；没接活时处于 detached 状态是正常的。\n- **session 专属 worktree 要定期同步 main**：每次开工前 `git fetch origin main` 并 rebase/merge，因为同时有多个 agent 在推 main。\n- **worktree 不共享工作区配置**：`.env.local` 是 gitignored，不会随 worktree 复制（见 worktree是独立目录产物与配置都隔离）。要跑数据库命令或本地 dev 时，得单独补一份。\n- 收尾后及时删掉 worktree + 分支，否则列表里会积累一堆历史遗留，反而看不出「谁在做哪个 issue」。",
    "## 入口分裂的典型症状\n\n根因往往很蠢：`AGENTS.md` 里写「事实进 `.Codex/memory/`」，但目录里实际存在的是 `.claude/`。于是：\n\n- 入口索引指向**不存在的路径** → 死链；\n- Codex 读 `AGENTS.md`、Claude 读 `CLAUDE.md`，**两个 agent 进来读到两套世界**；\n- 规则「写了」但没生效，因为没人指向它。\n\n修法是让 `AGENTS.md` 和 `CLAUDE.md` 退化成**薄壳**，都指向同一份真实源（`.agents/START_HERE.md` 或 `agent.md`）。工具专属配置才留在 `.claude/` / `.codex/`。",
    "## `.agents` 和 `.agent` 为什么不是重复\n\n```\n.agents = 工具箱（能力目录）   → 有哪些 skill / 命令可以调用，如 speckit-*\n.agent  = 项目白板（协作目录） → 现在什么状态、谁在哪个分支、修过什么 bug、有什么可复用\n```\n\n有 `.agents` 仍然需要 `.agent`：能力目录不存当前进度、不存 worktree 状态、不存 bug/组件索引。名字太像时，协作目录可改名 `.agent-collab/`。",
    "## Git 能替代多少\n\nGit 擅长回答：改了什么（`diff`）、谁在哪个分支（`branch`/`log`）、文件历史（`log -- path`）、bug 哪次引入/修复（`bisect`/`blame`）、哪些没合并。\n\nGit 不擅长回答：**「现在下一个 agent 该接什么」「这个 bug 当时为什么这么修」「这个组件能不能复用」「这条规则刚变了要不要重读」「这个分支卡在用户拍板还是测试失败」**。\n\n所以分支表、最近变更、bug 索引都能部分由 Git 生成（写好 commit message，`git log --grep` 就是 bug 历史库），但**「当前意图」和「未完成状态」Git 不知道**，`STATUS.md` 不能省。",
    "## 同一 worktree 内的并发写冲突\n\n隔离层（一 agent 一 worktree）只挡住「跨 worktree 踩代码」，**挡不住同一个工作区里并行跑多个 session** —— 同一批文件被两个 session 同时写时，症状是「我的改动被回退了 / 文件被 linter 改了」。\n\n分诊：**先确认被怀疑的工具是否有写能力**（lint 脚本只有 `eslint .`、没有 `--fix`，就不可能是它），再去看哪些文件同时带着多个来源的 diff —— 那些就是冲突点。\n\n修复：暂停所有在改同一批文件的 session → 保存对方的 diff → **按 hunks 合并，不 `reset` 整个文件**（否则删掉的是别人的改动）→ 只跑 `lint`/`build` 验证，不跑任何带 `--fix`、格式化、`checkout`、`restore` 的命令。\n\n结论：**并发写冲突要用「声明 + 按 hunk 合并」处理，不要用「整文件回滚」。** 更根本的解法是让每个 session 有明确的文件所有权（`touching` / `do-not-touch`），同一时刻只有一个 session 写同一文件。\n\n### 中途收紧范围时，已改的禁区文件不要自行回退\n\n给某个 agent 下发「不许再动这几个文件」时，要同时说明**已经改了的怎么办**：正确指令是「不要回退，报告具体改动位置后继续允许范围」。\n\n理由：此刻的回退动作本身就是一次写入，可能删掉别人（或你自己别处）的改动 —— 收紧范围是为了避免冲突，自行回滚反而制造冲突。所以收到新范围时先自查：\n\n1. 禁区文件我改过没有？改过 → 报告位置，**不 revert**；\n2. 没改过 → 直接确认「无禁区改动」，继续按新范围做。\n\n把「收缩范围」和「清理现场」拆成两件事：前者立刻执行，后者留给能看清全局的人。",
    "## 与 project-setup skill 的关系\n\n原理相同：都是先建项目协作骨架，让 agent 不靠对话记忆工作。区别是规模——从「单 session 项目初始化」升级成「多 agent / 多 worktree 协作系统」。",
    "## Issue 追踪器作为「当前进度层」的落地\n\n「当前谁在做什么」不必自己发明 `STATUS.md` —— 用 Linear/Jira 这类 issue 追踪器 + MCP 也能充当控制面的第 1 层（共享当前进度）。关键是**把状态机写死**：Issue 实现完保持 `In Progress` 等用户验收，不自行设 `Done`。见 Issue完成由用户验收后再关闭。",
    "## 角色分三层：主管 / Issue Lead / 子 Agent\n\n单层「总控 + 一堆 Worker」不够——一个班长管不了所有 issue。正确形态是三层（2026-07-29 @ 22:14）：\n\n```\n你 ── 目标与最终验收\n主管 Agent ── 项目级协调（跨 issue）\nIssue Lead ── 对一个 issue 端到端负责（Player-Coach：自己写也派子 agent）\n子 Agent ── 只对明确产物负责（research / implementation / test / review / docs）\n```\n\n- **主管**：接收目标并 grill、建 Parent Issue 与验收标准、决定拆成哪些可独立交付的 issue、为每个 issue 指派 Lead、处理 issue 间依赖与冲突、做项目级架构验收、最终 assign 给你。\n- **Issue Lead**：拿到的是完整 Outcome（结果）而不是机械步骤，自主决定要不要继续拆、要不要并行、分配哪些文件边界、自己做什么、怎么集成、何时达到完成标准。\n- **子 Agent 不直接与你交流，也不直接改 Linear 最终状态**，结果一律回到 Issue Lead。\n\n### 并行的默认原则\n\n> 存在两个以上互不依赖、责任边界清楚的工作流时，默认并行派子 agent；当拆分成本、合并冲突或协调成本高于节省时间时，由 Lead 自己顺序完成。\n\n不适合并行：多个 agent 同时改同一文件、接口契约还没定、第二项依赖第一项结果、五分钟能干完。",
    "## Linear 是「交付柜台」，不是 Agent 群聊\n\n- **Linear 里的 comment = 单个 agent 与你的交接点**（需求、状态、责任人、验收证据、你的最终决策）。\n- **Agent 之间的交流不放在 Linear**，交给 Trellis/运行时承载（执行计划、Spec 注入、研究资料、跨会话恢复）。\n- 否则 Linear 会被 raw transcript 淹没，变成噪声与隐私风险；要同步只同步 curated handoff（精选交接信息）。\n- 各层真源分工：**Linear** 需求与优先级 · **Trellis** 执行上下文 · **Git** 代码与可审计产物 · **CI/Production** 质量与可用性。\n- 你只面对主管 agent，子 agent 做得好不好与你无关——**这是最省注意力的形态**。前提是主管 agent 必须真正对 scope、integration、evidence 负责，否则只是把黑盒套了一层黑盒。\n- 最终验收用独立的 `User Acceptance` 状态或明确 assignee handoff，**不要只靠截图或直接 Done**（见 Issue完成由用户验收后再关闭）。",
    "## 环境隔离 ≠ 目录划分\n\n环境隔离指的是**账号、数据库、Secret、部署与数据边界**的隔离，不等同于 `apps/` / `src/` 目录划分。一开始就把测试/正式环境的账号与数据边界定好；偷懒省下的一天，后面会以「大灾难」的形式还回来。",
    "## 经验要过 Lesson Gate 再晋升，不能由每个 worker 直写 spec\n\n每个 agent 执行完都复盘是好的，但**不能让每个 worker 直接修改长期 spec** —— 会很快产生重复、冲突甚至错误经验，形成 knowledge pollution（知识污染）。\n\n```\nWorker 完成\n→ 提交 Lesson Candidate（候选经验）\n→ Check Agent 验证事实\n→ 主管 Agent 去重、分类\n→ 晋升到正确的知识层\n→ 后续 agent 自动注入\n```\n\n候选经验的最小字段：`result: candidate|none`、`surprise`（最反直觉的发现）、`root_cause`、`failed_attempts`（哪些办法无效）、`reusable_rule`（下次应该怎么做）、`evidence`（文件/测试/日志/提交）、`confidence`。\n\n按用途分层，而不是堆进一个目录：\n\n| 内容 | 位置 |\n|---|---|\n| 只对当前 issue 有用 | `.trellis/tasks/<issue>/retrospective.md` |\n| 具体踩坑与完整案例 | `lessons/<topic>.md` |\n| 以后写代码必须遵守的契约 | `.trellis/spec/` |\n| Agent 本身的工作方式需改进 | `.trellis/agents/` 或对应 skill |\n| 只是执行过程记录 | workspace journal |\n| 没有可复用经验 | 明确写 `lesson: none`，**不制造文档** |\n\n⇒ 缺的往往不是「能不能写 lesson」，而是**每个 worker 完成时强制产出候选经验，并由主管负责晋升与下次检索**。",
    "## 相关\n\n- Issue完成由用户验收后再关闭 —— issue 追踪器充当当前进度层时的状态机约束\n- 职责要先分家再谈实现 —— 三层角色的分家\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— Linear / Trellis / Git / CI 各管一个维度\n- [远端主线可能与本地主线无共同祖先](/wiki/agent-session/as-concept-%E8%BF%9C%E7%AB%AF%E4%B8%BB%E7%BA%BF%E5%8F%AF%E8%83%BD%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%B8%BB%E7%BA%BF%E6%97%A0%E5%85%B1%E5%90%8C%E7%A5%96%E5%85%88) —— 重建/重置工作区前要先分清两套历史\n- [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) —— 入口统一之后，自动化 brief 还得有工具适配层\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) —— 同样是「按职责分层，不混」的思路\n- [文件被回退先分清是工具还是并发会话](/wiki/agent-session/as-concept-%E6%96%87%E4%BB%B6%E8%A2%AB%E5%9B%9E%E9%80%80%E5%85%88%E5%88%86%E6%B8%85%E6%98%AF%E5%B7%A5%E5%85%B7%E8%BF%98%E6%98%AF%E5%B9%B6%E5%8F%91%E4%BC%9A%E8%AF%9D) —— 本节的分诊与修复细则\n- [自动提交脚本要先确认当前分支](/wiki/agent-session/as-concept-%E8%87%AA%E5%8A%A8%E6%8F%90%E4%BA%A4%E8%84%9A%E6%9C%AC%E8%A6%81%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BD%93%E5%89%8D%E5%88%86%E6%94%AF) —— 协作工具的自动 commit 要有分支护栏\n- 什么该进git什么该ignore —— 协作数据入库 / 运行时状态 ignore 的切分\n- worktree是独立目录产物与配置都隔离 —— 隔离的代价：产物与配置都不共享"
  ]
},
{
  "id": "as-topic-开发流程要按任务大小分级",
  "updatedAt": "2026-07-15",
  "wikiSlug": "agent-session",
  "term": "开发流程要按任务大小分级",
  "oneLiner": "**核心判断：现在的问题不是「该不该认真」，而是把「大功能的重流程」套到了「小功能」上 —— 小功能因此很慢（每次都要测试，浪费时间还烧 token）；而真正该强制的（深色模式、原型对齐、状态边界）反而只写在文档里，没变成每次改动都过的硬门槛。**",
  "body": [
    "## 用户体感（本条来源）\n\n- 做小功能很慢，感觉每次做一个功能都要测试。\n- 有些错误本可避免却发生了，比如深色模式没适配。\n- 已经做了高保真原型，只是接入前后端却浪费大量时间。",
    "## 两条待验证的方向\n\n1. **分级**：按任务大小决定验证强度，而不是所有事都走同一种重流程（小改动不写设计文档、不强制全量测试；共享数据层 / API / 安全边界 / 同步逻辑才必须测）。\n2. **原型当合同**：UI 改动固定成「先看原型 → 截目标图 → 实现 → 同 viewport 对比」的流程，慢的不是看原型，是没把原型当合同导致返工。见 [UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F)。",
    "## 附：验证强度还随「阶段」分级\n\n同一件事，验收前和合并前的验证要求不一样（来源：2026-07-12 关于「验收前是否要 superpowers + 全仓库 lint」的判断）：\n\n- **验收前**：流程技能（brainstorming、spec/plan、TDD、systematic-debugging、verification、code review、worktree）该用 —— 评审确实能抓出真问题（如解析器死循环、错误降级）。\n- **验收前不需要**：全仓库 lint。只对**改动所在 package** 跑 lint + build + 测试即可，覆盖其他未改动 package 价值很低。\n- **合并/生产前才需要**：`pnpm verify`（全仓库 lint + 测试 + 主题 + 完整构建）。\n- **未到阶段不做的**：`finishing-development-branch`、`babysit-pr`、`web-deploy`（还没验收、没建 PR）。\n\n> 分级维度有两个：**任务大小**（改哪一层）+ **所处阶段**（验收前 / 合并前）。两者共同决定验证强度。",
    "## 附：代码级验证通过 ≠ 可以合并（部署级验证）\n\n来源：2026-07-14 关于「是否需要测试后再合并」的判断。\n\n当改动涉及**部署形态变化**（新增常驻进程、Docker/Compose、环境变量校验、启动方式）时，\n测试通过只能支撑「可以提 PR」，不足以支撑「可以合并 main」。\n\n- **代码级验证**（已完成即可提 PR）：相关包的测试、lint、build、配置解析\n- **部署级验证**（合并前必须补）：在目标机器从分支构建镜像 → 日志出现就绪标志 →\n  真实创建一个任务确认被消费 → 确认结果写回 → 停掉容器再启动，确认任务能继续处理\n\n推荐顺序：`推分支 → 建 PR → CI 通过 → 服务器用该分支测试部署 → 验收通过 → 合并 main → 切 main 重建`。\n\n两个配套纪律：\n\n1. 服务器测试要用 **staging 的数据库/Redis**；若直连当前环境，先停掉本地同类进程，\n   否则无法判断任务究竟由本地还是服务器处理（见 [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90)）。\n2. 追踪器里的 issue 在服务器验收通过前保持 `In Progress`，不因为「代码写完了」就 `Done`\n   （见 Issue完成由用户验收后再关闭）。",
    "## 附：验收前的硬检查项（交付遗漏复盘）\n\n来源：2026-07-15 两处交付遗漏。共同点是**检查项没被写成「启动前必过」，于是默认它已经成立**。\n\n1. **「代码用新字段」不等于「验收环境已同步 schema」**：只验证了代码、测试、Prisma Client 生成，没有把「当前验收所连接的开发数据库已执行 schema 同步」列为启动前硬检查 → 代码先用了新字段，库还停在旧结构。\n2. **超时只加在最里面那一层**：给外部 RSS 抓取加了 15 秒限制，却漏掉「浏览器到 `/api/feeds`」整段请求 → 数据库异常发生在抓取之后时，前端没有第二道保险，一直转圈。**超时要覆盖整条请求链路，不只是最内层的远端调用。**\n\n> 可迁移的规则：**验证清单要按「数据 / 配置 / 网络」三类，而不是按「我改了哪些代码」列。**\n\n另一条流程纪律：用户说「开始完成」后，不应停在检查点把未完成的版本交出去等整体验收。\n**暂停点不是免责理由** —— 交付不完整的部分要么继续做完，要么明确标出「哪些验收项尚未完成」，不能等对方发现。",
    "## 相关\n\n- [UI原型保真](/wiki/agent-session/as-topic-UI%E5%8E%9F%E5%9E%8B%E4%BF%9D%E7%9C%9F)\n- [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) —— 超时口径的另一面\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) —— 规则要能落成「每次都要过」的检查，否则等于没写\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2)\n- [测试策略](/wiki/agent-session/as-topic-%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5) —— 同属「流程/规则要落成可执行的硬门槛」：那条讲测试由四层共同决定\n- [先恢复可信基线再谈重构](/wiki/agent-session/as-product-%E5%85%88%E6%81%A2%E5%A4%8D%E5%8F%AF%E4%BF%A1%E5%9F%BA%E7%BA%BF%E5%86%8D%E8%B0%88%E9%87%8D%E6%9E%84)"
  ]
},
{
  "id": "as-topic-执行力的复盘",
  "updatedAt": "2026-09-26",
  "wikiSlug": "agent-session",
  "term": "执行力的复盘",
  "oneLiner": "执行力的复盘",
  "body": [
    "## # 执行力的复盘",
    "## 结论\n\n> 你缺的不是野心，是**把野心切成今天能交出的产出**。\n> 并且：拖延不是意志力问题，是**环境问题**。\n> 补充：逃避的对象有时不是任务，是**任务背后的压力**——那时降门槛也无效。",
    "## 一、野心是水不是火\n\n一位博主的表述（外部输入，你认同并追问怎么落地）：\n\n> 如火的野心叫欲望，如水的野心才叫野心。\n> 如果无法把兴奋、躁动的臆想压下来，转化成每一天的行动，\n> 说明不是野心太大，而是野心不够大。\n\n你当时的状态：火烧起来就上头，火下去就躺平。认同认知，但不知道怎么转成持续行动。",
    "## 二、核心区分：结果锚点 vs 产出锚点\n\n| | 结果锚点 | 产出锚点 |\n|---|---|---|\n| 脑子里想 | \"我要 10 万粉丝\" | \"我今天要发一条\" |\n| 做完关注 | 播放、点赞、爆没爆 | 我做出来了没有 |\n| 没达预期 | 泄气、怀疑、不想做了 | 无所谓，明天继续 |\n\n> **结果是你控制不了的，产出是今天能交出来的。**\n\n捷径的问题在于**跳过过程直接找结果**。脑子里装结果时，捷径就是唯一抓手；\n装产出时，主路径自然清晰。\n\n**自检问句**：\n> \"我现在是在做今天该做的产出，还是在绕开它？\"",
    "## 三、拖延是环境问题，不是懒\n\n宿舍 = **休息信号发射器**。床、手机、舒适温度、无外部压力，\n大脑每秒钟都在接收\"可以放松\"的信号。\n\n在宿舍逼自己做事，等于在火锅店里逼自己减肥——\n**不是你不行，是你在跟整个环境对抗**。\n\n**所以第一步不是\"克服懒惰\"，是挪屁股：**\n- 去图书馆/自习室/咖啡厅，任何\"别人在做事\"的地方\n- 不需要意志力，只需要把门槛降到最低：**先只定\"到那儿坐下，坐 10 分钟\"**\n- 坐下之后，环境会接管",
    "## 四、紧张是好信号，别等它消失\n\n> \"立刻马上做正事时还是会紧张、怯于做事\"\n\n紧张的 90% 来自**\"正事\"这个词太模糊**。大脑对模糊任务会恐惧。\n所以把模糊词换成**极其具体、物理上能完成的动作**：\n\n- ❌ \"我要开始做正事\"\n- ✅ \"打开那个文件\"\n- ✅ \"把标题写上去\"\n- ✅ \"写第一句话，哪怕写得烂\"\n\n**只做这一个动作。做完就算赢。**\n\n> 关键认知：**别等紧张消失再开始。紧张只会在开始之后消退，不会在开始之前。**",
    "## 五、遇到难题想逃避\n\n你原话：*\"完了一遇到难题还是想逃避怎么办，就像每一道数学大题那样，完全思考不进去\"*\n\n未完成。**这是「待探索」钩子**——目前有框架（环境/产出锚点/具体动作），\n但缺\"面对具体难题时的切入法\"。",
    "## 六、逃避的对象可能不是任务，是压力\n\n一位同学秋招期的样本（用户转述并追问怎么帮）：他知道\"先做一个垃圾出来\"\"初学者心态\"\"有瑕疵也没关系\"，\n也真的做了准备动作，但反复畏难——**花 2 小时研究自己完美主义的根因，也不愿碰那件积压的大事**；\n文章、资源、app 都找好了，还是不动手。连\"只打开文档看五分钟\"这种最低门槛也撑不住。\n\n三个判断：\n\n1. **逃避的对象不只是任务，还有任务背后的压力。** 他本人的反馈：逃避的不只是任务，还有面临的压力（秋招、迷茫、\"只有最后这点机会\"）。\n2. **压力是个自我强化的环**：知道不该躺平 → 压力更大 → 更想逃 → 短视频/游戏短刺激给宽慰 → 夜里带着负罪感入睡 → 次日带着愧疚更想逃。\n   **靠\"再加一把自责\"解不开这个环**，自责本身就是环的一部分。\n3. **准备工作可以是逃避的伪装**：研究根因、收集资源、挑工具，共同点是**都不产生可交付的产出**。\n   这就是 [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) 里说的\"结果锚点\"——忙着理解问题，却没做今天的产出。\n\n**对第四节框架的边界**：\"把模糊词换成具体动作\"能治的是**任务模糊**引起的紧张；\n当逃避的对象是**压力**时，门槛已经降到\"打开文档\"仍然会逃——降门槛不解决问题。\n\n> 给问题贴标签（\"他是不是完美主义\"）不换来任何行动。讨论到后来，这个标签本身已经不重要了。",
    "## 待探索\n- 难题逃避的具体解法（和\"具体动作降门槛\"不同，难题本身没有降门槛空间）\n- **压力型逃避的解法**：门槛已降到最低仍逃时怎么办（第六节留下的口子）\n- 那条\"总结上述方法论给我吧\"——方法论有了，缺的是**坚持机制**",
    "## 相关\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) — 产出锚点 vs 结果锚点，本质也是「造对照」；第六节的\"准备工作\"也是结果锚点的一种\n- [用户访谈与需求挖掘](/wiki/agent-session/as-topic-%E7%94%A8%E6%88%B7%E8%AE%BF%E8%B0%88%E4%B8%8E%E9%9C%80%E6%B1%82%E6%8C%96%E6%8E%98) — 用户是通过追问对方\"到底在逃避什么\"才拿到\"是压力\"这个答案的\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是该骨架的一处实例"
  ]
},
{
  "id": "as-topic-数据指标的解读",
  "updatedAt": "2026-09-20",
  "wikiSlug": "agent-session",
  "term": "数据指标的解读",
  "oneLiner": "数据指标的解读",
  "body": [
    "## # 数据指标的解读",
    "## 结论\n\n> 看数据先看**分子分母的口径**。\"整体\"和\"净\"差的是退款/取消，ROI 差的是分母。",
    "## 一、整体 vs 净成\n\n| | 口径 |\n|---|---|\n| 整体成交 | 所有成交订单，含后续可能退的 |\n| 净成交 | 扣掉退款/取消后的真实成交 |\n\n**判断真实盈利能力必须看净的**。整体数据好看可能是因为退货还没发生。",
    "## 二、ROI 的通俗解释\n\n```\n支付 ROI = 成交金额 / 投流消耗\n净成交 ROI = 净成交金额 / 投流消耗\n```\n\n- **ROI > 1**：投 1 元回来超过 1 元\n- **ROI < 1**：在亏钱买量\n- 看 ROI 要**成对看**：整体 ROI 和净 ROI 的**差值**就是风险敞口\n- 差值大 → 退款率高，需要查产品或履约",
    "## 三、实际案例读数（投流看板）\n\n| 指标 | 数值 | 环比 | 读数 |\n|---|---|---|---|\n| 消耗 | ¥4,378.77 | ▼3.51% | 投入端在收缩 |\n| 成交订单 | 30 单 | ▲50% | 单量在涨 |\n| 成交金额 | ¥7,706 | ▲72.39% | |\n| 客单价 | ¥146.83 | ▼35.29% | **⚠️ 单笔变小** |\n| 整体 ROI | 1.75 | ▲76.77% | |\n| 净成交 ROI | 1.69 | ▲77.89% | 与整体差 0.06，风险可控 |\n\n**核心信号：少花钱、多办事、效率提升**，但客单价大幅下滑 ——\n要查是低价品占比上升，还是优惠策略变了。",
    "## 四、为什么必须看自然流量/内容/用户画像\n\n你原来只看了投流数据。补上这三块才能回答：\n\n- **自然流量**：区分\"产品自己长\"和\"买来的量\"，付费占比过高不健康\n- **内容数据**：解释为什么转化变了（内容质量影响转化率）\n- **用户画像**：客单价下滑到底是人群结构变了，还是同一群人买便宜了\n\n> 只看投流指标 = 只看漏斗最后一段，做不了归因。",
    "## 五、为什么数据不可替代（四条理由）\n\n> 提出任何产品主张前先问：**这个效果能否被量化、用什么指标量化？无法量化的主张，说服力等于零。**\n\n| 理由 | 说明 |\n|---|---|\n| 量化产品价值 | 价值主张不能被量化，就无法评估好坏、无法争取资源 |\n| 避免经验局限 | 没有关键指标只能凭感觉，受个人经验局限，难以持续做对决策 |\n| 统一团队认知 | 核心指标用来表述产品现状，所有人都能明确理解 |\n| 支撑决策与复盘 | 数据贯穿分析、洞察、决策，是产品动作的导航 |\n\n核心命题：**数据不会被观点打败，数据只能被数据打败。** 别人拿数据得出的结论跟你的直觉对不上时，你也必须拿数据反驳。",
    "## 六、LTV 的算法链路\n\n```\n先算留存数值 → 每阶段付费率、付费金额 → 用户总价值 = 留存用户 × 付费率 × 付费金额\n```\n\n**留存只是中间量。** 把留存率乘上每阶段的付费率与付费金额，才得到一个能用于决策的金额口径 —— 这也是「指标必须接到价值上」的具体形态（见 [北极星指标要量价值闭环](/wiki/agent-session/as-concept-%E5%8C%97%E6%9E%81%E6%98%9F%E6%8C%87%E6%A0%87%E8%A6%81%E9%87%8F%E4%BB%B7%E5%80%BC%E9%97%AD%E7%8E%AF)）。",
    "## 待探索\n- 每次只看当天数据，缺**趋势视角**：环比/同周期对比该怎么建",
    "## 相关\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC)\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)"
  ]
},
{
  "id": "as-topic-文档附件解析管线",
  "updatedAt": "2026-08-03",
  "wikiSlug": "agent-session",
  "term": "文档附件解析管线",
  "oneLiner": "**结论**：文档附件管线的成败由四件事决定 —— ① 分块按文档结构切而不是按字符切；② 表格这类计算任务交给执行器、模型只负责解释结果；③ 全局任务要遍历全部块，不能只取检索排名靠前的几块；④ 附件块独立绑定 Session 并自带 TTL，不挂在既有的整篇向量上。",
  "body": [
    "## 分块：按结构切，不是按字符切\n\n流程是 `上传 → 提取结构 → 生成带位置的块 → 当前问题检索相关块 → 送入模型`，**不是每隔若干字符切一刀**。\n\n- Word / Markdown / TXT：优先按标题、段落、列表、表格切分；超长章节再拆成约 `800–1200 tokens` 的块。\n- PDF：保留页码和页面内段落，扫描件先 OCR；引用时能定位到「文件名 · 第 12 页」。\n- 表格：按工作表处理，每块都带工作表名、表头和连续数据行；表头在每块重复，同时保留行号、列名、公式文本和计算值。\n- 图片：不做文本分块，生成 OCR 文本 + 视觉描述，作为独立图片 context。\n- 跨块只保留少量重叠，防止一句话被切断，不大面积复制内容。\n\n要点是**块要自带定位信息**（页码/表头/行号），否则引用时无法回指原文。",
    "## 表格：工具算，模型解释\n\n只做「分块 + 检索」无法可靠完成求和、筛选、排序、找异常、生成图表。表格附件应同时进入**隔离的表格执行器**，由工具计算，模型负责解释结果 —— 不要让模型心算整张表。",
    "## 全局任务：遍历全部块\n\n按问题检索只适用于「问具体问题」。但「总结整份文件」「比较全部工作表」这类全局任务要**遍历所有块**：先分块总结，再汇总最终结论。只取搜索排名靠前的几块会漏掉内容。",
    "## 生命周期：块绑定 Session + TTL\n\n可以复用已有的 embedding 能力，但**附件块必须独立绑定 Session**，并按 7 天 TTL 清理。既有向量是按整篇笔记/剪藏建立的，不具备附件级的文件对象、解析状态、过期时间和 chunk 模型 —— 不能把文件硬塞进旧的 attachment 结构。",
    "## 格式分流：能本地做的不要花钱上 OCR\n\n不是所有格式都值得走 OCR 服务，按「本地解析够不够」分流：\n\n- PDF、DOCX、JPEG、PNG、WebP → 外部 OCR（需要结构、页码、坐标）\n- TXT、Markdown → **本地解析**，没必要付 OCR 费用\n- XLSX、CSV → **本地表格解析**，保留 sheet、行列、公式与计算值\n- 旧版 `.doc` / `.xls` → 先隔离转换再解析\n- HEIC / HEIF → 先转 JPEG/PNG\n\n选型判据是**依赖与部署复杂度最低**：OCR 服务只负责提取，不承担 Session 存储与 TTL；首批因此不必引入重型自建解析容器。",
    "## 相关\n\n- [内置能力只覆盖它声明的那一段](/wiki/agent-session/as-concept-%E5%86%85%E7%BD%AE%E8%83%BD%E5%8A%9B%E5%8F%AA%E8%A6%86%E7%9B%96%E5%AE%83%E5%A3%B0%E6%98%8E%E7%9A%84%E9%82%A3%E4%B8%80%E6%AE%B5) —— 复用框架已有的图片入口，别重造协议\n- 知识库先编译再查而不是查询时拼原文\n- 混合检索先用RRF融合\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)\n- 上下文按信任等级分层\n- 按实际规模选型而不是按方案先进性"
  ]
},
{
  "id": "as-topic-本地优先知识产品的架构演进",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "本地优先知识产品的架构演进",
  "oneLiner": "本地优先知识产品的架构演进",
  "body": [
    "## # 本地优先知识产品的架构演进",
    "## 结论\n\n> 从本地单机 App 走向多端成熟产品，关键不是「要不要服务器」，而是把边界划成\n> **云端加工厂 + 本地主仓库**；并且从第一天就把 AI 执行层抽成可替换的接口，\n> 产品形态改在前端，数据模型改在后端。\n>\n> 两条配套边界：`apps` 是「可独立运行或发布的产品单元」，不都是服务器进程；\n> **文档里写的目标架构 ≠ 当前运行事实**（判断现状要看有没有部署配置）。",
    "## 一、Agent 先变成可执行入口，再动数据模型\n\n原状态：侧边栏四个功能入口（订阅 / 笔记 / 剪藏 / 沉淀），AIPanel 已有对话，\n但工具只能**读**（读笔记、读剪藏、搜索），不能创建和整理。\n\n演进顺序：\n\n| 阶段 | 内容 | 是否动数据模型 |\n|---|---|---|\n| P0 | 把 `createNote` / `saveClip` / `addSubscription` 暴露给 AI tools，让对话能创建笔记、存剪藏、加订阅、搜索后整理成新笔记 | 否（改 AIPanel 与 tools 的接线） |\n| P1 | 侧边栏信息架构改成 `Agent` / `Inbox` / `知识库` / `订阅` | 否（前端结构） |\n| P2 | 剪藏、RSS 新文章、临时笔记统一进 Inbox | **先不做**底层合并 |\n| P3 | RSS 每篇总结 | 是（给 `feed_entries` 加字段） |\n\n两个关键取舍：\n\n- **Inbox 第一版做「虚拟 Inbox」**：前端把 clips / feed entries / 未整理 notes 混合展示，\n  每个 item 标来源类型；点「整理到知识库」时生成或更新一条 note。\n  统一字段（`inbox_status`、`output_note_id`、`ai_tags`、`processed_at`）等跑通后再补。\n  理由是直接合成一张大表会牵动 Rust、迁移、搜索、列表、阅读器，成本远大于收益。\n- **RSS 总结不要一刷新就全量跑**：慢、贵、失败难处理。先做「打开文章时可生成」，\n  并给每个 AI 任务留状态字段（`summary_status` / `summarized_at`）。\n\n判据：**用户能体验到的能力先上线，迁移成本后置**；能让前端解决的就不要先动表结构。",
    "## 二、Agent 是侧边栏主入口，不是独立窗口\n\n用户问「是否要单独一个 agent 窗口」，收敛结论是**不要**。\n\n- 独立 Agent 窗口很容易变成「又一个 ChatGPT 窗口」，和知识库本体割裂，\n  用户会困惑：我到底是在用知识库，还是在和一个机器人聊天。\n- 正确形态是**贴着用户正在看的内容**工作：\n  - 侧边栏 `Agent` = 工作台 / 起点（主区域首页 + 大输入框 + 当前可执行动作 + 最近的 Inbox / 待处理）\n  - 右侧 AI Panel = 当前内容的上下文助手（看文章时总结/整理/解释名词，写笔记时润色/扩写/找关联）\n- 整体结构：左侧选工作区，中间放知识内容与任务，右侧浮层是上下文 AI，**Agent 作为第一入口而不是独立 app**。\n\n判据同族：**新增一个独立入口，必须回答「去掉它用户会损失什么能力」**（见 [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3)）。",
    "## 三、AI 调用要抽成可替换的执行层\n\n**什么时候才真的需要独立 AI server** —— 不是「AI 更耗性能」，而是这些需求出现时：\n\n1. 用户关闭 App 后仍要自动刷新 RSS、自动总结、发日报\n2. 不想让用户自己填 API key，由你统一提供 AI 能力\n3. 邮件推送、通知推送、定时日报\n4. 多设备同步\n5. 统一的成本控制、限流、缓存、失败重试\n6. 更复杂的 Agent 任务队列（每天处理大量订阅源）\n7. 账号体系、会员、用量统计\n\n**当前该怎么做**：本地跑 AI，但按「未来可替换为 server」的方式写 ——\n\n```text\nai/summarizeFeedEntry()\nai/generateNote()\nai/classifyContent()\n```\n\n现在内部调本地 API，将来只把实现换成 `call('/api/ai/summarize-feed-entry')`，\nUI 和业务流程不用大改。要点：**不要把 OpenAI 调用散落在 React 组件里**，\nprompt 与 JSON schema 独立成模块，总结结果落 SQLite 并给每个 AI 任务留状态字段。\n\n分层边界：\n\n| 层 | 职责 |\n|---|---|\n| UI 组件 | 展示、按钮、状态 |\n| 业务服务层 | `summarizeEntry` / `createNoteFromEntry` / `addSubscription` |\n| Tauri/Rust | SQLite、RSS fetch、本地文件、系统能力 |\n| AI Client | 模型调用、prompt、JSON schema、错误处理 |",
    "## 四、云端加工厂 + 本地主仓库\n\n用户提出的方案：**本地把订阅源列表给云端 → 云端抓 RSS → 云端 AI 总结 → 结果回本地 → 本地保存**。\n\n这比「纯本地抓 RSS」更适合多端：\n\n- 移动端后台任务限制多，本地 App 不一定能稳定定时抓；云端不受设备限制\n- 多端体验一致，不会出现某台设备有新文章、另一台没有\n- AI pipeline 更自然：云端抓到就总结，客户端只拿「标题 + 正文/摘要 + 总结 + 标签 + 名词解释」\n- 日报天然适合云端生成\n\n**代价是隐私边界改变**：云端至少会接触用户订阅了哪些源、文章标题/链接、正文或摘要、总结结果。\n产品定义要跟着改成：\n\n> 本地保存知识库主数据，云端负责订阅抓取和 AI 加工，可短期缓存处理结果。\n\n要配的产品承诺：云端只存订阅任务与近期处理结果、本地才是长期知识库、用户可清除云端缓存、\n可选「本地抓取 / 云端抓取」。云端的角色是**待同步结果池**，不是永久知识库。\n\n**结果怎么回本地**：\n\n| 方式 | 特点 |\n|---|---|\n| 本地主动拉取（App 打开时问「有没有新处理好的」→ 下载 → 写入 → 回执） | 第一版选它：最简单稳定；代价是不打开 App 本地就没有最新数据 |\n| 云端推送（push / websocket） | 体验更好但复杂，Mac/Win/iOS/Android 推送体系各不相同 |",
    "## 五、多端共享的是服务，不是 UI\n\n目标若是 Mac / Windows / iOS / Android / iPad 的成熟产品，架构必须改：\n**数据不能只存在某一台电脑，RSS 也不能依赖用户打开某个设备才刷新。**\n\n```text\n客户端（只负责展示、编辑、缓存）\n  → 统一服务器\n  → 账号 / 数据同步 / RSS 抓取 / AI 总结 / 日报 / 知识库数据\n```\n\n- 4G 内存服务器够第一版（只要不在服务器跑本地大模型）；真正的成本是 AI API 费用、并发与数据库设计\n- 客户端选型：Mac/Windows 继续 Tauri，Web 保留一套，移动端可评估 Tauri mobile，但更稳的路线通常是 RN/Expo\n- 原 Tauri 代码不废：本地 SQLite 从「唯一数据库」降级为「缓存」，RSS 抓取迁服务器，前端 AI 调用改成请求自己的服务器\n\n判据：**不要追求「一份 UI 跑所有端」，要追求「一套后端数据和 AI 能力，多端共用同一套服务」。**",
    "## 六、云端版先做骨架，Agent 面板先留位\n\n从本地 Tauri App 迈向云端产品时，第一步不是「把 Agent 接上」，而是**先把云端骨架搭出来**：\n\n- 新开独立云端项目（如 `mewmo-cloud`），不要塞进本地 Tauri App —— 它是新云端产品，不是「本地知识库 2.0」\n- 技术选型偏云端能力：Next.js + TypeScript + Tailwind，后续 Postgres、cron/队列\n- 首页只表达三件事：这是什么产品、它能做什么、怎么开始；主按钮进静态 demo dashboard\n- 右侧 Agent 面板**先留空占位**（「将在这里读取当前页面上下文并对话」），不接模型、不接数据库、不接登录\n\n理由：用户此时还不熟 Web Agent 的交互与技术架构，先验证「云端 mewmo 应该长什么样」的页面结构是否成立。Agent 后续分三层接：前端聊天 UI → 网站后端 API（读云端数据再调模型）→ Agent 工具层（`search_notes` / `read_note` / `write_note` / `list_clips`）。编排层选择见 Agent编排层薄自建优先于重型框架。\n\n完整蓝图（Web / Mac / iOS / iPad / 扩展 / Agent / Admin / 同步 / 支付）要保留全量，但按阶段落地：见 [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98)、[数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A)。",
    "## 七、侧边栏是「当前内容的 AI 面板」，拆成总结与 agent 两个 tab\n\n用户提出的结构（替代「侧边栏就是 chat」）：\n\n```text\nArticle Intelligence\n├─ Summary tab：后台 worker 产出的、已落库的 AI 结果（摘要 / 要点 / 标签 / 相关内容）\n└─ Agent tab：围绕当前文章继续交互的会话\n```\n\n关键判断：\n\n- **总结不是聊天记录，是文章的结构化 AI 元数据**：打开任何一篇文章都应立刻读到已经算好的结果。\n- **两个 tab 不等于两个 agent**：总结是后台 worker 产物，agent 是前台交互能力；共享同一套 AI 能力，但**生命周期不同**。\n- 链路：`后台：文章入库 → 自动总结 / 打标签 → 存 DB`；`前台：打开文章 → Summary 直读 DB → Agent 基于 Summary 继续行动`。\n- 首版范围收敛：总结 tab 只对 `clip` / `feed_entry` 生效，不含 notes。\n\n判据：**「已算好的结果」和「继续交互」是两种不同生命周期的东西，要在 UI 上分开，而不是塞进同一条聊天流。**",
    "## 八、手机看电脑 Agent：bridge-owned app-server 是唯一真源\n\n目标从「手机发起自己的 Codex turn」收敛到「手机实时同步电脑端 Codex」。判断：官方 remote-control 会被「第三方 key 不能用」卡住，所以另起独立 app-server 是对的；**但独立 app-server 要能实时同步，前提是它成为唯一真源**：\n\n```\n电脑端输入/界面 ─┐\n                ├─→ 同一个 owned app-server ─→ 事件广播给所有客户端\n手机端输入/界面 ─┘\n```\n\n路线：bridge 启动长期存活的 `codex app-server`（daemon 级）；所有线程以 app-server 的 `threadId` 为主键；**电脑端入口也改走 bridge**（本地 Web UI / menubar companion / CLI wrapper）；bridge 统一发 `turn/start` 并监听 notification 广播给所有客户端。\n\n硬边界：**若电脑端仍用官方 Desktop 且不连这个 owned app-server，就看不到它的实时流。** 这一步（电脑端入口改走 bridge）是整套方案里最关键、也最容易漏的一环。\n\n另一个反模式是「懒加载」：点进会话才 `read_session_history`、只在「手机发起的 turn」才推 `stream_chunk`，会让电脑端独立生成时手机既不更新窗口也不触发通知——这与「实时镜像」目标直接冲突。",
    "## 九、apps 是「可独立运行或发布的产品单元」，不是「服务器进程」\n\n判据：**app 能独立启动 / 部署 / 持续运行；package 是被别人调用的共享能力，本身不能启动。**\n\nAI 能力放在 `packages/ai` 而不是 `apps/ai`，是有意分层：\n\n```text\napps/web ──────┐\n               ├── packages/ai ──→ OpenAI / Anthropic / 自定义模型\napps/worker ───┘\n```\n\n`packages/ai` 只负责选 provider、拼请求、加载 prompt、清洗输入、解析返回，\n暴露 `summarizeContent()` / `generateAgentReply()`；它没有端口、没有页面、没有常驻进程。\n即时对话由 Web 调用（用户要立刻拿到回复），异步摘要由 Worker 调用（可排队可重试）。\n\n只有出现这些需求时才值得拆出独立 `apps/ai-service`：AI 请求量大需要独立扩容、自部署模型/GPU、\nWeb 与 Apple 与扩展之外还有多个系统要统一调用、需要集中限流/审计/计费/模型路由、AI 服务改用 Python。\n现在拆只会多一次网络请求、一套服务鉴权、一份部署费用和一个故障点。\n\n同理，`apps` 里也有跑在用户设备上的：`apps/apple`、`apps/extension` 不是服务器进程。",
    "## 十、代管平台与自有服务器的边界\n\nVercel（请求驱动）、Railway（常驻进程）、Neon（托管 Postgres）、Upstash（托管 Redis）\n本质都是**替你提供服务器**，只是把机器管理隐藏起来。\n\n判据：**需要 24 小时常驻的进程不能用 serverless 平台替代。**\nWeb 的 Node runtime 里那个 scheduler 只能算兜底 —— 它不是队列消费者、\n不能消费剪藏抓取与 AI 摘要队列，Vercel 的实例也不是可靠的 24 小时进程；\n生产环境缺常驻 Worker 时，任务会进 Redis 但没人消费，表现为「已保存但一直抓取中」。\n\n自有服务器可以完全替代 Railway：同一台机器上分别跑 `worker` 与 `agent` 两个容器，\n**不需要公开域名**，只要能主动访问 Neon / Upstash / Vercel / AI API。\n代价是自己承担进程守护、崩溃重启、安全更新与防火墙、日志监控与磁盘、部署与回滚、密钥管理 —— \nRailway 卖的不是特殊技术，就是这些运维工作。\n\n部署上的一条硬经验：**构建镜像与运行容器要分离。**\nmonorepo 构建（`pnpm install` + 生成 Prisma Client）瞬时吃 CPU/内存/磁盘，\n在 4GB 无 swap、还跑着别的项目的服务器上本机构建，是整条部署链路里风险最高的一步。\n因此：GitHub Actions 构建镜像 → 推 GHCR → 服务器只拉取运行；\n好处是构建失败不影响线上、环境一致、按 commit 回滚、服务器不留构建缓存。",
    "## 十一、AI 能力要分两类：产品 + AI 与 Agent\n\n两类需求的架构归属不同：\n\n- **产品 + AI**：确定性、短时、单步能力（文章总结、标题生成、自动打标）→ 仍由 Web API / Worker 调用 `packages/ai`，本质是产品能力。\n- **AI Agent**：目标导向、可调工具、多步执行、可暂停确认、失败恢复 → 独立部署的 `agent-server`，前端只负责发起任务、展示过程和处理确认。\n\n`packages/ai` 不必删，但降级为「模型适配 + 通用 AI 原语」；**Agent 的编排、状态与工具不能再放进 packages**。运行状态真相源留在自己的 PostgreSQL（runs / steps / approvals / events），可观测平台只做 trace 与成本分析（见 [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90)）。\n\n架构决定里最影响后续的一个问题是：首版 Agent 是否支持**跨分钟甚至跨小时暂停后恢复**。若已经独立建 `agent-server`，最好一开始就把持久化运行状态设计正确。",
    "## 十二、Cron 是同一个 app 的第二个入口，不是新 app\n\nRSS 定时更新没新增 `apps/cron`，而是在 `apps/worker` 里加第二个启动入口（`cron:feeds`，跑完即退出），部署上复用同一个镜像：常驻容器只消费 AI 队列，`feed-cron` 服务每分钟启动一次。\n\n判据：**两者共享数据库连接、抓取逻辑、AI package、环境变量、Dockerfile 与部署流程 —— 新建 app 只会重复 package、环境配置、Dockerfile 和部署流程。** 但要在命名上区分清楚：「每分钟启动一次、做完就退出」与「24 小时常驻监听队列」是两种运行形态，即使放在同一个 app 里也不该混为一个概念。",
    "## 相关\n\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) —— 常驻 Worker 消费什么、用什么队列\n- [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D) —— 三个层级的区分\n- 终端画面同步Agent状态不稳定 —— tmux 这条替代路线\n- Agent编排层薄自建优先于重型框架 —— 编排层怎么选\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98) —— 全量架构与分阶段交付\n- [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3) —— 独立入口的判据\n- 一次循环只做一个可体验的v1能力 —— 范围与优先级\n- 修复范围分保守彻底与最小闭环 —— 虚拟 Inbox 是「最小闭环」档\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 同族：先造对照，再谈价值\n- Agent读语义文件App读结构化存储"
  ]
},
{
  "id": "as-topic-本机资源占用排查",
  "updatedAt": "2026-10-11",
  "wikiSlug": "agent-session",
  "term": "本机资源占用排查",
  "oneLiner": "**本机「卡 / 烫 / 占空间」的排查判据是同一条：先分层，再按「丢了能不能重建、会不会影响数据与登录态」决定动不动它。** 三张账单（磁盘、内存、CPU）各自有几层，混着看必然误判。",
  "body": [
    "## 一、磁盘占用：先分层，判据是「能否从别处重建」\n\n- 项目占空间先查构建缓存与旧worktree —— monorepo 的十几 G 通常是构建缓存 + 旧 worktree + 构建产物，不是源码；先删会自动重建的缓存（`.turbo/cache`），正在跑的 `.next` 先别动。别漏系统级的 Xcode `DerivedData` / Device Support / 模拟器数据。\n- [清理客户端缓存先分清哪层可丢](/wiki/agent-session/as-concept-%E6%B8%85%E7%90%86%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98%E5%85%88%E5%88%86%E6%B8%85%E5%93%AA%E5%B1%82%E5%8F%AF%E4%B8%A2) —— 「浏览器缓存占了 22G」是三层混在一起：可丢弃的加速层、共享的内容寻址仓库（pnpm store，整删即坏）、悄悄下载的模型权重。判据是**丢了会不会影响数据与登录态**，不是「是不是缓存」。",
    "## 二、内存占用：先分清运行时基础成本与页面成本\n\n- Electron自带浏览器运行时是内存大头 —— 内存高不是页面写得差，是先付了一整套 Chromium + V8 + 渲染树的**运行时基础成本**。判断「内存是不是异常」要减掉这一层。",
    "## 三、CPU / 温度：先排除最平凡的解释\n\n- [本机卡顿先清残留开发进程](/wiki/agent-session/as-concept-%E6%9C%AC%E6%9C%BA%E5%8D%A1%E9%A1%BF%E5%85%88%E6%B8%85%E6%AE%8B%E7%95%99%E5%BC%80%E5%8F%91%E8%BF%9B%E7%A8%8B) —— 开发时「越来越卡」常见根因是环境被残留进程拖爆（多端口 dev server、遗留 build、旧 `.next-*` 缓存），不是当前代码死循环。\n- [高负载发烫先排除负载而非硬件](/wiki/agent-session/as-concept-%E9%AB%98%E8%B4%9F%E8%BD%BD%E5%8F%91%E7%83%AB%E5%85%88%E6%8E%92%E9%99%A4%E8%B4%9F%E8%BD%BD%E8%80%8C%E9%9D%9E%E7%A1%AC%E4%BB%B6) —— 无风扇机型「莫名发烫」的第一假设是**持续负载**，不是硬件故障；先记录功耗基线、退出高功耗进程，再看 3–5 分钟内是否迅速降温。",
    "## 贯穿的判据\n\n1. **先分层，再动手** —— 同族见 [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B)：症状所在的层 ≠ 问题所在的层。\n2. **动作本身要留证据** —— 先记基线（功耗/温度/磁盘占用），做完再看一次，才有对照（[对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)）。\n3. **区分「可重建」与「不可重建」** —— 缓存与派生数据可以删；数据库、源码、登录态不能（[可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80)）。\n4. **区分「快照」与「现状」** —— 系统「储存空间」里的「开发者工具」是一个归类的快照，不是某个软件（[快照只在建立那一刻成立](/wiki/agent-session/as-synthesis-%E5%BF%AB%E7%85%A7%E5%8F%AA%E5%9C%A8%E5%BB%BA%E7%AB%8B%E9%82%A3%E4%B8%80%E5%88%BB%E6%88%90%E7%AB%8B)）。",
    "## 相关\n\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) / [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) / [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80)"
  ]
},
{
  "id": "as-topic-测试策略",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "测试策略",
  "oneLiner": "**核心判断：测试不是「凭 agent.md」或「凭 skill」单一决定的，而是四层共同决定 —— `agent.md` 定标准、skill 约束方法、package scripts 执行、tests + CI 判定；问题的根源正是这四层没对齐（规则说 API 测试需要本地服务，`pnpm test` 和 CI 却把它当普通单元测试直接跑）。**",
  "body": [
    "## 一、测试由四层共同决定\n\n1. **`agent.md` —— 定「什么情况下验证什么」**\n   项目级测试政策：发布前必须 lint/test/build；UI 改动要验深色/浅色；API 改动要验认证与用户数据权限。回答「标准是什么、为什么要测」。\n\n2. **skill —— 约束「如何严谨地测」**\n   TDD（行为改动先建失败测试再实现）、systematic-debugging（失败先找根因，不直接改断言碰运气）、verification-before-completion（没有新鲜测试证据不算完成）。\n\n3. **项目脚本 —— 「实际执行哪些测试」**\n   `pnpm lint` / `pnpm test` / `pnpm build`，机器实际入口。文档里写「运行测试」，最终必须落到这些可执行命令。\n\n4. **测试文件与 CI —— 「判定条件与远端环境」**\n   `tests/**/*.test.*` 是断言；GitHub Actions 决定远端启动什么服务、注入什么变量。**Vercel 生产构建 ≠ GitHub CI ≠ API 集成测试**。\n\n关系链：`agent.md 定标准 → skill 约束方法 → scripts 执行 → tests 判定 → CI 在远端复现`。\n\n> **坑：标准写了但执行入口没对齐，规则就等于没生效。** `agent.md` 已说明 API 集成测试依赖本地服务，脚本/CI 却把它当普通单元测试直接执行。",
    "## 二、断言要检查行为，不是实现\n\n失败的三条断言都在检查「代码长什么样」，而不是「用户行为是否正确」：\n\n- 要求脚本名「完全相等」→ 新增合法脚本也会失败\n- 匹配旧 CSS 固定值（`8px`），实现已改为共享变量 `--frame`\n- 要求旧的 `createdAt` 排序文本，实现已改为按发布时间排序\n\n**断言失败不能直接改测试**，先判断归因：\n\n- 需求没变、实现错了 → 改实现\n- 需求变了 → 才更新断言",
    "## 三、竞态用例要用状态确认制造并发，不能用固定 sleep\n\n「剪藏并发刷新锁」用例失败得到 `[200, 200]`，预期 `[200, 409]`。用例只是发第一个请求后**固定等 50ms** 再发第二个，没有确认第一个请求已经把数据库状态改成 `fetching`。开发服务器冷编译、鉴权或数据库较慢时，第二个请求进入锁判断前第一次刷新可能已经结束 —— 此时返回两个 200 是合理的。\n\n**正确做法：先轮询数据库确认状态已变为 `fetching`，再发第二个请求。** 若这样仍得到两个 200，才能证明锁实现有问题。\n\n> 判据：**「等待固定时长」是用时间代理「前置条件已成立」**，是典型的代理量（见 [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86)）。\n\n另外注意失败计数口径：这不是两个独立 Bug，而是同一个子测试失败 + 外层测试组随之失败被统计了两次。报「2 个用例失败」时先看是不是同一根因被重复计数（见 [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC)）。",
    "## 四、死锁用例：要按真实时序编排，而不是让测试自己去抢锁\n\n「logout 用例挂住」的现象：测试启动 logout 后 await `/logout` 请求，但 logout 内部先等 FIFO 队列里的 `credentialStore.clear()`，而该 clear 排在**被测试阻塞住的** `refresh` 的 replace 之后 —— 测试不 release，replace 不结束；replace 不结束，clear 不执行；clear 不执行，logout 的 HTTP 请求永不发出。互等。\n\n**修法（只改测试编排，不动生产代码）**：按队列真实推进顺序显式同步 ——\n\n1. 启动 logout；\n2. `await controller.waitUntilCredentialOperationsQueued(atLeast: 4)` —— 先确认本地清理**已进入队列**；\n3. 再 `await store.releaseReplace()` —— 释放被阻塞的写；\n4. 最后 `await logout.value` 与 `refresh.value`。\n\n**禁止在 `releaseReplace` 之前等待 logout 的 HTTP request** —— 那正是死锁点。\n\n> 判据：**「等待某个信号」必须发生在该信号真的可能发生之后。** 与本节第三条同源：用固定 sleep 或错误顺序等待，都是拿时序代理前置条件；死锁是这种错误的最极端形态（不只是等不到，而是互相等）。",
    "## 五、三层测试各自回答什么\n\n- **API 集成测试**：「后端接口和数据库逻辑会不会回归？」—— 把真实后端、数据库、缓存启动起来，像客户端一样发 HTTP 请求，验证认证、权限、数据写入、响应字段和错误分支。\n- **Preview（部署后验收）**：「部署后的完整应用能不能给人验收？」\n- **单元测试**：「某个函数或模块自己的逻辑对不对？」\n\n因此**临时数据库不是产品 Preview 数据库的替代品**，而是测试运行时使用的隔离试验场。集成测试的自动化编排通常是：起临时服务 → 建表 → 起真实服务 → 注册唯一测试账号 → 打各 API → 校验 → 删账号并关服务。\n\n> 坑：测试写好了但**没进 CI** —— 等于只在手动跑的时候才存在。",
    "## 六、集成阶段：把模块串起来跑，不是重造功能\n\n**集成不是再开发一套新功能，而是把已经各自通过测试的模块真正串起来跑一遍 —— 证明「零件都合格」之后「整台机器也能工作」。**\n\n完整链路（以 Agent 面板为例）：浏览器面板 → Web BFF（鉴权与转发）→ Agent Server → Runtime/模型 → Tool/Skill/写操作确认 → 数据库持久化 → SSE 流式返回 → 前端 Transcript → 观测平台。集成要在这条**真实链路**上验证：\n\n- 把各模块代码合入正式 `main`，从 `main` 启动同一套服务（Web / Agent / 数据库 / 观测），而不是各模块自己那套环境；\n- 用真实账号跑完整场景：普通对话、Tool 成功与失败、写操作确认与取消、刷新后恢复、多会话切换、重试与幂等、Usage/Trace/错误记录是否正确；\n- 做 **fault injection（故障注入）**：模型不可用、Agent 进程重启、SSE 断线、重复 `clientRequestId`、观测平台不可用 —— 确认故障不会造成重复写入、串会话、空消息或敏感信息泄漏；\n- 记录最终 commit、镜像、migration、环境配置与**回滚步骤**。\n\n两个判据：\n\n1. **模块级测试通过 ≠ 整台机器能工作** —— 集成专门暴露「只有连接起来才会出现」的问题（单模块测试里两个模块都绿，连起来仍可能不一致）。\n2. **集成 ≠ 已知还有一堆功能 Bug** —— 它是最后的总装、压力测试和发布验收，不是补做功能。\n\n> 与「部署级验证」的分工：本节讲**验证什么**（真实链路 + 故障注入 + 回滚记录），[开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7) 讲**什么时候做**（代码级验证过了只够提 PR；部署形态变了才必须做部署级验证）。",
    "## 相关\n\n- [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7) —— 验证强度该按任务大小分级，而不是所有事走同一种重流程\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 「检查代码长什么样」是用代理量（实现形状）代替真值（用户行为）\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 标准只写在文档里、没落到执行入口，约束等于不存在\n- 通过只证明它实际驱动的路径 —— 本页「六、集成阶段」是该 synthesis 的第二处证据：模块级通过只驱动了各自那条路"
  ]
},
{
  "id": "as-topic-用户访谈与需求挖掘",
  "updatedAt": "2026-09-20",
  "wikiSlug": "agent-session",
  "term": "用户访谈与需求挖掘",
  "oneLiner": "用户访谈与需求挖掘",
  "body": [
    "## # 用户访谈与需求挖掘",
    "## 结论\n\n> 开场只有一个目标：**让他觉得舒服，不像在采访。**",
    "## 一、核心问题：对方不一定是做 AI 产品的，怎么问？\n\n你的原话：*\"他不一定是做 AI 产品，不知道是做什么方向的产品，然后细分的问题可以怎么询问\"*\n\n**解法：别先准备问题清单，先让对话自己带出方向。**",
    "## 二、邀约阶段 —— 决定他去不去\n\n> 师兄好～我是 XX。最近在做 AI 方向的产品，想找机会跟你请教下**做产品的真实状态**。\n> 不用太正式，喝杯咖啡或线上聊半小时都行，看你方便。\n\n**措辞要点**：\n- \"**做产品的真实状态**\" > \"请教经验\" —— 后者压力大、像要讲课；前者像聊天\n- 给低承诺（半小时/线上），降低答应成本",
    "## 三、第一句 —— 先给料，再提问\n\n> 先说个我自己的困惑吧：我做 AI 产品，最卡的是\"效果好不好\"没有统一标准，\n> 上线前经常拍脑袋决定够不够格。你们平时也会被这种\"说不清好坏\"的事卡住吗？\n\n**为什么有效**：\n1. 你先暴露真问题 → 他不用\"准备答案\"，直接进入对话\n2. 你的困惑具体且带场景 → 他知道该从哪儿接话\n3. 他用回答自己的方式**自然带出他的产品和日常**",
    "## 四、方法提炼\n\n不要问：*\"你们是怎么做需求的？\"*（封闭、像考卷）\n要问：*\"你有没有被那种说不清好坏的事卡住过？\"*（具体场景 + 开放）\n\n> **用一个具体的困境，换一个真实的故事。**",
    "## 待探索\n- 访谈中段怎么追深（第一句已解决开场，缺中段追问框架）",
    "## 相关\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)"
  ]
},
{
  "id": "as-topic-竞品拆解框架",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "竞品拆解框架",
  "oneLiner": "竞品拆解框架",
  "body": [
    "## # 竞品拆解框架",
    "## 结论\n\n> 拆一个产品按五个角度走：**用户在哪 → 痛点需求 → 场景 → 商业价值 → 如何评测**。\n> 只列功能 = 只拆了表层；缺了「用户在哪」和「商业价值」，拆解就退化成产品说明书。",
    "## 五个角度\n\n| 角度 | 要回答的问题 | 缺了会怎样 |\n|---|---|---|\n| **用户在哪** | 谁是核心人群、从哪来、靠什么渠道触达 | 不知道产品在为谁服务，后面所有判断都无处落 |\n| **痛点需求** | 每个痛点对应一句用户原话式需求 | 把功能当需求，读不出真实动机 |\n| **场景** | 具体到「谁在什么时候用它做什么」 | 只知道能力，不知道它什么时候被真正需要 |\n| **商业价值** | 规模、成本结构、定价、壁垒、短板 | 看不出这门生意是否成立，也看不出机会在哪 |\n| **如何评测** | 用哪些方法能验证上面每一条 | 拆解停在描述，无法验证也无法迁移 |",
    "## 各角度的落点\n\n### 痛点需求：把痛点翻译成需求\n不要停在「用户记不住」，要写成用户会说的话（「开会手忙脚乱敲键盘」→ 要的是实时转写 + 自动润色）。\n需求句越像原话，后面的场景与评测越容易写。\n\n### 商业价值：重点看成本结构与付费动机\n- **成本结构**：单位用量成本是否随用量上升而吃掉毛利（重成本场景尤其要看）。\n- **定价**：免费版是否已经够用 —— 够用则付费动机弱。\n- **壁垒**：体验、硬件生态、内容飞轮各自能挡住什么。\n- **短板**：短板往往就是别人的机会，也是自己要避开的坑。\n\n### 如何评测：拆解必须落到可验证\n分两层：\n- **功能评测**：每个核心能力设计一个能证伪的测试（难样本、边界样本），看的是保真度与失败方式。\n- **体验评测**：从零上手到产出第一个可用结果要走多少步。",
    "## 适用对象\n\n本次用于**知识库与笔记类 AI 工具**的横向拆解（第一个是 Get 笔记），但这套角度对任何产品都成立。",
    "## 相关\n\n- [用户访谈与需求挖掘](/wiki/agent-session/as-topic-%E7%94%A8%E6%88%B7%E8%AE%BF%E8%B0%88%E4%B8%8E%E9%9C%80%E6%B1%82%E6%8C%96%E6%8E%98) —— 「用户在哪 / 痛点需求」的取证手段\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) —— 「商业价值」里差异化的表达方式\n- [差异要用使用模式说而不是功能清单](/wiki/agent-session/as-synthesis-%E5%B7%AE%E5%BC%82%E8%A6%81%E7%94%A8%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%BC%8F%E8%AF%B4%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8A%9F%E8%83%BD%E6%B8%85%E5%8D%95) —— 本条是该 synthesis 的第三处证据：只列功能 = 只拆了表层\n- [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB) —— 「商业价值 / 如何评测」里可量化的部分\n- [学领域先看一流成品而非方法论](/wiki/agent-session/as-concept-%E5%AD%A6%E9%A2%86%E5%9F%9F%E5%85%88%E7%9C%8B%E4%B8%80%E6%B5%81%E6%88%90%E5%93%81%E8%80%8C%E9%9D%9E%E6%96%B9%E6%B3%95%E8%AE%BA) —— 「如何评测」之前，先用一流成品建立「好是什么样」的判据"
  ]
},
{
  "id": "as-topic-简历模板的三层渲染协议与迁移",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "简历模板的三层渲染协议与迁移",
  "oneLiner": "**prototype 不能直接粘进模板文件。模板要按 data / layout / render 三层落地；section 只按内容形态分「block | list」两类，不按 experience / education / projects 逐模块枚举；迁移先补齐通用协议，只迁一个模板当样板；双栏结构不要交给 DB 的 layout 配置。**",
  "body": [
    "## **06-11 定稿的边界：renderer / protocol 只管结构稳定性（slot 渲染、icon 尺寸、空值隐藏、flex 不撑爆），视觉（加粗 / 字号 / 颜色 / 间距）归模板 CSS；CSS 的内容语义命名也必须统一为协议 class，模板自定义只留布局外壳。**",
    "## 一、三层的职责边界\n\n| 层 | 职责 | 禁区 |\n|---|---|---|\n| data | 只提供**语义** | 不写视觉 |\n| layout（模板 html/css） | 只描述「这个模板怎么排」 | 不在模板里查简历数据 |\n| render（SlotRenderer） | 把 HTML 变成 React | 不靠模块名枚举分发 |\n\nprototype 的结构可以迁进 layout，但必须换成 slot（`<slot data-bind=\"basics.name\">`、`<slot data-bind=\"section.items\" data-template=\"item-tpl\">`）。\n\n需要补的能力放在 render 层：例如让 `<slot data-bind=\"section.icon\">` 直接渲染图标，而不是允许在 HTML 里塞一堆 inline SVG；图标继续来自 `section-meta.ts`。",
    "## 二、section 只分两种内容形态（关键抽象）\n\n不要一上来就按 `experience / education / projects / skills` 每个都定制 —— 那会把 render 协议变成「模块枚举」，长期很重。通用抽象是**内容形态**：\n\n| 形态 | 内容 | HTML 需要 |\n|---|---|---|\n| **block** | 只有一段：个人总结、技能、荣誉奖项、自定义富文本 | `section.title` + `section.body` |\n| **list** | 多个条目：工作 / 项目 / 教育 / 社团 / 实习 / 科研经历 | `section.title` + `section.items`（`item-tpl`） |\n\nrender 层只需要识别：\n\n```ts\nsection.kind = \"block\" | \"list\"\n```\n\n而不是识别一长串模块名。同一形态在不同模块下复用同一套模板，`荣誉奖项` 这类看数据结构决定归 block 还是 list。",
    "## 三、迁移策略：先补协议，再用一个模板做样板\n\n1. **补 render 层通用协议**：`profile.*`、`profile.contacts` 循环（`contact.icon / contact.label`）、`sectionOrder`、`section.kind / icon / body / items`、`item.title / subtitle / meta / dateRange / bullets`\n2. **只迁 classic**：把确认过的 prototype 迁进 `templates/html/classic.html` + `classic.css`，里面必须用 slot，不写死 demo 数据\n3. **验证 classic**：走 `[render] source: unified id: classic`，视觉接近旧 React，图标与各类 section 结构正常\n4. **classic 稳了再迁其它**：用同一套协议迁 professional / modern\n\n不要同时碰三个模板。一句话：**先把 render 的通用协议补齐，再用 classic 做第一个迁移样板。**",
    "## 四、影响面收窄（排版混乱的来源）\n\n本地 HTML fallback 若扫所有内置模板（professional / classic / modern），不该迁的模板也会走 unified —— 这才是排版混乱的根因，不是简历数据坏了：\n\n- `classic`：有 `templates/html/classic.html/css` → `source: uploaded` → 经 `toSerializable()` 变成 `source: unified`\n- `professional / modern`：继续 `source: builtin`，走旧 React Layout\n\n典型症状是「section 标题的灰条/蓝标签尺寸、间距、行高没重新校准」和「双栏内容全挤在左列、右侧空白」——都是**模板 CSS / 版心列宽协议没和新 SlotRenderer 接好**。",
    "## 五、双栏布局与 DB 定档\n\n- 双栏**不要依赖 DB 的 `layout.sidebar.sections`** 来拆 `sidebarSections / mainSections`。两栏结构由模板 HTML/CSS 自己定义：sidebar 放 `profile.*`，main 里跑 `sectionOrder`。`layout` 保留为兼容旧 v1 uploaded 模板的字段，不再扩展。\n- **DB schema 可以定档**：`customHtml / customCss / layout` 已经够表达 unified render。`profile.*`、`section.kind`、`section.body`、`section.items` 都是 render 层从 `ResumeContent` 派生出来的协议，不需要新增字段。\n- 若上线前要统一，只是「把本地 HTML/CSS 写回 DB 的 `customHtml / customCss`」的**数据 seed / 同步**，不是 schema migration。",
    "## 六、渲染缺字段怎么排查\n\n要求是**逐字段对照**：把「表单 / schema 里有什么」与「SlotRenderer 实际消费了什么」一条条比，产出缺失清单；**先定位 bug，不要立刻改**。\n\n排查时同时拿表现正常的模板做对照（「为什么专业这一个模板又是正常的」）——同一字段在不同模板下表现不同，说明差异在模板结构而非数据本身。",
    "## 七、表单字段 → slot 契约（逐字段清单）\n\n排查「表单里有、预览里没有」时，先照这张表对，再看模板 HTML 有没有写对应 slot。**表单字段没丢，丢的是模板没用这个 slot。**\n\n**基础信息 `basics.*`（别名 `profile.*`）**\n\n```text\nname → 姓名        status → 求职状态   title → 求职方向\nemail / phone / location / website / summary / photo\n```\n\n### 为什么会有两套名字（`basics` 与 `profile`）\n\n两者不是两份数据，读的是同一份 `ResumeContent.basics`：\n\n```text\nbasics.*  = 表单 / 数据库真实字段名（也是 render 允许直接读的名字）\nprofile.* = 模板 slot 协议层的语义别名（「个人头部信息」视角）\n```\n\n冗余来自演进：先有表单结构 `basics`，模板层后来为写 `profile.contacts` 这种语义化循环又加了 `profile.*`。`basics` 恰好两层同名，所以看起来像同一层。\n\n结论：**render 继续兼容两套，但 skill 只教一套**。\n\n### 对外协议的最终划分：`basic.* + profile.contacts`\n\n命名按语义分组（用户定义）：\n\n```text\nbasic.*   姓名 / 求职岗位 / 求职状态     ← 头部身份，可固定样式\nprofile.contacts → contact.icon / label / href   ← 带 icon 的联系方式\n```\n\n- `basics.*`（含 `basics.icon.*`）对外不再暴露，属于 deprecated；`profile.name/title/status/summary` 也不是新标准。\n- 底层存储字段可以仍是 `content.basics`，但那是**内部适配层**，不能因此说「协议里还留着 `basics`」。\n- 判定标准是「对外协议有没有别名」，不是「代码里还有没有旧名字」。\n\n### 一个名字被复用到多层，是混乱的真源\n\n`basics` 同时表示：表单数据组、编辑器固定模块、`sectionOrder` 里的正文 section、completeness 的基础信息桶、模板旧 binding 命名空间。这些**不是同一层概念却共用一个名字** —— 排查时容易把「协议冗余」误判成「两个 render」。\n\n### 抽象不因局部清理而退化\n\n清 basic / profile 只是**头部区的数据分组**，正文仍必须走统一的 `sectionOrder / section.body / section.items / item.*`。**不允许为了让基础信息好改，把正文格式特殊化成一堆专用字段。**\n\n### 文档分层：DB schema 不靠文档镜像\n\n`docs/schema-v2/` 混了三层东西，需要分开对待：\n\n| 文件 | 实际是什么 |\n|---|---|\n| `resume-table.json` / `templates-table.json` | 偏 DB schema |\n| `resume-content.json` | `resume.content` 这个 jsonb 的**内容协议**，不是 DB schema |\n| `template-slot-fields.*` / `html-slot-protocol.json` | 模板 slot / HTML 写法协议 |\n| `style-settings.json` | `content.styleSettings` 的排版协议 |\n\nDB schema 的真源是 `db/schema.ts` + Drizzle migration，**不要再起一份文档镜像它**；内容协议与模板协议则必须随架构更新（旧文档里 `profile.name/title/status`、兼容 `basics.*` 的中间态内容与「无兼容」目标冲突）。\n\n### 更新顺序：先对齐上游 skill，再叠加本地协议\n\n模板 skill 的真源在上游仓库（比本地新一点），schema 协议的真源在本地（改造最新）。所以做法是**拉上游 skill 作基线，再在其上应用本地协议改造**，而不是整体选一边 —— 详见 [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90)。\n\n### `required` 是模板覆盖，不是用户必填\n\n「必含字段」要说清指谁：`content_required`（用户表单必填，当前基本没有）≠ `template_coverage_required`（模板 HTML 必须预留的 slot）。用户没填 → 渲染为空是正常的；模板没写 slot → 用户填了也永远不显示。\n\n### `profile` 与 `contact` 的显示语义分工\n\n- `profile` 管「这个人是谁」：头像、姓名、目标岗位、求职状态、自我介绍。\n- `contact` 管「怎么联系这个人」：电话、邮箱、所在地、个人主页。它不是表单字段，是 render 从 profile 派生出的列表。\n- 两者位置常挨在一起（都在简历头部），所以看着重叠。`location` 是唯一真正的重叠点 —— 既可当 profile 的所在地，也可当 contact 的地址项；**这是产品决定**，两边都允许就会持续有重叠感。\n\n### slot / data-bind / render 三种说法不要混\n\n```text\nslot      = 模板 HTML 里的占位符语法（<slot data-bind=\"...\">）\nslot 协议 = data-bind 允许写哪些名字（profile.name / item.title ...）\nrender    = 按 data-bind 去 ResumeContent 取值的引擎\n```\n\n所以「`basics` 和 `profile` 并存」是**协议命名冗余**，不是 slot 机制的问题，也不是两个 render。\n\n**列表条目：`item.*` 由不同模块的字段共同供给**\n\n| 模块 | title | subtitle | location | dateRange | 其他 |\n|---|---|---|---|---|---|\n| 工作 `experience[]` | company | title | location | start/end | content → `item.bullets`；**无 meta / link** |\n| 教育 `education[]` | school | degree+major+gpa | location | start/end | highlights → `item.bullets`；**无 meta / link** |\n| 项目 `projects[]` | name | role | location | start/end | stack → `item.meta`（join ` · `）与 `item.tags`；link → `item.link`；content → `item.bullets` |\n| 研究 `research[]` | name | role | **无此字段** | start/end | link → `item.link`；content → `item.bullets`；**无 location / meta** |\n\n**块内容不走 `item.*`**：技能 `skills → section.body`；自定义模块 `custom[].title → section.title`、`custom[].content → section.body`。\n\n### 同一语义字段可能有多个入口（静默不显示的来源）\n\n「城市」有两条独立渲染路径，漏掉任一条，对应模板就永远不显示城市，而且**不报错**：\n\n1. **个人信息头部**：模板写联系方式循环 `profile.contacts`，城市需要由代码把 `basics.location` 派进 contacts 列表（原本只放了 phone / email / website）。\n2. **条目内**：模板必须自己写 `<slot data-bind=\"item.location\">`，CSS 不能凭空渲染字段。\n\n所以「有的模板正常、有的不显示」时，差异在**模板结构**，不在数据。\n\n### 缺字段怎么补：改模板，不要代码兜底\n\n曾经加过「条目有城市但模板没写 location slot 就自动补 ` · 城市`」的兜底，随后撤掉了。理由：协议缺字段应在模板 HTML/CSS 层补齐（含位置、字号、颜色、间距），代码兜底会与已写 slot 的模板重复，且把「模板缺什么」这个信息掩盖掉。",
    "## 八、schema / protocol / renderer 三层区分（06-11 定稿）\n\n排查「协议」问题时先分清说的是哪一层，否则会把「命名冗余」误判成「机制坏了」：\n\n```text\nschema   = 模板能写什么（词汇表 / 类型定义：slot 名、字段名、数据结构、允许的 HTML/CSS 约束）\nprotocol = 运行时语义 / 行为契约（这些 slot 被怎么解释、保证什么）\nrenderer = protocol 的执行器\n```\n\n- `schema` 回答：模板作者可以声明哪些槽位、数据从哪来、哪些写法合法。\n- `protocol` 回答：`contact.icon` 一定渲染成 lucide icon 且按正文比例、`item.link` 为空不占位、`section.items` 循环自动加 `data-pagination-item`、`sectionOrder` 循环按 list/block 选模板、模板 CSS 被 scope 到 `data-template-id`。\n- 本项目的典型 bug 正是「schema 里规定了 `contact.icon`，protocol 没保证它的尺寸」—— 于是每个模板 CSS 自己写一份，漏一个模板就炸（如 `modern` 的 `.modern-contact-item` 被换成通用 `.contact-item` 后图标巨大化）。修法是把运行时默认行为放进 renderer 的 protocol base CSS，而不是改 schema。",
    "## 九、render 与模板 CSS 的职责边界（用户定稿）\n\n**renderer / protocol 只管「结构稳定性」；视觉表现归模板 CSS。** 用户明确纠正过两次方向：\n\n1. **视觉属性不上收 renderer。** 加粗（`font-weight`）、字号、颜色、间距细节属于「这个模板里这个角色长什么样」，不该进 renderer 默认。曾把 `.item-title { font-weight: 700 }` 加进 renderer，被要求撤掉。renderer 的职责是 slot 渲染、icon 尺寸兜底、空字段隐藏、flex 不撑爆这类「基础可用行为」。\n2. **CSS 的内容语义命名也必须统一，自定义只留布局。** 用户原话：**「css 的自定义只有排版布局啊」**。正确形态是内容语义一律绑协议 class：\n\n   ```html\n   <span class=\"item-title\"><slot data-bind=\"item.title\"></slot></span>\n   ```\n   ```css\n   .item-title { font-weight: 700; }                                /* 视觉可改，selector 仍绑协议 class */\n   [data-template-id=\"abbey-blue\"] .item-title { font-size: 13px; } /* 特异性靠作用域，不靠私有命名 */\n   ```\n\n   不应该再出现 `.pro-item-title / .entry-title / .modern-item-primary / .classic-body` 这类**每个模板一套的内容角色命名**。模板自定义 class 只用于真正的布局外壳（`.modern-layout`、`.abbey-blue-banner`、`.pro-page`）。\n\n**边界一句话**：`render/protocol` 管「这个东西是什么角色，以及基础可用行为」；`template CSS` 管「这个模板里这个角色长什么样」。\n\n> 注意区分两种「不通用」：`item.title / item.dateRange` 这类 **slot binding 是通用协议**，而 HTML class / CSS selector 曾经**不通用**（`abbey-blue` 用 `.abbey-blue-entry-header .entry-title`、`professional` 用 `.pro-item-title`）。「能兼容」只是现状描述，不是理想架构 —— 兼容机制让 renderer 只看 slot、外层叫什么都能填值，所以看起来没事，但每改一次结构就要扫所有模板 CSS。",
    "## 十、迁移与兜底的两个机制细节\n\n- **HTML 与 CSS selector 必须成对迁移。** 只改 DB HTML（`.pro-item-title` → `.item-title`）而 CSS 还写旧 selector，视觉必丢；同时改 DB CSS，浏览器只看最终 DOM 与 CSS 是否匹配，所以线上旧 renderer 完全不知道新协议也不影响视觉。这正是「DB 改了、线上 render 没改、视觉却不受影响」的原因，也说明这次 DB 迁移本身是自洽的。\n- **renderer protocol CSS 是兜底基础行为，不是模板样式生效的唯一来源。** DB 模板 CSS 负责「这个模板的视觉不要断」，renderer protocol CSS 负责「所有模板都该有的最低行为」（空值隐藏、日期不换行、链接换行、icon 尺寸、正文行高），避免每个模板复制一份。\n- **模板默认样式（`defaultStyleSettings`）在创建 / 切换模板时写进简历内容，不在 render 阶段自动合并**；渲染器对内容里的 `styleSettings` 生效。所以「默认样式不生效」要分「没写进内容」还是「渲染器没消费」两条链路查。",
    "## 相关\n\n- 样式丢失先核对类名再怀疑缓存与权限 —— HTML class 与 CSS selector 对不上，就是本节「成对迁移」缺一半的典型\n- 一次循环只做一个可体验的v1能力 —— 单模板样板、验证通过再扩展的同一把尺\n- 面板多出的固定区块先查数据源再改前端 —— 同源判断：先看数据链路，再改渲染\n- [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) —— 同一项目的实例：`--heading-gap` 传进渲染器但模板 CSS 没消费\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— 「拿正常模板做对照」是本条的一处实例\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) —— 模板作者是 AI skill，所以协议要唯一写法 + coverage 校验\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) —— `prototypes/` 与旧文档让人误以为还有本地模板系统\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— skill 取自上游、协议取自本地\n- 兼容fallback会让内容重复渲染 —— `section.body` 与 `section.items` 双路径并存的代价\n- [可调与固定的边界按语义划分](/wiki/agent-session/as-concept-%E5%8F%AF%E8%B0%83%E4%B8%8E%E5%9B%BA%E5%AE%9A%E7%9A%84%E8%BE%B9%E7%95%8C%E6%8C%89%E8%AF%AD%E4%B9%89%E5%88%92%E5%88%86) —— 头部固定 / 正文可调的样式边界\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条是该骨架的一处实例：协议 class 与 selector 要成对迁移"
  ]
},
{
  "id": "as-synthesis-先定位归属层再动手",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "先定位归属层再动手",
  "oneLiner": "先定位归属层再动手",
  "body": [
    "## # 先定位归属层再动手",
    "## 结论\n\n> **症状看起来在哪一层，和问题实际在哪一层，是两件事。**\n> 排障的第一个动作不是改代码，而是**用最便宜的信号把归属层划出来** —— 划错层，\n> 后面所有努力（改前端、查网络、换 key）都是白费。",
    "## 五处证据：每一处都是「看起来是 X，其实是 Y」\n\n| 出处 | 看起来像 | 实际归属 | 分流信号 |\n|---|---|---|---|\n| [先分清平台错误还是应用错误](/wiki/agent-session/as-concept-%E5%85%88%E5%88%86%E6%B8%85%E5%B9%B3%E5%8F%B0%E9%94%99%E8%AF%AF%E8%BF%98%E6%98%AF%E5%BA%94%E7%94%A8%E9%94%99%E8%AF%AF) | 服务挂了 | 平台层函数超时 | 错误体**有没有 JSON** |\n| 零延迟零尝试说明请求没发出去 | 上游不可用 | 本地调度层前置拦截 | `latency=0` 且 `attempt=0` |\n| 面板多出的固定区块先查数据源再改前端 | 前端渲染写错 | 数据链路（转发到固定实例 + 对端信息混入） | 该区块**是否随参数变化** |\n| [跨源取数据要靠自建代理](/wiki/agent-session/as-concept-%E8%B7%A8%E6%BA%90%E5%8F%96%E6%95%B0%E6%8D%AE%E8%A6%81%E9%9D%A0%E8%87%AA%E5%BB%BA%E4%BB%A3%E7%90%86) | UI 做得不好 | 同源政策拦下了数据 | 接口**是否真的返回了数据** |\n| GitHub打不开先分清主站与静态资源域名 | 整站被墙 | 只有部分域名不通 | **按域名分层**逐个测 |",
    "## 综合判断\n\n1. **归属层的数量是有限的，且各有专属「指纹」。** 五处症状分布在平台层、本地调度层、\n   数据链路层、浏览器安全策略层、网络域名层 —— 但它们都能靠**一个几乎零成本的观测**\n   （响应体形态 / 计数字段 / 是否随参数变化 / 接口实际返回 / 分域名探测）先归位。\n\n2. **最贵的错误是「层错但方法对」。** 改前端去修数据源问题、查网络去修本地校验问题，\n   都不会报错，只会**安静地浪费时间**。所以「先分层」不是谨慎，是省钱。\n\n3. **可迁移的动作**：遇到\"某处不对\"，先问两句 ——\n   **「这个现象能区分出哪几种可能？」「哪一个观测最便宜就能排除其中一种？」**\n   找到那个观测，再决定动不动手。",
    "## 为什么这是 synthesis\n\n单看每一页，都是\"某次排障的一个技巧\"。并排之后才看得出它们共享**同一个方法论骨架**：\n先定位归属层 → 再在该层内找根因。这个骨架独立于任何一次具体故障，可以带走。",
    "## 相关\n\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— 同源：分层本质上也是「造对照」\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 同源：先确定\"这属于谁\"，再谈数值\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 同源：改对了逻辑，还要问「存量对象会不会再经过它」\n- 讲bug先讲现象再讲根因 —— 沟通侧的同一条原则\n- MCP连不上先分层定位配置令牌与代理 —— 本条是该骨架的一处实例（配置/令牌/代理三层）\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 本条定「哪一层」，那条定「哪一份」"
  ]
},
{
  "id": "as-synthesis-分层要落到运行时才有效",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "分层要落到运行时才有效",
  "oneLiner": "分层要落到运行时才有效",
  "body": [
    "## # 分层要落到运行时才有效",
    "## 结论\n\n> 你在「协议 / 分层」上踩的是同一个坑：**层分对了、文档写好了，但没有任何东西在执行它。**\n> 判定标准只有一条 —— **这一层有没有被运行时（代码 / 校验器 / 消费方）真正读取。**\n> 没被读取的分层等于不存在：它不报错，只是不生效。",
    "## 五处证据：每一处都是「分层存在，但没落地」\n\n| 出处 | 分好的层 | 落地缺在哪 | 后果 |\n|---|---|---|---|\n| [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) | 真源 / 机器可读契约 / 人类说明三层 | 校验器只查 required slot，不拦旧私有 class 与 renderer-owned 规则回填 | 导入模板继续污染数据库 |\n| [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) | skill 正文 → 上游；协议字段 → 本地 | 「还没同步的层」只在文档里列，没有同步校验 | 文档与运行时各说各话 |\n| 评测平台是平台层项目规则是适配层 | 平台（版本/数据集/trace/评分） vs 项目（fixtures/cases/runners/evaluators） | 只上传固定 `modelOutput` 就跑实验 | 验证了「解析与契约」，被当成「链路回归」 |\n| [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) | 中立逻辑 vs 某端格式要求 | 直接注册通用脚本、把格式写进通用件 | 通用件被绑死在单个工具上 |\n| [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) | data / layout / render；协议只管结构，视觉归模板 CSS | 协议 class 与 selector 不成对迁移 | 「DB 改了、线上 render 没改、视觉不变」 |",
    "## 综合判断\n\n1. **分层的价值全部押在「消费」上。** 契约被 validator 读、中立件被适配器包、结构规则被 render 执行 ——\n   才算一层；否则它只是文档里的一个说法。这也解释了为什么这些坑**全都静默**：\n   没被执行的约束不会报错，只会让人在错误的前提上继续做。\n\n2. **「层分对了」和「层生效了」是两件事，要用不同的动作验收。**\n   分层是设计动作（写文档、定职责），生效是运行时动作（加校验、加适配器、跑真链路）。\n   只做前者，得到的是**看起来很有秩序的、没有约束力的**体系。\n\n3. **可迁移的动作**：每次划完一层，追问一句 ——\n   **「谁会在运行时读它？如果没有，我凭什么相信它会被遵守？」**\n   答不出「谁读」，这一层就还没落地，别急着往下一层走。",
    "## 与既有 synthesis 的关系\n\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) 讲的是**怎么分层**（按寿命 / 复用性）；\n  本条讲的是**分层之后怎么才算数**（落到运行时）。两者是同一条链的前后两段：\n  分错层 → 过期物污染没过期物；分对层但没落地 → 约束形同虚设，同样静默。\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) 讲排障时**先判断归属层**；\n  本条是它的建设侧镜像：动手之前，先确认这一层有没有执行者。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次具体协作里的一个疏漏（校验器漏拦、文档没同步、实验覆盖不够、适配器没写、迁移不成对）。\n并排之后才看得出它们共享**同一个失败形状**：**分层做了、执行没做**。\n这个形状与项目无关，可以直接带走。",
    "## 相关\n\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82) —— 本条讲「分层怎么才算数」，那条讲「层与层之间怎么切界」\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 有人读了还不够，还要所有对象都经过它\n- [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) / [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) / 评测平台是平台层项目规则是适配层 / [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) / [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB)\n- 检索是一条分层链 —— 分层要落地的一种具体形态：检索链的每一层都要真的被实现"
  ]
},
{
  "id": "as-synthesis-判据要用真值而非代理",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "判据要用真值而非代理",
  "oneLiner": "判据要用真值而非代理",
  "body": [
    "## # 判据要用真值而非代理\n\n> 你反复踩的坑不是「判断写错了」，而是**判断用的那个量根本不是你要问的东西**。\n> 「第几次事件」「滚了多远」「动画转到第几帧」「这次会话缓存过没有」「多久没结束」「字符串变了没有」——\n> 它们都只是真值的**代理**，在边界条件下会和真值分叉，而且**不报错**。\n> 解法统一：**把判据换成真值本身**（内容是否变化、元素是否可见、真实进度、真实加载状态）。",
    "## 十处证据：每一处都是「用代理当判据」\n\n| 出处 | 代理（错的判据） | 真值（对的判据） | 分叉后的症状 |\n|---|---|---|---|\n| [首次内容事件不能无条件跳过](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%86%85%E5%AE%B9%E4%BA%8B%E4%BB%B6%E4%B8%8D%E8%83%BD%E6%97%A0%E6%9D%A1%E4%BB%B6%E8%B7%B3%E8%BF%87) | 事件序号（第 1 次就跳过） | 内容是否仍等于初始内容 | 空正文第一次粘贴图片被整个丢掉 → 保存不了 |\n| [显示阈值应按元素可见性而非固定像素](/wiki/agent-session/as-concept-%E6%98%BE%E7%A4%BA%E9%98%88%E5%80%BC%E5%BA%94%E6%8C%89%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81%E6%80%A7%E8%80%8C%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%83%8F%E7%B4%A0) | 固定滚动距离（`scrollTop > 18`） | 标题元素是否已滚出覆盖区 | 字号/行高不同 → 标题提前或延后出现 |\n| [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8) | 无限循环动画 / 帧间隔计时 | 真实加载状态或经过时间 | 条件永不成立 → 进度条卡在假进度上 |\n| 图片加载失败要可重试并升级到HTTPS | 「这场会话加载失败过」的缓存标记 | 本次请求的实际结果 | 一次失败被会话级永久记住 → 整场不再重试 |\n| [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87) | 命中率数字（0 就以为坏了） | 「是不是每次都是新会话首请求」 | 测量动作本身绕过了被测对象 → 误判实现有 bug |\n| [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81) | 固定的渲染规则 / 滞后的 selection | 真实光标位置 | 源码与渲染同时出现；「看起来正常」但输入落到错误位置 |\n| [编辑器初始化会触发假保存](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BC%9A%E8%A7%A6%E5%8F%91%E5%81%87%E4%BF%9D%E5%AD%98) | 字符串 diff（编辑器 round-trip 后变了） | 内容语义是否真的变化 / 是否是用户输入 | 打开即保存 → `updatedAt` 变新 → 列表跳位 |\n| [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) | 固定 `RUN_TIMEOUT_MS`（10 分钟） | `turn/completed` 等结构化事件 | 长任务被误杀；超时被当成「已停止」 |\n| 终端画面同步Agent状态不稳定 | 「终端画面几秒没变」 | app-server 的结构化事件 | turn 结束判断早或晚；输出夹杂 UI 文本 |\n| [两条写入路径要用内容判重](/wiki/agent-session/as-concept-%E4%B8%A4%E6%9D%A1%E5%86%99%E5%85%A5%E8%B7%AF%E5%BE%84%E8%A6%81%E7%94%A8%E5%86%85%E5%AE%B9%E5%88%A4%E9%87%8D) | `id`（本地 id / 镜像 id） | 内容 + 会话 + 时间窗 | 同一条消息被插两次 |\n| [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D)（懒加载反模式） | 「用户点进会话才拉」 | 会话是否真的有更新 | 电脑端在跑，手机端不更新也不通知 |",
    "## 综合判断\n\n1. **代理量在「典型输入」下与真值一致，只在边界处分叉。** 这正是它们难被发现的原因：\n   日常使用完全正常，只在「第一次」「刚好滚动到临界」「刚好那一次失败」时出错 ——\n   所以第一反应永远是「偶发」，而不是「判据错了」。\n\n2. **代理量往往比真值更「好拿」**，所以会被顺手用上：事件序号比内容比较便宜，\n   固定像素比测量元素位置便宜，循环动画比接真实进度便宜，字符串 diff 比语义比较便宜，\n   数秒画面静止比接结构化事件便宜。**省下的那点成本，全部以「静默错误」的形式还回来。**\n\n   顺带一个识别信号：**代理量几乎总是「单点」的**（一个 id、一个序号、一个数字、一个时间），\n   而真值往往需要**多点或结构化信息**（内容 + 会话 + 时间窗、内容前后对比、事件类型 + 状态）。\n   判据越依赖单点，越可能在边界处分叉。\n\n3. **可迁移的动作**：写下任何一个条件判断时，追问一句 ——\n   **「这个量和我真正要问的东西，在所有情况下都等价吗？」**\n   只要答案不是「是」，就换成真值：内容比较、元素可见性、真实状态、显式记录。\n   配套：真值若不可得，就**显式记录它**（对照 [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A)）。",
    "## 与既有 synthesis 的关系\n\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 讲**时序**上不能拿「最后发生的」冒充「最新的」；\n  本条更宽：讲**判据本身**不能拿代理量冒充真值。时序是「用环境状态当时间」的特例。\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— 代理量的问题正是「没造对照」：没拿真值对照，就看不出分叉。\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 同源：约束/判据不落到真实来源上，就等于不存在。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个功能的一个具体 bug（粘贴丢图、标题时机、进度条、图片重试、缓存命中、\n光标显示、打开即保存、长任务误杀、终端画面判结束、重复插入、懒加载不推送）。\n并排之后才看得出它们共享**同一个失败形状**：**用可得的代理量代替了要问的真值**。\n这个形状与框架、业务无关，可以直接带走。",
    "## 相关\n\n- [首次内容事件不能无条件跳过](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%86%85%E5%AE%B9%E4%BA%8B%E4%BB%B6%E4%B8%8D%E8%83%BD%E6%97%A0%E6%9D%A1%E4%BB%B6%E8%B7%B3%E8%BF%87) / [显示阈值应按元素可见性而非固定像素](/wiki/agent-session/as-concept-%E6%98%BE%E7%A4%BA%E9%98%88%E5%80%BC%E5%BA%94%E6%8C%89%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81%E6%80%A7%E8%80%8C%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%83%8F%E7%B4%A0) / [进度条要由真实进度驱动](/wiki/agent-session/as-concept-%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%A6%81%E7%94%B1%E7%9C%9F%E5%AE%9E%E8%BF%9B%E5%BA%A6%E9%A9%B1%E5%8A%A8)\n- 图片加载失败要可重试并升级到HTTPS / [缓存命中率](/wiki/agent-session/as-concept-%E7%BC%93%E5%AD%98%E5%91%BD%E4%B8%AD%E7%8E%87) / [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81)\n- [编辑器初始化会触发假保存](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BC%9A%E8%A7%A6%E5%8F%91%E5%81%87%E4%BF%9D%E5%AD%98) / [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) / 终端画面同步Agent状态不稳定\n- [两条写入路径要用内容判重](/wiki/agent-session/as-concept-%E4%B8%A4%E6%9D%A1%E5%86%99%E5%85%A5%E8%B7%AF%E5%BE%84%E8%A6%81%E7%94%A8%E5%86%85%E5%AE%B9%E5%88%A4%E9%87%8D) / [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D)\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A)\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 同源：文件/状态页/接口返回都是「现状」的代理\n- 检索是一条分层链 —— 迭代层的停止条件看覆盖度（真值），不看命中数量（代理）"
  ]
},
{
  "id": "as-synthesis-判断现状要看真正在跑的那一份",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "判断现状要看真正在跑的那一份",
  "oneLiner": "判断现状要看真正在跑的那一份",
  "body": [
    "## # 判断现状要看真正在跑的那一份",
    "## 结论\n\n> 你反复踩的是同一个坑：**你检查的那个东西，不是实际在运行的那个东西。**\n> 仓库里的文件、配置文件、部署状态页、接口返回、另一个目录里的产物 —— 它们都只是\n> **「应该是什么」的声明**，不是**「现在是什么」的事实**。\n> 判据一句话：**我看到的这一份，是此刻正在被执行的那一份吗？** 答不上来，就先别下结论。",
    "## 八处证据：每一处都是「查的不是在跑的那份」\n\n| 出处 | 你以为在看的 | 实际在跑的 | 症状 |\n|---|---|---|---|\n| [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9) | 刚构建出的新版本 | 安装目录里没更新的旧产物 | 新功能「没做」 |\n| [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE) | 「redeploy 成功」的状态 | 平台复用的旧部署清单（空 `startCommand`） | 新配置根本没生效 |\n| [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) | 仓库里的 `prototypes/`、旧文档 | 运行时实际走的 DB row | 反复误判架构 |\n| worktree是独立目录产物与配置都隔离 | 主目录改好的 `.env.local` | 另一个 worktree 目录的产物 | 改了环境变量不生效 |\n| [改版后旧路由仍指向旧实现](/wiki/agent-session/as-concept-%E6%94%B9%E7%89%88%E5%90%8E%E6%97%A7%E8%B7%AF%E7%94%B1%E4%BB%8D%E6%8C%87%E5%90%91%E6%97%A7%E5%AE%9E%E7%8E%B0) | 新布局组件 | 旧 route 仍 import 的旧组件 | 入口点进去还是旧界面 |\n| [接口验证通过不等于浏览器已登录](/wiki/agent-session/as-concept-%E6%8E%A5%E5%8F%A3%E9%AA%8C%E8%AF%81%E9%80%9A%E8%BF%87%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%B2%E7%99%BB%E5%BD%95) | API 返回 200（账号有效） | 浏览器实际持有的 session cookie | 接口通过但页面仍是未登录 |\n| 验收要按唯一标识选中实例 | 按名字激活/截图的那个实例 | Launch Services 按名字解析到的旧安装 | 验收看的是旧 UI |\n| [端口占用会把你连到别人的服务](/wiki/agent-session/as-concept-%E7%AB%AF%E5%8F%A3%E5%8D%A0%E7%94%A8%E4%BC%9A%E6%8A%8A%E4%BD%A0%E8%BF%9E%E5%88%B0%E5%88%AB%E4%BA%BA%E7%9A%84%E6%9C%8D%E5%8A%A1) | 自己刚起的 Agent（`3102`） | 另一个 worktree 的 Next Web 占着该端口 | 上传失败，且排查方向全被带偏 |",
    "## 综合判断\n\n1. **「声明」和「事实」之间隔着一个执行路径，这个路径可能指向别处。**\n   文件说配置改了、部署说成功了、接口说账号对了 —— 每一句都为真，但每一句都不是\n   「此刻正在跑的那一份」。要判断现状，必须把观测点放在**执行路径的末端**：产物版本号、\n   部署后实际生效的清单、运行时读的 DB、当前目录的服务进程、**该端口上实际监听的是谁**、\n   入口实际 import 的组件、浏览器真正持有的 cookie。\n\n2. **这类错误全部静默。** 旧产物不会报错，它只是「没有新功能」；旧路由不会报错，它只是\n   「长得不一样」；复用旧清单的部署不会报错，它只是「没生效」。所以症状永远是\n   「我明明改了 / 做了」，而没有任何一条错误信息指向「你看错了对象」。\n\n3. **可迁移的动作**：任何「改了却没效果 / 做了却没有」的场合，先问三句 ——\n   **「我看的是哪一份？」「它在哪条路径上被执行？」「这条路径和我改的那条是同一条吗？」**\n   三句都答得上，再去怀疑代码本身。",
    "## 与既有 synthesis 的关系\n\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 那条解决**「是哪一层」**；本条解决**「是哪一份」**。两者是排障的\n  前两个动作：先定层，再定实例。\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 那条讲**写判据**时不要用代理量；本条讲**核查现状**时不要用代理物\n  （文件、状态页、接口返回都是「现状」的代理）。同源：代理在典型情况下与真值一致，只在边界处静默分叉。\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 那条讲「对面没认账」；本条讲「你查的根本不是对面在跑的那份」。\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 那条讲新逻辑到不了旧对象；本条讲你观测不到真正的运行态。",
    "## 相关\n\n- [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)\n- [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)\n- [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE)\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90) —— 同类：本地脚本实际连的是生产资源，不是你以为的本地\n- 验收要按唯一标识选中实例 —— 第七处证据：按名字选中的不是刚构建的那一份"
  ]
},
{
  "id": "as-synthesis-口径先于数值",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "口径先于数值",
  "oneLiner": "口径先于数值",
  "body": [
    "## # 口径先于数值",
    "## 结论\n\n> 你在「钱」的两条战线上踩的是同一个坑：**不是数值算错，是口径与归属错配。**\n> 拿到任何数字，先问三件事：**分子是谁、分母是谁、时间窗是什么。**",
    "## 两处证据\n\n### A. 业务数据侧 —— [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB)\n\n- 「整体成交」和「净成交」差的是退款/取消，不是算法\n- ROI 必须**成对看**，整体与净的**差值**才是风险敞口\n- 结论：卡住你的从来是\"这个数按哪个口径算的\"\n\n### B. 计费与额度侧 —— Agent模型接入与额度机制\n\n- 免费模型 ≠ 不计费 —— 免费额度与计费口径是**两条线**\n- 额度按 **key/账号**算，不按 provider 算 —— 归属问题\n- 「很久没用却显示超限」→ 限额是**时间窗 + 总量混合判定**，不是\"最近用了多少\"\n- 「有 key 轮换却一下子满了」→ 轮换的是凭证，**额度池是共享的**\n- 结论：卡住你的同样不是\"扣了多少\"，而是\"这笔账算在谁头上、算在哪个窗口\"",
    "## 综合判断\n\n1. **数字不可信的原因几乎总是归属，不是计算。**\n   钱算在谁头上（provider vs key）、时间算在哪个窗（最近用量 vs 周期总量）、\n   成交算在哪个口径（下单 vs 净成）—— 三类错误同源。\n\n2. **由此得到一个通用检查动作**：先定位\"分子/分母/时间窗\"，三个都对不上，\n   再去怀疑计算或数据源。\n\n3. 这也解释了那个看似矛盾的体验为什么成立：**\"免费\"和\"没额度了还在扣\"\n   可以同时为真**，因为它们在两条不同的线上。",
    "## 为什么这是 synthesis 而不是单页复述\n\n单看任一页都只是\"某类指标怎么看\"。把业务侧与工程侧并排，才看得出\n**这是同一个认知缺口的两次显形** —— 你不缺算术，缺的是先定口径的习惯。",
    "## 相关\n\n- [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB)\n- Agent模型接入与额度机制\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [关联规则挖掘的支持度与置信度](/wiki/agent-session/as-concept-%E5%85%B3%E8%81%94%E8%A7%84%E5%88%99%E6%8C%96%E6%8E%98%E7%9A%84%E6%94%AF%E6%8C%81%E5%BA%A6%E4%B8%8E%E7%BD%AE%E4%BF%A1%E5%BA%A6) —— 另一类「先定阈值/口径再算数」的场景"
  ]
},
{
  "id": "as-synthesis-可复用物与不可复用物分开",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "可复用物与不可复用物分开",
  "oneLiner": "可复用物与不可复用物分开",
  "body": [
    "## # 可复用物与不可复用物分开",
    "## 结论\n\n> 你反复问的其实一直是同一个问题：**「这东西下次还能不能用？」**\n> 而你踩的坑也一直是同一个：**把会过期的和不会过期的混在一起放。**\n> 解法统一是**先按「寿命 / 复用性」分层，再决定谁放哪、谁信谁。**",
    "## 四处证据\n\n| 场合 | 混在一起的两类东西 | 分开之后的规则 |\n|---|---|---|\n| [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) | 机械过滤（寒暄/工具回显） vs 判断（哪轮成知识） | 清洗层可批量、可丢弃；提炼层昂贵、面向人 |\n| 上下文按信任等级分层 | 长期身份与原则 vs 每轮的时间/页面/可用 skill | 动态内容**不进历史**；压缩后要重新生成 |\n| [计数闸门不等于上下文管理](/wiki/agent-session/as-concept-%E8%AE%A1%E6%95%B0%E9%97%B8%E9%97%A8%E4%B8%8D%E7%AD%89%E4%BA%8E%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AE%A1%E7%90%86) | 会话状态（刷新即失） vs 需要跨刷新的状态 | 生命周期不同 → 落盘位置不同 |\n| [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) | 「曾经这样」（prototypes/旧文档） vs 「运行时用什么」（DB row） | 判断现状只查运行时真源 |\n| [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) | 中立逻辑（跨 agent 通用） vs 某端的格式要求 | 格式差异留在适配器，不进通用件 |\n| [跨源取数据要靠自建代理](/wiki/agent-session/as-concept-%E8%B7%A8%E6%BA%90%E5%8F%96%E6%95%B0%E6%8D%AE%E8%A6%81%E9%9D%A0%E8%87%AA%E5%BB%BA%E4%BB%A3%E7%90%86) | 数据获取 vs 展示 | 拿不到数据时，别在展示层打补丁 |",
    "## 综合判断\n\n1. **分层的依据是「寿命」，不是「内容类型」。**\n   会过期的（寒暄、当前页面、当前进度、原型文件、某端格式）和不会过期的\n   （判断原则、通用逻辑、可复用知识）放在同一层，结果一定是**过期的那部分把没过期的污染掉**。\n\n2. **「放错层」几乎总是表现为「静默」而不是「报错」。**\n   旧原型被当成现状、过期动态上下文被压进 summary、某个 agent 的格式写进通用脚本 ——\n   没有一个会报错，只会让人在错误的前提上继续工作。\n\n3. **可迁移的动作**：拿到任何一个东西要归位前，先问两句 ——\n   **「它多久会变一次？」「下次需要它的，还是同一批人/同一场景吗？」**\n   两个答案决定它该进哪一层，以及**该不该被信任**（对照 [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86)：\n   只有 `confirmed` 的边界才能当依据）。\n\n4. **这条骨架同时解释了为什么「先分层」比「先处理」便宜**：\n   分层是一次性的、机械的；处理是重复的、昂贵的。先分层 = 把昂贵的那步喂干净\n   —— 与 [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) 是同一枚硬币的两面（一个分「归属层」，一个分「寿命层」）。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个领域的一条具体规则（清洗顺序、上下文分层、仓库残留、脚本适配）。\n并排之后才看得出它们共享**同一个结构**：**先按寿命分层，再谈处理与信任**。\n这个结构独立于任何一个项目，可以带走。",
    "## 相关\n\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 同源骨架：先划归属，再动手\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 同源：先定「这属于谁/哪一层」，再谈数值\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— 分层的本质也是「造出一个可比较的对照」\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 同源：旧东西没清出去，就会继续污染当前行为\n- [入库前先分层清洗](/wiki/agent-session/as-concept-%E5%85%A5%E5%BA%93%E5%89%8D%E5%85%88%E5%88%86%E5%B1%82%E6%B8%85%E6%B4%97) / 上下文按信任等级分层 / [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)"
  ]
},
{
  "id": "as-synthesis-同一状态的多个副本必然漂移",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "同一状态的多个副本必然漂移",
  "oneLiner": "同一状态的多个副本必然漂移",
  "body": [
    "## # 同一状态的多个副本必然漂移",
    "## 结论\n\n> 同一份状态存在多处副本时（本地 / 远端、工作区 / HEAD、worker / 主仓、两个数据源），\n> **漂移是默认状态，不是异常。** 任何一处的绿灯只对那一份成立。\n> 判据一句话：**先把副本对齐到同一条标识（commit / 版本 / 游标 / id），再谈「行不行」。**",
    "## 四处证据：每一处都是「绿灯对的是另一份」\n\n| 出处 | 绿灯 / 状态 | 它实际对应的副本 | 症状 |\n|---|---|---|---|\n| 合并绿灯要对应当前HEAD | PR 上 CI 全绿、显示「可合并」 | 旧提交（本地又提交了但未 push） | 合进去的不是刚改好的版本 |\n| 开PR前先确认基线的远端状态 | 本地分支看起来只领先几个提交 | 远端主线落后很多 | PR 带进一长串无关历史 |\n| [交付前先同步主干](/wiki/agent-session/as-concept-%E4%BA%A4%E4%BB%98%E5%89%8D%E5%85%88%E5%90%8C%E6%AD%A5%E4%B8%BB%E5%B9%B2) | 本地验证通过 | 已漂移的主干 | 交付后冲突 / 回归 |\n| [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) | 「取更新的那个源」 | 两个源各自在部分维度更新 | 拿到的是一份混合、互不同步的产物 |\n\n旁证：[远端主线可能与本地主线无共同祖先](/wiki/agent-session/as-concept-%E8%BF%9C%E7%AB%AF%E4%B8%BB%E7%BA%BF%E5%8F%AF%E8%83%BD%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%B8%BB%E7%BA%BF%E6%97%A0%E5%85%B1%E5%90%8C%E7%A5%96%E5%85%88) —— 副本之间的差异可以大到连共同祖先都没有，\n此时「对比一下」这个动作本身就不成立。",
    "## 综合判断\n\n1. **副本漂移不需要任何错误操作就会发生。** 只要有两处可以独立写入，它们就会分叉；\n   所以「我本地是好的」在结构上就不能推出「交付出去是好的」。\n\n2. **对齐的载体必须是「同一条标识」**：commit SHA、版本号、游标、记录 id ——\n   而不是「看起来一样」「刚才跑过」「名字相同」。这也是 [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86) 的同一形状。\n\n3. **可迁移的动作**：看到任何绿灯 / 状态页 / 「已验证」时，先问三句 ——\n   **「它对应的是哪一条标识？」「我手上这份是同一条吗？」「这中间有没有人又写过？」**\n   三句都对齐，绿灯才有意义。\n\n4. **顺带推论：把副本数量压到最少，比把校验做得更勤更划算。** 能收敛到单一真源的，\n   就不要维护两份再同步。",
    "## 与既有 synthesis 的关系\n\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 那条处理**时间维度**的乱序（谁最后返回）；\n  本条处理**空间维度**的分叉（谁和谁不是同一份）。两者都是「权威性没有显式记录」的后果。\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 本条的上游：真源定不下来，副本必然互相冒充。\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 同族：只改了其中一份，另一份不会自己跟上。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次 git / 数据源的具体事故。\n并排之后才看得出它们共享**同一个结构**：**状态被复制，而权威性没有被复制。**",
    "## 相关\n\n- 合并绿灯要对应当前HEAD / 开PR前先确认基线的远端状态 / [交付前先同步主干](/wiki/agent-session/as-concept-%E4%BA%A4%E4%BB%98%E5%89%8D%E5%85%88%E5%90%8C%E6%AD%A5%E4%B8%BB%E5%B9%B2)\n- [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) / [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) / [对照两端要用同一条标识](/wiki/agent-session/as-concept-%E5%AF%B9%E7%85%A7%E4%B8%A4%E7%AB%AF%E8%A6%81%E7%94%A8%E5%90%8C%E4%B8%80%E6%9D%A1%E6%A0%87%E8%AF%86)\n- [远端主线可能与本地主线无共同祖先](/wiki/agent-session/as-concept-%E8%BF%9C%E7%AB%AF%E4%B8%BB%E7%BA%BF%E5%8F%AF%E8%83%BD%E4%B8%8E%E6%9C%AC%E5%9C%B0%E4%B8%BB%E7%BA%BF%E6%97%A0%E5%85%B1%E5%90%8C%E7%A5%96%E5%85%88) / [本地测试要显式覆盖数据源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E8%A6%81%E6%98%BE%E5%BC%8F%E8%A6%86%E7%9B%96%E6%95%B0%E6%8D%AE%E6%BA%90)"
  ]
},
{
  "id": "as-synthesis-契约只承载结构，个性留给扩展层",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "契约只承载结构，个性留给扩展层",
  "oneLiner": "契约只承载结构，个性留给扩展层",
  "body": [
    "## # 契约只承载结构，个性留给扩展层",
    "## 结论\n\n> 你在四套完全不同的系统上划的是同一条线：**中间那层契约只管「结构 / 中立逻辑」，\n> 所有「个性、格式、视觉、业务规则」都往下推到扩展层。**\n> 违反它的症状也统一 —— 契约被某一端的特殊性污染，于是别端全部跟着变形。",
    "## 四处证据\n\n| 系统 | 契约层（只管结构/中立） | 扩展层（承接个性） | 污染后的症状 |\n|---|---|---|---|\n| [简历模板的三层渲染协议与迁移](/wiki/agent-session/as-topic-%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E4%B8%89%E5%B1%82%E6%B8%B2%E6%9F%93%E5%8D%8F%E8%AE%AE%E4%B8%8E%E8%BF%81%E7%A7%BB) | renderer / protocol：slot 渲染、空值隐藏、flex 不撑爆 | 模板 CSS：加粗/字号/颜色/间距 | 视觉规则回填进 renderer，所有模板一起变形 |\n| [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) | 机器可读契约：canonical / required / deprecated 字段清单 | 运行代码（真源）+ 人类说明文档 | 私有 class 与 selector 回填 DB，导入即污染 |\n| [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5) | `.agent/scripts/agent-brief.js`：中立逻辑 | 各端 adapter（`.claude/hooks/*.js`）决定输出格式 | 某端格式写进通用脚本 → 通用件绑死单工具 |\n| 评测平台是平台层项目规则是适配层 | 平台：版本 / 数据集 / 实验 / trace / 评分 | 项目：fixtures / cases / runners / evaluators | 项目知识塞进平台，或自造 Lab 重复造轮子 |\n\n旁证：引擎不做建模器 —— 引擎是「切与渲染」的执行层，建模这一「个性生产」环节整体外推给 Blender；\n[多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 契约（协议字段）与内容（skill 正文）分属不同真源，不能整体选一边。",
    "## 综合判断\n\n1. **「承载什么」比「放在哪」更关键。** 四处都做了分层，但真正的分界线是同一条：\n   **契约层只描述「有哪些结构位置 / 哪些中立步骤」，不描述「长什么样、谁来填、业务怎么判」。**\n   一旦契约层开始表达个性（视觉、格式、业务规则），它就从「共用底座」变成了「某一端的私有实现」。\n\n2. **越界的方向总是「向上污染」。** 具体的一端把自己的特殊要求写进共用层，代价由**所有端**承担；\n   反过来把中立逻辑下放到某一端，代价只由那一端承担。所以越界检查只需问：\n   **「这条规则是只有一端需要，还是所有端都需要？」**\n\n3. **可迁移的动作**：设计任何共享层（协议 / schema / 通用脚本 / 平台）时，逐条过一遍其中的规则，\n   问 **「这一条是在描述结构，还是在描述某个使用者的个性？」** 属于后者的一律外推。\n   配套：契约要能被 validator 读（见 [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88)），否则外推的边界没人守。",
    "## 与既有 synthesis 的关系\n\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 讲**怎么分层**（按寿命/复用性）；本条讲**层与层之间怎么切**（结构 vs 个性）。\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 讲分层之后**怎么才算数**；本条是它前面的设计动作。\n  三条串起来即：先按寿命分层 → 层间按「结构/个性」切界 → 最后让边界被运行时执行。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个系统里的一次架构决定（模板渲染、AI 协议、hook 脚本、评测平台）。\n并排之后才看得出它们**是同一条架构原则的四个实例**，且越界的代价结构完全一致。\n这条原则独立于任何技术栈，可以直接带走。",
    "## 相关\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 本条定边界，那条负责让边界被运行时执行\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 先按寿命分层，再按「结构/个性」切界\n- 引擎不做建模器 / [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) / [通用脚本要靠工具适配器接入](/wiki/agent-session/as-concept-%E9%80%9A%E7%94%A8%E8%84%9A%E6%9C%AC%E8%A6%81%E9%9D%A0%E5%B7%A5%E5%85%B7%E9%80%82%E9%85%8D%E5%99%A8%E6%8E%A5%E5%85%A5)"
  ]
},
{
  "id": "as-synthesis-存量不会自动跟上新逻辑",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "存量不会自动跟上新逻辑",
  "oneLiner": "存量不会自动跟上新逻辑",
  "body": [
    "## # 存量不会自动跟上新逻辑",
    "## 结论\n\n> 你反复遇到的不是「改错了」，而是**「改对了，但只有新东西享受到了」**。\n> 新代码/新协议/新渲染路径都上线了，**存量**（旧数据行、旧文件、旧模板、已同步过的层）\n> 却还按旧规则存在，并且不报错 —— 于是症状是「改了没用 / 修了还是坏的」。\n> 判定标准：**这个改动，存量对象会不会再经过一次它？** 不会，就得单独带过去。",
    "## 六处证据\n\n| 出处 | 改对的新逻辑 | 谁没跟上 | 症状 |\n|---|---|---|---|\n| INSERT OR IGNORE会让旧行不更新 | 封面提取逻辑修对，新行字段正确 | 已存在的旧行被 `IGNORE` 跳过 | 界面仍旧值，只有新文章对 |\n| [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) | 本地协议改造已定稿 | 「还没同步的层」没人推 | 文档与运行时各说各话 |\n| [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE) | 新入口归一化后落库正确 | 已入库的内容没补 `kind` | 老剪藏仍走错渲染链 |\n| 兼容fallback会让内容重复渲染 | 新模板写了 `section.body` 新槽 | 旧 fallback 路径仍活着并再渲染一次 | 同一份内容显示两遍 |\n| [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD) | 运行时已完全走 DB | `prototypes/`、旧文档、旧 migration 默认值仍在仓库 | 人和 agent 反复误判架构 |\n| 以前能用最近坏了先查自己改了什么 | 补丁修好了图片 | 依赖旧结构的页面（全局剥标签的副作用） | 旧问题换个形态暴露 |\n\n旁证：零延迟零尝试说明请求没发出去 —— 「强制让账号重新进路由」的运行时开关被**持久层恢复流程**覆盖，\n同一形状：**你改的那一层，不是下次真正被读的那一层。**",
    "## 综合判断\n\n1. **一次改动的作用面，只覆盖「未来经过这条路径的对象」。** 存量对象已经过去了，它们既不会回放，\n   也不会报错 —— 所以修复的**验收必须分两栏**：新对象对不对 + 存量怎么办（回填 / 迁移 / 显式声明）。\n\n2. **「旧路径还活着」比「旧数据还在」更危险。** 旧数据只是不变；旧路径（fallback 渲染、\n   残留原型、被恢复流程覆盖的开关）会**主动参与**当前行为，把新逻辑的结果再污染一遍。\n   所以下线旧路径和写新路径是同一件事的两半。\n\n3. **可迁移的动作**：任何一次「改逻辑」之后，追问三句 ——\n   **「存量对象怎么办？」「旧路径还在跑吗？」「我改的这一层，下次真的会被读吗？」**\n   三句里有一句答不上来，这次修复就只完成了一半。",
    "## 与既有 synthesis 的关系\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 讲「没人读就等于不存在」；本条讲**「有人读了，但存量没经过它」**。\n  两条合起来是「约束生效」的完整条件：**有执行者，且所有对象都会经过执行者。**\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 存量问题本质是「旧东西没被清出去」，与按寿命分层同源。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个项目里的一次「修了但没全好」（回填没写、同步没推、旧模板没下线）。\n并排之后才看得出它们共享**同一个失败形状**：**新逻辑只对新对象生效**。\n这个形状与领域无关，可以直接带走。",
    "## 相关\n\n- INSERT OR IGNORE会让旧行不更新 / [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) / [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE)\n- 兼容fallback会让内容重复渲染 / [仓库残留会误导对现状的判断](/wiki/agent-session/as-concept-%E4%BB%93%E5%BA%93%E6%AE%8B%E7%95%99%E4%BC%9A%E8%AF%AF%E5%AF%BC%E5%AF%B9%E7%8E%B0%E7%8A%B6%E7%9A%84%E5%88%A4%E6%96%AD)\n- [改远端库结构前先确认库身份与回滚](/wiki/agent-session/as-concept-%E6%94%B9%E8%BF%9C%E7%AB%AF%E5%BA%93%E7%BB%93%E6%9E%84%E5%89%8D%E5%85%88%E7%A1%AE%E8%AE%A4%E5%BA%93%E8%BA%AB%E4%BB%BD%E4%B8%8E%E5%9B%9E%E6%BB%9A) —— 改持久结构后，存量数据同样要单独带过来\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B)\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 存量问题的孪生：观测点没落在执行路径末端"
  ]
},
{
  "id": "as-synthesis-定义要由使用者确认",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "定义要由使用者确认",
  "oneLiner": "定义要由使用者确认",
  "body": [
    "## # 定义要由使用者确认",
    "## 结论\n\n> 分类法、术语、协议这类**定义**，一旦由单方（尤其是 agent）单方面给出，\n> 就会在长期使用中悄悄错位。**定义权必须显式归属到使用者，并至少被确认一次。**\n> 「这是你界定的吗？」不是一个礼貌问题，是这套系统里最重要的校验动作之一。",
    "## 四处证据\n\n| 出处 | 谁单方面下了定义 | 后果 / 你的反应 |\n|---|---|---|\n| [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) | agent 界定了「概念 / topic 怎么分」 | 你当场追问「这是你界定的吗」；分类法未确认 → 使用者长期错位 |\n| [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) | 「知识单元 / 知识簇」是**被追问后**才补的定义 | 不是先有框架再落地，而是定义跟着追问长出来 |\n| [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87) | 双方各自默认一个词的含义（如「回归」） | 整段回答可能在回答错误的问题；反复追问 = 知识体系有洞 |\n| [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) | 协议由 AI 起草、AI 执行 | 所以**必须**低歧义、唯一写法、可自动校验 —— 没有「凭感觉对齐」的余地 |\n\n旁证：[多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) —— 真源归属若不显式，就退化成「谁最后改谁说了算」，与定义权不显式是同一个病。",
    "## 综合判断\n\n1. **当作者/执行者都是 AI 时，定义不再是「沟通问题」，而是「规范问题」。**\n   人和人之间可以靠默契、靠「你懂我意思」对齐；agent 之间不行 ——\n   定义模糊不会有中间态，只会**静默按各自的解释执行**。\n   这解释了为什么「协议要唯一规范答案」和「分类法要使用者确认」是同一条：\n\n2. **定义的正确性不能由定义者自己判定。**\n   agent 能保证的只有「自洽」和「可校验」，不能保证「这就是你要的」。\n   所以确认动作必须由使用者做，且要**在定义被大量使用之前**做 —— 之后确认的代价是返工。\n\n3. **「反复追问」是定义缺失的探测器，也是优先级标注。**\n   同一个词跨天、跨 session 被反复问，说明它在知识体系里是个洞；\n   这类词值得单独成页、单独确认，而不是每次临时查。\n\n4. **可迁移的动作**：拿到任何一份 agent 给的框架/分类/术语表，先问两句 ——\n   **「这套划分是谁定的？」「我确认过吗？」**\n   没确认过的，只能当**提案**用，不能当依据用（对照 [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) 里\n   「只有 `confirmed` 的边界才能当依据」）。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次对话里的一个沟通技巧（先问所指、给候选、反复提问要成页）。\n并排之后才看得出：**它们都在处理同一件事 —— 定义的权威没有被显式交接**。\n这个判断只在「AI 既是定义者又是执行者」的前提下成立，是这个项目自己的处境。",
    "## 相关\n\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 同源：归属（定义权 / 真源）必须显式\n- [一词多义先确认所指](/wiki/agent-session/as-concept-%E4%B8%80%E8%AF%8D%E5%A4%9A%E4%B9%89%E5%85%88%E7%A1%AE%E8%AE%A4%E6%89%80%E6%8C%87) / [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86) / [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88)\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— 「这是谁定的」本质上也是在找一个可比较的参照"
  ]
},
{
  "id": "as-synthesis-对照才产生信息",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "对照才产生信息",
  "oneLiner": "对照才产生信息",
  "body": [
    "## # 对照才产生信息",
    "## 结论\n\n> 你在四个不同场合遇到的是**同一个结构性问题**：手里只有一个点，所以看不出信息。\n> 解法也始终是同一个动作 —— **先造一个 A/B**。",
    "## 四处证据\n\n| 场合 | 单点时的问题 | 你最后用的对照 |\n|---|---|---|\n| [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) | 罗列功能，说不清价值 | 不用它 / 用别家 vs 用它 |\n| [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB) | 只有整体成交，看着挺好 | 整体 ROI **对**净 ROI，差值 = 风险敞口 |\n| [用户访谈与需求挖掘](/wiki/agent-session/as-topic-%E7%94%A8%E6%88%B7%E8%AE%BF%E8%B0%88%E4%B8%8E%E9%9C%80%E6%B1%82%E6%8C%96%E6%8E%98) | 只准备问题清单，对方不知从何说起 | 我的具体困境 **换** 他的真实经历 |\n| Agent模型接入与额度机制 | \"provider 和 key 是一样的吗\" | provider（渠道）vs key（凭证）分开 |",
    "## 综合判断\n\n1. **单点不产生信息，对照才产生信息。**\n   价值要靠\"和不用它的差别\"才存在；数据要靠\"整体与净的差值\"才有含义；\n   访谈要靠\"我 vs 他\"才有对话；额度要靠\"渠道 vs 凭证\"才分得清归属。\n\n2. **\"讲不清楚\"通常是\"缺参照系\"，不是\"表达能力差\"。**\n   这也是为什么加形容词、换措辞都没用 —— 缺的是另一个点，不是更好的词。\n\n3. **可迁移的动作**：任何时候觉得\"说不清 / 看不出问题\"，\n   先问一句 **\"它的对照组是什么？\"** 找不到对照组，就是还没理解。",
    "## 为什么这是 synthesis\n\n单看任一页，都只是\"某领域的一个技巧\"。并排之后才看得出\n**四页共享同一个认知结构** —— 而这个结构本身是可以带走的。",
    "## 相关\n\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC)\n- [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [数据指标的解读](/wiki/agent-session/as-topic-%E6%95%B0%E6%8D%AE%E6%8C%87%E6%A0%87%E7%9A%84%E8%A7%A3%E8%AF%BB)\n- [用户访谈与需求挖掘](/wiki/agent-session/as-topic-%E7%94%A8%E6%88%B7%E8%AE%BF%E8%B0%88%E4%B8%8E%E9%9C%80%E6%B1%82%E6%8C%96%E6%8E%98)\n- [执行力的复盘](/wiki/agent-session/as-topic-%E6%89%A7%E8%A1%8C%E5%8A%9B%E7%9A%84%E5%A4%8D%E7%9B%98) —— 产出锚点 vs 结果锚点，同样是「造对照」"
  ]
},
{
  "id": "as-synthesis-差异要用使用模式说而不是功能清单",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "差异要用使用模式说而不是功能清单",
  "oneLiner": "差异要用使用模式说而不是功能清单",
  "body": [
    "## # 差异要用使用模式说而不是功能清单",
    "## 结论\n\n> 你反复被同一件事卡住：**讲不清「我和别人差在哪」**。\n> 四次得到的解法是同一条 —— **换掉判据的维度**：\n> 不要问「我有哪些功能」（对方也有，且清单永远列不完），要问\n> **「用户在什么模式下用它」「不用它用户会损失什么」**。\n> 功能清单是**共有项**，天然抹掉差异；使用模式与损失才是**差异项**。",
    "## 四处证据：每一处都是「换掉比较的维度」\n\n| 出处 | 用功能清单比会得到 | 换成的维度 |\n|---|---|---|\n| [个人知识产品的定位](/wiki/agent-session/as-topic-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E5%AE%9A%E4%BD%8D) | Notion / flomo 都有笔记、任务、日历、wiki → 看起来一样 | **使用模式**：用完即走 vs 一个长期空间；企业问答做事 vs 个人洞察思考 |\n| [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE) | 罗列功能 → 用户无感 | **对照**：不用它 / 用别家 vs 用它（痛点 + 场景 + 对比 + 结果） |\n| [竞品拆解框架](/wiki/agent-session/as-topic-%E7%AB%9E%E5%93%81%E6%8B%86%E8%A7%A3%E6%A1%86%E6%9E%B6) | 只列功能 = 只拆了表层 | **用户在哪 → 痛点 → 场景 → 商业价值 → 如何评测**（功能只是最后一格） |\n| [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3) | 「知识库」有独立入口，笔记也有文件夹 → 说不清为什么要它 | **损失判据**：去掉这个入口，用户会损失什么能力 |",
    "## 综合判断\n\n1. **功能清单是共有项，不是差异项。** 同类产品在功能维度上必然高度重叠，\n   所以**越往功能层比，越说不出差异** —— 这不是表达能力问题，是维度选错了。\n\n2. **差异只在两个维度上出现**：**使用模式**（用户在什么节奏、什么场景下用它）\n   与**损失**（去掉它，用户失去什么能力）。两者都要求**先有一个对照组** ——\n   这也是它和 [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) 同源的地方。\n\n3. **可迁移的动作**：写定位 / 价值 / 竞品分析时，先把功能清单**划掉**，然后强制回答两句 ——\n   **「用户在什么模式下用它，而竞品不是这个模式？」**\n   **「去掉它，用户会损失什么能力？」**\n   两句都答不出 → 说明差异还不存在，不是还没写出来。\n\n4. **这也解释了一个反直觉现象**：功能做得越多，定位反而越模糊 ——\n   因为每一项新功能都增加了与竞品的**共有项**，而差异项没变。",
    "## 与既有 synthesis 的关系\n\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) —— 同源：差异要靠对照才存在。本条把「对照组」具体化成两个维度（模式 / 损失）。\n- [定义要由使用者确认](/wiki/agent-session/as-synthesis-%E5%AE%9A%E4%B9%89%E8%A6%81%E7%94%B1%E4%BD%BF%E7%94%A8%E8%80%85%E7%A1%AE%E8%AE%A4) —— 那条讲**定义权**归使用者；本条讲**比较的维度**要选在使用者那一侧。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个具体场合（产品定位 / 宣传语 / 竞品拆解 / 信息架构）的一次判断。\n并排之后才看得出它们共享**同一条换维度的动作**：从「有什么」换到「怎么用 / 失去什么」。",
    "## 相关\n\n- [个人知识产品的定位](/wiki/agent-session/as-topic-%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E5%AE%9A%E4%BD%8D) / [用户可感知的价值与差异化表达](/wiki/agent-session/as-concept-%E7%94%A8%E6%88%B7%E5%8F%AF%E6%84%9F%E7%9F%A5%E7%9A%84%E4%BB%B7%E5%80%BC%E4%B8%8E%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%A8%E8%BE%BE)\n- [竞品拆解框架](/wiki/agent-session/as-topic-%E7%AB%9E%E5%93%81%E6%8B%86%E8%A7%A3%E6%A1%86%E6%9E%B6) / [容器要有超出文件夹的意义才值得独立入口](/wiki/agent-session/as-concept-%E5%AE%B9%E5%99%A8%E8%A6%81%E6%9C%89%E8%B6%85%E5%87%BA%E6%96%87%E4%BB%B6%E5%A4%B9%E7%9A%84%E6%84%8F%E4%B9%89%E6%89%8D%E5%80%BC%E5%BE%97%E7%8B%AC%E7%AB%8B%E5%85%A5%E5%8F%A3)\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF) / [定义要由使用者确认](/wiki/agent-session/as-synthesis-%E5%AE%9A%E4%B9%89%E8%A6%81%E7%94%B1%E4%BD%BF%E7%94%A8%E8%80%85%E7%A1%AE%E8%AE%A4)"
  ]
},
{
  "id": "as-synthesis-快照只在建立那一刻成立",
  "updatedAt": "2026-10-11",
  "wikiSlug": "agent-session",
  "term": "快照只在建立那一刻成立",
  "oneLiner": "快照只在建立那一刻成立",
  "body": [
    "## # 快照只在建立那一刻成立",
    "## 结论\n\n> 把「会变的输入」与「建立时机」耦合在一起，就会得到一个**只在建立那一刻成立**的状态：\n> 会话级系统提示里算好的日期、按 threadId 恢复的历史、被当成现状的快照。\n> 它在跨过某个边界（午夜、新 turn、下一条 trace）后**静默失效**，而没有任何一处报错。\n> 判据一句话：**这个值是在什么时候算出来的？它还会再算一次吗？**",
    "## 三处证据：每一处都是「算一次，然后长期复用」\n\n| 出处 | 算一次的是什么 | 边界在哪 | 失效后的症状 |\n|---|---|---|---|\n| [随时间变化的上下文要逐轮注入](/wiki/agent-session/as-concept-%E9%9A%8F%E6%97%B6%E9%97%B4%E5%8F%98%E5%8C%96%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E8%A6%81%E9%80%90%E8%BD%AE%E6%B3%A8%E5%85%A5) | 会话级系统提示里的当前日期 | 午夜（跨天） | 「今天/昨天」这类相对表述全部错位，提示本身没变 |\n| [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D) | 用 `threadId` 恢复出的「同一个会话」 | 每条消息都是新的一次性进程 | 手机看到的是历史，不是活的同一个 turn |\n| [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) | 观测平台里的 trace 快照 | 下一条 trace / 保留策略变化 | 恢复依据落在会过期、会丢的那一层上 |\n\n旁证：派生数据只在写入时入队旧数据要单独回填 —— 入队时机（只挂新建事件）决定了\n存量永远不在处理范围内；这也是「时机」与「值」被绑死的另一种形态。",
    "## 综合判断\n\n1. **失效是静默的，因为没有任何一层认为出错了。** 会话提示照常注入、恢复照常返回历史、\n   观测照常显示 trace —— 每一环都「成功」，只有下游拿到的东西过期了。\n\n2. **可迁移的动作**：任何「初始化时算一次、之后被长期复用」的状态，先问三句 ——\n   **「这个值什么时候算的？」「它依赖的输入会不会变？」「它还会再算一次吗？」**\n   第三问答「不会」，就必须显式定义刷新触发点。\n\n3. **修正方向固定**：把「会变的输入」从建立时搬到**使用时的钩子**上逐次注入\n   （如 `before_agent_start` 覆盖 systemPrompt），而不是在初始化时算死。",
    "## 与既有 synthesis 的关系\n\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 相邻但不同：那条讲**已存在的对象**没被新逻辑重新处理；\n  本条讲**算好的值**跨过有效期后没被重算。前者缺「重新处理」，后者缺「重新计算」。\n- 活的能力取决于增量机制而不是生成质量 —— 同源：都在问「谁触发下一次」；\n  那条是选型判据，本条是失效判据。\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 快照是「当前状态」的代理，只在建立那一刻与真值一致。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个项目里的一次「明明配好了却不对」。\n并排之后才看得出它们共享**同一个机制**：**把一个会变的输入冻结在了建立时刻。**",
    "## 相关\n\n- [随时间变化的上下文要逐轮注入](/wiki/agent-session/as-concept-%E9%9A%8F%E6%97%B6%E9%97%B4%E5%8F%98%E5%8C%96%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E8%A6%81%E9%80%90%E8%BD%AE%E6%B3%A8%E5%85%A5) / [共享历史不等于共享活会话](/wiki/agent-session/as-concept-%E5%85%B1%E4%BA%AB%E5%8E%86%E5%8F%B2%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%85%B1%E4%BA%AB%E6%B4%BB%E4%BC%9A%E8%AF%9D)\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) / 派生数据只在写入时入队旧数据要单独回填\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) / [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)"
  ]
},
{
  "id": "as-synthesis-按实际规模选型，而不是按方案先进性",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "按实际规模选型，而不是按方案先进性",
  "oneLiner": "按实际规模选型，而不是按方案先进性",
  "body": [
    "## # 按实际规模选型，而不是按方案先进性",
    "## 结论\n\n> 你反复问的其实是同一个问题：**「这事该上现成的重型方案，还是自己搭一层薄的？」**\n> 三次得到的判据是同一条 —— **先量清自己这一侧的真实规模与边界，再决定用哪边；方案是否「标准 / 先进 / 功能丰富」不是判据。**\n> 判据用错的两个方向都踩过：**规模小却上了重型方案**（白花钱），**边界已到深处却还在手搓**（维护失控）。",
    "## 四处证据\n\n| 场合 | 自己这一侧的真实规模 / 边界 | 被误用的「先进性」判据 | 得出的结论 |\n|---|---|---|---|\n| [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) | 低频任务 + 个人知识库规模 | 「BullMQ 是标准方案」 | 当前规模下是过度设计，Redis 消耗与收益不匹配 |\n| Agent编排层薄自建优先于重型框架 | 能力边界很明确（读笔记 / 读文件 / 写笔记） | 「LangChain / LangGraph 功能丰富」 | 自建一层薄编排；权限边界 > 框架功能 |\n| [手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88) | 已经在重写成熟内核的职责 | 「自己写的才可控」 | 该换 CodeMirror 6 内核；但 live preview 规则层仍自己定 |\n| [文档附件解析管线](/wiki/agent-session/as-topic-%E6%96%87%E6%A1%A3%E9%99%84%E4%BB%B6%E8%A7%A3%E6%9E%90%E7%AE%A1%E7%BA%BF) | 只对部分格式真的需要 OCR | 「自建 Docling 容器更可控」 | 用外部 OCR 服务只负责提取；表格与纯文本继续本地解析，**首批不上容器** |\n\n旁证：[服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C) —— 「项目里已经有 Redis」是**可得性**，不是「该不该用」的判据；\n先问这份数据的职责是不是用户私有内容。",
    "## 综合判断\n\n1. **选型的判据是「这一侧的真实规模与边界」，不是方案的成熟度。**\n   四个场合用的技术完全不同（队列 / Agent 框架 / 编辑器内核 / 文档解析），但判据是同一个：\n   先看自己需要它承担哪几个职责、量有多大，再看方案带进来多少用不上的东西。\n\n2. **两个方向的错误同源：不是量错，而是没量。**\n   用方案的标签（标准 / 先进 / 可控）替代了自己这一侧的测量 —— 于是规模小的时候被方案的「标准」说服，\n   规模大的时候被「自己写的才可控」说服。**同一个偷懒，两个相反的代价。**\n\n3. **可迁移的动作**：选型前先写两行 ——\n   **「我这一侧的真实规模是多大？」「我真正需要它承担的职责是哪几条？」**\n   这两行答不出来，就先别选；答出来了，「用现成的」和「自己搭」通常会自动分出胜负。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个技术栈的一次选型（队列、Agent 编排、编辑器）。\n并排之后才看得出它们共享**同一条判据**：以自己这一侧的真实规模与边界为准，而不是以方案的先进性为准。\n这条判据与具体技术无关，可以直接带走。",
    "## 相关\n\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 同源：先按「寿命」分层，再谈谁放哪\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82) —— 同源：先按「结构 / 个性」切界，再谈谁承载什么\n- 职责要先分家再谈实现 —— 同源：先分职责边界，再谈实现方式\n- [后台任务队列选型](/wiki/agent-session/as-topic-%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%80%89%E5%9E%8B) / Agent编排层薄自建优先于重型框架 / [手搓编辑器核心逻辑到深处要评估换社区方案](/wiki/agent-session/as-concept-%E6%89%8B%E6%90%93%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%E5%88%B0%E6%B7%B1%E5%A4%84%E8%A6%81%E8%AF%84%E4%BC%B0%E6%8D%A2%E7%A4%BE%E5%8C%BA%E6%96%B9%E6%A1%88) / [文档附件解析管线](/wiki/agent-session/as-topic-%E6%96%87%E6%A1%A3%E9%99%84%E4%BB%B6%E8%A7%A3%E6%9E%90%E7%AE%A1%E7%BA%BF)\n- [服务端缓存与浏览器缓存的边界](/wiki/agent-session/as-concept-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%BC%93%E5%AD%98%E4%B8%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%9A%84%E8%BE%B9%E7%95%8C)"
  ]
},
{
  "id": "as-synthesis-收尾要落到确定状态",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "收尾要落到确定状态",
  "oneLiner": "收尾要落到确定状态",
  "body": [
    "## # 收尾要落到确定状态",
    "## 结论\n\n> 远程 / 异步任务只要停在「等人 / 等事件」的中间态，就等于**没有结束** —— 而它不会报错，\n> 只会安静地挂在那里。\n> 判据一句话：**终态必须是三选一 —— 成功、失败、已接管；其余都算悬挂。**",
    "## 四处证据：每一处都是「停在非终态」\n\n| 出处 | 看起来的状态 | 实际 | 缺的东西 |\n|---|---|---|---|\n| 委派前要过用户审查闸门 | worker `idle` | 只是执行轮次结束，AO 不会自动续跑 | 没有把 `idle` 翻译成「等指令」并检查未完成项 |\n| [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) | 超时 → 判失败 | 长任务本来就可能超过固定阈值 | 终态判据用了「时长」而不是「真实事件」 |\n| 阻塞式工具与提案确认 | Agent 说完了 | 写入类工具不在 loop 里，无法就结果继续 | 工具不可暂停 / 不可恢复 |\n| Agent harness 要隔离复现可收尾 | 跑过了 | 环境没隔离、收尾动作没人做 | harness 缺「收尾」这一半 |\n\n旁证：[全绿的单测可能测的不是那条链路](/wiki/agent-session/as-concept-%E5%85%A8%E7%BB%BF%E7%9A%84%E5%8D%95%E6%B5%8B%E5%8F%AF%E8%83%BD%E6%B5%8B%E7%9A%84%E4%B8%8D%E6%98%AF%E9%82%A3%E6%9D%A1%E9%93%BE%E8%B7%AF) —— 「修了一个真实 bug」被当成「修好了用户报的问题」，\n于是 Issue 提前关闭；正确的收尾是退回 `In Progress`，等用户验收。",
    "## 综合判断\n\n1. **「等人确认」「等事件」「idle」都不是终态。** 系统必须显式把它们转成可恢复 / 已终止 / 已接管，\n   否则任务会永久悬挂 —— 而且没有任何告警。\n\n2. **超时不能充当终态判据。** 用固定时长判定结束会误杀长任务；终态应由**权威事件 + 显式状态迁移**\n   决定，超时只能触发「询问 / 接管」，不能直接判死。\n\n3. **收尾的定义权在消费方，不在执行器。** 「执行器说完了」不是完成；完成要由验收方认账\n   （见 [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6)、Issue完成由用户验收后再关闭）。\n\n4. **可迁移的动作**：设计任何异步 / 远程任务时，先列出**全部终态**，再逐条路径检查\n   **「有没有一条会停在非终态？」** 有，就补一条迁移规则或一个接管入口。",
    "## 与既有 synthesis 的关系\n\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 那条讲「对面有没有认账」；本条讲「没人认账时系统会怎样」：悬挂。\n- [权威终态到达后迟到的写不能覆盖它](/wiki/agent-session/as-synthesis-%E6%9D%83%E5%A8%81%E7%BB%88%E6%80%81%E5%88%B0%E8%BE%BE%E5%90%8E%E8%BF%9F%E5%88%B0%E7%9A%84%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83) —— 一对：那条防「终态被降级」，本条防「永远到不了终态」。\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 状态模型也是契约，没有执行者读它就不成立。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次编排 / 工具设计的具体缺陷。\n并排之后才看得出它们共享**同一个缺口**：**状态机没有把「中间态」收敛掉。**",
    "## 相关\n\n- 委派前要过用户审查闸门 / Issue完成由用户验收后再关闭\n- [长任务不要用固定超时判定](/wiki/agent-session/as-concept-%E9%95%BF%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9B%BA%E5%AE%9A%E8%B6%85%E6%97%B6%E5%88%A4%E5%AE%9A) / 阻塞式工具与提案确认 / Agent harness 要隔离复现可收尾\n- [验不到的部分要显式记为未验证](/wiki/agent-session/as-concept-%E9%AA%8C%E4%B8%8D%E5%88%B0%E7%9A%84%E9%83%A8%E5%88%86%E8%A6%81%E6%98%BE%E5%BC%8F%E8%AE%B0%E4%B8%BA%E6%9C%AA%E9%AA%8C%E8%AF%81)"
  ]
},
{
  "id": "as-synthesis-更新时序要由本地最新状态决定",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "更新时序要由本地最新状态决定",
  "oneLiner": "更新时序要由本地最新状态决定",
  "body": [
    "## # 更新时序要由本地最新状态决定",
    "## 结论\n\n> 你在同一条「编辑 → 保存 → 回写」链路上踩了三次坑，形状完全一样：\n> **「谁最新」这个判断，被交给了「谁最后返回 / 谁最后执行」。**\n> 而异步世界里，**返回顺序和用户操作顺序无关**。\n> 解法统一：把时序显式记下来 —— 版本号、捕获的实体 id、光标状态 —— 更新点一律读它，不读环境。",
    "## 三处证据\n\n| 出处 | 症状 | 被误用的「当前值」 | 显式时序 |\n|---|---|---|---|\n| [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) | 刚写的字被回退 | 晚返回的旧请求带着旧正文 | 本地输入版本号 +1，返回时比对 |\n| [延迟保存要捕获创建时的实体](/wiki/agent-session/as-concept-%E5%BB%B6%E8%BF%9F%E4%BF%9D%E5%AD%98%E8%A6%81%E6%8D%95%E8%8E%B7%E5%88%9B%E5%BB%BA%E6%97%B6%E7%9A%84%E5%AE%9E%E4%BD%93) | 编辑 A 的内容写进了 B | 计时器触发时的「当前活跃 tab」 | 创建任务时捕获 `note.id` 并传参 |\n| [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1) | 思考内容瞬间被清空 | 「最后一个元素」被整体赋值 | `{ ...prev, content }` 保留同对象其它字段 |\n| [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81) | 源码与渲染结果同时出现 | 固定的渲染规则，不看光标 | 显示由「本地光标位置」决定 |\n\n旁证：[编辑即时反馈与落盘延迟分离](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%8D%B3%E6%97%B6%E5%8F%8D%E9%A6%88%E4%B8%8E%E8%90%BD%E7%9B%98%E5%BB%B6%E8%BF%9F%E5%88%86%E7%A6%BB) —— 它给出的是这条链路的**正确分层**：内存即时、落盘延迟、\n边界 flush。三者都是在这个分层之下才会显形的时序问题。",
    "## 综合判断\n\n1. **「最后发生的」≠「最新的」。** 三个 bug 都在同一个前提下成立：把「回调执行的那一刻的共享可变状态」\n   当成「用户想要的最新状态」。请求乱序、debounce 跨对象、流式增量替换，都只是这个前提的三种触发方式。\n\n2. **这类 bug 全部静默。** 不报错、不 crash，只是内容被覆盖、被清空、被写到别的对象上。\n   它们的时间窗口往往极窄（只在一帧内、只在有思考流的请求里），所以第一反应都是「偶发」。\n\n3. **可迁移的动作**：任何异步 / 延迟 / 流式更新点，问两句 ——\n   **「这里读的『当前值』是谁写的？它和我要更新的那个对象一定是同一个吗？」**\n   答不干净，就在**创建任务时**把身份（id / 版本号 / 光标位置）显式捕获下来带进回调。\n   推论：**加载态（`null`）不是「不用处理」，而是最需要 flush 的时刻。**",
    "## 与既有 synthesis 的关系\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 讲「分层要有人执行」；本条是它在时序维度上的特例：\n  版本号/捕获的 id 就是那个「执行者」，没有它，分好的内存层与落盘层就会互相污染。\n- [口径先于数值](/wiki/agent-session/as-synthesis-%E5%8F%A3%E5%BE%84%E5%85%88%E4%BA%8E%E6%95%B0%E5%80%BC) —— 同源：先确定「这个值属于谁、是哪个时刻的」，再拿它做判断。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次前端 bug 的一个修法（加版本号、捕获 id、spread 合并）。\n并排之后才看得出它们共享**同一个根因假设**：用环境状态代替显式时序。\n这个形状与框架、业务无关，可以直接带走。",
    "## 相关\n\n- [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) / [延迟保存要捕获创建时的实体](/wiki/agent-session/as-concept-%E5%BB%B6%E8%BF%9F%E4%BF%9D%E5%AD%98%E8%A6%81%E6%8D%95%E8%8E%B7%E5%88%9B%E5%BB%BA%E6%97%B6%E7%9A%84%E5%AE%9E%E4%BD%93) / [流式更新要合并字段而非替换对象](/wiki/agent-session/as-concept-%E6%B5%81%E5%BC%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E5%90%88%E5%B9%B6%E5%AD%97%E6%AE%B5%E8%80%8C%E9%9D%9E%E6%9B%BF%E6%8D%A2%E5%AF%B9%E8%B1%A1)\n- [编辑器显示不能脱离真实光标状态](/wiki/agent-session/as-concept-%E7%BC%96%E8%BE%91%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B8%8D%E8%83%BD%E8%84%B1%E7%A6%BB%E7%9C%9F%E5%AE%9E%E5%85%89%E6%A0%87%E7%8A%B6%E6%80%81)\n- [对照才产生信息](/wiki/agent-session/as-synthesis-%E5%AF%B9%E7%85%A7%E6%89%8D%E4%BA%A7%E7%94%9F%E4%BF%A1%E6%81%AF)\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 同源：没有显式记录时，「最后写入 / 最后返回」就会冒充权威"
  ]
},
{
  "id": "as-synthesis-本地能跑不等于环境里能跑",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "本地能跑不等于环境里能跑",
  "oneLiner": "本地能跑不等于环境里能跑",
  "body": [
    "## # 本地能跑不等于环境里能跑",
    "## 结论\n\n> 你反复踩的是同一个坑：**「本地正常」被当成「环境正常」的证据。**\n> 但本地与环境跑的不是同一份东西 —— 不是同一段代码路径、不是同一套配置键、\n> 不是同一份可变状态（库 / 缓存 / 凭据）。\n> 判据一句话：**把两侧的差异项列出来，差异项就是唯一需要验证的清单。**",
    "## 五处证据：每一处都是「两侧根本不是同一份」\n\n| 出处 | 本地这一侧 | 环境那一侧 | 分叉点 |\n|---|---|---|---|\n| [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90) | 以为「只是本地开发」 | 实际连的是生产 Redis / 库 | 环境变量文件里写的就是生产值 |\n| [本地测试要显式覆盖数据源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E8%A6%81%E6%98%BE%E5%BC%8F%E8%A6%86%E7%9B%96%E6%95%B0%E6%8D%AE%E6%BA%90) | `.env.local`（软链到主目录） | 远程 / 生产数据源 | 数据源没被显式覆盖 |\n| 兼容端点要防SDK注入非标准字段 | 没配 `*_BASE_URL` → 走 SDK 内置原生 provider | 配了 relay → 走兼容层，被多塞一个字段 → 400 | 少一个环境变量就换了整条调用路径 |\n| [集成已合并不等于运行时已启用](/wiki/agent-session/as-concept-%E9%9B%86%E6%88%90%E5%B7%B2%E5%90%88%E5%B9%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E8%BF%90%E8%A1%8C%E6%97%B6%E5%B7%B2%E5%90%AF%E7%94%A8) | 本地有一套 key → 能 trace | 容器 env 里一个都没有 → 静默 noop | 能力在缺配置时静默关闭 |\n| [无入站流量的服务靠数据与配置隔离环境](/wiki/agent-session/as-concept-%E6%97%A0%E5%85%A5%E7%AB%99%E6%B5%81%E9%87%8F%E7%9A%84%E6%9C%8D%E5%8A%A1%E9%9D%A0%E6%95%B0%E6%8D%AE%E4%B8%8E%E9%85%8D%E7%BD%AE%E9%9A%94%E7%A6%BB%E7%8E%AF%E5%A2%83) | 另一个目录 / 另一个 compose 项目 | 连的仍是正式库 | 隔离看的是「共享了什么可变状态」 |\n\n旁证：agent 程序本机就能跑，却每次都只能部署到云端验证 —— 因为它不会自己读 `.env.local`，要显式喂给它（`clean/2026-07-29.md @ 21:36`）。",
    "## 综合判断\n\n1. **差异的来源不是「环境更差」，而是「环境里少了一个隐式默认」。** 本地常见的隐式默认：\n   没配 base URL 就 fallback 到 SDK 原生 provider、Next.js 自动读 `.env.local`、框架给的默认值。\n   这些默认在环境里往往不存在，或指向别处 —— 于是同一份代码在两侧走了两条路。\n\n2. **这类分叉全部静默。** 本地 200、线上 400；本地有 trace、线上零数据；本地连本地库、\n   线上连生产库。没有一条错误信息指向「你测的不是这一份」。\n\n3. **可迁移的动作**：任何「本地验证过了」之后，追问三句 ——\n   **「环境侧少了哪个默认？」「两侧的 provider 路径是同一段代码吗？」「两侧共享了哪些可变状态？」**\n   把差异项列成清单，逐项在环境里验证一次。\n\n4. **环境隔离的判据不是「部署在哪」，而是「共享了什么可变状态」。** 一个进程只要连了正式库，\n   就算部署在另一个目录、另一个 compose 项目里，也等于没有独立环境。",
    "## 与既有 synthesis 的关系\n\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 那条讲**观测点没落在执行路径末端**；本条讲**两侧的执行路径\n  根本不同**。前者是「看错了一份」，后者是「根本没有同一份」。\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 配置也是分层的一种：写进文件但没人读（或读到的是另一份），就等于不存在。\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 同族：改动只覆盖「未来经过这条路径的对象」。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个项目里的一次环境事故（连了生产库、relay 400、线上零 trace）。\n并排之后才看得出它们共享**同一个失败形状**：**把「一侧能跑」当成了「两侧同构」。**",
    "## 相关\n\n- [本地开发脚本可能连生产资源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%84%9A%E6%9C%AC%E5%8F%AF%E8%83%BD%E8%BF%9E%E7%94%9F%E4%BA%A7%E8%B5%84%E6%BA%90) / [本地测试要显式覆盖数据源](/wiki/agent-session/as-concept-%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E8%A6%81%E6%98%BE%E5%BC%8F%E8%A6%86%E7%9B%96%E6%95%B0%E6%8D%AE%E6%BA%90) / [无入站流量的服务靠数据与配置隔离环境](/wiki/agent-session/as-concept-%E6%97%A0%E5%85%A5%E7%AB%99%E6%B5%81%E9%87%8F%E7%9A%84%E6%9C%8D%E5%8A%A1%E9%9D%A0%E6%95%B0%E6%8D%AE%E4%B8%8E%E9%85%8D%E7%BD%AE%E9%9A%94%E7%A6%BB%E7%8E%AF%E5%A2%83)\n- 兼容端点要防SDK注入非标准字段 / [集成已合并不等于运行时已启用](/wiki/agent-session/as-concept-%E9%9B%86%E6%88%90%E5%B7%B2%E5%90%88%E5%B9%B6%E4%B8%8D%E7%AD%89%E4%BA%8E%E8%BF%90%E8%A1%8C%E6%97%B6%E5%B7%B2%E5%90%AF%E7%94%A8) / [改配置后要确认部署真的用了新配置](/wiki/agent-session/as-concept-%E6%94%B9%E9%85%8D%E7%BD%AE%E5%90%8E%E8%A6%81%E7%A1%AE%E8%AE%A4%E9%83%A8%E7%BD%B2%E7%9C%9F%E7%9A%84%E7%94%A8%E4%BA%86%E6%96%B0%E9%85%8D%E7%BD%AE)\n- [deploy目录是运行配方不是另一套应用](/wiki/agent-session/as-concept-deploy%E7%9B%AE%E5%BD%95%E6%98%AF%E8%BF%90%E8%A1%8C%E9%85%8D%E6%96%B9%E4%B8%8D%E6%98%AF%E5%8F%A6%E4%B8%80%E5%A5%97%E5%BA%94%E7%94%A8)"
  ]
},
{
  "id": "as-synthesis-权威终态到达后迟到的写不能覆盖它",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "权威终态到达后迟到的写不能覆盖它",
  "oneLiner": "权威终态到达后迟到的写不能覆盖它",
  "body": [
    "## # 权威终态到达后迟到的写不能覆盖它",
    "## 结论\n\n> 一旦**权威终态**到达（完成事件 / 用户已提交的新内容 / 已确认的结果），\n> 之后任何迟到、失败、补充的写都**不能**把它改回进行中或失败。\n> 判据一句话：**结算点前移到权威事件本身，而不是等流程自然走完。**",
    "## 四处证据：每一处都是「迟到的写赢了」\n\n| 出处 | 权威状态 | 迟到的写 | 症状 |\n|---|---|---|---|\n| [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83) | `turn.completed`（回答已完成） | 读 SSE 尾部时的 transport error → `catch` 用「半截 + failed」覆盖 | 完整回答被截断成半截，或像卡住 |\n| [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9) | 用户刚输入的新正文 | 晚返回的旧保存请求带回旧 `content_md` | 刚写的字被回退 |\n| [文件被回退先分清是工具还是并发会话](/wiki/agent-session/as-concept-%E6%96%87%E4%BB%B6%E8%A2%AB%E5%9B%9E%E9%80%80%E5%85%88%E5%88%86%E6%B8%85%E6%98%AF%E5%B7%A5%E5%85%B7%E8%BF%98%E6%98%AF%E5%B9%B6%E5%8F%91%E4%BC%9A%E8%AF%9D) | 已确认的编辑结果 | 另一个会话 / 工具又写了一次 | 文件被回退 |\n| 中间进展与最终回答要按phase区分 | 最终回答 | 中间进展被当普通消息同步 | 客户端收到一堆半截消息 |",
    "## 综合判断\n\n1. **「流程走完」和「结果已确定」是两件事。** HTTP 200 只代表响应头成功，不保证 body 读完；\n   流自然结束也不是结算点。一旦权威事件到达，后续的失败与补写就只是**噪声**。\n\n2. **降级全部静默。** 不会报错，只会「内容变短 / 变旧 / 状态回到进行中」——\n   所以第一反应往往是「偶发」。\n\n3. **可迁移的动作**：任何「终态 + 尾部处理」的链路，先问三句 ——\n   **「权威事件是哪一个？」「结算点在哪一行？」「终态之后的错误怎么处理？」**\n   第三问的正确答案是 **lifecycle reconciliation**：保留终态，不让 `catch` 覆盖。\n\n4. **时间窗口很窄是这类 bug 的常态**（只在一帧内、只在有思考流的请求里），\n   所以必须靠**结构**（结算点前移）而不是靠**复现**来修。",
    "## 与既有 synthesis 的关系\n\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 同源：把「谁最新」交给「谁最后返回 / 最后执行」。\n  本条是它在**终态**这一点的硬化版本：终态一旦确认就不可被降级。\n- [收尾要落到确定状态](/wiki/agent-session/as-synthesis-%E6%94%B6%E5%B0%BE%E8%A6%81%E8%90%BD%E5%88%B0%E7%A1%AE%E5%AE%9A%E7%8A%B6%E6%80%81) —— 一对：那条防「到不了终态」，本条防「终态被推翻」。\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 「流读完」是「回答完成」的代理，只在正常路径上一致。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次流式 / 编辑 / 并发写的事故。\n并排之后才看得出它们共享**同一个判据错误**：**用流程状态代替权威事件。**",
    "## 相关\n\n- [终态已到达后补写不能覆盖它](/wiki/agent-session/as-concept-%E7%BB%88%E6%80%81%E5%B7%B2%E5%88%B0%E8%BE%BE%E5%90%8E%E8%A1%A5%E5%86%99%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%AE%83) / [过期响应不能覆盖当前编辑内容](/wiki/agent-session/as-concept-%E8%BF%87%E6%9C%9F%E5%93%8D%E5%BA%94%E4%B8%8D%E8%83%BD%E8%A6%86%E7%9B%96%E5%BD%93%E5%89%8D%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9)\n- 中间进展与最终回答要按phase区分 / [停止与发送原地互换要加点击守卫](/wiki/agent-session/as-concept-%E5%81%9C%E6%AD%A2%E4%B8%8E%E5%8F%91%E9%80%81%E5%8E%9F%E5%9C%B0%E4%BA%92%E6%8D%A2%E8%A6%81%E5%8A%A0%E7%82%B9%E5%87%BB%E5%AE%88%E5%8D%AB)\n- [文件被回退先分清是工具还是并发会话](/wiki/agent-session/as-concept-%E6%96%87%E4%BB%B6%E8%A2%AB%E5%9B%9E%E9%80%80%E5%85%88%E5%88%86%E6%B8%85%E6%98%AF%E5%B7%A5%E5%85%B7%E8%BF%98%E6%98%AF%E5%B9%B6%E5%8F%91%E4%BC%9A%E8%AF%9D) / [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A)"
  ]
},
{
  "id": "as-synthesis-检索是一条分层链，单点替代整条链必然失效",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "检索是一条分层链，单点替代整条链必然失效",
  "oneLiner": "检索是一条分层链，单点替代整条链必然失效",
  "body": [
    "## # 检索是一条分层链，单点替代整条链必然失效",
    "## 结论\n\n> 你在知识库检索上踩的坑，形状是同一个：**把整条链的成败压在一个单点上。**\n> 「只建索引就算 RAG」「只匹配标题就算召回」「只按一个分数排序就算排序」\n> 「搜一次读一篇就算检索」「查询时现拼原文就算知识层」——\n> 检索不是组件，也不是一次搜索，而是**一条各层职责不同的链**；\n> 用单点替代整条链，失效时**不报错**，只表现为「搜不到 / 搜不准」。",
    "## 四层链，每层的失效模式不同\n\n| 层 | 职责 | 单点替代它的错误 | 出处 |\n|---|---|---|---|\n| **供给层** | 先把内容编译成可检索的知识层，而不是查询时拼原文 | 直接对原文做检索 | 知识库先编译再查而不是查询时拼原文、Agent读语义文件App读结构化存储 |\n| **召回层** | 词法 + 向量 + 字段权重，中文要分词 / `pg_trgm` | 只做标题 substring 匹配、按 token 长度打分、中文整句切 | [关键词检索的三个打分缺陷](/wiki/agent-session/as-concept-%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%89%E4%B8%AA%E6%89%93%E5%88%86%E7%BC%BA%E9%99%B7)、混合检索先用RRF融合 |\n| **融合 / 排序层** | 按**排名**融合（RRF），分数不可比就不要校准 | 把两路原始分数直接相加比较 | 混合检索先用RRF融合 |\n| **迭代层** | Agent 主导的 loop：先判难度定预算，读不通换查询，看覆盖度停止 | 「搜一次、读一篇」当作一次调用 | [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)、RAG是流程不是组件 |\n\n选源的判断另算一层：**冷门具体查询决定搜索源的选择**（[长尾查询](/wiki/agent-session/as-concept-%E9%95%BF%E5%B0%BE%E6%9F%A5%E8%AF%A2)）——\n源选错，后面所有层再对也救不回来。",
    "## 综合判断\n\n1. **检索是流程，不是组件。** `RAG = Retrieval → Augmentation → Generation`；只生成 embedding、\n   只做相似搜索，都只是链路的一段。判断「是不是 RAG」看的是链路，不是用了哪个库。\n\n2. **每一层都可以独立失效，且失效都静默。** 供给层没编译 → 搜到的是原文碎片；\n   召回层没分词 → 中文只按整句命中；融合层比分数 → 排序被量纲带偏；\n   迭代层缺 loop → 一次没命中就放弃。四层的症状都是「搜不到」，但修法完全不同 ——\n   所以「检索效果差」不是一个可行动的问题，**必须先问「差在哪一层」**（对照 [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B)）。\n\n3. **可迁移的动作**：任何「检索/搜索/推荐」效果问题，先按上表逐层问\n   **「这一层有没有被实现，还是被一个单点糊过去了？」**\n   找到那个被单点替代的层，就是根因所在。",
    "## 与既有 synthesis 的关系\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 那条讲分层要有人读才生效；本条讲**检索这条链的每一层都要真的被实现**，\n  缺一层就等于用单点替代整条链。\n- 按实际规模选型而不是按方案先进性 —— 重排器（cross-encoder）留成端口、第一版不上，是同一取向：\n  按当前规模决定这层要不要现在落地。\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 迭代层的停止条件看**覆盖度**（真值），不看命中数量（代理）。",
    "## 相关\n\n- RAG是流程不是组件\n- 混合检索先用RRF融合\n- [检索要按难度迭代](/wiki/agent-session/as-concept-%E6%A3%80%E7%B4%A2%E8%A6%81%E6%8C%89%E9%9A%BE%E5%BA%A6%E8%BF%AD%E4%BB%A3)\n- [关键词检索的三个打分缺陷](/wiki/agent-session/as-concept-%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%89%E4%B8%AA%E6%89%93%E5%88%86%E7%BC%BA%E9%99%B7)\n- 知识库先编译再查而不是查询时拼原文\n- [长尾查询](/wiki/agent-session/as-concept-%E9%95%BF%E5%B0%BE%E6%9F%A5%E8%AF%A2)\n- [短期记忆与长期记忆的边界](/wiki/agent-session/as-concept-%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%E4%B8%8E%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%E7%9A%84%E8%BE%B9%E7%95%8C) —— 检索索引不等于记忆，别把检索层当成记忆层\n- 答疑是功能层搜题只是手段层 —— 搜题只是这条链的一段，别把整条链的成败压在它身上"
  ]
},
{
  "id": "as-synthesis-「活」的能力取决于增量机制，而不是生成质量",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "「活」的能力取决于增量机制，而不是生成质量",
  "oneLiner": "「活」的能力取决于增量机制，而不是生成质量",
  "body": [
    "## # 「活」的能力取决于增量机制，而不是生成质量",
    "## 结论\n\n> 派生知识（wiki、索引、向量、摘要、洞察、推荐）能不能「活」，**不取决于它第一次生成得多好，\n> 而取决于它怎么跟着源变化**。所以选型/设计这类能力时，先问的不是「生成质量如何」，\n> 而是三件事：**谁触发更新？存量怎么补？旧结果怎么作废？**",
    "## 四处证据：判据都从「生成」换到了「增量」\n\n| 场合 | 只比「生成质量」会得到的结论 | 换成「增量机制」后的判据 | 出处 |\n|---|---|---|---|\n| [代码库知识工具的选型](/wiki/agent-session/as-topic-%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9F%A5%E8%AF%86%E5%B7%A5%E5%85%B7%E7%9A%84%E9%80%89%E5%9E%8B) | 几款工具都能生成漂亮的架构图 / 文档 | 谁是**自动 reindex**、谁要手动重生成；`.trellis/spec/` + `AGENTS.md` 本身就是已有的活机制，wiki 只是它的人读界面 | @08-01 11:42 |\n| [物化结果要按版本失效并增量刷新](/wiki/agent-session/as-concept-%E7%89%A9%E5%8C%96%E7%BB%93%E6%9E%9C%E8%A6%81%E6%8C%89%E7%89%88%E6%9C%AC%E5%A4%B1%E6%95%88%E5%B9%B6%E5%A2%9E%E9%87%8F%E5%88%B7%E6%96%B0) | 「洞察是存一次还是实时算」 | 存成**带版本的物化结果**：标版本、按触发条件作废、后台增量刷新；且**作废要精确到受影响的那几条**，不能每加一篇就重算全部 | @07-20 15:59 / 16:10 |\n| 派生数据只在写入时入队旧数据要单独回填 | 「检索不到就是没有」 | 入队若只挂在新建/更新事件上，**存量永远不被处理、失败任务永不复活**；必须显式回答回填与重试入口 | @07-28 17:20 |\n| [首次导入与增量更新要用不同规则](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E7%94%A8%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99) | 「抓 N 条」是一条规则 | 首次导入与定时增量是**两种任务**，共用一条固定条数规则会让首次的截断设置被后续增量立刻抵消 | @07-15 15:30 / 15:43 |",
    "## 综合判断\n\n1. **「生成一次」是廉价且可比的，「跟着变」才是分化点。** 四处的共同形状是：\n   候选方案在「生成」这一维上几乎无差别（都能生成、都挺好看），差异全部出现在\n   **增量**这一维上 —— 而这一维默认不可见，只有把「改一次源」这个动作想一遍才会暴露。\n\n2. **增量机制由三个必答问题定义**，缺一个就会出现「新数据正常、老数据永久缺失」的静默缺口：\n   - **触发**：谁在什么事件后重算（写入事件？定时？全量重建？）\n   - **存量**：上线这条逻辑之前已有的对象，谁把它们跑一遍（backfill / 迁移）\n   - **失效**：源变了之后，旧结果靠什么被判定为过期、谁来重算，范围多大\n\n3. **可迁移的动作**：评估任何「会随内容变化」的能力（知识库、索引、观测、推荐、缓存）时，\n   把「它生成得多好」划掉，强制回答上面三问 + 一句\n   **「改一次源，从触发到新结果可用要走几步、花多久？」**\n   答不上来 → 这个能力只是快照，不是「活」的。\n\n4. **推论：能「跟着变」的既有资产，优先级高于新造一套。** 代码库知识那一处的落法很典型 ——\n   项目里已经在被 agent 强加载的 spec + 规则文件，本身就是活的；新工具只有作为它的\n   人读界面（而不是替代品）才值得引入。",
    "## 与既有 synthesis 的关系\n\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 那条是**故障形状**（改对了但只有新对象受益，属于 bug 侧）；\n  本条是**选型/设计判据**（还没动手时，用增量机制筛方案）。同源但动作不同：\n  一个用于复盘「为什么修了没用」，一个用于事前「该选哪个 / 该先设计哪一步」。\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 那条解决「谁最新」（乱序写入的仲裁）；\n  本条解决「谁负责让结果追上源」。\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 派生结果的「版本 / 失效依据」正是按寿命分层的具体落法。\n- 按实际规模选型而不是按方案先进性 —— 同族选型判据：那条按「规模与边界」选，\n  本条按「增量机制」选。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个具体场合的判断（选 wiki 工具、设计洞察的刷新、排查检索不到、定抓取条数）。\n并排之后才看得出它们共享**同一条换维度的动作**：从「生成得怎么样」换到「怎么跟着变」。",
    "## 相关\n\n- [代码库知识工具的选型](/wiki/agent-session/as-topic-%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9F%A5%E8%AF%86%E5%B7%A5%E5%85%B7%E7%9A%84%E9%80%89%E5%9E%8B) / [物化结果要按版本失效并增量刷新](/wiki/agent-session/as-concept-%E7%89%A9%E5%8C%96%E7%BB%93%E6%9E%9C%E8%A6%81%E6%8C%89%E7%89%88%E6%9C%AC%E5%A4%B1%E6%95%88%E5%B9%B6%E5%A2%9E%E9%87%8F%E5%88%B7%E6%96%B0)\n- 派生数据只在写入时入队旧数据要单独回填 / [首次导入与增量更新要用不同规则](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E7%94%A8%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99)\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) / [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A)\n- 知识库先编译再查而不是查询时拼原文 —— 供给层的另一面：编译产物同样需要刷新机制"
  ]
},
{
  "id": "as-synthesis-用户价值要在循环内被验证",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "用户价值要在循环内被验证",
  "oneLiner": "用户价值要在循环内被验证",
  "body": [
    "## # 用户价值要在循环内被验证",
    "## 结论\n\n> **交付合同（验收标准）的边界，就是耗时与风险的边界。**\n> 合同定成「整个大目标」时，用户价值会被推到最后一刻才第一次被验证 ——\n> 前面所有时间都花在「只有真实链路才会暴露的 bug」和「没人看的过程」上。",
    "## 证据\n\n| 出处 | 合同 / 范围定成了什么 | 结果 |\n|---|---|---|\n| [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98) | 「完整方案」被理解成「所有东西同一阶段交付」 | 正确形态应是「全量架构 + 分阶段落地 + 风险门控」 |\n| 一次循环只做一个可体验的v1能力 | 循环范围是可体验的最小完整能力 | 既不是小补丁，也不是多周路线图 |\n| 修复范围分保守彻底与最小闭环 | 只给「只改表层 / 从头重构」两档 | 缺了第三档：修在正确的层，但只加一个字段 |\n| 子issue是发现新范围的结果 | 范围在执行中才被发现 | 说明「合同一次定死」本身不现实，只能靠分级切分 |\n| 候选（原「交付合同的边界就是耗时的边界」） | 验收合同是「网站能用上 Agent」这一整包 | 4 小时里约 1 小时修真实链路 bug、约 35 分钟构建并跨公网传近 1GB 镜像，**用户价值到后半段才第一次被验证**（@07-29 16:32，已核实） |\n\n> 该候选此前因时间戳未核实而未登记；本轮已核对 `clean/2026-07-29.md @ 16:32` 真实存在，故正式并入。",
    "## 综合判断\n\n1. **合同 = 验收标准 = 用户价值验证点。** 把合同定成整个目标，等于把唯一的验证点推到最末端；\n   中间任何环节超时，用户就一次都没看到价值。\n\n2. **合同要按「用户能体验到的能力」切，而不是按「技术模块」切。** 技术模块切分（对话 + workflow\n   + 观测 + 回填 + 运维）会让每一块都不产生可体验的价值，直到最后拼起来。\n\n3. **可迁移的动作**：接任何交付任务时，先问三句 ——\n   **「用户在这一轮能看到什么？」「这一轮的验收标准是什么？」「剩下的部分下一轮怎么接？」**\n   三句答不上来，就先把合同改小，而不是先把活干起来。\n\n4. **推论**：风险要前移到「真实链路第一次被跑通」的那一刻，而不是留到收尾。",
    "## 与既有 synthesis 的关系\n\n- 按实际规模选型而不是按方案先进性 —— 同源：判据是「这一侧的真实边界」，不是「方案完不完整」。\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 用户认账才是闭环；本页讲的是让认账**尽早发生**。\n- [收尾要落到确定状态](/wiki/agent-session/as-synthesis-%E6%94%B6%E5%B0%BE%E8%A6%81%E8%90%BD%E5%88%B0%E7%A1%AE%E5%AE%9A%E7%8A%B6%E6%80%81) —— 同族：没有明确终态的交付，会一直「没完成」。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次范围 / 排期的判断。\n并排之后才看得出它们共享**同一个取舍**：**合同边界决定了价值被验证的时点。**",
    "## 相关\n\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98) / 一次循环只做一个可体验的v1能力\n- 修复范围分保守彻底与最小闭环 / 子issue是发现新范围的结果\n- [地基阶段先跑通基础件再谈抽象](/wiki/agent-session/as-concept-%E5%9C%B0%E5%9F%BA%E9%98%B6%E6%AE%B5%E5%85%88%E8%B7%91%E9%80%9A%E5%9F%BA%E7%A1%80%E4%BB%B6%E5%86%8D%E8%B0%88%E6%8A%BD%E8%B1%A1)"
  ]
},
{
  "id": "as-synthesis-真源要按维度显式指定",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "真源要按维度显式指定",
  "oneLiner": "真源要按维度显式指定",
  "body": [
    "## # 真源要按维度显式指定",
    "## 结论\n\n> 同一份东西出现在两处时，「谁是对的」**没有全局答案**。\n> 你踩过的每一次「以哪边为准」的坑，根因都是**默认了一个不成立的伪规则**：\n> 「谁新用谁」「谁全用谁」「谁在代码里用谁」「谁看起来像就用谁」。\n> 正确的动作是：**先按维度把真源写死，再谈同步。**",
    "## 八处证据：伪规则各不相同，形状完全一样\n\n| 出处 | 被默认的伪规则 | 显式指定后 |\n|---|---|---|\n| [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90) | 「整体取更新的那个源」 | skill 正文 → 上游；协议字段 → 本地；以上游为基线再叠本地改造 |\n| [作者是AI时协议要唯一规范答案](/wiki/agent-session/as-concept-%E4%BD%9C%E8%80%85%E6%98%AFAI%E6%97%B6%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%94%AF%E4%B8%80%E8%A7%84%E8%8C%83%E7%AD%94%E6%A1%88) | 「同一个名字在哪层出现都能对上」 | 一个概念只留**一个**规范写法，其余一律 deprecated；校验器可自动拦 |\n| Agent读语义文件App读结构化存储 | 「数据库和文件都是真源」 | Markdown 是唯一真源，SQLite 是**可重建的派生层** |\n| [导入要保留来源类型以选对渲染链](/wiki/agent-session/as-concept-%E5%AF%BC%E5%85%A5%E8%A6%81%E4%BF%9D%E7%95%99%E6%9D%A5%E6%BA%90%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%80%89%E5%AF%B9%E6%B8%B2%E6%9F%93%E9%93%BE) | 「落库了就是一条内容」 | 来源类型（`kind`）本身也是真源的一部分，决定后续走哪条渲染链 |\n| [多源更新按维度取真源](/wiki/agent-session/as-concept-%E5%A4%9A%E6%BA%90%E6%9B%B4%E6%96%B0%E6%8C%89%E7%BB%B4%E5%BA%A6%E5%8F%96%E7%9C%9F%E6%BA%90)（协议侧） | 「文档说了就等于运行时是那样」 | 每个字段的真源要能被校验发现「还没同步的层」 |\n| [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A) | 「先写同步协议，真源自然就有了」 | 先定「谁是数据权威」，同步 / 迁移 / 冲突 / 离线都是它的下游推论 |\n| 同名provider冲突会让模型路由漂移 | 「provider id 叫这个名字就是我那个」 | 同一维度（provider id）允许 ≥2 个候选时，解析会命中内置的那个 |\n| [凭据来源不唯一会让客户端反复刷新](/wiki/agent-session/as-concept-%E5%87%AD%E6%8D%AE%E6%9D%A5%E6%BA%90%E4%B8%8D%E5%94%AF%E4%B8%80%E4%BC%9A%E8%AE%A9%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%8F%8D%E5%A4%8D%E5%88%B7%E6%96%B0) | 「文件里有哪套凭据就用哪套」 | `auth_mode` 声明的是 OAuth、文件里却并存中转 `OPENAI_API_KEY` → 两套刷新逻辑互相触发 |",
    "## 综合判断\n\n1. **「谁新 / 谁全 / 谁像」都不是判据，只有「哪个维度归哪一层」是。**\n   新旧是逐维度判定的：上游 skill 正文更新 ≠ 本地协议改造过时。\n   一旦把两个维度绑成一次「整体选择」，必然丢东西 —— 丢掉的那部分**不会报错**。\n\n2. **同一维度允许 ≥2 个候选，解析就会命中错的那个。**\n   真源写死的意义不只是「选一个」，而是**保证候选只有一个**。\n   多源并存（同名 provider、两套凭据来源）时，解析层没有判据可用，只能按某种隐式优先级猜 ——\n   而猜错的表现（路由漂移、反复刷新）看起来像另一类 bug。\n\n3. **真源不显式，就会退化成「最后写入者胜」。**\n   这和 [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) 是同一件事的两面：\n   一个是「谁最后返回就算谁新」，一个是「谁最后改就算谁对」。\n   两者都发生在**没有显式记录**的地方。\n\n4. **派生层必须是可重建的，否则它就偷偷变成了第二个真源。**\n   「Markdown 为真源、SQLite 可重建」之所以成立，前提是**允许丢掉 SQLite 重建**。\n   任何「两边都不能丢」的设计，实际上就是两个真源。\n\n5. **可迁移的动作**：拿到任何一份有多处副本的产物，先答三句 ——\n   **「这个字段的真源在哪？」「另一处是派生还是独立？」「派生层能不能重建？」**\n   三句里有一句答不上来，这次同步就只是在制造不一致。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个项目的局部约定（skill 从哪拉、库存在哪、导入留哪个字段）。\n并排之后才看得出它们共享**同一个缺口**：**没有把「谁说了算」写成显式规则**。\n而这个缺口独立于任何项目，只要存在多处副本就会复现。",
    "## 相关\n\n- [定义要由使用者确认](/wiki/agent-session/as-synthesis-%E5%AE%9A%E4%B9%89%E8%A6%81%E7%94%B1%E4%BD%BF%E7%94%A8%E8%80%85%E7%A1%AE%E8%AE%A4) —— 同源：真源归属与定义权归属都要显式\n- [数据权威模型要先于同步与迁移确定](/wiki/agent-session/as-concept-%E6%95%B0%E6%8D%AE%E6%9D%83%E5%A8%81%E6%A8%A1%E5%9E%8B%E8%A6%81%E5%85%88%E4%BA%8E%E5%90%8C%E6%AD%A5%E4%B8%8E%E8%BF%81%E7%A7%BB%E7%A1%AE%E5%AE%9A) —— 同一个缺口在「多端产品」上的形态：真源不定，同步协议无从写起\n- [更新时序要由本地最新状态决定](/wiki/agent-session/as-synthesis-%E6%9B%B4%E6%96%B0%E6%97%B6%E5%BA%8F%E8%A6%81%E7%94%B1%E6%9C%AC%E5%9C%B0%E6%9C%80%E6%96%B0%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A) —— 同一缺口的另一面：谁最后返回 ≠ 谁最新\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 真源写进文档还不够，要被校验/消费\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 分层的依据之一是「谁可重建」"
  ]
},
{
  "id": "as-synthesis-职责要先分家，再谈实现",
  "updatedAt": "2026-09-21",
  "wikiSlug": "agent-session",
  "term": "职责要先分家，再谈实现",
  "oneLiner": "职责要先分家，再谈实现",
  "body": [
    "## # 职责要先分家，再谈实现",
    "## 结论\n\n> 你反复遇到的是同一个形状：**两个本质上不同的东西被当成一个在讨论** ——\n> 于是同步、缓存、编排、选型全都在错误的前提下叠加。\n> 判断是：**先问「这两件事各自的职责边界在哪」，把分家显式写下来，再谈怎么实现。**\n> 分家的依据是**职责**，不是相似度 —— 长得像、名字像、恰好由同一套基础设施承载，都不构成「该合成一件」。",
    "## 四处证据\n\n| 场合 | 被混为一谈的两件事 | 分家之后的规则 |\n|---|---|---|\n| 产品能力 vs AI Agent | 确定性、短时、单步（文章总结 / 打标） | 拆成两个运行体：`packages/ai` 降级为模型适配与通用原语，编排/状态/工具独立成 `agent-server` |\n| [首次导入与增量更新要用不同规则](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E7%94%A8%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99) | 订阅时的历史导入 vs 固定时间更新新文章 | 两条独立任务：首次导入单独跑，cron 只管「有多少新文章读多少」，不能共用一条固定条数规则 |\n| [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7) | 「有网时少一次往返」vs「断网可增删改」 | 三个等级分别实现与验收，不塞进同一个 Issue |\n| [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) | 「现在谁在做什么」vs「可复用的知识」 | 分文件分层：`status` 管现在、`registry` 管复用、`lesson` 管教训；把「当前状态」写进「长期知识」会让下一层失真 |",
    "## 综合判断\n\n1. **分家的依据是职责，不是相似度。** 四处被混在一起的两件事，都是「恰好长在同一套东西上」：\n   同一份 `packages/ai`、同一条 cron、同一套 IndexedDB、同一个协作目录。**承载相同 ≠ 职责相同。**\n\n2. **没分家的症状统一是「互相污染 / 各说各话」，而且不报错。**\n   缓存的语义被离线编辑污染、cron 的规则被首次导入污染、可复用知识被当前进度污染 ——\n   每一个都表现为「说不清 / 越改越乱」，没有一条报错信息指向「你少分了一次家」。\n\n3. **可迁移的动作**：当出现「这块到底算谁的」时，先写一句\n   **「A 负责…，B 负责…」**，确认两者**没有重叠、也没有缺口**，再动手实现。\n   分家的产物是一句可写在文档里的话，不是一个更复杂的架构。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个系统里的一次边界调整（AI 架构、抓取策略、缓存档位、协作目录）。\n并排之后才看得出它们共享**同一个动作**：先把混在一起的两件事按职责分开，再谈实现。\n这个动作独立于任何系统，可以直接带走。",
    "## 相关\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 分完家还要有人执行边界，否则等于没分\n- [契约只承载结构，个性留给扩展层](/wiki/agent-session/as-synthesis-%E5%A5%91%E7%BA%A6%E5%8F%AA%E6%89%BF%E8%BD%BD%E7%BB%93%E6%9E%84%EF%BC%8C%E4%B8%AA%E6%80%A7%E7%95%99%E7%BB%99%E6%89%A9%E5%B1%95%E5%B1%82) —— 层与层之间怎么切界\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A) —— 同一份数据也要按维度分家\n- [可复用物与不可复用物分开](/wiki/agent-session/as-synthesis-%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E4%B8%8E%E4%B8%8D%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%89%A9%E5%88%86%E5%BC%80) —— 按寿命分家；本条按职责分家\n- 按实际规模选型而不是按方案先进性 —— 同源：先量清这一侧，再谈方案\n- [观测平台不能当运行状态真相源](/wiki/agent-session/as-concept-%E8%A7%82%E6%B5%8B%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%BD%93%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%E7%9C%9F%E7%9B%B8%E6%BA%90) —— 同形的另一处实例：数据库决定 Agent 在做什么，观测平台解释它为什么这样做\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) / [离线存储的三个等级](/wiki/agent-session/as-concept-%E7%A6%BB%E7%BA%BF%E5%AD%98%E5%82%A8%E7%9A%84%E4%B8%89%E4%B8%AA%E7%AD%89%E7%BA%A7) / [首次导入与增量更新要用不同规则](/wiki/agent-session/as-concept-%E9%A6%96%E6%AC%A1%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E8%A6%81%E7%94%A8%E4%B8%8D%E5%90%8C%E8%A7%84%E5%88%99)"
  ]
},
{
  "id": "as-synthesis-能力被环境差异静默改变",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "能力被环境差异静默改变",
  "oneLiner": "能力被环境差异静默改变",
  "body": [
    "## # 能力被环境差异静默改变",
    "## 结论\n\n> **「同一个请求 / 同一个开关 / 同一个模型名」都不保证「同一条执行路径」。**\n> 两侧都返回成功，而能力其实已经不同 —— 差异只在最末端的请求与响应里才看得见。\n> 判据一句话：**观测点必须落在真正发出的那次调用上（实际模型 ID 与参数），\n> 而不是前端开关、请求别名或配置声明。**",
    "## 七处证据：每一处都是「名字一样，路径不同」\n\n| 出处 | 你看到的 | 实际执行的 | 差异在哪 |\n|---|---|---|---|\n| 兼容端点要防SDK注入非标准字段 | 同一个模型、同一份代码 | 本地走 SDK 原生 provider；生产走 relay 兼容层 | 少一个 base URL 就换了整条路径 |\n| [开关要映射到模型调用才算生效](/wiki/agent-session/as-concept-%E5%BC%80%E5%85%B3%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E6%89%8D%E7%AE%97%E7%94%9F%E6%95%88) | 前端开了「深度思考」、参数也透传了 | 真正发给 provider 的请求里有没有推理参数 | 观测里的 reasoning 为空 |\n| 请求别名不等于实际模型ID | 请求里的模型名 | provider 响应 `model` 返回的实际 ID | 别名与实体是两回事 |\n| [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6) | 同一个模型名 | 可能在国内版 / 国际版账号间混合调用 | 路由是 model-aware，不是账号轮询 |\n| 模型ID是入口相关的 | 同一个模型名 | 各入口清单里注册的 ID 不同（裸名 vs `provider/` 前缀） | 合法性由**末端网关的模型表**决定，不由「别处能跑」决定 |\n| 同名provider冲突会让模型路由漂移 | 配置里写的是自己的自定义 provider | 同名冲突下请求发给了内置后端 | 解析归属时**名字压过了身份**，且配置看起来没变 |\n| 模型ID是入口相关的（第三例） | `config.toml` 里默认 `model = \"gpt-6-astra\"` | 官方账号下该名字不存在（第三方模型名），请求必然 400 | 同一个名字在不同**入口 / 账号**下可用性不同（@09-23 21:41） |\n\n旁证：模型可见性按入口分批 —— 同一账号在网页端 / API / CLI 三个入口的模型可用性不同步，\n「我没有这个模型」不是操作错，而是灰度分批。",
    "## 综合判断\n\n1. **能力是一个「运行时事实」，不是「配置事实」。** 配置里写了、请求里带了，都可能被中间的\n   兼容层、路由层、灰度层改写或丢弃 —— 而且不报错。\n\n2. **验证必须落到最末端。** 可用的证据只有两类：真正发出去的那次请求（含实际参数）、\n   真正回来的那次响应（含实际模型 ID）。其余都是代理。\n\n3. **可迁移的动作**：任何「开关 / 模型 / 能力是否生效」的判断，先问三句 ——\n   **「真正执行的是哪一个实体？」「参数是在哪一层被消费的？」「响应里能证明它吗？」**\n   三句都答得上，才算生效。\n\n4. **与 [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91) 是同一枚硬币的两面**：那条讲两侧路径不同，\n   本条讲**同一侧内部也会因为名字与实体分离而不同**。",
    "## 与既有 synthesis 的关系\n\n- [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86) —— 开关、别名、配置声明都是代理；真值是末端那次调用。\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91) —— 上游：路径为什么不同。\n- [能力要靠消费方认账](/wiki/agent-session/as-synthesis-%E8%83%BD%E5%8A%9B%E8%A6%81%E9%9D%A0%E6%B6%88%E8%B4%B9%E6%96%B9%E8%AE%A4%E8%B4%A6) —— 同族：能力要有人（这里是末端调用）真正认账。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某次模型 / 开关的排查。\n并排之后才看得出它们共享**同一个判据错误**：**用名字与声明代替了末端事实。**",
    "## 相关\n\n- 兼容端点要防SDK注入非标准字段 / [开关要映射到模型调用才算生效](/wiki/agent-session/as-concept-%E5%BC%80%E5%85%B3%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E6%89%8D%E7%AE%97%E7%94%9F%E6%95%88)\n- 请求别名不等于实际模型ID / 模型可见性按入口分批 / [多账号模型路由机制](/wiki/agent-session/as-concept-%E5%A4%9A%E8%B4%A6%E5%8F%B7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E6%9C%BA%E5%88%B6)\n- 模型ID是入口相关的 / 同名provider冲突会让模型路由漂移\n- [本地能跑不等于环境里能跑](/wiki/agent-session/as-synthesis-%E6%9C%AC%E5%9C%B0%E8%83%BD%E8%B7%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E7%8E%AF%E5%A2%83%E9%87%8C%E8%83%BD%E8%B7%91) / [判据要用真值而非代理](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%8D%AE%E8%A6%81%E7%94%A8%E7%9C%9F%E5%80%BC%E8%80%8C%E9%9D%9E%E4%BB%A3%E7%90%86)"
  ]
},
{
  "id": "as-synthesis-能力要靠消费方认账",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "能力要靠消费方认账",
  "oneLiner": "能力要靠消费方认账",
  "body": [
    "## # 能力要靠消费方认账",
    "## 结论\n\n> **一个能力有没有，不由「你这边做了多少」决定，而由「对面认不认」决定。**\n> 你反复遇到的失败形状是：**自己这一侧全部就绪 —— 代码写了、参数传了、bridge 起了、\n> 配置文件在、按钮在 —— 但对面那一侧根本不看它。** 症状统一是「做了但没用」，且不报错。\n>\n> 判据一句话：**这个能力依赖的每一项，谁在对面认账？** 答不出认账方，就等于没做。",
    "## 九处证据\n\n| 出处 | 自己这侧做了 | 对面没认账的是什么 | 症状 |\n|---|---|---|---|\n| 远程控制本机Agent要让bridge跑在本机 | bridge 跑在云服务器上，功能全对 | **文件系统**在 Mac 上，不在服务器上 | 能连上、能对话，但看不到 `/Users/...` |\n| [移动应用正式分发需要签名](/wiki/agent-session/as-concept-%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E6%AD%A3%E5%BC%8F%E5%88%86%E5%8F%91%E9%9C%80%E8%A6%81%E7%AD%BE%E5%90%8D) | 打包成功、装得上 | **系统**只认受信任开发者的签名 | 装上了却白屏 / 打不开 |\n| [运行时依赖属于平台不属于业务代码](/wiki/agent-session/as-concept-%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BE%9D%E8%B5%96%E5%B1%9E%E4%BA%8E%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%B1%9E%E4%BA%8E%E4%B8%9A%E5%8A%A1%E4%BB%A3%E7%A0%81) | 业务代码里找了半天没引入 | 依赖由**运行时**注入（Hermes），不在 `package.json` | 反复怀疑自己引错了东西 |\n| [改协议要同时改两端](/wiki/agent-session/as-concept-%E6%94%B9%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%90%8C%E6%97%B6%E6%94%B9%E4%B8%A4%E7%AB%AF) | bridge 侧协议已改 | **客户端监听**的是另一套连接 | 设置页显示「已连上」，聊天页没反应 |\n| [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) | 控件传出了 `--heading-gap` | **模板 CSS** 里根本没这个变量 | 「调了没反应」，不报错 |\n| [环境变量校验要按模块懒加载](/wiki/agent-session/as-concept-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E6%A0%A1%E9%AA%8C%E8%A6%81%E6%8C%89%E6%A8%A1%E5%9D%97%E6%87%92%E5%8A%A0%E8%BD%BD) | 变量都声明在 `env.ts` | **启动流程**一刀切校验，未开发模块也拦 | 只想登录，却因 AI key 缺失起不来 |\n| worktree是独立目录产物与配置都隔离 | 主目录里改了 `.env.local`、重启了服务 | **你访问的是另一个目录**的产物 | 「改了环境变量不生效」 |\n| [手机后台推送要靠服务端远程推送](/wiki/agent-session/as-concept-%E6%89%8B%E6%9C%BA%E5%90%8E%E5%8F%B0%E6%8E%A8%E9%80%81%E8%A6%81%E9%9D%A0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%BF%9C%E7%A8%8B%E6%8E%A8%E9%80%81) | 本地通知、前台 WebSocket 都写好了 | **iOS 系统**会在退后台时挂起 App | 电脑上跑完了，手机没推 |\n| [能力链路打通不等于默认开启](/wiki/agent-session/as-concept-%E8%83%BD%E5%8A%9B%E9%93%BE%E8%B7%AF%E6%89%93%E9%80%9A%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%BC%80%E5%90%AF) | 模型原生支持 + `thinking_delta` 事件转发 + 用量统计 + 前端思考块 UI，链路全通 | **调用参数**：路由里 `thinkingLevel` 除 Deep Insight 外恒为 `off` | 普通对话看不到思考过程，像是「没这个能力」 |",
    "## 综合判断\n\n1. **「我这边就绪」和「能力可用」之间隔着一个别人的判定。**\n   九处的对面分别是：另一台机器的文件系统、手机系统、运行时、客户端、模板 CSS、启动流程、\n   另一个工作目录、iOS 后台策略、发给 provider 的调用参数。它们有一个共同点 ——\n   **它们都不是你写代码的那个地方**。\n\n   推论：**「对面认账」不总是别人的系统，也可能只是你自己链路里最后那一行参数。**\n   开关类能力的最后一跳（`thinkingLevel`、`reasoning_effort`）最容易漏，因为前面的链路\n   全都看得见、都正常，只有末端那一次请求里没有它。开启与否往往还是**成本决策**\n   （延迟 + reasoning token），所以合理形态是按用途分级，而不是全局一刀切。\n\n2. **所以排查方向应当是「从消费方倒推」，不是「从实现方顺推」。**\n   顺着自己的代码查，永远查不出问题：代码确实是对的，只是没人在对面读它。\n   这也解释了为什么这些坑全都不报错 —— **对面不认账不是错误，是沉默。**\n\n3. **可迁移的动作**：任何一个「能力没生效」的现象，先画一张两栏表 ——\n   **左栏「我这边提供了什么」，右栏「谁在对面读它、以什么形式读」。**\n   右栏为空的那一行就是根因。补充动作：**确认你操作的那一份，就是你运行时读的那一份**\n   （worktree / 运行目录 / 产物版本 —— 见 [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)）。",
    "## 与既有 synthesis 的关系\n\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) —— 讲「约束要有人读」；本条把「有人」具体化成**对面那一侧**：\n  分层失败往往不是没写校验器，而是校验器/消费方在另一台机器、另一个目录、另一个进程里。\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91) —— 讲「新逻辑要覆盖存量对象」；本条讲「新逻辑要覆盖对面的读取方」。\n  两条合起来是同一句：**生效 = 有执行者 × 所有对象都会经过它 × 执行者在正确的机器上。**\n- [先定位归属层再动手](/wiki/agent-session/as-synthesis-%E5%85%88%E5%AE%9A%E4%BD%8D%E5%BD%92%E5%B1%9E%E5%B1%82%E5%86%8D%E5%8A%A8%E6%89%8B) —— 本条是它在「能力建设」侧的镜像：先定位**认账方**在哪一层，再动手。",
    "## 为什么这是 synthesis\n\n单看每一页，都是某个领域的常识（bridge 要跑本机、App 要签名、hook 脚本要适配器）。\n并排之后才看得出它们共享**同一个失败形状**：**提供方就绪 ≠ 消费方认账**。\n这个形状与平台无关，可以直接带走。",
    "## 相关\n\n- 远程控制本机Agent要让bridge跑在本机 / [移动应用正式分发需要签名](/wiki/agent-session/as-concept-%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E6%AD%A3%E5%BC%8F%E5%88%86%E5%8F%91%E9%9C%80%E8%A6%81%E7%AD%BE%E5%90%8D) / [运行时依赖属于平台不属于业务代码](/wiki/agent-session/as-concept-%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BE%9D%E8%B5%96%E5%B1%9E%E4%BA%8E%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%B1%9E%E4%BA%8E%E4%B8%9A%E5%8A%A1%E4%BB%A3%E7%A0%81)\n- [改协议要同时改两端](/wiki/agent-session/as-concept-%E6%94%B9%E5%8D%8F%E8%AE%AE%E8%A6%81%E5%90%8C%E6%97%B6%E6%94%B9%E4%B8%A4%E7%AB%AF) / [控件参数要在下游被消费](/wiki/agent-session/as-concept-%E6%8E%A7%E4%BB%B6%E5%8F%82%E6%95%B0%E8%A6%81%E5%9C%A8%E4%B8%8B%E6%B8%B8%E8%A2%AB%E6%B6%88%E8%B4%B9) / [环境变量校验要按模块懒加载](/wiki/agent-session/as-concept-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E6%A0%A1%E9%AA%8C%E8%A6%81%E6%8C%89%E6%A8%A1%E5%9D%97%E6%87%92%E5%8A%A0%E8%BD%BD) / [能力链路打通不等于默认开启](/wiki/agent-session/as-concept-%E8%83%BD%E5%8A%9B%E9%93%BE%E8%B7%AF%E6%89%93%E9%80%9A%E4%B8%8D%E7%AD%89%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%BC%80%E5%90%AF)\n- worktree是独立目录产物与配置都隔离 / [手机后台推送要靠服务端远程推送](/wiki/agent-session/as-concept-%E6%89%8B%E6%9C%BA%E5%90%8E%E5%8F%B0%E6%8E%A8%E9%80%81%E8%A6%81%E9%9D%A0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%BF%9C%E7%A8%8B%E6%8E%A8%E9%80%81)\n- [分层要落到运行时才有效](/wiki/agent-session/as-synthesis-%E5%88%86%E5%B1%82%E8%A6%81%E8%90%BD%E5%88%B0%E8%BF%90%E8%A1%8C%E6%97%B6%E6%89%8D%E6%9C%89%E6%95%88) / [功能缺失先确认运行的是哪份产物](/wiki/agent-session/as-concept-%E5%8A%9F%E8%83%BD%E7%BC%BA%E5%A4%B1%E5%85%88%E7%A1%AE%E8%AE%A4%E8%BF%90%E8%A1%8C%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%BD%E4%BA%A7%E7%89%A9)\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD) —— 一个具体的「不认账方」：你查的不是它正在跑的那份"
  ]
},
{
  "id": "as-knowledge-base-权威wiki是索引加精选知识",
  "updatedAt": "2026-09-22",
  "wikiSlug": "agent-session",
  "term": "权威wiki是索引加精选知识",
  "oneLiner": "**权威 Wiki 的作用不是「让文档更好看」，而是给人和 Agent 一个统一的 Project Truth（项目事实入口）：Linear 告诉 Agent「这次要做什么」，权威 Wiki 告诉 Agent「这个项目长期怎么运转、为什么这样设计、哪些边界不能碰」。**",
  "body": [
    "## 它解决的五个问题\n\n1. **消除信息散落** —— 重要知识散在 PRD、架构文档、`.trellis/spec/`、`AGENTS.md`、Linear comment、lesson、历史会话、部署脚本与 `.env`、以及人脑里。没有统一入口时，新 agent 每次都要重新调查，甚至按残缺信息自行推测。\n2. **给多 agent 共同认知** —— 不同平台的 Codex / Claude / Qoder 不共享会话记忆，但都可以从同一 Wiki 开始：开始 issue → 读对应页面 → 加载相关 spec 与 lesson → 再形成实施计划。这就是跨 agent 的 Shared Context，减少「换一个 agent 就从头解释」。\n3. **解释「为什么」** —— 代码只能说「现在怎么写」，不能说明为什么区分 `apps/agent` 与 `apps/ai-workflows`、为什么测试与正式环境必须隔离、为什么服务器只 `docker pull`、为什么某种实现曾被否决。这些属于 Architecture / ADR（架构决策记录）/ Operations 页。\n4. **成为自动验收的依据** —— 主管 agent 据此判断是否违反模块边界、是否遗漏环境配置、是否该新增 ADR、实现是否重蹈已有 lesson。**没有权威资料，主管 agent 的「验收」本质上只是凭模型常识猜测。**\n5. **降低人的注意力开销** —— 已有事实查 Wiki、已有坑点查 Lesson、已有规范查 Spec，**只有真正的新产品选择才来问你**。",
    "## 边界：Wiki ≠ 把所有东西复制进来\n\n它是 **Index + Curated Knowledge（索引 + 精选知识）**，不是文档垃圾场。它可以（也应该）引用其他事实源：具体规则留在 spec，具体 issue 进展留在 Linear，Wiki 只负责告诉读者「应该去哪里找到什么」。\n\n⇒ 判据：**这条内容是不是「长期有效、跨 issue 使用」的？** 是 → Wiki；只在某个 issue 内有效 → 任务目录 / Linear；只是过程记录 → journal。",
    "## 相关\n\n- Agent读语义文件App读结构化存储\n- [知识入库的筛选标准](/wiki/agent-session/as-concept-%E7%9F%A5%E8%AF%86%E5%85%A5%E5%BA%93%E7%9A%84%E7%AD%9B%E9%80%89%E6%A0%87%E5%87%86)\n- 协作规则要入Git才算项目资产\n- [多Agent协作控制面](/wiki/agent-session/as-topic-%E5%A4%9AAgent%E5%8D%8F%E4%BD%9C%E6%8E%A7%E5%88%B6%E9%9D%A2) —— 权威 Wiki 是控制面的知识层入口\n- [真源要按维度显式指定](/wiki/agent-session/as-synthesis-%E7%9C%9F%E6%BA%90%E8%A6%81%E6%8C%89%E7%BB%B4%E5%BA%A6%E6%98%BE%E5%BC%8F%E6%8C%87%E5%AE%9A)\n- 知识库先编译再查而不是查询时拼原文"
  ]
},
{
  "id": "as-product-先恢复可信基线再谈重构",
  "updatedAt": "2026-07-29",
  "wikiSlug": "agent-session",
  "term": "先恢复可信基线再谈重构",
  "oneLiner": "**决定「重构项目」之前，先做一次架构与工作流审计，把现状冻结、边界确认 —— 因为要修的往往是契约，不是目录。**",
  "body": [
    "## 目录已成形时，要的是 Contract Refactor 而不是 Directory Refactor\n\n```\napps/    web · agent · worker · ai-workflows · feed-ingestion · admin\npackages/ ai · application · db · queue · shared\n```\n\n这类边界一旦基本成形（且架构文档已明确记录 `apps/agent` = Agent Harness/Session/Tool Loop、`apps/ai-workflows` = 固定 workflow + cron、`packages/ai` = 模型/Provider/Usage、`packages/application` = 权限/事务/AiAction、`packages/db` = 持久化），**先确认各模块是否真的遵守边界、环境是否隔离、部署是否稳定、功能能否端到端使用；只有审计发现严重错位时才移动代码。**\n\n要避免的循环：\n\n```\n为了让 Agent 能用 → 先重构整个项目 → 又重构协作层 → 又接入执行器 → 又改部署 → 一周后仍没有体验入口\n```",
    "## Phase 0：先做 Baseline Matrix（基线矩阵）\n\n第一个问题不是「加什么新工具」，而是：\n\n> 现在 `main` 上哪些东西**真的**能运行？\n\n| 能力 | Local | Development | Production | 验证证据 |\n|---|---|---|---|---|\n| 基础 Web / 登录 / 笔记 CRUD / Agent Chat / Tool 调用 / AI Workflow / Worker | 待确认 | 待确认 | 待确认 | URL、截图、完整对话、Action 记录、AiRun 输出、Job 日志 |\n\n**「待确认」必须靠证据填，不能靠读代码填。** 同一个功能可能同时存在三份副本——代码里有的、服务器上跑的、数据库里留的——三份不同步时，**只看代码就下结论会把人带偏**；正确做法是用生产真实代码对生产真实数据做一次确定性验证，而不是「追查某个 key 是不是坏的」这类猜测（见 [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD)）。",
    "## 分两条线推进\n\n1. **产品与 Agent 功能形成一条最短可用链路**（先有体验入口）。\n2. **同时重构协作层协议**，但暂时不要深度绑定执行器 —— 外部编排工具应当只是 **Replaceable Adapter（可替换执行器）**，个性化二开排在其后。",
    "## 相关\n\n- [完整蓝图不等于同阶段交付](/wiki/agent-session/as-concept-%E5%AE%8C%E6%95%B4%E8%93%9D%E5%9B%BE%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%90%8C%E9%98%B6%E6%AE%B5%E4%BA%A4%E4%BB%98) —— 架构全量、交付分阶段\n- 一次循环只做一个可体验的v1能力\n- [地基阶段先跑通基础件再谈抽象](/wiki/agent-session/as-concept-%E5%9C%B0%E5%9F%BA%E9%98%B6%E6%AE%B5%E5%85%88%E8%B7%91%E9%80%9A%E5%9F%BA%E7%A1%80%E4%BB%B6%E5%86%8D%E8%B0%88%E6%8A%BD%E8%B1%A1)\n- [判断现状要看真正在跑的那一份](/wiki/agent-session/as-synthesis-%E5%88%A4%E6%96%AD%E7%8E%B0%E7%8A%B6%E8%A6%81%E7%9C%8B%E7%9C%9F%E6%AD%A3%E5%9C%A8%E8%B7%91%E7%9A%84%E9%82%A3%E4%B8%80%E4%BB%BD)\n- [本地优先知识产品的架构演进](/wiki/agent-session/as-topic-%E6%9C%AC%E5%9C%B0%E4%BC%98%E5%85%88%E7%9F%A5%E8%AF%86%E4%BA%A7%E5%93%81%E7%9A%84%E6%9E%B6%E6%9E%84%E6%BC%94%E8%BF%9B)\n- [开发流程要按任务大小分级](/wiki/agent-session/as-topic-%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E8%A6%81%E6%8C%89%E4%BB%BB%E5%8A%A1%E5%A4%A7%E5%B0%8F%E5%88%86%E7%BA%A7)\n- [存量不会自动跟上新逻辑](/wiki/agent-session/as-synthesis-%E5%AD%98%E9%87%8F%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%B7%9F%E4%B8%8A%E6%96%B0%E9%80%BB%E8%BE%91)\n- 按实际规模选型而不是按方案先进性"
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
        { id: "as-overview-overview" },
      ],
    },
    {
      id: "ch-AI 基础概念",
      title: "AI 基础概念",
      entries: [
        { id: "as-concept-dogfooding" },
        { id: "as-concept-scaling-law" },
        { id: "as-concept-\u4e00\u8bcd\u591a\u4e49\u5148\u786e\u8ba4\u6240\u6307" },
        { id: "as-concept-\u5173\u8054\u89c4\u5219\u6316\u6398\u7684\u652f\u6301\u5ea6\u4e0e\u7f6e\u4fe1\u5ea6" },
        { id: "as-concept-\u5b9e\u65f6\u4e0e\u5f02\u6b65" },
        { id: "as-concept-\u6280\u672f\u6027\u901a\u7f29\u4e0e\u7ecf\u6d4e\u5b66\u901a\u7f29" },
        { id: "as-concept-\u7f13\u5b58\u547d\u4e2d\u7387" },
        { id: "as-concept-\u957f\u5c3e\u67e5\u8be2" },
      ],
    },
    {
      id: "ch-LLM 工程",
      title: "LLM 工程",
      entries: [
        { id: "as-concept-Agent-\u4f1a\u8bdd\u8981\u6309\u6811\u4fdd\u5b58\u800c\u4e0d\u662f\u6d88\u606f\u5217\u8868" },
        { id: "as-concept-Agent-\u7ba1\u7406\u7684\u8bb0\u5fc6\uff1a\u6587\u4ef6\u662f\u771f\u76f8\u6e90\uff0c\u7d22\u5f15\u53ea\u662f\u52a0\u901f\u5668" },
        { id: "as-concept-Prompt\u7248\u672c\u771f\u6e90\u5728\u4ee3\u7801\u800c\u4e0d\u662f\u5e73\u53f0" },
        { id: "as-concept-RAG-\u662f\u6d41\u7a0b\u4e0d\u662f\u7ec4\u4ef6" },
        { id: "as-concept-\u4e00\u6b21\u8c03\u7528\u8fd4\u56de\u591a\u79cd\u4ea7\u7269\uff0c\u6309\u5185\u5bb9\u7c7b\u578b\u7ec4\u7ec7-prompt" },
        { id: "as-concept-\u4e0a\u4e0b\u6587\u6210\u672c\u7531\u57fa\u7840\u4e0a\u4e0b\u6587\u548c\u4f1a\u8bdd\u6570\u51b3\u5b9a" },
        { id: "as-concept-\u4e0a\u4e0b\u6587\u6309\u5361\u7247\u5207\u6362\uff0c\u4f1a\u8bdd\u8bb0\u5fc6\u6309\u8d26\u53f7\u5171\u4eab" },
        { id: "as-concept-\u4e2d\u95f4\u8fdb\u5c55\u4e0e\u6700\u7ec8\u56de\u7b54\u8981\u6309-phase-\u533a\u5206" },
        { id: "as-concept-\u4e3b\u89c2\u5224\u636e\u7684prompt\u89c4\u5219\u4f1a\u968f\u673a\u8bef\u89e6\u53d1" },
        { id: "as-concept-\u5173\u952e\u8bcd\u68c0\u7d22\u7684\u4e09\u4e2a\u6253\u5206\u7f3a\u9677" },
        { id: "as-concept-\u517c\u5bb9\u7aef\u70b9\u8981\u9632-SDK-\u6ce8\u5165\u975e\u6807\u51c6\u5b57\u6bb5" },
        { id: "as-concept-\u5206\u9875\u6e38\u6807\u8981\u7ee7\u627f\u672a\u63a8\u8fdb\u5b9e\u4f53\u7684\u4f4d\u7f6e" },
        { id: "as-concept-\u53ef\u89c2\u6d4b\u6b63\u6587\u8981\u6309\u73af\u5883\u5206\u7ea7\u653e\u5f00" },
        { id: "as-concept-\u591a\u8d26\u53f7\u6a21\u578b\u8def\u7531\u673a\u5236" },
        { id: "as-concept-\u5b9e\u4f53\u3001\u5173\u952e\u8bcd\u3001\u6807\u7b7e\u7684\u533a\u522b" },
        { id: "as-concept-\u5de5\u4f5c\u6d41\u6309\u5185\u5bb9\u7c7b\u578b\u5206\u5f00\u800c\u4e0d\u662f\u62bd\u8c61\u6210\u4e00\u6761\u901a\u7528\u6d41\u6c34\u7ebf" },
        { id: "as-concept-\u5f00\u5173\u8981\u6620\u5c04\u5230\u6a21\u578b\u8c03\u7528\u624d\u7b97\u751f\u6548" },
        { id: "as-concept-\u6574\u4f53\u65f6\u9650\u4e0d\u80fd\u5f53\u9996\u5b57\u8282\u65f6\u9650\u7528" },
        { id: "as-concept-\u65e0\u5165\u7ad9\u6d41\u91cf\u7684\u670d\u52a1\u9760\u6570\u636e\u4e0e\u914d\u7f6e\u9694\u79bb\u73af\u5883" },
        { id: "as-concept-\u68c0\u7d22\u8981\u6309\u96be\u5ea6\u8fed\u4ee3" },
        { id: "as-concept-\u6a21\u578b-ID-\u662f\u5165\u53e3\u76f8\u5173\u7684" },
        { id: "as-concept-\u6a21\u578b\u53ef\u89c1\u6027\u6309\u5165\u53e3\u5206\u6279\uff0c\u4e0d\u662f\u6309\u8d26\u53f7\u4e00\u5200\u5207" },
        { id: "as-concept-\u6d3e\u751f\u6570\u636e\u53ea\u5728\u5199\u5165\u65f6\u5165\u961f\uff0c\u65e7\u6570\u636e\u8981\u5355\u72ec\u56de\u586b" },
        { id: "as-concept-\u6d41\u81ea\u7136\u7ed3\u675f\u4e0d\u7b49\u4e8e\u56de\u7b54\u5b8c\u6574" },
        { id: "as-concept-\u6df7\u5408\u68c0\u7d22\u5148\u7528-RRF-\u878d\u5408" },
        { id: "as-concept-\u7269\u5316\u7ed3\u679c\u8981\u6309\u7248\u672c\u5931\u6548\u5e76\u589e\u91cf\u5237\u65b0" },
        { id: "as-concept-\u76f8\u4f3c\u5ea6\u5206\u6570\u4e0d\u7b49\u4e8e\u7b54\u6848\u53ef\u7528" },
        { id: "as-concept-\u77ed\u671f\u8bb0\u5fc6\u4e0e\u957f\u671f\u8bb0\u5fc6\u7684\u8fb9\u754c" },
        { id: "as-concept-\u80fd\u529b\u94fe\u8def\u6253\u901a\u4e0d\u7b49\u4e8e\u9ed8\u8ba4\u5f00\u542f" },
        { id: "as-concept-\u8ba1\u6570\u95f8\u95e8\u4e0d\u7b49\u4e8e\u4e0a\u4e0b\u6587\u7ba1\u7406" },
        { id: "as-concept-\u8bc4\u6d4b\u5e73\u53f0\u662f\u5e73\u53f0\u5c42\uff0c\u9879\u76ee\u89c4\u5219\u662f\u9002\u914d\u5c42" },
        { id: "as-concept-\u8bc4\u6d4b\u8981\u5148\u9694\u79bb\u88ab\u6d4b\u5c42\uff1a\u5916\u90e8\u4f9d\u8d56\u53ef\u63a7\u3001\u6a21\u578b\u8c03\u7528\u771f\u5b9e" },
        { id: "as-concept-\u8bc4\u6d4b\u89c4\u6a21\u8981\u4e0e\u7ed3\u8bba\u7684\u63a8\u5e7f\u8303\u56f4\u5339\u914d" },
        { id: "as-concept-\u8bf7\u6c42\u522b\u540d\u4e0d\u7b49\u4e8e\u5b9e\u9645\u6a21\u578b-ID" },
        { id: "as-concept-\u8bfb\u56fe\u80fd\u529b\u770b\u58f0\u660e\u5b57\u6bb5\uff0c\u5e76\u6309\u6a21\u578b\u9010\u4e2a\u5b9e\u6d4b" },
        { id: "as-concept-\u8f6e\u6362\u8981\u5e26\u5065\u5eb7\u72b6\u6001\u8bb0\u5fc6" },
        { id: "as-concept-\u91cd\u8bd5\u5206\u4e09\u5c42\u4e0d\u8981\u6574\u4f53\u91cd\u8dd1.md" },
        { id: "as-concept-\u957f\u4efb\u52a1\u4e0d\u8981\u7528\u56fa\u5b9a\u8d85\u65f6\u5224\u5b9a" },
      ],
    },
    {
      id: "ch-Agent 与 Skills 生态",
      title: "Agent 与 Skills 生态",
      entries: [
        { id: "as-concept-Agent-Harness-\u4e0d\u53ea\u662f-Tool-Loop" },
        { id: "as-concept-Agent-harness-\u8981\u9694\u79bb\u3001\u53ef\u590d\u73b0\u3001\u53ef\u6536\u5c3e" },
        { id: "as-concept-Agent-\u7f16\u6392\u5c42\u8584\u81ea\u5efa\u4f18\u5148\u4e8e\u91cd\u578b\u6846\u67b6" },
        { id: "as-concept-Issue-\u5b8c\u6210\u7531\u7528\u6237\u9a8c\u6536\u540e\u518d\u5173\u95ed" },
        { id: "as-concept-deploy\u76ee\u5f55\u662f\u8fd0\u884c\u914d\u65b9\u4e0d\u662f\u53e6\u4e00\u5957\u5e94\u7528" },
        { id: "as-concept-skill-\u7ea6\u675f\u8981\u533a\u5206\u300c\u8865\u6a21\u578b\u77ed\u677f\u300d\u4e0e\u300c\u66ff\u6a21\u578b\u505a\u5224\u65ad\u300d" },
        { id: "as-concept-Skill-\u8de8-agent-\u4f1a\u9759\u9ed8\u5931\u6548" },
        { id: "as-concept-\u4e00\u6b21\u6027\u51ed\u8bc1\u62ff\u5230\u5c31\u843d\u76d8" },
        { id: "as-concept-\u4e24\u4e2a\u6267\u884c\u5165\u53e3\u5171\u7528\u4e00\u5957\u4e1a\u52a1\u89c4\u5219" },
        { id: "as-concept-\u4ea4\u4ed8\u524d\u5148\u540c\u6b65\u4e3b\u5e72" },
        { id: "as-concept-\u4ec0\u4e48\u8be5\u8fdb-git\uff0c\u4ec0\u4e48\u8be5-ignore" },
        { id: "as-concept-\u4f5c\u8005\u662fAI\u65f6\u534f\u8bae\u8981\u552f\u4e00\u89c4\u8303\u7b54\u6848" },
        { id: "as-concept-\u5168\u7eff\u7684\u5355\u6d4b\u53ef\u80fd\u6d4b\u7684\u4e0d\u662f\u90a3\u6761\u94fe\u8def" },
        { id: "as-concept-\u5171\u4eab\u5386\u53f2\u4e0d\u7b49\u4e8e\u5171\u4eab\u6d3b\u4f1a\u8bdd" },
        { id: "as-concept-\u5185\u7f6e\u80fd\u529b\u53ea\u8986\u76d6\u5b83\u58f0\u660e\u7684\u90a3\u4e00\u6bb5" },
        { id: "as-concept-\u52a0\u8f7dskill\u4e0d\u7b49\u4e8e\u9075\u5faaskill\u6d41\u7a0b" },
        { id: "as-concept-\u534f\u4f5c\u89c4\u5219\u8981\u5165-Git-\u624d\u7b97\u9879\u76ee\u8d44\u4ea7" },
        { id: "as-concept-\u591a\u6e90\u66f4\u65b0\u6309\u7ef4\u5ea6\u53d6\u771f\u6e90" },
        { id: "as-concept-\u59d4\u6d3e\u9897\u7c92\u5ea6\u8981\u5339\u914d\u4fe1\u606f\u7f3a\u53e3" },
        { id: "as-concept-\u5b50-issue-\u662f\u53d1\u73b0\u65b0\u8303\u56f4\u7684\u7ed3\u679c\uff0c\u4e0d\u662f\u8fd4\u5de5\u5355" },
        { id: "as-concept-\u5de5\u4f5c\u6a21\u5f0f\u5207\u6362\u6539\u53d8\u7684\u662f-harness-\u800c\u975e\u6a21\u578b" },
        { id: "as-concept-\u624b\u673a\u540e\u53f0\u63a8\u9001\u8981\u9760\u670d\u52a1\u7aef\u8fdc\u7a0b\u63a8\u9001" },
        { id: "as-concept-\u6539\u534f\u8bae\u8981\u540c\u65f6\u6539\u4e24\u7aef" },
        { id: "as-concept-\u65e0\u5934\u73af\u5883\u8fde-MCP-\u8981\u7528-API-Key-\u800c\u975e-OAuth" },
        { id: "as-concept-\u771f\u76f8\u6e90\u4f4d\u7f6e\u51b3\u5b9a\u591a\u7aef\u5173\u7cfb" },
        { id: "as-concept-\u7ec8\u7aef\u753b\u9762\u540c\u6b65-Agent-\u72b6\u6001\u4e0d\u7a33\u5b9a" },
        { id: "as-concept-\u7ecf\u9a8c\u6c89\u6dc0\u8981\u5728\u95ee\u9898\u9a8c\u8bc1\u540e\u6309\u9700\u89e6\u53d1" },
        { id: "as-concept-\u7f16\u6392\u5668\u53ea\u5305\u88c5\u5df2\u6709-CLI\uff0c\u4e0d\u81ea\u5df1\u5b9e\u73b0-Agent" },
        { id: "as-concept-\u7f51\u9875\u8bfb\u53d6\u5de5\u5177\u8981\u53d7\u63a7\u800c\u4e0d\u662f\u76f4\u8fde\u4efb\u610fURL" },
        { id: "as-concept-\u80fd\u4ece\u4ee3\u7801\u5e93\u67e5\u5230\u7684\u4e0d\u8bb8\u95ee\u7528\u6237" },
        { id: "as-concept-\u81ea\u52a8\u63d0\u4ea4\u811a\u672c\u8981\u5148\u786e\u8ba4\u5f53\u524d\u5206\u652f" },
        { id: "as-concept-\u89c2\u6d4b\u5e73\u53f0\u4e0d\u80fd\u5f53\u8fd0\u884c\u72b6\u6001\u771f\u76f8\u6e90" },
        { id: "as-concept-\u8fdc\u7a0b-Agent-\u63a7\u5236\u8981\u5b9a\u4e49\u6267\u884c\u534f\u8bae\u4e0e\u72b6\u6001\u6a21\u578b" },
        { id: "as-concept-\u8fdc\u7a0b\u63a7\u5236\u672c\u673a-Agent-\u8981\u8ba9-bridge-\u8dd1\u5728\u672c\u673a" },
        { id: "as-concept-\u901a\u7528\u811a\u672c\u8981\u9760\u5de5\u5177\u9002\u914d\u5668\u63a5\u5165" },
        { id: "as-concept-\u968f\u65f6\u95f4\u53d8\u5316\u7684\u4e0a\u4e0b\u6587\u8981\u9010\u8f6e\u6ce8\u5165" },
        { id: "as-concept-\u9879\u76ee\u91cc\u7684\u6280\u80fd\u53ef\u80fd\u6709\u591a\u4efd\u526f\u672c" },
        { id: "as-concept-\u9a8c\u4e0d\u5230\u7684\u90e8\u5206\u8981\u663e\u5f0f\u8bb0\u4e3a\u672a\u9a8c\u8bc1" },
      ],
    },
    {
      id: "ch-前端工程",
      title: "前端工程",
      entries: [
        { id: "as-concept-Cookie-\u4e0d\u533a\u5206\u7aef\u53e3\uff0c\u6240\u4ee5\u540c\u57df\u591a\u7aef\u53e3\u5171\u4eab\u767b\u5f55\u6001" },
        { id: "as-concept-Electron-\u81ea\u5e26\u6d4f\u89c8\u5668\u8fd0\u884c\u65f6\u662f\u5185\u5b58\u5927\u5934" },
        { id: "as-concept-Vercel-\u7684\u56db\u4e2a\u8fd0\u884c\u73af\u5883\u5404\u586b\u4ec0\u4e48\u53d8\u91cf" },
        { id: "as-concept-flex-\u5b50\u9879\u7684\u767e\u5206\u6bd4-max-height-\u4e0d\u53ef\u9760" },
        { id: "as-concept-\u4f9d\u8d56\u7248\u672c\u8981\u9501\u4e3b\u7248\u672c\u800c\u975e\u4e00\u5f8b\u53d6\u6700\u65b0" },
        { id: "as-concept-\u4fdd\u5b58\u5931\u8d25\u8981\u843d\u672c\u5730\u8349\u7a3f\u5e76\u81ea\u52a8\u91cd\u8bd5" },
        { id: "as-concept-\u505c\u6b62\u4e0e\u53d1\u9001\u539f\u5730\u4e92\u6362\u8981\u52a0\u70b9\u51fb\u5b88\u536b" },
        { id: "as-concept-\u517c\u5bb9-fallback-\u4f1a\u8ba9\u5185\u5bb9\u91cd\u590d\u6e32\u67d3" },
        { id: "as-concept-\u5217\u8868\u5207\u6362\u8981\u7528-master-detail-\u800c\u975e\u91cd\u5efa\u5217\u8868" },
        { id: "as-concept-\u5355\u4f8b\u5e93\u8981\u663e\u5f0f\u58f0\u660e\u540c\u4e00\u7248\u672c\uff0c\u5426\u5219\u8fd0\u884c\u65f6\u5206\u88c2" },
        { id: "as-concept-\u53ef\u8c03\u4e0e\u56fa\u5b9a\u7684\u8fb9\u754c\u6309\u8bed\u4e49\u5212\u5206" },
        { id: "as-concept-\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u8981\u53ef\u91cd\u8bd5\u5e76\u5347\u7ea7\u5230-HTTPS" },
        { id: "as-concept-\u56fe\u7247\u7c98\u8d34\u8981\u4e0a\u4f20\u5bf9\u8c61\u5b58\u50a8\u6362\u6c38\u4e45URL" },
        { id: "as-concept-\u590d\u5236\u8981\u533a\u5206\u53ef\u89c1\u6587\u672c\u4e0e\u5bcc\u6587\u672c" },
        { id: "as-concept-\u5ef6\u8fdf\u4fdd\u5b58\u8981\u6355\u83b7\u521b\u5efa\u65f6\u7684\u5b9e\u4f53" },
        { id: "as-concept-\u5f15\u64ce\u4e0d\u505a\u5efa\u6a21\u5668\uff0c\u590d\u6742\u6a21\u578b\u4ea4\u7ed9\u5916\u90e8\u5de5\u5177" },
        { id: "as-concept-\u624b\u6413\u7f16\u8f91\u5668\u6838\u5fc3\u903b\u8f91\u5230\u6df1\u5904\u8981\u8bc4\u4f30\u6362\u793e\u533a\u65b9\u6848" },
        { id: "as-concept-\u6298\u53e0\u52a8\u753b\u8981\u6709\u6536\u8d77\u6001\u8fc7\u6e21" },
        { id: "as-concept-\u63a7\u4ef6\u53c2\u6570\u8981\u5728\u4e0b\u6e38\u88ab\u6d88\u8d39" },
        { id: "as-concept-\u6539\u7248\u540e\u65e7\u8def\u7531\u4ecd\u6307\u5411\u65e7\u5b9e\u73b0" },
        { id: "as-concept-\u6539\u73af\u5883\u53d8\u91cf\u8981\u89e6\u53d1\u4e91\u7aef\u91cd\u5efa\uff0c\u800c\u4e0d\u662f\u91cd\u65b0\u4e0a\u4f20\u90e8\u7f72" },
        { id: "as-concept-\u65b0\u5efa\u5bf9\u8bdd\u7684hero\u8981\u6de1\u5165\u5165\u573a\u800c\u975e\u52a0\u8f7d\u6001.md" },
        { id: "as-concept-\u663e\u793a\u9608\u503c\u5e94\u6309\u5143\u7d20\u53ef\u89c1\u6027\u800c\u975e\u56fa\u5b9a\u50cf\u7d20" },
        { id: "as-concept-\u670d\u52a1\u7aef\u7f13\u5b58\u4e0e\u6d4f\u89c8\u5668\u7f13\u5b58\u7684\u8fb9\u754c" },
        { id: "as-concept-\u672c\u5730\u4f18\u5148\u4e0d\u7b49\u4e8e\u7eaf\u6587\u4ef6" },
        { id: "as-concept-\u6761\u4ef6-return-\u524d\u5fc5\u987b\u8c03\u7528\u6240\u6709-hooks" },
        { id: "as-concept-\u6d41\u5f0f\u66f4\u65b0\u8981\u5408\u5e76\u5b57\u6bb5\u800c\u975e\u66ff\u6362\u5bf9\u8c61" },
        { id: "as-concept-\u6d45\u5c42\u6539-URL-\u4e0d\u4f1a\u5207\u6362\u7ec4\u4ef6" },
        { id: "as-concept-\u6d6e\u5c42\u8981\u6536\u655b\u5230\u4e00\u4e2a\u5171\u4eab-primitive" },
        { id: "as-concept-\u6eda\u52a8\u5c42\u4f1a\u88c1\u526a\u6ea2\u51fa\u5185\u5bb9\uff0c\u8981\u4e0e\u663e\u793a\u5c42\u62c6\u5f00" },
        { id: "as-concept-\u6eda\u52a8\u6761\u9876\u5230\u56fa\u5b9a\u680f\u8981\u8c03\u89c6\u53e3\u800c\u975e\u9690\u85cf\u6eda\u52a8\u6761" },
        { id: "as-concept-\u7126\u70b9\u73af\u753b\u5728\u5706\u89d2\u5916\u4f1a\u9732\u51fa\u56db\u89d2" },
        { id: "as-concept-\u7236\u7ec4\u4ef6\u6bcf\u6e32\u67d3\u751f\u6210\u65b0\u5bf9\u8c61\u4f1a\u89e6\u53d1-effect-\u5faa\u73af" },
        { id: "as-concept-\u73af\u5883\u53d8\u91cf\u6821\u9a8c\u8981\u6309\u6a21\u5757\u61d2\u52a0\u8f7d" },
        { id: "as-concept-\u767b\u5f55\u53d1\u8d77\u4e0e\u56de\u8c03\u5fc5\u987b\u540c\u57df\u540d" },
        { id: "as-concept-\u79bb\u7ebf\u5b58\u50a8\u7684\u4e09\u4e2a\u7b49\u7ea7" },
        { id: "as-concept-\u79fb\u52a8\u5e94\u7528\u6b63\u5f0f\u5206\u53d1\u9700\u8981\u7b7e\u540d" },
        { id: "as-concept-\u7ec8\u6001\u5df2\u5230\u8fbe\u540e\u8865\u5199\u4e0d\u80fd\u8986\u76d6\u5b83" },
        { id: "as-concept-\u7f16\u8f91\u5373\u65f6\u53cd\u9988\u4e0e\u843d\u76d8\u5ef6\u8fdf\u5206\u79bb" },
        { id: "as-concept-\u7f16\u8f91\u5668\u4e0e\u53ea\u8bfb\u6e32\u67d3\u8981\u5206\u5c42" },
        { id: "as-concept-\u7f16\u8f91\u5668\u521d\u59cb\u5316\u4f1a\u89e6\u53d1\u5047\u4fdd\u5b58" },
        { id: "as-concept-\u7f16\u8f91\u5668\u663e\u793a\u4e0d\u80fd\u8131\u79bb\u771f\u5b9e\u5149\u6807\u72b6\u6001" },
        { id: "as-concept-\u7f16\u8f91\u91cd\u53d1\u4e0e\u91cd\u65b0\u751f\u6210\u8981\u5148\u622a\u65ad\u540e\u7eed\u8f6e\u6b21.md" },
        { id: "as-concept-\u804a\u5929\u8bb0\u5f55\u8981\u4ece\u5e95\u90e8\u951a\u5b9a\u52a0\u8f7d" },
        { id: "as-concept-\u865a\u62df\u5217\u8868\u4e0e\u5e03\u5c40\u52a8\u753b\u4e0d\u80fd\u540c\u65f6\u63a5\u7ba1\u4f4d\u7f6e" },
        { id: "as-concept-\u89e3\u6790\u5668\u5361\u6b7b\u770b\u6e38\u6807\u662f\u5426\u63a8\u8fdb" },
        { id: "as-concept-\u8de8\u6e90\u53d6\u6570\u636e\u8981\u9760\u81ea\u5efa\u4ee3\u7406" },
        { id: "as-concept-\u8fc7\u671f\u54cd\u5e94\u4e0d\u80fd\u8986\u76d6\u5f53\u524d\u7f16\u8f91\u5185\u5bb9" },
        { id: "as-concept-\u8fc7\u7a0b\u5c55\u793a\u6309\u65f6\u95f4\u7ebf\u5206\u5c42\u800c\u4e0d\u662f\u5206\u7ec4\u805a\u5408" },
        { id: "as-concept-\u8fd0\u884c\u65f6\u4f9d\u8d56\u5c5e\u4e8e\u5e73\u53f0\u4e0d\u5c5e\u4e8e\u4e1a\u52a1\u4ee3\u7801" },
        { id: "as-concept-\u8fdb\u5ea6\u6761\u8981\u7531\u771f\u5b9e\u8fdb\u5ea6\u9a71\u52a8" },
        { id: "as-concept-\u9690\u85cf\u6001\u6309\u94ae\u8981\u4fdd\u7559\u547d\u4e2d\u533a" },
        { id: "as-concept-\u9875\u9762\u5207\u6362\u7684\u56db\u79cd\u5237\u65b0\u8981\u5206\u6e05" },
        { id: "as-concept-\u9875\u9762\u53d8\u6162\u5148\u67e5\u6bcf\u9875\u9274\u6743\u4e0e\u65e0\u5206\u9875\u62c9\u53d6" },
        { id: "as-concept-\u9996\u6b21\u5185\u5bb9\u4e8b\u4ef6\u4e0d\u80fd\u65e0\u6761\u4ef6\u8df3\u8fc7" },
        { id: "as-concept-\u9aa8\u67b6\u5c4f\u547c\u5438\u52a8\u753b\u7528\u72ec\u7acb\u4eae\u5ea6\u5c42" },
        { id: "as-concept-\u9ad8\u9891\u624b\u52bf\u7f29\u653e\u4e0d\u8981\u8d70-React-\u72b6\u6001" },
      ],
    },
    {
      id: "ch-产品方法论",
      title: "产品方法论",
      entries: [
        { id: "as-concept-\u4e00\u6b21\u5faa\u73af\u53ea\u505a\u4e00\u4e2a\u53ef\u4f53\u9a8c\u7684-v1-\u80fd\u529b" },
        { id: "as-concept-\u4fee\u590d\u8303\u56f4\u5206\u4fdd\u5b88\u3001\u5f7b\u5e95\u4e0e\u6700\u5c0f\u95ed\u73af\u4e09\u6863" },
        { id: "as-concept-\u5206\u4eab\u8981\u53cd\u6620\u54c1\u724c\u4e0e\u4ea7\u54c1\u8c03\u6027" },
        { id: "as-concept-\u5317\u6781\u661f\u6307\u6807\u8981\u91cf\u4ef7\u503c\u95ed\u73af" },
        { id: "as-concept-\u5730\u57fa\u9636\u6bb5\u5148\u8dd1\u901a\u57fa\u7840\u4ef6\u518d\u8c08\u62bd\u8c61" },
        { id: "as-concept-\u5b8c\u6574\u84dd\u56fe\u4e0d\u7b49\u4e8e\u540c\u9636\u6bb5\u4ea4\u4ed8" },
        { id: "as-concept-\u5bb9\u5668\u8981\u6709\u8d85\u51fa\u6587\u4ef6\u5939\u7684\u610f\u4e49\u624d\u503c\u5f97\u72ec\u7acb\u5165\u53e3" },
        { id: "as-concept-\u7528\u6237\u53ef\u611f\u77e5\u7684\u4ef7\u503c\u4e0e\u5dee\u5f02\u5316\u8868\u8fbe" },
        { id: "as-concept-\u7b54\u7591\u662f\u529f\u80fd\u5c42\uff0c\u641c\u9898\u53ea\u662f\u624b\u6bb5\u5c42" },
        { id: "as-concept-\u7b80\u5386\u5199\u89e3\u51b3\u65b9\u6848\u4e0d\u5199\u6267\u884c\u52a8\u4f5c" },
        { id: "as-concept-\u8bc4\u5ba1\u8bbe\u8ba1\u53ef\u884c\u6027\u5148\u95ee\u65b9\u6848\uff0c\u518d\u5b9a\u96be\u5ea6" },
      ],
    },
    {
      id: "ch-自我管理与复盘",
      title: "自我管理与复盘",
      entries: [
        { id: "as-concept-\u5b66\u9886\u57df\u5148\u770b\u4e00\u6d41\u6210\u54c1\u800c\u975e\u65b9\u6cd5\u8bba" },
      ],
    },
    {
      id: "ch-知识库架构",
      title: "知识库架构",
      entries: [
        { id: "as-concept-Agent-\u8bfb\u8bed\u4e49\u6587\u4ef6\uff0cApp-\u8bfb\u7ed3\u6784\u5316\u5b58\u50a8" },
        { id: "as-concept-Schema-\u662f\u58f0\u660e\uff0cMigration-\u662f\u5386\u53f2" },
        { id: "as-concept-\u5165\u5e93\u524d\u5148\u5206\u5c42\u6e05\u6d17" },
        { id: "as-concept-\u5217\u8868\u5361\u7247\u5143\u4fe1\u606f\u7528\u5185\u5bb9\u4f5c\u8005\u800c\u975e\u5e73\u53f0\u540d" },
        { id: "as-concept-\u5bfc\u5165\u8981\u4fdd\u7559\u6765\u6e90\u7c7b\u578b\u4ee5\u9009\u5bf9\u6e32\u67d3\u94fe" },
        { id: "as-concept-\u6293\u53d6\u7ed3\u679c\u4e0d\u80fd\u65e0\u6761\u4ef6\u8986\u76d6\u6e90\u6570\u636e" },
        { id: "as-concept-\u653e\u5bbd\u8fc7\u6ee4\u4f1a\u8fde\u566a\u58f0\u4e00\u8d77\u653e\u8fdb\u6765" },
        { id: "as-concept-\u6570\u636e\u6743\u5a01\u6a21\u578b\u8981\u5148\u4e8e\u540c\u6b65\u4e0e\u8fc1\u79fb\u786e\u5b9a" },
        { id: "as-concept-\u6587\u7ae0\u5143\u4fe1\u606f\u7528\u53d1\u5e03\u65e5\u671f\u800c\u975e\u521b\u5efa\u65e5\u671f" },
        { id: "as-concept-\u6e05\u6d17\u5408\u5e76\u4f1a\u7834\u574f\u6e90\u683c\u5f0f\u8bed\u4e49" },
        { id: "as-concept-\u77e5\u8bc6\u5165\u5e93\u7684\u7b5b\u9009\u6807\u51c6" },
        { id: "as-concept-\u77e5\u8bc6\u5e93\u5148\u7f16\u8bd1\u518d\u67e5\uff0c\u800c\u4e0d\u662f\u67e5\u8be2\u65f6\u62fc\u539f\u6587" },
        { id: "as-concept-\u9996\u6b21\u5bfc\u5165\u4e0e\u589e\u91cf\u66f4\u65b0\u8981\u7528\u4e0d\u540c\u89c4\u5219" },
      ],
    },
    {
      id: "ch-本机排障",
      title: "本机排障",
      entries: [
        { id: "as-concept-GitHub-\u6253\u4e0d\u5f00\u5148\u5206\u6e05\u4e3b\u7ad9\u4e0e\u9759\u6001\u8d44\u6e90\u57df\u540d" },
        { id: "as-concept-INSERT-OR-IGNORE-\u4f1a\u8ba9\u65e7\u884c\u4e0d\u66f4\u65b0" },
        { id: "as-concept-MCP-\u8fde\u4e0d\u4e0a\u5148\u5206\u5c42\u5b9a\u4f4d\u914d\u7f6e\u4ee4\u724c\u4e0e\u4ee3\u7406" },
        { id: "as-concept-worktree-\u662f\u72ec\u7acb\u76ee\u5f55\uff0c\u4ea7\u7269\u4e0e\u914d\u7f6e\u90fd\u9694\u79bb" },
        { id: "as-concept-\u4e24\u6761\u5199\u5165\u8def\u5f84\u8981\u7528\u5185\u5bb9\u5224\u91cd" },
        { id: "as-concept-\u4e2d\u8f6c\u6e90\u4e0d\u66f4\u65b0\uff0c\u5148\u5206\u6e05\u662f\u54ea\u4e00\u5c42" },
        { id: "as-concept-\u4ed3\u5e93\u6b8b\u7559\u4f1a\u8bef\u5bfc\u5bf9\u73b0\u72b6\u7684\u5224\u65ad" },
        { id: "as-concept-\u4ee5\u524d\u80fd\u7528\u6700\u8fd1\u574f\u4e86\uff0c\u5148\u67e5\u81ea\u5df1\u6700\u8fd1\u7684\u6539\u52a8" },
        { id: "as-concept-\u505c\u673a\u524d\u5148\u786e\u8ba4\u6709\u53ef\u6062\u590d\u5907\u4efd" },
        { id: "as-concept-\u5148\u5206\u6e05\u5e73\u53f0\u9519\u8bef\u8fd8\u662f\u5e94\u7528\u9519\u8bef" },
        { id: "as-concept-\u51ed\u636e\u6765\u6e90\u4e0d\u552f\u4e00\u4f1a\u8ba9\u5ba2\u6237\u7aef\u53cd\u590d\u5237\u65b0" },
        { id: "as-concept-\u51ed\u636e\u6b63\u786e\u5374\u88ab\u62d2\u5148\u67e5\u767b\u5f55\u6821\u9a8c\u54ea\u4e2a\u5b57\u6bb5" },
        { id: "as-concept-\u529f\u80fd\u7f3a\u5931\u5148\u786e\u8ba4\u8fd0\u884c\u7684\u662f\u54ea\u4efd\u4ea7\u7269" },
        { id: "as-concept-\u53ea\u6709\u7b2c\u4e00\u53d1\u5931\u8d25\u8981\u67e5\u51b7\u542f\u52a8\u4e0e\u8fde\u63a5\u91cd\u8bd5.md" },
        { id: "as-concept-\u5408\u5e76\u7eff\u706f\u8981\u5bf9\u5e94\u5f53\u524d-HEAD" },
        { id: "as-concept-\u5408\u76d6\u4ecd\u4f1a\u7761\u7720\u540e\u53f0\u4efb\u52a1\u4f1a\u88ab\u4e2d\u65ad" },
        { id: "as-concept-\u540c\u4e00\u5e94\u7528\u5f00\u51fa\u4e24\u4e2a\u7a97\u53e3\u5148\u67e5\u5355\u5b9e\u4f8b\u9650\u5236" },
        { id: "as-concept-\u540c\u540d-provider-\u51b2\u7a81\u4f1a\u8ba9\u6a21\u578b\u8def\u7531\u6f02\u79fb" },
        { id: "as-concept-\u540c\u76ee\u5f55\u591a\u4f1a\u8bdd\u4f1a\u62a2\u5206\u652f" },
        { id: "as-concept-\u56de\u6eda\u8981\u4fdd\u7559\u6570\u636e\u8fc1\u79fb\u7684\u517c\u5bb9\u8def\u5f84.md" },
        { id: "as-concept-\u5907\u7528\u6784\u5efa\u76ee\u5f55\u4e0d\u8981\u5d4c\u5728-next-\u76ee\u5f55\u91cc" },
        { id: "as-concept-\u5bf9\u7167\u4e24\u7aef\u8981\u7528\u540c\u4e00\u6761\u6807\u8bc6" },
        { id: "as-concept-\u5f00-PR-\u524d\u5148\u786e\u8ba4\u57fa\u7ebf\u7684\u8fdc\u7aef\u72b6\u6001" },
        { id: "as-concept-\u5f02\u6b65\u8865\u9f50\u957f\u671f\u4e0d\u751f\u6548\u8981\u67e5\u5199\u5165\u5931\u8d25" },
        { id: "as-concept-\u6253\u4e0d\u5f00\u7684-app-\u5148\u67e5\u9694\u79bb\u6807\u8bb0\u4e0e\u7b7e\u540d" },
        { id: "as-concept-\u6293\u53d6\u8981\u5b58\u6e05\u6d17\u540e\u7684\u6b63\u6587\u800c\u4e0d\u662f\u6574\u9875" },
        { id: "as-concept-\u63a5\u53e3\u9a8c\u8bc1\u901a\u8fc7\u4e0d\u7b49\u4e8e\u6d4f\u89c8\u5668\u5df2\u767b\u5f55" },
        { id: "as-concept-\u6539\u8fdc\u7aef\u5e93\u7ed3\u6784\u524d\u5148\u786e\u8ba4\u5e93\u8eab\u4efd\u4e0e\u56de\u6eda" },
        { id: "as-concept-\u6539\u914d\u7f6e\u540e\u8981\u786e\u8ba4\u90e8\u7f72\u771f\u7684\u7528\u4e86\u65b0\u914d\u7f6e" },
        { id: "as-concept-\u6587\u4ef6\u88ab\u56de\u9000\u5148\u5206\u6e05\u662f\u5de5\u5177\u8fd8\u662f\u5e76\u53d1\u4f1a\u8bdd" },
        { id: "as-concept-\u672c\u5730\u5f00\u53d1\u811a\u672c\u53ef\u80fd\u8fde\u751f\u4ea7\u8d44\u6e90" },
        { id: "as-concept-\u672c\u5730\u6d4b\u8bd5\u8981\u663e\u5f0f\u8986\u76d6\u6570\u636e\u6e90" },
        { id: "as-concept-\u672c\u673a\u5361\u987f\u5148\u6e05\u6b8b\u7559\u5f00\u53d1\u8fdb\u7a0b" },
        { id: "as-concept-\u6740\u7aef\u53e3\u8981\u533a\u5206\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u8fde\u63a5" },
        { id: "as-concept-\u6837\u5f0f\u4e22\u5931\u5148\u6838\u5bf9\u7c7b\u540d\uff0c\u518d\u6000\u7591\u7f13\u5b58\u4e0e\u6743\u9650" },
        { id: "as-concept-\u6e05\u7406\u5ba2\u6237\u7aef\u7f13\u5b58\u5148\u5206\u6e05\u54ea\u5c42\u53ef\u4e22" },
        { id: "as-concept-\u6eda\u52a8\u90e8\u7f72\u671f\u95f4\u6539\u5e93\u7ed3\u6784\u4f1a\u649e\u4e0a\u65e7\u5bb9\u5668\u7684\u9501" },
        { id: "as-concept-\u771f\u673a\u767d\u5c4f\u5148\u5206\u6e05-Debug-\u5305\u4e0e\u8bc1\u4e66" },
        { id: "as-concept-\u7aef\u53e3\u5360\u7528\u4f1a\u628a\u4f60\u8fde\u5230\u522b\u4eba\u7684\u670d\u52a1" },
        { id: "as-concept-\u89c2\u6d4b\u5e73\u53f0\u7684\u73af\u5883\u7ef4\u5ea6\u7531\u6570\u636e\u4ea7\u751f" },
        { id: "as-concept-\u8bb2-bug-\u5148\u8bb2\u73b0\u8c61\uff0c\u518d\u8bb2\u6839\u56e0" },
        { id: "as-concept-\u8fc1\u79fb\u6587\u4ef6\u5b58\u5728\u4e0d\u7b49\u4e8e\u6570\u636e\u5e93\u5df2\u5347\u7ea7" },
        { id: "as-concept-\u8fdc\u7aef\u4e3b\u7ebf\u53ef\u80fd\u4e0e\u672c\u5730\u4e3b\u7ebf\u65e0\u5171\u540c\u7956\u5148" },
        { id: "as-concept-\u96c6\u6210\u5df2\u5408\u5e76\u4e0d\u7b49\u4e8e\u8fd0\u884c\u65f6\u5df2\u542f\u7528" },
        { id: "as-concept-\u9700\u8981\u8ba4\u8bc1\u7684\u547d\u4ee4\u4e0d\u8981\u5e76\u884c\u6267\u884c" },
        { id: "as-concept-\u9762\u677f\u4e0a\u591a\u51fa\u7684\u56fa\u5b9a\u533a\u5757\u5148\u67e5\u6570\u636e\u6e90\u518d\u6539\u524d\u7aef" },
        { id: "as-concept-\u9879\u76ee\u5360\u7a7a\u95f4\u5148\u67e5\u6784\u5efa\u7f13\u5b58\u4e0e\u65e7-worktree" },
        { id: "as-concept-\u9a8c\u6536\u8981\u6309\u552f\u4e00\u6807\u8bc6\u9009\u4e2d\u5b9e\u4f8b\uff0c\u4e0d\u80fd\u6309\u540d\u5b57" },
        { id: "as-concept-\u9ad8\u8d1f\u8f7d\u53d1\u70eb\u5148\u6392\u9664\u8d1f\u8f7d\u800c\u975e\u786c\u4ef6" },
      ],
    },
    {
      id: "ch-项目",
      title: "项目",
      entries: [
        { id: "as-topic-AI\u4ea7\u54c1\u7ecf\u7406\u7684\u80fd\u529b\u4e09\u8f74" },
        { id: "as-topic-UI\u539f\u578b\u4fdd\u771f" },
        { id: "as-topic-\u4e2a\u4eba\u77e5\u8bc6\u4ea7\u54c1\u7684\u5b9a\u4f4d" },
        { id: "as-topic-\u4ea7\u54c1\u9875\u4fe1\u606f\u7ed3\u6784" },
        { id: "as-topic-\u4ee3\u7801\u5e93\u77e5\u8bc6\u5de5\u5177\u7684\u9009\u578b" },
        { id: "as-topic-\u51e0\u4f55\u9898-3D-\u5316\u7684\u9898\u5e93\u5b9a\u4f4d" },
        { id: "as-topic-\u540e\u53f0\u4efb\u52a1\u961f\u5217\u9009\u578b" },
        { id: "as-topic-\u591aAgent\u534f\u4f5c\u63a7\u5236\u9762" },
        { id: "as-topic-\u5f00\u53d1\u6d41\u7a0b\u8981\u6309\u4efb\u52a1\u5927\u5c0f\u5206\u7ea7" },
        { id: "as-topic-\u6267\u884c\u529b\u7684\u590d\u76d8" },
        { id: "as-topic-\u6570\u636e\u6307\u6807\u7684\u89e3\u8bfb" },
        { id: "as-topic-\u6587\u6863\u9644\u4ef6\u89e3\u6790\u7ba1\u7ebf" },
        { id: "as-topic-\u672c\u5730\u4f18\u5148\u77e5\u8bc6\u4ea7\u54c1\u7684\u67b6\u6784\u6f14\u8fdb" },
        { id: "as-topic-\u672c\u673a\u8d44\u6e90\u5360\u7528\u6392\u67e5" },
        { id: "as-topic-\u6d4b\u8bd5\u7b56\u7565" },
        { id: "as-topic-\u7528\u6237\u8bbf\u8c08\u4e0e\u9700\u6c42\u6316\u6398" },
        { id: "as-topic-\u7ade\u54c1\u62c6\u89e3\u6846\u67b6" },
        { id: "as-topic-\u7b80\u5386\u6a21\u677f\u7684\u4e09\u5c42\u6e32\u67d3\u534f\u8bae\u4e0e\u8fc1\u79fb" },
      ],
    },
    {
      id: "ch-跨源综述",
      title: "跨源综述",
      entries: [
        { id: "as-synthesis-\u5148\u5b9a\u4f4d\u5f52\u5c5e\u5c42\u518d\u52a8\u624b" },
        { id: "as-synthesis-\u5206\u5c42\u8981\u843d\u5230\u8fd0\u884c\u65f6\u624d\u6709\u6548" },
        { id: "as-synthesis-\u5224\u636e\u8981\u7528\u771f\u503c\u800c\u975e\u4ee3\u7406" },
        { id: "as-synthesis-\u5224\u65ad\u73b0\u72b6\u8981\u770b\u771f\u6b63\u5728\u8dd1\u7684\u90a3\u4e00\u4efd" },
        { id: "as-synthesis-\u53e3\u5f84\u5148\u4e8e\u6570\u503c" },
        { id: "as-synthesis-\u53ef\u590d\u7528\u7269\u4e0e\u4e0d\u53ef\u590d\u7528\u7269\u5206\u5f00" },
        { id: "as-synthesis-\u540c\u4e00\u72b6\u6001\u7684\u591a\u4e2a\u526f\u672c\u5fc5\u7136\u6f02\u79fb" },
        { id: "as-synthesis-\u5951\u7ea6\u53ea\u627f\u8f7d\u7ed3\u6784\uff0c\u4e2a\u6027\u7559\u7ed9\u6269\u5c55\u5c42" },
        { id: "as-synthesis-\u5b58\u91cf\u4e0d\u4f1a\u81ea\u52a8\u8ddf\u4e0a\u65b0\u903b\u8f91" },
        { id: "as-synthesis-\u5b9a\u4e49\u8981\u7531\u4f7f\u7528\u8005\u786e\u8ba4" },
        { id: "as-synthesis-\u5bf9\u7167\u624d\u4ea7\u751f\u4fe1\u606f" },
        { id: "as-synthesis-\u5dee\u5f02\u8981\u7528\u4f7f\u7528\u6a21\u5f0f\u8bf4\u800c\u4e0d\u662f\u529f\u80fd\u6e05\u5355" },
        { id: "as-synthesis-\u5feb\u7167\u53ea\u5728\u5efa\u7acb\u90a3\u4e00\u523b\u6210\u7acb" },
        { id: "as-synthesis-\u6309\u5b9e\u9645\u89c4\u6a21\u9009\u578b\uff0c\u800c\u4e0d\u662f\u6309\u65b9\u6848\u5148\u8fdb\u6027" },
        { id: "as-synthesis-\u6536\u5c3e\u8981\u843d\u5230\u786e\u5b9a\u72b6\u6001" },
        { id: "as-synthesis-\u66f4\u65b0\u65f6\u5e8f\u8981\u7531\u672c\u5730\u6700\u65b0\u72b6\u6001\u51b3\u5b9a" },
        { id: "as-synthesis-\u672c\u5730\u80fd\u8dd1\u4e0d\u7b49\u4e8e\u73af\u5883\u91cc\u80fd\u8dd1" },
        { id: "as-synthesis-\u6743\u5a01\u7ec8\u6001\u5230\u8fbe\u540e\u8fdf\u5230\u7684\u5199\u4e0d\u80fd\u8986\u76d6\u5b83" },
        { id: "as-synthesis-\u68c0\u7d22\u662f\u4e00\u6761\u5206\u5c42\u94fe\uff0c\u5355\u70b9\u66ff\u4ee3\u6574\u6761\u94fe\u5fc5\u7136\u5931\u6548" },
        { id: "as-synthesis-\u300c\u6d3b\u300d\u7684\u80fd\u529b\u53d6\u51b3\u4e8e\u589e\u91cf\u673a\u5236\uff0c\u800c\u4e0d\u662f\u751f\u6210\u8d28\u91cf" },
        { id: "as-synthesis-\u7528\u6237\u4ef7\u503c\u8981\u5728\u5faa\u73af\u5185\u88ab\u9a8c\u8bc1" },
        { id: "as-synthesis-\u771f\u6e90\u8981\u6309\u7ef4\u5ea6\u663e\u5f0f\u6307\u5b9a" },
        { id: "as-synthesis-\u804c\u8d23\u8981\u5148\u5206\u5bb6\uff0c\u518d\u8c08\u5b9e\u73b0" },
        { id: "as-synthesis-\u80fd\u529b\u88ab\u73af\u5883\u5dee\u5f02\u9759\u9ed8\u6539\u53d8" },
        { id: "as-synthesis-\u80fd\u529b\u8981\u9760\u6d88\u8d39\u65b9\u8ba4\u8d26" },
      ],
    },
    {
      id: "ch-其他",
      title: "其他",
      entries: [
        { id: "as-knowledge-base-\u6743\u5a01wiki\u662f\u7d22\u5f15\u52a0\u7cbe\u9009\u77e5\u8bc6" },
        { id: "as-product-\u5148\u6062\u590d\u53ef\u4fe1\u57fa\u7ebf\u518d\u8c08\u91cd\u6784" },
      ],
    },
  ],
};
