#!/usr/bin/env python3
"""
Builds public/og.png (1200x630): the cursor-M mark centered, the wordmark
above, the accent rule beneath it, and the tagline below. Fonts are Noto
Sans / Noto Sans Mono, stand-ins for the site's Archivo and Martian Mono.

The mark itself is NOT drawn here: it is cropped from src/app/icon.png
(block cells 1..14) and upscaled, so the OG image can never drift from
the favicon.
"""

from PIL import Image, ImageDraw, ImageFont

INK = (23, 25, 29)
SURFACE = (234, 236, 235)
ACCENT = (30, 77, 59)
MUTE = (90, 96, 102)

W, H = 1200, 630

FONT_DISPLAY = ImageFont.truetype("/usr/share/fonts/noto/NotoSans-Bold.ttf", 88)
FONT_MONO = ImageFont.truetype("/usr/share/fonts/noto/NotoSansMono-Bold.ttf", 30)


def tracked_size(font, text, tracking):
    total = 0
    for ch in text:
        total += font.getlength(ch) + tracking
    return total - tracking


def draw_tracked(draw, font, xy, text, tracking, fill):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking


def crop_mark(block_px):
    """The brand mark from public/brand-mark.png, scaled to block_px wide."""
    mark = Image.open("public/brand-mark.png").convert("RGBA")
    ratio = mark.height / mark.width
    return mark.resize((block_px, int(block_px * ratio)), Image.LANCZOS)


img = Image.new("RGB", (W, H), SURFACE)
draw = ImageDraw.Draw(img)


def center_x(font, text, tracking):
    return (W - tracked_size(font, text, tracking)) / 2


# Wordmark.
title = "MALEK HAMMOUD"
tw = tracked_size(FONT_DISPLAY, title, 10)
draw_tracked(draw, FONT_DISPLAY, ((W - tw) / 2, 96), title, 10, INK)

# Accent rule (the hero's draw-in line).
rule_w = 96
for y in range(214, 217):
    draw.rectangle(((W - rule_w) // 2, y, (W + rule_w) // 2, y + 1), fill=ACCENT)

# Mark, centered.
block = 205
mark_img = crop_mark(block)
img.paste(mark_img, ((W - block) // 2, 260), mark_img)

# Tagline.
tag = "SOFTWARE & SYSTEMS BUILDER"
tw = tracked_size(FONT_MONO, tag, 6)
draw_tracked(draw, FONT_MONO, ((W - tw) / 2, 514), tag, 6, MUTE)

img.save("public/og.png")
print("wrote public/og.png")