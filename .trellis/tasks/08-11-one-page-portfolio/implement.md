# Implementation Plan: 一页式求职网站改造

## Before Starting

- [ ] 用户批准最新 PRD / Design / Implementation summary。
- [ ] 运行 `task.py start` 并加载 `trellis-before-dev`。
- [ ] 创建 `feature/one-page-portfolio` 分支。
- [ ] 阅读 `node_modules/next/dist/docs/` 中 App Router、client components、route handlers、fonts、metadata、redirects 与 accessibility 相关指南。
- [ ] 核验字体许可、邮件服务配置与真实联系信息公开范围。
- [ ] 安装并锁定 Motion 与 Resend；不引入 GSAP、Lenis 或 Dialog 组件库。

## Build Slices

1. **内容与视觉底座**
   - 建 typed portfolio data module，以 mock 内容承载 Work 与 Projects。
   - 替换 design tokens、字体角色、基础网格、章节边界与 responsive 规则。
   - 保留页面可读状态，不先接复杂动画。

2. **导航与 Hero**
   - 重做姓名 + 目录导航，加入滚动 active 与 anchor 深链。
   - 构建“模糊 → 判断 → 可交付”SVG，完成 reduced-motion 静态态。

3. **Work 与 Projects**
   - 实现可预览 / 锁定的时间线及键盘、触屏行为。
   - 实现两个项目年鉴页与 sticky 覆盖转场；验证短屏、长文和移动端降级。

4. **Skills 与 Contact**
   - 实现能力 × 工具 × 证据矩阵。
   - 实现联系信息与邮件表单完整状态；通过 Resend 接入服务端发送、校验、honeypot 和独立限流。

5. **Ask Zoo 窗口**
   - 从现有 `/ask-zoo` 抽取聊天状态、SSE 消费与消息 UI。
   - 实现原生 `<dialog>`、快捷提示词和浮动入口。
   - 为 SSE parser 增加跨 chunk 缓冲，并在关闭窗口时 abort 流请求。
   - 实现入口在独立 Ask 章节归位，保留旧 route 兼容。

6. **编辑校对笔与最终动效**
   - 最后加入光标增强层和动作词，避免动效反向约束内容结构。
   - 统一 motion timing，删除非 signature 的装饰动效。

## Validation

- [ ] `pnpm lint`
- [ ] `pnpm build`
- [ ] 桌面宽屏、1366×768、短屏、平板和手机尺寸手动验证。
- [ ] 键盘仅操作：导航、Work、Contact、Ask Zoo 全流程。
- [ ] `prefers-reduced-motion: reduce` 下完整浏览。
- [ ] 无鼠标 / 触屏下 Work 与项目内容完整可见。
- [ ] 目录滚动 active、hash 深链与 Back to top 正确。
- [ ] Contact 成功、校验失败、限流和服务失败状态正确。
- [ ] Ask Zoo 流式回复、错误、关闭后焦点恢复、旧 route 兼容正确。
- [ ] 慢网或 JavaScript 失败时核心求职信息仍可读取。
- [ ] 使用浏览器性能面板确认滚动中无明显 layout thrashing（布局抖动）。

## Risk and Rollback Points

- 导航 active、项目 sticky、Ask Zoo morph 都依赖滚动位置；分别实现，避免共享一个脆弱的全局 scroll handler。
- 聊天抽取先保持 `/api/chat` 请求 / SSE 响应契约不变，确保可单独回退 UI。
- 邮件服务密钥与发件域名只通过环境变量配置；未配置时表单展示明确不可用状态，不假装发送成功。
- 不删除现有 about / projects / blog / ask-zoo 文件；清理必须另获用户明确指示。
