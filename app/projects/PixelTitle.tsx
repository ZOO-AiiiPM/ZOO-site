"use client";

import { useEffect, useRef } from "react";

const G = "#6ee7b7";
const P = "#a78bfa";

// 5×7 pixel font
const FONT: Record<string, string[]> = {
  P: ["1111.", "1...1", "1...1", "1111.", "1....", "1....", "1...."],
  R: ["1111.", "1...1", "1...1", "1111.", "1.1..", "1..1.", "1...1"],
  O: [".111.", "1...1", "1...1", "1...1", "1...1", "1...1", ".111."],
  J: ["..111", "...1.", "...1.", "...1.", "...1.", "1..1.", ".11.."],
  E: ["11111", "1....", "1....", "111..", "1....", "1....", "11111"],
  C: [".1111", "1....", "1....", "1....", "1....", "1....", ".1111"],
  T: ["11111", "..1..", "..1..", "..1..", "..1..", "..1..", "..1.."],
  S: [".1111", "1....", "1....", ".111.", "....1", "....1", "1111."],
};

function lerpColor(a: string, b: string, t: number): string {
  const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
  const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
  return "#" + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, "0")).join("");
}

export function PixelTitle({ scale = 6 }: { scale?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const text = "PROJECTS";
  const letterW = 5;
  const letterH = 7;
  const gap = 1;
  const totalPxW = text.length * letterW + (text.length - 1) * gap;
  const totalPxH = letterH;

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, totalPxW, totalPxH);

    let ox = 0;
    [...text].forEach((ch) => {
      const data = FONT[ch];
      if (!data) {
        ox += letterW + gap;
        return;
      }
      data.forEach((row, ry) => {
        [...row].forEach((pixel, rx) => {
          if (pixel === "1") {
            const t = (ox + rx) / (totalPxW - 1);
            ctx.fillStyle = lerpColor(G, P, t);
            ctx.fillRect(ox + rx, ry, 1, 1);
          }
        });
      });
      ox += letterW + gap;
    });
  }, [totalPxW, totalPxH]);

  return (
    <canvas
      ref={ref}
      width={totalPxW}
      height={totalPxH}
      aria-label="Projects"
      role="heading"
      style={{
        imageRendering: "pixelated",
        width: totalPxW * scale,
        height: totalPxH * scale,
      }}
    />
  );
}
