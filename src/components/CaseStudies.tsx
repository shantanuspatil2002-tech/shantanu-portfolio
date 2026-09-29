import { Fragment, useId, useState } from 'react'
import { caseStudies, caseStudyGroups, type CaseStudy } from '../content'
import { PortfolioImage } from './PortfolioImage'
import { Reveal, Section, SectionHeading, Stat } from './ui'

const visualById: Record<string,{src:string;alt:string}> = {
  baja:{src:'images/baja-team.jpg',alt:'Team Predator Racing BAJA team'},
  factoryflow:{src:'images/factoryflow-dashboard.png',alt:'FactoryFlow AI manufacturing dashboard'},
  treasurebox:{src:'images/compendium-aviation.jpg',alt:'Portfolio visual'},
}

function stepsOf(cs:CaseStudy){ return cs.steps ?? [{label:'Situation',text:cs.situation??''},{label:'Approach',text:cs.approach??''},{label:'Result',text:cs.result??''}] }

function VisualPreview({cs}:{cs:CaseStudy}) {
  const visual=visualById[cs.id]
  if(!visual&&!cs.image) return <div className="image-frame aspect-[16/10]"><div className="absolute inset-0 blueprint-grid opacity-60"/><div className="absolute bottom-6 left-6"><div className="stat text-[9px] uppercase tracking-[.2em] text-accent">Exhibit {cs.index}</div><div className="mt-2 text-5xl font-semibold tracking-[-.06em]">{cs.headlineStat.value}</div><div className="mt-2 max-w-xs text-sm text-muted">{cs.headlineStat.label}</div></div></div>
  const image=cs.image??{...visual,width:1600,height:900}
  return <div className="image-frame aspect-[16/10]"><img src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" loading="lazy"/><div className="absolute left-5 top-5 border border-white/40 bg-black/25 px-3 py-2 backdrop-blur"><div className="stat text-[9px] uppercase tracking-[.18em] text-white/80">Exhibit {cs.index}</div><div className="mt-1 text-xs font-medium text-white">{cs.frameLabel}</div></div></div>
}

function Card({cs,defaultOpen=false,flip=false}:{cs:CaseStudy;defaultOpen?:boolean;flip?:boolean}) {
 const [open,setOpen]=useState(defaultOpen); const panelId=useId()
 return <Reveal className="group">
  <article className="border-y border-line py-8 lg:py-10">
   <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${flip?'lg:[&>div:first-child]:order-2':''}`}>
    <div><div className="flex items-center gap-3"><span className="stat text-sm text-accent">{cs.index}</span><span className="h-px w-8 bg-line"/><span className="text-[9px] uppercase tracking-[.18em] text-faint">{cs.frameLabel}</span></div><h3 className="mt-5 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[.95] tracking-[-.055em]">{cs.title}</h3><div className="mt-8"><Stat value={cs.headlineStat.value} label={cs.headlineStat.label} size="lg"/></div><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls={panelId} className="btn btn-secondary mt-8">{open?'Close exhibit':'Open exhibit'}<svg className={`ml-2 transition-transform ${open?'rotate-180':''}`} width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
    <VisualPreview cs={cs}/>
   </div>
   {open&&<div id={panelId} className="mt-10 border-t border-line pt-2">
    {stepsOf(cs).map((s,i)=><Fragment key={s.label}>{i>0&&<div className="scale-bar my-1"/>}<div className="grid gap-2 py-5 sm:grid-cols-[120px_1fr] sm:gap-8"><div className="stat text-[9px] uppercase tracking-[.18em] text-accent">{s.label}</div><p className="max-w-3xl text-sm leading-7 text-muted">{s.text}</p></div></Fragment>)}
    {cs.callout&&<div className="border-l-2 border-accent bg-surface-2 px-5 py-4"><div className="stat text-[9px] uppercase tracking-[.18em] text-accent">{cs.callout.label}</div><p className="mt-1 text-sm leading-6">{cs.callout.text}</p></div>}
    {cs.image&&<PortfolioImage {...cs.image} className="mt-6"/>}
    <ul className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-3">{cs.metrics.map(m=><li key={m.label}><Stat value={m.value} label={m.label} size="sm"/></li>)}</ul>
    {cs.link&&<a href={cs.link.href} target="_blank" rel="noreferrer" className="btn btn-secondary mt-7">{cs.link.label}</a>}
   </div>}
  </article>
 </Reveal>
}

function GroupLabel({children}:{children:React.ReactNode}){return <div className="flex items-center gap-4"><span className="stat shrink-0 text-[9px] uppercase tracking-[.2em] text-faint">{children}</span><div className="scale-bar flex-1"/></div>}

export default function CaseStudies(){
 return <Section id="work"><SectionHeading index="03" title="Case Studies" lede="The portfolio is the evidence: each exhibit moves from problem to decision to measurable impact."/><div className="space-y-10">{(['professional','academic'] as const).map(group=>{const items=caseStudies.filter(cs=>cs.group===group);if(!items.length)return null;return <div key={group} className="space-y-3"><GroupLabel>{caseStudyGroups[group]}</GroupLabel>{items.map((cs,i)=><Card key={cs.id} cs={cs} defaultOpen={group==='professional'&&i===0} flip={i%2===1}/>)}</div>})}</div></Section>
}
