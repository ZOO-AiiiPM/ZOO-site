"use client";

import './projects.css';
import { PixelTitle } from './PixelTitle';
import { CliLine, Typewriter, StaggerReveal } from '../../components/CliAnimations';

interface Project {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  status: 'running' | 'shipped' | 'building';
  pid: string;
}

const projects: Project[] = [
  {
    name: 'ai-daily-report',
    title: 'AI 日报生成器',
    desc: '自动抓取 AI 领域最新动态，生成每日摘要推送到飞书群。支持自定义关注领域和推送时间。',
    tags: ['Python', 'Claude API', '飞书', 'Cron'],
    status: 'running',
    pid: '2847',
  },
  {
    name: 'competitor-monitor',
    title: '竞品监控看板',
    desc: '自动追踪竞品官网、App Store 更新日志，AI 提取关键变化生成对比报告。',
    tags: ['Next.js', 'Puppeteer', 'Vercel'],
    status: 'shipped',
    pid: '3012',
  },
  {
    name: 'prd-assistant',
    title: 'PRD 智能助手',
    desc: 'Chrome 插件，输入需求描述自动生成结构化 PRD，支持导出 Notion/飞书文档格式。',
    tags: ['Chrome Extension', 'DeepSeek', 'React'],
    status: 'building',
    pid: '3156',
  },
  {
    name: 'feedback-cluster',
    title: '用户反馈聚类工具',
    desc: '接入 App Store 评论和客服工单，AI 自动聚类分析，生成可视化的需求优先级矩阵。',
    tags: ['Python', 'Streamlit', 'Embedding'],
    status: 'shipped',
    pid: '3289',
  },
  {
    name: 'ask-zoo',
    title: 'AI 分身对话',
    desc: '基于 DeepSeek API 的个人 AI 分身，了解我的经历和性格。就是右下角那个。',
    tags: ['Next.js', 'DeepSeek', 'SSE'],
    status: 'running',
    pid: '3401',
  },
  {
    name: 'zoo.dev',
    title: '这个网站',
    desc: '你正在看的个人网站，也是一个 Vibe Coding 项目。从设计到代码全程 AI 协作。',
    tags: ['Next.js', 'Tailwind', 'MDX'],
    status: 'running',
    pid: '3567',
  },
];

const statusConfig = {
  running: { label: 'RUNNING', dot: '●' },
  shipped: { label: 'SHIPPED', dot: '✓' },
  building: { label: 'BUILDING', dot: '◌' },
};

export default function ProjectsPage() {
  const runningCount = projects.filter((p) => p.status === 'running').length;
  const shippedCount = projects.filter((p) => p.status === 'shipped').length;

  return (
    <div className="page-container">
      {/* Header — title static, comment typewriter, stats slide in */}
      <div className="proj-head">
        <div className="proj-title-line">
          <span className="proj-arrow-lg">❯</span>
          <PixelTitle />
        </div>
        <div className="proj-sub">
          <span className="proj-comment">{'// '}<Typewriter text="用 Vibe Coding 构建的实际产品和工具" /></span>
        </div>
        <div className="proj-stats">
          <span>total {projects.length}</span>
          <span className="proj-sep">│</span>
          <span className="proj-stat-running">● {runningCount} running</span>
          <span className="proj-sep">│</span>
          <span className="proj-stat-shipped">✓ {shippedCount} shipped</span>
        </div>
      </div>

      {/* Cards — stagger reveal, inner code lines delayed */}
      <StaggerReveal selector=".proj-card" interval={100}>
        <div className="proj-grid">
          {projects.map((project) => {
            const status = statusConfig[project.status];
            return (
              <div key={project.name} className="proj-card cli-stagger-item">
                <div className="proj-bar">
                  <div className="proj-dots">
                    <span className="proj-dot proj-dot-r" />
                    <span className="proj-dot proj-dot-y" />
                    <span className="proj-dot proj-dot-g" />
                  </div>
                  <span className="proj-filename">{project.name}</span>
                  <span className={`proj-badge proj-badge-${project.status}${project.status === 'running' ? ' cli-pulse' : ''}`}>
                    {status.dot} {status.label}
                  </span>
                </div>
                <div className="proj-body">
                  <div className="proj-title-row">
                    <span className="proj-arrow">❯</span>
                    <h3 className="proj-name">{project.title}</h3>
                  </div>
                  <p className="proj-desc">{project.desc}</p>
                  <div className="proj-stack cli-inner-stagger">
                    <span className="proj-stack-key">stack</span>
                    <span className="proj-stack-eq">=</span>
                    <span className="proj-stack-val">
                      [{project.tags.map((tag, i) => (
                        <span key={tag}>
                          <span className="proj-tag">&quot;{tag}&quot;</span>
                          {i < project.tags.length - 1 && <span className="proj-tag-comma">, </span>}
                        </span>
                      ))}]
                    </span>
                  </div>
                  <div className="proj-meta cli-inner-stagger">
                    <span>PID {project.pid}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </StaggerReveal>
    </div>
  );
}
