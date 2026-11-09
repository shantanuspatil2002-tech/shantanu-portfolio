import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'

const A = 'Most people get into consulting and then learn an industry.'.split(' ')
const B = 'I learned the industry first.'.split(' ')

function W({ w, i, n, p, accent }: { w: string; i: number; n: number; p: MotionValue<number>; accent?: boolean }) {
  const start = (i / n) * 0.8
  const o = useTransform(p, [start, start + 0.12], [0.12, 1])
  const y = useTransform(p, [start, start + 0.12], [14, 0])
  return <motion.span style={{ opacity: o, y }} className={`mr-[.26em] inline-block ${accent ? 'text-accent' : ''}`}>{w}</motion.span>
}

/** A pinned statement whose words light up as you scroll. */
export default function ScrollQuote() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const all = [...A, ...B]
  return (
    <section ref={ref} aria-label="The thesis" className="stage relative border-t border-line" style={{ height: reduce ? 'auto' : '170vh' }}>
      <div className={`${reduce ? 'py-24' : 'sticky top-0 flex h-screen items-center'}`}>
        <div className="section-shell">
          <div className="stat mb-8 text-[10px] uppercase tracking-[.24em] text-accent">The thesis</div>
          <p className="max-w-5xl font-serif text-[clamp(2.2rem,5.6vw,5.2rem)] font-medium leading-[1.04] tracking-[-.04em]">
            {all.map((w, i) => reduce ? <span key={i} className={`mr-[.26em] inline-block ${i >= A.length ? 'text-accent' : ''}`}>{w}</span> : <W key={i} w={w} i={i} n={all.length} p={scrollYProgress} accent={i >= A.length} />)}
          </p>
        </div>
      </div>
    </section>
  )
}
