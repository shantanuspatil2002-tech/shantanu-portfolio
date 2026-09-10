import { useId, useState } from 'react'
import { caseStudies, type CaseStudy } from '../content'
import { Reveal, Section, SectionHeading, Stat } from './ui'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 py-4 sm:grid-cols-[120px_1fr] sm:gap-6">
      <div className="stat text-[11px] uppercase tracking-widest text-accent">{label}</div>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}

function Card({ cs }: { cs: CaseStudy }) {
  const [open, setOpen] = useState(false)
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
          <Row label="Situation">{cs.situation}</Row>
          <div aria-hidden className="scale-bar" />
          <Row label="Approach">{cs.approach}</Row>
          <div aria-hidden className="scale-bar" />
          <Row label="Result">{cs.result}</Row>

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

          <p className="mt-6 border-l-2 border-accent/50 pl-4 text-xs italic leading-relaxed text-faint">
            {cs.frameNote}
          </p>
        </div>
      )}
    </Reveal>
  )
}

export default function CaseStudies() {
  return (
    <Section id="work">
      <SectionHeading
        index="03"
        title="Case Studies"
        lede="Seven deep-dives, each read as a one-page consulting exhibit: Situation → Approach → Result, headline number first."
      />
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <Card key={cs.id} cs={cs} />
        ))}
      </div>
    </Section>
  )
}
