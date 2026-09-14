import type { Metadata } from "next";
import { WikiLoading } from "./WikiLoading";
import { WikiAssistantProvider } from "./WikiAssistantProvider";
import { WikiAssistantPanel } from "./WikiAssistantPanel";
import { WikiThemeProvider } from "./WikiThemeProvider";
import "./wiki-assistant.css";
import "./wiki-theme.css";

export const metadata: Metadata = {
  title: "Wiki — Winston",
};

/**
 * Wiki 分区的 layout。
 *
 * 关键：把 <WikiLoading /> 放在 layout 里，而不是 page.tsx 里。
 * 词条页是 /wiki/[slug]/[entry]，切换词条会改变路由 → page.tsx 卸载重挂。
 * 如果加载条挂在 page 内，它会随旧页面一起被卸载，动画刚开始就消失。
 * 放在 layout 中则跨路由持续挂载，动画能完整播放。
 *
 * 同理，AI 助手面板也挂在这里：
 * - 切词条时对话不丢失，历史跨页面共享（sessionStorage）
 * - 放大成侧栏后，切换页面依然固定，不会闪一下重建
 */
export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <WikiThemeProvider>
      <WikiAssistantProvider>
        {children}
        <WikiLoading />
        <WikiAssistantPanel />
      </WikiAssistantProvider>
    </WikiThemeProvider>
  );
}
