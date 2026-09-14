import type { Metadata } from "next";
import { Albert_Sans, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/Spotlight";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winston — AI Product Maker",
  description: "把模糊问题，做成真实产品。Winston 的 AI 产品经理求职作品集。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${albertSans.variable} ${notoSansSC.variable} ${jetbrainsMono.variable}`}
      /* 主题由下面的内联脚本在首帧前注入 data-theme / color-scheme，
         服务端无法预知（依赖 localStorage 与系统偏好），
         因此允许 html 上的这两个属性存在差异。
         suppressHydrationWarning 不影响子树，只针对这两属性，
         这是 React 官方推荐的主题防闪烁写法。 */
      suppressHydrationWarning
    >
      <head>
        {/* 防主题闪烁：在首帧绘制前同步定下 data-theme。
            主题状态在客户端 effect 里才应用，若等 hydration，
            系统偏亮的用户会先看到一帧深色。
            只作用于 /wiki/*（其它页面没有主题开关，不干预）。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
if(location.pathname.indexOf('/wiki')!==0)return;
var s=localStorage.getItem('wiki-theme');
var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
document.documentElement.dataset.theme=t;
document.documentElement.style.colorScheme=t;
}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Spotlight />
        <Nav />
        {children}
        <footer className="site-footer">
          <p>© 2026 Winston · Built with Vibe Coding & Claude Code</p>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
