# -*- coding: utf-8 -*-
"""把连续的正文段落合并成一段。

原文在飞书里常把一句话写成独立块，导出后每句之间都有空行，
渲染出来就是「一段一句」，看起来松散且有多余空行。

规则：
  - 连续的「普通正文段落」合并为一段（用空格连接，不加换行）
  - 以下块视为边界，不参与合并，也不跨越：
      标题(#) / 列表(- * + 1.)
      表格(|) / 引用(>)
      图片(![) / HTML(<)
      代码块(```)
      分隔线(---)
  - 单行内已有换行的块保持原样（本身就不是「一句一块」）
"""
import re
import sys


# 边界：标题 / 列表 / 表格 / 引用 / 图片 / HTML / 代码块 / 分隔线
# 注意 `\d+[.）)]` 后不强制要求空格 —— 原文大量写作 `1.**加粗**`
BOUNDARY = re.compile(
    r"^\s*(#{1,6}\s|[-*+]\s|\d+[.）)]|\||>|!\[|<|```|---+\s*$)"
)


def is_plain(block: str) -> bool:
    """判断一个块是否为「普通正文段落」。"""
    b = block.strip()
    if not b:
        return False
    if BOUNDARY.match(b):
        return False
    # 多行块本身已是完整段落，不动
    if "\n" in b:
        return False
    return True


def merge_paragraphs(md: str) -> str:
    blocks = md.split("\n\n")
    out = []
    buf = []          # 累积待合并的正文块

    def flush():
        if buf:
            # 用空格连接同一段内的句子；中文之间不加空格更自然，
            # 但原文句末已有「。」，直接拼接即可
            out.append("".join(buf))
            buf.clear()

    for raw in blocks:
        b = raw.strip()
        if not b:
            continue
        if is_plain(b):
            # 若上一块以 ** 结尾、本块以 ** 开头，说明是「关闭符 + 开启符」
            # 直接拼接会得到 ****（渲染失败），中间必须断开。
            if buf and buf[-1].rstrip().endswith("**") and b.lstrip().startswith("**"):
                flush()
            buf.append(b)
        else:
            flush()
            out.append(b)
    flush()
    return "\n\n".join(out)


def separate_list_items(md: str) -> str:
    """确保列表项之间「紧凑相邻」，不被空行拆散。

    Markdown / react-markdown 的行为：
      - 同一组的列表项**紧密相邻**（项间无空行）-> 渲染成**一个** <ol>/<ul>，编号连续
      - 项间有空行或有正文插入     -> 拆成多个 <ol>，各自重新计数（导致「全是 1.」）

    所以这里做的是「**去掉**列表项之间的空行」，让同组列表保持连续。
    注意：列表项与其后的**正文**之间仍保留空行（否则正文会被吸进列表项）。
    """
    LISTITEM = re.compile(r"^\s*(\d+[.）)]|[-*+])\s*\S")
    lines = md.split("\n")
    out = []
    i = 0
    n = len(lines)
    while i < n:
        ln = lines[i]
        if LISTITEM.match(ln):
            # 收集同组列表项：允许中间隔空行（去掉），遇到正文/标题则停止。
            # 注意：unordered(-) 与 ordered(1.) 混排时要**断开**成两组，
            # 否则 react-markdown 会把后面的有序列表当成同一组的延续，
            # 导致编号跨组累加、出现「断档」。
            items = []
            j = i
            cur_kind = None
            while j < n:
                mm = LISTITEM.match(lines[j])
                if not mm:
                    break
                kind = "ul" if mm.group(0).lstrip().startswith(("-", "*", "+")) else "ol"
                if cur_kind is None:
                    cur_kind = kind
                elif kind != cur_kind:
                    break          # 标记类型变了 -> 新的一组
                items.append(lines[j])
                j += 1
                # 跳过空行（不输出，实现紧凑）
                while j < n and not lines[j].strip():
                    j += 1
            out.extend(items)
            # 列表组结束后补一个空行，与后续内容分隔
            if j < n and lines[j].strip():
                out.append("")
            i = j
        else:
            out.append(ln)
            i += 1
    return "\n".join(out)


if __name__ == "__main__":
    for path in sys.argv[1:]:
        md = open(path, encoding="utf-8").read()
        before = len([x for x in md.split("\n\n") if x.strip()])
        res = separate_list_items(merge_paragraphs(md))
        after = len([x for x in res.split("\n\n") if x.strip()])
        open(path, "w", encoding="utf-8").write(res)
        print(f"  {path}: 块数 {before} -> {after}")
