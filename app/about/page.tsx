"use client";

import { CliLine, Typewriter, StaggerReveal, SectionHead } from "../../components/CliAnimations";
import { PixelTitle } from "../projects/PixelTitle";
import "./about.css";

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

const CONTACTS = [
  { flag: "--twitter", value: "@zoo", link: "→ twitter.com", href: "https://twitter.com" },
  { flag: "--jike", value: "Winston", link: "→ okjike.com", href: "https://okjike.com" },
  { flag: "--github", value: "zoo", link: "→ github.com", href: "https://github.com" },
  { flag: "--email", value: "zoo@example.com", link: "→ mailto:", href: "mailto:zoo@example.com" },
];

/* ---- Page ---- */

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* === Header — static title, typewriter comment === */}
      <div className="about-head">
        <div className="about-title-line">
          <span className="about-arrow-lg">❯</span>
          <PixelTitle text="ABOUT" />
        </div>
        <div className="about-sub">
          <span className="about-comment">{"// "}<Typewriter text="Winston — AI PM × Vibe Coder" /></span>
        </div>
        <div className="about-stats">
          <span>type &quot;human&quot;</span>
          <span className="about-sep">│</span>
          <span className="about-stat-exp">● 4y experience</span>
          <span className="about-sep">│</span>
          <span className="about-stat-proj">● 6 projects</span>
          <span className="about-sep">│</span>
          <span className="about-stat-stack">● AI × Product × Code</span>
        </div>
      </div>

      {/* === Bio — slide in, first sentence typewriter === */}
      <CliLine delay={80}>
        <div className="about-bio">
          <p>嗨，我是 Winston。一个在 AI 时代重新定义自己的产品经理。</p>
          <p>
            我相信最好的 AI 产品不是炫技，而是<strong>让人感觉不到 AI 的存在</strong>。
            当技术消隐于体验之中，用户才能真正感受到产品的价值。这是我做产品的核心信念，也是我持续探索的方向。
          </p>
        </div>
      </CliLine>

      {/* === Experience — items slide in, inner stack/pid delayed fade === */}
      <div className="about-section">
        <CliLine>
          <SectionHead className="about-section-head">
            <span className="section-arrow">❯</span>
            experience
          </SectionHead>
        </CliLine>
        <CliLine delay={60}>
          <div className="about-exp-table-head">
            <span>PROCESS</span>
            <span>TIME</span>
            <span>STATUS</span>
          </div>
        </CliLine>
        {EXPERIENCES.map((exp, i) => (
          <CliLine key={exp.pid} delay={i * 120}>
            <div className="about-exp-item">
              <span className="about-exp-arrow">›</span>
              <div className="about-exp-main">
                <div className="about-exp-role">{exp.role}</div>
                <div className="about-exp-desc">{exp.desc}</div>
                {/* stack line: delayed fade after parent slides in */}
                <div className="about-exp-stack cli-inner-stagger">
                  <span className="stack-key">stack</span>
                  <span className="stack-eq">=</span>
                  <span className="stack-val">
                    [{exp.stack.map((s) => `"${s}"`).join(", ")}]
                  </span>
                </div>
                {/* PID: even more delayed */}
                <div className="about-exp-pid cli-inner-stagger">PID {exp.pid}</div>
              </div>
              <div className="about-exp-time">{exp.time}</div>
              <div>
                <span className={`about-exp-badge about-exp-badge-${exp.status}${exp.status === 'running' ? ' cli-pulse' : ''}`}>
                  {exp.status === "running" ? "●" : "○"} {exp.status.toUpperCase()}
                </span>
              </div>
            </div>
          </CliLine>
        ))}
      </div>

      {/* === Beliefs — items stagger in, content typewriter-like === */}
      <div className="about-section">
        <CliLine>
          <SectionHead className="about-section-head">
            <span className="section-arrow">❯</span>
            beliefs
          </SectionHead>
        </CliLine>
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
      </div>

      {/* === Vibe Coding — card slides in, title typewriter, vars stagger === */}
      <div className="about-section">
        <CliLine>
          <SectionHead className="about-section-head">
            <span className="section-arrow">❯</span>
            vibe coding
          </SectionHead>
        </CliLine>
        <CliLine delay={80}>
          <div className="about-vibe-card">
            <div className="about-vibe-bar">
              <div className="about-vibe-dots">
                <span className="about-vibe-dot about-vibe-dot-r" />
                <span className="about-vibe-dot about-vibe-dot-y" />
                <span className="about-vibe-dot about-vibe-dot-g" />
              </div>
              <span className="about-vibe-filename">vibe-coding.config</span>
            </div>
            <div className="about-vibe-body">
              <div className="about-vibe-title-row">
                <span className="about-vibe-arrow">❯</span>
                <span className="about-vibe-title">我用 AI 写代码</span>
              </div>
              <div className="about-vibe-text cli-inner-stagger">
                不是为了成为工程师，而是为了把想法直接变成可以运行的产品。这个网站就是用 Claude Code 多 Agent 协作构建的。Vibe Coding 让产品经理第一次拥有了自己动手的能力。
              </div>
              <StaggerReveal selector=".about-vibe-var" interval={150}>
                <div className="about-vibe-vars">
                  <div className="about-vibe-var cli-stagger-item">
                    <span className="about-vibe-var-key">primary_tool</span>
                    <span className="about-vibe-var-eq">=</span>
                    <span className="about-vibe-var-str">&quot;Claude Code&quot;</span>
                  </div>
                  <div className="about-vibe-var cli-stagger-item">
                    <span className="about-vibe-var-key">also_use</span>
                    <span className="about-vibe-var-eq">=</span>
                    <span className="about-vibe-var-val">[&quot;Cursor&quot;, &quot;v0&quot;, &quot;Bolt&quot;]</span>
                  </div>
                  <div className="about-vibe-var cli-stagger-item">
                    <span className="about-vibe-var-key">projects_shipped</span>
                    <span className="about-vibe-var-eq">=</span>
                    <span className="about-vibe-var-val">6</span>
                  </div>
                  <div className="about-vibe-var cli-stagger-item">
                    <span className="about-vibe-var-key">philosophy</span>
                    <span className="about-vibe-var-eq">=</span>
                    <span className="about-vibe-var-str">&quot;think like a PM, ship like an engineer&quot;</span>
                  </div>
                </div>
              </StaggerReveal>
            </div>
          </div>
        </CliLine>
      </div>

      {/* === Contact — typewriter cmd, stagger rows === */}
      <div className="about-section">
        <CliLine>
          <SectionHead className="about-section-head">
            <span className="section-arrow">❯</span>
            contact
          </SectionHead>
        </CliLine>
        <CliLine delay={60}>
          <div className="about-contact-cmd">
            <span className="cmd-arrow">$</span>
            <span className="cmd-name"><Typewriter text="winston --contact" startDelay={200} speed={60} /></span>
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
      </div>
    </div>
  );
}
