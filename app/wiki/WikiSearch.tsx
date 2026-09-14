"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { groupHits, searchWiki, type WikiSearchHit } from "./search";
import { startWikiLoading } from "./WikiLoading";

interface WikiSearchProps {
  /** 当前所在 wiki，用于结果分组置顶与「优先当前页」 */
  currentSlug?: string;
  /** 当前词条 id，用于在结果里标注「当前」 */
  currentEntryId?: string;
}

/** 把片段按高亮词切成若干段，交给 React 渲染 <mark> */
function renderSnippet(snippet: string, highlights: string[]) {
  if (!highlights.length) return snippet;
  const escaped = highlights
    .filter((h) => h.length >= 2)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (escaped.length === 0) return snippet;

  // 用捕获组切分：奇数下标即命中项。
  // 不能用 re.test() 判断——带 g 标志的正则会记住 lastIndex，导致结果错误。
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const lowerSet = new Set(highlights.map((h) => h.toLowerCase()));
  return snippet.split(re).map((part, i) =>
    i % 2 === 1 && lowerSet.has(part.toLowerCase()) ? (
      <mark key={i}>{part}</mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function WikiSearch({ currentSlug, currentEntryId }: WikiSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hits = useMemo(() => searchWiki(query, currentSlug), [query, currentSlug]);
  const groups = useMemo(() => groupHits(hits), [hits]);
  // 键盘导航用的扁平顺序（与视觉顺序一致）
  const flat = useMemo(() => groups.flatMap((g) => g.hits), [groups]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = useCallback(
    (hit: WikiSearchHit) => {
      setOpen(false);
      setQuery("");
      inputRef.current?.blur();
      startWikiLoading();
      router.push(`/wiki/${hit.entry.wikiSlug}/${hit.entry.id}`);
    },
    [router],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIdx((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = flat[activeIdx];
      if (hit) go(hit);
    }
  };

  const hasQuery = query.trim().length > 0;
  const showPanel = open && hasQuery;

  return (
    <div className="wiki-search" ref={rootRef}>
      <div className={`wiki-search-box${showPanel ? " is-open" : ""}`} aria-expanded={showPanel} aria-haspopup="listbox">
        <MagnifyingGlass size={15} weight="bold" className="wiki-search-icon" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          className="wiki-search-input"
          placeholder="搜索词条…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // 查询变化时游标回到第一条（在事件里重置，避免用 effect 派生状态）
            setActiveIdx(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          aria-label="搜索 Wiki 词条"
          aria-controls="wiki-search-results"
          autoComplete="off"
          spellCheck={false}
        />
        {hasQuery && (
          <button
            type="button"
            className="wiki-search-clear"
            aria-label="清空搜索"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <X size={13} weight="bold" aria-hidden="true" />
          </button>
        )}
      </div>

      {showPanel && (
        <div className="wiki-search-panel" id="wiki-search-results" role="listbox">
          {flat.length === 0 ? (
            <p className="wiki-search-empty">没找到相关词条，换个说法试试？</p>
          ) : (
            groups.map((group) => (
              <div className="wiki-search-group" key={group.slug}>
                <p className="wiki-search-group-title">
                  {group.label}
                  {group.hits.some((h) => h.isCurrentWiki) && (
                    <span className="wiki-search-group-badge">当前</span>
                  )}
                </p>
                {group.hits.map((hit) => {
                  const idx = flat.indexOf(hit);
                  const isCurrent = hit.entry.id === currentEntryId;
                  return (
                    <Link
                      key={hit.entry.id}
                      href={`/wiki/${hit.entry.wikiSlug}/${hit.entry.id}`}
                      role="option"
                      aria-selected={idx === activeIdx}
                      className={`wiki-search-item${idx === activeIdx ? " is-active" : ""}`}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                        startWikiLoading();
                      }}
                    >
                      <span className="wiki-search-item-head">
                        <span className="wiki-search-item-term">
                          {renderSnippet(hit.entry.term, hit.titleHighlights)}
                        </span>
                        {hit.entry.abbr && (
                          <span className="wiki-search-item-abbr">
                            {renderSnippet(hit.entry.abbr, hit.titleHighlights)}
                          </span>
                        )}
                        {isCurrent && <span className="wiki-search-item-current">正在阅读</span>}
                      </span>
                      <span className="wiki-search-item-snippet">
                        {renderSnippet(hit.snippet, hit.highlights)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
