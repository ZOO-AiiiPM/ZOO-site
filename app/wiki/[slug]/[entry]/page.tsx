"use client";

import {
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { ListIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { PixelAvatar } from "@/components/PixelArt";
import { startWikiLoading } from "../../WikiLoading";
import { useWikiAssistant } from "../../WikiAssistantProvider";
import { useWikiTheme } from "../../WikiThemeProvider";
import { WikiSearch } from "../../WikiSearch";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getWikiMeta,
  getEntry,
  type WikiMeta,
  type WikiEntry,
} from "../../data";
import "../wiki-detail.css";
import "../../wiki-search.css";

interface Props {
  params: Promise<{ slug: string; entry: string }>;
}

/** 侧边栏折叠状态的 localStorage key（全局一个，所有 wiki 页共用） */
const SIDEBAR_KEY = "wiki-sidebar-collapsed";

/** 把标题文本转成锚点 id（保留中文，英文小写，空格转 -） */
function slugify(text: string): string {
  return (
    text
      .trim()
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

/** 从 markdown 中提取 ## ~ ##### 标题（跳过代码块内的） */
function extractHeadings(md: string): { id: string; label: string; level: number }[] {
  const out: { id: string; label: string; level: number }[] = [];
  let inFence = false;
  for (const line of md.split("\n")) {
    if (line.trim().startsWith("```")) inFence = !inFence;
    if (inFence) continue;
    const m = /^(#{2,6})\s+(.+)$/.exec(line);
    if (m) {
      const label = m[2].trim();
      out.push({ id: slugify(label), label, level: m[1].length });
    }
  }
  return out;
}

/* ---------- 主题切换按钮（默认跟随系统，点一下就转手动）---------- */
function ThemeToggle() {
  const { theme, toggle } = useWikiTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="wiki-theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "切换到亮色" : "切换到深色"}
      title={isDark ? "切换到亮色" : "切换到深色"}
    >
      {isDark ? (
        <SunIcon size={17} aria-hidden="true" />
      ) : (
        <MoonIcon size={17} aria-hidden="true" />
      )}
    </button>
  );
}

/* ---------- 顶部 nav（横跨全宽，含侧边栏品牌区） ---------- */
function EntryNav({
  wiki,
  entry,
  collapsed,
  onToggleCollapse,
}: {
  wiki: WikiMeta;
  entry: WikiEntry;
  collapsed: boolean;
  onToggleCollapse: () => void;
}) {
  // 当前词条所属章节（用于 nav 层级面包屑）
  const chapter = wiki.chapters.find((c) => c.entries.some((r) => r.id === entry.id));

  return (
    <nav className="wiki-detail-nav" aria-label="Wiki 词条导航">
      {/* 左侧：折叠按钮 → 直接接面包屑（无竖线分隔） */}
      <button
        className="wiki-sidebar-toggle"
        onClick={onToggleCollapse}
        aria-label={collapsed ? "展开侧边栏" : "收起侧边栏"}
        title={collapsed ? "展开侧边栏" : "收起侧边栏"}
      >
        <ListIcon size={18} weight="bold" aria-hidden="true" />
      </button>

      {/* 层级面包屑：知识库 › 章节 › 词条 */}
      <div className="wiki-detail-crumbs">
        <Link href="/wiki" className="wiki-detail-crumb" onClick={startWikiLoading}>
          {wiki.name}
        </Link>
        <span className="wiki-detail-crumb-sep" aria-hidden="true">›</span>
        {chapter && (
          <>
            <a
              href={`#${chapter.id}`}
              className="wiki-detail-crumb"
              onClick={(e) => {
                // 侧边栏是独立滚动容器，浏览器原生锚点跳转只滚页面，不会滚侧边栏，
                // 所以这里手动把章节滚进侧边栏视区
                const el = document.getElementById(chapter.id);
                const scroller = el?.closest<HTMLElement>(".wiki-detail-sidebar");
                if (!(el instanceof HTMLElement) || !scroller) return; // 退化成原生锚点行为
                e.preventDefault();
                const top = el.offsetTop - scroller.offsetTop;
                scroller.scrollTo({ top, behavior: "smooth" });
              }}
            >
              {chapter.title}
            </a>
          </>
        )}
        <span className="wiki-detail-crumb-sep" aria-hidden="true">›</span>
        <span className="wiki-detail-crumb is-current" aria-current="page">
          {entry.term}
        </span>
      </div>

      <div className="wiki-detail-nav-actions">
        <WikiSearch currentSlug={wiki.slug} currentEntryId={entry.id} />
        <ThemeToggle />
        <Link href="/wiki" className="wiki-detail-nav-brand" aria-label="返回 Wiki 首页" title="返回 Wiki 首页" onClick={startWikiLoading}>
          <PixelAvatar size={22} />
          <span className="wiki-detail-nav-brand-word">WINSTON WIKI</span>
        </Link>
      </div>
    </nav>
  );
}

/* ---------- 左侧 sidebar（品牌栏 + 分组标题(不可折叠) + 整体可折叠） ---------- */
function EntrySidebar({
  wiki,
  currentId,
}: {
  wiki: WikiMeta;
  currentId: string;
}) {
  // 记住词条列表滚动位置：切换词条后恢复到离开时的位置，而不是回到顶部。
  // 注意：ref 挂在内层 .wiki-detail-sidebar-nav 上 —— 侧边栏本身已不滚动，
  // 真正滚动的是这个词条列表（这样滚动条不会延伸到顶部 nav 区域）。
  const listRef = useRef<HTMLElement>(null);
  const sideKey = `wiki-sidebar-scroll-${wiki.slug}`;

  // 词条切换后恢复到离开时的滚动位置，而不是回到顶部
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const saved = Number(sessionStorage.getItem(sideKey));
    if (saved > 0) el.scrollTop = saved; // 恢复位置（不滚动页面，仅词条列表）
  }, [currentId, sideKey]);

  // 滚动词条列表时实时保存当前位置
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const save = () => {
      try {
        sessionStorage.setItem(sideKey, String(el.scrollTop));
      } catch {
        /* 忽略 */
      }
    };
    el.addEventListener("scroll", save, { passive: true });
    return () => el.removeEventListener("scroll", save);
  }, [sideKey]);

  return (
    <aside
      className="wiki-detail-sidebar"
      aria-label="词条导航"
    >
      {/* 词条列表（品牌栏已上移到顶部 nav） */}
      <nav className="wiki-detail-sidebar-nav" ref={listRef}>
        {wiki.chapters.map((chapter) => (
          <div key={chapter.id} id={chapter.id} className="wiki-detail-sidebar-chapter">
            <div className="wiki-sidebar-group-title">{chapter.title}</div>
            <ul>
              {chapter.entries.map((ref) => {
                const e = getEntry(ref.id);
                return (
                  <li key={ref.id}>
                    <Link
                      href={`/wiki/${wiki.slug}/${ref.id}`}
                      className={ref.id === currentId ? "is-active" : ""}
                      onClick={ref.id === currentId ? undefined : startWikiLoading}
                    >
                      {e?.term ?? ref.id}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

/* ---------- 右侧 TOC（由 markdown 的 ## / ### 标题自动生成） ---------- */
function EntryToc({ entry }: { entry: WikiEntry }) {
  // 从 markdown 正文提取 ## 与 ### 标题
  const headings = useMemo(() => extractHeadings(entry.body.join("\n\n")), [entry]);
  const [active, setActive] = useState<string>("");
  // 点击后的短暂锁定：防止平滑滚动过程中 observer 把高亮刷到别处（表现为「乱飘」）
  const lockUntil = useRef(0);
  // 目录列表滚动容器（标题「目录」不参与滚动）
  const listRef = useRef<HTMLElement>(null);
  // 用户手动滚动目录的时刻：之后的一小段时间内不自动跟随，避免和用户抢滚动条
  const manualUntil = useRef(0);
  // 自动跟随自己触发的滚动：这段时间内的 scroll 事件不算「用户手动」
  const programmaticUntil = useRef(0);

  // 无 ## 标题时回退到固定锚点目录
  const fallback = useMemo(() => {
    const list: { id: string; label: string; level: number }[] = [];
    if (entry.body.length) list.push({ id: "body", label: "正文", level: 2 });
    if (entry.points?.length) list.push({ id: "points", label: "关键点", level: 2 });
    if (entry.source) list.push({ id: "source", label: "出处", level: 2 });
    return list;
  }, [entry]);

  const items = headings.length > 0 ? headings : fallback;

  /**
   * 让当前章节在目录里保持可见（长目录自动跟随正文翻页）。
   * 只在必要的时候动：目标已经完整可见就不滚，尽量少打扰阅读。
   * 采用「贴近下沿就先滚一点」的策略 —— 不等它真滚出可视区才追，
   * 这样正文下翻时目录的翻动是连续的，而不是一跳一跳。
   */
  const keepActiveVisible = useCallback((id: string, smooth = true) => {
    const list = listRef.current;
    if (!list || !id) return;
    const link = list.querySelector<HTMLElement>(`a[href="#${CSS.escape(id)}"]`);
    if (!link) return;
    // 用户刚手动滚过目录，这段时间不抢滚动条
    if (performance.now() < manualUntil.current) return;

    const listRect = list.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    // 上下各留一段余量：接近边缘时就提前滚动，观感像「目录跟着翻页」
    const marginTop = 8;
    const marginBottom = 64;

    const visibleTop = listRect.top + marginTop;
    const visibleBottom = listRect.bottom - marginBottom;

    let delta = 0;
    if (linkRect.top < visibleTop) {
      // 在可视区上方：把它拉到顶部余量处
      delta = linkRect.top - visibleTop;
    } else if (linkRect.bottom > visibleBottom) {
      // 在可视区下方：把它推到「下方余量」之上（而不是贴到底边）
      delta = linkRect.bottom - visibleBottom;
    } else {
      return; // 已完整可见，不动
    }

    programmaticUntil.current = performance.now() + (smooth ? 700 : 80);
    list.scrollTo({
      top: list.scrollTop + delta,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  // 滚动完成后重新校准高亮。
  // 旧实现有个 bug：点击 TOC 跳转后，高亮总是落在目标的**下一个**兄弟章节上。
  // 原因：判定线在容器顶部 20% 处（850px 高即 170px），而目标跳转后停在距顶
  // 24px（即顶部留白），远在判定线之上（top 24 <= line 170 成立），
  // 于是继续往下找，命中目标的下一个标题。
  // 改法：判定线大幅上提，只留很窄的顶部区域（24px 留白 + 余量），
  // 这样“刚刚滚到的那一个”就是当前项。
  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>(".wiki-detail-body");
    if (!scroller) return;

    let raf = 0;
    const pick = () => {
      if (performance.now() < lockUntil.current) return; // 点击锁定期间不抢高亮
      const scrollTop = scroller.scrollTop;
      // 判定线：只取容器顶部很小一段（点击跳转的留白是 24px）。
      // 用 min 兼顾极矮容器，避免判定线被压到 0 以下。
      const line = Math.min(scrollTop + 48, scrollTop + scroller.clientHeight * 0.2);
      let current = items[0]?.id ?? "";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        // 用相对滚动内容的位置比较（offsetTop 相对 offsetParent，不可靠）
        const top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scrollTop;
        if (top <= line) current = it.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pick);
    };

    // 目录自身被用户拖动时，暂时让出自动跟随（1.2s 内不追）。
    // 需要排除两种「非手动」的 scroll：
    //   1. 自动跟随自己触发的平滑滚动（programmaticUntil 窗口内）；
    //   2. 点击目录跳转时的锁定期（lockUntil 窗口内）。
    let manualTimer = 0;
    const onListScroll = () => {
      const now = performance.now();
      if (now < lockUntil.current || now < programmaticUntil.current) return;
      manualUntil.current = now + 1200;
      window.clearTimeout(manualTimer);
      manualTimer = window.setTimeout(() => {
        manualUntil.current = 0;
      }, 1200);
    };
    const list = listRef.current;
    list?.addEventListener("scroll", onListScroll, { passive: true });

    pick();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(manualTimer);
      scroller.removeEventListener("scroll", onScroll);
      list?.removeEventListener("scroll", onListScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  // 高亮章节变化 → 让目录跟着翻（长目录时保证当前项始终在可视区内）
  useEffect(() => {
    keepActiveVisible(active);
  }, [active, keepActiveVisible]);

  return (
    <aside className="wiki-detail-toc" aria-label="目录">
      <div className="wiki-detail-toc-title">目录</div>
      <nav ref={listRef}>
        <div className="wiki-detail-toc-group">
          <ul>
            {items.map((it) => (
              <li
                key={it.id}
                className={
                  // 层级：##=0（分组）、###=1、####=2、#####=3、######=4
                  ["", "is-sub", "is-sub2", "is-sub3", "is-sub4"][
                    Math.min(it.level - 2, 4)
                  ]
                }
              >
                <a
                  href={`#${it.id}`}
                  className={active === it.id ? "is-active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(it.id);
                    // 点击后立刻让目录翻到该项（长目录里被点的项常在可视区外）
                    keepActiveVisible(it.id);
                    const el = document.getElementById(it.id);
                    const scroller = document.querySelector<HTMLElement>(".wiki-detail-body");
                    if (!el || !scroller) return;
                    // 只滚动正文容器，不用 scrollIntoView（它会连带滚动其他可滚祖先）
                    const top =
                      el.getBoundingClientRect().top -
                      scroller.getBoundingClientRect().top +
                      scroller.scrollTop -
                      24; // 顶部留白
                    // 锁定到“滚动真正停下”为止，而不是固定 600ms。
                    // 本文正文 3.7 万 px，跨章节跳转的平滑滚动远超 600ms；
                    // 锁一过 scroll-spy 就会把高亮抢给途中经过的章节。
                    // 做法：锁定 → 监听 scroll，静止 120ms 后解锁并校准一次。
                    lockUntil.current = Infinity;
                    let settle = 0;
                    const finish = () => {
                      scroller.removeEventListener("scroll", onSettle);
                      lockUntil.current = 0;
                      // 滚停后按最终位置重新判一次当前章节
                      const st = scroller.scrollTop;
                      const line = st + 48;
                      let cur = items[0]?.id ?? "";
                      for (const t of items) {
                        const te = document.getElementById(t.id);
                        if (!te) continue;
                        const tt =
                          te.getBoundingClientRect().top -
                          scroller.getBoundingClientRect().top +
                          st;
                        if (tt <= line) cur = t.id;
                      }
                      setActive(cur);
                    };
                    const onSettle = () => {
                      window.clearTimeout(settle);
                      settle = window.setTimeout(finish, 120);
                    };
                    scroller.addEventListener("scroll", onSettle, { passive: true });
                    // 兜底：即使一次 scroll 事件都没触发（已在该位置），也要解锁
                    settle = window.setTimeout(finish, 1200);
                    scroller.scrollTo({ top, behavior: "smooth" });
                  }}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

/* ---------- 上下篇导航 ---------- */
function EntryPager({ wiki, currentId }: { wiki: WikiMeta; currentId: string }) {
  const flat = wiki.chapters.flatMap((c) => c.entries.map((e) => e.id));
  const idx = flat.indexOf(currentId);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  const prevEntry = prev ? getEntry(prev) : null;
  const nextEntry = next ? getEntry(next) : null;

  return (
    <nav className="wiki-entry-pager" aria-label="上下篇">
      {prevEntry ? (
        <Link
          href={`/wiki/${wiki.slug}/${prev}`}
          className="wiki-entry-pager-item is-prev"
          onClick={startWikiLoading}
        >
          <small>← 上一篇</small>
          <strong>{prevEntry.term}</strong>
        </Link>
      ) : (
        <span className="wiki-entry-pager-item is-disabled">
          <small>← 上一篇</small>
          <strong>—</strong>
        </span>
      )}
      {nextEntry ? (
        <Link
          href={`/wiki/${wiki.slug}/${next}`}
          className="wiki-entry-pager-item is-next"
          onClick={startWikiLoading}
        >
          <small>下一篇 →</small>
          <strong>{nextEntry.term}</strong>
        </Link>
      ) : (
        <span className="wiki-entry-pager-item is-disabled">
          <small>下一篇 →</small>
          <strong>—</strong>
        </span>
      )}
    </nav>
  );
}


export default function WikiEntryPage({ params }: Props) {
  const { slug, entry: entryId } = use(params);
  const wiki = getWikiMeta(slug);
  const entry = getEntry(entryId);

  // AI 助手是否处于放大侧栏态：决定右侧是否为对话区让位
  const { mode: aiMode } = useWikiAssistant();
  const aiExpanded = aiMode === "expanded";

  // 折叠状态（localStorage 持久化，全局一个）
  // 首帧统一初始化为 false，避免服务端/客户端水合不匹配；
  // 客户端挂载后异步读取 localStorage 应用真实折叠状态（异步 setState 避免级联渲染警告）
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        if (window.localStorage.getItem(SIDEBAR_KEY) === "1") setCollapsed(true);
      } catch {
        /* 忽略 */
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  const toggleCollapse = () => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(SIDEBAR_KEY, next ? "1" : "0");
      } catch {
        /* 忽略 */
      }
      return next;
    });
  };

  if (!wiki || !entry) {
    return (
      <div className="wiki-detail-empty">
        <h1>404 · entry not found</h1>
        <p>
          返回 <Link href="/wiki">Wiki 首页</Link>
        </p>
      </div>
    );
  }

  return (
    <div
      className={`wiki-detail wiki-detail-${wiki.accent}${collapsed ? " is-sidebar-collapsed" : ""}${aiExpanded ? " is-ai-expanded" : ""}`}
    >
      <EntryNav
        wiki={wiki}
        entry={entry}
        collapsed={collapsed}
        onToggleCollapse={toggleCollapse}
      />

      <div className="wiki-detail-layout">
        <EntrySidebar
          wiki={wiki}
          currentId={entry.id}
        />

        {/* 右侧区：内部「正文 + 目录」。滚动发生在这一层，
            滚动条因此出现在屏幕最右侧；TOC 用 sticky 固定在右边不动。 */}
        <div className="wiki-detail-body">
          <main className="wiki-detail-main">
          {/* 词条主体 —— 单个词条，不再堆全部 */}
          <article className="wiki-detail-entry is-single">
            <header className="wiki-detail-entry-head">
              <h1 className="wiki-detail-entry-term">{entry.term}</h1>
              <p className="wiki-detail-entry-meta">更新于 {entry.updatedAt}</p>
            </header>

            <section id="oneliner" className="wiki-detail-entry-oneliner">
              {entry.oneLiner}
            </section>

            {/* 正文：按 markdown 渲染，## ~ ##### 自动带锚点 id 供右侧目录跳转 */}
            <section id="body" className="wiki-detail-entry-body wiki-markdown">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => {
                    const text = String(children);
                    return <h2 id={slugify(text)}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    return <h3 id={slugify(text)}>{children}</h3>;
                  },
                  h4: ({ children }) => {
                    const text = String(children);
                    return <h4 id={slugify(text)}>{children}</h4>;
                  },
                  h5: ({ children }) => {
                    const text = String(children);
                    return <h5 id={slugify(text)}>{children}</h5>;
                  },
                  h6: ({ children }) => {
                    const text = String(children);
                    return <h6 id={slugify(text)}>{children}</h6>;
                  },
                }}
              >
                {entry.body.join("\n\n")}
              </ReactMarkdown>
            </section>

            {entry.points && entry.points.length > 0 && (
              <section id="points">
                <ul className="wiki-detail-entry-points">
                  {entry.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </section>
            )}

            {entry.source && (
              <section id="source">
                <a
                  className="wiki-detail-entry-source"
                  href={entry.source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>→</span> {entry.source.label}
                </a>
              </section>
            )}
          </article>

          <EntryPager wiki={wiki} currentId={entry.id} />
          </main>

          <EntryToc entry={entry} />
        </div>
      </div>
    </div>
  );
}
