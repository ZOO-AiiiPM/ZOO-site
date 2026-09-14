"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from "react";

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

/**
 * 读取当前应生效的主题（localStorage → 系统偏好）。
 *
 * 必须在首次渲染时就得到正确值，否则会先渲染默认主题再切换，造成闪烁。
 * 客户端导航（从首页点进 wiki）时，<head> 里的引导脚本不会重新执行，
 * 所以不能依赖它——这里自己算。
 */
function resolveInitialTheme(): { theme: Theme; mode: ThemeMode } {
  if (typeof window === "undefined") return { theme: "dark", mode: "system" };
  const stored = readStored();
  return {
    theme: stored === "system" ? systemTheme() : stored,
    mode: stored,
  };
}

export function WikiThemeProvider({ children }: { children: ReactNode }) {
  // 用初始化函数直接把真实主题算出来（而非写死 "dark"）。
  // React 会在首次渲染前调用它，因此首帧颜色就是对的，不会闪。
  const [initial] = useState(resolveInitialTheme);
  const [mode, setMode] = useState<ThemeMode>(initial.mode);
  const [theme, setTheme] = useState<Theme>(initial.theme);

  // 把算出来的主题写回 DOM。
  // 用 useLayoutEffect 保证在本次渲染的 paint 前执行。
  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // 跟随系统：仅在未手动设置时生效
  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      const resolved = systemTheme();
      setTheme(resolved);
      applyTheme(resolved);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      setMode(next); // 进入手动模式，不再跟系统
      applyTheme(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* 忽略 */
      }
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, isManual: mode !== "system", toggle }),
    [theme, mode, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useWikiTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useWikiTheme 必须在 WikiThemeProvider 内使用");
  return ctx;
}
