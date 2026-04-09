"use client";

import Link from "next/link";
import { useState } from "react";
import "./blog.css";

type Category = "全部" | "AI PM" | "Vibe Coding" | "Agent" | "观点";

interface Article {
  date: string;
  title: string;
  tag: string;
  tagClass: string;
  slug: string;
  category: Exclude<Category, "全部">;
}

const ARTICLES: Article[] = [
  {
    date: "Apr 08",
    title: "用 Claude Code 三天做了一个完整的 SaaS 产品",
    tag: "vibe coding",
    tagClass: "tag-vibe",
    slug: "claude-code-saas-3-days",
    category: "Vibe Coding",
  },
  {
    date: "Apr 02",
    title: "AI PM 的核心能力模型：不只是写 PRD",
    tag: "ai pm",
    tagClass: "tag-pm",
    slug: "ai-pm-core-skills",
    category: "AI PM",
  },
  {
    date: "Mar 25",
    title: "为什么 Agent 产品的用户留存这么难做？",
    tag: "agent",
    tagClass: "tag-agent",
    slug: "agent-product-retention",
    category: "Agent",
  },
  {
    date: "Mar 18",
    title: "Prompt Engineering 不是 AI PM 的核心竞争力",
    tag: "观点",
    tagClass: "tag-think",
    slug: "prompt-engineering-not-core",
    category: "观点",
  },
  {
    date: "Mar 10",
    title: "一个周末，用 AI 从零搭建了这个个人网站",
    tag: "vibe coding",
    tagClass: "tag-vibe",
    slug: "ai-build-personal-site",
    category: "Vibe Coding",
  },
  {
    date: "Feb 20",
    title: "我在大厂做 AI 产品的 300 天",
    tag: "ai pm",
    tagClass: "tag-pm",
    slug: "ai-product-300-days",
    category: "AI PM",
  },
  {
    date: "Feb 05",
    title: "大模型产品的 PMF 在哪里？",
    tag: "观点",
    tagClass: "tag-think",
    slug: "llm-product-pmf",
    category: "观点",
  },
  {
    date: "Jan 20",
    title: "用 Streamlit + Embedding 做了个反馈分析工具",
    tag: "vibe coding",
    tagClass: "tag-vibe",
    slug: "streamlit-embedding-feedback",
    category: "Vibe Coding",
  },
];

const FILTERS: Category[] = ["全部", "AI PM", "Vibe Coding", "Agent", "观点"];

export default function BlogPage() {
  const [active, setActive] = useState<Category>("全部");

  const filtered =
    active === "全部"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === active);

  return (
    <div className="page-container">
      <div className="blog-head">
        <h1>文章</h1>
        <p>关于 AI 产品、Vibe Coding 和独立思考</p>
      </div>

      <div className="blog-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`blog-filter-btn${active === f ? " active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="blog-row"
          >
            <span className="blog-row-date">{article.date}</span>
            <span className="blog-row-title">{article.title}</span>
            <span className={`blog-row-tag ${article.tagClass}`}>
              {article.tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
