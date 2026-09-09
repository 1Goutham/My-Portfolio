# Goutham G – Portfolio

Single-page portfolio built with Create React App and Tailwind CSS.

```bash
npm install
npm start        # dev server
npm run build    # production build in ./build
```

## Images

Large artwork is **not** served from the original PNGs. The originals live in
`assets/images-src/`, and `scripts/optimize-images.py` turns them into resized
AVIF + WebP variants in `public/images/` (about 1.5 MB in total instead of 38 MB).

To add or replace artwork:

1. Drop the full-resolution PNG in `assets/images-src/`.
2. Register it in `IMAGES` inside `scripts/optimize-images.py` (which widths to emit)
   and in `src/images.js` (same widths + the largest variant's dimensions).
3. Run `pip install pillow && python3 scripts/optimize-images.py`.
4. Render it with `<ResponsiveImage name="..." sizes="..." alt="..." />`.
