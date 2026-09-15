import { leadership } from '../content'
import { Reveal, Section } from './ui'

// Not a top-level nav section (nav is deliberately kept to five items) - this
// sits quietly between Skills and Contact, reachable by scroll.
export default function Leadership() {
  return (
    <Section id="leadership" className="pt-0 sm:pt-0">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">
        Leadership &amp; Community
      </h2>
      <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-3">
        {leadership.map((l) => (
          <li key={l.title}>
            <Reveal className="border-l-2 border-line pl-4">
              <h3 className="text-sm font-semibold tracking-tight">{l.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{l.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
