# ai-pm-site 反直觉 & 坑（对抗先验）

> 模型对 Next.js / Vercel 有强先验，这些是最容易踩错的地方。踩坑成本按小时计的写在最前面。

## 1. Vercel 部署：git 提交作者邮箱必须在团队里 ⚠️ 最贵的坑

项目部署在 Vercel **团队 `mew-mo`** 下（不是个人空间）。团队部署会校验 **git 提交作者邮箱必须是团队成员**。

- 团队成员邮箱：`zhouwenxi008520@gmail.com`（Vercel 账号 `zoo-aiiipm`）
- 本仓库 git 邮箱已固定为该邮箱（仓库级 `git config user.email`，覆盖全局的 `2209205181@qq.com`）

**用非成员邮箱提交后再部署会发生什么**：部署进入 `BLOCKED` 状态，但 **CLI 会一直显示假的 "Building..." 永不结束**，`vercel ls` 显示 `UNKNOWN`，构建日志为空。表象极像网络卡住或构建慢，实际上永远不会完成。2026-07 曾因此空耗数小时。

**排查方法**（唯一能看到真因的路径）：查 Vercel API 的 `readyState` 与 `readyStateReason`，token 在 `~/Library/Application Support/com.vercel.cli/auth.json`。

```bash
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://api.vercel.com/v13/deployments/<dpl_id>?teamId=team_RJACI0mEcUZNkQHtTbaDI7Io" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('readyState'), '|', d.get('readyStateReason'))"
```

**修改 git 用户信息前务必确认**：改成非团队邮箱会让所有后续部署静默失效。

## 2. 这不是你熟悉的 Next.js

根目录 `AGENTS.md` 有一条硬约束：Next.js 16 相对训练数据有 breaking changes，API、约定、文件结构都可能不同。**写代码前先读 `node_modules/next/dist/docs/` 里的对应文档**，注意 deprecation 提示。不要凭 Next.js 13/14 的记忆写。

## 3. 只用 pnpm，禁 npm / npx

统一 `pnpm` / `pnpx`。项目 lockfile 是 pnpm 的，混用会污染依赖树。开发命令带端口：`pnpm dev --port 3456`。

另外 `node_modules` 曾整个丢失过（`next: command not found`），跑任何命令前若报找不到 next，先 `pnpm install` 而不是怀疑代码。

## 4. 颜色禁止硬编码

所有颜色必须用 `app/globals.css` 里的 CSS 变量（`--bg`/`--surface`/`--text`/`--green`/`--purple`/`--gold`/`--pink`/`--blue` 等）。这是**只读契约**，全站视觉一致性依赖它。写死 hex 值＝破坏契约。新增颜色需求先改 globals.css 加变量。

## 5. CSS 没有作用域隔离，靠命名前缀

用的是普通 CSS 文件（不是 CSS Modules，不是 styled-components）。全局生效，靠**页面前缀**避免冲突：`.home-*`、`.blog-*`、`.projects-*`、`.about-*`，共享动画用 `.cli-*`。新增类名不带前缀会污染其他页面。

`blog.css` 被列表页和详情页共用（详情页 `import "../blog.css"`）——改它要同时验证两个页面。

## 6. 首页 scroll morph 动的是 Nav 的 logo 本身

不是"hero 有个大 logo，滚动时 nav 的小 logo 淡入"。是**同一个 DOM 元素**通过 transform 在两个位置间插值。详见 [architecture.md](./architecture.md#首页-scroll-morph-原理)。按常规思路重写会破坏 z-index 方案并引入闪烁。

首页 useEffect 会修改 nav 的全局样式（`overflow: visible` 等），**cleanup 必须完整恢复**，否则切到其他页面会残留错误样式。

## 7. 第三方 SDK 的扩展参数要整体断言

`app/api/chat/route.ts` 调 DeepSeek 用的是 OpenAI SDK，但传了 DeepSeek 扩展参数 `thinking: { type: "disabled" }`（v4-flash 默认开推理模式，聊天场景必须关，否则会把思考过程输出给用户）。

OpenAI SDK 类型里没有这个字段。**`@ts-expect-error` 盖不住**——它只作用于一行，而报错来自整个调用的 overload 解析。正确做法是对整个参数对象做断言：

```ts
} as unknown as OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming);
```

曾因用 `@ts-expect-error` 导致 Vercel 构建在类型检查阶段失败（本地 dev 不报，只有 `pnpm build` 报）。

## 8. 速率限制是内存级的，Serverless 下不共享

`route.ts` 的 `rateLimitMap` 是进程内 Map。Vercel Serverless 多实例各有一份，实际限流阈值会被放大。已知取舍，个人站够用；**不要"修复"成分布式限流**，那是过度工程。

## 9. 不截图不保存

`CLAUDE.md` 的明确规则：验证 UI 直接用浏览器测试，不截图、不保存截图文件。仓库里历史遗留的 `.playwright-mcp/` 截图正在清理，不要新增。
