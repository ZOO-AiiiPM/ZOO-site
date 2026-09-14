"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  /** 推理模型的思考过程（仅 assistant 消息有；回答完成后仍保留，供回看） */
  thinking?: string;
}

export type AssistantMode = "closed" | "floating" | "expanded";

interface AssistantContextValue {
  mode: AssistantMode;
  messages: ChatMessage[];
  isStreaming: boolean;
  isThinking: boolean;
  error: string | null;
  /** 当前词条 id，仅作为提问上下文；对话历史本身跨词条共享 */
  entryId: string;
  entryTerm: string;
  setActiveEntry: (id: string, term: string) => void;
  open: (next?: AssistantMode) => void;
  close: () => void;
  toggleExpanded: () => void;
  send: (text: string) => void;
  stop: () => void;
  clear: () => void;
  /** 离开词条详情页时调用：中断请求、清空历史、收起面板、重置形态记忆 */
  resetToIdle: () => void;
}

const AssistantContext = createContext<AssistantContextValue | null>(null);

/** 对话历史：全站共用一份（sessionStorage，切页面/刷新不丢） */
const HISTORY_KEY = "wiki-ai-history";

/** 记住面板形态（floating / expanded）——只存内存，故意不持久化：
    - 点 × 关闭后再点 FAB 打开 → 沿用上次形态（放大过就还是放大）
    - 关掉浏览器重新进入 → 一律回到关闭态（不自动弹出） */

function readSession(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    /* 隐私模式等场景忽略 */
  }
}

export function WikiAssistantProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AssistantMode>("closed");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [entryId, setEntryId] = useState("");
  const [entryTerm, setEntryTerm] = useState("");

  const abortRef = useRef<AbortController | null>(null);
  const hydratedRef = useRef(false);
  /** 上次使用的面板形态（内存级）：关闭后重新打开时沿用 */
  const lastShapeRef = useRef<Exclude<AssistantMode, "closed">>("floating");
  // 流式回调里要读到最新 messages，用 ref 避免闭包拿到旧值
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;

  // 首次挂载恢复历史（异步 setState，避免水合不匹配）。
  // 注意：不恢复 mode —— 重新进入站点一律关闭。
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    const t = window.setTimeout(() => {
      const raw = readSession(HISTORY_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as ChatMessage[];
          if (Array.isArray(parsed)) setMessages(parsed.filter((m) => m && typeof m.content === "string"));
        } catch {
          /* 忽略损坏数据 */
        }
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  // 历史落盘。
  // 注意：思考内容（thinking）不持久化——单条可达数千字，多轮下来会
  // 撞上 sessionStorage 的容量上限。刷新后只有对话内容，思考过程属于
  // 本次会话的临时产物。
  useEffect(() => {
    if (!hydratedRef.current) return;
    writeSession(
      HISTORY_KEY,
      JSON.stringify(messages.map(({ role, content }) => ({ role, content }))),
    );
  }, [messages]);

  const open = useCallback((next?: AssistantMode) => {
    // 不传时沿用上次形态：放大过就重新以放大态打开
    setMode(next ?? lastShapeRef.current);
  }, []);

  const close = useCallback(() => {
    abortRef.current?.abort();
    setMode("closed");
  }, []);

  const toggleExpanded = useCallback(() => {
    setMode((prev) => {
      const target: Exclude<AssistantMode, "closed"> =
        prev === "expanded" ? "floating" : "expanded";
      lastShapeRef.current = target;
      return target;
    });
  }, []);

  const setActiveEntry = useCallback((id: string, term: string) => {
    setEntryId(id);
    setEntryTerm(term);
  }, []);

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const clear = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    try {
      window.sessionStorage.removeItem(HISTORY_KEY);
    } catch {
      /* 忽略 */
    }
  }, []);

  /** 离开详情页：与 clear 类似，但连形态记忆一起重置，回到初始悬浮态 */
  const resetToIdle = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setMode("closed");
    lastShapeRef.current = "floating";
    try {
      window.sessionStorage.removeItem(HISTORY_KEY);
    } catch {
      /* 忽略 */
    }
  }, []);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || isStreaming) return;

      const history = [...messagesRef.current, { role: "user" as const, content: text }];
      setMessages([...history, { role: "assistant", content: "" }]);
      setError(null);
      setIsStreaming(true);
      setIsThinking(true);

      const controller = new AbortController();
      abortRef.current = controller;

      const run = async () => {
        try {
          const res = await fetch("/api/wiki-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
            body: JSON.stringify({
              entryId,
              messages: history.map((m) => ({ role: m.role, content: m.content })),
            }),
          });

          if (!res.ok) {
            const data = await res.json().catch(() => null);
            throw new Error(data?.error || `请求失败（${res.status}）`);
          }

          const reader = res.body?.getReader();
          if (!reader) throw new Error("没有收到有效的回复流");

          const decoder = new TextDecoder();
          let assistantContent = "";
          let buffer = "";

          // SSE 事件可能被网络拆成半行，先按空行缓冲完整事件再解析。
          const consumeEvent = (event: string) => {
            const dataLine = event.split(/\r?\n/).find((line) => line.startsWith("data:"));
            if (!dataLine) return;
            const data = dataLine.slice(5).trim();
            if (!data || data === "[DONE]") return;
            try {
              const parsed = JSON.parse(data) as {
                text?: string;
                thinking?: string;
                error?: string;
              };
              if (parsed.error) {
                setError(parsed.error);
                setIsThinking(false);
                return;
              }
              // 思考内容：累积到最后一条 assistant 消息上，同时保持 thinking 态。
              // 挂在消息上而不是全局 state，这样每条历史回答都能回看自己的思考过程。
              if (typeof parsed.thinking === "string" && parsed.thinking) {
                setIsThinking(true);
                setMessages((prev) => {
                  const updated = [...prev];
                  const last = updated[updated.length - 1];
                  if (last?.role === "assistant") {
                    updated[updated.length - 1] = {
                      ...last,
                      thinking: (last.thinking ?? "") + parsed.thinking,
                    };
                  }
                  return updated;
                });
                return;
              }
              if (typeof parsed.text === "string" && parsed.text) {
                setIsThinking(false);
                assistantContent += parsed.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  const last = updated[updated.length - 1];
                  // 必须展开保留 thinking —— 直接替换整个对象会把已累积的
                  // 思考内容丢掉（第一个 text 事件到达时就清空了）。
                  updated[updated.length - 1] = {
                    ...last,
                    role: "assistant",
                    content: assistantContent,
                  };
                  return updated;
                });
              }
            } catch {
              /* 忽略无法解析的行 */
            }
          };

          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const events = buffer.split(/\r?\n\r?\n/);
            buffer = events.pop() ?? "";
            for (const ev of events) consumeEvent(ev);
          }
          if (buffer.trim()) consumeEvent(buffer);

          if (!assistantContent) {
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: "assistant",
                content: "这次没生成出内容，换个问法再试试？",
              };
              return updated;
            });
          }
        } catch (err) {
          if ((err as Error)?.name === "AbortError") {
            // 主动中断：保留已生成的部分，移除空的占位气泡
            setMessages((prev) =>
              prev.filter(
                (m, i) => !(i === prev.length - 1 && m.role === "assistant" && !m.content),
              ),
            );
          } else {
            setError(err instanceof Error ? err.message : "出了点问题，稍后再试");
            setMessages((prev) =>
              prev.filter(
                (m, i) => !(i === prev.length - 1 && m.role === "assistant" && !m.content),
              ),
            );
          }
        } finally {
          setIsStreaming(false);
          setIsThinking(false);
          abortRef.current = null;
        }
      };

      void run();
    },
    [entryId, isStreaming],
  );

  // 卸载时中断进行中的请求
  useEffect(() => () => abortRef.current?.abort(), []);

  const value = useMemo<AssistantContextValue>(
    () => ({
      mode,
      messages,
      isStreaming,
      isThinking,
      error,
      entryId,
      entryTerm,
      setActiveEntry,
      open,
      close,
      toggleExpanded,
      send,
      stop,
      clear,
      resetToIdle,
    }),
    [
      mode,
      messages,
      isStreaming,
      isThinking,
      error,
      entryId,
      entryTerm,
      setActiveEntry,
      open,
      close,
      toggleExpanded,
      send,
      stop,
      clear,
      resetToIdle,
    ],
  );

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
}

export function useWikiAssistant(): AssistantContextValue {
  const ctx = useContext(AssistantContext);
  if (!ctx) throw new Error("useWikiAssistant 必须在 WikiAssistantProvider 内使用");
  return ctx;
}
