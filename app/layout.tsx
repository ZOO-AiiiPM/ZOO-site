import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Spotlight } from "@/components/Spotlight";
import { PixelLogo, PixelAvatar } from "@/components/PixelArt";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoo — AI PM & Vibe Coder",
  description: "用产品思维理解 AI，用 AI 构建产品。",
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
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <PixelAvatar size={28} />
              <PixelLogo />
            </Link>
            <div className="nav-links">
              <Link href="/">home</Link>
              <Link href="/blog">blog</Link>
              <Link href="/projects">projects</Link>
              <Link href="/about">about</Link>
              <Link href="/ask-zoo" className="accent">ask zoo</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="site-footer">
          <p>© 2026 Zoo · Built with Vibe Coding & Claude Code</p>
        </footer>
      </body>
    </html>
  );
}
