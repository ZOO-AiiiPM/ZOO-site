"use client";

import { useState } from "react";

const nodes = [
  { id: "noise", label: "模糊需求", note: "先听见所有声音，但不急着把每句话都做成功能。", x: 80, y: 90 },
  { id: "signal", label: "真实问题", note: "寻找重复出现的阻力、动机和未被满足的场景。", x: 266, y: 90 },
  { id: "choice", label: "产品判断", note: "明确不做什么，让有限资源集中到最高价值路径。", x: 454, y: 90 },
  { id: "ship", label: "可交付", note: "用能运行的版本验证，而不是让结论停在文档里。", x: 640, y: 90 },
];

export function HeroDecisionMap() {
  const [active, setActive] = useState("choice");
  const current = nodes.find((node) => node.id === active) ?? nodes[2];

  return (
    <div className="home-decision" aria-label="从模糊需求到可交付产品的决策路径">
      <div className="home-decision-topline">
        <span>DECISION MAP</span>
        <span>01 — 04</span>
      </div>
      <svg className="home-decision-svg" viewBox="0 0 720 190" role="img" aria-labelledby="decision-title">
        <title id="decision-title">模糊需求经过问题识别和产品判断，最终成为可交付产品</title>
        <path className="home-decision-path home-decision-path-ghost" d="M80 90 H640" />
        <path className="home-decision-path" d="M80 90 H640" />
        {nodes.map((node, index) => (
          <g
            key={node.id}
            className={`home-decision-node${active === node.id ? " is-active" : ""}`}
            transform={`translate(${node.x} ${node.y})`}
            onMouseEnter={() => setActive(node.id)}
            onFocus={() => setActive(node.id)}
            tabIndex={0}
            role="button"
            aria-label={`${node.label}：${node.note}`}
          >
            <circle r="26" />
            <text className="home-decision-index" textAnchor="middle" y="5">{String(index + 1).padStart(2, "0")}</text>
            <text className="home-decision-label" textAnchor="middle" y="52">{node.label}</text>
          </g>
        ))}
      </svg>
      <div className="home-decision-note" aria-live="polite">
        <span className="home-decision-note-mark">→</span>
        <p>{current.note}</p>
      </div>
      <div className="home-decision-stamp">MAKE IT REAL</div>
    </div>
  );
}
