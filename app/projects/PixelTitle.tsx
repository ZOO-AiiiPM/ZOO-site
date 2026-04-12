"use client";

import { useEffect, useRef } from "react";

const G = "#6ee7b7";
const P = "#a78bfa";

// 5×7 pixel font
const FONT: Record<string, string[]> = {
  A: [".111.", "1...1", "1...1", "11111", "1...1", "1...1", "1...1"],
  B: ["1111.", "1...1", "1...1", "1111.", "1...1", "1...1", "1111."],
  C: [".1111", "1....", "1....", "1....", "1....", "1....", ".1111"],
  E: ["11111", "1....", "1....", "111..", "1....", "1....", "11111"],
  G: [".1111", "1....", "1....", "1.111", "1...1", "1...1", ".111."],
  J: ["..111", "...1.", "...1.", "...1.", "...1.", "1..1.", ".11.."],
  L: ["1....", "1....", "1....", "1....", "1....", "1....", "11111"],
  O: [".111.", "1...1", "1...1", "1...1", "1...1", "1...1", ".111."],
  P: ["1111.", "1...1", "1...1", "1111.", "1....", "1....", "1...."],
  R: ["1111.", "1...1", "1...1", "1111.", "1.1..", "1..1.", "1...1"],
  S: [".1111", "1....", "1....", ".111.", "....1", "....1", "1111."],
  T: ["11111", "..1..", "..1..", "..1..", "..1..", "..1..", "..1.."],
  U: ["1...1", "1...1", "1...1", "1...1", "1...1", "1...1", ".111."],
};

function lerpColor(a: string, b: string, t: number): string {
  const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
  const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
  return "#" + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, "0")).join("");
}

export function PixelTitle({ scale = 6, text = "PROJECTS", animated = false }: { scale?: number; text?: string; animated?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const letterW = 5;
  const letterH = 7;
  const gap = 1;
  const totalPxW = text.length * letterW + (text.length - 1) * gap;
  const totalPxH = letterH;

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;

    // Pre-compute all pixels
    const pixels: { x: number; y: number; color: string }[] = [];
    let ox = 0;
    [...text].forEach((ch) => {
      const data = FONT[ch];
      if (!data) { ox += letterW + gap; return; }
      data.forEach((row, ry) => {
        [...row].forEach((pixel, rx) => {
          if (pixel === "1") {
            const gx = ox + rx;
            const t = gx / (totalPxW - 1);
            pixels.push({ x: gx, y: ry, color: lerpColor(G, P, t) });
          }
        });
      });
      ox += letterW + gap;
    });

    ctx.clearRect(0, 0, totalPxW, totalPxH);

    if (!animated) {
      // Static: draw all pixels immediately
      for (const p of pixels) {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 1, 1);
      }
      return;
    }

    // Animate: draw column by column
    const msPerCol = 18;
    let startTime = 0;
    let drawnUpTo = -1;

    function draw(now: number) {
      if (!startTime) startTime = now;
      if (!ctx) return;
      const elapsed = now - startTime;
      const currentCol = Math.min(Math.floor(elapsed / msPerCol), totalPxW);

      if (currentCol > drawnUpTo) {
        for (const p of pixels) {
          if (p.x > drawnUpTo && p.x <= currentCol) {
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, 1, 1);
          }
        }

        if (drawnUpTo >= 0 && drawnUpTo < totalPxW) {
          ctx.clearRect(drawnUpTo + 1, 0, 1, totalPxH);
          for (const p of pixels) {
            if (p.x === drawnUpTo + 1) {
              ctx.fillStyle = p.color;
              ctx.fillRect(p.x, p.y, 1, 1);
            }
          }
        }

        if (currentCol < totalPxW) {
          ctx.fillStyle = G;
          ctx.globalAlpha = 0.5;
          ctx.fillRect(currentCol + 1, 0, 1, totalPxH);
          ctx.globalAlpha = 1;
        }

        drawnUpTo = currentCol;
      }

      if (currentCol < totalPxW) {
        requestAnimationFrame(draw);
      }
    }

    requestAnimationFrame(draw);
  }, [text, totalPxW, totalPxH, animated]);

  return (
    <canvas
      ref={ref}
      width={totalPxW}
      height={totalPxH}
      aria-label={text}
      role="heading"
      style={{
        imageRendering: "pixelated",
        width: totalPxW * scale,
        height: totalPxH * scale,
      }}
    />
  );
}
