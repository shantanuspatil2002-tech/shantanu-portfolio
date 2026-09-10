import { leadership } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading index="07" title="Leadership & Community" />
      <ul className="space-y-6">
        {leadership.map((l) => (
          <li key={l.title}>
            <Reveal className="border-l-2 border-line pl-5">
              <h3 className="text-base font-semibold tracking-tight">{l.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{l.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
