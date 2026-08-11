"use client";

import { FormEvent, useState } from "react";
import { PixelAvatar } from "@/components/PixelArt";
import { AskZooPrototype } from "./_components/AskZooPrototype";
import { HeroDecisionMap } from "./_components/HeroDecisionMap";
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
      <div className="home-project-screen home-project-persona" aria-label="Ask Winston 对话界面示意">
        <div className="home-project-windowbar"><span /><span /><span /><b>ASK WINSTON</b></div>
        <div className="home-project-persona-main">
          <div className="home-project-persona-id"><PixelAvatar size={64} /><strong>WINSTON.AI</strong><small>PERSONA ONLINE</small></div>
          <div className="home-project-bubble is-user">你做产品时最看重什么？</div>
          <div className="home-project-bubble is-bot">先看清问题，再决定什么值得做。技术应该消失在体验后面。</div>
          <div className="home-project-composer"><span>Ask something…</span><b>↗</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-project-screen home-project-insight" aria-label="AI 产品洞察助手界面示意">
      <div className="home-project-windowbar"><span /><span /><span /><b>DAILY SIGNAL / 08.11</b></div>
      <div className="home-project-insight-grid">
        <aside><b>12</b><span>signals found</span><i>3 need action</i></aside>
        <div className="home-project-signal-list">
          <div className="is-priority"><small>HIGH IMPACT</small><strong>竞品将 AI 总结前置到主流程</strong><p>建议：验证入口前置是否提升功能发现率。</p></div>
          <div><small>PRODUCT CHANGE</small><strong>移动端新增批量处理</strong><p>影响：核心任务完成步骤减少 2 步。</p></div>
          <div><small>WEAK SIGNAL</small><strong>定价页描述发生变化</strong><p>继续观察，不进入本周行动。</p></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [lockedWork, setLockedWork] = useState(0);
  const [previewWork, setPreviewWork] = useState<number | null>(null);
  const [contactSent, setContactSent] = useState(false);
  const activeWork = previewWork ?? lockedWork;

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSent(true);
  };

  return (
    <main className="home-portfolio">
      <ProofCursor />

      <section id="home" className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-copy">
          <div className="home-kicker"><span>AVAILABLE FOR</span> AI PRODUCT INTERN / 2026</div>
          <h1 id="home-hero-title"><span>把模糊问题，</span><em>做成真实产品。</em></h1>
          <p className="home-hero-intro">你好，我是 Winston，一名寻找 AI 产品经理校招 / 实习机会的产品创造者。我喜欢把不确定的问题拆开、判断，再快速做成可以验证的体验。</p>
          <dl className="home-hero-meta">
            <div><dt>EDUCATION</dt><dd>某某大学 · 专业待替换</dd></div>
            <div><dt>FOCUS</dt><dd>AI Product / 0→1 / User Experience</dd></div>
            <div><dt>BASED IN</dt><dd>China · Open to opportunities</dd></div>
          </dl>
          <a className="home-scroll-cue" href="#work" data-cursor="SCROLL"><span>↓</span>向下翻阅我的年鉴</a>
        </div>
        <HeroDecisionMap />
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

      <section id="projects" className="home-section home-projects" aria-labelledby="projects-title">
        <SectionTitle index="02" title="PROJECTS" note="两个项目，两张完整年鉴页。向下滚动，下一张会覆上来。" />
        <div className="home-project-stack">
          {projects.map((project) => (
            <article key={project.index} className="home-project-page">
              <div className="home-project-copy">
                <div className="home-project-number">PROJECT / {project.index}</div>
                <span className="home-project-eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="home-project-work">
                  <span>WHAT I DID</span>
                  <ol>{project.work.map((item) => <li key={item}>{item}</li>)}</ol>
                </div>
                <dl className="home-project-meta">
                  {project.meta.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.href ? <a href={item.href} data-cursor="OPEN">{item.value}</a> : item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <ProductVisual project={project} />
            </article>
          ))}
        </div>
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

      <footer id="footer" className="home-footer">
        <div className="home-footer-name"><span>AI PRODUCT MAKER</span><strong>WINSTON</strong></div>
        <div className="home-footer-actions">
          <a href="#home" data-cursor="TOP">BACK TO TOP ↑</a>
          <AskZooPrototype />
        </div>
        <p>© 2026 WINSTON · MADE BY DECIDING WHAT NOT TO BUILD.</p>
      </footer>
    </main>
  );
}
