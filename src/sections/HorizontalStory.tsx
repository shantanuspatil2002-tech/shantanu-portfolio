import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'
import { chapterMarks, chapters, type Chapter } from '../content'
import CountUp from '../components/CountUp'

const openCase = (id: string) => {
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  window.setTimeout(() => window.dispatchEvent(new CustomEvent('open-case', { detail: id })), 650)
}

function Panel({ c }: { c: Chapter }) {
  return (
    <article className="relative flex h-full w-full shrink-0 items-center overflow-hidden px-5 sm:px-10 lg:w-screen lg:px-16" aria-labelledby={`p-${c.id}`}>
      <div aria-hidden className="outline-word absolute -left-4 top-6 text-[30vw] lg:text-[22vw]">{c.verb}</div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          {chapterMarks[c.id] && <div className="mb-5 flex items-center gap-6">{chapterMarks[c.id].map((m) => <img key={m.name} src={m.src} alt={m.name} style={{ maxHeight: m.h * 0.7 }} className="w-auto opacity-90" />)}</div>}
          <div className="flex items-center gap-3"><span className="stat text-sm text-accent">{c.index}</span><span className="h-px w-10 bg-accent" /><span className="stat text-[10px] uppercase tracking-[.2em] text-faint">{c.verb}</span></div>
          <h2 id={`p-${c.id}`} className="mt-5 font-serif text-[clamp(2rem,4.2vw,3.8rem)] font-semibold leading-[1.02] tracking-[-.035em]">{c.headline}</h2>
          <div className="mt-3 text-sm text-faint"><span className="font-medium text-muted">{c.org}</span> · <span className="stat">{c.dates}</span></div>
          <ul className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-5">
            {c.stats.map((s) => (
              <li key={s.label}>
                <div className="stat text-[clamp(1.4rem,2.8vw,2.5rem)] font-semibold leading-none"><CountUp stat={s} /></div>
                <div className="mt-2 text-[10px] font-medium uppercase leading-relaxed tracking-[.1em] text-faint">{s.label}</div>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => openCase(c.caseId)} className="mt-7 inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[.14em] transition-colors hover:border-accent hover:text-accent">{c.caseLabel} <span aria-hidden>→</span></button>
        </div>
        <figure className="relative">
          <img src={c.image.src} alt={c.image.alt} loading="lazy" className={`aspect-[4/3] max-h-[52vh] w-full object-cover shadow-[0_30px_90px_rgba(0,0,0,.55)] ${c.image.position ?? ''}`} />
          <figcaption className="stat mt-3 text-[10px] uppercase tracking-[.14em] text-faint">{c.image.caption}</figcaption>
        </figure>
      </div>
    </article>
  )
}

function Dot({ i, p, label }: { i: number; p: MotionValue<number>; label: string }) {
  const o = useTransform(p, [Math.max(0, (i - 0.5) / 4), i / 4 + 0.01, Math.min(1, (i + 1) / 4)], [0.35, 1, 0.35])
  return <motion.div style={{ opacity: o }} className="stat text-[10px] uppercase tracking-[.2em]">{label}</motion.div>
}

/** Pinned horizontal story on desktop; plain vertical stack on mobile or with reduced motion. */
export default function HorizontalStory() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(chapters.length - 1) * 100}vw`])
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  const header = (
    <div className="section-shell pt-20 sm:pt-28">
      <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">The story</div>
      <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1] tracking-[-.04em]">Four chapters. One habit: find the constraint, then fix it.</h2>
    </div>
  )

  return (
    <div id="story" className="stage scroll-mt-0">
      {header}
      {/* Mobile and reduced motion: stacked */}
      <div className={`${reduce ? '' : 'lg:hidden'} mt-10 divide-y divide-line`}>
        {chapters.map((c) => <div key={c.id} className="py-14"><Panel c={c} /></div>)}
      </div>
      {/* Desktop: pinned horizontal scroll */}
      {!reduce && (
        <div ref={ref} className="relative hidden lg:block" style={{ height: `${chapters.length * 100}vh` }}>
          <div className="sticky top-0 h-screen overflow-hidden">
            <motion.div style={{ x }} className="flex h-full w-max will-change-transform">
              {chapters.map((c) => <Panel key={c.id} c={c} />)}
            </motion.div>
            <div className="absolute inset-x-16 bottom-8 z-20">
              <div className="flex justify-between text-faint">{chapters.map((c, i) => <Dot key={c.id} i={i} p={scrollYProgress} label={`${c.index} ${c.verb}`} />)}</div>
              <div className="mt-3 h-px bg-line"><motion.div style={{ scaleX: bar }} className="h-px origin-left bg-accent" /></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
