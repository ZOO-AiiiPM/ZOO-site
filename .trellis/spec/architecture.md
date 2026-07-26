# ai-pm-site 架构（目录地图 + 页面清单 + 数据流）

> 项目专属层。设计 token 契约与命令仍在 `CLAUDE.md`。

## 技术栈

Next.js 16（App Router + Turbopack）、React 19.2、Tailwind CSS 4 + CSS 变量、TypeScript strict、pnpm。无测试框架、无状态管理库、无 UI 组件库——全部手写。

## 目录地图

```
ai-pm-site/
├── app/
│   ├── layout.tsx           ← 全局：Nav + Footer + Spotlight + 字体 + Analytics
│   ├── globals.css          ← Design tokens（唯一颜色真相源）+ 全局样式
│   ├── page.tsx             ← 首页：Hero boot 动画 + navLogo scroll morph
│   ├── blog/
│   │   ├── page.tsx         ← 列表：分类筛选 + 标签
│   │   ├── [slug]/page.tsx  ← 详情：目录侧栏 + 上下篇导航
│   │   ├── data.ts          ← 文章元数据（ArticleMeta[]，8 篇）
│   │   ├── content.tsx      ← getArticleContent(slug) 返回目录 + JSX 正文
│   │   └── blog.css         ← 列表与详情共用（详情页 import "../blog.css"）
│   ├── projects/
│   │   ├── page.tsx         ← 终端风格卡片 + 状态徽章
│   │   ├── PixelTitle.tsx   ← 页面专属 canvas 像素标题
│   │   └── projects.css
│   ├── about/
│   │   ├── page.tsx         ← 经历时间线 + 信念 + 联系方式
│   │   └── about.css
│   ├── ask-zoo/page.tsx     ← AI 对话：SSE 流式渲染 + sessionStorage 历史
│   └── api/chat/route.ts    ← DeepSeek API（唯一后端路由）
│
├── components/              ← 跨页面共享组件（页面专属组件放页面目录下）
│   ├── PixelArt.tsx         ← PixelAvatar / PixelZooText / PixelLogo / PixelMiniAvatar
│   ├── CliAnimations.tsx    ← CliLine / Typewriter / StaggerReveal / SectionHead
│   ├── cli-animations.css   ← 由 CliAnimations.tsx 自行 import
│   ├── Nav.tsx              ← 导航栏 + 滑动下划线
│   └── Spotlight.tsx        ← 鼠标跟随光效
│
├── prototypes/              ← 已定稿设计原型（prototype-v4.html，只读参考）
└── CLAUDE.md                ← 冷启动入口
```

**关键认知**：这是**单包项目**，不是 monorepo。所有命令在根目录跑，统一用 `pnpm`（禁 `npm`/`npx`）。

## 页面清单

| 路由 | 渲染 | 说明 |
|------|------|------|
| `/` | Static | boot 序列动画 + scroll morph |
| `/blog` | Static | 分类筛选（客户端 state） |
| `/blog/[slug]` | Dynamic | 从 data.ts + content.tsx 取数 |
| `/projects` | Static | |
| `/about` | Static | |
| `/ask-zoo` | Static | 页面静态，对话走 API |
| `/api/chat` | Dynamic | Node runtime |

除 `layout.tsx` 与 `api/chat/route.ts` 外，**所有页面都是 `"use client"`**——因为全站依赖滚动动画、鼠标交互、筛选状态。这是有意为之，不是遗漏。

## 数据流

**博客**：纯静态，无 CMS 无数据库。`data.ts` 存元数据（`ArticleMeta`），`content.tsx` 存正文 JSX + 目录（`TocItem[]`）。新增文章＝两个文件各加一条记录，slug 必须一致。

**AI 对话**：`ask-zoo/page.tsx` POST `/api/chat` → route.ts 调 DeepSeek（OpenAI SDK 兼容层）→ 返回 SSE 流（`data: {"text":"..."}\n\n`，以 `data: [DONE]` 结束）→ 前端边收边渲染。对话历史存 sessionStorage（关标签页即清空，刻意不做持久化）。

**API 保护**：route.ts 内存级速率限制（每 IP 每分钟 6 次、每天 50 次）+ 输入校验（≤20 条消息、单条 ≤2000 字符）。因为是内存 Map，**Serverless 多实例下不共享**——这是已知取舍，个人站流量足够。

## 首页 Scroll Morph 原理

核心：直接动画 **Nav 里的 logo 本身**，而非独立 hero 元素。

1. `page.tsx` useEffect 拿到 `.nav-logo` 元素
2. 计算 navLogo 自然位置 → hero placeholder 位置的偏移（`initX`/`initY`）
3. 初始设 `transform: translate(initX, initY) scale(2.857)`，在 hero 位置显示为大 logo
4. scroll handler：`progress = scrollY / 200`，线性插值回到 `(0, 0, 1)`
5. nav 设 `overflow: visible` 让放大的 logo 溢出显示
6. cleanup：离开首页时恢复所有 nav 样式

**为什么这么做**：navLogo 是 nav 的子元素，永远在 nav 背景之上，不存在 z-index 被盖住的问题。改动首页动画前必须理解这点，否则容易退化成两个元素交叉淡入淡出的方案。

### Boot 序列（~2.3s，纯 CSS）

`boot-intro`（紫色光标闪 + "> zoo.dev" 淡入消失）→ `boot-slide`（navLogo 滑入，含 scale）→ `boot-title`（标题 typewriter）→ `boot-blur`（内容逐个 blur-in，用 `--d` CSS 变量控制延迟）。

## z-index 层级

Nav 200 > home-hero-avatar 201 > Spotlight -1
