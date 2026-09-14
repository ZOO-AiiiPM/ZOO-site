import type { NextConfig } from "next";

// 本地开发时，relay 部署在 Vercel 上，国内直连会超时（DNS 污染 + 链路不通），
// 需要显式走本地代理。Next 的 dev server 在热重载时会重启 server 子进程，
// 命令行前缀的 HTTPS_PROXY 不会继承到新进程，导致请求间歇性 502。
//
// 所以只认专用变量 WIKI_AI_PROXY（写在 .env.local，不提交），
// 生产环境不设它则完全不进入这段逻辑，也不会误用平台自带的其他 *_PROXY。
const proxy = process.env.WIKI_AI_PROXY;
if (proxy) {
  process.env.HTTPS_PROXY = proxy;
  process.env.HTTP_PROXY = proxy;
  // Node 24+ 需要显式开启才会让内置 fetch 读取 *_PROXY 变量
  process.env.NODE_USE_ENV_PROXY = "1";
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
