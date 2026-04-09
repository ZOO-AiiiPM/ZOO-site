import './about.css';

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-wrapper">
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>About</h1>

        <p className="about-txt">
          嗨，我是 Zoo。一个在 AI 时代重新定义自己的产品经理。
        </p>
        <p className="about-txt" style={{ marginTop: 12 }}>
          我相信最好的 AI 产品不是炫技，而是<strong>让人感觉不到 AI 的存在</strong>。当技术消隐于体验之中，用户才能真正感受到产品的价值。这是我做产品的核心信念，也是我持续探索的方向。
        </p>

        <h2 className="about-sh">Experience</h2>
        <div className="about-timeline">
          <div className="about-tl-item">
            <div className="about-tl-time">2024 - Present</div>
            <div className="about-tl-role">AI 产品经理</div>
            <div className="about-tl-desc">负责 AI 产品线，从 0 到 1 搭建 AI 能力平台，推动 AI 在核心业务的落地。</div>
          </div>
          <div className="about-tl-item">
            <div className="about-tl-time">2022 - 2024</div>
            <div className="about-tl-role">高级产品经理</div>
            <div className="about-tl-desc">负责核心业务产品的规划与迭代，主导多个千万级用户产品的功能设计。</div>
          </div>
          <div className="about-tl-item">
            <div className="about-tl-time">2020 - 2022</div>
            <div className="about-tl-role">产品经理</div>
            <div className="about-tl-desc">从 0 到 1 构建用户增长体系，负责拉新、留存和转化链路的产品设计。</div>
          </div>
        </div>

        <h2 className="about-sh">Vibe Coding</h2>
        <p className="about-txt">
          我用 AI 工具写代码——不是为了成为工程师，而是为了把想法直接变成可以运行的产品。这个网站就是用 Claude Code 多 Agent 协作构建的。Vibe Coding 让产品经理第一次拥有了自己动手的能力。
        </p>

        <h2 className="about-sh">Contact</h2>
        <div className="about-contacts">
          <a href="https://twitter.com" className="about-contact-btn" target="_blank" rel="noopener noreferrer">𝕏 Twitter</a>
          <a href="https://okjike.com" className="about-contact-btn" target="_blank" rel="noopener noreferrer">📱 即刻</a>
          <a href="https://github.com" className="about-contact-btn" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          <a href="mailto:zoo@example.com" className="about-contact-btn">✉ Email</a>
        </div>
      </div>
    </div>
  );
}
