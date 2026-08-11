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
    <html lang="zh-CN" className={`${albertSans.variable} ${notoSansSC.variable} ${jetbrainsMono.variable}`}>
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
