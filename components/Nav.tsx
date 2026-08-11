"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState, useCallback, useLayoutEffect } from "react";
import { PixelAvatar, PixelLogo } from "@/components/PixelArt";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/ask-zoo", label: "Ask Zoo" },
];

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Nav() {
  const pathname = usePathname();
  const linksRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);
  const [hash, setHash] = useState("");

  // 首页锚点导航：监听 hash 变化用于 active 状态
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isActive = (href: string) => {
    if (href === "/ask-zoo") return pathname.startsWith("/ask-zoo");
    const id = href.split("#")[1];
    return pathname === "/" && hash === `#${id}`;
  };

  // 首页点击锚点：平滑滚动 + 更新 hash；其他页：原生跳转首页锚点
  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
      setHash(`#${id}`);
    }
  };

  const updateUnderline = useCallback(() => {
    if (!linksRef.current) return;
    const activeEl = linksRef.current.querySelector("a.active") as HTMLElement;
    if (activeEl) {
      const containerRect = linksRef.current.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setUnderline({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, []);

  // Immediate update on pathname change
  useIsomorphicLayoutEffect(() => {
    updateUnderline();
    if (!ready) setReady(true);
  }, [pathname, updateUnderline, ready]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <PixelAvatar size={28} />
          <PixelLogo />
        </Link>
        <div className="nav-links" ref={linksRef}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={isActive(href) ? "active" : ""}
              onClick={(e) => handleAnchorClick(e, href)}
            >
              {isActive(href) && <span className="nav-cursor">&gt;</span>}
              {label}
            </a>
          ))}
          <div
            className={`nav-underline${ready ? " nav-underline-ready" : ""}`}
            style={{
              left: underline.left,
              width: underline.width,
            }}
          />
        </div>
      </div>
    </nav>
  );
}
