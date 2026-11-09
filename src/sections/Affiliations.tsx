import { motion } from 'motion/react'
import { affiliations } from '../content'

/** Where the proof comes from. Marks sit directly on the dark page: no tiles, no white boxes. */
export default function Affiliations() {
  return (
    <section aria-label="Where I have studied, worked and led" className="stage relative border-t border-line py-16 sm:py-20">
      <div className="section-shell">
        <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">Where I have studied, worked and led</div>
        <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
          {affiliations.map((a, i) => (
            <motion.li key={a.mark.name + a.kind} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-6%' }} transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.2, 0.7, 0.2, 1] }} className="group relative flex min-h-[210px] flex-col justify-between bg-[var(--c-bg)] p-5 transition-colors hover:bg-[var(--c-surface)] sm:p-6">
              <div className="flex h-16 items-center">
                <img src={a.mark.src} alt={a.mark.name} loading="lazy" style={{ maxHeight: a.mark.h, maxWidth: '85%' }} className="w-auto object-contain opacity-90 transition-transform duration-300 group-hover:scale-[1.04] group-hover:opacity-100" />
              </div>
              <div>
                <div className="stat text-[10px] uppercase tracking-[.18em] text-accent">{a.kind}</div>
                <div className="mt-1.5 text-sm font-semibold leading-snug">{a.role}</div>
                <div className="stat mt-2 text-[10px] uppercase tracking-[.1em] text-faint">{a.when}</div>
              </div>
            </motion.li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-faint">Logos belong to their respective organisations and identify where I studied, worked, volunteered or competed. They do not imply endorsement.</p>
      </div>
    </section>
  )
}
