# Design: 一页式求职网站改造

## Design Thesis

这是 Zoo 面向 AI 产品经理校招 / 实习的互动作品年鉴。页面先用清晰的内容层级证明判断力，再在 Hero、项目换页、编辑校对笔光标和 Ask Zoo 四处释放趣味。

单一工作：让招聘方在一次连续浏览中相信 Zoo 能把模糊问题变成可交付产品，并愿意继续联系或向 AI 分身追问。

## Visual System

### Color Tokens

- `Night Paper #090A0C`：主背景，接近印刷黑而非纯黑。
- `Raised Paper #13161A`：项目跨页和弹窗层。
- `Milk Ink #F2EEE6`：主文字与粗线，带纸张温度。
- `Ice Blue #A9D8FF`：圈选、active 状态、路径和主要动作。
- `Signal Blue #4F8DFF`：少量高对比状态，不做大面积渐变。
- `Pencil Gray #8C929B`：次级文字、日期与辅助线。

禁止把现有绿色 / 紫色霓虹渐变、终端提示符、代码标签和像素画继续作为主视觉语言。

### Typography

- Display：极粗 / 可压缩的 grotesk（无衬线）负责英文封面字、章节标题与姓名。
- Chinese display：高字重现代中文黑体，保证中文大标题与英文重量匹配。
- Body：人文无衬线负责中文叙事，字面开放、长段耐读。
- Utility：等宽字体仅用于时间、URL、章节编号和状态。
- 字体文件随构建自托管；不使用外部 CDN。

### Structural Language

- 2px 米白粗线定义页边、章节与卡片，不使用泛滥的圆角卡片。
- 章节标题像年鉴索引：英文大字 + 中文短句 + 当前页码。
- 编号只用于真实序列：经历时间、Project 01 / 02、能力矩阵坐标。
- 图片优先保持项目真实截图，不套通用浏览器 mockup；需要设备框时只保留最少边界。

### Signature Interaction

“编辑校对笔”是全站唯一持续存在的视觉签名：默认保留系统指针语义，视觉层跟随但不截获事件；进入链接、按钮、项目图时显示圈选、下划线或 `VIEW / OPEN / ASK / SEND` 动作词。文本、表单、触屏与 reduced-motion 环境关闭增强层。

## Page Rhythm

```text
┌─────────────────────────────────────────────────────────────┐
│ ZOO                         HOME WORK PROJECTS SKILLS CONTACT │
├─────────────────────────────────────────────────────────────┤
│ HERO: 求职信息 / 教育       SVG: 模糊 → 判断 → 可交付         │
├─────────────────────────────────────────────────────────────┤
│ WORK                         中轴时间线 + 可锁定详情          │
├─────────────────────────────────────────────────────────────┤
│ PROJECT 01                   左叙事 / 右截图                   │
│ PROJECT 02 从底部覆上        左叙事 / 右截图                   │
├─────────────────────────────────────────────────────────────┤
│ SKILLS                       能力 × 工具 × 项目证据           │
├─────────────────────────────────────────────────────────────┤
│ CONTACT                      头像与渠道 / 站内邮件表单        │
├─────────────────────────────────────────────────────────────┤
│ ZOO                          BACK TO TOP / ASK ME MORE        │
└─────────────────────────────────────────────────────────────┘
                                            ● AI 分身浮动入口
```

## Section Contracts

### Navigation

- sticky 顶栏左侧姓名、右侧目录。
- 点击使用原生锚点与平滑滚动；滚动状态由章节可见性驱动，不依赖 hash 事件。
- active 以冰蓝圈选 / 下划线表达，并同步更新 hash，支持复制深链。
- 移动端使用紧凑横向目录或可展开目录，不隐藏任何章节入口。

### Hero

- 左侧固定信息顺序：姓名 → AI 产品经理校招 / 实习 → 一句价值主张 → 学校 / 专业 / 学历。
- 右侧 SVG 由散落的 brief fragments 进入决策路径，最终收束为清晰产品框。
- 校对笔移动到路径节点时，只揭示一句决策说明；不制作自由拖拽画布。

### Work

- 时间由近及远，桌面使用中轴线；节点是真实时间序列。
- heading 始终展示公司、岗位、时间；details 展示任务、行动、结果与使用能力。
- hover/focus 只预览；click/Enter 锁定；同一时刻仅一个条目锁定。
- 移动端改为左侧时间线 + tap accordion，默认展开最近一条。

### Projects

- 两个项目各为一张完整年鉴页，内容字段一致：标题、产品一句话、问题、本人工作、结果、官网、GitHub、时间、截图。
- 桌面使用 CSS sticky：Project 02 从底部覆盖 Project 01，边缘保留编号让用户知道上一页仍在下方。
- 不做真实 3D 折页；移动端和 reduced-motion 直接纵向排列。
- 页面内使用 `01 / 02` 进度标识，不另建项目索引 route。

### Skills

- 横轴为能力场景，纵轴为工具 / 方法；每个主要交叉点链接到 Work 或 Project 证据。
- 第一层候选能力：研究与定义、数据与验证、原型与交付、AI 产品化、协作与推进。
- 不显示自评星级、百分比或无法验证的“精通”。

### Contact

- 左侧头像与 GitHub、邮箱、电话、微信；敏感联系方式是否完整公开由最终真实内容决定。
- 右侧字段为回复邮箱、主题、正文；提供提交中、成功、校验失败、服务失败状态。
- 邮件从服务端发送；客户端不暴露密钥。增加 honeypot、长度限制和速率限制。
- 发送服务选用 Resend：服务端固定 `from`，访客地址只进入 `replyTo`；成功文案表达“已提交发送”，不声称已送达。
- 首版不使用 Turnstile：其前端脚本无法本地化，与国内访问不依赖外部 CDN 的约束冲突。若实际出现垃圾提交，再单独评估不阻断表单的反滥用升级。

### Ask Zoo

- 右下浮动头像按钮，hover/focus 出现 `Ask me more`。
- 点击用原生 `<dialog>.showModal()` 打开居中大窗口和背景遮罩；窗口保留头像、快捷提示词、消息流、输入与关闭。
- AI 是 Zoo 的开放式分身，但个人事实只允许来自已提供材料；快捷问题优先服务招聘浏览。
- 到 Footer 时，浮动按钮平滑归位到 `Ask me more` 区域；DOM 中保持同一个触发器，避免焦点丢失。
- 旧 `/ask-zoo` 首版保留为独立 fallback，与首页 dialog 复用 `ChatPanel`；不使用 Parallel / Intercepting Routes。
- SSE 消费器必须缓冲跨网络 chunk 的残片，并在窗口关闭时 abort 当前请求。

## Component and Data Boundaries

- `app/page.tsx` 只负责章节组合与页面级数据注入。
- 页面专属组件放入根页面的 private component 目录，拆分 Nav observer、Hero visual、Work timeline、Project stack、Skills matrix、Contact form、Ask Zoo dialog、proofing cursor。
- 经历、项目、技能、联系方式和快捷提示词收敛为一份 typed data module，mock 与真实内容只替换数据，不改布局。
- 现有 `/api/chat` SSE 契约保持；聊天状态与渲染从独立页面抽成可复用 hook / component。
- 邮件新增独立服务端 route；与聊天限流逻辑分开。

## Motion and Accessibility

- Motion 负责 Hero SVG、Project scroll-linked 状态和 Ask Zoo `layoutId` shared transition；原生 CSS sticky 承担章节固定，IntersectionObserver 承担目录 active 与基础 reveal。
- 不引入 GSAP ScrollTrigger 或 Lenis：当前只有两个项目，完整 timeline / smooth-scroll 引擎的收益不足以覆盖复杂度与无障碍风险。
- 所有动画仅使用 transform / opacity，避免滚动中改变大块布局。
- `prefers-reduced-motion` 关闭平滑滚动、跟随光标、覆盖式转场和 morph，内容仍完整可读。
- 原生 `<dialog>` 必须验证 Escape 关闭、恢复触发器焦点、背景不可交互和移动端全屏状态。
- 自定义交互全部提供 keyboard / touch 等价行为；颜色不是唯一状态线索。

## Compatibility and Rollback

- 实施前创建 `feature/one-page-portfolio`，不在 main 上做 WIP。
- 保留现有聊天 API；先完成静态章节与数据结构，再接邮件和聊天弹窗。
- 每个切片保持可运行；用户测试前不 merge / push。
- 旧页面文件和耗时资产不删除；确认新页面稳定且用户明确要求清理后再处理遗留文件。

## Deferred Content

- 真实实习文案、项目截图、学校 / 专业、电话、微信和头像资产。
- 精确字体文件与许可核验。
- Resend 发件域名验证、收件地址与环境变量配置。
