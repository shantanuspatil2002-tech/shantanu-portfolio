import { leadership } from '../content'
import { PortfolioImage } from './PortfolioImage'
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
          <li key={l.title} className={l.image ? 'sm:col-span-3' : undefined}>
            <Reveal
              className={
                l.image
                  ? 'grid gap-6 border-l-2 border-line pl-4 sm:grid-cols-[1fr_300px] sm:items-start'
                  : 'border-l-2 border-line pl-4'
              }
            >
              <div>
                <h3 className="text-sm font-semibold tracking-tight">{l.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{l.body}</p>
              </div>
              {l.image && (
                <PortfolioImage
                  {...l.image}
                  aspectClassName="aspect-[2/1]"
                  objectPosition="object-top"
                  fadeBottom
                  className="w-full sm:w-[300px]"
                />
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
