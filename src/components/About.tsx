import { about } from '../content'
import { PortfolioImage } from './PortfolioImage'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function About() {
  return (
    <Section id="about" blueprint>
      <SectionHeading index="01" title={about.heading} lede={about.lede} />

      <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-start lg:gap-10">
        <PortfolioImage
          {...about.headshot}
          desaturate
          aspectClassName="aspect-[4/5]"
          objectPosition="object-top"
          className="w-full lg:w-[280px] lg:shrink-0"
        />

        <div className="flex-1">
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
                  {beat.stats && (
                    <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                      {beat.stats.map((s) => (
                        <li key={s.label}>
                          <Stat value={s.value} label={s.label} size="sm" />
                        </li>
                      ))}
                    </ul>
                  )}
                  {beat.image && (
                    <PortfolioImage
                      {...beat.image}
                      aspectClassName="aspect-[3/1]"
                      objectPosition="object-center"
                      className="mt-5 max-w-2xl"
                    />
                  )}
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-12">
            <p className="max-w-2xl border-l-2 border-accent pl-5 text-xl font-medium leading-snug text-ink sm:text-2xl">
              {about.close}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
