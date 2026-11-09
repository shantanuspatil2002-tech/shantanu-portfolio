import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { experience } from '../content'

const LOGO = (org: string) =>
  org.startsWith('ARAI') ? { src: 'images/logos/arai.png', alt: 'ARAI', h: 24 }
  : org.startsWith('Masters') ? { src: 'images/logos/mu.png', alt: 'Masters’ Union', h: 20 }
  : null

/** Career as a vertical timeline with a beam that draws itself as you scroll. */
export default function ExperienceBeam() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const beam = useSpring(scrollYProgress, { stiffness: 110, damping: 26 })
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="experience" className="stage relative scroll-mt-0 border-t border-line py-20 sm:py-28">
      <div className="section-shell">
        <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">Experience and education</div>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1] tracking-[-.04em]">Experience and education, with the numbers.</h2>

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-14">
          <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-line sm:left-[15px]" />
          <motion.div aria-hidden style={{ scaleY: beam }} className="absolute bottom-0 left-[6px] top-0 w-[3px] origin-top bg-accent sm:left-[14px]" />
          <ol className="space-y-14">
            {experience.map((job, i) => (
              <motion.li key={job.org} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-12%' }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }} className="relative">
                <span aria-hidden className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-[var(--c-bg)] sm:-left-[57px] sm:h-5 sm:w-5" />
                <div className="flex items-center gap-4"><div className="stat text-[11px] uppercase tracking-[.18em] text-accent">{job.dates}</div>
                  {LOGO(job.org) && <div className="flex h-9 items-center bg-white px-3"><img src={LOGO(job.org)!.src} alt={LOGO(job.org)!.alt} style={{ maxHeight: LOGO(job.org)!.h }} className="w-auto" /></div>}</div>
                <h3 className="mt-2 font-serif text-[clamp(1.5rem,2.6vw,2.3rem)] font-semibold leading-tight tracking-[-.03em]">{job.title}</h3>
                <div className="mt-1 text-sm text-muted">{job.org}</div>
                {job.tiles && (
                  <ul className="mt-6 grid max-w-3xl gap-px border border-line bg-line sm:grid-cols-3">
                    {job.tiles.map((t) => (
                      <li key={t.label} className="bg-[var(--c-surface)] p-5">
                        <div className="stat text-2xl font-semibold leading-none sm:text-[1.7rem]">{t.value}</div>
                        <div className="mt-2 text-[10px] uppercase leading-snug tracking-[.1em] text-faint">{t.label}</div>
                      </li>
                    ))}
                  </ul>
                )}
                <button type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i} className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-accent hover:underline">{openIdx === i ? 'Less −' : 'What I did +'}</button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="max-w-3xl space-y-3 overflow-hidden">
                      {job.bullets.map((b, k) => <li key={k} className="flex gap-3 pt-3 text-sm leading-7 text-muted"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{b.text}</li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
