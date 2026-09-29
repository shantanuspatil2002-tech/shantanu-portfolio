import { skills } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

const standards = [
  ['EV / Compliance', 'IS 17017', 'IEC 61851', 'AIS', 'CMVR', 'CCS2', 'EMC'],
  ['Operations', 'Six Sigma DMAIC', 'Lean', 'CPM', '5S', 'Kanban', 'SMED'],
  ['Analytics', 'Excel Solver', 'Power Query', 'SQL', 'Python', 'Power BI'],
  ['Strategy', 'Business transformation', 'Implementation strategy', 'Market sizing', 'KPI design', 'Stakeholder management'],
]

export default function Skills() {
  return <Section id="skills" blueprint>
    <SectionHeading index="04" title="Capability stack" lede="The technical domain knowledge, operating methods and analytical tools behind the work."/>
    <div className="grid border-y border-line md:grid-cols-2">
      {standards.map(([heading,...items],i)=><Reveal key={heading} className="border-b border-line p-6 sm:p-8 md:[&:nth-child(odd)]:border-r md:[&:nth-last-child(-n+2)]:border-b-0">
        <div className="stat text-[10px] uppercase tracking-[.18em] text-accent">0{i+1}</div>
        <h3 className="mt-4 text-xl font-semibold tracking-[-.025em]">{heading}</h3>
        <div className="mt-5 flex flex-wrap gap-2">{items.map(item=><span key={item} className="border border-line bg-surface px-3 py-2 text-xs font-medium text-ink">{item}</span>)}</div>
      </Reveal>)}
    </div>
    <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
      {skills.map(row=><div key={row.heading} className="bg-surface p-6"><div className="stat text-[9px] uppercase tracking-[.18em] text-faint">{row.heading}</div><p className="mt-4 text-sm leading-6 text-muted">{row.items.join(' · ')}</p></div>)}
    </div>
  </Section>
}
