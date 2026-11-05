import { useCallback, type MouseEvent } from 'react'
import { hero, signature } from '../content'
import { useAudience } from '../hooks/useAudience'
import CountUp from './CountUp'

const LINE_A = 'Most people get into consulting and then learn an industry.'.split(' ')

/** Delays are pure CSS, so the sequence needs no JS timers and respects reduced motion. */
const wordStyle = (i: number) => ({ animationDelay: `${0.15 + i * 0.06}s` })
const aEnd = 0.15 + LINE_A.length * 0.06
const BEAT = aEnd + 0.5

export default function Hero() {
  const audience = useAudience()
  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }, [])

  return (
    <section id="top" onMouseMove={onMove} className="stage spot relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24">
      <div aria-hidden className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="section-shell w-full py-16">
        <div className="stat fade-rise text-[11px] uppercase tracking-[.22em] text-accent" style={{ animationDelay: '0s' }}>
          {audience ? `Prepared for ${audience.name}` : hero.kicker}
        </div>

        <p className="mt-7 max-w-4xl font-serif text-[clamp(1.9rem,4.6vw,4.1rem)] font-medium leading-[1.06] tracking-[-.035em] text-muted" aria-label={LINE_A.join(' ')}>
          {LINE_A.map((w, i) => <span key={i} aria-hidden className="word-in mr-[.28em]" style={wordStyle(i)}>{w}</span>)}
        </p>
        <p className="fade-rise mt-3 font-serif text-[clamp(2.6rem,7.4vw,6.6rem)] font-semibold leading-[.95] tracking-[-.05em] text-accent" style={{ animationDelay: `${BEAT}s` }}>
          I learned the industry first.
        </p>

        <div className="fade-rise mt-14 grid gap-10 border-t border-line pt-8 lg:grid-cols-[1.2fr_1fr]" style={{ animationDelay: `${BEAT + 0.9}s` }}>
          <div>
            <h1 className="text-[clamp(2.4rem,4.4vw,3.8rem)] font-semibold leading-[.95] tracking-[-.05em]">{hero.heading}</h1>
            <p className="mt-4 max-w-xl text-lg font-medium leading-snug tracking-[-.02em]">{hero.statement}</p>
            <p className="mt-2 text-sm text-muted">{hero.positioning}</p>
            {audience && <p className="mt-4 max-w-xl text-sm leading-6 text-muted"><span className="stat mr-2 text-[10px] uppercase tracking-[.18em] text-accent">Relevant to {audience.name}</span>{audience.relevance}</p>}
            <div className="mt-7 flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <a key={cta.label} href={cta.href} {...('download' in cta && cta.download ? { download: true } : {})} {...('external' in cta && cta.external ? { target: '_blank', rel: 'noreferrer' } : {})} className={`btn ${cta.kind === 'primary' ? 'btn-primary' : 'btn-secondary'}`}>{cta.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="border border-line bg-surface/60 p-5 backdrop-blur-sm">
              <div className="stat text-[10px] uppercase tracking-[.2em] text-accent">Signature work</div>
              <div className="mt-2 text-lg font-semibold leading-snug">{signature}</div>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <li><div className="stat text-2xl font-semibold"><CountUp stat={{ to: 500, suffix: '+', label: '' }} /></div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-faint">programs, zero escalations</div></li>
              <li><div className="stat text-2xl font-semibold"><CountUp stat={{ to: 14.4, decimals: 1, prefix: '+', suffix: '%', label: '' }} /></div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-faint">monthly profit, Prodmax</div></li>
              <li><div className="stat text-2xl font-semibold">AIR 1</div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-faint">eBAJA 2023</div></li>
              <li><div className="stat text-2xl font-semibold"><CountUp stat={{ to: 3.76, decimals: 2, prefix: '₹', suffix: 'L', label: '' }} /></div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-faint">raised, 42% of budget</div></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-xl text-xs leading-6 text-faint">{hero.availability}</p>
      </div>
      <a href="#story" className="fade-rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint sm:flex" style={{ animationDelay: `${BEAT + 1.6}s` }} aria-label="Scroll to the story">
        <span className="stat text-[9px] uppercase tracking-[.24em]">Build · Test · Improve · Scale</span>
        <span aria-hidden className="text-lg" style={{ animation: 'cue 1.8s ease-in-out infinite' }}>↓</span>
      </a>
    </section>
  )
}
