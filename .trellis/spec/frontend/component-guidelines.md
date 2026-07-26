# 组件规范

> 全站手写组件，无 UI 库。新增交互前先看下面的共享组件是否已覆盖。

## `"use client"` 的用法

除 `app/layout.tsx` 和 `app/api/chat/route.ts` 外，**所有页面和组件都是客户端组件**。全站依赖滚动动画、鼠标交互、筛选状态，这是有意的架构选择，不是没做 RSC 优化。

新增页面默认加 `"use client"`；只有纯静态无交互的内容才考虑省略。

## CLI 动画系统（`components/CliAnimations.tsx`）

统一用于 Blog / Projects / About 三个页面，营造终端质感。

| 组件 | 效果 | 用法 |
|------|------|------|
| `CliLine` | 滚动触发左滑 + 淡入 | 包裹大块内容，`delay` 控制延迟 |
| `Typewriter` | 逐字打出 + 绿色光标 | `//` 注释、`$` 命令，`speed` 控制字速 |
| `StaggerReveal` | 子元素逐个滑入 | 卡片列表、文章行，需传 `selector` 指定子元素 |
| `SectionHead` | header + `█` 闪 3 次消失 | section 标题 |
| `.cli-pulse`（CSS 类） | 绿色呼吸灯 | RUNNING 状态徽章 |

签名以源码为准（`components/CliAnimations.tsx`）。这些组件自带 `import "./cli-animations.css"`，使用方不需要额外引 CSS。

**加新动画前先确认这四个不够用**——重复造轮子会让全站节奏不一致。

## 像素画系统（`components/PixelArt.tsx`）

`PixelAvatar`（size 可调）、`PixelZooText`（scale 可调）、`PixelLogo`、`PixelMiniAvatar`。基于像素矩阵渲染，配色走 CSS 变量。

`app/projects/PixelTitle.tsx` 是 canvas 实现的页面专属标题，注意它有 `ctx` 判空（TS strict 要求），改动别删。

## Props 约定

- 简单组件直接内联类型标注，不单独定义 interface：
  ```tsx
  export function CliLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number })
  ```
- 有默认值的可选参数写在解构里，不用 `defaultProps`
- 复杂数据结构（如博客元数据）才在 `data.ts` 里定义 exported interface

## 样式方式

普通 CSS 文件 + CSS 变量，**不是 CSS Modules，不是 styled-components**。Tailwind 4 已装但主要提供基础层，实际视觉靠手写 CSS。类名必须带页面前缀（见 [directory-structure.md](./directory-structure.md)）。

## 设计约束（改 UI 必读）

- **颜色只用 CSS 变量**，禁硬编码 hex（见 [../gotchas.md](../gotchas.md)）
- 布局：单栏居中，`max-width: var(--max)`（1060px）
- hover：背景提亮 + 文字变 green，**不用 scale / shadow**
- 渐变只用在两处：hero 标题（green→purple 135deg）和项目卡 hover 边框
- 响应式断点：640px
- 标签配色：`.tag-vibe` green / `.tag-pm` purple / `.tag-agent` pink / `.tag-think` gold

## Nav 交互

active tab = 绿色文字 + 紫色 `>` 前缀 + 紫色下划线。下划线是绝对定位 div，JS 算位置 + CSS transition 滑动。用 `usePathname()` 判断当前路由。导航文案首字母大写英文 monospace（Home/Blog/Projects/About/Ask Zoo）。

首页会通过 JS 修改 nav 的样式（scroll morph），改 Nav 组件时留意与 `app/page.tsx` 的耦合。

## 常见错误

1. 新增类名忘记加页面前缀 → 污染其他页面
2. 为了做动画重新写一套 observer，而 `CliLine` 已经做了同样的事
3. 硬编码颜色值绕过 design token 契约
4. 用 `scale` / `box-shadow` 做 hover，与全站质感冲突
