"use client";

import { FormEvent, useState } from "react";
import { PixelAvatar } from "@/components/PixelArt";
import { AskZooPrototype } from "./_components/AskZooPrototype";
import { FooterWordmark } from "./_components/FooterWordmark";
import { HomeSmoothScroll } from "./_components/HomeSmoothScroll";
import { jumpToPageTop } from "./_components/homeScroll";
import { ProjectStackScroll } from "./_components/ProjectStackScroll";
import { ProofCursor } from "./_components/ProofCursor";
import { experiences, projects, skillRows, type PortfolioProject } from "./portfolio-data";
import "./home.css";

function SectionTitle({ index, title, note }: { index: string; title: string; note: string }) {
  return (
    <header className="home-section-title">
      <span>{index}</span>
      <h2>{title}</h2>
      <p>{note}</p>
    </header>
  );
}

function ProductVisual({ project }: { project: PortfolioProject }) {
  if (project.visual === "persona") {
    return (
      <div className="home-project-product home-project-persona" aria-label="Ask Winston 对话产品界面示意">
        <aside className="home-project-persona-context">
          <div className="home-project-product-brand"><span>W</span><b>ASK WINSTON</b></div>
          <div className="home-project-persona-profile">
            <PixelAvatar size={82} />
            <div><strong>WINSTON.AI</strong><span>PERSONA / ONLINE</span></div>
          </div>
          <p>一个有事实边界、也有自己判断的 AI 分身。</p>
          <dl>
            <div><dt>KNOWLEDGE</dt><dd>Portfolio / Work / Ideas</dd></div>
            <div><dt>RESPONSE</dt><dd>Streaming</dd></div>
          </dl>
          <span className="home-project-persona-status"><i /> READY FOR QUESTIONS</span>
        </aside>
        <div className="home-project-persona-chat">
          <header><span>CONVERSATION / 01</span><b>•••</b></header>
          <p className="home-project-chat-label">YOU</p>
          <div className="home-project-bubble is-user">你做产品时最看重什么？</div>
          <p className="home-project-chat-label">WINSTON.AI</p>
          <div className="home-project-bubble is-bot">先看清问题，再决定什么值得做。技术应该消失在体验后面。</div>
          <div className="home-project-chat-suggestions"><span>为什么做 AI 产品？</span><span>讲讲你的项目判断</span></div>
          <div className="home-project-composer"><span>继续追问 Winston…</span><b>↗</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-project-product home-project-insight" aria-label="AI 产品洞察助手界面示意">
      <header className="home-project-insight-header">
        <div className="home-project-product-brand"><span>S</span><b>SIGNAL DESK</b></div>
        <p>DAILY PRODUCT BRIEF</p>
        <time>08 / 11 / 2026</time>
      </header>
      <div className="home-project-insight-body">
        <aside className="home-project-insight-rail">
          <span>TODAY</span><b>12</b><p>signals<br />reviewed</p>
          <div><strong>03</strong><small>NEED ACTION</small></div>
        </aside>
        <div className="home-project-insight-feed">
          <div className="home-project-insight-priority">
            <header><span>01 / HIGH IMPACT</span><b>ACTION</b></header>
            <h4>竞品将 AI 总结<br />前置到主流程</h4>
            <p>验证入口前置是否提升功能发现率，并观察新用户首次使用完成率。</p>
            <footer><span>PRODUCT STRATEGY</span><i>↗</i></footer>
          </div>
          <div className="home-project-insight-secondary">
            <article><span>02 / PRODUCT CHANGE</span><strong>移动端新增批量处理</strong><p>核心任务完成步骤减少 2 步</p></article>
            <article><span>03 / WATCHLIST</span><strong>定价页描述发生变化</strong><p>继续观察，不进入本周行动</p></article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [lockedWork, setLockedWork] = useState(0);
  const [previewWork, setPreviewWork] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [contactSent, setContactSent] = useState(false);
  const activeWork = previewWork ?? lockedWork;

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSent(true);
  };

  return (
    <main className="home-portfolio">
      <HomeSmoothScroll />
      <ProofCursor />

      <div className="home-about-work-stack">
        <section id="about" className="home-hero" aria-labelledby="home-hero-title">
          <div className="home-hero-background" aria-hidden="true" />
          <div className="home-hero-geometry" aria-hidden="true">
            <span className="home-hero-geometry-orbit" />
            <span className="home-hero-geometry-disc" />
            <span className="home-hero-geometry-triangle" />
            <span className="home-hero-geometry-tile" />
            <span className="home-hero-geometry-capsule" />
          </div>
          <div className="home-hero-ornaments" aria-hidden="true">
            <span className="home-hero-ornament-ring" />
            <span className="home-hero-ornament-cross" />
            <span className="home-hero-ornament-steps" />
            <span className="home-hero-ornament-dots" />
          </div>
          <div className="home-hero-cover">
            <div className="home-hero-cover-topline">
              <span>PORTFOLIO / 2026</span>
              <span>AI PRODUCT · BUILDER</span>
            </div>
            <div className="home-hero-cover-main">
              <div className="home-hero-copy">
                <p className="home-hero-identity">
                  <span>AI PRODUCT MANAGER</span>
                  <b>AI NATIVE · VIBE CODER</b>
                </p>
                <h1 id="home-hero-title">WINSTON</h1>
                <p className="home-hero-cover-note">把模糊的问题，做成可用的产品。</p>
              </div>
              <aside className="home-hero-profile" aria-label="个人信息">
                <div className="home-hero-avatar">
                  <PixelAvatar size={160} />
                </div>
                <dl className="home-hero-profile-meta">
                  <div><dt>AGE</dt><dd>20+</dd></div>
                  <div><dt>SCHOOL</dt><dd>华南师范大学 · 大三</dd></div>
                  <div><dt>ROLE</dt><dd>AI 产品经理</dd></div>
                </dl>
              </aside>
            </div>
            <div className="home-hero-cover-bottomline">
              <span>SCROLL TO READ</span>
              <span aria-hidden="true">↓</span>
              <span>01 / 02</span>
            </div>
          </div>
        </section>

        <section id="work" className="home-section home-work" aria-labelledby="work-title">
          <SectionTitle index="01" title="WORK" note="从最近开始，看看我是怎样把事情往前推的。" />
          <div className="home-work-stage">
            <div className="home-work-list">
              {experiences.map((experience, index) => (
                <button
                  key={experience.period}
                  type="button"
                  className={`home-work-item${activeWork === index ? " is-active" : ""}${lockedWork === index ? " is-locked" : ""}`}
                  onMouseEnter={() => setPreviewWork(index)}
                  onMouseLeave={() => setPreviewWork(null)}
                  onFocus={() => setPreviewWork(index)}
                  onBlur={() => setPreviewWork(null)}
                  onClick={() => setLockedWork(index)}
                  data-cursor={lockedWork === index ? "OPEN" : "VIEW"}
                  aria-expanded={activeWork === index}
                >
                  <span className="home-work-node" />
                  <span className="home-work-period">{experience.period}</span>
                  <strong>{experience.company}</strong>
                  <span>{experience.role}</span>
                </button>
              ))}
            </div>
            <article className="home-work-detail" aria-live="polite">
              <div className="home-work-detail-top"><span>SELECTED EXPERIENCE</span><b>{String(activeWork + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}</b></div>
              <h3>{experiences[activeWork].role}</h3>
              <p>{experiences[activeWork].summary}</p>
              <ul>{experiences[activeWork].details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <footer><span>EVIDENCE</span>{experiences[activeWork].evidence}</footer>
            </article>
          </div>
        </section>
      </div>

      <section id="projects" className="home-projects" aria-label="项目作品">
        <div className="home-project-stack">
          <div className="home-project-stage" data-cursor="SCROLL">
            {projects.map((project, index) => (
              <article
                key={project.title}
                data-index={index}
                className={`home-project-page is-${project.visual}${activeProject === index ? " is-active" : ""}`}
              >
                <div className="home-project-copy">
                  <span className="home-project-label">PROJECT</span>
                  <h3>{project.title}</h3>
                  <p className="home-project-tagline">{project.tagline}</p>
                  <dl className="home-project-facts">
                    <div>
                      <dt>项目介绍</dt>
                      <dd>{project.introduction}</dd>
                    </div>
                    <div>
                      <dt>我的角色</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div className="home-project-links">
                      <dt>链接</dt>
                      <dd>
                        {project.links.map((link) => link.href ? (
                          <a key={link.label} href={link.href} data-cursor="OPEN" target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                            <span>{link.label}</span>{link.value}
                          </a>
                        ) : (
                          <span key={link.label} className="is-disabled"><b>{link.label}</b>{link.value}</span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
                <ProductVisual project={project} />
              </article>
            ))}
            <div className="home-project-hud" aria-hidden="true">
              <span>PROJECTS</span>
              <span className="home-project-hud-dots">
                {projects.map((project, index) => (
                  <i key={project.title} className={activeProject === index ? "is-on" : undefined} />
                ))}
              </span>
              <b>{String(activeProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</b>
            </div>
          </div>
        </div>
        <ProjectStackScroll onIndexChange={setActiveProject} />
      </section>

      <section id="skills" className="home-section home-skills" aria-labelledby="skills-title">
        <SectionTitle index="03" title="SKILLS" note="我不想用百分比证明能力。这里展示的是能力、工具和它们解决的问题。" />
        <div className="home-skill-table" role="table" aria-label="能力与工具矩阵">
          <div className="home-skill-head" role="row"><span>CAPABILITY</span><span>TOOLS / METHODS</span><span>WHAT IT ENABLES</span></div>
          {skillRows.map((row, index) => (
            <div className="home-skill-row" role="row" key={row.capability} data-cursor="READ">
              <span className="home-skill-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{row.capability}</strong>
              <span>{row.tools}</span>
              <p>{row.evidence}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="home-section home-contact" aria-labelledby="contact-title">
        <SectionTitle index="04" title="CONTACT" note="如果你也在做值得解决的问题，我很愿意聊聊。" />
        <div className="home-contact-grid">
          <div className="home-contact-profile">
            <div className="home-contact-avatar"><PixelAvatar size={80} /></div>
            <h3>Have a role<br />in mind?</h3>
            <p>我的收件箱对实习、校招和有趣的产品问题保持开放。</p>
            <address>
              <a href="https://github.com" target="_blank" rel="noreferrer" data-cursor="OPEN"><span>GITHUB</span>github.com/zoo ↗</a>
              <a href="mailto:zoo@zooooo.site" data-cursor="MAIL"><span>EMAIL</span>zoo@zooooo.site</a>
              <span><b>PHONE</b>待替换</span>
              <span><b>WECHAT</b>待替换</span>
            </address>
          </div>
          <form className="home-contact-form" onSubmit={submitContact}>
            <label><span>YOUR EMAIL</span><input type="email" required placeholder="name@company.com" /></label>
            <label><span>SUBJECT</span><input type="text" required placeholder="想和你聊聊…" /></label>
            <label><span>MESSAGE</span><textarea required rows={4} placeholder="告诉我机会、团队或你正在解决的问题。" /></label>
            <button type="submit" data-cursor="SEND">{contactSent ? "已记录，这是原型状态 ✓" : "发送消息 ↗"}</button>
            <small>DESIGN PROTOTYPE · 当前不会真的发送邮件</small>
          </form>
        </div>
      </section>

      <section id="ask" className="home-section home-ask-section" aria-label="Ask me more">
        <div className="home-ask-stage">
          <AskZooPrototype />
        </div>
      </section>

      <footer id="footer" className="home-footer">
        <div className="home-footer-name">
          <span>AI PRODUCT MAKER</span>
          <FooterWordmark />
        </div>
        <div className="home-footer-bottom">
          <p className="home-footer-slogan">attention is all you need</p>
          <button
            type="button"
            className="home-footer-top"
            data-cursor="TOP"
            aria-label="回到顶部"
            title="回到顶部"
            onClick={(event) => {
              event.currentTarget.blur();
              jumpToPageTop();
            }}
          >
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </footer>
    </main>
  );
}
