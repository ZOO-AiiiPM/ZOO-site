"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { PixelAvatar } from "@/components/PixelArt";
import { ProofCursor } from "./ProofCursor";

const suggestions = [
  "为什么想做 AI 产品经理？",
  "挑一个项目讲讲你的判断",
  "你是怎么和研发协作的？",
];

const answers: Record<string, string> = {
  "为什么想做 AI 产品经理？": "因为 AI 产品最迷人的地方，不是模型有多强，而是我们要重新设计人与能力之间的关系。我想做那个把能力变成好体验的人。",
  "挑一个项目讲讲你的判断": "在信息助手项目里，我最重要的判断是：用户缺的不是更多摘要，而是知道哪条变化值得采取行动。所以产品先做优先级与证据回链，再做信息规模。",
  "你是怎么和研发协作的？": "我会尽量把需求变成可验证的交互和边界条件，再和研发一起讨论最低成本的验证路径。目标不是把 PRD 交出去，而是让团队对结果有共同理解。",
};

export function AskZooPrototype() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState<{ question: string; answer: string } | null>(null);

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

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => {
    dialogRef.current?.close();
    triggerRef.current?.focus();
  };

  const ask = (text: string) => {
    const cleaned = text.trim();
    if (!cleaned) return;
    setConversation({
      question: cleaned,
      answer: answers[cleaned] ?? "这是视觉原型里的示例回答。下一轮接入真实 Ask Zoo 后，我会基于 Zoo 的经历继续聊这个问题。",
    });
    setQuestion("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(question);
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

          <div className="home-ask-content">
            {!conversation ? (
              <>
                <p className="home-ask-intro">除了简历还想了解什么，尽管问吧！</p>
                <div className="home-ask-suggestions">
                  {suggestions.map((item) => (
                    <button key={item} type="button" onClick={() => ask(item)} data-cursor="ASK">
                      {item}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="home-ask-thread" aria-live="polite">
                <div className="home-ask-message is-user"><span>YOU</span><p>{conversation.question}</p></div>
                <div className="home-ask-message is-zoo"><span>ZOO.AI</span><p>{conversation.answer}</p></div>
                <button type="button" className="home-ask-reset" onClick={() => setConversation(null)}>← 换个问题</button>
              </div>
            )}
          </div>

          <div className="home-ask-bottom">
            <form className="home-ask-form" onSubmit={submit}>
              <div className="home-ask-input-bar">
                <input id="home-ask-input" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="问问我…" />
                <button type="submit" data-cursor="SEND" aria-label="发送问题">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
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
