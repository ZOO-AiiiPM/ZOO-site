import type { ReactNode } from "react";

export interface ArticleMeta {
  slug: string;
  date: string;         // 列表显示用 (Apr 08)
  fullDate: string;     // 详情页显示用 (2026-04-08)
  title: string;
  tag: string;
  tagClass: string;
  category: "AI PM" | "Vibe Coding" | "Agent" | "观点";
  wordCount: string;
  readTime: string;
  hashtags: { label: string; colorClass: string }[];
}

export interface TocItem {
  id: string;
  label: string;
}

export interface ArticleFull extends ArticleMeta {
  toc: TocItem[];
  content: () => ReactNode;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "claude-code-saas-3-days",
    date: "Apr 08",
    fullDate: "2026-04-08",
    title: "用 Claude Code 三天做了一个完整的 SaaS 产品",
    tag: "vibe coding",
    tagClass: "tag-vibe",
    category: "Vibe Coding",
    wordCount: "~2800 字",
    readTime: "8 min read",
    hashtags: [
      { label: "#vibe-coding", colorClass: "t-vibe" },
      { label: "#claude-code", colorClass: "t-code" },
      { label: "#saas", colorClass: "t-saas" },
      { label: "#ai-pm", colorClass: "t-pm" },
    ],
  },
  {
    slug: "ai-pm-core-skills",
    date: "Apr 02",
    fullDate: "2026-04-02",
    title: "AI PM 的核心能力模型：不只是写 PRD",
    tag: "ai pm",
    tagClass: "tag-pm",
    category: "AI PM",
    wordCount: "~3200 字",
    readTime: "10 min read",
    hashtags: [
      { label: "#ai-pm", colorClass: "t-pm" },
      { label: "#product", colorClass: "t-saas" },
      { label: "#career", colorClass: "t-code" },
    ],
  },
  {
    slug: "agent-product-retention",
    date: "Mar 25",
    fullDate: "2026-03-25",
    title: "为什么 Agent 产品的用户留存这么难做？",
    tag: "agent",
    tagClass: "tag-agent",
    category: "Agent",
    wordCount: "~2500 字",
    readTime: "7 min read",
    hashtags: [
      { label: "#agent", colorClass: "t-pm" },
      { label: "#retention", colorClass: "t-saas" },
      { label: "#product", colorClass: "t-code" },
    ],
  },
  {
    slug: "prompt-engineering-not-core",
    date: "Mar 18",
    fullDate: "2026-03-18",
    title: "Prompt Engineering 不是 AI PM 的核心竞争力",
    tag: "观点",
    tagClass: "tag-think",
    category: "观点",
    wordCount: "~2000 字",
    readTime: "6 min read",
    hashtags: [
      { label: "#prompt", colorClass: "t-vibe" },
      { label: "#ai-pm", colorClass: "t-pm" },
      { label: "#opinion", colorClass: "t-saas" },
    ],
  },
  {
    slug: "ai-build-personal-site",
    date: "Mar 10",
    fullDate: "2026-03-10",
    title: "一个周末，用 AI 从零搭建了这个个人网站",
    tag: "vibe coding",
    tagClass: "tag-vibe",
    category: "Vibe Coding",
    wordCount: "~2200 字",
    readTime: "7 min read",
    hashtags: [
      { label: "#vibe-coding", colorClass: "t-vibe" },
      { label: "#next-js", colorClass: "t-code" },
      { label: "#design", colorClass: "t-saas" },
    ],
  },
  {
    slug: "ai-product-300-days",
    date: "Feb 20",
    fullDate: "2026-02-20",
    title: "我在大厂做 AI 产品的 300 天",
    tag: "ai pm",
    tagClass: "tag-pm",
    category: "AI PM",
    wordCount: "~4000 字",
    readTime: "12 min read",
    hashtags: [
      { label: "#ai-pm", colorClass: "t-pm" },
      { label: "#career", colorClass: "t-code" },
      { label: "#reflection", colorClass: "t-saas" },
    ],
  },
  {
    slug: "llm-product-pmf",
    date: "Feb 05",
    fullDate: "2026-02-05",
    title: "大模型产品的 PMF 在哪里？",
    tag: "观点",
    tagClass: "tag-think",
    category: "观点",
    wordCount: "~2600 字",
    readTime: "8 min read",
    hashtags: [
      { label: "#llm", colorClass: "t-vibe" },
      { label: "#pmf", colorClass: "t-pm" },
      { label: "#product", colorClass: "t-saas" },
    ],
  },
  {
    slug: "rag-learning-notes",
    date: "Feb 01",
    fullDate: "2026-02-01",
    title: "我花了两周啃完 RAG，这是我理解的全部",
    tag: "ai pm",
    tagClass: "tag-pm",
    category: "AI PM",
    wordCount: "~4500 字",
    readTime: "14 min read",
    hashtags: [
      { label: "#rag", colorClass: "t-pm" },
      { label: "#embedding", colorClass: "t-code" },
      { label: "#llm", colorClass: "t-vibe" },
      { label: "#ai-pm", colorClass: "t-saas" },
    ],
  },
  {
    slug: "streamlit-embedding-feedback",
    date: "Jan 20",
    fullDate: "2026-01-20",
    title: "用 Streamlit + Embedding 做了个反馈分析工具",
    tag: "vibe coding",
    tagClass: "tag-vibe",
    category: "Vibe Coding",
    wordCount: "~2400 字",
    readTime: "7 min read",
    hashtags: [
      { label: "#streamlit", colorClass: "t-vibe" },
      { label: "#embedding", colorClass: "t-code" },
      { label: "#python", colorClass: "t-saas" },
    ],
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAdjacentArticles(slug: string) {
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  return {
    prev: idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null,
    next: idx > 0 ? ARTICLES[idx - 1] : null,
  };
}
