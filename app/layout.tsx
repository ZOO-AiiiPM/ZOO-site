import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/Spotlight";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoo — AI Product Maker",
  description: "把模糊问题，做成真实产品。Zoo 的 AI 产品经理求职作品集。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Spotlight />
        <Nav />
        {children}
        <footer className="site-footer">
          <p>© 2026 Zoo · Built with Vibe Coding & Claude Code</p>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
