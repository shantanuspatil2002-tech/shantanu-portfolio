import { motion } from 'motion/react'
import { affiliations } from '../content'

/** Where the proof comes from: study, work and leadership, each with the institution's own mark. */
export default function Affiliations() {
  return (
    <section aria-label="Where I have studied, worked and led" className="stage relative border-t border-line py-14 sm:py-16">
      <div className="section-shell">
        <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">Where I have studied, worked and led</div>
        <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {affiliations.map((a, i) => (
            <motion.li key={a.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: 0.55, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] }} className="flex flex-col border border-line bg-[var(--c-surface)]">
              <div className="flex h-24 items-center justify-center bg-white px-6 sm:h-28">
                <img src={a.logo} alt={a.name} loading="lazy" style={{ maxHeight: a.h, maxWidth: '100%' }} className="w-auto object-contain" />
              </div>
              <div className="flex-1 p-4">
                <div className="stat text-[10px] uppercase tracking-[.18em] text-accent">{a.kind}</div>
                <div className="mt-1 text-sm font-semibold leading-snug">{a.role}</div>
                <div className="stat mt-2 text-[10px] uppercase tracking-[.12em] text-faint">{a.when}</div>
              </div>
            </motion.li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-faint">Logos belong to their respective organisations and are shown to identify where I studied, worked or led, not to imply endorsement.</p>
      </div>
    </section>
  )
}
