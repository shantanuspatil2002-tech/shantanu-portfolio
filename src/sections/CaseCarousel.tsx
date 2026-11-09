import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { caseStudies, type CaseStudy } from '../content'
import MediaGrid from '../components/MediaGrid'

const FACE: Record<string, { src?: string; pos?: string; tone: string }> = {
  dmaic: { src: 'images/shopfloor.webp', tone: 'from-[#1b2a12]' },
  arai: { src: 'images/arai-keysight-session.webp', pos: 'object-left', tone: 'from-[#2b1010]' },
  baja: { src: 'images/baja-overall-winner.webp', tone: 'from-[#2b1c0a]' },
  voltedge: { tone: 'from-[#12202e]' },
  governance: { tone: 'from-[#1e1230]' },
  factoryflow: { src: 'images/factoryflow-dashboard.png', pos: 'object-left-top', tone: 'from-[#0b1a2b]' },
}

const stepsOf = (cs: CaseStudy) => cs.steps ?? [{ label: 'Situation', text: cs.situation ?? '' }, { label: 'Approach', text: cs.approach ?? '' }, { label: 'Result', text: cs.result ?? '' }]

function Face({ cs }: { cs: CaseStudy }) {
  const f = FACE[cs.id] ?? { tone: 'from-[#1a1a14]' }
  return (
    <>
      {f.src ? <img src={f.src} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${f.pos ?? ''}`} /> : <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${f.tone} to-[#0c0d0a]`} />}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
    </>
  )
}

export default function CaseCarousel() {
  const list = caseStudies.filter((c) => c.id !== 'treasurebox')
  const [openId, setOpenId] = useState<string | null>(null)
  const open = list.find((c) => c.id === openId) ?? null
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const railRef = useRef<HTMLUListElement | null>(null)

  const close = useCallback(() => setOpenId(null), [])
  useEffect(() => {
    const onOpen = (e: Event) => setOpenId((e as CustomEvent<string>).detail)
    window.addEventListener('open-case', onOpen)
    return () => window.removeEventListener('open-case', onOpen)
  }, [])
  useEffect(() => {
    if (!open) return
    const opener = document.activeElement as HTMLElement | null
    const root = () => dialogRef.current
    const focusables = () => Array.from(root()?.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])') ?? [])
    const t = window.setTimeout(() => (focusables()[0] ?? root())?.focus(), 60)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return }
      if (e.key !== 'Tab') return
      const f = focusables()
      if (!f.length) { e.preventDefault(); return }
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { window.clearTimeout(t); document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); opener?.focus?.() }
  }, [open, close])
  const scrollRail = (dir: 1 | -1) => railRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })

  return (
    <section id="work" className="paper relative scroll-mt-0 py-20 sm:py-28">
      <div className="section-shell">
        <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">The work</div>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1] tracking-[-.04em]">Six cases. Open any one.</h2>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted">Swipe, scroll sideways or use the arrows. Open a card for the full problem, method and result.</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous cases" className="flex h-11 w-11 items-center justify-center border border-line text-lg hover:border-accent hover:text-accent">←</button>
            <button type="button" onClick={() => scrollRail(1)} aria-label="More cases" className="flex h-11 w-11 items-center justify-center border border-line text-lg hover:border-accent hover:text-accent">→</button>
          </div>
        </div>
      </div>
      <ul ref={railRef} aria-label="Case studies" className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-10 lg:px-[max(2.5rem,calc((100vw-1180px)/2))]" style={{ scrollbarWidth: 'none' }}>
        {list.map((cs) => (
          <li key={cs.id} className="snap-start">
            <motion.button
              layoutId={`card-${cs.id}`}
              type="button"
              onClick={() => setOpenId(cs.id)}
              whileHover={{ y: -8 }}
              className="stage relative block h-[440px] w-[300px] overflow-hidden text-left shadow-[0_24px_60px_rgba(0,0,0,.28)] sm:h-[480px] sm:w-[340px]"
              aria-label={`Open case: ${cs.title}`}
            >
              <Face cs={cs} />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5"><span className="stat text-xs text-accent">{cs.index}</span><span className="stat text-[9px] uppercase tracking-[.16em] text-white/70">{cs.frameLabel}</span></div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="stat text-[clamp(2.4rem,4vw,3.2rem)] font-semibold leading-none">{cs.headlineStat.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/70">{cs.headlineStat.label}</div>
                <div className="mt-4 font-serif text-xl font-semibold leading-tight">{cs.title}</div>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-[.18em] text-accent">Open case +</div>
              </div>
            </motion.button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <motion.div className="stage fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} role="dialog" aria-modal="true" aria-label={open.title}>
            <motion.div ref={dialogRef} tabIndex={-1} layoutId={`card-${open.id}`} onClick={(e) => e.stopPropagation()} className="relative my-auto outline-none w-full max-w-4xl overflow-hidden border border-line bg-[var(--c-surface)]">
              <div className="relative h-48 sm:h-60"><Face cs={open} />
                <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-lg backdrop-blur hover:bg-accent hover:text-accent-ink">×</button>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><div className="stat text-[10px] uppercase tracking-[.2em] text-accent">{open.index} · {open.frameLabel}</div><h3 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{open.title}</h3></div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="grid grid-cols-3 gap-4 border-b border-line pb-6">
                  {[open.headlineStat, ...open.metrics].slice(0, 3).map((m) => <li key={m.label}><div className="stat text-2xl font-semibold sm:text-3xl">{m.value}</div><div className="mt-1 text-[10px] uppercase leading-snug tracking-[.1em] text-faint">{m.label}</div></li>)}
                </ul>
                <div className="mt-6 space-y-5">
                  {stepsOf(open).map((s, i) => (
                    <Fragment key={s.label}>
                      <div className="grid gap-2 sm:grid-cols-[110px_1fr] sm:gap-8"><div className="stat text-[10px] uppercase tracking-[.18em] text-accent">{i + 1} · {s.label}</div><p className="text-sm leading-7 text-muted">{s.text}</p></div>
                    </Fragment>
                  ))}
                </div>
                {open.callout && <div className="mt-6 border-l-2 border-accent bg-white/5 px-5 py-4"><div className="stat text-[10px] uppercase tracking-[.18em] text-accent">{open.callout.label}</div><p className="mt-1 text-sm leading-6">{open.callout.text}</p></div>}
                {open.media && <MediaGrid groups={open.media} />}
                {open.link && <a href={open.link.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[.14em] text-accent-ink">{open.link.label} ↗</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
