import { hero } from '../content'
import { Stat } from './ui'

function SystemMap() {
  const nodes = [
    { code:'01', label:'ENGINEER', text:'Build the system', className:'left-0 top-8' },
    { code:'02', label:'OPERATE', text:'Find the constraint', className:'right-0 top-[42%]' },
    { code:'03', label:'STRATEGY', text:'Scale what works', className:'left-[18%] bottom-2' },
  ]
  return (
    <div className="hero-map relative h-[480px] w-full">
      <div className="absolute inset-[7%] rounded-full border border-line" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-accent/40" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-accent/60" viewBox="0 0 560 480" fill="none" aria-hidden>
        <path d="M90 110C190 50 350 95 470 220C400 350 230 430 105 360C55 300 45 180 90 110Z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 8"/>
        <path d="M94 112L190 190H438V250L300 370" stroke="currentColor" strokeWidth="1"/>
        <circle cx="94" cy="112" r="4" fill="currentColor"/><circle cx="438" cy="250" r="4" fill="currentColor"/><circle cx="300" cy="370" r="4" fill="currentColor"/>
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-surface p-7 text-center shadow-[0_24px_80px_rgba(0,0,0,.10)]">
        <div><div className="stat text-[9px] uppercase tracking-[.2em] text-accent">Operating thesis</div><div className="mt-3 text-2xl font-semibold leading-none tracking-[-.04em]">Make the<br/>system work.</div><div className="mt-3 text-xs leading-relaxed text-muted">Evidence → decision → execution</div></div>
      </div>
      {nodes.map(n => <div key={n.code} className={`absolute w-48 border border-line bg-surface p-4 shadow-[0_10px_35px_rgba(0,0,0,.05)] transition-transform duration-300 hover:-translate-y-1 ${n.className}`}><div className="flex items-center justify-between"><span className="stat text-[10px] text-accent">{n.code}</span><span className="h-1.5 w-1.5 rounded-full bg-accent"/></div><div className="mt-4 text-[10px] font-semibold tracking-[.2em]">{n.label}</div><div className="mt-1 text-sm text-muted">{n.text}</div></div>)}
      <div className="absolute bottom-0 right-0 border-l border-t border-line bg-bg px-4 py-3"><div className="stat text-[9px] uppercase tracking-[.18em] text-faint">FIG. 01</div><div className="mt-1 text-xs text-muted">Blueprint → Boardroom</div></div>
    </div>
  )
}

export default function Hero() {
  return <section id="top" className="relative overflow-hidden border-b border-line pt-24">
    <div aria-hidden className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0"/>
    <div className="section-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
      <div className="relative z-10 max-w-[680px]">
        <div className="flex items-center gap-3"><span className="stat text-[11px] uppercase tracking-[.2em] text-accent">{hero.kicker}</span></div>
        <h1 className="mt-7 text-[clamp(3.8rem,7.5vw,7.2rem)] font-semibold leading-[.84] tracking-[-.065em]">{hero.heading}</h1>
        <p className="mt-8 max-w-[620px] text-[clamp(1.45rem,2.5vw,2.25rem)] font-semibold leading-[1.05] tracking-[-.045em]">{hero.statement}</p>
        <p className="mt-5 max-w-[590px] text-base leading-7 text-muted">{hero.positioning}</p>
        <p className="mt-7 max-w-[570px] border-l-2 border-accent pl-4 text-lg font-medium leading-7">{hero.thesisQuote}</p>
        <div className="mt-8 flex flex-wrap gap-3">{hero.ctas.map(cta => <a key={cta.label} href={cta.href} {...('download' in cta && cta.download ? {download:true}:{})} {...('external' in cta && cta.external ? {target:'_blank',rel:'noreferrer'}:{})} className={cta.kind==='primary'?'btn btn-primary':'btn btn-secondary'}>{cta.label}</a>)}</div>
        <ul className="mt-12 grid grid-cols-2 gap-x-8 border-t border-line pt-6 sm:grid-cols-4">{hero.quickStats.map(s=><li key={s.label}><Stat value={s.value} label={s.label} size="sm"/></li>)}</ul>
      </div>
      <div className="hidden lg:block"><SystemMap/></div>
    </div>
  </section>
}
