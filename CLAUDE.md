# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Background

Zoo（站内品牌名 **WINSTON**）的**求职用 AI PM 个人网站**，展示 AI 产品经理 + Vibe Coder 的专业能力。
**已上线生产**：https://zooooo.site

> 注意：早期 5 页结构（blog/projects/about/ask-zoo）已**不再是一级内容**。首页已重构为**单页组合式 portfolio**，当前主要工作集中在 **wiki（AI PM 知识库）** 和 **work（首页个人简历区）** 两块。

## 当前状态

- 首页 `/` 是一页式 portfolio：ABOUT → EXPERIENCE(work) → PROJECTS(mewmo / Ask Winston) → CAPABILITIES → YOUR TURN(ask) → CONTACT
- **wiki** 是当前最活跃的功能模块（新增），`/wiki` 入口，含两套知识库（PM 产品方法论 / AI 技术）
- **work（个人简历区）**：数据驱动，编辑 `app/portfolio-data.ts` 即可
- blog/projects/about/ask-zoo 仍是可用路由，但不再是主入口；博客当前标记 "Coming soon"

## Spec 体系（Trellis）

详细规范在 `.trellis/spec/`，按需加载，**不要全读**：

| 什么时候读 | 读哪个 |
|-----------|--------|
| 动手改任何代码前 | [.trellis/spec/gotchas.md](.trellis/spec/gotchas.md) — 反直觉清单，含最贵的 Vercel 部署陷阱 |
| 需要理解项目结构 | [.trellis/spec/architecture.md](.trellis/spec/architecture.md) — 目录地图 / 页面清单 / 首页结构 |
| 部署、域名、环境变量 | [.trellis/spec/release.md](.trellis/spec/release.md) |
| 写前端代码 | [.trellis/spec/frontend/](.trellis/spec/frontend/index.md) — 6 个规范文件 |
| 想知道最近做了什么 | `.trellis/workspace/zoo/journal-*.md` — 历次 session 记录 |

索引入口：[.trellis/spec/index.md](.trellis/spec/index.md)

## Commands

```bash
pnpm dev --port 3456    # Dev server (Turbopack)
pnpm build              # Production build（部署前必须通过）
pnpm lint               # ESLint
```

禁止 `npm`/`npx`，统一用 `pnpm`/`pnpx`。

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 4** + CSS 变量
- **TypeScript**
- **pnpm**
- **@phosphor-icons/react** · **react-markdown**（wiki 词条正文渲染）
- **@vercel/analytics** · **@vercel/speed-insights**
- Chat API：OpenAI SDK → **Ling-3.0-flash-fin-free**（蚂蚁百炼，流式，无推理泄漏）

## Design Tokens（只读契约）

所有 agent 必须使用这些变量，**禁止硬编码颜色值**。定义在 `app/globals.css`。

```css
--bg: #09090b;  --surface: #131316;  --surface2: #1a1a1f;
--border: #2e2e35;
--text: #ededef;  --text2: #8a8a94;  --text3: #6a6a75;
--green: #6ee7b7;  --purple: #a78bfa;  --gold: #fbbf24;  --pink: #f472b6;  --blue: #60a5fa;
--max: 1060px;
```

字体：`--font-inter`（正文）、`--font-jetbrains-mono`（代码/标签/日期）

## Architecture

```
app/
├── layout.tsx           ← 全局：Nav + Footer + Spotlight + 字体
├── globals.css          ← Design tokens + 全局样式
├── page.tsx             ← 首页（one-page portfolio，含 work/EXPERIENCE 区）
├── home.css             ← 首页样式（.home-* 前缀）
├── portfolio-data.ts    ← 首页数据：experiences / projects / skillRows
├── wiki/                ← ★ 知识库模块（当前重点）
│   ├── page.tsx         ← /wiki 索引（两套 wiki 卡片）
│   ├── data.ts          ← WIKI_META 目录 + WIKI_ENTRIES 词条池
│   ├── wiki.css         ← 索引页样式
│   ├── [slug]/page.tsx  ← /wiki/:slug 自动跳转该 wiki 首个词条
│   └── [slug]/[entry]/page.tsx ← /wiki/:slug/:entry 词条详情
│                                （sidebar + TOC + 上下篇 + AI 助手 mock）
│   └── wiki-detail.css  ← 详情页样式
├── blog/                ← 文章列表 + [slug] 详情（旧结构，仍可用）
├── projects/            ← 项目展示（旧结构）
├── about/               ← 关于页（旧结构）
├── ask-zoo/             ← AI 对话（流式 + sessionStorage 历史）
└── api/chat/route.ts    ← Ling-3.0-flash 流式 API

app/_components/         ← 首页专用组件
├── HomeMotion.tsx / home-motion.css  ← 首页 motion 动画
├── HomeSmoothScroll.tsx / homeScroll.ts
├── ProjectStackScroll.tsx / HeroDecisionMap.tsx
├── ProofCursor.tsx      ← 鼠标跟随光标
├── AskZooPrototype.tsx  ← 首页 ask 区对话原型
└── FooterWordmark.tsx

components/
├── PixelArt.tsx         ← 像素画系统 (PixelAvatar, PixelZooText, PixelLogo, PixelMiniAvatar)
├── CliAnimations.tsx    ← 共享 CLI 动画 (CliLine/Typewriter/StaggerReveal/SectionHead)
├── cli-animations.css   ← 共享动画 CSS（cli-* 前缀）
├── Nav.tsx              ← 全局导航（多页路由用）
└── Spotlight.tsx        ← 鼠标跟随光效
```

## 首页（one-page portfolio）结构

`app/page.tsx` 是客户端组件，核心是 CanvasNav（单页锚点导航）+ 若干 section：

- **section 顺序与 id**：`about` → `work`(EXPERIENCE) → `mewmo` → `ask-project` → `skills` → `ask` → `contact`(footer)
- **导航高亮**：IntersectionObserver 监听各 section，命中即设为 active（`nodes` 数组定义导航项）
- **CanvasNav**：左侧 WINSTON wordmark，右侧 GH/TW/N 链接 + 锚点链接
- **WinstonCharacter**：PixelAvatar 尺寸 320 做 hero 角色

### work / 个人简历区（重点）

`#work` section 由 `app/portfolio-data.ts` 的 `experiences: Experience[]` 驱动：

```ts
export interface Experience {
  company: string;   // 公司/团队名
  role: string;      // 职位
  period: string;    // 时间区间，如 "2026.03 — NOW"
  summary: string;   // 一句话总结
  details: string[]; // 3 条 bullet 职责
  evidence: string;  // 标签串，如 "Discovery / AI Product / Delivery"
}
```

渲染为时间线 `.home-work-route`，每条 `.home-work-stop` 含序号、period、company、role、summary、details 列表、evidence。
**改简历内容 = 改 `portfolio-data.ts`，不动 JSX。** 当前三条经历均为 Mock 数据，待替换为真实经历。

## Wiki 模块（重点）

`/wiki` 入口，两套知识库，由 `app/wiki/data.ts` 统一驱动：

- **WIKI_META: WikiMeta[]** — 目录结构（每套 wiki 的 chapters → entries 引用）
  - `slug`：`"pm"`（产品方法论，accent purple）| `"ai"`（AI 技术，accent pink）
  - `chapters[].entries[].id` 引用 WIKI_ENTRIES 里的词条 id（`short` 可选显示短标题）
- **WIKI_ENTRIES: WikiEntry[]** — 词条池（PM ~26 条 / AI ~16 条）
  - 字段：`id` / `updatedAt` / `wikiSlug` / `term` / `abbr?` / `fullName?` / `oneLiner` / `body: string[]`（markdown 段落，`##` 作二级标题）/ `points?`（关键点 bullet）/ `source?`
- 工具函数：`getWikiMeta(slug)` / `getEntry(id)` / `getFirstEntryId(slug)`

### 路由分层（重要）

每个词条是**独立页面**，不再一页堆全部：

| 路由 | 行为 |
|------|------|
| `/wiki` | 索引：两套 wiki 卡片（图标/词条数/章数/tagline/章节） |
| `/wiki/:slug` | server redirect 到该 wiki 首个词条 |
| `/wiki/:slug/:entry` | 词条详情（"use client"） |

### 词条详情页布局

- **EntryNav**：顶部 nav（← back / 两套 wiki 切换 tab / 章节标题 / GH + PixelLogo）
- **EntrySidebar**：左侧章节目录（分组标题 + 词条链接），可整列折叠；折叠状态存 `localStorage["wiki-sidebar-collapsed"]`（全局共用）
- **EntryToc**：右侧目录，由 markdown 正文的 `##`/`###` 标题自动提取（`extractHeadings`），IntersectionObserver 滚动高亮；正文渲染时给 h2/h3 加同规则 `slugify()` 锚点 id 对齐
- **EntryPager**：上下篇导航（按 chapters 展平顺序）
- **AIAssistantButton**：右下角 ✦ 悬浮助手，当前为 **mock 占位**（"这里将接入 AI 助手"，待实现）

### Wiki 新增词条流程

1. `app/wiki/data.ts` → `WIKI_ENTRIES` 加一条 `WikiEntry`
2. 同文件 `WIKI_META` 对应 chapters 的 `entries` 引用该 id（`short` 可选）
3. 词条正文用 markdown（`body` 数组，每段一段，`##` 二级标题自动进右侧目录）

## Nav 交互（多页路由）

- Active tab：绿色文字 + 紫色 `>` 前缀 + 紫色下划线滑动过渡
- `usePathname()` 检测当前路由
- 首页用 CanvasNav（锚点导航），不走全局 Nav

## CLI 动画系统

共享组件在 `components/CliAnimations.tsx` + `components/cli-animations.css`。

| 组件 | 效果 | 用法 |
|------|------|------|
| `CliLine` | 滚动触发左滑 + 淡入 | 包裹大块内容 |
| `Typewriter` | 逐字打出 + 绿色光标 | `//` 注释、`$` 命令 |
| `StaggerReveal` | 子元素逐个滑入 | 卡片列表、文章行 |
| `SectionHead` | header + `█` 闪 3 次消失 | section 标题 |
| `.cli-pulse` (CSS) | 绿色呼吸灯 | RUNNING badge |

（wiki 模块也用到了 CliLine / Typewriter / StaggerReveal）

## 博客数据（旧结构，仍可用）

- `app/blog/data.ts` — 文章元数据数组
- `app/blog/content.tsx` — `getArticleContent(slug)` 返回目录 + JSX 正文
- 新增文章：两个文件各加一条记录

## Design Rules

- 布局：单栏居中，max-width 1060px
- hover：背景提亮 + 文字变 green，不用 scale/shadow
- 渐变：仅 hero 标题（green→purple 135deg）和项目卡 hover 边框
- 响应式断点：640px
- z-index 层级：Nav 200 > home-hero-avatar 201 > Spotlight -1
- **CSS 类名前缀**：`.home-*`（首页）、`.wiki-*` / `.wiki-detail-*`（wiki）、`.blog-*`、`.projects-*`、`.about-*`

## Tag Colors

| CSS 类 | 颜色 |
|--------|------|
| `.tag-vibe` | green |
| `.tag-pm` | purple |
| `.tag-agent` | pink |
| `.tag-think` | gold |

## Conventions

- 语言：`zh-CN`，UI 导航英文 monospace，内容中文
- 组件：函数式，客户端交互加 `"use client"`
- **改动前先读当前代码**
- **截图规则**：不截图不保存，直接浏览器测试
- 数据驱动的页面（首页 work/projects、wiki 全部）优先改 `data.ts`，少动 JSX

## 部署备忘（Vercel）

- 生产构建必须 `pnpm build` 通过（类型检查 + 路由静态生成）
- Vercel 部署曾因 git 作者邮箱不在团队而静默 BLOCKED；仓库级 git 邮箱已固定为 `zhouwenxi008520@gmail.com`，勿改动
- 切换 chat 模型后，无凭证情况下也应能 build（`d8fa3e0` 已处理）