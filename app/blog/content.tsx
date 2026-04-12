import type { ReactNode } from "react";
import type { TocItem } from "./data";

interface ArticleContent {
  toc: TocItem[];
  body: ReactNode;
}

const articles: Record<string, ArticleContent> = {
  "claude-code-saas-3-days": {
    toc: [
      { id: "sec-why", label: "为什么做这个实验" },
      { id: "sec-day1", label: "Day 1：需求定义与架构设计" },
      { id: "sec-day2", label: "Day 2：核心功能开发" },
      { id: "sec-insights", label: "几个反直觉的发现" },
    ],
    body: (
      <>
        <p>上周我用 Claude Code 做了一个实验：能不能在三天内，从一个想法变成一个可用的 SaaS 产品？结果超出预期。</p>

        <h2 id="sec-why">为什么做这个实验</h2>
        <p>作为一个 AI PM，我一直在思考：<strong>当 AI 能帮你写代码时，PM 的价值到底在哪？</strong>不是 Prompt 写得好不好，而是你能不能把模糊的想法变成结构清晰、逻辑自洽的产品。</p>
        <blockquote><p>Vibe Coding 不是让 AI 替你写代码，而是让你用产品思维和 AI 协作，把想法快速变成现实。</p></blockquote>

        <h2 id="sec-day1">Day 1：需求定义与架构设计</h2>
        <p>第一天没写一行代码。全部时间花在需求文档和信息架构上。我用 <code>CLAUDE.md</code> 把项目背景、技术约束、设计规范全部写清楚，这份文档后来成了整个项目的「宪法」。</p>

        <h2 id="sec-day2">Day 2：核心功能开发</h2>
        <p>有了清晰的需求文档，Claude Code 表现非常稳定。关键心得：</p>
        <div className="blog-code-block">
          <span className="blog-code-lang">prompt</span>
          <pre><code>
            <span className="blog-code-line"><span className="blog-cm">{"// 不要这样："}</span></span>
            <span className="blog-code-line"><span className="blog-str">{'"帮我做一个用户管理系统"'}</span></span>
            <span className="blog-code-line"> </span>
            <span className="blog-code-line"><span className="blog-cm">{"// 要这样："}</span></span>
            <span className="blog-code-line"><span className="blog-str">{'"参照 CLAUDE.md 中的用户模型，'}</span></span>
            <span className="blog-code-line"><span className="blog-str">{' 实现 /api/users CRUD，'}</span></span>
            <span className="blog-code-line"><span className="blog-str">{' 用 Supabase Auth，'}</span></span>
            <span className="blog-code-line"><span className="blog-str">{' 错误处理参考 lib/errors.ts"'}</span></span>
          </code></pre>
        </div>
        <p>指令越具体，输出质量越高。这和写 PRD 是一回事——模糊的需求只会得到模糊的交付。</p>

        <h2 id="sec-insights">几个反直觉的发现</h2>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>写需求文档的时间不能省</strong> —— 花在需求上的时间会在开发阶段 10 倍返还。CLAUDE.md 越清晰，AI 输出越稳定。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>PM 的价值不降反升</strong> —— 当开发成本趋近于零，决定做什么比怎么做更重要。产品判断力才是核心。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>审美是新的技术壁垒</strong> —— AI 能写代码但不能替你做审美判断。好的设计品味变成了稀缺能力。</div>
          </div>
        </div>
      </>
    ),
  },

  "ai-pm-core-skills": {
    toc: [
      { id: "sec-beyond-prd", label: "超越 PRD 的能力" },
      { id: "sec-model", label: "三层能力模型" },
      { id: "sec-practice", label: "如何刻意练习" },
    ],
    body: (
      <>
        <p>很多人觉得 AI PM 就是「会写 Prompt 的产品经理」。但实际上，AI PM 需要一套全新的能力框架——从理解模型能力边界，到设计人机协作流程。</p>

        <h2 id="sec-beyond-prd">超越 PRD 的能力</h2>
        <p>传统 PM 的核心输出是 PRD，但 AI PM 的核心输出是<strong>对 AI 能力边界的判断</strong>。你得知道哪些需求 AI 能做好、哪些会幻觉、哪些需要人工兜底。</p>
        <blockquote><p>不是会用 ChatGPT 就是 AI PM，就像不是会用 Excel 就是数据分析师。</p></blockquote>
        <p>这个判断力来自大量的 hands-on 实验，而不是读论文和看发布会。</p>

        <h2 id="sec-model">三层能力模型</h2>
        <p>我把 AI PM 的能力分为三层：</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>技术理解层</strong> —— 不需要会训练模型，但要理解 prompt → pipeline → evaluation 的完整链路。知道 RAG 和 Fine-tune 的区别，能跟工程师讨论方案。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>产品设计层</strong> —— AI 产品的 UX 有独特挑战：不确定性管理、预期设定、fallback 设计。用户不会因为「AI 做不到」而原谅你。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>商业判断层</strong> —— AI 能力在快速变化，今天不可能的功能明天可能免费。PM 要判断什么时候「等技术成熟」比「硬做」更明智。</div>
          </div>
        </div>

        <h2 id="sec-practice">如何刻意练习</h2>
        <p>最有效的练习方式就是<strong>自己做产品</strong>。用 Vibe Coding 的方式，从 0 到 1 做一个 AI 原生产品。你会在这个过程中遇到所有真实挑战：模型选择、prompt 调优、成本控制、用户预期管理。</p>
        <p>读 100 篇 AI 文章不如自己做一个 Agent。这就是为什么我一直在用 Claude Code 造东西——不只是为了好玩，而是为了保持对技术边界的手感。</p>
      </>
    ),
  },

  "agent-product-retention": {
    toc: [
      { id: "sec-paradox", label: "Agent 的留存悖论" },
      { id: "sec-challenges", label: "三个核心挑战" },
      { id: "sec-solutions", label: "可能的解法" },
    ],
    body: (
      <>
        <p>做过 Agent 产品的人都知道一个残酷的事实：用户第一次用的时候都很兴奋，但留存曲线掉得比任何品类都快。为什么？</p>

        <h2 id="sec-paradox">Agent 的留存悖论</h2>
        <p>Agent 产品面临一个独特的悖论：<strong>用户期待「自主」，但信任需要逐步建立</strong>。如果 Agent 太保守，用户觉得没用；太激进，一次出错用户就不再信任。</p>
        <blockquote><p>用户对 AI Agent 的容错率远低于对人类助手的容错率。人犯错可以被原谅，AI 犯错就是「不靠谱」。</p></blockquote>

        <h2 id="sec-challenges">三个核心挑战</h2>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>信任冷启动</strong> —— 新用户不知道 Agent 能做什么、做到什么程度。没有足够的信任就不会委托复杂任务，不委托就体验不到价值。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>价值感知衰减</strong> —— 第一次自动完成任务很惊喜，第十次就习以为常了。Agent 需要持续展示新能力才能维持用户兴趣。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>错误放大效应</strong> —— 自动化意味着错误也是自动化的。一个 bug 可能在用户不知情的情况下影响大量数据。</div>
          </div>
        </div>

        <h2 id="sec-solutions">可能的解法</h2>
        <p>我观察到几个做得好的产品有共同特点：<strong>渐进式授权 + 透明执行 + 快速回滚</strong>。</p>
        <p>渐进式授权是让用户一步步给 Agent 更多权限，而不是一开始就全自动。透明执行是让用户能看到 Agent 在做什么、为什么做。快速回滚是让用户能一键撤销 Agent 的操作。</p>
        <p>做 Agent 产品最难的不是技术，而是<strong>设计信任曲线</strong>。</p>
      </>
    ),
  },

  "prompt-engineering-not-core": {
    toc: [
      { id: "sec-everyone", label: "当人人都会写 Prompt" },
      { id: "sec-real-moat", label: "真正的护城河" },
      { id: "sec-what-matters", label: "什么才重要" },
    ],
    body: (
      <>
        <p>每次有人问我「AI PM 最重要的技能是什么」，我都不会说 Prompt Engineering。不是因为它不重要，而是因为它很快就不再是差异化优势。</p>

        <h2 id="sec-everyone">当人人都会写 Prompt</h2>
        <p>2024 年初，会写好 Prompt 是稀缺技能。2026 年，<strong>每个产品经理都会写 Prompt</strong>，就像每个人都会用搜索引擎一样。工具在进化，模型在变聪明，Prompt 的门槛在不断降低。</p>
        <blockquote><p>Prompt Engineering 是一项正在被工具化的技能。把它当核心竞争力，就像 2010 年把「会发微博」当核心竞争力一样。</p></blockquote>

        <h2 id="sec-real-moat">真正的护城河</h2>
        <p>AI PM 的护城河在于<strong>对产品边界和用户心智的深度理解</strong>。具体来说：</p>
        <p>你能不能判断一个 AI 功能应该做到什么程度？做到 80% 准确率够不够？用户在什么场景下能容忍 AI 犯错？什么场景下绝对不能？</p>
        <p>这些判断力来自于对用户的深刻理解，而不是对模型的深刻理解。</p>

        <h2 id="sec-what-matters">什么才重要</h2>
        <p>三个比 Prompt 更重要的能力：</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>需求翻译</strong> —— 把模糊的用户需求翻译成精确的 AI 任务定义。这比写 Prompt 难 10 倍。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>边界设计</strong> —— 决定 AI 能做什么、不能做什么、做错了怎么兜底。这决定了产品的可靠性。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>价值判断</strong> —— 判断哪些 AI 功能值得做、哪些是伪需求。在技术快速变化时保持产品方向的稳定。</div>
          </div>
        </div>
      </>
    ),
  },

  "ai-build-personal-site": {
    toc: [
      { id: "sec-start", label: "从一个模糊的想法开始" },
      { id: "sec-process", label: "AI 建站全过程" },
      { id: "sec-lessons", label: "踩坑经验" },
    ],
    body: (
      <>
        <p>没有设计稿、没有前端经验、只有一个模糊的想法——「我要一个看起来很 hacker 的个人网站」。这是一次 Vibe Coding 的真实记录。</p>

        <h2 id="sec-start">从一个模糊的想法开始</h2>
        <p>周五晚上刷到几个很酷的开发者个人网站，突然想做一个自己的。我心目中的风格是：<strong>暗色系 + monospace + 像素风</strong>，像一个终端界面但是在浏览器里。</p>
        <blockquote><p>最好的个人网站不是最漂亮的，而是最能代表你的。作为一个 Vibe Coder，我的网站应该有「代码」的气质。</p></blockquote>

        <h2 id="sec-process">AI 建站全过程</h2>
        <p>整个过程分三步：先做 HTML 原型确认视觉，再用 Next.js 搭架子，最后逐页迁移。</p>
        <p>最关键的是第一步——我用 Claude 直接生成了一个完整的 HTML 原型。来回调了十几轮，但比学 Figma 快多了。原型定下来之后，后面的开发反而很顺畅。</p>
        <p><code>CLAUDE.md</code> 是整个项目的核心。我把 Design Tokens、文件结构、命名规范全写在里面。每次开新对话，AI 都能读到这些约束，保持一致性。</p>

        <h2 id="sec-lessons">踩坑经验</h2>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>原型阶段不要省</strong> —— 直接写 React 组件调样式太慢了。先用纯 HTML/CSS 把视觉定下来，再迁移到框架。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>Design Tokens 非常重要</strong> —— 一套颜色变量能让整个网站风格统一。改一个变量就能调整全局色调。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>不要追求完美再上线</strong> —— 先部署一个 MVP，然后持续迭代。我的网站现在还在不断改。</div>
          </div>
        </div>
      </>
    ),
  },

  "ai-product-300-days": {
    toc: [
      { id: "sec-excited", label: "前 100 天：兴奋期" },
      { id: "sec-confused", label: "100-200 天：迷茫期" },
      { id: "sec-clarity", label: "200-300 天：清晰期" },
    ],
    body: (
      <>
        <p>300 天前我加入了一家大厂的 AI 产品团队，从传统互联网 PM 转型做 AI PM。这篇文章复盘这段经历中最真实的感受。</p>

        <h2 id="sec-excited">前 100 天：兴奋期</h2>
        <p>刚开始一切都很新鲜。每天都在学新概念：RAG、Embedding、Fine-tuning、Context Window……<strong>感觉自己在参与一场技术革命。</strong></p>
        <blockquote><p>前 100 天最大的错误是：以为「学会 AI 技术」就能做好 AI 产品。</p></blockquote>
        <p>事实上，技术理解只是入场券。真正的挑战在于：如何用不完美的技术做出用户能接受的产品。</p>

        <h2 id="sec-confused">100-200 天：迷茫期</h2>
        <p>这个阶段最痛苦。你发现模型的能力边界比想象中窄，用户的期望比想象中高。每次发版都在担心：<strong>这次 AI 会不会又出幻觉？</strong></p>
        <p>最难的不是技术问题，而是「要不要发」的决策。80% 准确率的功能，发不发？不发就没数据反馈，发了用户可能骂你。</p>

        <h2 id="sec-clarity">200-300 天：清晰期</h2>
        <p>到了这个阶段，我终于想通了几件事：</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>AI 产品的 MVP 标准不同</strong> —— 传统产品 MVP 是功能最小集，AI 产品 MVP 是「可信度最小集」。用户需要觉得 AI 靠谱。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>PM 要能自己跑通全链路</strong> —— 从数据处理到模型调用到结果评估，如果你不能自己做一遍，你就无法准确判断需求的可行性。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>快速迭代比精心设计更重要</strong> —— AI 产品的不确定性太大，与其花三个月做一个「完美方案」，不如每周发一个小实验。</div>
          </div>
        </div>
      </>
    ),
  },

  "llm-product-pmf": {
    toc: [
      { id: "sec-status", label: "PMF 的现状" },
      { id: "sec-b2b", label: "B 端的机会" },
      { id: "sec-b2c", label: "C 端的困境" },
    ],
    body: (
      <>
        <p>ChatGPT 发布两年多了，大模型产品的 PMF（Product-Market Fit）依然模糊。除了 ChatGPT 本身，真正跑出来的大模型原生产品少之又少。</p>

        <h2 id="sec-status">PMF 的现状</h2>
        <p>大部分大模型产品都卡在同一个问题上：<strong>用户觉得「有用」但不觉得「必须用」</strong>。这是 PMF 最危险的灰色地带——有人用，有增长，但留存平平，付费意愿低。</p>
        <blockquote><p>「有用」和「不可或缺」之间，隔着一个留存曲线的断崖。</p></blockquote>

        <h2 id="sec-b2b">B 端的机会</h2>
        <p>B 端大模型产品的 PMF 相对清晰：<strong>替代人工、降低成本、提高效率</strong>。只要 ROI 算得过来，企业就愿意付费。</p>
        <p>几个已经验证的方向：智能客服（替代 L1 人工）、文档处理（合同审查、报告生成）、代码辅助（Copilot 模式）。这些场景有明确的成本对标，价值容易量化。</p>

        <h2 id="sec-b2c">C 端的困境</h2>
        <p>C 端的挑战大得多。核心问题是：<strong>大模型的通用能力太强，反而很难做出差异化产品</strong>。</p>
        <p>用户想要的所有功能，ChatGPT 基本都能做。你做一个写作助手，ChatGPT 也能写；你做一个翻译工具，ChatGPT 也能翻。那用户为什么要用你的产品？</p>
        <p>我认为 C 端的突破口在于<strong>垂直场景 + 工作流整合</strong>。不是做「更好的聊天」，而是把 AI 嵌入用户已有的工作流中，解决一个具体的、高频的、有痛点的问题。</p>
      </>
    ),
  },

  "rag-learning-notes": {
    toc: [
      { id: "sec-origin", label: "起因" },
      { id: "sec-core-flow", label: "RAG 的核心流程" },
      { id: "sec-pitfalls", label: "每一步都有坑" },
      { id: "sec-4-gen", label: "四代 RAG 架构" },
      { id: "sec-death", label: "生产环境的六种死法" },
      { id: "sec-stack", label: "我实际用到的技术栈" },
      { id: "sec-conclusions", label: "几个我记住的结论" },
    ],
    body: (
      <>
        <blockquote><p>一个 AI 产品实习生的 RAG 学习笔记。不是教程，是我真的搞懂了之后写给自己看的东西。</p></blockquote>

        <h2 id="sec-origin">起因</h2>
        <p>实习的时候接了一个教育智能体的项目。用户问问题，AI 回答。听起来简单。</p>
        <p>但模型会编。它会非常自信地告诉你一个完全错误的知识点。在教育场景里，这不是「小问题」。</p>
        <p>然后 mentor 说：上 RAG。</p>
        <p>嗯，好。那 RAG 是什么？</p>
        <p><strong>在 LLM 回答之前，先从你的知识库里找到相关内容，塞进 Prompt，让它「有据可依」地说话。</strong></p>
        <p>核心公式：</p>
        <div className="blog-code-block">
          <span className="blog-code-lang">formula</span>
          <pre><code>
            <span className="blog-code-line"><span className="blog-str">{"回答 = LLM( 用户问题 + 检索到的相关文档 )"}</span></span>
          </code></pre>
        </div>
        <p>不是让模型「记住」你的数据，是每次提问的时候，把答案提前喂给它。</p>

        <h2 id="sec-core-flow">RAG 的核心流程</h2>
        <p>其实就三步。</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>离线建库</strong> —— 原始文档 → 提取文本 → 切块(Chunking) → 向量化(Embedding) → 存进向量数据库</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>在线检索</strong> —— 用户提问 → 问题也转成向量 → 在向量库里找最像的 K 段。「语义相近」的文本，向量距离就近。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>生成回答</strong> —— 系统 Prompt + 用户问题 + 检索到的文档块 → LLM → 回答。模型看着参考资料回答，不容易编了。</div>
          </div>
        </div>
        <p>为什么不直接用长上下文？2026 年了，Claude 200K，Gemini 1M+。但实际跑下来：<strong>贵</strong>、<strong>慢</strong>、<strong>Lost-in-the-Middle</strong>。产业共识：知识库 &lt; 500 页直接长上下文，&gt; 500 页必须 RAG，最佳方案是组合拳。</p>

        <h2 id="sec-pitfalls">每一步都有坑</h2>
        <p>流程看起来简单，但每一步的选择都会影响最终效果。</p>
        <p><strong>分块（Chunking）：切大了不行，切小了也不行。</strong>切太大语义稀释，切太小信息碎片化。生产环境推荐：精确问答 256-512 tokens，复杂推理 512-1024 tokens，Overlap 10-20%。一个数据：自适应分块 87% 准确率 vs 固定分块 67%。</p>
        <p><strong>Embedding 模型：选错了后面全白搭。</strong>中文场景首选 bge-large-zh-v1.5（智源），API 调用选阿里 text-embedding-v3。选模型看语言 → 部署方式 → 维度和性能 trade-off。</p>
        <p><strong>向量数据库：别纠结太久。</strong>原型用 Chroma（pip install 就能用），生产看 Qdrant/Milvus/Pinecone。先把 pipeline 跑通再说。</p>

        <h2 id="sec-4-gen">四代 RAG 架构</h2>
        <p>理解「为什么会这样演进」比背概念更重要。</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>Naive RAG（2020-2022）</strong> —— 查询 → 向量检索 → Top-K → 塞 Prompt → 生成。线性流水线，简单但脆，检索错了就全错。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>Advanced RAG（2023-2024）</strong> —— 检索前加查询重写/HyDE，检索中混合检索（向量+BM25），检索后 Reranking。混合检索 NDCG 提升 22-28%，Reranking 精度 +33% 延迟仅 +120ms。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>Modular RAG（2024）</strong> —— 所有模块拆开可插拔。路由、检索、过滤、重排、生成每个环节独立替换。灵活但复杂。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">4.</span>
            <div className="blog-insight-content"><strong>Agentic RAG（2025-2026）</strong> —— 让 Agent 自己决定要不要检索、检索哪个库、结果够不够好。2026 年共识：已从实验性升级为生产默认架构。</div>
          </div>
        </div>

        <h2 id="sec-death">生产环境的六种死法</h2>
        <p>理论再好，上线挂了就是挂了。一个扎心的数据：<strong>40-60% 的 RAG 实现没能上线生产。</strong>根因基本都在检索层。</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>检索失败</strong> —— 查询和文档措辞不同，检索不到。→ 用 HyDE、查询重写、Contextual Retrieval</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>上下文丢失</strong> —— 关键信息被切在两个 chunk 里。→ Parent-Child 策略、增大 Overlap</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>幻觉仍然存在</strong> —— 模型忽略文档用自己的「知识」瞎编。→ 强化 Prompt 指令 + 降低 Temperature + CRAG 纠错</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">4.</span>
            <div className="blog-insight-content"><strong>检索到不相关文档</strong> —— Top-K 里混进噪音。→ 加 Reranking、设置相关性阈值</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">5.</span>
            <div className="blog-insight-content"><strong>Token 超限</strong> —— 检索太多文档塞不进上下文。→ 上下文压缩、动态调整 K 值</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">6.</span>
            <div className="blog-insight-content"><strong>延迟太高</strong> —— 用户等不了 10 秒。→ 缓存高频查询、异步检索、Prompt Caching（可降 90% 成本）</div>
          </div>
        </div>

        <h2 id="sec-stack">我实际用到的技术栈</h2>
        <p>在字节实习的教育智能体项目里，我的迭代路径：</p>
        <div className="blog-code-block">
          <span className="blog-code-lang">iteration</span>
          <pre><code>
            <span className="blog-code-line"><span className="blog-str">{"P0：纯向量检索（Naive RAG）"}</span></span>
            <span className="blog-code-line"><span className="blog-cm">{"  ↓ 准确率不够"}</span></span>
            <span className="blog-code-line"><span className="blog-str">{"P1：加 Contextual Retrieval"}</span></span>
            <span className="blog-code-line"><span className="blog-cm">{"  ↓ 关键词场景还是漏"}</span></span>
            <span className="blog-code-line"><span className="blog-str">{"P2：混合检索（向量 + BM25）"}</span></span>
            <span className="blog-code-line"><span className="blog-cm">{"  ↓ Top-K 里有噪音"}</span></span>
            <span className="blog-code-line"><span className="blog-str">{"P3：加 Reranker 重排序"}</span></span>
          </code></pre>
        </div>
        <p>每一步都是被实际问题逼出来的。不是一开始就设计好「我要用 Advanced RAG」，是 Naive RAG 不够用了才一步步往上加。</p>
        <p>技术选型：Embedding 用 text-embedding-v4，向量库 ChromaDB（原型阶段），框架 LangChain，模型 DeepSeek-V3.2。</p>

        <h2 id="sec-conclusions">几个我记住的结论</h2>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>Reranking 是性价比最高的优化</strong> —— 加一个 Cross-Encoder，精度 +33%，延迟才多 120ms。如果你只能做一件事，做这个。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>Chunking 策略影响比你想象的大</strong> —— 不要用默认固定分块。至少试试递归分割。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>评估不是事后想起来再做的事</strong> —— 从第一天就定好 metrics（Context Precision、Faithfulness、Answer Relevancy），不然根本不知道改了是变好还是变差。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">4.</span>
            <div className="blog-insight-content"><strong>长上下文不是 RAG 的替代品，是搭档</strong> —— 两个一起用。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">5.</span>
            <div className="blog-insight-content"><strong>先跑通再优化</strong> —— Chroma + 递归分割 + bge-large-zh，三件套先跑起来，有了 baseline 再说。</div>
          </div>
        </div>
        <p>RAG 不难。每一步拆开看都不难。难的是把每一步串在一起让系统在生产环境里稳定地跑，难的是知道什么时候该加什么。</p>
        <p><em>写于 2026 年 4 月。一个还在学习的 AI 产品实习生。参考了 25+ 篇论文和工程实践文档。</em></p>
      </>
    ),
  },

  "streamlit-embedding-feedback": {
    toc: [
      { id: "sec-problem", label: "问题：反馈太多看不完" },
      { id: "sec-solution", label: "方案：Embedding + 聚类" },
      { id: "sec-result", label: "效果与代码" },
    ],
    body: (
      <>
        <p>用户反馈太多看不完？用 Embedding 聚类 + Streamlit 可视化，两天做了个内部工具。分享思路和关键代码。</p>

        <h2 id="sec-problem">问题：反馈太多看不完</h2>
        <p>我们产品每天收到几百条用户反馈，来自 App Store 评论、客服工单、社交媒体。PM 每天花 2 小时看反馈，还是觉得看不完。</p>
        <blockquote><p>人工看反馈的问题不是效率低，而是容易形成偏见——你总是被最「吵」的反馈吸引注意力。</p></blockquote>

        <h2 id="sec-solution">方案：Embedding + 聚类</h2>
        <p>核心思路很简单：把每条反馈转成 Embedding 向量，然后用 K-Means 聚类，最后让 AI 给每个类起名字。</p>
        <div className="blog-code-block">
          <span className="blog-code-lang">python</span>
          <pre><code>
            <span className="blog-code-line"><span className="blog-cm"># 1. 获取 embedding</span></span>
            <span className="blog-code-line"><span className="blog-str">embeddings = get_embeddings(feedbacks)</span></span>
            <span className="blog-code-line"> </span>
            <span className="blog-code-line"><span className="blog-cm"># 2. 聚类</span></span>
            <span className="blog-code-line"><span className="blog-str">clusters = KMeans(n_clusters=8).fit(embeddings)</span></span>
            <span className="blog-code-line"> </span>
            <span className="blog-code-line"><span className="blog-cm"># 3. AI 命名每个类</span></span>
            <span className="blog-code-line"><span className="blog-str">labels = name_clusters(clusters, feedbacks)</span></span>
          </code></pre>
        </div>
        <p>关键是聚类数量的选择。太少会混在一起，太多会碎片化。我用 Silhouette Score 自动选最优 K 值。</p>

        <h2 id="sec-result">效果与代码</h2>
        <p>用 Streamlit 做了个可视化看板：左边是聚类列表（按数量排序），右边是具体反馈。点击某个类可以下钻看详情。</p>
        <div className="blog-insight-list">
          <div className="blog-insight-item">
            <span className="blog-insight-idx">1.</span>
            <div className="blog-insight-content"><strong>效率提升 5x</strong> —— 以前花 2 小时看反馈，现在 20 分钟就能把握全貌。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">2.</span>
            <div className="blog-insight-content"><strong>发现了隐藏需求</strong> —— 有些低频但集中的反馈之前被忽略了，聚类后浮出水面。</div>
          </div>
          <div className="blog-insight-item">
            <span className="blog-insight-idx">3.</span>
            <div className="blog-insight-content"><strong>总成本不到 $5/月</strong> —— Embedding API 很便宜，Streamlit 部署在内网。</div>
          </div>
        </div>
      </>
    ),
  },
};

export function getArticleContent(slug: string): ArticleContent | undefined {
  return articles[slug];
}
