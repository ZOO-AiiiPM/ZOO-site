import Link from "next/link";
import { PixelAvatar, PixelZooText } from "@/components/PixelArt";

const articles = [
  { date: "Apr 08", title: "用 Claude Code 三天做了一个完整的 SaaS 产品", tag: "vibe coding", tagClass: "tag-vibe", slug: "claude-code-saas" },
  { date: "Apr 02", title: "AI PM 的核心能力模型：不只是写 PRD", tag: "ai pm", tagClass: "tag-pm", slug: "ai-pm-core-skills" },
  { date: "Mar 25", title: "为什么 Agent 产品的用户留存这么难做？", tag: "agent", tagClass: "tag-agent", slug: "agent-retention" },
  { date: "Mar 18", title: "Prompt Engineering 不是 AI PM 的核心竞争力", tag: "观点", tagClass: "tag-think", slug: "prompt-not-core" },
  { date: "Mar 10", title: "一个周末，用 AI 从零搭建了这个个人网站", tag: "vibe coding", tagClass: "tag-vibe", slug: "build-site-with-ai" },
];

const projects = [
  {
    icon: "🤖",
    name: "AI 日报生成器",
    desc: "自动抓取 AI 领域动态，生成每日摘要推送到飞书群",
    stack: ["Python", "Claude API", "飞书"],
  },
  {
    icon: "📊",
    name: "竞品监控看板",
    desc: "追踪竞品更新日志，AI 提取关键变化生成对比报告",
    stack: ["Next.js", "Puppeteer", "Vercel"],
  },
  {
    icon: "✍️",
    name: "PRD 智能助手",
    desc: "Chrome 插件，输入需求自动生成结构化 PRD 文档",
    stack: ["Extension", "DeepSeek"],
  },
  {
    icon: "🎯",
    name: "用户反馈聚类",
    desc: "接入评论和工单，AI 聚类分析生成需求优先级矩阵",
    stack: ["Python", "Streamlit"],
  },
];

export default function Home() {
  return (
    <div className="page-container">
      {/* ===== Hero ===== */}
      <section style={{ padding: "64px 0 72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <PixelAvatar size={80} />
          <PixelZooText scale={3} />
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.2, marginBottom: 20 }}>
          AI PM &amp;{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--green), var(--purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vibe Coder
          </span>{" "}
          👋
        </h1>
        <p style={{ fontSize: 18, color: "var(--text2)", maxWidth: 560, lineHeight: 1.8, marginBottom: 28 }}>
          用产品思维理解 AI，用 AI 构建产品。我写关于 AI 产品的思考，也用 AI 亲手造工具。
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["AI 产品", "Vibe Coding", "Agent", "独立开发", "产品方法论"].map((label) => (
            <span
              key={label}
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 4,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text2)",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ===== Writing ===== */}
      <section style={{ marginBottom: 72 }}>
        <div className="sec-head">
          <h2>WRITING</h2>
          <Link href="/blog">View all →</Link>
        </div>
        <div className="home-article-list">
          {articles.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="home-article-row">
              <span className="home-article-date">{a.date}</span>
              <span className="home-article-title">{a.title}</span>
              <span className={`home-article-tag ${a.tagClass}`}>{a.tag}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section>
        <div className="sec-head">
          <h2>PROJECTS</h2>
          <Link href="/projects">View all →</Link>
        </div>
        <div className="home-project-grid">
          {projects.map((p) => (
            <div key={p.name} className="home-project-card">
              <div className="home-project-icon">{p.icon}</div>
              <div className="home-project-name">{p.name}</div>
              <div className="home-project-desc">{p.desc}</div>
              <div className="home-project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="home-project-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
