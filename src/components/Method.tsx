import { method } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Method() {
  return (
    <Section id="method" className="border-b border-line">
      <SectionHeading index="01" eyebrow="Method" title="How I work" lede={method.lede} />
      <div className="border-y border-line">
        <div className="hidden md:grid md:grid-cols-[130px_repeat(3,minmax(0,1fr))] md:gap-x-8 md:border-b md:border-line md:py-4">
          <span />
          {method.columns.map((c) => (
            <div key={c.name}>
              <div className="text-sm font-semibold tracking-tight">{c.name}</div>
              <div className="stat mt-1 text-[9px] uppercase tracking-[.18em] text-faint">{c.context}</div>
            </div>
          ))}
        </div>
        {method.rows.map((row) => (
          <Reveal key={row.verb}>
            <div className="grid gap-x-8 gap-y-2 border-b border-line py-5 last:border-b-0 md:grid-cols-[130px_repeat(3,minmax(0,1fr))]">
              <div className="stat text-[11px] uppercase tracking-[.18em] text-accent">{row.verb}</div>
              {row.cells.map((text, i) => (
                <div key={i}>
                  <div className="stat mb-0.5 text-[9px] uppercase tracking-[.18em] text-faint md:hidden">
                    {method.columns[i].name}
                  </div>
                  <p className="text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
