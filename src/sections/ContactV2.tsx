import { motion } from 'motion/react'
import { site } from '../content'
import Magnetic from '../fx/Magnetic'

export default function ContactV2() {
  return (
    <section id="contact" className="stage relative overflow-hidden border-t border-line py-24 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="section-shell relative text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
          <div className="stat text-[10px] uppercase tracking-[.24em] text-accent">Contact</div>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[.95] tracking-[-.05em]">Let&rsquo;s find your <span className="text-accent">constraint.</span></h2>
          <p className="mx-auto mt-6 max-w-md text-muted">Open to summer internship and full-time roles in operations &amp; strategy consulting.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Magnetic><a href={`mailto:${site.email}`} className="inline-flex bg-accent px-8 py-5 text-sm font-bold text-accent-ink">{site.email}</a></Magnetic>
            <Magnetic><a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex border border-white/20 px-7 py-5 text-sm font-semibold hover:border-accent hover:text-accent">LinkedIn ↗</a></Magnetic>
            <Magnetic><a href={site.resume} download className="inline-flex border border-white/20 px-7 py-5 text-sm font-semibold hover:border-accent hover:text-accent">Resume ↓</a></Magnetic>
          </div>
        </motion.div>
      </div>
      <p className="relative mt-24 text-center text-[11px] text-faint">© {new Date().getFullYear()} {site.name}</p>
    </section>
  )
}
