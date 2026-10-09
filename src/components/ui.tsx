import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fallback = window.setTimeout(() => setShown(true), 700)
    if (typeof IntersectionObserver === 'undefined') return () => window.clearTimeout(fallback)
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setShown(true); io.disconnect() }
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => { window.clearTimeout(fallback); io.disconnect() }
  }, [])
  return <div ref={ref} className={`${className} ${shown ? 'animate-fade-up' : 'opacity-0'}`}>{children}</div>
}

export function Section({ id, children, className = '', blueprint = false }: {
  id: string; children: ReactNode; className?: string; blueprint?: boolean
}) {
  return (
    <section id={id} className={`relative section-pad scroll-mt-20 ${className}`}>
      {blueprint && <div aria-hidden className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0" />}
      <div className="section-shell">{children}</div>
    </section>
  )
}

export function SectionHeading({ index, title, lede, eyebrow }: { index: string; title: string; lede?: string; eyebrow: string }) {
  const label = eyebrow
  return (
    <header className="section-heading">
      <div className="section-heading__index">
        <span className="stat text-xs text-accent">{index}</span>
        <span className="section-heading__rule" />
        <span className="stat text-[9px] uppercase tracking-[0.18em] text-faint">{label}</span>
      </div>
      <div className="section-heading__body">
        <h2>{title}</h2>
        {lede && <p>{lede}</p>}
      </div>
    </header>
  )
}

export function Stat({ value, label, size = 'md', className = '' }: {
  value: string; label?: string; size?: 'sm' | 'md' | 'lg'; className?: string
}) {
  const valueSize = size === 'lg' ? 'text-4xl sm:text-5xl' : size === 'sm' ? 'text-xl' : 'text-3xl'
  return (
    <div className={className}>
      <div className={`stat font-semibold leading-none text-ink ${valueSize}`}>{value}</div>
      {label && <div className="mt-2 max-w-[15rem] text-[10px] font-medium uppercase tracking-[0.13em] leading-relaxed text-faint">{label}</div>}
    </div>
  )
}

export function ScaleBar({ label }: { label?: string }) {
  return (
    <div className="section-shell">
      <div className="flex items-center gap-4">
        <div aria-hidden className="scale-bar flex-1" />
        {label && <span className="stat shrink-0 text-[10px] uppercase tracking-[0.16em] text-faint">{label}</span>}
        <div aria-hidden className="scale-bar flex-1" />
      </div>
    </div>
  )
}
