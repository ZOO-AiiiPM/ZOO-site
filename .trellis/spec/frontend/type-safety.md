# 类型安全

TypeScript strict 模式。无运行时校验库（无 Zod / Yup）——API 入参用手写检查。

## 类型定义放哪里

- **共享数据结构** → 定义在数据文件里并 export：`app/blog/data.ts` 的 `ArticleMeta`、`TocItem`
- **组件 props** → 内联标注，不单独抽 interface（见 [component-guidelines.md](./component-guidelines.md)）
- 没有全局 `types.ts`，不要新建

`ArticleMeta.category` 用字面量联合类型约束分类：

```ts
category: "AI PM" | "Vibe Coding" | "Agent" | "观点";
```

新增分类要同步改类型和筛选 UI。

## strict 模式的实际影响

`pnpm build` 会跑完整类型检查，**本地 dev 不报的错会在 build 时报**。改完代码务必 `pnpm build` 再部署。

典型案例：`app/projects/PixelTitle.tsx` 的 canvas `getContext("2d")` 返回可能为 null，必须判空后才能用。这类判空不是防御性冗余，是 strict 要求，别删。

## 第三方 SDK 扩展参数：整体断言

调 DeepSeek 用 OpenAI SDK，但传了 SDK 类型里没有的 `thinking` 参数。**必须对整个参数对象断言**，不能用 `@ts-expect-error`：

```ts
const stream = await client.chat.completions.create({
  model: "deepseek-v4-flash",
  messages: [...],
  stream: true,
  thinking: { type: "disabled" },
} as unknown as OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming);
```

原因：`@ts-expect-error` 只作用于紧邻的一行，而报错来自整个调用的 overload 解析，盖不住。曾因此导致生产构建失败（见 [../gotchas.md](../gotchas.md) 第 7 条）。

## API 入参校验

`app/api/chat/route.ts` 手写校验，不用 schema 库：

- `messages` 必须是数组、非空、≤20 条
- 每条 `content` 必须是 string 且 ≤2000 字符
- 解析失败走 try/catch 返回 400

错误信息**用 Zoo 的口语化人设**（"写太多啦！精简一下再发给我吧～"），不是标准 API 错误文案。改这里注意保持语气。

## 禁止

- `any`——用 `unknown` + 断言
- 无理由的 `!` 非空断言——strict 下判空是刚需
- 为绕过类型检查删掉判空逻辑
