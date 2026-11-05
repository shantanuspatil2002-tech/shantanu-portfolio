import { useEffect, useRef, useState } from 'react'
import type { ChapterStat } from '../content'

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Counts up to the resume figure when it scrolls into view. Final value is always the real one. */
export default function CountUp({ stat, className = '' }: { stat: ChapterStat; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const target = stat.to ?? 0
  const decimals = stat.decimals ?? 0
  const [value, setValue] = useState(stat.text ? 0 : reduced() ? target : 0)

  useEffect(() => {
    if (stat.text || reduced()) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let done = false
    const run = () => {
      if (done) return
      done = true
      const start = performance.now()
      const dur = 1400
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur)
        setValue(target * (1 - Math.pow(1 - t, 3)))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const fallback = window.setTimeout(() => { setValue(target); done = true }, 4000)
    const io = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { window.clearTimeout(fallback); run(); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf); window.clearTimeout(fallback) }
  }, [stat.text, target])

  if (stat.text) return <span className={className}>{stat.text}</span>
  return (
    <span ref={ref} className={className}>
      {stat.prefix}
      {value.toFixed(decimals)}
      {stat.suffix}
    </span>
  )
}
