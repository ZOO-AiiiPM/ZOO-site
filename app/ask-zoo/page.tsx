"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PixelAvatar } from "@/components/PixelArt";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "who is Zoo?",
  "聊聊 Vibe Coding",
  "AI PM 该怎么入行？",
  "你的性格是什么样的？",
];

// All ASCII words: 5 lines, padded to 21 chars wide (fixed size, no layout shift)
const FIXED_W = 21;
const FIXED_H = 5;
const ASCII_WORDS_RAW = [
  `______  ___   ___\n|__  / / _ \\ / _ \\\n  / / | | | | | | |\n / /_ | |_| | |_| |\n/____| \\___/ \\___/`,
  `    _    ___\n   / \\  |_ _|\n  / _ \\  | |\n / ___ \\ | |\n/_/   \\_\\___|`,
  `  ____  __  __\n |  _ \\|  \\/  |\n | |_) | |\\/| |\n |  __/| |  | |\n |_|   |_|  |_|`,
  `__     _____ ____  _____\n\\ \\   / /_ _| __ )| ____|\n \\ \\ / / | ||  _ \\|  _|\n  \\ V /  | || |_) | |___\n   \\_/  |___|____/|_____|`.split("\n").map(l => l.slice(0, FIXED_W)).join("\n"),
];

// Normalize: pad each to FIXED_W x FIXED_H
const ASCII_WORDS = ASCII_WORDS_RAW.map(w => {
  const lines = w.split("\n");
  while (lines.length < FIXED_H) lines.push("");
  return lines.map(l => l.padEnd(FIXED_W)).join("\n");
});

const SCRAMBLE_CHARS = "/\\|_-=+<>[]{}()#@$&!?*~:.";

function AsciiCycler() {
  const [display, setDisplay] = useState(ASCII_WORDS[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const cycle = () => {
      const nextIndex = (indexRef.current + 1) % ASCII_WORDS.length;
      const target = ASCII_WORDS[nextIndex];
      const current = ASCII_WORDS[indexRef.current];
      const targetLines = target.split("\n");
      const currentLines = current.split("\n");

      let frame = 0;
      const totalFrames = 20;
      const scrambleInterval = setInterval(() => {
        frame++;
        if (frame >= totalFrames) {
          setDisplay(target);
          clearInterval(scrambleInterval);
          indexRef.current = nextIndex;
          return;
        }

        const progress = frame / totalFrames;
        const lines: string[] = [];
        for (let r = 0; r < FIXED_H; r++) {
          let line = "";
          for (let c = 0; c < FIXED_W; c++) {
            const from = currentLines[r]?.[c] || " ";
            const to = targetLines[r]?.[c] || " ";

            // Column-based settle: left columns settle earlier
            const settleAt = (c / FIXED_W) * 0.7 + 0.2;

            if (progress >= settleAt) {
              line += to;
            } else if (from === " " && to === " ") {
              line += " ";
            } else if (progress < 0.15) {
              line += from; // still showing old
            } else {
              line += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
          }
          lines.push(line);
        }
        setDisplay(lines.join("\n"));
      }, 45);
    };

    const timer = setInterval(cycle, 5000);
    return () => clearInterval(timer);
  }, []);

  return <pre className="ask-zoo-ascii ask-zoo-anim-shimmer">{display}</pre>;
}

const STORAGE_KEY = "ask-zoo-messages";

// ===== Main Page =====
export default function AskZooPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [welcomeExiting, setWelcomeExiting] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const chatStarted = messages.length > 0 || isStreaming;
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgCountRef = useRef(0);

  // Restore from sessionStorage；无历史时若带 ?q= 参数则自动开始对话
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
        msgCountRef.current = Math.ceil(parsed.length / 2);
        setShowWelcome(false);
        return; // 已有历史，忽略 q 参数
      }
    } catch { /* ignore */ }

    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      setShowWelcome(false);
      sendMessage(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Global Ctrl+L to clear
  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        newChat();
      }
    }
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  });

  async function sendMessage(text: string) {
    if (!text.trim() || isStreaming) return;

    // Trigger welcome exit animation
    if (showWelcome) {
      setWelcomeExiting(true);
      await new Promise(r => setTimeout(r, 300));
      setShowWelcome(false);
      setWelcomeExiting(false);
    }

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg, { role: "assistant" as const, content: "" }];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);
    setIsThinking(true);
    msgCountRef.current++;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
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
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: "assistant", content: assistantContent };
                  return updated;
                });
              }
            } catch { /* skip */ }
          }
        }
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "网络好像不太稳，等会儿再来找我聊吧～";
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: errorMsg };
        return updated;
      });
    } finally {
      setIsStreaming(false);
      setIsThinking(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  function newChat() {
    setMessages([]);
    setInput("");
    msgCountRef.current = 0;
    setShowWelcome(true);
    inputRef.current?.focus();
  }

  return (
    <div className="ask-zoo-page">
      {/* Welcome */}
      {showWelcome && (
        <div className={`ask-zoo-welcome ${welcomeExiting ? "ask-zoo-welcome-exit" : ""}`}>
          <div className="ask-zoo-logo-area ask-zoo-type-line" style={{ "--d": 0 } as React.CSSProperties}>
            <div className="ask-zoo-pixel-avatar">
              <PixelAvatar size={100} />
            </div>
            <AsciiCycler />
          </div>
          <div className="ask-zoo-info-line ask-zoo-type-line" style={{ "--d": 150 } as React.CSSProperties}>
            <span className="ask-zoo-info-name">zoo</span>
            <span className="ask-zoo-info-label">v1.0</span>
          </div>
          <div className="ask-zoo-powered ask-zoo-type-line" style={{ "--d": 300 } as React.CSSProperties}>
            powered by DeepSeek V4 Flash
          </div>
          <p className="ask-zoo-intro ask-zoo-type-line" style={{ "--d": 500 } as React.CSSProperties}>
            这是赛博 Zoo (｡•̀ᴗ-)✧ 想了解真实的我，直接问就好~
          </p>
          <div className="ask-zoo-hint ask-zoo-type-line" style={{ "--d": 700 } as React.CSSProperties}>试试这些：</div>
          <div className="ask-zoo-cmds">
            {SUGGESTIONS.map((s, i) => (
              <button
                key={s}
                className="ask-zoo-cmd ask-zoo-type-line"
                style={{ "--d": 850 + i * 100 } as React.CSSProperties}
                onClick={() => sendMessage(s)}
              >
                <span className="ask-zoo-cmd-arrow">❯</span>{s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Output */}
      <div className="ask-zoo-output" ref={outputRef}>
        {messages.map((msg, i) => {
          const isUser = msg.role === "user";
          const pairIndex = Math.floor(i / 2);
          const showDivider = isUser && pairIndex > 0;
          const isLastAssistant = !isUser && i === messages.length - 1;
          const isActiveStream = isLastAssistant && isStreaming;

          return (
            <div key={i}>
              {showDivider && <div className="ask-zoo-divider" />}
              {isUser ? (
                <div className="ask-zoo-msg-user ask-zoo-msg-enter-user">
                  <span className="prompt">❯</span>
                  <span className="text">{msg.content}</span>
                </div>
              ) : (
                <div className="ask-zoo-msg-bot">
                  <div className="ask-zoo-bot-header">
                    <div className="ask-zoo-bot-avatar">
                      <PixelAvatar size={22} />
                    </div>
                    <span className="ask-zoo-bot-sublabel">zoo</span>
                    <span className="ask-zoo-bot-model">deepseek-v4-flash-free</span>
                  </div>
                  <div className="ask-zoo-bot-text">
                    {isActiveStream && isThinking ? (
                      <span className="ask-zoo-thinking">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </span>
                    ) : (
                      <>
                        <span className="ask-zoo-done-dot" />
                        <div className="text-content">
                          {isActiveStream ? (
                            <>{msg.content}<span className="ask-zoo-cursor" /></>
                          ) : (
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className={`ask-zoo-input ${!showWelcome ? "" : "ask-zoo-input-enter"}`}>
        <div className="ask-zoo-input-row">
          <span className="ask-zoo-input-prompt">❯</span>
          <input
            ref={inputRef}
            className="ask-zoo-input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="和我聊聊天吧 ..."
            autoFocus
          />
          <div className="ask-zoo-input-actions">
            {chatStarted && !isStreaming && (
              <button className="ask-zoo-btn-clear show" onClick={newChat}>
                ⌃L clear
              </button>
            )}
            <button
              className="ask-zoo-btn-send"
              onClick={() => sendMessage(input)}
              disabled={isStreaming || !input.trim()}
            >
              ⏎ send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
