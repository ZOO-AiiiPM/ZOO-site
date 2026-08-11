"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CliLine, Typewriter, StaggerReveal } from "@/components/CliAnimations";
import "./about/about.css";
import "./projects/projects.css";

/* ---- Data ---- */

const EXPERIENCES = [
  {
    role: "AI 产品经理",
    desc: "负责 AI 产品线，从 0 到 1 搭建 AI 能力平台，推动 AI 在核心业务的落地。",
    stack: ["AI Strategy", "LLM", "Agent", "Product Design"],
    time: "2024 - present",
    status: "running" as const,
    pid: "2024",
  },
  {
    role: "高级产品经理",
    desc: "负责核心业务产品的规划与迭代，主导多个千万级用户产品的功能设计。",
    stack: ["B2C", "Growth", "Data Analysis", "A/B Test"],
    time: "2022 - 2024",
    status: "exited" as const,
    pid: "2022",
  },
  {
    role: "产品经理",
    desc: "从 0 到 1 构建用户增长体系，负责拉新、留存和转化链路的产品设计。",
    stack: ["User Growth", "Retention", "Funnel", "SQL"],
    time: "2020 - 2022",
    status: "exited" as const,
    pid: "2020",
  },
];

const BELIEFS = [
  { title: "用户价值优先", text: "最好的 AI 产品让人感觉不到 AI 的存在，技术是手段不是目的。" },
  { title: "产品经理要会写代码", text: "不是为了取代工程师，而是为了把想法直接变成可运行的产品原型。" },
  { title: "AI 时代的 PM 需要新能力模型", text: "Prompt Engineering 不是核心竞争力，理解 AI 的边界和产品化才是。" },
  { title: "做出来比想出来重要", text: "一个能跑的 demo 胜过十页 PRD，Vibe Coding 让这件事成为可能。" },
];

interface Project {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  status: "running" | "shipped" | "building";
  pid: string;
}

const PROJECTS: Project[] = [
  {
    name: "ai-daily-report",
    title: "AI 日报生成器",
    desc: "自动抓取 AI 领域最新动态，生成每日摘要推送到飞书群。支持自定义关注领域和推送时间。",
    tags: ["Python", "Claude API", "飞书", "Cron"],
    status: "running",
    pid: "2847",
  },
  {
    name: "competitor-monitor",
    title: "竞品监控看板",
    desc: "自动追踪竞品官网、App Store 更新日志，AI 提取关键变化生成对比报告。",
    tags: ["Next.js", "Puppeteer", "Vercel"],
    status: "shipped",
    pid: "3012",
  },
  {
    name: "prd-assistant",
    title: "PRD 智能助手",
    desc: "Chrome 插件，输入需求描述自动生成结构化 PRD，支持导出 Notion/飞书文档格式。",
    tags: ["Chrome Extension", "DeepSeek", "React"],
    status: "building",
    pid: "3156",
  },
  {
    name: "feedback-cluster",
    title: "用户反馈聚类工具",
    desc: "接入 App Store 评论和客服工单，AI 自动聚类分析，生成可视化的需求优先级矩阵。",
    tags: ["Python", "Streamlit", "Embedding"],
    status: "shipped",
    pid: "3289",
  },
  {
    name: "ask-zoo",
    title: "AI 分身对话",
    desc: "基于 DeepSeek API 的个人 AI 分身，了解我的经历和性格。页面底部可以直接问它。",
    tags: ["Next.js", "DeepSeek", "SSE"],
    status: "running",
    pid: "3401",
  },
  {
    name: "zoo.dev",
    title: "这个网站",
    desc: "你正在看的个人网站，也是一个 Vibe Coding 项目。从设计到代码全程 AI 协作。",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "running",
    pid: "3567",
  },
];

const statusConfig = {
  running: { label: "RUNNING", dot: "●" },
  shipped: { label: "SHIPPED", dot: "✓" },
  building: { label: "BUILDING", dot: "◌" },
};

const CONTACTS = [
  { flag: "--github", value: "github.com/zoo", link: "→ open", href: "https://github.com" },
  { flag: "--email", value: "zoo@zooooo.site", link: "→ mailto:", href: "mailto:zoo@zooooo.site" },
];

function SectionHead({ label }: { label: string }) {
  return (
    <div className="lp-section-head">
      <span className="lp-arrow">❯</span>
      <h2>{label}</h2>
    </div>
  );
}

export default function Home() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const [askInput, setAskInput] = useState("");
  const d = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

  useEffect(() => {
    const placeholder = placeholderRef.current;
    const titleEl = titleRef.current;
    const nav = document.querySelector(".nav") as HTMLElement;
    const navLogo = document.querySelector(".nav-logo") as HTMLElement;
    if (!placeholder || !titleEl || !nav || !navLogo) return;

    // nav logo 需要溢出显示
    nav.style.overflow = "visible";
    nav.querySelector(".nav-inner")!.setAttribute("style", "overflow:visible");
    navLogo.style.transformOrigin = "top left";
    nav.style.borderBottomColor = "transparent";

    // 计算 navLogo 自然位置 → hero placeholder 位置的偏移
    const navLogoRect = navLogo.getBoundingClientRect();
    const placeholderRect = placeholder.getBoundingClientRect();
    const initX = placeholderRect.left - navLogoRect.left;
    const initY = placeholderRect.top - navLogoRect.top;
    const startScale = 80 / 28; // 2.857

    // 初始：navLogo 放大并移到 hero 位置
    navLogo.style.transform = `translate(${initX}px, ${initY}px) scale(${startScale})`;

    // boot 动画结束后启用滚动
    let scrollEnabled = false;
    const timer = setTimeout(() => { scrollEnabled = true; }, 1200);

    const handleScroll = () => {
      if (!scrollEnabled) return;

      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / 200));

      const scale = startScale - progress * (startScale - 1);
      const tx = initX * (1 - progress);
      const ty = initY * (1 - progress);
      navLogo.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;

      // nav border
      const titleTop = titleEl.getBoundingClientRect().top;
      const navBottom = nav.getBoundingClientRect().bottom;
      nav.style.borderBottomColor = titleTop <= navBottom ? "" : "transparent";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      navLogo.style.transform = "";
      navLogo.style.transformOrigin = "";
      nav.style.overflow = "";
      nav.querySelector(".nav-inner")?.removeAttribute("style");
      nav.style.borderBottomColor = "";
    };
  }, []);

  function startAskZoo() {
    const q = askInput.trim();
    if (!q) return;
    router.push(`/ask-zoo?q=${encodeURIComponent(q)}`);
  }

  return (
    <div className="page-container">
      {/* Boot sequence */}
      <div className="boot-intro">
        <span className="boot-cursor" />
        <span className="boot-text">
          <span className="boot-prompt">&gt;</span>zoo.dev
        </span>
      </div>

      {/* Hero top spacing */}
      <div style={{ height: 40 }} />

      {/* Placeholder：navLogo 会 transform 到这个位置 */}
      <div ref={placeholderRef} style={{ height: 28, width: 93, marginBottom: 24 }} />

      {/* Spacer for visual height of scaled logo */}
      <div style={{ height: 52 }} />

      {/* Title */}
      <h1 ref={titleRef} className="boot-title" style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.2, marginBottom: 20 }}>
        AI PM &amp;{" "}
        <span style={{
          background: "linear-gradient(135deg, var(--green), var(--purple))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Vibe Coder
        </span>{" "}
        👋
      </h1>

      {/* Description */}
      <p className="boot-blur" style={{ ...d(2200), fontSize: 18, color: "var(--text2)", maxWidth: 560, lineHeight: 1.8, marginBottom: 28 }}>
        用产品思维理解 AI，用 AI 构建产品。我写关于 AI 产品的思考，也用 AI 亲手造工具。
      </p>

      {/* Tags */}
      <div className="boot-blur" style={{ ...d(2400), display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 80 }}>
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

      {/* ===== About ===== */}
      <section id="about" className="lp-section">
        <CliLine>
          <SectionHead label="about" />
        </CliLine>
        <CliLine delay={60}>
          <div className="about-bio">
            <p>嗨，我是 Zoo。一个在 AI 时代重新定义自己的产品经理。</p>
            <p>
              我相信最好的 AI 产品不是炫技，而是<strong>让人感觉不到 AI 的存在</strong>。
              当技术消隐于体验之中，用户才能真正感受到产品的价值。这是我做产品的核心信念，也是我持续探索的方向。
            </p>
          </div>
        </CliLine>
        <div style={{ height: 28 }} />
        {EXPERIENCES.map((exp, i) => (
          <CliLine key={exp.pid} delay={i * 120}>
            <div className="about-exp-item">
              <span className="about-exp-arrow">›</span>
              <div className="about-exp-main">
                <div className="about-exp-role">{exp.role}</div>
                <div className="about-exp-desc">{exp.desc}</div>
                <div className="about-exp-stack cli-inner-stagger">
                  <span className="stack-key">stack</span>
                  <span className="stack-eq">=</span>
                  <span className="stack-val">
                    [{exp.stack.map((s) => `"${s}"`).join(", ")}]
                  </span>
                </div>
              </div>
              <div className="about-exp-time">{exp.time}</div>
              <div>
                <span className={`about-exp-badge about-exp-badge-${exp.status}${exp.status === "running" ? " cli-pulse" : ""}`}>
                  {exp.status === "running" ? "●" : "○"} {exp.status.toUpperCase()}
                </span>
              </div>
            </div>
          </CliLine>
        ))}
        <div style={{ height: 32 }} />
        {BELIEFS.map((b, i) => (
          <CliLine key={i} delay={i * 100}>
            <div className="about-belief-item">
              <span className="about-belief-idx">{String(i + 1).padStart(2, "0")}</span>
              <div className="about-belief-content">
                <strong>{b.title}</strong> — {b.text}
              </div>
            </div>
          </CliLine>
        ))}
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="lp-section">
        <CliLine>
          <SectionHead label="projects" />
        </CliLine>
        <StaggerReveal selector=".proj-card" interval={80}>
          <div className="proj-grid">
            {PROJECTS.map((project) => {
              const status = statusConfig[project.status];
              return (
                <div key={project.name} className="proj-card cli-stagger-item">
                  <div className="proj-bar">
                    <div className="proj-dots">
                      <span className="proj-dot proj-dot-r" />
                      <span className="proj-dot proj-dot-y" />
                      <span className="proj-dot proj-dot-g" />
                    </div>
                    <span className="proj-filename">{project.name}</span>
                    <span className={`proj-badge proj-badge-${project.status}${project.status === "running" ? " cli-pulse" : ""}`}>
                      {status.dot} {status.label}
                    </span>
                  </div>
                  <div className="proj-body">
                    <div className="proj-title-row">
                      <span className="proj-arrow">❯</span>
                      <h3 className="proj-name">{project.title}</h3>
                    </div>
                    <p className="proj-desc">{project.desc}</p>
                    <div className="proj-stack cli-inner-stagger">
                      <span className="proj-stack-key">stack</span>
                      <span className="proj-stack-eq">=</span>
                      <span className="proj-stack-val">
                        [{project.tags.map((tag, i) => (
                          <span key={tag}>
                            <span className="proj-tag">&quot;{tag}&quot;</span>
                            {i < project.tags.length - 1 && <span className="proj-tag-comma">, </span>}
                          </span>
                        ))}]
                      </span>
                    </div>
                    <div className="proj-meta cli-inner-stagger">
                      <span>PID {project.pid}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </StaggerReveal>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="lp-section">
        <CliLine>
          <SectionHead label="contact" />
        </CliLine>
        <CliLine delay={60}>
          <div className="about-contact-cmd" style={{ marginBottom: 16 }}>
            <span className="cmd-arrow">$</span>
            <span className="cmd-name"><Typewriter text="zoo --contact" startDelay={200} speed={60} /></span>
          </div>
        </CliLine>
        <StaggerReveal selector=".about-contact-row" interval={100}>
          <div className="about-contact-list">
            {CONTACTS.map((c) => (
              <a
                key={c.flag}
                href={c.href}
                className="about-contact-row cli-stagger-item"
                target={c.flag !== "--email" ? "_blank" : undefined}
                rel={c.flag !== "--email" ? "noopener noreferrer" : undefined}
              >
                <span className="about-contact-cursor">›</span>
                <span className="about-contact-flag">{c.flag}</span>
                <span className="about-contact-value">{c.value}</span>
                <span className="about-contact-link">{c.link}</span>
              </a>
            ))}
          </div>
        </StaggerReveal>
      </section>

      {/* ===== Ask Zoo ===== */}
      <section id="ask-zoo" className="lp-section">
        <CliLine>
          <SectionHead label="ask zoo" />
        </CliLine>
        <CliLine delay={60}>
          <div className="lp-askzoo">
            <div className="lp-askzoo-title">zoo.skill v1.0 — 我的 AI 分身</div>
            <p className="lp-askzoo-desc">
              想了解真实的我？直接问它。对话会在独立的终端页面进行，支持深度的自由提问。 (｡•̀ᴗ-)✧
            </p>
            <div className="lp-askzoo-row">
              <span className="lp-askzoo-prompt">❯</span>
              <input
                className="lp-askzoo-input"
                value={askInput}
                onChange={(e) => setAskInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    startAskZoo();
                  }
                }}
                placeholder="问点什么，比如：who is Zoo?"
              />
              <span className="lp-askzoo-enter">⏎ enter</span>
            </div>
            <div className="lp-askzoo-hint">
              <span className="lp-hint-dot" />
              powered by DeepSeek · 输入后自动进入对话页
            </div>
          </div>
        </CliLine>
      </section>
    </div>
  );
}