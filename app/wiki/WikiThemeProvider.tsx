"use client";

import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";

export type Theme = "light" | "dark";
/** "system" 表示跟随系统（初始态）；一旦手动切换就固定为 light/dark */
type ThemeMode = Theme | "system";

const STORAGE_KEY = "wiki-theme";

interface ThemeContextValue {
  /** 当前实际生效的主题（已解析系统偏好） */
  theme: Theme;
  /** 是否处于手动模式（用户点过切换按钮） */
  isManual: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * 模块加载时立即应用主题。
 *
 * 这是消除「首页 → wiki 客户端导航时闪烁」的关键：
 * - <head> 里的引导脚本只在全页加载时执行，客户端导航不会重跑
 * - React 的 effect 要等路由切换 + 整棵 wiki 树渲染完（实测 ~170ms）
 *   才执行，而浏览器早就画出了第一帧旧配色
 *
 * 主题模块是 wiki layout 的依赖，路由切换时会随之被求值——
 * 早于组件渲染和 paint，所以在这里写 DOM 就能赶在用户看到之前生效。
 *
 * 只在浏览器且尚未设置时介入，不覆盖服务端已定的值。
 */
if (typeof window !== "undefined") {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const t =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.dataset.theme = t;
    document.documentElement.style.colorScheme = t;
  } catch {
    /* 隐私模式等场景忽略 */
  }
}

function systemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function readStored(): ThemeMode {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

/** 把主题写到 <html data-theme="...">，CSS 据此覆盖设计 token */
/** 把主题写到 <html data-theme="...">，CSS 据此覆盖设计 token */
function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  // 让原生控件（滚动条、输入框）也跟随
  document.documentElement.style.colorScheme = theme;
}

export function WikiThemeProvider({ children }: { children: ReactNode }) {
  // ===== 主题状态 =====
  //
  // 用 useSyncExternalStore 读 localStorage：
  // React 会在 hydration 时先用 getServerSnapshot 渲染（与服务端一致），
  // 水合完成后自动切到 getSnapshot 重渲染，因此：
  //   - 不会有 hydration mismatch
  //   - 不需要手写 mounted 标记，也就不需要 effect 里 setState
  // 防闪烁由模块顶部的引导脚本负责（已在 paint 前写好 data-theme）。
  const subscribeTheme = useCallback((onChange: () => void) => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener("change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const getThemeSnapshot = useCallback((): ThemeMode => readStored(), []);
  const getServerSnapshot = useCallback((): ThemeMode => "system", []);

  const storedMode = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerSnapshot,
  );

  // 系统偏好：同一套订阅（matchMedia change）
  const getSystemSnapshot = useCallback((): Theme => systemTheme(), []);
  const getSystemServerSnapshot = useCallback((): Theme => "dark", []);
  const systemPref = useSyncExternalStore(
    subscribeTheme,
    getSystemSnapshot,
    getSystemServerSnapshot,
  );

  // localStorage 未设时回退到系统偏好。
  // 注意：hydration 阶段 storedMode 为 "system"、systemPref 为 "dark"，
  // 与服务端的首帧输出一致；水合后自动修正为真实值。
  const resolvedTheme: Theme =
    storedMode === "system" ? systemPref : storedMode;

  // 写到 <html data-theme>（paint 前）
  useLayoutEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  // 手动切换：写入 localStorage 并触发重渲染
  const [, forceRerender] = useState(0);
  const toggle = useCallback(() => {
    const next: Theme = resolvedTheme === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* 隐私模式等场景忽略 */
    }
    forceRerender((n) => n + 1);
  }, [resolvedTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme: resolvedTheme, isManual: storedMode !== "system", toggle }),
    [resolvedTheme, storedMode, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useWikiTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useWikiTheme 必须在 WikiThemeProvider 内使用");
  return ctx;
}
