import { Fragment, useId, useState } from 'react'
import { caseStudies, caseStudyGroups, type CaseStudy } from '../content'
import { PortfolioImage } from './PortfolioImage'
import { Reveal, Section, SectionHeading, Stat } from './ui'

const visualById: Record<string, { src: string; alt: string }> = {
  baja: { src: 'images/baja-team.jpg', alt: 'Team Predator Racing BAJA team' },
  factoryflow: { src: 'images/factoryflow-dashboard.png', alt: 'FactoryFlow AI manufacturing dashboard' },
  treasurebox: { src: 'images/compendium-aviation.jpg', alt: 'Portfolio visual' },
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
      <div className="stat text-[10px] uppercase tracking-[0.18em] text-accent">{label}</div>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}

function stepsOf(cs: CaseStudy): { label: string; text: string }[] {
  if (cs.steps) return cs.steps
  return [
    { label: 'Situation', text: cs.situation ?? '' },
    { label: 'Approach', text: cs.approach ?? '' },
    { label: 'Result', text: cs.result ?? '' },
  ]
}

function VisualPreview({ cs }: { cs: CaseStudy }) {
  const visual = visualById[cs.id]
  if (!visual && !cs.image) {
    return (
      <div className="relative flex min-h-[190px] items-end overflow-hidden rounded-lg border border-line bg-surface-2 p-5">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(90deg, transparent 49%, var(--c-line) 50%, transparent 51%), linear-gradient(transparent 49%, var(--c-line) 50%, transparent 51%)', backgroundSize: '34px 34px' }} />
        <div className="relative">
          <div className="stat text-[10px] uppercase tracking-[0.2em] text-accent">Exhibit {cs.index}</div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">{cs.headlineStat.value}</div>
          <div className="mt-1 max-w-xs text-xs text-muted">{cs.headlineStat.label}</div>
        </div>
      </div>
    )
  }

  const image = cs.image ?? { ...visual, width: 1600, height: 900 }
  return (
    <div className="group relative overflow-hidden rounded-lg border border-line bg-surface-2">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
        <div className="stat text-[10px] uppercase tracking-[0.18em] text-white/75">Exhibit {cs.index}</div>
        <div className="mt-1 text-sm font-medium text-white">{cs.frameLabel}</div>
      </div>
    </div>
  )
}

function Card({ cs, defaultOpen = false }: { cs: CaseStudy; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <Reveal className="group border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <div className="grid gap-0 lg:grid-cols-[.92fr_1.08fr]">
        <div className="p-6 sm:p-8 lg:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="stat text-sm text-accent">{cs.index}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-faint">{cs.frameLabel}</span>
              </div>
              <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{cs.title}</h3>
            </div>
          </div>

          <div className="mt-7">
            <Stat value={cs.headlineStat.value} label={cs.headlineStat.label} size="lg" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {open ? 'Close exhibit' : 'Open exhibit'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="p-4 lg:p-6">
          <VisualPreview cs={cs} />
        </div>
      </div>

      {open && (
        <div id={panelId} className="border-t border-line px-6 pb-8 pt-2 sm:px-8 lg:px-9">
          {stepsOf(cs).map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <div aria-hidden className="scale-bar" />}
              <Row label={s.label}>{s.text}</Row>
            </Fragment>
          ))}

          {cs.callout && (
            <div className="mt-4 border-l-2 border-accent bg-surface-2 px-4 py-3">
              <div className="stat text-[10px] uppercase tracking-[0.18em] text-accent">{cs.callout.label}</div>
              <p className="mt-1 text-sm leading-relaxed text-ink">{cs.callout.text}</p>
            </div>
          )}

          {cs.image && <PortfolioImage {...cs.image} className="mt-2" />}

          <ul className="mt-6 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <li key={m.label}><Stat value={m.value} label={m.label} size="sm" /></li>
            ))}
          </ul>

          {cs.link && (
            <a href={cs.link.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent">
              {cs.link.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          )}
        </div>
      )}
    </Reveal>
  )
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 pt-2">
      <span className="stat shrink-0 text-[10px] uppercase tracking-[0.18em] text-faint">{children}</span>
      <div aria-hidden className="scale-bar flex-1" />
    </div>
  )
}

export default function CaseStudies() {
  const groups = ['professional', 'academic'] as const

  return (
    <Section id="work">
      <SectionHeading
        index="03"
        title="Case Studies"
        lede="The portfolio is the evidence: each exhibit moves from problem to decision to measurable impact."
      />
      <div className="space-y-10">
        {groups.map((group) => {
          const items = caseStudies.filter((cs) => cs.group === group)
          if (items.length === 0) return null
          return (
            <div key={group} className="space-y-6">
              <GroupLabel>{caseStudyGroups[group]}</GroupLabel>
              {items.map((cs, i) => <Card key={cs.id} cs={cs} defaultOpen={group === 'professional' && i === 0} />)}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
