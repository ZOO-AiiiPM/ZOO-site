# 质量规范

## 命令

```bash
pnpm dev --port 3456    # 开发（Turbopack）
pnpm build              # 生产构建（含完整类型检查）
pnpm lint               # ESLint
```

**禁用 `npm` / `npx`**，统一 `pnpm` / `pnpx`。

## 禁止

1. **硬编码颜色值** — 必须用 `app/globals.css` 的 CSS 变量。这是全站视觉一致性的契约。
2. **npm / npx** — 会污染 pnpm 的依赖树。
3. **新增类名不带页面前缀** — CSS 无作用域，会污染其他页面。
4. **截图** — 验证 UI 直接用浏览器测，不截图不保存截图文件。
5. **`any`** — 见 [type-safety.md](./type-safety.md)。
6. **hover 用 scale / shadow** — 与全站质感冲突，用背景提亮 + 文字变色。

## 必须

1. 改动前先读当前代码（尤其首页动画、Nav，耦合度高）
2. 每个 effect 写 cleanup（见 [hook-guidelines.md](./hook-guidelines.md)）
3. 部署前本地 `pnpm build` 过一遍——dev 不做完整类型检查
4. 交互组件加 `"use client"`
5. 中文内容 + 英文 monospace 导航，语言 `zh-CN`

## 测试

**项目没有测试框架**，不要为了"补测试"引入 Jest / Vitest。验证方式是：

1. `pnpm build` 通过（类型 + 构建）
2. `pnpm lint` 通过
3. 浏览器实测改动的页面（动画、hover、响应式 640px 断点）
4. 涉及 API 的改动，用 curl 打 `/api/chat` 确认流式返回正常

生产验证清单见 [../release.md](../release.md)。

## Review 检查点

- 颜色是否走了 CSS 变量
- 新类名是否带页面前缀
- effect 是否有完整 cleanup（特别是修改了 nav 全局样式的）
- 是否误改了 scroll morph / boot 序列的时序
- 博客改动是否同时更新了 `data.ts` 和 `content.tsx`
- 是否引入了不必要的依赖（本项目刻意保持极少依赖）
