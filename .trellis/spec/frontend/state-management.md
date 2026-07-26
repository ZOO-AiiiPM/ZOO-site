# 状态管理

> **没有状态管理库**。没有 Redux / Zustand / Jotai / Context。全部是组件内 `useState`。

## 状态分类

| 类型 | 方案 | 例子 |
|------|------|------|
| 页面局部状态 | `useState` | blog 分类筛选、ask-zoo 输入框 |
| 会话级持久化 | `sessionStorage` | ask-zoo 对话历史 |
| 路由状态 | `usePathname()` | Nav 判断 active tab |
| 服务端数据 | 无缓存层 | 对话直接 fetch，博客编译期静态导入 |

**没有任何全局状态**。页面之间不共享 state——这是单页面展示站的合理选择，不要引入 Context 来"统一管理"。

## sessionStorage 用法（ask-zoo）

对话历史存 sessionStorage，key 为模块内常量 `STORAGE_KEY`：

- 挂载时读取恢复（`app/ask-zoo/page.tsx:110` 附近）
- `messages` 变化时写入；数组为空时 `removeItem` 清理

**刻意用 session 而非 localStorage**：关标签页即清空，符合"访客临时对话"的产品定位。不要"优化"成 localStorage 持久化。

读写都要包 try/catch——隐私模式下 storage 可能抛异常。

## 流式对话的 state 更新

SSE 边收边渲染，每收到一个 chunk 就更新最后一条消息的内容。注意**用函数式更新**避免闭包拿到旧值：

```tsx
setMessages(prev => { /* 基于 prev 生成新数组 */ });
```

## 何时才需要全局状态

真出现"两个不相邻的页面要共享可变数据"时再说。目前唯一的跨页面耦合是首页 effect 直接操作 Nav 的 DOM（见 [../architecture.md](../architecture.md)），那是动画实现细节，不是状态共享。
