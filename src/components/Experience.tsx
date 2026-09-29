import { education, experience, recognition } from '../content'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function Experience() {
  return (
    <Section id="experience" blueprint>
      <SectionHeading
        index="02"
        title="Experience"
        lede="A career built at the intersection of engineering systems, operating constraints and business outcomes."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {experience.map((job, index) => (
          <Reveal key={job.org + job.title} className={index === 0 ? 'lg:col-span-2' : ''}>
            <article className="group relative h-full overflow-hidden border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-8">
              <div className="absolute right-0 top-0 h-28 w-28 opacity-30" style={{ backgroundImage: 'linear-gradient(135deg, transparent 49%, var(--c-accent) 50%, transparent 51%)' }} />
              <div className="relative flex flex-col justify-between gap-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="stat text-xs text-accent">{job.dates}</div>
                    <div className="stat text-[10px] uppercase tracking-[0.18em] text-faint">0{index + 1} / {experience.length}</div>
                  </div>
                  <h3 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{job.title}</h3>
                  <div className="mt-1 text-sm text-muted">{job.org}</div>
                  {job.note && <div className="mt-2 text-xs text-faint">{job.note}</div>}
                </div>

                <ul className={index === 0 ? 'grid gap-x-10 gap-y-4 md:grid-cols-2' : 'space-y-4'}>
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>

                {index === 0 && (
                  <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
                    <div className="bg-surface p-4"><Stat value="500+" label="programs" size="sm" /></div>
                    <div className="bg-surface p-4"><Stat value="₹8 Cr" label="vertical revenue" size="sm" /></div>
                    <div className="bg-surface p-4"><Stat value="+20%" label="throughput" size="sm" /></div>
                    <div className="bg-surface p-4"><Stat value="-15%" label="turnaround" size="sm" /></div>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
        <div className="bg-surface p-6 sm:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">Recognition</h3>
          <div className="mt-5 grid grid-cols-2 gap-6">
            {recognition.map((r) => <Stat key={r.label} value={r.value} label={r.label} size="sm" />)}
          </div>
        </div>
        <div className="bg-surface p-6 sm:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">Education</h3>
          <ul className="mt-5 space-y-5">
            {education.map((ed) => (
              <li key={ed.title}>
                <div className="text-sm font-semibold tracking-tight">{ed.title}</div>
                <div className="mt-1 text-sm leading-relaxed text-muted">{ed.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
