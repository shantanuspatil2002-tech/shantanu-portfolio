import { Fragment, useId, useState } from 'react'
import { caseStudies, caseStudyGroups, type CaseStudy } from '../content'
import { PortfolioImage } from './PortfolioImage'
import { Reveal, Section, SectionHeading, Stat } from './ui'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
      <div className="stat text-[11px] uppercase tracking-widest text-accent">{label}</div>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}

/** Labelled steps for an exhibit: explicit `steps`, else Situation / Approach / Result. */
function stepsOf(cs: CaseStudy): { label: string; text: string }[] {
  if (cs.steps) return cs.steps
  return [
    { label: 'Situation', text: cs.situation ?? '' },
    { label: 'Approach', text: cs.approach ?? '' },
    { label: 'Result', text: cs.result ?? '' },
  ]
}
function Card({ cs, defaultOpen = false }: { cs: CaseStudy; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <Reveal className="border border-line bg-surface">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="stat text-sm text-accent">{cs.index}</span>
              <span className="text-[11px] uppercase tracking-widest text-faint">
                {cs.frameLabel}
              </span>
            </div>
            <h3 className="mt-3 max-w-xl text-xl font-semibold tracking-tight sm:text-2xl">
              {cs.title}
            </h3>
          </div>
          <div className="hidden shrink-0 text-right sm:block">
            <Stat value={cs.headlineStat.value} label={cs.headlineStat.label} size="lg" />
          </div>
        </div>

        <div className="mt-5 sm:hidden">
          <Stat value={cs.headlineStat.value} label={cs.headlineStat.label} size="md" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          {open ? 'Hide exhibit' : 'View exhibit'}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div id={panelId} className="border-t border-line px-6 pb-8 pt-2 sm:px-8">
          {stepsOf(cs).map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <div aria-hidden className="scale-bar" />}
              <Row label={s.label}>{s.text}</Row>
            </Fragment>
          ))}

          {cs.callout && (
            <div className="mt-4 border-l-2 border-accent bg-surface-2 px-4 py-3">
              <div className="stat text-[11px] uppercase tracking-widest text-accent">
                {cs.callout.label}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink">{cs.callout.text}</p>
            </div>
          )}

          {cs.image && <PortfolioImage {...cs.image} className="mt-2" />}

          <ul className="mt-6 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <li key={m.label}>
                <Stat value={m.value} label={m.label} size="sm" />
              </li>
            ))}
          </ul>

          {cs.link && (
            <a
              href={cs.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              {cs.link.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
      <span className="stat shrink-0 text-[11px] uppercase tracking-widest text-faint">
        {children}
      </span>
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
        lede="Seven exhibits, each read as a one-page consulting deliverable: Problem → Diagnosis → Decision → Impact, headline number first."
      />
      <div className="space-y-10">
        {groups.map((group) => {
          const items = caseStudies.filter((cs) => cs.group === group)
          if (items.length === 0) return null
          return (
            <div key={group} className="space-y-6">
              <GroupLabel>{caseStudyGroups[group]}</GroupLabel>
              {items.map((cs, i) => (
                <Card key={cs.id} cs={cs} defaultOpen={group === 'professional' && i === 0} />
              ))}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
