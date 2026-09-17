# -*- coding: utf-8 -*-
"""把原文「一连串 1. 」规范成递增编号 1, 2, 3, ...

飞书里作者习惯用无序的 `1.` 当项目符号（编辑器会自动显示 1/2/3），
但导出成 Markdown 后它们全都真的是 `1.`，渲染出来就是一排「1. 1. 1.」。

规则：
  - 在**同一个 `##` 范围内**，所有 `1. ` 项依次编号 1, 2, 3...
    （即使中间隔着正文/图片/子标题，也继续累加）
  - 遇到下一个 `##` 才重置计数
    说明：body 是按 `##` 切分的，react-markdown 在每个 body 段内
    对「被正文隔开的多个 ol」按 start 连续累加，所以重置点必须与之对齐。
  - 若某一范围内只有 1 条，保持原样（那是真正的独立条目）
  - 原本就已递增的（1. 2. 3.）不动
"""
import re
import sys

# 同时识别 `1. ` 与 `1） ` 两种编号（中文右括号在原文里很常见）
NUM_ITEM = re.compile(r"^(\s*)(\d+)[.）)]\s+(.*)$")
LIST_ITEM = re.compile(r"^\s*(\d+[.）)]|[-*+])\s+\S")
OL_ITEM = re.compile(r"^\s*\d+[.）)]\s+\S")
# 只在 ## 级别重置 —— 与 data.ts 的 body 分段规则一致
# （body 是按 ## 切分的，react-markdown 在每个 body 段内连续累加编号）
HEADING = re.compile(r"^##\s")


def renumber(md: str) -> str:
    """规范化有序列表编号。

    背景：飞书里作者把「一串 1. 」当项目符号（编辑器自动显示 1/2/3），
    导出成 Markdown 后它们全都是 `1.`。

    规则与 react-markdown 的渲染行为对齐：
      - 在**同一个 ## 标题范围内**连续累加编号
        （react-markdown 会把被正文隔开的多个 ol 用 start 串起来，
         而这些 start 值来自数据里写的数字，所以数据必须写对）
      - 遇到下一个 ## 才重置为 1
      - 无序列表项（- / * / +）不参与编号，但它会打断有序序列

    为什么按 ## 而不是按所有标题：body 数组是按 ## 切分的，
    react-markdown 在每个 body 段内对 ol 连续编号。
    """
    lines = md.split("\n")
    out = []
    counter = 0
    for ln in lines:
        # 新的 ## 章节 -> 重置编号
        if re.match(r"^##\s", ln):
            counter = 0
            out.append(ln)
            continue
        m = NUM_ITEM.match(ln)
        if m:
            counter += 1
            out.append(f"{m.group(1)}{counter}. {m.group(3)}")
            continue
        # 无序列表项：打断有序序列（与渲染行为一致）
        if re.match(r"^\s*[-*+]\s+\S", ln):
            counter = 0
        out.append(ln)
    return "\n".join(out)


if __name__ == "__main__":
    for path in sys.argv[1:]:
        md = open(path, encoding="utf-8").read()
        before = len(re.findall(r"^1\.\s", md, re.M))
        res = renumber(md)
        after = len(re.findall(r"^1\.\s", res, re.M))
        open(path, "w", encoding="utf-8").write(res)
        print(f"  {path}: '1. ' 数量 {before} -> {after}")
