import { skills } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="06" title="Skills & Toolkit" />
      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((col) => (
          <Reveal key={col.heading} className="border-t-2 border-accent pt-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="stat text-accent">/</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
