# ai-pm-site Spec 索引

Zoo 的**求职用 AI PM 个人网站**。展示 AI 产品经理 + Vibe Coder 的专业能力。

`CLAUDE.md` 保留冷启动入口（项目背景 + 命令 + 设计契约）。开发规范、架构地图、部署知识抽到本目录，按任务加载。

## 项目全局规范

| Spec | 内容 |
|------|------|
| [architecture.md](./architecture.md) | 目录地图 + 5 个页面清单 + 数据流 + 首页 scroll morph 原理 |
| [gotchas.md](./gotchas.md) | 反直觉 & 坑（Next.js 16 / pnpm / Vercel 部署 git 邮箱陷阱 / CSS 作用域） |
| [release.md](./release.md) | 部署矩阵：Vercel 团队 / 域名 / DNS / 环境变量 / 验证顺序 |

## 前端规范（`frontend/`）

| Spec | 内容 |
|------|------|
| [frontend/directory-structure.md](./frontend/directory-structure.md) | app/ 与 components/ 的组织方式、CSS 分文件约定 |
| [frontend/component-guidelines.md](./frontend/component-guidelines.md) | 共享组件清单（CliAnimations / PixelArt / Nav / Spotlight）与用法 |
| [frontend/hook-guidelines.md](./frontend/hook-guidelines.md) | useEffect 模式：滚动监听、IntersectionObserver、cleanup 要求 |
| [frontend/state-management.md](./frontend/state-management.md) | 无状态库；useState + sessionStorage + SSE 流式 |
| [frontend/type-safety.md](./frontend/type-safety.md) | TS strict、blog 数据类型、第三方 SDK 类型断言边界 |
| [frontend/quality-guidelines.md](./frontend/quality-guidelines.md) | 设计契约（禁硬编码颜色）、hover 规范、验证方式 |

## 思考指南（`guides/`）

- [guides/code-reuse-thinking-guide.md](./guides/code-reuse-thinking-guide.md)
- [guides/cross-layer-thinking-guide.md](./guides/cross-layer-thinking-guide.md)

## 当前状态（2026-07-26）

全部 5 个页面迁移完成，已上线生产：**https://zooooo.site**。进入打磨/优化阶段。CLI 动画系统已统一到 Blog/Projects/About 三个页面。
