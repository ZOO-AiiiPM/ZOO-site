"use client";

import { useEffect, useRef, useCallback } from "react";

// Color lerp for gradient O
function lerpColor(a: string, b: string, t: number): string {
  const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
  const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
  const r = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
  return "#" + r.map((v) => v.toString(16).padStart(2, "0")).join("");
}

const G = "#6ee7b7";
const P = "#a78bfa";

// 16x16 pixel avatar data
const AVATAR_PIXELS = [
  "____gggg____pppp", "___gggggg__pppp_", "___gggggggpppp__", "__bbbbbbbbbbbb__",
  "_bwwwwwwwwwwwwb_", "_bwwwwwwwwwwwwb_", "_bwwbwwwwbwwwwb_", "_bwwbwwwwbwwwwb_",
  "_bwwwwwwwwwwwwb_", "_bwwwwddwwwwwb__", "_bwwwwwwwwwwwb__", "__bwwffffffwb___",
  "__bbwwwwwwwbb___", "___bbbbbbbb____", "____bdddddb____", "_____bbbbb_____",
];
const AVATAR_COLORS: Record<string, string> = {
  _: "#1a1a1f", g: G, p: P, w: "#ededef", b: "#09090b", d: "#3a3a44", f: "#fbbf24",
};

// Letter pixel data (7-wide)
const Z_LETTER = ["1111111", "......1", ".....1.", "....1..", "...1...", "..1....", ".1.....", "1......", "1111111"];
const O_LETTER = [".11111.", "1.....1", "1.....1", "1.....1", "1.....1", "1.....1", "1.....1", "1.....1", ".11111."];

function drawPixelData(ctx: CanvasRenderingContext2D, data: string[], colors: Record<string, string>) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  data.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch === "_") return; // transparent
      ctx.fillStyle = colors[ch] || "#09090b";
      ctx.fillRect(x, y, 1, 1);
    });
  });
}

function drawZooText(ctx: CanvasRenderingContext2D, letters: string[][], px: number, w: number, h: number) {
  ctx.clearRect(0, 0, w, h);
  const letterW = letters[0][0].length;
  const letterH = letters[0].length;
  const totalW = letterW * 3 + 2; // 3 letters + 2 gaps
  let ox = Math.max(1, Math.floor((w - totalW * px) / 2));
  const oy = Math.max(1, Math.floor((h - letterH * px) / 2));

  // Z — solid green
  letters[0].forEach((row, ry) => {
    [...row].forEach((ch, rx) => {
      if (ch === "1") {
        ctx.fillStyle = G;
        ctx.fillRect(ox + rx * px, oy + ry * px, px, px);
      }
    });
  });
  ox += (letterW + 1) * px;

  // Middle O — gradient green→purple
  letters[1].forEach((row, ry) => {
    [...row].forEach((ch, rx) => {
      if (ch === "1") {
        ctx.fillStyle = lerpColor(G, P, rx / (letterW - 1));
        ctx.fillRect(ox + rx * px, oy + ry * px, px, px);
      }
    });
  });
  ox += (letterW + 1) * px;

  // Last O — solid purple
  letters[2].forEach((row, ry) => {
    [...row].forEach((ch, rx) => {
      if (ch === "1") {
        ctx.fillStyle = P;
        ctx.fillRect(ox + rx * px, oy + ry * px, px, px);
      }
    });
  });
}

// ===== Components =====

/** 16x16 pixel avatar */
export function PixelAvatar({ size = 80 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const draw = useCallback(() => {
    const ctx = ref.current?.getContext("2d");
    if (ctx) drawPixelData(ctx, AVATAR_PIXELS, AVATAR_COLORS);
  }, []);

  useEffect(() => { draw(); }, [draw]);

  return (
    <canvas
      ref={ref}
      width={16}
      height={16}
      style={{ imageRendering: "pixelated", width: size, height: size, borderRadius: Math.max(4, size * 0.15) }}
    />
  );
}

/** Large "ZOO" pixel text */
export function PixelZooText({ scale = 3 }: { scale?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const w = Math.ceil((7 * 3 + 2) * scale + 8);
  const h = Math.ceil(9 * scale + 8);

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (ctx) drawZooText(ctx, [Z_LETTER, O_LETTER, O_LETTER], scale, w, h);
  }, [scale, w, h]);

  return (
    <canvas
      ref={ref}
      width={w}
      height={h}
      style={{ imageRendering: "pixelated", width: w * 2, height: h * 2 }}
    />
  );
}

/** Compact Winston wordmark for legacy navigation */
export function PixelLogo() {
  const ref = useRef<HTMLCanvasElement>(null);
  const w = 74;
  const h = 18;

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, G);
    gradient.addColorStop(1, P);
    ctx.fillStyle = gradient;
    ctx.font = "700 10px monospace";
    ctx.textBaseline = "middle";
    ctx.fillText("WINSTON", 1, h / 2 + 1);
  }, []);

  return (
    <canvas
      ref={ref}
      width={w}
      height={h}
      style={{ imageRendering: "pixelated", width: 111, height: 27, cursor: "pointer" }}
    />
  );
}

/** Mini avatar for chat messages */
export function PixelMiniAvatar() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (ctx) drawPixelData(ctx, AVATAR_PIXELS, AVATAR_COLORS);
  }, []);

  return (
    <canvas
      ref={ref}
      width={16}
      height={16}
      style={{ imageRendering: "pixelated", width: 18, height: 18, borderRadius: 3 }}
    />
  );
}
