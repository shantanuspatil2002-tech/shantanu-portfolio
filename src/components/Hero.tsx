import { hero } from '../content'
import { Stat } from './ui'

function SystemMap() {
  const nodes = [
    { code: '01', label: 'ENGINEER', text: 'Build the system', className: 'left-0 top-8' },
    { code: '02', label: 'OPERATE', text: 'Find the constraint', className: 'right-0 top-1/2 -translate-y-1/2' },
    { code: '03', label: 'STRATEGY', text: 'Scale what works', className: 'left-1/2 bottom-0 -translate-x-1/2' },
  ]

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[560px] lg:h-[500px]" aria-label="Engineer to operator to strategist system map">
      <div className="absolute inset-8 rounded-full border border-line/70" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-accent/35" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-accent/50" viewBox="0 0 560 500" fill="none" aria-hidden="true">
        <path d="M105 118 C190 90 315 95 455 250 C370 355 245 410 155 390 C95 330 85 210 105 118Z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 8" />
        <path d="M112 125 L195 205 L420 205" stroke="currentColor" strokeWidth="1" />
        <circle cx="112" cy="125" r="4" fill="currentColor" />
        <circle cx="420" cy="205" r="4" fill="currentColor" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 bg-surface/90 p-5 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur">
        <div>
          <div className="stat text-[10px] uppercase tracking-[0.22em] text-accent">Operating thesis</div>
          <div className="mt-2 text-xl font-semibold tracking-tight">Make the system work.</div>
          <div className="mt-2 text-xs leading-relaxed text-muted">Evidence → decision → execution</div>
        </div>
      </div>

      {nodes.map((node) => (
        <div key={node.code} className={`absolute w-44 rounded-xl border border-line bg-surface/90 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 ${node.className}`}>
          <div className="flex items-center justify-between">
            <span className="stat text-[10px] text-accent">{node.code}</span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="mt-3 text-xs font-semibold tracking-[0.16em]">{node.label}</div>
          <div className="mt-1 text-sm text-muted">{node.text}</div>
        </div>
      ))}

      <div className="absolute bottom-10 right-12 hidden rounded border border-line bg-bg/90 px-3 py-2 sm:block">
        <div className="stat text-[9px] uppercase tracking-widest text-faint">FIG. 01</div>
        <div className="mt-1 text-xs text-muted">Blueprint → Boardroom</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24">
      <div aria-hidden="true" className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid min-h-[88vh] w-full max-w-content items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:pb-20">
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="stat text-xs uppercase tracking-[0.2em] text-accent">{hero.kicker}</span>
            <span aria-hidden className="h-px w-16 bg-line" />
            <span className="stat hidden text-[10px] uppercase tracking-widest text-faint sm:inline">Portfolio / 2026</span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-7xl lg:text-[5.8rem]">
            {hero.heading}
          </h1>

          <p className="mt-7 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {hero.statement}
          </p>

          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-muted sm:text-lg">
            {hero.positioning}
          </p>

          <p className="mt-7 max-w-xl border-l-2 border-accent pl-4 text-lg font-medium leading-snug text-ink sm:text-xl">
            {hero.thesisQuote}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{hero.sub}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                {...('download' in cta && cta.download ? { download: true } : {})}
                {...('external' in cta && cta.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={cta.kind === 'primary'
                  ? 'rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5'
                  : 'rounded-md border border-line bg-surface/60 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent'}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <ul className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-7 sm:grid-cols-4">
            {hero.quickStats.map((s) => (
              <li key={s.label}><Stat value={s.value} label={s.label} size="sm" /></li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pl-4">
          <SystemMap />
        </div>
      </div>
    </section>
  )
}
