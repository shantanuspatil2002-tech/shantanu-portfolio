import { useEffect, useRef } from 'react'

/** Thin accent bar showing how far through the page you are. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"><div ref={ref} className="h-full origin-left bg-accent" style={{ transform: 'scaleX(0)' }} /></div>
}
