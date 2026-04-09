# CLAUDE.md

## Project Background

Zoo 的**求职用 AI PM 个人网站**。展示 AI 产品经理 + Vibe Coder 的专业能力。
设计原型已定稿（`prototypes/prototype-v4.html`），当前正在迁移为 Next.js 项目。

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 4** + CSS 变量
- **TypeScript**
- **pnpm** (禁止 npm/npx)
- Dev server: `pnpm dev --port 3456`

## Design Tokens（只读契约）

所有 agent 必须使用这些变量，**禁止硬编码颜色值**。定义在 `app/globals.css`。

```css
--bg: #09090b;  --surface: #131316;  --surface2: #1a1a1f;
--border: #25252a;
--text: #ededef;  --text2: #8a8a94;  --text3: #55555f;
--green: #6ee7b7;  --purple: #a78bfa;  --gold: #fbbf24;  --pink: #f472b6;  --blue: #60a5fa;
--max: 800px;
```

字体：`--font-inter`（正文）、`--font-jetbrains-mono`（代码/标签/日期）

## File Structure

```
app/
├── layout.tsx           ← 全局：Nav + Footer + Spotlight + 字体 ✅ 已完成
├── globals.css          ← Design tokens + 全局样式 ✅ 已完成
├── page.tsx             ← 首页 (Agent A)
├── blog/
│   ├── page.tsx         ← 文章列表 (Agent B)
│   └── [slug]/page.tsx  ← 文章详情 (Agent B)
├── projects/
│   └── page.tsx         ← 项目展示 (Agent C)
├── about/
│   └── page.tsx         ← 关于页 (Agent D)
├── ask-zoo/
│   └── page.tsx         ← AI 对话页 (Agent E)
└── api/
    └── chat/route.ts    ← DeepSeek API (Agent E)

components/
├── PixelArt.tsx         ← 像素画系统 ✅ 已完成
│   exports: PixelAvatar, PixelZooText, PixelLogo, PixelMiniAvatar
└── Spotlight.tsx         ← 鼠标跟随光效 ✅ 已完成

lib/                     ← 工具函数（按需创建）
content/                 ← MDX 文章（后续）
prototypes/              ← HTML 原型（只读参考）
```

## Multi-Agent 分工

| Agent | 负责页面 | 可改的文件 |
|-------|----------|-----------|
| A | 首页 + 全局导航 | `app/page.tsx`, `app/layout.tsx`, `app/globals.css` |
| B | 文章列表 + 详情 | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` |
| C | 项目展示 | `app/projects/page.tsx` |
| D | 关于页 | `app/about/page.tsx` |
| E | AI 对话 | `app/ask-zoo/page.tsx`, `app/api/chat/route.ts` |

### 协作规则

1. **tokens 只读** — `globals.css` 的 Design Tokens 区块禁止修改，颜色用 `var(--green)` 不硬编码
2. **只改自己的文件** — 需要改共享文件时在此文件末尾留 `TODO: [Agent X] 需要改 xxx`
3. **共享组件** — `components/` 下的组件所有人可用不可改，需要新组件在 `components/` 新建
4. **CSS 类名带页面前缀** — 首页用 `.home-*`，博客用 `.blog-*`，避免冲突
5. **改动前先读** — 修改任何文件前先读取当前代码

## Design Rules

- 布局：单栏居中，max-width 800px
- 间距：section 间 56px，卡片间 14px，内边距 24px
- 圆角：卡片 10px，标签 4-6px
- hover：背景提亮到 surface + 文字变 green，不用 scale/shadow
- 渐变：仅 hero 标题（green→purple 135deg）和项目卡 hover 边框
- 选中文字：绿底黑字
- 响应式断点：640px

## Tag Colors

| CSS 类 | 分类 | 颜色 |
|--------|------|------|
| `.tag-vibe` | Vibe Coding | green |
| `.tag-pm` | AI PM | purple |
| `.tag-agent` | Agent | pink |
| `.tag-think` | Thoughts | gold |

## Page Reference（原型对照）

每个 Agent 参考 `prototypes/prototype-v4.html` 中对应页面的 HTML/CSS 实现。
用浏览器打开原型，点导航切换到你负责的页面，照着迁移为 React 组件。

## Conventions

- 语言：`zh-CN`，UI 导航用英文 monospace，内容中文
- 组件：函数式组件，客户端交互加 `"use client"`
- 命名：文件 PascalCase（组件）/ camelCase（工具），CSS 类 kebab-case
- 禁止 `npm`/`npx`，统一用 `pnpm`/`pnpx`
