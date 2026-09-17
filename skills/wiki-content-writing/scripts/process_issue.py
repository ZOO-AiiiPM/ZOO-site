# -*- coding: utf-8 -*-
"""把一期原文处理成「一篇长文」（沿用 02 期的形态）：

1) 剥掉模板内容：<title>、<callout> 署名、合集目录块、封面/二维码图
2) 标题层级归一化：
     大节            -> ##    （原文的 # 一级标题；或 ## 里以「一、二、」开头的）
     原 ##           -> ###
     原 ###          -> ####
     原 ####         -> #####
3) 给 ## ~ ##### 加多级编号；「小结」不编号
"""
import re
import sys


def strip_template(md: str) -> str:
    lines = md.split("\n")
    out = []
    in_callout = False
    in_dir = False
    for ln in lines:
        s = ln.strip()

        # <title>...</title>
        if re.match(r"^<title>.*</title>$", s):
            continue
        # <callout ...> ... </callout>
        if s.startswith("<callout"):
            in_callout = True
            continue
        if in_callout:
            if s.startswith("</callout>"):
                in_callout = False
            continue
        # 合集目录块：从「▌合集目录」起，到下一个一级标题为止
        if re.match(r"^#\s*▌合集目录\s*$", s):
            in_dir = True
            continue
        if in_dir:
            if re.match(r"^#\s+", s):
                in_dir = False  # 目录结束，这一行继续往下处理
            else:
                continue
        # 纯飞书图片（封面 / 二维码 / 品牌标识）—— 一律删除
        if re.match(r"^!\[.*\]\(https://feishu\.cn/file/.*\)\s*$", s):
            continue
        # 推广文案：扫二维码咨询 / 扫码关注 等（含 **加粗** 形态）
        if re.match(r"^\**\s*扫二维码.*$", s):
            continue
        # 飞书文档引用块 <cite ...></cite>（含同行残余文字）
        s = re.sub(r"<cite[^>]*>(?:</cite>)?", "", s).strip()
        if not s:
            # 空行必须保留：Markdown 靠空行区分段落与列表项，
            # 全部删掉会把「正文 + 1.列表项」粘成一段，列表就不渲染了。
            out.append("")
            continue
        out.append(s)
    return "\n".join(out)


# 视为「边界标点」的字符：出现在 ** 的紧内侧/紧外侧时会让定界符失效
PUNCT_TAIL = "：，。；！？、）】》」』…—:,.;!?%"
# 可成对包裹的引号 / 书名号
QUOTE_PAIRS = [("“", "”"), ("‘", "’"), ('"', '"'), ("'", "'"), ("《", "》"), ("「", "」"), ("『", "』")]


def _fix_pair(inner: str):
    """规范化一对加粗的边界，返回 (前置文本, 加粗内容, 后置文本)。"""
    lead = ""
    tail = ""

    # 闭合侧：内容以标点结尾 -> 标点移出（如 "性能，" -> "性能" + "，"）
    while inner and inner[-1] in PUNCT_TAIL:
        tail = inner[-1] + tail
        inner = inner[:-1]

    # 开启侧：内容以标点开头 -> 标点移出（如 "：算法" -> "：" + "算法"）
    while inner and inner[0] in PUNCT_TAIL:
        lead += inner[0]
        inner = inner[1:]

    # 引号/书名号成对包住内容 -> 移到加粗外面
    moved = False
    for open_q, close_q in QUOTE_PAIRS:
        if len(inner) >= 2 and inner[0] == open_q and inner[-1] == close_q:
            inner = inner[1:-1]
            lead = lead + open_q
            tail = close_q + tail
            moved = True
            break
    # 开号在加粗内：**「X」Y** 或 **《X**》 -> 把开号移到加粗外
    # （左定界符后紧跟标点会让 ** 失效，移出即可恢复加粗；闭号留在原处不影响）
    if not moved:
        for open_q, close_q in QUOTE_PAIRS:
            if inner.startswith(open_q):
                inner = inner[len(open_q):]
                lead = lead + open_q
                break


    # 闭合并发情况：内层还可能残留标点，再清一轮
    while inner and inner[-1] in PUNCT_TAIL:
        tail = inner[-1] + tail
        inner = inner[:-1]
    while inner and inner[0] in PUNCT_TAIL:
        lead += inner[0]
        inner = inner[1:]

    return lead, inner, tail


def _fix_line(ln: str) -> str:
    """对单行做加粗定界符规范化（按 ** 出现顺序两两配对）。

    逐对处理可避免正则跨对误匹配
    （如 **A**：**B。** 被一条正则搅在一起）。
    """
    parts = ln.split("**")
    if len(parts) < 3:
        return ln

    # split("**") 结果：[正文0, 加粗1, 正文1, 加粗2, 正文2, ...]
    # 奇数下标 = 加粗内容；偶数下标(>=2) = 两对之间的正文。
    # 逐对取 (加粗内容, 其后的正文)，把前者做边界规范化，后者原样保留。
    out = [parts[0]]
    i = 1
    while i + 1 < len(parts):
        inner, after_text = parts[i], parts[i + 1]
        lead, core, tail = _fix_pair(inner)
        if core:
            out.append(lead + "**" + core + "**" + tail + after_text)
        else:
            out.append(lead + tail + after_text)
        i += 2
    if i < len(parts):  # 落单的 **（原文里不该有，保底输出）
        out.append("**" + parts[i])

    return "".join(out)


def fix_bold_punct(md: str) -> str:
    """修复 CommonMark 不识别「加粗定界符紧邻标点/引号/空格」导致的 ** 残留。"""
    out = []
    for ln in md.split("\n"):
        # 标题行不能动开头的空格：`## **X**` 里 `#` 与 `**` 之间的空格
        # 是标题语法的一部分，删掉会让 `##**X**` 不再是标题。
        is_heading = bool(re.match(r"^\s*#{1,6}\s", ln))
        if is_heading:
            out.append(ln)
            continue
        # 0a) 序号错位： 4**） 商品删除** -> 4）**商品删除**
        #     （原文把「4）」拆成了「4」+「**）」，注意 ** 后可能还有空格）
        ln = re.sub(r"(\d+)\*\*([）)])\s*", lambda m: m.group(1) + m.group(2) + "**", ln)
        # 0b) 定界符紧跟空格： ** 商品删除** -> **商品删除**
        ln = re.sub(r"\*\*[ \t]+(?=\S)", "**", ln)
        ln = re.sub(r"(?<=\S)[ \t]+\*\*", "**", ln)
        out.append(_fix_line(ln))
    return "\n".join(out)


def fix_list_markers(md: str) -> str:
    """规范无序列表标记：行首的 `-`/`*` 后必须跟空格，否则 Markdown 不识别。

    原文（及加粗规范化后）大量出现 `-**MySQL入门**` 这种写法，
    渲染出来是一整段文字而非列表项。
    """
    out = []
    for ln in md.split("\n"):
        # 有序列表：行首「1.」「1）」等后面紧跟非空格时补一个空格。
        # 否则 Markdown 不认它是列表项，会导致整段列表解析错乱
        # （例如 3.**加粗** 会把前两项也吞进同一个 <li>）。
        m2 = re.match(r"^(\s*)(\d+)([.）)])(?=\S)", ln)
        # 排除小数（如 "2.5"）与版本号这类非列表写法
        is_decimal = bool(m2 and m2.group(3) == "." and re.match(r"^\s*\d+\.\d", ln))
        if m2 and not is_decimal and not re.match(r"^\s*#{1,6}\s", ln):
            ln = m2.group(1) + m2.group(2) + m2.group(3) + " " + ln[m2.end():]
        # 行首 -/*/+ 后紧跟非空格时补一个空格。
        # 必须排除：
        #   - **加粗**（两个星号连写，第二个才是定界符）
        #   - --- / *** 等分隔线
        m = re.match(r"^(\s*)([-*+])(?=\S)", ln)
        if m:
            rest = ln[m.end():]
            is_divider = bool(re.match(r"^[-*+]{2,}\s*$", m.group(2) + rest))
            # 行首 * 属于强调标记的情况：
            #   **加粗**   -> rest 以 * 开头
            #   *斜体*xxx  -> 行内存在「成对」的另一个 *
            # 注意：*项目B（只有开局一个 *）是列表项，不能当强调。
            # 整行（含行首）星号总数 >= 2 且不是分隔线，视为强调
            is_emphasis = m.group(2) == "*" and (
                rest.startswith("*") or ln.count("*") >= 2
            )
            if not is_divider and not is_emphasis:
                ln = m.group(1) + m.group(2) + " " + rest
        out.append(ln)
    return "\n".join(out)


def normalize_headings(md: str) -> str:
    """层级归一化，见文件头说明。"""
    lines = []
    for ln in md.split("\n"):
        m = re.match(r"^(#{1,4})\s+(.+)$", ln)
        if m:
            hashes, title = m.group(1), m.group(2).strip()
            is_cn_major = bool(re.match(r"^[一二三四五六七八九十]+、", title))
            if len(hashes) == 1 or (len(hashes) == 2 and is_cn_major):
                lines.append("## " + title)          # 大节
            else:
                lines.append("#" * (len(hashes) + 1) + " " + title)
        else:
            lines.append(ln)
    return "\n".join(lines)


def number_headings(md: str) -> str:
    """给 ## ~ ##### 加多级编号；「小结」不编号也不占号。"""
    lines = md.split("\n")
    counters = [0] * 8
    out = []
    for ln in lines:
        m = re.match(r"^(#{2,5})\s+(.+)$", ln)
        if m:
            lvl = len(m.group(1))
            title = m.group(2).strip()
            # 清掉标题里残留的 markdown 加粗与多余空格（原文大量 **xx**）
            title = title.replace("**", "").strip()
            title = re.sub(r"\s+", " ", title)
            if lvl == 2:
                # 去掉「一、」「二、」
                title = re.sub(r"^[一二三四五六七八九十]+、\s*", "", title)
            # 原文自带「（1）」「1)」这类编号的标题不再加多级编号，
            # 否则会出现「2.3.1 （1）xxx」这种双重编号。
            has_own_number = bool(
                re.match(r"^[（(]\s*\d+\s*[）)]", title)
                or re.match(r"^\d+\s*[）)]", title)
                or re.match(r"^第[一二三四五六七八九十\d]+[步条个]", title)
            )
            if title.startswith("小结") or has_own_number:
                ln = "#" * lvl + " " + title
            else:
                counters[lvl] += 1
                for d in range(lvl + 1, 8):
                    counters[d] = 0
                num = ".".join(str(counters[d]) for d in range(2, lvl + 1))
                ln = "#" * lvl + " " + num + " " + title
        out.append(ln)
    return "\n".join(out)


# 原文导出时丢失/写错的字（经与上下文比对确认）
TYPO_FIXES = [
    ("色分层模型：RBAC1", "角色分层模型：RBAC1"),
]


def fix_typos(md: str) -> str:
    """修正原文已知错字（仅在确证的情况下）。"""
    for wrong, right in TYPO_FIXES:
        md = md.replace(wrong, right)
    return md


def clean(md: str) -> str:
    md = strip_template(md)
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    md = fix_typos(md)
    md = fix_bold_punct(md)
    md = fix_list_markers(md)
    md = normalize_headings(md)
    md = number_headings(md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


if __name__ == "__main__":
    for src in sys.argv[1:]:
        md = open(src, encoding="utf-8").read()
        res = clean(md)
        counts = {lvl: len(re.findall(r"^" + "#" * lvl + " ", res, re.M)) for lvl in (2, 3, 4, 5)}
        print(
            f"  {src}: {len(md)} -> {len(res)} 字节  "
            f"##={counts[2]} ###={counts[3]} ####={counts[4]} #####={counts[5]}"
        )
