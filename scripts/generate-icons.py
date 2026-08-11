#!/usr/bin/env python3
"""从 PixelArt.tsx 的 AVATAR_PIXELS 数据生成 favicon / apple-icon PNG。

用法: python3 scripts/generate-icons.py
产物: app/icon.png (64x64, 透明背景), app/apple-icon.png (180x180, 深色背景)
"""
from PIL import Image

# 与 components/PixelArt.tsx 的 AVATAR_PIXELS / AVATAR_COLORS 保持同步
AVATAR_PIXELS = [
    "____gggg____pppp", "___gggggg__pppp_", "___gggggggpppp__", "__bbbbbbbbbbbb__",
    "_bwwwwwwwwwwwwb_", "_bwwwwwwwwwwwwb_", "_bwwbwwwwbwwwwb_", "_bwwbwwwwbwwwwb_",
    "_bwwwwwwwwwwwwb_", "_bwwwwddwwwwwb__", "_bwwwwwwwwwwwb__", "__bwwffffffwb___",
    "__bbwwwwwwwbb___", "___bbbbbbbb____", "____bdddddb____", "_____bbbbb_____",
]
AVATAR_COLORS = {
    "_": None,  # transparent
    "g": "#6ee7b7", "p": "#a78bfa", "w": "#ededef",
    "b": "#09090b", "d": "#3a3a44", "f": "#fbbf24",
}


def render(scale: int, background) -> Image.Image:
    w = h = 16 * scale
    img = Image.new("RGBA", (w, h), background)
    for y, row in enumerate(AVATAR_PIXELS):
        for x, ch in enumerate(row):
            color = AVATAR_COLORS.get(ch)
            if color is None:
                continue
            img.paste(Image.new("RGBA", (scale, scale), color), (x * scale, y * scale))
    img = img.resize((w, h), Image.NEAREST)  # keep edges crisp
    return img


if __name__ == "__main__":
    # favicon: 透明背景, 4x 缩放 (=64x64)
    favicon = render(4, (0, 0, 0, 0))
    favicon.save("app/icon.png")

    # favicon.ico: 多尺寸, 覆盖浏览器优先的 ico 格式
    favicon.save("app/favicon.ico", sizes=[(16, 16), (32, 32), (64, 64)])

    # apple-icon: 180x180, 深色背景 + 居中 4x 像素头像, 四周留边
    tile = render(4, (0, 0, 0, 0))  # 64x64 transparent avatar
    canvas = Image.new("RGBA", (180, 180), "#09090b")
    canvas.paste(tile, ((180 - 64) // 2, (180 - 64) // 2), tile)
    canvas.save("app/apple-icon.png")

    print("generated: app/icon.png, app/favicon.ico, app/apple-icon.png")