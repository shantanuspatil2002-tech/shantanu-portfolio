import { about } from '../content'
import { PortfolioImage } from './PortfolioImage'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function About() {
  return <Section id="about" blueprint>
    <SectionHeading index="01" title={about.heading} lede={about.lede}/>
    <div className="grid gap-14 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-20">
      <Reveal className="lg:sticky lg:top-24 self-start">
        <div className="image-frame">
          <PortfolioImage {...about.headshot} desaturate aspectClassName="aspect-[4/5]" objectPosition="object-top" className="w-full"/>
        </div>
        <div className="mt-5 flex items-start justify-between border-t border-line pt-4">
          <div><div className="stat text-[9px] uppercase tracking-[.18em] text-accent">Profile / 01</div><div className="mt-1 text-sm font-semibold">Engineer. Operator. Builder.</div></div>
          <span className="stat text-[10px] text-faint">SP / 26</span>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-px border border-line bg-line">
          <div className="bg-surface p-4"><Stat value="AIR 1" label="eBAJA 2023" size="sm"/></div>
          <div className="bg-surface p-4"><Stat value="₹3.76L" label="sponsorship raised" size="sm"/></div>
        </div>
      </Reveal>
      <div className="min-w-0">
        <ol className="divide-y divide-line border-y border-line">
          {about.beats.map((beat,i)=><li key={beat.tag}><Reveal className="py-7 sm:py-8"><article className="grid gap-5 sm:grid-cols-[48px_1fr]"><div className="stat text-xs text-accent">0{i+1}</div><div><div className="text-[10px] uppercase tracking-[.18em] text-faint">{beat.tag}</div><h3 className="mt-2 text-2xl font-semibold tracking-[-.035em]">{beat.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{beat.body}</p>{beat.stats&&<ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">{beat.stats.map(s=><li key={s.label}><Stat value={s.value} label={s.label} size="sm"/></li>)}</ul>}{beat.image&&<PortfolioImage {...beat.image} aspectClassName="aspect-[3/1]" objectPosition="object-center" className="mt-6 max-w-2xl overflow-hidden"/>}</div></article></Reveal></li>)}
        </ol>
        <Reveal className="mt-8 border border-accent/30 bg-accent/5 p-6 sm:p-8"><div className="stat text-[9px] uppercase tracking-[.2em] text-accent">Working principle</div><div className="mt-3 text-2xl font-semibold leading-tight tracking-[-.035em]">“I learned the industry first.”</div><div className="mt-3 max-w-2xl text-sm leading-7 text-muted">{about.story.join(' ')}</div></Reveal>
      </div>
    </div>
  </Section>
}
