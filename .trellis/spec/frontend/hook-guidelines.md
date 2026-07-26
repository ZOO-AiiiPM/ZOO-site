# Hook 规范

> 项目**没有自定义 hook**，全部是页面内联的 `useState` / `useEffect` / `useRef`。这是现状，不是待办。

## 为什么没有自定义 hook

单页面站点，每个 effect 的逻辑都和具体 DOM 强绑定（首页 scroll morph 动的是 nav 的 logo，Nav 的下划线算的是自己 tab 的位置），抽出来反而增加间接层。**只有当同一段逻辑在 3 个以上页面重复时才考虑抽 hook**；目前可复用的动画逻辑已经以组件形式沉淀在 `components/CliAnimations.tsx`（用组件而非 hook，因为它们都需要包裹 DOM）。

## effect 的三种模式

**1. 滚动监听**（`app/page.tsx` 的 scroll morph）

```tsx
useEffect(() => {
  const onScroll = () => { /* 按 scrollY 插值 transform */ };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

**2. IntersectionObserver**（`CliLine` / `StaggerReveal` 的滚动触发）

创建 observer → observe 目标 → cleanup 里 `disconnect()`。

**3. 定时器**（`Typewriter` 的逐字输出）

`setTimeout` / `setInterval` 递进，cleanup 里必须 clear，否则组件卸载后继续 setState 会告警。

## cleanup 是硬要求

全站动画都直接摸 DOM 和全局对象，**每个 effect 必须写 cleanup**。尤其注意：

- 首页 effect 修改了 **nav 的全局样式**（`overflow`、`transform` 等），cleanup 要完整恢复，否则切页后 nav 残留错误样式
- 事件监听、observer、timer 三类必须全部解除

这是本项目最容易出 bug 的地方——症状通常是"从首页切到别的页面后导航栏显示异常"。

## 数据获取

没有 React Query / SWR。唯一的数据请求是 ask-zoo 的对话，直接用 `fetch` + `ReadableStream` 手动读 SSE：

```tsx
const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ messages }) });
const reader = res.body.getReader();
// 逐块解析 data: {...} 行，边收边 setState
```

博客数据是编译期静态导入（`data.ts`），不涉及运行时请求。

## 命名

自定义 hook 若真要新增：`use` 前缀 + camelCase，放在 `components/` 下与使用方同级。目前无先例。
