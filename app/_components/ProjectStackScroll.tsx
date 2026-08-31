"use client";

import { useEffect } from "react";

const PIN_TOP = 80;

export function ProjectStackScroll({ onIndexChange }: { onIndexChange: (index: number) => void }) {
  useEffect(() => {
    const stack = document.querySelector<HTMLElement>(".home-project-stack");
    const stage = stack?.querySelector<HTMLElement>(".home-project-stage");
    if (!stack || !stage) return;
    const cards = Array.from(stack.querySelectorAll<HTMLElement>(".home-project-page"));
    if (cards.length < 2) return;

    const desktop = window.matchMedia("(min-width: 1101px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let start = 0;
    let distance = 1;
    let lastRaw = -1;
    let lastIndex = -1;

    const clearCardStyles = () => {
      lastRaw = -1;
      lastIndex = -1;
      for (const card of cards) {
        card.style.translate = "";
        card.style.opacity = "";
        card.style.scale = "";
      }
    };

    const measure = () => {
      start = window.scrollY + stack.getBoundingClientRect().top - PIN_TOP;
      distance = Math.max(stack.offsetHeight - stage.offsetHeight, 1);
    };

    const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
    const smoothstep = (value: number) => value * value * (3 - 2 * value);

    const render = () => {
      frame = 0;
      if (!desktop.matches || reducedMotion.matches) return;
      const raw = clamp01((window.scrollY - start) / distance);
      if (Math.abs(raw - lastRaw) < 0.0005) return;
      lastRaw = raw;
      const progress = smoothstep(clamp01((raw - 0.16) / 0.68));
      cards.forEach((card, index) => {
        if (index === 0) {
          card.style.translate = `0 ${(-10 * progress).toFixed(3)}%`;
          card.style.opacity = `${(1 - 0.62 * progress).toFixed(3)}`;
          card.style.scale = `${(1 - 0.03 * progress).toFixed(4)}`;
          return;
        }
        card.style.translate = `0 ${((1 - progress) * 100).toFixed(3)}%`;
        card.style.opacity = "1";
        card.style.scale = `${(0.985 + 0.015 * progress).toFixed(4)}`;
      });
      const index = Math.round(progress * (cards.length - 1));
      if (index !== lastIndex) {
        lastIndex = index;
        onIndexChange(index);
      }
    };

    const scheduleRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const handleModeChange = () => {
      if (!desktop.matches || reducedMotion.matches) clearCardStyles();
      measure();
      scheduleRender();
    };

    measure();
    scheduleRender();
    desktop.addEventListener("change", handleModeChange);
    reducedMotion.addEventListener("change", handleModeChange);
    window.addEventListener("resize", measure);
    window.addEventListener("resize", scheduleRender);
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("load", measure);

    return () => {
      window.cancelAnimationFrame(frame);
      desktop.removeEventListener("change", handleModeChange);
      reducedMotion.removeEventListener("change", handleModeChange);
      window.removeEventListener("resize", measure);
      window.removeEventListener("resize", scheduleRender);
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("load", measure);
      clearCardStyles();
    };
  }, [onIndexChange]);

  return null;
}
