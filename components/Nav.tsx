"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useState } from "react";
import { PixelAvatar, PixelLogo } from "@/components/PixelArt";
import { jumpToPageTop } from "@/app/_components/homeScroll";

const homeLinks = [
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
  { id: "ask", label: "ASK ME MORE" },
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
    let activeId = "";
    let frame = 0;
    let sectionTops: number[] = [];

    const measureSections = () => {
      sectionTops = sections.map((section) => section.getBoundingClientRect().top + window.scrollY);
    };

    const updateActiveSection = () => {
      frame = 0;
      // Switch as soon as a section becomes the current reading area instead
      // of waiting for its top edge to reach the sticky header.
      const readingLine = Math.min(Math.max(window.innerHeight * 0.32, 150), 260);
      const marker = window.scrollY + readingLine;
      let current = sections[0];

      for (let index = 0; index < sections.length; index += 1) {
        if (sectionTops[index] <= marker) current = sections[index];
        else break;
      }

      if (!current || current.id === activeId) return;

      activeId = current.id;
      setActiveSection(current.id);
      const nextUrl = current.id === "about"
        ? `${window.location.pathname}${window.location.search}`
        : `${window.location.pathname}${window.location.search}#${current.id}`;
      window.history.replaceState(window.history.state, "", nextUrl);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    const handleResize = () => {
      measureSections();
      scheduleUpdate();
    };

    measureSections();
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    // Prevent the browser from scrolling the focused anchor back into view
    // after an explicit jump to the page origin.
    event.currentTarget.blur();
    const target = id === "about" ? 0 : document.getElementById(id);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (typeof target === "number") {
      if (behavior === "auto") {
        jumpToPageTop();
      } else {
        window.scrollTo({ top: target, left: 0, behavior });
      }
    }
    else target?.scrollIntoView({ behavior, block: "start" });
  };

  if (pathname === "/") {
    return (
      <nav className="home-topnav" aria-label="页面目录">
        <a className="home-topnav-name" href="#about" data-cursor="TOP" onClick={(event) => scrollToSection(event, "about")}>
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
              onClick={(event) => scrollToSection(event, id)}
              className={`home-topnav-link${activeSection === id ? " is-active" : ""}`}
              data-cursor="GO"
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
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
