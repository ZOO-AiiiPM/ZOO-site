"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getArticle, getAdjacentArticles } from "../data";
import { getArticleContent } from "../content";
import { CliLine, Typewriter, StaggerReveal } from "../../../components/CliAnimations";
import type { TocItem } from "../data";
import "../blog.css";

function smoothScroll(targetY: number) {
  const startY = window.scrollY;
  const distance = Math.abs(targetY - startY);
  if (distance < 1) return;
  const duration = Math.min(1200, Math.max(500, Math.sqrt(distance) * 25));
  const startTime = performance.now();
  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + (targetY - startY) * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 150);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      className={`detail-toc-btn blog-back-top${visible ? " visible" : ""}`}
      onClick={() => smoothScroll(0)}
      aria-label="返回顶部"
    >
      ↑ top
    </button>
  );
}

function TocSidebar({ toc }: { toc: TocItem[] }) {
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      smoothScroll(el.offsetTop - 80);
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  useEffect(() => {
    const sections = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const handler = () => {
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.classList.toggle("active", el.getAttribute("href") === "#" + current);
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [toc]);

  return (
    <aside className="detail-toc">
      <div className="detail-toc-title">Contents</div>
      <nav className="detail-toc-list">
        {toc.map((t, i) => (
          <a
            key={t.id}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="detail-toc-item"
            href={`#${t.id}`}
            onClick={(e) => handleClick(e, t.id)}
          >
            {t.label}
          </a>
        ))}
      </nav>
      <BackToTop />
    </aside>
  );
}

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = getArticle(slug);
  const content = getArticleContent(slug);
  const { prev, next } = getAdjacentArticles(slug);

  if (!article || !content) {
    return (
      <div className="blog-page-container">
        <p style={{ color: "var(--text3)" }}>文章不存在</p>
        <Link href="/blog" className="detail-back-btn" style={{ marginTop: 16 }}>
          ← back
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-page-container">
      <div className="detail-grid">
        {/* Sidebar: sticky, spans full height */}
        <div className="detail-sidebar">
          <Link href="/blog" className="detail-toc-btn">← back</Link>
          <TocSidebar toc={content.toc} />
        </div>

        {/* Main content */}
        <div className="detail-main">
          <CliLine>
            <div className="detail-path">
              <span>~</span>
              <span className="path-sep">/</span>
              <span>blog</span>
              <span className="path-sep">/</span>
              <span className="path-file"><Typewriter text={`${slug}.md`} startDelay={200} speed={35} /></span>
            </div>
          </CliLine>
          <CliLine delay={80}>
            <div className="detail-header">
              <h1 className="detail-title">{article.title}</h1>
              <div className="detail-meta">
                <span className={`detail-tag ${article.tagClass} cli-inner-stagger`}>{article.tag}</span>
                <span className="detail-meta-sep cli-inner-stagger">·</span>
                <span className="cli-inner-stagger">{article.fullDate}</span>
                <span className="detail-meta-sep cli-inner-stagger">·</span>
                <span className="cli-inner-stagger">{article.wordCount}</span>
                <span className="detail-meta-sep cli-inner-stagger">·</span>
                <span className="cli-inner-stagger">{article.readTime}</span>
              </div>
            </div>
          </CliLine>

          <CliLine delay={160}>
            <div className="detail-body">
              {content.body}
            </div>
          </CliLine>
        </div>
      </div>

      {/* Footer — full width */}
      <CliLine>
        <div className="detail-footer">
          <StaggerReveal selector=".detail-bottom-tag" interval={80}>
            <div className="detail-tags">
              {article.hashtags.map((t) => (
                <span key={t.label} className={`detail-bottom-tag ${t.colorClass} cli-stagger-item`}>{t.label}</span>
              ))}
            </div>
          </StaggerReveal>

          <div className="detail-nav">
            {prev ? (
              <Link className="detail-nav-item prev" href={`/blog/${prev.slug}`}>
                <span className="detail-nav-title purple">{prev.title}</span>
                <span className="detail-nav-label purple">← 上一篇</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link className="detail-nav-item next" href={`/blog/${next.slug}`}>
                <span className="detail-nav-title green">{next.title}</span>
                <span className="detail-nav-label green">下一篇 →</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </CliLine>
    </div>
  );
}
