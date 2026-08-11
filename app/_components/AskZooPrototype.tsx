"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PixelAvatar } from "@/components/PixelArt";
import { ProofCursor } from "./ProofCursor";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "为什么想做 AI 产品经理？",
  "挑一个项目讲讲你的判断",
  "你是怎么和研发协作的？",
];

export function AskZooPrototype() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [docked, setDocked] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [caretOffset, setCaretOffset] = useState(16);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const syncCaret = useCallback(() => {
    const input = inputRef.current;
    if (!input) return;

    const selectionEnd = input.selectionEnd ?? input.value.length;
    const styles = window.getComputedStyle(input);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;
    context.font = styles.font;
    const textWidth = context.measureText(input.value.slice(0, selectionEnd)).width;
    setCaretOffset(16 + textWidth - input.scrollLeft);
  }, []);

  const openDialog = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    window.requestAnimationFrame(() => {
      inputRef.current?.focus();
      syncCaret();
    });
  }, [syncCaret]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const footer = host.closest("#footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDocked(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // 新消息、首个 token 或流式 token 到达后，只滚动对话窗口内部。
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const el = contentRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [messages, isThinking]);

  useEffect(() => {
    window.addEventListener("open-ask-zoo", openDialog);
    return () => window.removeEventListener("open-ask-zoo", openDialog);
  }, [openDialog]);

  const pauseStreaming = () => {
    abortControllerRef.current?.abort();
  };

  const closeDialog = () => {
    pauseStreaming();
    dialogRef.current?.close();
    triggerRef.current?.focus();
  };

  const sendMessage = async (text: string) => {
    const cleaned = text.trim();
    if (!cleaned || isStreaming) return;

    const userMsg: Message = { role: "user", content: cleaned };
    const history = [...messages, userMsg];
    setMessages([...history, { role: "assistant", content: "" }]);
    setQuestion("");
    setIsStreaming(true);
    setIsThinking(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "连接出了点问题，稍后再试试～");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("没有收到有效的回复流，换个问题再试试～");

      const decoder = new TextDecoder();
      let assistantContent = "";
      let buffer = "";
      let streamDone = false;

      // SSE 事件可能被网络拆成半行，先按空行缓冲完整事件再解析。
      const consumeEvent = (event: string) => {
        const dataLine = event.split(/\r?\n/).find((line) => line.startsWith("data:"));
        if (!dataLine) return;

        const data = dataLine.slice(5).trim();
        if (data === "[DONE]") {
          streamDone = true;
          return;
        }

        try {
          const parsed = JSON.parse(data) as { text?: unknown };
          if (typeof parsed.text === "string" && parsed.text) {
            setIsThinking(false);
            assistantContent += parsed.text;
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: "assistant", content: assistantContent };
              return updated;
            });
          }
        } catch {
          /* 跳过非 JSON 行 */
        }
      };

      while (!streamDone) {
        const { done, value } = await reader.read();
        buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
        const events = buffer.split(/\r?\n\r?\n/);
        buffer = events.pop() ?? "";
        events.forEach(consumeEvent);
        if (done) break;
      }

      const trailingEvent = buffer.trim();
      if (!streamDone && trailingEvent) consumeEvent(trailingEvent);
      if (!assistantContent) throw new Error("我刚才没有收到有效回复，换个问题再试试～");
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          return last?.role === "assistant" && !last.content ? prev.slice(0, -1) : prev;
        });
        return;
      }

      const errorMsg = err instanceof Error ? err.message : "网络好像不太稳，等会儿再来找我聊吧～";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: errorMsg };
        return updated;
      });
    } finally {
      if (abortControllerRef.current === controller) abortControllerRef.current = null;
      setIsStreaming(false);
      setIsThinking(false);
      inputRef.current?.focus();
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(question);
  };

  const resetChat = () => {
    pauseStreaming();
    setMessages([]);
    setQuestion("");
    inputRef.current?.focus();
  };

  return (
    <div ref={hostRef} className="home-ask-host">
      <button
        ref={triggerRef}
        type="button"
        className={`home-ask-trigger${docked ? " is-docked" : ""}`}
        onClick={openDialog}
        data-cursor="ASK"
        aria-haspopup="dialog"
      >
        <span className="home-ask-avatar"><PixelAvatar size={46} /></span>
        <span className="home-ask-trigger-copy">
          <strong>ASK ME MORE</strong>
          <small>和我的 AI 分身聊聊 ↗</small>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="home-ask-dialog"
        aria-labelledby="home-ask-title"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        <div className="home-ask-panel">
          <header className="home-ask-header">
            <div className="home-ask-identity">
              <PixelAvatar size={44} />
              <div>
                <span>AI PERSONA / ONLINE</span>
                <h2 id="home-ask-title">Ask Me Anything</h2>
              </div>
            </div>
            <button type="button" className="home-ask-close" onClick={closeDialog} data-cursor="CLOSE" aria-label="关闭">×</button>
          </header>

          <div
            ref={contentRef}
            className={`home-ask-content${messages.length === 0 ? " is-empty" : ""}`}
          >
            {messages.length === 0 ? (
              <>
                <p className="home-ask-intro">除了简历还想了解什么，尽管问吧！</p>
                <div className="home-ask-suggestions">
                  {suggestions.map((item) => (
                    <button key={item} type="button" onClick={() => sendMessage(item)} data-cursor="ASK">
                      {item}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="home-ask-thread" aria-live="polite">
                {messages.map((m, i) => {
                  const isWaitingForReply = m.role === "assistant" && i === messages.length - 1 && isThinking;

                  return (
                    <div
                      key={i}
                      className={`home-ask-message ${m.role === "user" ? "is-user" : "is-zoo"}${isWaitingForReply ? " is-thinking" : ""}`}
                    >
                      {m.role === "assistant" ? (
                        isWaitingForReply ? (
                          <div className="home-ask-thinking" role="status">
                            <span className="home-ask-thinking-mark" aria-hidden="true"><i /><i /><i /></span>
                            <span className="home-ask-thinking-copy"><small>THINKING</small><strong>正在组织回答</strong></span>
                          </div>
                        ) : (
                          <div className="home-ask-markdown"><ReactMarkdown>{m.content}</ReactMarkdown></div>
                        )
                      ) : (
                        <p>{m.content}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="home-ask-bottom">
            <form className="home-ask-form" onSubmit={submit}>
              <div className="home-ask-input-bar">
                <button type="button" className="home-ask-new-chat" onClick={resetChat} data-cursor="NEW" aria-label="新建对话" title="新建对话">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13.5 6.5 17.5 10.5" />
                    <path d="M12 20H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                    <path d="m16.5 3.5 4 4L12 16l-4 1 1-4Z" />
                  </svg>
                </button>
                <div className="home-ask-input-field">
                  <input
                    ref={inputRef}
                    id="home-ask-input"
                    value={question}
                    onChange={(event) => {
                      setQuestion(event.target.value);
                      window.requestAnimationFrame(syncCaret);
                    }}
                    onFocus={() => {
                      setIsInputFocused(true);
                      syncCaret();
                    }}
                    onBlur={() => setIsInputFocused(false)}
                    onClick={syncCaret}
                    onKeyUp={syncCaret}
                    onSelect={syncCaret}
                    disabled={isStreaming}
                  />
                  <span
                    className={`home-ask-input-caret${isInputFocused && !isStreaming ? " is-visible" : ""}`}
                    style={{ left: `${caretOffset}px` }}
                    aria-hidden="true"
                  />
                </div>
                {isStreaming ? (
                  <button type="button" className="home-ask-pause" onClick={pauseStreaming} data-cursor="PAUSE" aria-label="暂停输出" title="暂停输出">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="6" y="6" width="12" height="12" rx="1.5" />
                    </svg>
                  </button>
                ) : (
                  <button type="submit" className="home-ask-send" data-cursor="SEND" aria-label="发送问题" disabled={!question.trim()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* 必须放在 <dialog> 内部：showModal() 会让对话框进入 top layer，
            普通 fixed 光标层会被压在其下方。作为对话框子元素，光标随对话框
            一同进入 top layer，因而显示在面板与遮罩之上。 */}
        <ProofCursor />
      </dialog>
    </div>
  );
}
