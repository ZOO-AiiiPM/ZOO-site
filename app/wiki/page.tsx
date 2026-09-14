"use client";

import Link from "next/link";
import { GitHubMark } from "@/components/GitHubMark";
import { PixelAvatar } from "@/components/PixelArt";
import { WIKI_META } from "./data";
import { WikiSearch } from "./WikiSearch";
import { CliLine, Typewriter, StaggerReveal } from "../../components/CliAnimations";
import "./wiki.css";
import "./wiki-search.css";

// Wiki 顶部专属 nav（不沿用全局 .nav）
function WikiIndexNav() {
  return (
    <nav className="wiki-index-nav" aria-label="Wiki 顶部导航">
      <Link href="/" className="wiki-index-nav-logo" aria-label="Winston，回到首页">
        <PixelAvatar size={28} />
        <span className="wiki-index-nav-wordmark">WINSTON</span>
      </Link>
      <div className="wiki-index-nav-links">
        <WikiSearch />
        <a
          className="wiki-index-nav-icon"
          href="https://github.com/ZOO-AiiiPM"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubMark size={22} />
        </a>
        <Link href="/" className="wiki-index-nav-text">← home</Link>
      </div>
    </nav>
  );
}

export default function WikiIndexPage() {
  return (
    <div className="wiki-index">
      <WikiIndexNav />

      {/* Header */}
      <header className="wiki-index-head">
        <CliLine delay={0}>
          <div className="wiki-index-eyebrow">{"// knowledge base"}</div>
        </CliLine>
        <CliLine delay={80}>
          <h1 className="wiki-index-title">
            <span className="wiki-index-title-bracket">{"{"}</span>
            <span className="wiki-index-title-text">wiki</span>
            <span className="wiki-index-title-bracket">{"}"}</span>
          </h1>
        </CliLine>
        <CliLine delay={160}>
          <p className="wiki-index-tagline">
            <Typewriter text="AI 产品经理工作需要的两套方法论" />
          </p>
        </CliLine>
      </header>

      {/* Wiki 卡片网格 */}
      <StaggerReveal selector=".wiki-index-card" interval={120}>
        <div className="wiki-index-grid">
          {WIKI_META.map((wiki) => {
            // 直接链到首个词条，绕过 /wiki/[slug] 这个纯重定向路由。
            // 否则客户端导航时会先停在中间态：那一帧既没有 .wiki-index
            // 也没有 .wiki-detail-layout，全局 <Nav /> 会露出来，
            // 表现为“闪过一页别的页面”。
            const firstEntry = wiki.chapters[0]?.entries[0]?.id;
            return (
              <Link
                key={wiki.slug}
                href={firstEntry ? `/wiki/${wiki.slug}/${firstEntry}` : `/wiki/${wiki.slug}`}
                className={`wiki-index-card wiki-index-card-${wiki.accent} cli-stagger-item`}
              >
              <div className="wiki-index-card-head">
                <span className="wiki-index-card-icon" aria-hidden="true">
                  {wiki.slug === "pm" ? "📐" : "🤖"}
                </span>
                <span className="wiki-index-card-count">
                  {wiki.chapters.reduce((sum, c) => sum + c.entries.length, 0)} terms ·{" "}
                  {wiki.chapters.length} chapters
                </span>
              </div>
              <h2 className="wiki-index-card-name">{wiki.name}</h2>
              <p className="wiki-index-card-tagline">{wiki.tagline}</p>
              <p className="wiki-index-card-desc">{wiki.description}</p>
              <div className="wiki-index-card-chapters">
                {wiki.chapters.map((c) => (
                  <span key={c.id} className="wiki-index-card-chapter">
                    {c.title}
                    <small>{c.entries.length}</small>
                  </span>
                ))}
              </div>
              <span className="wiki-index-card-cta">
                进入阅读 <span aria-hidden="true">→</span>
              </span>
              </Link>
            );
          })}
        </div>
      </StaggerReveal>

      {/* 底部信息条：与正文页一致（左版权、右导航链接的横条） */}
      <footer className="wiki-index-foot">
        <p className="wiki-index-foot-copy">© 2026 Winston</p>
        <div className="wiki-index-foot-links">
          <a href="https://github.com/ZOO-AiiiPM" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubMark size={20} />
            <span>GitHub</span>
          </a>
          <a href="mailto:zhouwenxi008520@gmail.com">
            <span>Email</span>
          </a>
          <Link href="/">Winston 主页 ↗</Link>
        </div>
      </footer>
    </div>
  );
}