import { about } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function About() {
  return (
    <Section id="about" blueprint>
      <SectionHeading index="01" title={about.heading} lede={about.lede} />

      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {about.beats.map((beat, i) => (
          <li key={beat.tag} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+1px)] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg sm:-left-[calc(2rem+1px)]"
            />
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="stat text-xs text-accent">{`0${i + 1}`}</span>
                <span className="text-xs uppercase tracking-widest text-faint">{beat.tag}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{beat.title}</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{beat.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-12">
        <p className="max-w-2xl border-l-2 border-accent pl-5 text-xl font-medium leading-snug text-ink sm:text-2xl">
          {about.close}
        </p>
      </Reveal>
    </Section>
  )
}
