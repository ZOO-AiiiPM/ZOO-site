"use client";

import { useEffect, useRef, useState } from "react";

export function ProofCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [textMode, setTextMode] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) return;

    const render = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
      frameRef.current = null;
    };

    const onMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(render);
      setVisible((current) => current || true);

      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor]") : null;
      const element = event.target instanceof Element ? event.target : null;
      const isFormText = element?.matches("input, textarea, [contenteditable='true']") ?? false;
      const isTextElement = element?.matches(
        "p, h1, h2, h3, h4, h5, h6, li, dt, dd, blockquote, figcaption, em, strong, small, label, code",
      ) ?? false;
      const nextTextMode = !target && (isFormText || isTextElement);
      const nextLabel = nextTextMode ? "" : target?.dataset.cursor ?? "";
      setTextMode((current) => current === nextTextMode ? current : nextTextMode);
      setLabel((current) => current === nextLabel ? current : nextLabel);
    };

    const onLeave = () => setVisible(false);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`home-proof-cursor${visible ? " is-visible" : ""}${label ? " has-label" : ""}${textMode ? " is-text" : ""}`}
      aria-hidden="true"
    >
      <span>{label}</span>
    </div>
  );
}
