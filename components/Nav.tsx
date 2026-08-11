"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { PixelAvatar, PixelLogo } from "@/components/PixelArt";

const homeLinks = [
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

const legacyLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/ask-zoo", label: "Ask Winston" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = homeLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let observer: IntersectionObserver | null = null;
    let activeId = "";

    const updateActiveSection = () => {
      const marker = 82 + Math.min(window.innerHeight * 0.22, 180);
      let current = sections[0];
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) current = section;
        if (rect.top > marker) break;
      }

      if (!current || current.id === activeId) return;

      activeId = current.id;
      setActiveSection(current.id);
      const nextUrl = current.id === "about"
        ? `${window.location.pathname}${window.location.search}`
        : `${window.location.pathname}${window.location.search}#${current.id}`;
      window.history.replaceState(window.history.state, "", nextUrl);
    };

    const observeSections = () => {
      observer?.disconnect();
      const marker = 82 + Math.min(window.innerHeight * 0.22, 180);
      const bottomMargin = Math.max(window.innerHeight - marker - 1, 0);
      observer = new IntersectionObserver(updateActiveSection, {
        rootMargin: `-${marker}px 0px -${bottomMargin}px 0px`,
      });
      sections.forEach((section) => observer?.observe(section));
    };

    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      window.removeEventListener("resize", observeSections);
      observer?.disconnect();
    };
  }, [pathname]);

  if (pathname === "/") {
    return (
      <nav className="home-topnav" aria-label="页面目录">
        <a className="home-topnav-name" href="#about" data-cursor="TOP">
          <strong>WINSTON</strong>
        </a>
        <div
          className="home-topnav-links"
          style={{ "--home-active-index": homeLinks.findIndex(({ id }) => id === activeSection) } as CSSProperties}
        >
          {homeLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`home-topnav-link${activeSection === id ? " is-active" : ""}`}
              data-cursor="GO"
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="home-topnav-link home-topnav-ask"
            data-cursor="ASK"
            onClick={() => window.dispatchEvent(new Event("open-ask-zoo"))}
          >
            ASK ME MORE
          </button>
          <span className="home-topnav-indicator" aria-hidden="true" />
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
