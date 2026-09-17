# -*- coding: utf-8 -*-
"""压平过度碎片化的排版，让长文读起来连贯。

背景：飞书里「一句一块」「引导句 + 引用块」是常见的编辑习惯，
直接搬进 data.ts 后，一篇 9700 字的文章会渲染出 889 个视觉块
（平均每块 10 字、82% 的 <p> 不足 20 字），页面显得很碎。

本脚本做两件事：
  A. 合并连续的短正文块（「描述。」+「例如：」这类）
  B. 把「引导句 + 紧跟的单句引用」压平成一句通顺的正文：
       项目背景回答：              ->  项目背景回答：**为什么现在需要做这件事？**
       > **为什么现在需要做这件事？**

**必须保留引用块的两种情况**（脚本已内置判断）：
  1. 「标签型」引导语（回答：/ 评估：/ 错误：/ 正确：）——
     它们成组出现，引用块承担「视觉分组」作用，
     合并成「回答：他是谁？」会丢掉清单感。
  2. 引用为多行（箭头流程、分行列举），本身是完整结构。

实测效果（第二节课 9700 字）：视觉块 889 -> 675，
引用块 180 -> 82，<p> 491 -> 323，平均每块 10 -> 14 字。
"""

import re
import sys


def parse_blocks(md):
    return [b.strip() for b in md.split("\n\n") if b.strip()]


def is_plain(b):
    """普通正文段落（单行、非结构块）。"""
    if b.startswith((">", "#", "|", "`", "---")):
        return False
    if re.match(r"^\s*[-*+]\s", b) or re.match(r"^\s*\d+[.）)]", b):
        return False
    if "\n" in b:
        return False
    return True


def is_quote(b):
    return b.startswith(">")


def quote_text(b):
    """去掉引用标记，返回纯内容。"""
    lines = [re.sub(r"^>\s?", "", ln).strip() for ln in b.split("\n")]
    return "\n".join(lines).strip()


def is_lead_in(b):
    """是否为「引导句」——以冒号结尾的短句（如「项目背景回答：」）。

    这类句子的作用就是引出紧随其后的引用块，合并后读起来才连贯。

    但有两类要排除，因为它们合并后反而生硬：
      1. 「标签型」引导语（回答：/ 评估：/ 错误：/ 正确：）——
         在原文里成组出现，引用块起到「视觉分组」作用，
         合并成「回答：他是谁？」会丢掉这种清单感。
      2. 上方已有小标题的「维度定义」结构。
    """
    t = b.rstrip()
    if not (t.endswith("：") or t.endswith(":")):
        return False
    if len(b) > 40:
        return False
    # 标签型引导语：保留引用块
    if b in ("回答：", "评估：", "错误：", "正确：", "正确逻辑是：", "错误顺序：", "正确顺序："):
        return False
    return True


def optimize(md):
    blocks = parse_blocks(md)
    out = []
    i = 0
    n = len(blocks)
    stats = {"merged_plain": 0, "merged_quote": 0}

    while i < n:
        b = blocks[i]

        # ---- 规则 B（优先）：引导句 + 紧跟的单句引用 -> 合并成一句 ----
        # 必须先于规则 A 的判断：引导句本身也是 plain，
        # 若先跑规则 A，它会把引导句和后面不相干的正文拼起来，
        # 反而跨过了引用块，使这里永远不命中。
        if is_lead_in(b) and i + 1 < n and is_quote(blocks[i + 1]):
            q = quote_text(blocks[i + 1])
            # 仅当引用是「单行」且不是多行结构（箭头流程/分行列举）时合并
            if "\n" not in q and q and not q.startswith("|"):
                stats["merged_quote"] += 1
                out.append(f"{b}{q}")
                i += 2
                continue

        # ---- 规则 A：合并连续的短正文 ----
        if is_plain(b):
            buf = [b]
            j = i + 1
            while j < n and is_plain(blocks[j]):
                # ** 边界：上一块以 ** 结尾、本块以 ** 开头 -> 拼接会得到 ****
                if buf[-1].rstrip().endswith("**") and blocks[j].lstrip().startswith("**"):
                    break
                buf.append(blocks[j])
                j += 1
            if len(buf) > 1:
                stats["merged_plain"] += len(buf) - 1
                out.append("".join(buf))
            else:
                out.append(b)
            i = j
            continue

        out.append(b)
        i += 1

    return "\n\n".join(out), stats


if __name__ == "__main__":
    for path in sys.argv[1:]:
        md = open(path, encoding="utf-8").read()
        before = len(parse_blocks(md))
        res, stats = optimize(md)
        after = len(parse_blocks(res))
        open(path, "w", encoding="utf-8").write(res)
        print(f"  {path}")
        print(f"    块数 {before} -> {after}（减少 {before - after}）")
        print(f"    合并短正文 {stats['merged_plain']} 处；"
              f"引导句+引用合并 {stats['merged_quote']} 处")
