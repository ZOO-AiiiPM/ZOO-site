"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PixelAvatar, PixelLogo } from "@/components/PixelArt";

const homeLinks = [
  { id: "home", label: "HOME" },
  { id: "work", label: "WORK" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

const legacyLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/ask-zoo", label: "Ask Zoo" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = homeLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setActiveSection(visible.target.id);
        history.replaceState(null, "", visible.target.id === "home" ? "/" : `#${visible.target.id}`);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/") {
    return (
      <nav className="home-topnav" aria-label="页面目录">
        <a className="home-topnav-name" href="#home" data-cursor="TOP">
          <strong>ZOO</strong><span>AI PRODUCT MAKER</span>
        </a>
        <div className="home-topnav-links">
          {homeLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "is-active" : ""}
              data-cursor="GO"
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <PixelAvatar size={28} />
          <PixelLogo />
        </Link>
        <div className="nav-links">
          {legacyLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
