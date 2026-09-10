import { achievements } from '../content'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading index="05" title="Achievements & Recognition" />
      <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <li key={a.value + a.label} className="bg-surface p-6">
            <Reveal>
              <Stat value={a.value} label={a.label} size="sm" />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
