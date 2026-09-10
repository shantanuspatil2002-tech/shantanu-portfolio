import { experience } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Experience() {
  return (
    <Section id="experience" blueprint>
      <SectionHeading
        index="02"
        title="Experience"
        lede="Every line leads with the number: result first, then the action, then the context."
      />

      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.org + job.title}>
            <Reveal>
              <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                <div className="md:pt-1">
                  <div className="stat text-sm text-accent">{job.dates}</div>
                </div>

                <div className="relative border-l border-line pl-6">
                  {/* exploded-view leader line */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-px w-4 -translate-x-full bg-line"
                  />
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rotate-45 border border-accent bg-bg"
                  />

                  <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
                  <div className="mt-1 text-sm text-muted">{job.org}</div>
                  {job.note && (
                    <div className="mt-1 text-xs text-faint">{job.note}</div>
                  )}

                  <ul className="mt-4 space-y-3">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
