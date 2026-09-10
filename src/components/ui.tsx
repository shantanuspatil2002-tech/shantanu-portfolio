import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Reveal-on-scroll entrance. Content is only ever hidden briefly: it reveals on
 * IntersectionObserver intersection, and unconditionally after a short fallback
 * timeout, so a browser where IO never fires (or an unusual scroll container)
 * still shows everything. CSS disables the motion under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: never keep content hidden longer than this - covers browsers
    // with no IntersectionObserver and unusual scroll containers where it never
    // fires.
    const fallback = window.setTimeout(() => setShown(true), 600)

    let io: IntersectionObserver | undefined
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setShown(true)
              io?.disconnect()
            }
          }
        },
        { threshold: 0, rootMargin: '0px 0px -10% 0px' },
      )
      io.observe(el)
    }

    return () => {
      window.clearTimeout(fallback)
      io?.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className={`${className} ${shown ? 'animate-fade-up' : 'opacity-0'}`}>
      {children}
    </div>
  )
}

export function Section({
  id,
  children,
  className = '',
  blueprint = false,
}: {
  id: string
  children: ReactNode
  className?: string
  /** blueprint sections carry the faint engineering grid */
  blueprint?: boolean
}) {
  return (
    <section
      id={id}
      className={`relative section-pad scroll-mt-20 ${className}`}
    >
      {blueprint && (
        <div
          aria-hidden="true"
          className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0"
        />
      )}
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string
  title: string
  lede?: string
}) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-3">
        <span className="stat text-sm text-accent">{index}</span>
        <span aria-hidden className="h-px flex-1 max-w-[80px] bg-line" />
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lede && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lede}</p>}
    </header>
  )
}

/** Monospace metric - the site's single visual tell for "verified fact". */
export function Stat({
  value,
  label,
  size = 'md',
  className = '',
}: {
  value: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const valueSize =
    size === 'lg'
      ? 'text-3xl sm:text-4xl'
      : size === 'sm'
        ? 'text-lg'
        : 'text-2xl'
  return (
    <div className={className}>
      <div className={`stat font-semibold leading-none text-ink ${valueSize}`}>{value}</div>
      {label && (
        <div className="mt-2 text-xs uppercase tracking-wide text-faint">{label}</div>
      )}
    </div>
  )
}

/** Ruled divider with tick marks - a drawing's scale bar. Marks the blueprint→boardroom shift. */
export function ScaleBar({ label }: { label?: string }) {
  return (
    <div className="mx-auto w-full max-w-content px-5 sm:px-8">
      <div className="flex items-center gap-4">
        <div aria-hidden className="scale-bar flex-1" />
        {label && (
          <span className="stat shrink-0 text-[11px] uppercase tracking-widest text-faint">
            {label}
          </span>
        )}
        <div aria-hidden className="scale-bar flex-1" />
      </div>
    </div>
  )
}
