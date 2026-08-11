"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const letters = [..."WINSTON"];

export function FooterWordmark() {
  const wordmarkRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const wordmark = wordmarkRef.current;
    if (!wordmark) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(wordmark);
    return () => observer.disconnect();
  }, []);

  return (
    <strong
      ref={wordmarkRef}
      className={`home-footer-wordmark${visible ? " is-visible" : ""}`}
      aria-label="WINSTON"
    >
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          aria-hidden="true"
          style={{ "--home-letter-index": index } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </strong>
  );
}
