# Design: Winston 连续画布

## 当前动效切片

### 背景增强反馈

用户要求增加图形花样，且向下滚动时背景大幅加速。本轮仅修改背景组件：增加花瓣、棋盘、像素阶梯、同心环等组合几何；下滚速度重点驱动向上穿行位移而不只是旋转，停下后平滑回落，屏幕外循环回收。保持主题色、正文与页尾不变。

首页专属 Motion 组件持有 Lenis 与单一 RAF，背景用有限数量的几何 DOM 元素与 transform 移动，速度由 Lenis.velocity 平滑驱动，不逐帧更新 React state。低对比度固定背景不拦截指针，正文位于其上。隐藏页暂停 RAF，恢复时重置时间基准；卸载销毁 Lenis/监听/RAF。系统减少动态效果时使用静态版本。新页尾的三行 WINSTON 使用连续循环位移，角色+名言和 Blog/Wiki 占一行，图标联系方式占下一行。保留导航/页尾结构线和聊天控件边框，去除章节分割线。

## 当前试版方向 · 2026-09-05

### 首屏反馈修正

用户实屏反馈上一版「太乱」。本次仅收敛首屏与导航：姓名、中文介绍和头像分区，不互相遮挡；移除临时身体、轨道、菱形与棋盘装饰、四角标签。沿用现有像素头像，降低其尺度；单行紧凑导航，清楚的文字层级。以清晰的主次关系替代上一版中央巨型角色与多层文字覆盖，其他章节暂不改动。

参考 KUMALEON About 实屏：外缘框架、紧凑结构导航、中央大型角色、图形与标题重叠、圆形/菱形等几何段落。迁移为黑底与现有绿紫色，Winston 是首屏主角，正文区域不保留遮挡内容的 fixed 角色。首页允许重构整体布局，保留锚点与聊天接口。中文按自然语义断行，经历文字恢复中等可读字号，项目占位缩减。当前用户允许其他样式变化，覆盖下文旧版悬浮角色与导航限制。

## Thesis

页面是一张从 Hero 向下延伸的纯黑结构化画布。像素 Winston 是唯一持续存在的视觉主角，随滚动在 7 个主节点之间换位、拆解和重组，引导招聘方完成一条连续求职叙事，最终进入真实 Ask Winston 对话。

设计参数：`DESIGN_VARIANCE: 7`，`MOTION_INTENSITY: 6`，`VISUAL_DENSITY: 3`。

## Visual System

- Canvas：沿用纯黑背景，不做 Scene 级换色。
- Action/Focus：现有 `--green: #6EE7B7`。
- Thought/Transition：现有 `--purple: #A78BFA`。
- Text/Grid：沿用全局白色、次级文字和边框 token，通过透明度派生。
- 形状：画布节点和产品容器以直角细边框为主，避免混杂圆角体系。
- 背景语言：局部细网格、坐标线、轨迹、扫描边界、少量绿色/紫色像素模块；网格部分区域退隐。

## Spatial Model

```text
Hero → Work Hub (3 micro nodes) → mewmo → Ask Winston Project
     → Skills Cluster (5 capabilities) → Contact → Ask Winston Chat → Footer
```

画布约 10-12 个 900px 高视口。节点自由错落但共享隐形网格、安全边距和向下阅读方向。普通文字直接落在画布上，真实截图和聊天窗口才使用容器。

## Runtime Architecture

```tsx
<PortfolioPage>
  <CanvasBackground /> <CanvasNavigation /> <WinstonStage />
  <PortfolioCanvas>
    <HeroNode /> <WorkNode /> <ProjectNode /> <AskProjectNode />
    <SkillsNode /> <ContactNode /> <AskWinstonNode />
  </PortfolioCanvas>
  <MinimalFooter />
</PortfolioPage>
```

- 页面组合与静态内容尽量保留 Server Component；滚动运行时、背景、Winston、导航为独立 Client islands。
- Node contract 提供稳定 id、observer target、桌面位置、Winston 姿态、背景状态和 reduced-motion 姿态。
- IntersectionObserver 负责 active node；Motion `useScroll`/`useTransform` 负责连续 transform/opacity，不用 React state 追踪每帧滚动，不引入 GSAP/Lenis。
- Ask Winston chat state 与 scroll state 隔离，保持 `/api/chat` 和 `/ask-zoo` 兼容。

## Winston Model

将现有头像拆成有限数量的稳定像素块。每个块为 Hero、Work、Projects、Skills、Contact、Chat 定义目标 transform/opacity；只制作少量观察、思考、确认、在线状态。到 Chat 时脸部落入头像位，其余模块只做短过渡，不强行把所有边框解释为角色。

## Node Composition

- Hero：WINSTON 与完整像素角色共同为一级视觉；首次滚动拆分并移动到 Work。
- Work：一条轨迹经过 3 个经历停靠点，当前点完整可读，前后点低权重预示路径。
- mewmo：一张真实截图为一级视觉；无素材时明确占位，禁止虚构 Signal Desk。
- Ask Winston Project：只讲产品动机和判断，不重复最终聊天。
- Skills：5 个大型能力词组成一个组合构图，Tools/Methods 为次级文字，不做表格或关系图工具。
- Contact：只保留直接联系方式，收束到 Winston。
- Ask Winston：窗口从 Winston 周围展开至约 70% 视口，可短暂 sticky 但不劫持滚动。

## Navigation and Cursor

Hero 内显示完整顶栏；离开 Hero 后收起为左侧节点轨迹，只显示当前名称，其余为点；返回 Hero 恢复。两态共享 anchor 数据。自定义光标改为 pointer-events-none 的像素准星/圈选工具，文本选择、输入、键盘和 reduced-motion 时安全降级。

## Compatibility and Rollback

保留公开 URL、现有首页 anchor、`/api/chat` 和旧 `/ask-zoo`。旧组件先保留，按切片替换。Winston motion、背景 motion、导航 motion 可分别关闭，静态画布始终可作为回退。

## Verification Gates

1. Hero → Work 短原型通过视觉、滚动、遮挡和性能检查。
2. 静态 7 节点画布可读，导航与锚点正确。
3. 加入 Winston/背景 motion 后验证 1440×900、1280px 和 reduced-motion。
4. 回归聊天、键盘、构建、lint、控制台错误与滚动性能。
