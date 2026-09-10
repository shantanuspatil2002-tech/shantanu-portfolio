import { motorsport } from '../content'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function Motorsport() {
  return (
    <Section id="motorsport" blueprint>
      <SectionHeading index="03" title={motorsport.heading} lede={motorsport.lede} />

      <Reveal>
        <p className="stat text-xs uppercase tracking-widest text-accent">{motorsport.org}</p>
        <div className="mt-5 max-w-2xl space-y-4">
          {motorsport.intro.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {para}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid grid-cols-1 gap-8 border-y border-line py-8 sm:grid-cols-3">
          {motorsport.stats.map((s) => (
            <li key={s.label}>
              <Stat value={s.value} label={s.label} size="lg" />
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-ink">
          What it built
        </h3>
        <ul className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {motorsport.built.map((item) => (
            <li key={item.title}>
              <Reveal className="border-l-2 border-accent pl-5">
                <h4 className="text-base font-semibold tracking-tight">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 border-l-2 border-line pl-4 text-xs italic leading-relaxed text-faint">
        {motorsport.note}
      </p>
    </Section>
  )
}
