import { useRef, type ReactNode } from 'react'

/** Card with a cursor-following glow, as in Aceternity's card spotlight. */
export default function Spotlight({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty('--sx', `${e.clientX - r.left}px`)
        el.style.setProperty('--sy', `${e.clientY - r.top}px`)
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(360px circle at var(--sx,50%) var(--sy,50%), rgba(239,149,87,.18), transparent 65%)' }} />
      <div className="relative">{children}</div>
    </div>
  )
}
