import { useEffect, useRef, useState } from 'react'
import { prodmaxCompare as c } from '../content'

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/** Drag from "before" to "after" on the Prodmax engagement. Plays once on view, then it is yours. */
export default function BeforeAfter() {
  const [t, setT] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const touched = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setT(1); return }
    let raf = 0
    const io = new IntersectionObserver((e) => {
      if (!e.some((x) => x.isIntersecting)) return
      io.disconnect()
      const start = performance.now() + 500
      const tick = (now: number) => {
        if (touched.current) return
        const p = Math.min(1, Math.max(0, (now - start) / 1600))
        setT(1 - Math.pow(1 - p, 3))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [])

  const util = lerp(c.utilisation.before, c.utilisation.after, t)
  const profit = lerp(c.profit.before, c.profit.after, t)
  return (
    <div ref={ref} className="border border-line bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="stat text-[10px] uppercase tracking-[.2em] text-accent">Drag: before → after</span>
        <span className="stat text-[10px] uppercase tracking-[.18em] text-faint">12 weeks</span>
      </div>
      <div className="mt-6 space-y-6">
        <div>
          <div className="flex items-end justify-between"><span className="text-sm font-medium">{c.utilisation.label}</span><b className="stat text-2xl">{util.toFixed(0)}{c.utilisation.unit}</b></div>
          <div className="bar-track mt-2"><div className="h-full bg-accent" style={{ width: `${util}%` }} /></div>
        </div>
        <div>
          <div className="flex items-end justify-between"><span className="text-sm font-medium">{c.profit.label}</span><b className="stat text-2xl">{c.profit.prefix}{profit.toFixed(2)}{c.profit.unit}</b></div>
          <div className="bar-track mt-2"><div className="h-full bg-ink" style={{ width: `${(profit / c.profit.after) * 100}%` }} /></div>
        </div>
      </div>
      <input
        className="drag mt-5"
        type="range" min={0} max={100} value={Math.round(t * 100)}
        aria-label="Compare before and after the Prodmax engagement"
        onChange={(e) => { touched.current = true; setT(Number(e.target.value) / 100) }}
      />
      <div className="stat flex justify-between text-[10px] uppercase tracking-[.16em] text-faint"><span>Before</span><span>After</span></div>
    </div>
  )
}
