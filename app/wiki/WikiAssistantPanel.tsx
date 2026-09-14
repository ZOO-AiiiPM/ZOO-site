"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowsOutSimpleIcon,
  ArrowsInSimpleIcon,
  FileTextIcon,
  NotePencilIcon,
  PaperPlaneTiltIcon,
  StopIcon,
  XIcon,
  BrainIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import { PixelAvatar } from "@/components/PixelArt";
import { getEntry } from "./data";
import { useWikiAssistant } from "./WikiAssistantProvider";

/** 从 /wiki/[slug]/[entry] 里解析词条 id（仅作为提问上下文） */
function parseEntryFromPath(pathname: string | null): string {
  if (!pathname) return "";
  const parts = pathname.split("/").filter(Boolean); // ["wiki", slug, entry]
  return parts[0] === "wiki" && parts.length >= 3 ? parts[2] : "";
}

/** 缩放方向：n/s 上下，e/w 左右；组合即四角（如 "nw"） */
type ResizeDir = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
const RESIZE_DIRS: ResizeDir[] = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];

export function WikiAssistantPanel() {
  const {
    mode,
    messages,
    isStreaming,
    isThinking,
    error,
    entryTerm,
    setActiveEntry,
    open,
    close,
    toggleExpanded,
    send,
    stop,
    clear,
    resetToIdle,
  } = useWikiAssistant();

  const pathname = usePathname();
  const [question, setQuestion] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  /* ----- 思考过程展开/折叠（按消息索引独立）----- */
  /** 用户手动切换过的索引：手动过的以用户意愿为准，其余跟随流式状态 */
  const [manualOpen, setManualOpen] = useState<Record<number, boolean>>({});
  const thinkingBoxRef = useRef<HTMLDivElement>(null);

  /* ----- 悬浮窗拖拽（只拖头部中间的三横线手柄）----- */
  const panelRef = useRef<HTMLDivElement>(null);
  /** 拖拽后的位置（相对视口左上角）；null = 未拖过，用 CSS 默认位置（右下） */
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const dragRef = useRef<{ dx: number; dy: number } | null>(null);

  /* ----- 悬浮窗缩放（8 个方向：四边 + 四角）-----
     面板默认锚在右下，所以拖 em 左边/上边时除了改尺寸还要同步改位置，
     否则会向错误方向生长。size 为 null 时用 CSS 默认尺寸（380×480）。 */
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const resizeRef = useRef<{
    dir: ResizeDir;
    startX: number;
    startY: number;
    w: number;
    h: number;
    left: number;
    top: number;
  } | null>(null);

  const MIN_W = 300;
  const MIN_H = 260;

  const onResizeStart = useCallback(
    (dir: ResizeDir) => (e: React.PointerEvent<HTMLDivElement>) => {
      const panel = panelRef.current;
      if (!panel) return;
      const r = panel.getBoundingClientRect();
      resizeRef.current = {
        dir,
        startX: e.clientX,
        startY: e.clientY,
        w: r.width,
        h: r.height,
        left: r.left,
        top: r.top,
      };
      e.currentTarget.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
    },
    [],
  );

  const onResizeMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const s = resizeRef.current;
    if (!s) return;
    const dx = e.clientX - s.startX;
    const dy = e.clientY - s.startY;
    const maxW = window.innerWidth - 16;
    const maxH = window.innerHeight - 16;

    let w = s.w;
    let h = s.h;
    let left = s.left;
    let top = s.top;

    if (s.dir.includes("e")) w = s.w + dx;
    if (s.dir.includes("s")) h = s.h + dy;
    if (s.dir.includes("w")) {
      w = s.w - dx;
      left = s.left + dx;
    }
    if (s.dir.includes("n")) {
      h = s.h - dy;
      top = s.top + dy;
    }

    // 夹到最小/最大尺寸；碰到最小值时把位置退回去，避免“边拖边漂”
    if (w < MIN_W) {
      if (s.dir.includes("w")) left = s.left + (s.w - MIN_W);
      w = MIN_W;
    }
    if (h < MIN_H) {
      if (s.dir.includes("n")) top = s.top + (s.h - MIN_H);
      h = MIN_H;
    }
    if (w > maxW) {
      if (s.dir.includes("w")) left = s.left + (s.w - maxW);
      w = maxW;
    }
    if (h > maxH) {
      if (s.dir.includes("n")) top = s.top + (s.h - maxH);
      h = maxH;
    }

    // 左/上边拖动会移动面板，需要同步位置（同时保证不越出视口）
    left = Math.min(Math.max(left, 8), Math.max(8, window.innerWidth - w - 8));
    top = Math.min(Math.max(top, 8), Math.max(8, window.innerHeight - h - 8));

    setSize({ w, h });
    setDragPos({ x: left, y: top });
  }, []);

  const onResizeEnd = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    resizeRef.current = null;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  }, []);

  /* ----- 放大态：左右拖动拉伸宽度 -----
     直接改 CSS 变量 --wiki-ai-w，因为页面正文的让位列宽（grid 第二列）
     也读同一个变量，所以面板和正文会同步缩放。 */
  const [expandedW, setExpandedW] = useState<number | null>(null);
  const expandResizeRef = useRef<{ startX: number; w: number } | null>(null);
  /** 是否正在拖动左边缘（用于把整条边线加粗）*/
  const [isResizingExpanded, setIsResizingExpanded] = useState(false);
  const EXP_MIN_W = 280;
  const EXP_MAX_W = 720;

  const onExpandResizeStart = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    expandResizeRef.current = { startX: e.clientX, w: panel.getBoundingClientRect().width };
    setIsResizingExpanded(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }, []);

  const onExpandResizeMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const s = expandResizeRef.current;
    if (!s) return;
    // 面板贴右侧：向左拖（dx 为负）→ 变宽
    const next = Math.min(Math.max(s.w - (e.clientX - s.startX), EXP_MIN_W), EXP_MAX_W);
    setExpandedW(next);
  }, []);

  const onExpandResizeEnd = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    expandResizeRef.current = null;
    setIsResizingExpanded(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  }, []);

  const onDragStart = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    dragRef.current = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }, []);

  const onDragMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const d = dragRef.current;
      const panel = panelRef.current;
      if (!d || !panel) return;
      const w = panel.offsetWidth;
      const h = panel.offsetHeight;
      // 限制在视口内，至少留一点边距，避免拖出屏幕找不回来
      const x = Math.min(Math.max(e.clientX - d.dx, 8), window.innerWidth - w - 8);
      const y = Math.min(Math.max(e.clientY - d.dy, 8), window.innerHeight - h - 8);
      setDragPos({ x, y });
    },
    [],
  );

  const onDragEnd = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  }, []);


  // 路由变化 → 更新提问上下文。
  // 只有词条详情页（/wiki/[slug]/[entry]）才显示助手；
  // 离开详情页（如回 /wiki 索引）时清空对话并收起，下次进入重新开始。
  useEffect(() => {
    const id = parseEntryFromPath(pathname);
    const onEntryPage = Boolean(id);
    if (!onEntryPage) {
      resetToIdle();
      setActiveEntry("", "");
      return;
    }
    setActiveEntry(id, getEntry(id)?.term ?? "");
  }, [pathname, setActiveEntry, resetToIdle]);

  const autoGrow = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  // 思考区展开状态（派生，不用 effect）：
  // 流式中的那条：思考时展开、正文开始后收起；历史消息：默认收起。
  // 用户手动点过则永远以用户选择为准。
  const isThinkingOpen = (i: number, isLastStreaming: boolean) =>
    manualOpen[i] ?? (isLastStreaming && isThinking);

  // 思考滚动跟随：用 ref 拿到当前流式消息的思考内容
  const streamingThinking = isStreaming ? (messages[messages.length - 1]?.thinking ?? "") : "";


  useEffect(() => {
    autoGrow();
  }, [question, autoGrow]);

  // 新消息 / 思考态变化时，只滚动对话窗口内部
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [messages, isThinking, mode]);

  // 思考内容流出时，让思考框内部跟随滚动到最新一行
  useEffect(() => {
    const el = thinkingBoxRef.current;
    if (el && isThinking) el.scrollTop = el.scrollHeight;
  }, [streamingThinking, isThinking]);

  useEffect(() => {
    if (mode !== "closed") window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [mode]);

  // Esc 收起面板（放大态优先回到悬浮态）
  useEffect(() => {
    if (mode === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mode === "expanded") toggleExpanded();
      else close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, close, toggleExpanded]);

  const suggestions = useMemo(() => {
    if (entryTerm) {
      return [`什么是 ${entryTerm}？`, `用一个例子解释「${entryTerm}」`, "这个领域还有哪些相关概念？"];
    }
    return ["JTBD 是什么？", "RAG 和微调怎么选？", "AARRR 每个阶段看什么指标？"];
  }, [entryTerm]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 新一轮提问：清空手动折叠记忆，让新回答回归自动行为
    setManualOpen({});
    send(question);
    setQuestion("");
  };

  const isOpen = mode !== "closed";
  const isExpanded = mode === "expanded";

  // 只在词条详情页渲染：/wiki 索引页、/wiki/[slug] 跳转页都不显示
  // 把放大态宽度写到 :root 的 --wiki-ai-w 上。
  // 用 CSS 变量而不是行内 width，是因为页面正文的让位列宽也读这个变量，
  // 两者必须同步；行内 width 只影响面板，会造成面板与正文错位。
  useEffect(() => {
    const root = document.documentElement;
    if (isExpanded && expandedW) root.style.setProperty("--wiki-ai-w", `${expandedW}px`);
    else root.style.removeProperty("--wiki-ai-w");
    return () => {
      root.style.removeProperty("--wiki-ai-w");
    };
  }, [isExpanded, expandedW]);

  if (!parseEntryFromPath(pathname)) return null;

  // 悬浮态的 FAB（只在关闭时作为入口；打开后由面板自身承担关闭/拖动）
  const fab = (
    <button
      className={`wiki-detail-ai-fab${isOpen ? " is-open" : ""}`}
      onClick={() => open()}
      aria-label="问问 AI"
    >
      <span className="wiki-detail-ai-fab-icon" aria-hidden="true">
        <PixelAvatar size={22} />
      </span>
      <span className="wiki-detail-ai-fab-text">问问 AI</span>
    </button>
  );

  const panel = (
    <div
      ref={panelRef}
      className={`wiki-detail-ai-panel${isExpanded ? " is-expanded" : ""}${dragPos && !isExpanded ? " is-dragged" : ""}`}
      // 拖拽后的位置只在悬浮态生效；放大态由 .is-expanded 接管定位，
      // 否则行内 left/top 会盖掉侧栏布局（曾导致放大失效）
      style={
        // 拖拽/缩放的尺寸与位置只在悬浮态生效。
        // 放大态由 .is-expanded + --wiki-ai-w 接管，
        // 否则行内 width/height/left/top 会盖掉侧栏布局（曾两次导致放大失效）。
        isExpanded
          ? undefined
          : {
              ...(dragPos ? { left: dragPos.x, top: dragPos.y, right: "auto", bottom: "auto" } : null),
              ...(size ? { width: size.w, height: size.h } : null),
            }
      }
      role="dialog"
      aria-label="AI 助手"
    >
      <div className="wiki-detail-ai-panel-head">
        {/* 头部中间的拖拽手柄（三条紧密横线）；放大态不可拖，隐藏 */}
        {!isExpanded && (
          <div
            className="wiki-detail-ai-drag"
            role="button"
            tabIndex={0}
            aria-label="拖动窗口"
            title="拖动窗口"
            onPointerDown={onDragStart}
            onPointerMove={onDragMove}
            onPointerUp={onDragEnd}
            onPointerCancel={onDragEnd}
          >
            {/* 胶囊状拖拽条 */}
            <span aria-hidden="true" />
          </div>
        )}
        <span className="wiki-detail-ai-panel-avatar" aria-hidden="true">
          <PixelAvatar size={18} />
        </span>
        <strong className="wiki-detail-ai-panel-title">Ask AI Assistant</strong>
        <div className="wiki-detail-ai-panel-actions">
          <button
            type="button"
            onClick={toggleExpanded}
            className="wiki-detail-ai-panel-icon-btn"
            aria-label={isExpanded ? "收起为悬浮窗" : "放大为侧栏"}
            title={isExpanded ? "收起为悬浮窗" : "放大为侧栏"}
          >
            {isExpanded ? (
              <ArrowsInSimpleIcon size={18} aria-hidden="true" />
            ) : (
              <ArrowsOutSimpleIcon size={18} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="关闭"
            title="关闭"
            className="wiki-detail-ai-panel-icon-btn"
          >
            <XIcon size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="wiki-detail-ai-panel-body" ref={bodyRef}>
        {messages.length === 0 && !error && (
          <div className="wiki-detail-ai-empty">
            <p>
              我是这个知识库的助手
              {entryTerm ? (
                <>
                  ，可以基于<strong>「{entryTerm}」</strong>以及相关的 PM / AI 词条回答你的问题。
                </>
              ) : (
                "，可以基于全部 PM / AI 词条回答你的问题。"
              )}
            </p>
            <div className="wiki-detail-ai-suggest">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="wiki-detail-ai-suggest-item"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="wiki-detail-ai-msg is-user">
              {m.content}
            </div>
          ) : (
            <div key={i} className="wiki-detail-ai-turn">
              {/* 思考过程：只要这条回答有思考内容就展示（流式与完成后都在），
                  流式时默认展开实时跟随，完成后自动收起供回看。 */}
              {m.thinking &&
                (() => {
                  const isLastStreaming = isStreaming && i === messages.length - 1;
                  const open = isThinkingOpen(i, isLastStreaming);
                  return (
                    <div className={`wiki-detail-ai-thinking${open ? " is-open" : ""}`}>
                      <button
                        type="button"
                        className="wiki-detail-ai-thinking-head"
                        onClick={() =>
                          setManualOpen((prev) => ({ ...prev, [i]: !open }))
                        }
                        aria-expanded={open}
                      >
                        <BrainIcon size={13} weight="bold" aria-hidden="true" />
                        <span className="wiki-detail-ai-thinking-label">
                          {isLastStreaming && isThinking ? "正在思考" : "思考过程"}
                        </span>
                        {isLastStreaming && isThinking && (
                          <span className="wiki-detail-ai-thinking-dots" aria-hidden="true" />
                        )}
                        <CaretDownIcon
                          size={12}
                          weight="bold"
                          className="wiki-detail-ai-thinking-caret"
                          aria-hidden="true"
                        />
                      </button>
                      {open && (
                        <div className="wiki-detail-ai-thinking-body" ref={thinkingBoxRef}>
                          {m.thinking}
                        </div>
                      )}
                    </div>
                  );
                })()}

              {m.content ? (
                <div className="wiki-detail-ai-msg is-assistant">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                  {isStreaming && i === messages.length - 1 && (
                    <span className="wiki-detail-ai-caret" aria-hidden="true" />
                  )}
                </div>
              ) : (
                <div className="wiki-detail-ai-msg is-assistant">
                  <span className="wiki-detail-ai-typing">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="wiki-detail-ai-typing-text">
                    {isThinking ? "正在思考…" : "正在生成…"}
                  </span>
                </div>
              )}
            </div>
          ),
        )}

        {error && (
          <div className="wiki-detail-ai-error" role="alert">
            <span className="wiki-detail-ai-error-text">{error}</span>
            <button
              type="button"
              className="wiki-detail-ai-error-retry"
              onClick={() => {
                const lastUser = [...messages].reverse().find((m) => m.role === "user");
                if (lastUser) send(lastUser.content);
              }}
            >
              重试
            </button>
          </div>
        )}
      </div>

      {/* 上下文：位于输入框上方，圆角矩形卡片，字号与输入框一致 */}
      <div className="wiki-detail-ai-context" title={entryTerm || "全部词条"}>
        <FileTextIcon size={14} aria-hidden="true" />
        <span className="wiki-detail-ai-context-value">
          {entryTerm || "全部词条"}
        </span>
      </div>

      <form className="wiki-detail-ai-panel-input" onSubmit={onSubmit}>
        <button
          type="button"
          className={`wiki-detail-ai-new-note${messages.length > 0 ? " is-active" : ""}`}
          onClick={clear}
          disabled={messages.length === 0}
          aria-label="新建对话"
          title="新建对话"
        >
          <NotePencilIcon size={18} weight="bold" aria-hidden="true" />
        </button>
        <textarea
          ref={inputRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onInput={autoGrow}
          onKeyDown={(e) => {
            // Enter 发送，Shift+Enter 换行（输入法组合中的 Enter 不拦）
            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
              e.preventDefault();
              send(question);
              setQuestion("");
            }
          }}
          rows={1}
          placeholder={isStreaming ? "正在回复…" : "问问 AI 助手…"}
          disabled={isStreaming}
          maxLength={2000}
          aria-label="输入问题"
        />
        {isStreaming ? (
          <button
            type="button"
            className="is-stop"
            onClick={stop}
            aria-label="停止生成"
            title="停止生成"
          >
            <StopIcon size={15} weight="fill" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!question.trim()}
            className="is-send"
            aria-label="发送"
            title="发送"
          >
            <PaperPlaneTiltIcon size={15} weight="fill" aria-hidden="true" />
          </button>
        )}
      </form>

      {/* 缩放把手 */}
      {isExpanded ? (
        /* 放大态：只在左边缘一条竖向把手，左右拖动拉伸宽度 */
        <div
          className={`wiki-detail-ai-resize-expanded${isResizingExpanded ? " is-resizing" : ""}`}
          role="separator"
          aria-label="调整助手宽度"
          title="左右拖动调整宽度"
          onPointerDown={onExpandResizeStart}
          onPointerMove={onExpandResizeMove}
          onPointerUp={onExpandResizeEnd}
          onPointerCancel={onExpandResizeEnd}
        />
      ) : (
        /* 悬浮态：8 方向（四边 + 四角）*/
        RESIZE_DIRS.map((dir) => (
          <div
            key={dir}
            className={`wiki-detail-ai-resize is-${dir}`}
            role="separator"
            aria-label={`调整大小 ${dir}`}
            onPointerDown={onResizeStart(dir)}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeEnd}
            onPointerCancel={onResizeEnd}
          />
        ))
      )}
    </div>
  );

  return (
    <>
      {/* FAB 只在关闭时出现：打开后底部不再需要胶囊按钮 */}
      {!isOpen && !isExpanded && fab}
      {isOpen && panel}
    </>
  );
}
