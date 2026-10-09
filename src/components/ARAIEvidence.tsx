import { Reveal, Section, SectionHeading } from './ui'

const standards = [
  { code:'01', title:'Standards mapping', items:['IS 17017','IEC 61851','AIS','CMVR'] },
  { code:'02', title:'Electrical / EMC', items:['DC EMC','EMC testing','Charger safety'] },
  { code:'03', title:'Test operations', items:['500+ programs','Scheduling','KPI dashboard'] },
  { code:'04', title:'Certification output', items:['Compliance statement','Audit readiness','NABL / ISO'] },
]

export default function ARAIEvidence() {
  return <Section id="arai-evidence" className="border-y border-line bg-surface">
    <SectionHeading index="02" eyebrow="ARAI deep-dive" title="Inside the EV compliance work" lede="The work was not just running tests. It connected standards, lab capability, test operations and certification output."/>
    <div className="grid gap-px border border-line bg-line lg:grid-cols-[1.15fr_.85fr]">
      <Reveal className="bg-bg p-7 sm:p-10">
        <div className="stat text-[9px] uppercase tracking-[.2em] text-accent">ARAI / EV charger certification flow</div>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {standards.map((item,i)=><div key={item.code} className="relative border border-line bg-surface p-5">
            {i<standards.length-1&&<div aria-hidden className="absolute -right-3 top-1/2 z-10 hidden h-px w-6 bg-accent sm:block"/>}
            <div className="stat text-[9px] text-accent">{item.code}</div>
            <h3 className="mt-4 text-sm font-semibold leading-5">{item.title}</h3>
            <ul className="mt-4 space-y-1.5">{item.items.map(x=><li key={x} className="text-[10px] leading-4 text-muted">{x}</li>)}</ul>
          </div>)}
        </div>
        <div className="mt-8 border-l-2 border-accent bg-accent/5 p-5">
          <div className="stat text-[9px] uppercase tracking-[.18em] text-accent">Operating result</div>
          <p className="mt-2 max-w-2xl text-sm leading-6">20% higher testing throughput and 15% lower turnaround time after standardising scheduling across the client portfolio.</p>
        </div>
      </Reveal>
      <Reveal className="bg-surface-2 p-7 sm:p-10">
        <div className="stat text-[9px] uppercase tracking-[.2em] text-accent">Evidence, without exposing client IP</div>
        <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-.045em]">A certification system, not a single test.</h3>
        <div className="mt-8 border-y border-line">
          {[['30 mo','EV compliance operations'],['500+','programs delivered'],['2','engineers in the vertical'],['7','contract staff coordinated'],['3','departments using KPI dashboard']].map(([v,l])=><div key={l} className="flex items-center justify-between border-b border-line py-4 last:border-b-0"><span className="text-xs text-muted">{l}</span><span className="stat text-xl font-semibold">{v}</span></div>)}
        </div>
        <p className="mt-6 text-xs leading-5 text-faint">No confidential lab photographs or customer documents are reproduced here. This is a visual reconstruction of the documented workflow.</p>
      </Reveal>
    </div>
  </Section>
}
