"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./wiki-loading.css";

/**
 * Wiki 词条切换时的加载进度条。
 *
 * 行为：
 * 1. 点击词条 → 进度条出现，从 0 起随时间平滑向右推进（带缓动，越接近上限越慢）
 * 2. 新内容渲染完成 → 补满到 100%
 * 3. 满格保持片刻后淡出
 *
 * ## 为什么不用 loading.tsx
 * 词条数据（data.ts）是静态导入的，App Router 的 loading.tsx 边界来不及渲染，
 * 因此这里用「点击埋点 + 路由完成」自行控制。
 *
 * ## 完成信号的选取（重要）
 * 早期版本用 usePathname() 作为「内容已就绪」的信号，但它有个问题：
 * pathname 在 URL 切换时就变了，而此时 React 往往还没把新词条渲染出来，
 * 于是进度条提前冲满并淡出，用户看到「条已满但页面仍是旧的」。
 *
 * 这里改为观察「新词条内容真正挂载」——即 .wiki-detail-crumbs 里的
 * 当前词条名发生变化。它是词条页顶部面包屑的最后一个 span，
 * 出现即代表新内容已经渲染。
 */

const START_EVENT = "wiki:loading-start";

/** 推进参数：用「经过时间」驱动，保证与帧率无关 */
const CLIMB_MS = 900; // 从 0 爬到 CAP 的大致时长
const CAP = 90; // 未完成时的进度上限（留 10% 给完成时补满）
const HOLD_MS = 260; // 满格后保持多久再淡出
const FADE_MS = 220; // 淡出时长（与 CSS 对应）

/** 完成检测：轮询这个词条名什么时候变 */
const CONTENT_SELECTOR = ".wiki-detail-crumbs .is-current";
const POLL_MS = 40;

export function startWikiLoading() {
  window.dispatchEvent(new Event(START_EVENT));
}

export function WikiLoading() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  /** 本轮是否已补满（防止重复触发完成流程） */
  const doneRef = useRef(false);
  /** 开始时间：进度由「已经过多久」直接算出，不依赖逐帧累加 */
  const startRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pollRef = useRef<number | null>(null);
  const holdTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (holdTimer.current !== null) window.clearTimeout(holdTimer.current);
    if (fadeTimer.current !== null) window.clearTimeout(fadeTimer.current);
    if (pollRef.current !== null) window.clearInterval(pollRef.current);
    holdTimer.current = fadeTimer.current = pollRef.current = null;
  }, []);

  const stopRaf = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  /** 补满 → 保持 → 淡出 → 卸载 */
  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    stopRaf();
    clearTimers();
    setProgress(100);
    holdTimer.current = window.setTimeout(() => {
      setFading(true);
      fadeTimer.current = window.setTimeout(() => {
        setVisible(false);
        setFading(false);
        setProgress(0);
      }, FADE_MS);
    }, HOLD_MS);
  }, [clearTimers, stopRaf]);

  // 点击 → 立刻开始一轮
  useEffect(() => {
    const onStart = () => {
      stopRaf();
      clearTimers();
      doneRef.current = false;
      startRef.current = performance.now();
      setVisible(true);
      setFading(false);
      setProgress(0);

      // 1) 按经过时间推进：progress = CAP * (1 - e^(-t/τ))
      //    用时间函数而不是逐帧累加，帧率高低都不会改变总时长。
      const tau = CLIMB_MS / 3;
      const tick = () => {
        const elapsed = performance.now() - startRef.current;
        const p = doneRef.current ? 100 : CAP * (1 - Math.exp(-elapsed / tau));
        setProgress(p);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);

      // 2) 等新内容真正挂载 → 立即补满
      //    对比点击瞬间记录的词条名，变了就说明新内容已渲染。
      const before = document.querySelector(CONTENT_SELECTOR)?.textContent ?? null;
      pollRef.current = window.setInterval(() => {
        if (doneRef.current) {
          window.clearInterval(pollRef.current!);
          pollRef.current = null;
          return;
        }
        const now = document.querySelector(CONTENT_SELECTOR)?.textContent ?? null;
        if (now !== null && now !== before) finish();
      }, POLL_MS);
    };

    window.addEventListener(START_EVENT, onStart);
    return () => {
      window.removeEventListener(START_EVENT, onStart);
    };
  }, [clearTimers, finish, stopRaf]);

  // /wiki 索引页 → 卡片点击后目标页没有面包屑（词条页才有），
  // 上面的轮询会一直不命中。这时以 pathname 变化作为兜底，但**加最短展示时间**，
  // 避免动画一闪而过；同时留一点时间给内容渲染。
  useEffect(() => {
    if (!visible || doneRef.current) return;
    const elapsed = performance.now() - startRef.current;
    const MIN_VISIBLE = 600;
    const delay = Math.max(0, MIN_VISIBLE - elapsed);
    const t = window.setTimeout(finish, delay);
    return () => window.clearTimeout(t);
  }, [pathname, visible, finish]);

  // 卸载清理
  useEffect(() => {
    return () => {
      stopRaf();
      clearTimers();
    };
  }, [clearTimers, stopRaf]);

  if (!visible) return null;

  return (
    <div
      className={`wiki-loading${fading ? " is-fading" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="正在加载词条"
    >
      <span
        className="wiki-loading-bar"
        style={{ width: `${Math.min(progress, 100)}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
