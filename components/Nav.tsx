"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState, useCallback, useLayoutEffect } from "react";
import { PixelAvatar, PixelLogo } from "@/components/PixelArt";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/ask-zoo", label: "Ask Zoo" },
];

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Nav() {
  const pathname = usePathname();
  const linksRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
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
            <Link
              key={href}
              href={href}
              className={isActive(href) ? "active" : ""}
            >
              {isActive(href) && <span className="nav-cursor">&gt;</span>}
              {label}
            </Link>
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
