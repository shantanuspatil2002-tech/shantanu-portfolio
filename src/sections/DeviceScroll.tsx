import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/** A laptop that tilts flat as you scroll, showing the FactoryFlow AI prototype. */
export default function DeviceScroll() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 38, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.86, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, 0])

  return (
    <section ref={ref} aria-label="FactoryFlow AI" className="stage relative overflow-hidden border-t border-line py-20 sm:py-28">
      <div className="section-shell">
        <motion.div style={{ y: textY }} className="mx-auto max-w-3xl text-center">
          <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">I also build the tools</div>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.8vw,4.2rem)] font-semibold leading-[1.02] tracking-[-.04em]">ERPs ignore the job-shop. So I built one that doesn&rsquo;t.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted">FactoryFlow AI: a working prototype for Indian SME manufacturers. Schedule adherence, OEE, rejection cost, receivables, job-work and GST, on one screen.</p>
        </motion.div>
        <div className="mt-12 [perspective:1400px]">
          <motion.div style={{ rotateX, scale }} className="mx-auto max-w-5xl origin-top">
            <div className="rounded-[18px] border border-white/15 bg-[#1b1c18] p-2 shadow-[0_50px_140px_rgba(0,0,0,.65)] sm:rounded-[26px] sm:p-3">
              <div className="overflow-hidden rounded-[10px] bg-[#0b1220] sm:rounded-[14px]">
                <img src="images/factoryflow-dashboard.png" alt="FactoryFlow AI Manufacturing Control dashboard" width={1600} height={765} loading="lazy" className="w-full" />
              </div>
            </div>
            <div className="mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[20px] bg-gradient-to-b from-[#2a2b26] to-[#16171a] sm:h-4" />
          </motion.div>
        </div>
        <div className="mt-10 text-center">
          <a href="https://factoryflow-ai-os.lovable.app" target="_blank" rel="noreferrer" className="inline-flex border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] transition-colors hover:border-accent hover:text-accent">Open the live prototype ↗</a>
          <div className="mt-3 text-[11px] text-faint">Demo data. Submitted as a course artefact at Masters&rsquo; Union.</div>
        </div>
      </div>
    </section>
  )
}
