# 目录结构

> 前端代码的实际组织方式。完整目录地图见 [../architecture.md](../architecture.md)。

## 组件放哪里

判断标准只有一条：**跨页面复用 → `components/`；单页面专用 → 页面目录下**。

- `components/` — `Nav.tsx`、`Spotlight.tsx`、`PixelArt.tsx`、`CliAnimations.tsx`
- 页面目录 — `app/projects/PixelTitle.tsx`（只有 projects 页用）

不要为了"以后可能复用"提前放进 `components/`。

## CSS 分文件约定

每个页面一个同目录 CSS 文件，由页面自己 import：

```
app/globals.css          ← design tokens + 全局样式，layout.tsx import
app/blog/blog.css        ← blog/page.tsx 和 blog/[slug]/page.tsx 共用
app/projects/projects.css
app/about/about.css
components/cli-animations.css   ← 由 CliAnimations.tsx 自己 import
```

首页样式现在位于 `app/home.css`，由 `app/page.tsx` 导入，仍使用 `.home-*` 前缀。`globals.css` 保留全站 token 和旧页面样式。首页专用组件位于 `app/_components/`，其中 `AskZooPrototype.tsx` 保留首页对话逻辑；首页经历与能力数据在 `app/portfolio-data.ts`。

**CSS 无作用域隔离**（不是 CSS Modules），靠命名前缀防冲突：`.home-*` / `.blog-*` / `.projects-*` / `.about-*` / `.cli-*`。新增类名必须带前缀。

## 数据文件

博客是唯一有独立数据层的模块：

- `app/blog/data.ts` — 元数据数组 + 类型定义（`ArticleMeta`、`TocItem`）
- `app/blog/content.tsx` — `getArticleContent(slug)` 返回 `{ toc, content }`

新增文章要**同时**改这两个文件，`slug` 必须一致。

## 命名

- 组件文件：PascalCase（`PixelArt.tsx`）
- 路由文件：Next.js 约定（`page.tsx`、`route.ts`、`layout.tsx`）
- 数据/工具：kebab 或小写（`data.ts`、`content.tsx`）
- CSS 文件：与所在目录同名小写（`blog.css`）
