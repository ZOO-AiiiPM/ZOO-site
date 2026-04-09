"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PixelAvatar, PixelZooText } from "@/components/PixelArt";

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

const STORAGE_KEY = "ask-zoo-messages";

export default function AskZooPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const chatStarted = messages.length > 0;
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Restore messages from sessionStorage after hydration
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  // Persist messages to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  async function sendMessage(text: string) {
    if (!text.trim() || isStreaming) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);

    // Add empty assistant message for streaming
    setMessages([...newMessages, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("API error");

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
                setMessages([
                  ...newMessages,
                  { role: "assistant", content: assistantContent },
                ]);
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      }
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "抱歉，暂时无法连接。请稍后再试。" },
      ]);
    } finally {
      setIsStreaming(false);
    }
  }

  function handleSubmit() {
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  function newChat() {
    setMessages([]);
    setInput("");
    inputRef.current?.focus();
  }

  return (
    <div className="ask-zoo-page">
      {/* Header — hidden after chat starts */}
      {!chatStarted && (
        <div className="ask-zoo-header">
          <div className="ask-zoo-header-visual">
            <div className="ask-zoo-avatar">
              <PixelAvatar size={80} />
            </div>
            <div className="ask-zoo-zoo-text">
              <PixelZooText scale={3} />
            </div>
          </div>
        </div>
      )}

      {/* Intro — hidden after first message */}
      <div className={`ask-zoo-intro ${chatStarted ? "hidden" : ""}`}>
        <p>
          我是 Zoo 的 AI 分身，了解他的经历、性格和想法。
          <br />
          随便问我点什么吧。
        </p>
        <div className="ask-zoo-powered">powered by DeepSeek</div>
        <div className="ask-zoo-suggestions">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="ask-zoo-sug"
              onClick={() => sendMessage(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="ask-zoo-msgs" ref={msgsRef}>
        {messages.map((msg, i) => {
          if (msg.role === "user") {
            return (
              <div key={i} className="ask-zoo-msg-u">
                {msg.content}
              </div>
            );
          }
          return (
            <div key={i} className="ask-zoo-msg-bot">
              <div className="ask-zoo-bot-identity">
                <div className="ask-zoo-bot-avatar">
                  <PixelAvatar size={36} />
                </div>
                <span className="ask-zoo-bot-name">Zoo&apos;s AI</span>
              </div>
              <div className="ask-zoo-bot-bubble">
                {msg.content || (
                  <span className="ask-zoo-typing">
                    <span />
                    <span />
                    <span />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input bar */}
      <div className="ask-zoo-bar">
        <button
          className={`ask-zoo-new-chat-btn ${chatStarted ? "show" : ""}`}
          onClick={newChat}
          title="新对话"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M15 6l3 3" />
            <path d="M9.5 17.5L6 18l.5-3.5L15.5 5.5l3 3L9.5 17.5z" />
          </svg>
          <span className="btn-text">新对话</span>
        </button>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="随便问点什么..."
          disabled={isStreaming}
        />
        <button
          className="ask-zoo-send-btn"
          onClick={handleSubmit}
          disabled={isStreaming || !input.trim()}
        >
          发送
        </button>
      </div>
    </div>
  );
}
