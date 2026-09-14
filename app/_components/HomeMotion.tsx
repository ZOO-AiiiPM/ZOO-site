"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./home-motion.css";

const shapes = [
  { kind: "ring", x: 5, y: 24, size: 72, purple: false },
  { kind: "tiles", x: 92, y: 17, size: 42, purple: true },
  { kind: "orbit", x: 94, y: 53, size: 104, purple: true },
  { kind: "diamond", x: 8, y: 75, size: 44, purple: false },
  { kind: "cross", x: 76, y: 91, size: 32, purple: true },
  { kind: "grid", x: 24, y: 8, size: 58, purple: false },
  { kind: "triangle", x: 58, y: 76, size: 34, purple: false },
  { kind: "bars", x: 39, y: 95, size: 46, purple: true },
  { kind: "orbit", x: 2, y: 48, size: 110, purple: false },
  { kind: "checker", x: 82, y: 39, size: 40, purple: false },
  { kind: "pinwheel", x: 17, y: 42, size: 54, purple: true },
  { kind: "target", x: 88, y: 77, size: 76, purple: false },
  { kind: "stairs", x: 69, y: 12, size: 44, purple: false },
  { kind: "dots", x: 14, y: 94, size: 48, purple: true },
  { kind: "split-disc", x: 31, y: 61, size: 38, purple: false },
  { kind: "hourglass", x: 96, y: 93, size: 44, purple: true },
  { kind: "nested", x: 48, y: 29, size: 32, purple: true },
  { kind: "petal", x: 64, y: 53, size: 24, purple: false },
] as const;

/** One clock owns wheel damping and the continuous decorative background. */
export function HomeMotion() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;
    const elements = Array.from(background.querySelectorAll<HTMLElement>(".home-motion-shape"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let frame = 0;
    let previousTime = 0;
    let clock = 0;
    let phase = 0;
    let speed = 1;
    let travel = 0;
    let viewportHeight = window.innerHeight;
    let pointerX = 0;
    let pointerY = 0;
    const updateViewport = () => { viewportHeight = window.innerHeight; };
    const updatePointer = (event: PointerEvent) => {
      pointerX = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      pointerY = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
      background.style.setProperty("--home-pointer-x", `${pointerX.toFixed(3)}`);
      background.style.setProperty("--home-pointer-y", `${pointerY.toFixed(3)}`);
    };

    const render = (time: number) => {
      frame = 0;
      if (!lenis || document.hidden) return;
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
      previousTime = time;
      // A paused tab must not advance the interpolator by its hidden duration.
      clock += delta * 1000;
      lenis.raf(clock);
      const targetSpeed = lenis.velocity > 0
        ? 1 + Math.min(lenis.velocity / 1.5, 19)
        : 1 + Math.min(Math.abs(lenis.velocity) / 8, 4);
      const response = targetSpeed > speed ? 0.1 : 0.6;
      speed += (targetSpeed - speed) * (1 - Math.exp(-delta / response));
      travel += delta * 12 * speed;
      phase += delta * (1 + Math.min((speed - 1) * 0.12, 2));
      elements.forEach((element, index) => {
        const offset = index * 1.73;
        const x = Math.sin(phase * 0.21 + offset) * (12 + index % 4 * 5) + pointerX * (4 + index % 3 * 2);
        const depth = 0.7 + index % 5 * 0.14;
        const origin = shapes[index].y / 100 * viewportHeight;
        // Wrap only after the entire rotated shape leaves the viewport.
        const range = viewportHeight + 360;
        const position = ((origin + 180 - travel * depth) % range + range) % range - 180;
        const y = position - origin + pointerY * (3 + index % 4);
        const rotation = phase * (index % 2 ? -4 : 5) + index * 23;
        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      });
      frame = window.requestAnimationFrame(render);
    };

    const cancelFrame = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };

    const syncPreference = () => {
      cancelFrame();
      lenis?.destroy();
      lenis = null;
      speed = 1;
      if (preference.matches) {
        elements.forEach((element) => element.style.removeProperty("transform"));
        return;
      }
      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        anchors: true,
        autoRaf: false,
        prevent: (node) => Boolean(node.closest(".home-ask-content")),
      });
      if (!document.hidden) frame = window.requestAnimationFrame(render);
    };

    const syncVisibility = () => {
      cancelFrame();
      if (!document.hidden && lenis) frame = window.requestAnimationFrame(render);
    };

    preference.addEventListener("change", syncPreference);
    document.addEventListener("visibilitychange", syncVisibility);
    window.addEventListener("resize", updateViewport);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    syncPreference();
    return () => {
      cancelFrame();
      lenis?.destroy();
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", syncVisibility);
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div className="home-motion-background" ref={backgroundRef} aria-hidden="true">
      <div className="home-motion-grid" />
      {shapes.map((shape, index) => (
        <span
          key={index}
          className={`home-motion-shape home-motion-${shape.kind}${shape.purple ? " home-motion-purple" : ""}`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            "--home-shape-size": `${shape.size}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
