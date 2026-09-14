"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { EnvelopeSimpleIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { PixelAvatar } from "@/components/PixelArt";
import { AskZooPrototype } from "./_components/AskZooPrototype";
import { HomeMotion } from "./_components/HomeMotion";
import { experiences, projects, skillRows } from "./portfolio-data";
import "./home.css";

// 顶栏跑马灯：中文/英文交替，轨道内复制 4 组保证任意视口下总宽盖住容器，-50% 平移严格等于两份内容 → 无缝循环
const tickerTexts = ["欢迎来到我的个人网站", "WELCOME TO MY PORTFOLIO"];

const nodes = [
  { id: "about", label: "ABOUT" }, { id: "work", label: "WORK" },
  { id: "mewmo", label: "PROJECTS" }, { id: "skills", label: "SKILLS" },
  { id: "ask", label: "ASK ME MORE" }, { id: "contact", label: "CONTACT" },
] as const;

function CanvasNav({ active }: { active: string }) {
  // 把当前 active 在六宫格里的 col/row 算出来，传给 indicator 做 transform
  const activeIndex = Math.max(0, nodes.findIndex((node) => node.id === active));
  const col = activeIndex % 3;
  const row = Math.floor(activeIndex / 3);
  return (
    <nav className="home-nav" aria-label="页面导航">
      <a className="home-nav-wordmark" href="#about" aria-label="Winston，回到首页">WINSTON</a>
      <span className="home-nav-context"><span className="home-nav-marquee">{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <span key={i} aria-hidden={i > 1 || undefined}>{tickerTexts[i % 2]}</span>)}</span></span>
      <div className="home-nav-links">
        {nodes.map((node) => <a key={node.id} href={`#${node.id}`} className={active === node.id ? "is-active" : undefined} aria-current={active === node.id ? "location" : undefined}>{node.label}</a>)}
        <span
          className="home-nav-indicator"
          aria-hidden="true"
          style={{ "--ix": `${col * 100}%`, "--iy": `${row * 100}%` } as React.CSSProperties}
        />
      </div>
    </nav>
  );
}

function WinstonCharacter() {
  return (
    <div className="home-character" aria-hidden="true">
      <PixelAvatar size={320} />
    </div>
  );
}

function SectionIntro({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return <header className="home-node-intro"><span className="home-node-index">{index} /</span><h2>{title}</h2><p>{children}</p></header>;
}

function PortfolioFooter() {
  return (
    <footer id="contact" className="home-footer">
      <div className="home-footer-marquee" role="img" aria-label="Winston">
        {[0, 1, 2].map((row) => (
          <div className="home-footer-marquee-row" key={row} aria-hidden="true">
            <div className="home-footer-marquee-track">
              {[0, 1].map((group) => <div className="home-footer-marquee-group" key={group}>{[0, 1, 2].map((word) => <span key={word}>WINSTON</span>)}</div>)}
            </div>
          </div>
        ))}
      </div>
      <div className="home-footer-about">
        <div className="home-footer-signature"><div aria-hidden="true"><PixelAvatar size={64} /></div><p>attention is all you need.</p></div>
        <div className="home-footer-future" aria-label="其他内容"><Link href="/wiki"><span>Wiki</span><small>AI PM 知识库 ↗</small></Link><div><span>Blog</span><small>Coming soon</small></div></div>
      </div>
      <div className="home-footer-bottom">
        <div className="home-footer-social"><a href="https://github.com/ZOO-AiiiPM" target="_blank" rel="noreferrer"><GithubLogoIcon size={22} weight="regular" aria-hidden="true" />GitHub</a><a href="mailto:zhouwenxi008520@gmail.com"><EnvelopeSimpleIcon size={22} weight="regular" aria-hidden="true" />Email</a></div>
        <span>© 2026 WINSTON</span><a className="home-footer-top" href="#about" aria-label="Back to top">Top ↑</a>
      </div>
    </footer>
  );
}

export default function Home() {
  const [active, setActive] = useState("about");
  const [contactSent, setContactSent] = useState(false);
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSent(true);
  };
  useEffect(() => {
    const sections = nodes.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -70%", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-portfolio">
      <div className="home-frame" aria-hidden="true" />
      <HomeMotion />
      <CanvasNav active={active} />
      <div className="home-canvas-content">
        <section id="about" className="home-hero-node">
          <div className="home-hero-copy">
            <div className="home-hero-kicker"><span>South China Normal University</span><span>华南师范大学</span></div>
            <div className="home-hero-story"><strong>AI PRODUCT BUILDER</strong><span>AI 产品经理</span></div>
            <h1 aria-label="WINSTON"><span className="home-letter home-letter-w">W</span><span className="home-letter home-letter-i">I</span><span className="home-letter home-letter-n">N</span><span className="home-letter home-letter-s">S</span><span className="home-letter home-letter-t">T</span><span className="home-letter home-letter-o">O</span><span className="home-letter home-letter-n2">N</span><b>.</b></h1>
            <p className="home-hero-thesis">IN PERPETUAL SEARCH OF<br />THE <span>COOL</span> AND THE <em>USEFUL.</em></p>
            <p className="home-hero-description">我在研究、定义和交付之间工作。<br />用快速的原型和真实反馈，让想法向前走。</p>
          </div>
          <WinstonCharacter />
        </section>

        <div className="home-introduction">
          <span className="home-eyebrow">A LITTLE ABOUT ME</span>
          <p>我在<span>研究、定义和交付</span>之间工作。<br />用清晰的问题、快速的原型和真实反馈，<br />让想法向前走。</p>
          <a href="#ask">了解我，也可以直接问我 <span>↗</span></a>
        </div>

        <section id="work" className="home-node home-work-node">
          <SectionIntro index="01" title="EXPERIENCE">三段经历，<br />都是把不确定往前推的过程。</SectionIntro>
          <div className="home-work-route" aria-label="工作经历">
            {experiences.map((experience, index) => (
              <article className="home-work-stop" key={experience.period}>
                <div className="home-stop-meta"><span>0{index + 1}</span><p>{experience.period}</p></div>
                <div className="home-stop-copy">
                  <p className="home-stop-company">{experience.company}</p><h3>{experience.role}</h3>
                  <p className="home-stop-summary">{experience.summary}</p>
                  <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <p className="home-stop-evidence">{experience.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="home-project-heading"><span>SELECTED PROJECTS</span><span>想法落地的两种方式 ↓</span></div>
        <section id="mewmo" className="home-node home-project-node">
          <div className="home-project-art home-mewmo-art" aria-label="mewmo 项目字标，非产品界面">
            <div className="home-mewmo-circle"><span>mewmo<span className="home-mewmo-star">✳</span></span><small>LEARN. CONNECT. CREATE.</small></div>
            <p>项目视觉占位 · 真实产品截图待补充</p>
          </div>
          <div className="home-project-copy"><span className="home-eyebrow">02 / PERSONAL PROJECT</span><h2>mewmo</h2><h3>{projects[0].tagline}</h3><p>{projects[0].introduction}</p><span className="home-project-role">{projects[0].role}</span></div>
        </section>

        <section id="ask-project" className="home-node home-project-node home-ask-project-node">
          <div className="home-project-copy"><span className="home-eyebrow">03 / PERSONAL PROJECT</span><h2>Ask<br />Winston<span>.</span></h2><h3>{projects[1].tagline}</h3><p>{projects[1].introduction}</p><a className="home-text-link" href="#ask">和我的 AI 分身聊聊 <span>↗</span></a></div>
          <div className="home-project-art home-persona-art" aria-hidden="true"><div className="home-persona-diamond" /><div className="home-persona-face"><PixelAvatar size={220} /></div><span className="home-persona-question">ASK<br />ME<br />ANYTHING.</span><span className="home-persona-label">A CONVERSATION, NOT A PDF.</span></div>
        </section>

        <section id="skills" className="home-node home-skills-node">
          <SectionIntro index="04" title="CAPABILITIES">五种能力，围绕同一件事组合起来：<br />让产品真实地被使用。</SectionIntro>
          <div className="home-skill-cluster">{skillRows.map((skill, index) => <div key={skill.capability} className="home-skill-item"><span>0{index + 1}</span><strong>{skill.capability}</strong><p>{skill.evidence}</p><small>{skill.tools}</small></div>)}</div>
        </section>

        <section id="ask" className="home-node home-ask-node"><SectionIntro index="05" title="YOUR TURN">还有问题，<br />直接问我的 AI 分身。</SectionIntro><AskZooPrototype /></section>

        <section id="contact" className="home-node home-contact-node">
          <SectionIntro index="06" title="CONTACT">如果你也在做值得解决的问题，我很愿意聊聊。</SectionIntro>
          <div className="home-contact-grid">
            <div className="home-contact-profile">
              <div className="home-contact-avatar"><PixelAvatar size={80} /></div>
              <h3>Have a role<br />in mind?</h3>
              <p>我的收件箱对实习、校招和有趣的产品问题保持开放。</p>
              <address>
                <a href="https://github.com/ZOO-AiiiPM" target="_blank" rel="noreferrer"><span>GITHUB</span>github.com/ZOO-AiiiPM ↗</a>
                <a href="mailto:zhouwenxi008520@gmail.com"><span>EMAIL</span>zhouwenxi008520@gmail.com</a>
                <span><b>WECHAT</b>待替换</span>
                <span><b>PHONE</b>待替换</span>
              </address>
            </div>
            <form className="home-contact-form" onSubmit={submitContact}>
              <label><span>YOUR EMAIL</span><input type="email" required placeholder="name@company.com" /></label>
              <label><span>SUBJECT</span><input type="text" required placeholder="想和你聊聊…" /></label>
              <label><span>MESSAGE</span><textarea required rows={4} placeholder="告诉我机会、团队或你正在解决的问题。" /></label>
              <button type="submit">{contactSent ? "已记录，这是原型状态 ✓" : "发送消息 ↗"}</button>
              <small>DESIGN PROTOTYPE · 当前不会真的发送邮件</small>
            </form>
          </div>
        </section>
        <PortfolioFooter />
      </div>
    </main>
  );
}
