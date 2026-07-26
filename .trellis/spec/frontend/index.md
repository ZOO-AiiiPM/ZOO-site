# 前端开发规范

> ai-pm-site 的前端实际约定。**记录现状，不是理想**——照着写就能和现有代码融为一体。

---

## 规范索引

| 指南 | 内容 | 状态 |
|------|------|------|
| [Directory Structure](./directory-structure.md) | 组件/CSS/数据文件的组织与命名 | ✅ 已填 |
| [Component Guidelines](./component-guidelines.md) | 共享组件清单、props 约定、设计约束 | ✅ 已填 |
| [Hook Guidelines](./hook-guidelines.md) | effect 三种模式、cleanup 硬要求、SSE 读取 | ✅ 已填 |
| [State Management](./state-management.md) | 无状态库；useState + sessionStorage | ✅ 已填 |
| [Type Safety](./type-safety.md) | strict、字面量联合、SDK 断言边界 | ✅ 已填 |
| [Quality Guidelines](./quality-guidelines.md) | 禁止项、必须项、验证方式 | ✅ 已填 |

## 上层规范

- [../architecture.md](../architecture.md) — 目录地图、页面清单、scroll morph 原理
- [../gotchas.md](../gotchas.md) — 反直觉与坑（**动手前必读**）
- [../release.md](../release.md) — 部署与发布

---

## 项目速览

Next.js 16 + React 19 + Tailwind 4 + TypeScript strict，pnpm 单包项目。5 个页面全部客户端组件，全站手写 CSS + CLI 终端风格动画，无 UI 库、无状态库、无测试框架、无数据库。刻意保持极少依赖。

**语言**：本项目规范用中文书写（与 `CLAUDE.md` 一致）。
