#!/usr/bin/env python3
"""
Generate resized AVIF + WebP variants of the large source artwork.

Usage:  python3 scripts/optimize-images.py            (requires: pip install pillow)

Sources live in `assets/images-src/` (original, full-resolution PNGs).
Outputs go to `public/images/` as `<name>-<width>.avif|webp`, where <width>
is the rendered width in CSS pixels x2 (for retina screens). A width larger
than the source is clamped to the source width.

The script also writes `src/images.json` (name -> emitted widths + the size
of the largest variant), which src/components/ResponsiveImage.js reads to
build its `srcset` and width/height attributes.
"""
import json
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit("Pillow is required: pip install pillow")

Image.MAX_IMAGE_PIXELS = None

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "images-src"
OUT = ROOT / "public" / "images"
MANIFEST = ROOT / "src" / "images.json"

# name -> (source file, widths to emit, crop transparent padding?)
IMAGES = {
    "illustration": ("illustration.png", [480, 800, 1400], True),
    "about-photo": ("about-photo.png", [720, 1440], False),
    "project1": ("project1.png", [300, 500], True),
    "project2": ("project2.png", [560, 1128], True),
    "project3": ("project3.png", [600, 1000, 1500], True),
    "gravestone": ("gravestone.png", [600, 1200], False),
    "core-tools": ("core-tools.png", [520, 1040], True),
}

WEBP_QUALITY = 82
AVIF_QUALITY = 62


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for name, (src_name, widths, crop) in IMAGES.items():
        src = SRC / src_name
        if not src.exists():
            print(f"!! {name}: {src.relative_to(ROOT)} is missing – skipped")
            continue
        im = Image.open(src).convert("RGBA")
        if crop:
            bbox = im.getbbox()
            if bbox:
                im = im.crop(bbox)
        alpha_used = im.getchannel("A").getextrema()[0] < 255
        if not alpha_used:
            im = im.convert("RGB")
        emitted = []
        for w in sorted({min(w, im.width) for w in widths}):
            h = round(im.height * w / im.width)
            emitted.append((w, h))
            resized = im.resize((w, h), Image.LANCZOS)
            webp = OUT / f"{name}-{w}.webp"
            avif = OUT / f"{name}-{w}.avif"
            resized.save(webp, "WEBP", quality=WEBP_QUALITY, method=6)
            resized.save(avif, "AVIF", quality=AVIF_QUALITY, speed=4)
            print(f"{webp.name:26s} {w}x{h}  webp={webp.stat().st_size//1024:5d}K  avif={avif.stat().st_size//1024:5d}K")
        manifest[name] = {
            "widths": [w for w, _ in emitted],
            "width": emitted[-1][0],
            "height": emitted[-1][1],
        }
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"wrote {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
