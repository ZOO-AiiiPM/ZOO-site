# ai-pm-site 部署与发布

> 生产环境的完整拓扑。改任何部署相关配置前先读这里 + [gotchas.md](./gotchas.md) 第 1 条。

## 生产拓扑

| 项 | 值 |
|----|-----|
| 线上地址 | https://zooooo.site（`www` 308 跳主域名） |
| Vercel 默认域名 | https://ai-pm-site-five.vercel.app |
| Vercel 团队 | `mew-mo`（`team_RJACI0mEcUZNkQHtTbaDI7Io`），Hobby 计划 |
| Vercel 项目 | `ai-pm-site`（`prj_HpwV3v72GWZ2Evba8UaxvFFABMZ7`） |
| Vercel 账号 | `zoo-aiiipm` / `zhouwenxi008520@gmail.com` |
| 代码仓库 | https://github.com/ZOO-AiiiPM/ZOO-site（分支 `main`） |
| DNS 托管 | 阿里云万网（`dns17/dns18.hichina.com`） |

## 部署方式：CLI，不是 git push

**项目没有连 GitHub 自动部署**。push 到 GitHub 不会触发任何构建。发布必须手动跑：

```bash
pnpm build && vercel deploy --prod --yes
```

先本地 `pnpm build` 能提前抓到类型错误（Vercel 上构建失败要等几十秒才知道）。

注意：`vercel deploy` 属于生产变更类命令，在部分 Claude Code 权限模式下会被拦截，需用户自己执行。

## DNS 记录（已配置，勿动）

| 类型 | 主机记录 | 值 |
|------|---------|-----|
| A | @ | `216.198.79.1` |
| A | @ | `64.29.17.1` |
| CNAME | www | `4c018dc3f47ba2c3.vercel-dns-017.com` |

这是 Vercel 2026-07 的推荐值，比广为流传的 `76.76.21.21` 更新。改域名相关配置前先查当前推荐值：

```bash
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://api.vercel.com/v6/domains/zooooo.site/config?teamId=team_RJACI0mEcUZNkQHtTbaDI7Io"
```

DNS 生效后 HTTPS 证书自动签发，实测约 100 秒。

## 环境变量

| 变量 | 用途 |
|------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API key |
| `DEEPSEEK_BASE_URL` | `https://api.deepseek.com` |

本地在 `.env.local`（不入库），生产在 Vercel 项目环境变量。**两边都要改**，只改一边会导致本地正常线上挂（或反之）。

模型：`deepseek-v4-flash`，必须带 `thinking: { type: "disabled" }`（见 gotchas 第 7 条）。

## CLI 版本差异

Vercel CLI 50.x 的 `vercel domains add` **只接受一个参数**（域名），项目从当前目录的 link 推断。旧写法 `vercel domains add <domain> <project>` 会报 "expects one argument"。

绑定域名也可以直接走 API（CLI 被拦截时的替代路径）：

```bash
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"zooooo.site"}' \
  "https://api.vercel.com/v10/projects/prj_HpwV3v72GWZ2Evba8UaxvFFABMZ7/domains?teamId=team_RJACI0mEcUZNkQHtTbaDI7Io"
```

## 发布后验证顺序

1. `curl -sI https://zooooo.site` → 200
2. 首页标题正确：`<title>Zoo — AI PM & Vibe Coder</title>`
3. `www` 跳转：`curl -o /dev/null -w "%{http_code} %{redirect_url}" https://www.zooooo.site` → 308 → `https://zooooo.site/`
4. 对话 API 通（最容易因 key/模型问题挂的一环）：

```bash
curl -s -X POST -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"hi"}]}' https://zooooo.site/api/chat
```

预期返回 SSE 流 `data: {"text":"..."}`。若返回 500，先查 Vercel 环境变量里的 key 是否过期。
