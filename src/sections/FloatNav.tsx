import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { nav, site } from '../content'

/** Floating pill nav: hides when scrolling down, returns on scroll up, highlights the section in view. */
export default function FloatNav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 160 && !open)
  })

  useEffect(() => {
    const ids = nav.map((n) => n.id)
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -90 : 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/55 py-2 pl-3 pr-2 shadow-[0_8px_40px_rgba(0,0,0,.45)] backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 rounded-full px-2 py-1" aria-label="Back to top">
            <span className="flex h-7 w-7 items-center justify-center border border-accent text-[10px] font-bold text-accent">SP</span>
            <span className="hidden text-sm font-semibold sm:inline">{site.name}</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="relative rounded-full px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:text-ink">
                {active === n.id && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                <span className="relative">{n.label}</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={site.resume} download className="rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-ink transition-transform hover:scale-[1.04]">Resume</a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Menu" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 8h16M4 16h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-2 rounded-3xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl md:hidden" aria-label="Sections">
              {nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium hover:bg-white/10">{n.label}</a>)}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
