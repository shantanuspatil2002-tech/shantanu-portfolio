import { motion } from 'motion/react'
import Spotlight from '../fx/Spotlight'

const TOOLS = ['Excel Solver', 'Power Query', 'SQL', 'Python', 'Power BI', 'Six Sigma DMAIC', 'Lean', 'Market sizing', 'KPI tracking', 'IS 17017', 'IEC 61851', 'CCS2']

function Tile({ className = '', children, i = 0 }: { className?: string; children: React.ReactNode; i?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] }} className={className}>
      <Spotlight className="h-full border border-line bg-[var(--c-surface)] p-6 sm:p-7">{children}</Spotlight>
    </motion.div>
  )
}

const Big = ({ v, l }: { v: string; l: string }) => (<><div className="stat text-[clamp(1.8rem,3.4vw,3rem)] font-semibold leading-none">{v}</div><div className="mt-3 text-[11px] uppercase leading-snug tracking-[.12em] text-faint">{l}</div></>)

export default function BentoCreds() {
  return (
    <section id="credentials" className="stage relative border-t border-line py-20 sm:py-28">
      <div className="section-shell">
        <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">The toolkit</div>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1] tracking-[-.04em]">Quant-ready, tool-ready, trained to lead.</h2>
        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Tile i={0} className="sm:col-span-2"><Big v="337 / 340" l="GRE · Verbal 167, Quant 170" /></Tile>
          <Tile i={1}><Big v="Green Belt" l="Six Sigma, Kennesaw State University" /></Tile>
          <Tile i={2}><Big v="Wharton ×2" l="Operations Analytics and Business Foundations" /></Tile>
          <Tile i={3}><Big v="1 of 5" l="scholarships in a 470-member batch" /></Tile>
          <Tile i={4}><Big v="Best Contract Executive" l="ARAI, 2025" /></Tile>
          <Tile i={5} className="sm:col-span-2 lg:col-span-2">
            <div className="stat text-[10px] uppercase tracking-[.2em] text-accent">Tools and methods</div>
            <div className="mt-4 flex flex-wrap gap-2">{TOOLS.map((t) => <span key={t} className="border border-line px-3 py-1.5 text-xs text-muted">{t}</span>)}</div>
          </Tile>
          <Tile i={6} className="sm:col-span-2 lg:col-span-2">
            <div className="stat text-[10px] uppercase tracking-[.2em] text-accent">Leadership and community</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><b className="text-ink">MUCC</b> core member, industry compendium</li>
              <li><b className="text-ink">MESA</b> Vice President, +30% engagement</li>
              <li><b className="text-ink">Teach for India</b> mentor, 8 students</li>
              <li><b className="text-ink">DYPCOE</b> coached 30+ students a year</li>
            </ul>
          </Tile>
          <Tile i={7} className="sm:col-span-2 lg:col-span-2">
            <div className="stat text-[10px] uppercase tracking-[.2em] text-accent">Education</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li><b>PGP-TBM, Masters&rsquo; Union</b><div className="text-muted">Cohort 7, Gurugram · 2026 – present</div></li>
              <li><b>B.E. Mechanical, D.Y. Patil, Pune</b><div className="text-muted">8.35 CGPA, top 20%</div></li>
              <li><b>Diploma, Mechanical Engineering</b><div className="text-muted">91.59%, Rank 2 of 178</div></li>
            </ul>
          </Tile>
        </div>
      </div>
    </section>
  )
}
