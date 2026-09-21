/**
 * Shared image chrome for the portfolio - the only place styling an <img>
 * lives, so every photo/screenshot on the site reads as one system instead
 * of bolted-on. Matches the existing exhibit-card language: 1px border-line
 * border, no corner radius (the site's cards are sharp-cornered), and the
 * same small mono/uppercase/faint caption style used for GroupLabel/Row
 * labels elsewhere. Every color here is a theme-aware CSS variable via
 * Tailwind (border-line, bg-surface-2, text-faint), so it works unmodified
 * in both themes.
 */

type PortfolioImageProps = {
  src: string
  alt: string
  width: number
  height: number
  /** e.g. 'aspect-[4/5]', 'aspect-[3/1]' - if omitted, the frame sizes to the
   *  image's natural proportions at full column width (no cropping). */
  aspectClassName?: string
  fit?: 'object-cover' | 'object-contain'
  objectPosition?: string
  /** Subtle desaturation/warm tone so a photo sits inside the site's muted
   *  palette rather than popping out of it (used for the headshot). */
  desaturate?: boolean
  /** Gradient fade to the page background at the bottom edge - for a
   *  deliberately cropped "preview" of a taller image. */
  fadeBottom?: boolean
  /** Wraps the frame in a link that opens the full image in a new tab. */
  href?: string
  caption?: string
  className?: string
}

export function PortfolioImage({
  src,
  alt,
  width,
  height,
  aspectClassName = '',
  fit = 'object-cover',
  objectPosition = 'object-center',
  desaturate = false,
  fadeBottom = false,
  href,
  caption,
  className = '',
}: PortfolioImageProps) {
  const frame = (
    <div className={`relative overflow-hidden border border-line bg-surface-2 ${aspectClassName}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={[
          'block w-full',
          aspectClassName ? `h-full ${fit} ${objectPosition}` : 'h-auto',
          desaturate ? 'saturate-[0.55] sepia-[0.12]' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      />
      {fadeBottom && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-bg sm:h-20"
        />
      )}
    </div>
  )

  return (
    <figure className={className}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="block transition-opacity hover:opacity-90"
        >
          {frame}
        </a>
      ) : (
        frame
      )}
      {caption && (
        <figcaption className="stat mt-2 text-[11px] uppercase tracking-widest text-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
