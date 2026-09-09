import { IMAGES, imagePath } from "../images";

/**
 * Renders a <picture> with AVIF + WebP variants and a `srcset`, so the
 * browser only downloads the size it actually needs for the viewport.
 *
 * - `name`     key from src/images.js
 * - `sizes`    the standard `sizes` attribute (rendered CSS width per breakpoint)
 * - `priority` true for the above-the-fold hero image (eager + high priority);
 *              everything else is lazy-loaded.
 */
export default function ResponsiveImage({
  name,
  alt,
  sizes,
  className = "",
  priority = false,
}) {
  const { widths, width, height } = IMAGES[name];
  const largest = widths[widths.length - 1];
  const srcSet = (ext) =>
    widths.map((w) => `${imagePath(`${name}-${w}.${ext}`)} ${w}w`).join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <img
        src={imagePath(`${name}-${largest}.webp`)}
        srcSet={srcSet("webp")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
