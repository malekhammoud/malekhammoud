#!/usr/bin/env python3
"""
Generates a clean, flat capital M as the site mark. Four thick legs
build the M silhouette (two outer legs + two inner diagonals meeting at
an apex). Solid accent-green fill on transparency, thick enough to read
at 16px. Writes:

  public/brand-mark.svg     the vector mark (source of truth)
  public/brand-mark.png     tight rasterized crop (for og build)
  src/app/icon.png          favicon 48x48
  src/app/apple-icon.png    touch icon 192x192
"""

import math
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent

ACCENT = "#1E4D3B"  # tailwind accent (deep workshop green)

# viewBox 0 0 100 116 (aspect ≈0.86, taller than wide)
W, H = 100, 116
T = 16  # leg thickness (units)

# The letterform is clipped to a flat top edge and a flat bottom "baseline".
# Clipping every leg against these two horizontal lines is what stops the
# strokes from ending in diagonal slices — the cut-off look.
TOP, BOTTOM = 16, 100
AX = 50  # apex x (center)

# Legs are drawn generously long and poking past the clip, so the flat
# top/bottom edges are guaranteed. Outer feet splay slightly but stay in
# board.
SEGMENTS = [
    ((22, TOP), (12, BOTTOM)),   # left outer leg (splayed)
    ((22, TOP), (AX, BOTTOM)),   # left inner diagonal
    ((78, TOP), (AX, BOTTOM)),   # right inner diagonal
    ((78, TOP), (88, BOTTOM)),   # right outer leg (splayed)
]

# Only the top and bottom edges are clipped flat — side clipping would slice
# the outer feet. Clip y runs TOP..BOTTOM; the x clip is slack so nothing is
# cut laterally.
CLIP_X0, CLIP_Y0, CLIP_X1, CLIP_Y1 = -40, TOP, W + 40, BOTTOM


def quad(p0, p1, t):
    """Thick line segment as a filled quad (perpendicular thickness)."""
    (x0, y0), (x1, y1) = p0, p1
    dx, dy = x1 - x0, y1 - y0
    length = math.hypot(dx, dy)
    nx, ny = -dy / length, dx / length  # perpendicular
    hx, hy = nx * t / 2, ny * t / 2
    return [
        (x0 + hx, y0 + hy),
        (x1 + hx, y1 + hy),
        (x1 - hx, y1 - hy),
        (x0 - hx, y0 - hy),
    ]


def fmt_pt(p):
    return f"{p[0]:.4f} {p[1]:.4f}"


paths = []
for p0, p1 in SEGMENTS:
    q = quad(p0, p1, T)
    paths.append("M " + " L ".join(fmt_pt(p) for p in q) + " Z")

svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <clipPath id="flat"><rect x="{CLIP_X0}" y="{CLIP_Y0}" width="{CLIP_X1 - CLIP_X0}" height="{CLIP_Y1 - CLIP_Y0}"/></clipPath>
  <g clip-path="url(#flat)"><path d="{" ".join(paths)}" fill="{ACCENT}" fill-rule="nonzero"/></g>
</svg>
'''

svg_path = ROOT / "public" / "brand-mark.svg"
svg_path.write_text(svg, encoding="utf-8")
print("wrote", svg_path, f"({len(svg)} bytes)")


def render(px):
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as f:
        tmp = f.name
    rsvg = subprocess.run(
        ["rsvg-convert", "-w", str(px), "-h", str(round(px * H / W)), str(svg_path), "-o", tmp],
        check=False,
    )
    if rsvg.returncode != 0:
        sys.exit("rsvg-convert failed")
    im = Image.open(tmp).convert("RGBA")
    Path(tmp).unlink(missing_ok=True)
    return im


def tight(im, pad_frac=0.03):
    import numpy as np

    a = np.asarray(im)
    al = a[..., 3]
    ys, xs = np.where(al > 30)
    if not len(xs):
        return im
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    pad = int(max((x1 - x0), (y1 - y0)) * pad_frac)
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(im.size[0], x1 + pad)
    y1 = min(im.size[1], y1 + pad)
    return im.crop((x0, y0, x1, y1))


def fit(canvas, margin):
    C = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
    avail = canvas - margin
    w, h = mark.size
    sc = min(avail / w, avail / h)
    nw, nh = int(w * sc), int(h * sc)
    r = mark.resize((nw, nh), Image.LANCZOS)
    C.paste(r, ((canvas - nw) // 2, (canvas - nh) // 2), r)
    return C


# brand-mark.png: high-res tight crop
full = render(1024)
mark = tight(full)
mark.save(ROOT / "public" / "brand-mark.png")
print("wrote public/brand-mark.png", mark.size)

# favicon 48 + apple 192
icon = fit(48, 9)
a = list(icon.getdata())
icon.save(ROOT / "src/app/icon.png")
apple = fit(192, 22)
apple.save(ROOT / "src/app/apple-icon.png")
print("wrote src/app/icon.png, src/app/apple-icon.png")