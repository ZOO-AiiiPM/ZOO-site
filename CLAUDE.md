# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Background

Zoo 的**求职用 AI PM 个人网站**。展示 AI 产品经理 + Vibe Coder 的专业能力。
设计原型已定稿（`prototypes/prototype-v4.html`），Next.js 迁移已完成，全部 5 个页面均已实现。

## 当前状态

所有页面迁移完成，进入打磨/优化阶段。CLI 动画系统已统一到 Blog/Projects/About 三个页面。

## Commands

```bash
pnpm dev --port 3456    # Dev server (Turbopack)
pnpm build              # Production build
pnpm lint               # ESLint
```

禁止 `npm`/`npx`，统一用 `pnpm`/`pnpx`。

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 4** + CSS 变量
- **TypeScript**
- **pnpm**

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
├── page.tsx             ← 首页：Hero boot 动画 + navLogo scroll morph
├── blog/
│   ├── page.tsx         ← 文章列表：分类筛选 + 标签
│   ├── [slug]/page.tsx  ← 文章详情：目录侧栏 + 上下篇导航
│   ├── data.ts          ← 文章元数据（8 篇）
│   └── content.tsx      ← 文章正文 JSX
├── projects/page.tsx    ← 项目展示：终端风格卡片 + 状态徽章
├── about/page.tsx       ← 关于页：经历时间线 + 信念 + 联系方式
├── ask-zoo/page.tsx     ← AI 对话：流式渲染 + sessionStorage 历史
└── api/chat/route.ts    ← DeepSeek V3.2 API

components/
├── PixelArt.tsx         ← 像素画系统 (PixelAvatar, PixelZooText, PixelLogo, PixelMiniAvatar)
├── CliAnimations.tsx    ← 共享 CLI 动画组件 (CliLine/Typewriter/StaggerReveal/SectionHead)
├── cli-animations.css   ← 共享动画 CSS（cli-* 前缀）
├── Nav.tsx              ← 导航栏（active 绿紫渐变 + `>` 前缀 + 滑动紫色下划线）
└── Spotlight.tsx        ← 鼠标跟随光效
```

## 首页 Scroll Morph 架构

**核心原理**：直接动画 **Nav 里的 logo 本身**（非独立 hero 元素）。初始时用 `transform: translate + scale(2.857)` 把 navLogo 放到 hero 位置显示为大 logo，滚动时缩小+上移回 nav 原位。

1. `page.tsx` useEffect 获取 `.nav-logo` 元素
2. 计算 navLogo 自然位置 → hero placeholder 位置的偏移（`initX`, `initY`）
3. 初始设置 `navLogo.style.transform = translate(initX, initY) scale(2.857)`
4. scroll handler：`progress = scrollY / 200`，线性插值 translate 和 scale 回到 (0, 0, 1)
5. nav 设置 `overflow: visible` 让放大的 logo 溢出显示
6. cleanup：离开首页时恢复所有 nav 样式

**优势**：navLogo 是 nav 的子元素，永远在 nav 背景之上，不存在 z-index 被盖住的问题。

### Boot 序列（~2.3s，CSS 纯动画）
1. `boot-intro`：紫色光标闪烁 + "> zoo.dev" 淡入后消失
2. `boot-slide`：navLogo slide-in（含 `scale(2.857)`）
3. `boot-title`：标题 typewriter 展开
4. `boot-blur`：内容逐个 blur-in（`--d` CSS 变量延迟）

## Nav 交互

- Active tab：绿色文字 + 紫色 `>` 前缀 + 紫色下划线滑动过渡
- 下划线使用绝对定位 div，通过 JS 计算位置 + CSS transition 滑动
- 首字母大写（Home/Blog/Projects/About/Ask Zoo）
- `usePathname()` 检测当前路由

## CLI 动画系统

共享组件在 `components/CliAnimations.tsx` + `components/cli-animations.css`。

| 组件 | 效果 | 用法 |
|------|------|------|
| `CliLine` | 滚动触发左滑 + 淡入 | 包裹大块内容 |
| `Typewriter` | 逐字打出 + 绿色光标 | `//` 注释、`$` 命令 |
| `StaggerReveal` | 子元素逐个滑入 | 卡片列表、文章行 |
| `SectionHead` | header + `█` 闪 3 次消失 | section 标题 |
| `.cli-pulse` (CSS) | 绿色呼吸灯 | RUNNING badge |

## 博客数据

- `app/blog/data.ts` — 文章元数据数组
- `app/blog/content.tsx` — `getArticleContent(slug)` 返回目录 + JSX 正文
- 新增文章：两个文件各加一条记录

## Design Rules

- 布局：单栏居中，max-width 1060px
- hover：背景提亮 + 文字变 green，不用 scale/shadow
- 渐变：仅 hero 标题（green→purple 135deg）和项目卡 hover 边框
- 响应式断点：640px
- z-index 层级：Nav 200 > home-hero-avatar 201 > Spotlight -1

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
- CSS 类名带页面前缀：`.home-*`、`.blog-*`、`.projects-*`、`.about-*`
- 改动前先读当前代码
- **截图规则**：不截图不保存，直接浏览器测试
