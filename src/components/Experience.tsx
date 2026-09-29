import { education, experience, recognition } from '../content'
import { Reveal, Section, SectionHeading, Stat } from './ui'

export default function Experience() {
  return <Section id="experience">
    <SectionHeading index="02" title="Experience" lede="A career built at the intersection of engineering systems, operating constraints and business outcomes."/>
    <div className="space-y-5">
      {experience.map((job,index)=><Reveal key={job.org+job.title}><article className="grid overflow-hidden border border-line bg-surface lg:grid-cols-[190px_minmax(0,1fr)]">
        <div className="border-b border-line bg-surface-2 p-5 lg:border-b-0 lg:border-r"><div className="stat text-[11px] text-accent">{job.dates}</div><div className="mt-5 stat text-[9px] uppercase tracking-[.18em] text-faint">0{index+1} / {experience.length}</div></div>
        <div className="p-6 sm:p-8 lg:p-10"><div className="max-w-3xl"><h3 className="text-3xl font-semibold tracking-[-.045em]">{job.title}</h3><div className="mt-1 text-sm text-muted">{job.org}</div>{job.note&&<div className="mt-2 text-xs text-faint">{job.note}</div>}</div><ul className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2">{job.bullets.map((b,i)=><li key={i} className="flex gap-3 text-sm leading-7 text-muted"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/><span>{b.text}</span></li>)}</ul>{index===0&&<div className="mt-9 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">{[['30 mo','EV compliance'],['2','engineers in vertical'],['7','contract staff coordinated'],['3','departments using KPI dashboard']].map(([v,l])=><div key={l} className="bg-surface p-4 sm:p-5"><Stat value={v} label={l} size="sm"/></div>)}</div>}</div>
      </article></Reveal>)}
    </div>
    <Reveal className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
      <div className="bg-surface p-7 sm:p-9"><h3 className="text-[10px] font-semibold uppercase tracking-[.18em] text-faint">Recognition</h3><div className="mt-7 grid grid-cols-2 gap-7">{recognition.map(r=><Stat key={r.label} value={r.value} label={r.label} size="sm"/>)}</div></div>
      <div className="bg-surface p-7 sm:p-9"><h3 className="text-[10px] font-semibold uppercase tracking-[.18em] text-faint">Education</h3><ul className="mt-7 space-y-5">{education.map(ed=><li key={ed.title}><div className="text-sm font-semibold">{ed.title}</div><div className="mt-1 text-sm leading-6 text-muted">{ed.detail}</div></li>)}</ul></div>
    </Reveal>
  </Section>
}
