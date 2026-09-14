"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./wiki-loading.css";

/**
 * Wiki 词条切换时的加载进度条。
 *
 * 行为（按需求）：
 * 1. 点击词条 → 进度条出现，从 0 一路向右推进（不是闪烁）
 * 2. 推进到接近右端时新内容已渲染完成 → 补满到 100%（刚好到尽头）
 * 3. 保持满格常驻，待内容就绪后淡出
 *
 * 覆盖两个 nav：主 nav（.wiki-detail-nav）与侧边栏品牌栏（.wiki-sidebar-brand）
 * —— 它们是两个独立元素，只是恰好等高（60px）都带底边框，所以各画一条。
 *
 * 为什么不用 loading.tsx：词条数据（data.ts）是静态导入的，跳转瞬时，
 * App Router 的 loading.tsx 来不及渲染，因此这里自行控制。
 */

const START_EVENT = "wiki:loading-start";

/** 进度推进节奏 */
const TICK_MS = 60;        // 刷新间隔
const EASE = 0.10;         // 缓动系数：越接近上限越慢
const CAP = 92;            // 未完成时的进度上限（留 8% 给完成时补满）
/** 完成后保持满格的时间，再淡出 */
const HOLD_MS = 320;

export function startWikiLoading() {
  window.dispatchEvent(new Event(START_EVENT));
}

export function WikiLoading() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);
  const finished = useRef(false);

  const stopRaf = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };
  const clearHideTimer = () => {
    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  // 点击链接 → 重置并开始推进
  useEffect(() => {
    const onStart = () => {
      stopRaf();
      clearHideTimer();
      finished.current = false;
      setVisible(true);
      setProgress(0);
    };
    window.addEventListener(START_EVENT, onStart);
    return () => {
      window.removeEventListener(START_EVENT, onStart);
      stopRaf();
      clearHideTimer();
    };
  }, []);

  // 进度推进：指数缓动逼近 CAP，永不到达（避免提前停在 92% 像卡住）
  useEffect(() => {
    if (!visible || finished.current) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (dt >= TICK_MS) {
        setProgress((p) => (p >= CAP ? CAP : p + (CAP - p) * EASE));
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return stopRaf;
  }, [visible]);

  // 路由变化 = 新词条已渲染 → 补满 100%，常驻片刻后淡出
  useEffect(() => {
    if (!visible) return;
    finished.current = true;
    stopRaf();
    clearHideTimer();
    // 不在 effect 体内同步 setState（会触发级联渲染），放到下一帧
    const raf = requestAnimationFrame(() => setProgress(100));
    hideTimer.current = window.setTimeout(() => setVisible(false), HOLD_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearHideTimer();
    };
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div className="wiki-loading" role="status" aria-live="polite" aria-label="正在加载词条">
      <span
        className="wiki-loading-bar"
        style={{ width: `${Math.min(progress, 100)}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
