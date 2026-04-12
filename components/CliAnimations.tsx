"use client";

import { useEffect, useRef } from "react";
import "./cli-animations.css";

export function CliLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("cli-revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className="cli-line">{children}</div>;
}

export function Typewriter({ text, startDelay = 300, speed = 45 }: { text: string; startDelay?: number; speed?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.unobserve(el);
          el.textContent = "";
          el.classList.add("cli-typewriter-active");
          let i = 0;
          setTimeout(() => {
            const interval = setInterval(() => {
              if (i < text.length) {
                el.textContent = text.slice(0, i + 1);
                i++;
              } else {
                clearInterval(interval);
                el.classList.remove("cli-typewriter-active");
                el.classList.add("cli-typewriter-done");
              }
            }, speed);
          }, startDelay);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, startDelay, speed]);

  return <span ref={ref} className="cli-typewriter">{text}</span>;
}

export function StaggerReveal({ children, selector, interval = 120 }: { children: React.ReactNode; selector: string; interval?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("cli-stagger-active");
    const items = el.querySelectorAll(selector);
    items.forEach((v, i) => {
      (v as HTMLElement).style.transitionDelay = `${i * interval}ms`;
    });
    // Delay class addition to guarantee browser paints opacity:0 first
    const id = setTimeout(() => el.classList.add("cli-stagger-active"), 30);
    return () => clearTimeout(id);
  }, [selector, interval]);

  return <div ref={ref}>{children}</div>;
}

export function SectionHead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || hasRun.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.unobserve(el);
          cursorRef.current?.classList.add("flash");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
      <span ref={cursorRef} className="cli-section-cursor">█</span>
    </div>
  );
}
