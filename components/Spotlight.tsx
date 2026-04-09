"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.body.style.setProperty("--mx", e.clientX + "px");
      document.body.style.setProperty("--my", e.clientY + "px");
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return <div className="spotlight" />;
}
