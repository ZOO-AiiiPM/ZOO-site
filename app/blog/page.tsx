"use client";

import Link from "next/link";
import { useState } from "react";
import { PixelTitle } from "../projects/PixelTitle";
import { ARTICLES } from "./data";
import { CliLine, Typewriter, StaggerReveal } from "../../components/CliAnimations";
import "./blog.css";

type Category = "全部" | "AI PM" | "Vibe Coding" | "Agent" | "观点";

const FILTERS: { key: Category; path: string }[] = [
  { key: "全部", path: "*" },
  { key: "AI PM", path: "ai-pm" },
  { key: "Vibe Coding", path: "vibe" },
  { key: "Agent", path: "agent" },
  { key: "观点", path: "think" },
];

function countByCategory(cat: string) {
  return ARTICLES.filter((a) => a.category === cat).length;
}

export default function BlogPage() {
  const [active, setActive] = useState<Category>("全部");

  const filtered =
    active === "全部"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === active);

  return (
    <div className="blog-page-container">
      {/* Header — title static, comment typewriter */}
      <div className="blog-head">
        <div className="blog-title-line">
          <span className="blog-arrow-lg">›</span>
          <PixelTitle text="BLOG" />
        </div>
        <div className="blog-sub">
          <span className="blog-comment">{"// "}<Typewriter text="关于 AI 产品、Vibe Coding 和独立思考" /></span>
        </div>
        <div className="blog-stats">
          <span>total {ARTICLES.length}</span>
          <span className="blog-sep">│</span>
          <span className="blog-stat-vibe">● {countByCategory("Vibe Coding")} vibe coding</span>
          <span className="blog-sep">│</span>
          <span className="blog-stat-pm">● {countByCategory("AI PM")} ai pm</span>
          <span className="blog-sep">│</span>
          <span className="blog-stat-agent">● {countByCategory("Agent")} agent</span>
          <span className="blog-sep">│</span>
          <span className="blog-stat-think">● {countByCategory("观点")} 观点</span>
        </div>
      </div>

      {/* Filters — slide in */}
      <CliLine delay={80}>
        <div className="blog-filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`blog-filter-tab${active === f.key ? " active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              <svg className="blog-filter-chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4"/></svg>
              <svg className="blog-filter-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M2 3.5h4.5l1.5 2H14v8H2z"/></svg>
              <span className="blog-filter-name">~/{f.path}</span>
            </button>
          ))}
        </div>
      </CliLine>

      {/* Article rows — stagger reveal, re-animates on filter change */}
      <StaggerReveal key={active} selector=".blog-row" interval={60}>
        <div className="blog-list">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="blog-row cli-stagger-item"
            >
              <svg className="blog-row-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 1.5h6.5L13 5v9.5H3z"/><path d="M9.5 1.5V5H13"/></svg>
              <span className="blog-row-date">{article.date}</span>
              <span className="blog-row-title">{article.title}</span>
              <span className={`blog-row-tag ${article.tagClass} cli-inner-stagger`}>
                {article.tag}
              </span>
            </Link>
          ))}
        </div>
      </StaggerReveal>
    </div>
  );
}
