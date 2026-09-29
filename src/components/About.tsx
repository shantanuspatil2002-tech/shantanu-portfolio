import { about } from '../content'
import { PortfolioImage } from './PortfolioImage'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function About() {
  return (
    <Section id="about" blueprint>
      <SectionHeading index="01" title={about.heading} lede={about.lede} />

      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-24">
          <div className="relative">
            <div className="absolute -inset-3 border border-line/70" />
            <PortfolioImage
              {...about.headshot}
              desaturate
              aspectClassName="aspect-[4/5]"
              objectPosition="object-top"
              className="relative w-full"
            />
            <div className="absolute -bottom-4 -right-4 border border-line bg-surface px-4 py-3 shadow-sm">
              <div className="stat text-[10px] uppercase tracking-[0.18em] text-accent">Profile / 01</div>
              <div className="mt-1 text-sm font-semibold">Engineer. Operator. Builder.</div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line">
            <div className="bg-surface p-4"><Stat value="30+" label="months in EV compliance" size="sm" /></div>
            <div className="bg-surface p-4"><Stat value="14.4%" label="profit uplift delivered" size="sm" /></div>
          </div>
        </Reveal>

        <div>
          <ol className="space-y-5">
            {about.beats.map((beat, i) => (
              <li key={beat.tag}>
                <Reveal>
                  <article className="group border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-7">
                    <div className="flex items-start gap-5">
                      <div className="stat text-xs text-accent">0{i + 1}</div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-faint">{beat.tag}</div>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{beat.title}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{beat.body}</p>
                        {beat.stats && (
                          <ul className="mt-5 flex flex-wrap gap-6 border-t border-line pt-5">
                            {beat.stats.map((s) => <li key={s.label}><Stat value={s.value} label={s.label} size="sm" /></li>)}
                          </ul>
                        )}
                        {beat.image && (
                          <PortfolioImage
                            {...beat.image}
                            aspectClassName="aspect-[3/1]"
                            objectPosition="object-center"
                            className="mt-5 max-w-2xl overflow-hidden"
                          />
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-8 border border-accent/30 bg-accent/5 p-6 sm:p-8">
            <div className="stat text-[10px] uppercase tracking-[0.2em] text-accent">Working principle</div>
            <div className="mt-3 max-w-2xl text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              “I learned the industry first.”
            </div>
            <div className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {about.story.join(' ')}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
