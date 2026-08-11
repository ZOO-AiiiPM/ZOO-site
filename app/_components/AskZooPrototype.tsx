"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
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
  const [docked, setDocked] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

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

  // 新消息进来时自动滚动到底部
  useEffect(() => {
    const el = contentRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => {
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

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "连接出了点问题，稍后再试试～");
      }

      setIsThinking(false);
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
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
          }
        }
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "网络好像不太稳，等会儿再来找我聊吧～";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: errorMsg };
        return updated;
      });
    } finally {
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
                {messages.map((m, i) => (
                  <div key={i} className={`home-ask-message ${m.role === "user" ? "is-user" : "is-zoo"}`}>
                    <span>{m.role === "user" ? "YOU" : "ZOO.AI"}</span>
                    {m.role === "assistant" ? (
                      <div className="home-ask-markdown"><ReactMarkdown>{m.content}</ReactMarkdown></div>
                    ) : (
                      <p>{m.content}</p>
                    )}
                  </div>
                ))}
                {isThinking && <div className="home-ask-thinking">正在思考…</div>}
              </div>
            )}
          </div>

          <div className="home-ask-bottom">
            <form className="home-ask-form" onSubmit={submit}>
              <div className="home-ask-input-bar">
                <input
                  ref={inputRef}
                  id="home-ask-input"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="问问我…"
                  disabled={isStreaming}
                />
                <button type="submit" data-cursor="SEND" aria-label="发送问题" disabled={isStreaming}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </form>
            {messages.length > 0 && (
              <button type="button" className="home-ask-reset" onClick={resetChat}>← 换个话题</button>
            )}
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
