import Link from "next/link";
import "../blog.css";

export default function ArticlePage() {
  return (
    <div className="page-container">
      <div className="blog-detail-container">
        <Link href="/blog" className="blog-detail-back">
          ← 返回文章
        </Link>

        <h1 className="blog-detail-title">
          用 Claude Code 三天做了一个完整的 SaaS 产品
        </h1>

        <div className="blog-detail-meta">
          <span>2026-04-08</span>
          <span>~2800 字</span>
          <span>8 min read</span>
        </div>

        <div className="blog-detail-body">
          <p>
            上周我用 Claude Code 做了一个实验：能不能在三天内，从一个想法变成一个可用的
            SaaS 产品？结果超出预期。
          </p>

          <h2>为什么做这个实验</h2>
          <p>
            作为一个 AI PM，我一直在思考：
            <strong>当 AI 能帮你写代码时，PM 的价值到底在哪？</strong>
            不是 Prompt 写得好不好，而是你能不能把模糊的想法变成结构清晰、逻辑自洽的产品。
          </p>

          <blockquote>
            Vibe Coding 不是让 AI 替你写代码，而是让你用产品思维和 AI 协作，把想法快速变成现实。
          </blockquote>

          <h2>Day 1：需求定义与架构设计</h2>
          <p>
            第一天没写一行代码。全部时间花在需求文档和信息架构上。我用{" "}
            <code>CLAUDE.md</code> 把项目背景、技术约束、设计规范全部写清楚，
            这份文档后来成了整个项目的「宪法」。
          </p>

          <h2>Day 2：核心功能开发</h2>
          <p>有了清晰的需求文档，Claude Code 表现非常稳定。关键心得：</p>
          <pre>{`// 不要这样：
"帮我做一个用户管理系统"

// 要这样：
"参照 CLAUDE.md 中的用户模型，
 实现 /api/users CRUD，
 用 Supabase Auth，
 错误处理参考 lib/errors.ts"`}</pre>
          <p>
            指令越具体，输出质量越高。这和写 PRD 是一回事——模糊的需求只会得到模糊的交付。
          </p>

          <h2>几个反直觉的发现</h2>
          <p>
            1.{" "}
            <strong>写需求文档的时间不能省</strong>
            ——花在需求上的时间会在开发阶段 10 倍返还。
          </p>
          <p>
            2.{" "}
            <strong>PM 的价值不降反升</strong>
            ——当开发成本趋近于零，决定做什么比怎么做更重要。
          </p>
          <p>
            3.{" "}
            <strong>审美是新的技术壁垒</strong>
            ——AI 能写代码但不能替你做审美判断。
          </p>
        </div>
      </div>
    </div>
  );
}
