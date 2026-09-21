import { skills } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="04" title="Skills" />
      <Reveal>
        <dl className="max-w-3xl divide-y divide-line border-y border-line">
          {skills.map((row) => (
            <div key={row.heading} className="grid gap-1.5 py-4 sm:grid-cols-[120px_1fr] sm:gap-6">
              <dt className="stat text-[11px] uppercase tracking-widest text-accent">
                {row.heading}
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{row.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
