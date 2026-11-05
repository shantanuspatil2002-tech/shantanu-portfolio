import { useEffect, useRef, type ReactNode } from 'react'
import { bajaReel, chapters, type Chapter } from '../content'
import BeforeAfter from './BeforeAfter'
import CountUp from './CountUp'
import LogoMarquee from './LogoMarquee'

/** Photo that drifts slightly against the scroll. Off for reduced motion. */
function Parallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -0.07
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} className="will-change-transform">{children}</div>
}

function Reel() {
  return (
    <div className="mt-10">
      <div className="stat mb-3 text-[10px] uppercase tracking-[.2em] text-accent">The season, in frames · scroll sideways</div>
      <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0">
        {bajaReel.map((p) => (
          <li key={p.src} className="w-[72%] shrink-0 snap-start sm:w-[34%]">
            <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="stat mt-2 text-[10px] uppercase tracking-[.14em] text-faint">{p.caption}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Scene({ c, flip }: { c: Chapter; flip: boolean }) {
  return (
    <section id={`chapter-${c.id}`} className="relative isolate overflow-hidden border-t border-line py-20 sm:py-28" aria-labelledby={`h-${c.id}`}>
      <div aria-hidden className={`outline-word absolute -z-10 select-none text-[34vw] sm:text-[24vw] ${flip ? 'left-[-2vw]' : 'right-[-2vw]'} top-8`}>{c.verb}</div>
      <div className="section-shell">
        <div className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${flip ? 'lg:[&>div:first-child]:order-2' : ''}`}>
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="stat text-sm text-accent">{c.index}</span>
              <span className="h-px w-10 bg-accent" />
              <span className="stat text-[10px] uppercase tracking-[.2em] text-faint">Chapter · {c.verb}</span>
            </div>
            <h2 id={`h-${c.id}`} className="mt-6 font-serif text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.02] tracking-[-.035em]">{c.headline}</h2>
            <div className="mt-4 text-sm text-faint"><span className="font-medium text-muted">{c.org}</span> · <span className="stat">{c.dates}</span></div>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">{c.body}</p>
            <ul className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {c.stats.map((s) => (
                <li key={s.label}>
                  <div className="stat text-[clamp(1.5rem,3vw,2.6rem)] font-semibold leading-none text-ink"><CountUp stat={s} /></div>
                  <div className="mt-2 text-[10px] font-medium uppercase leading-relaxed tracking-[.12em] text-faint">{s.label}</div>
                </li>
              ))}
            </ul>
            <a href="#work" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">{c.caseLabel} <span aria-hidden>↓</span></a>
          </div>
          <div className="lg:col-span-6">
            <Parallax>
              <figure>
                <img src={c.image.src} alt={c.image.alt} loading="lazy" className={`aspect-[4/3] w-full object-cover ${c.image.position ?? ''}`} />
                <figcaption className="stat mt-3 text-[10px] uppercase tracking-[.14em] text-faint">{c.image.caption}</figcaption>
              </figure>
            </Parallax>
          </div>
        </div>

        {c.id === 'build' && <Reel />}
        {c.id === 'test' && <div className="mt-14"><LogoMarquee /></div>}
        {c.id === 'improve' && <div className="mt-12 max-w-3xl"><BeforeAfter /></div>}
      </div>
    </section>
  )
}

export default function Chapters() {
  return (
    <div id="story" className="stage scroll-mt-20">
      <div className="section-shell pt-20 sm:pt-28">
        <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">The story</div>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1] tracking-[-.04em]">Four chapters. One habit: find the constraint, then fix it.</h2>
        <nav aria-label="Chapters" className="mt-8 flex flex-wrap gap-2">
          {chapters.map((c) => (
            <a key={c.id} href={`#chapter-${c.id}`} className="stat border border-line px-3 py-2 text-[10px] uppercase tracking-[.16em] text-muted transition-colors hover:border-accent hover:text-accent">{c.index} {c.verb}</a>
          ))}
        </nav>
      </div>
      <div className="mt-16">
        {chapters.map((c, i) => <Scene key={c.id} c={c} flip={i % 2 === 1} />)}
      </div>
    </div>
  )
}
