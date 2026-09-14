# Implementation Plan: Winston 连续画布

## 当前动效实施

1. 增加 Lenis、Phosphor 图标依赖。
2. 独立实现首页背景/阻尼组件及其 CSS。
3. 更新页面挂载点、去除章节横线、新页尾三行滚动字母与联系区；CONTACT 锚点移入页尾。
4. 验证空闲移动、滚动加速与回落、锚点跳转、聊天内滚动、reduced-motion、1440/1280 无横向溢出；lint/typecheck/build。

已完成：Lenis 1.3.26、Phosphor 2.1.10；实测背景约 6.94°/s → 21.79°/s → 6.93°/s，聊天内滚动不带动页面，动态 reduced-motion 关闭/恢复动效。1440/1280 无横向溢出；CONTACT hash/active 正确，邮件与图标链接正确；lint/typecheck/build 通过。旧 Nav 隐藏滚动监听已跳过，避免改写新页尾锚点。待用户视觉反馈，未发布。

## 当前执行切片 · 2026-09-05

- 用户已直接授权实施桌面首页视觉试版，先前等待批准与强制新分支条目不适用于本次切片。
- 重构 app/page.tsx 与 app/home.css，必要时新增首页专属角色组件；保留现有聊天内部逻辑与主题 token。
- 以 KUMALEON 的外框、巨型角色和几何排版为参考；不移植第三方品牌资产。
- 运行 lint、build，浏览器验证 1440 与 1280 桌面布局、锚点与聊天输入，交付本地预览；整项任务保留进行中等待视觉反馈。

### 本轮结果

- 用户认为第一版首屏过于杂乱，已完成第二版定向修正：文字左、头像右；删除拼接身体、叠字与角落装饰，导航改为 70px 单行。下方章节保持不变。

- 已重构 `app/page.tsx` 与 `app/home.css`：内缩画布边框、中央大 Winston、叠层姓名、几何项目构图和可读的经历内容。
- 保留 7 个公开锚点、真实资料/Mock 标识及现有聊天组件接口；未新增依赖或改动全局主题 token。
- `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build` 通过。浏览器已定位并修复旧 `.home-topnav` 重复显示导致的首屏额外 48px。
- 本地预览 `http://localhost:3457/`；视觉评审切片等待用户反馈，未发布，整个任务不归档。

## Before Starting

- [ ] 用户批准最新 PRD / Design / Implementation summary。
- [ ] 进入执行阶段并加载 `trellis-before-dev`。
- [ ] 阅读 `node_modules/next/dist/docs/` 中与 App Router、Server/Client Components、字体、图片和 accessibility 相关指南。
- [ ] 搜索当前首页、导航、滚动、聊天和全局 token 的复用点。
- [ ] 创建 `codex/winston-continuous-canvas` 分支，不覆盖用户未跟踪文件。
- [ ] 核验 Motion 是否已存在；缺失时先说明并安装，不引入 GSAP 或 Lenis。

## Build Slices

### 1. Hero → Work Prototype Gate

- [ ] 将像素 Winston 拆成稳定 pixel block ids，建立 Hero/Work 两个姿态。
- [ ] 建立纯黑 CanvasBackground、局部网格、轨迹和绿色/紫色语义。
- [ ] 实现 Hero 到 Work 第一个微节点的短滚动原型。
- [ ] 实现完整导航到左侧节点轨迹的形态转换。
- [ ] 加入 reduced-motion 静态降级。
- [ ] 在 1440×900 与 1280px 人工检查滚动、遮挡、空白和性能；未通过不扩展。

### 2. Static Full Canvas

- [ ] 定义 7 节点配置和 typed content 数据。
- [ ] 搭建约 10-12 个视口的自然文档流。
- [ ] Work 改为 3 个轨迹停靠点；Skills 改为 5 项组合构图。
- [ ] Contact 改为直接联系方式，移除不可发送表单。
- [ ] Ask Winston 后改为极简 Footer。
- [ ] 关闭动画时整页仍可读。

### 3. Project Visuals

- [ ] 移除与 mewmo 无关的 Signal Desk 虚构界面。
- [ ] 为 mewmo 建真实截图槽位；缺素材时显示明确直角占位。
- [ ] Ask Winston Project 只呈现产品动机和判断，与最终 Chat 分工。

### 4. Winston and Background Motion

- [ ] 增加各节点 Winston 关键姿态与节点间 transform/opacity 插值。
- [ ] 完成局部网格视差、轨迹绘制和 active node 点亮。
- [ ] 审核每段动画的叙事用途，删除装饰性循环动画。
- [ ] 校准节点过渡，避免遮挡文字/截图。

### 5. Navigation and Cursor

- [ ] 完成 Hero 完整导航与左侧节点轨迹双态。
- [ ] 保留 anchor、active node 和 Back to top。
- [ ] 将自定义光标重做为克制像素准星/圈选工具。
- [ ] 验证文本选择、链接、输入、键盘和 reduced-motion。

### 6. Ask Winston Final Scene

- [ ] 复用现有聊天组件和 `/api/chat` 契约。
- [ ] 让 Winston 进入头像位，窗口从周围展开至约 70% 视口。
- [ ] 隔离聊天状态与滚动状态，回归 preset、输入、streaming、loading、stop、new session、错误态。
- [ ] 保留旧 `/ask-zoo` 入口。

### 7. Polish

- [ ] 保留 Albert Sans + Noto Sans SC 正文，评估本地英文展示字体。
- [ ] 统一直角容器、字号层级、主题色透明度和网格对比度。
- [ ] 审核占位文案与 10-12 视口中无反馈空滚动。

## Validation

- [ ] `pnpm lint`
- [ ] `pnpm build`
- [ ] 1440×900 和 1280px 完整滚动审视。
- [ ] 小屏最低可读检查，不作为完整移动端验收。
- [ ] reduced-motion 完整浏览。
- [ ] 键盘验证导航、链接、联系方式和聊天。
- [ ] active、anchor、Back to top、聊天全状态、旧 route 回归。
- [ ] 控制台无新增 error/warning，滚动无每帧 React 重渲染或 layout thrashing。
- [ ] 动画失败或 JS 动画关闭时核心内容仍可读。

## Risks and Rollback

- Winston 造型质量：Hero → Work 原型是硬门槛。
- 滚动性能：背景、Winston、导航 motion 可分别关闭并回退静态。
- 项目真实性：缺素材使用占位，不用虚构界面。
- 聊天回归：保持 API 和状态逻辑不变，只替换容器与进入方式。
