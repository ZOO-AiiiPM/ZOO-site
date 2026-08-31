"use client";

import { useEffect } from "react";

export function HomeSmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktop.matches || reducedMotion.matches) return;

    const aboutStack = document.querySelector<HTMLElement>(".home-about-work-stack");
    const hero = aboutStack?.querySelector<HTMLElement>(".home-hero");
    const portfolio = document.querySelector<HTMLElement>(".home-portfolio");
    let frame = 0;
    let scrollStopTimer = 0;
    let scrollStart = 0;
    let scrollDistance = 1;

    const measureAbout = () => {
      if (!aboutStack || !hero) return;
      // The stack starts at the document origin. Measuring once avoids a
      // getBoundingClientRect read on every scroll frame.
      scrollStart = aboutStack.offsetTop;
      scrollDistance = Math.max(hero.offsetHeight, 1);
    };

    const render = () => {
      frame = 0;
      if (!hero) return;
      const progress = Math.min(1, Math.max(0, (window.scrollY - scrollStart) / scrollDistance));
      hero.style.setProperty("--home-hero-scroll", progress.toFixed(4));
    };

    const scheduleRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const handleScroll = () => {
      scheduleRender();
      portfolio?.classList.add("is-scrolling");
      window.clearTimeout(scrollStopTimer);
      scrollStopTimer = window.setTimeout(() => {
        portfolio?.classList.remove("is-scrolling");
      }, 120);
    };

    window.addEventListener("resize", measureAbout);
    window.addEventListener("resize", scheduleRender);
    window.addEventListener("scroll", handleScroll, { passive: true });
    measureAbout();
    scheduleRender();

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(scrollStopTimer);
      window.removeEventListener("resize", measureAbout);
      window.removeEventListener("resize", scheduleRender);
      window.removeEventListener("scroll", handleScroll);
      portfolio?.classList.remove("is-scrolling");
      hero?.style.removeProperty("--home-hero-scroll");
    };
  }, []);

  return null;
}
