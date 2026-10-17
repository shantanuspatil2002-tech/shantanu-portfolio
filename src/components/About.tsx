import { about } from '../content'
import { PortfolioImage } from './PortfolioImage'
import Timeline from './Timeline'
import { Reveal, Section, SectionHeading } from './ui'

export default function About() {
  return <Section id="about" blueprint>
    <SectionHeading index="02" eyebrow="Profile" title={about.heading} lede={about.lede}/>
    <div className="grid gap-14 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-20">
      <Reveal className="lg:sticky lg:top-24 self-start">
        <div className="image-frame">
          <PortfolioImage {...about.headshot} desaturate aspectClassName="aspect-[4/5]" objectPosition="object-top" className="w-full"/>
        </div>
        <div className="mt-5 flex items-start justify-between border-t border-line pt-4">
          <div className="text-sm font-semibold">Engineer. Operator. Builder.</div>
        </div>
      </Reveal>
      <div className="min-w-0">
        <Reveal><Timeline /></Reveal>
        <Reveal className="mt-10 border border-accent/30 bg-accent/5 p-6 sm:p-8"><div className="stat text-[9px] uppercase tracking-[.2em] text-accent">In short</div><div className="mt-3 max-w-2xl text-base leading-7 text-ink">{about.story.join(' ')}</div></Reveal>
      </div>
    </div>
  </Section>
}
