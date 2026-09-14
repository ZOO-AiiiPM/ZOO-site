"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

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
function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  // 让原生控件（滚动条、输入框）也跟随
  document.documentElement.style.colorScheme = theme;
}

export function WikiThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [theme, setTheme] = useState<Theme>("dark");
  const hydratedRef = useRef(false);

  // 首帧：读 localStorage；没有则跟随系统
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    const t = window.setTimeout(() => {
      const stored = readStored();
      setMode(stored);
      const resolved = stored === "system" ? systemTheme() : stored;
      setTheme(resolved);
      applyTheme(resolved);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

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
