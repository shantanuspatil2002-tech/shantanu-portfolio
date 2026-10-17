import { contact, site } from '../content'
import { useAudience } from '../hooks/useAudience'
import { isPrint, Section } from './ui'

export default function Contact() {
  const audience = useAudience()
  return <Section id="contact" className="border-t border-line">
    <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
      <div>
        <span className="stat text-[10px] uppercase tracking-[.2em] text-accent">06 / Contact</span>
        <h2 className="mt-5 max-w-3xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[.88] tracking-[-.065em]">{audience ? `${contact.heading}, ${audience.name}.` : contact.heading}</h2>
        <p className="mt-7 max-w-2xl text-xl font-medium leading-8">{contact.line.split(' | ').map((part,i)=><span key={i} className="block">{part}</span>)}</p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{contact.sub}</p>
      </div>
      <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8">
        <div className="stat text-[9px] uppercase tracking-[.18em] text-faint">Direct</div>
        <a href={`mailto:${site.email}`} className="mt-2 block text-sm font-semibold hover:text-accent">{site.email}</a>
        {isPrint&&<div className="mt-3 space-y-1 text-sm text-muted"><div>LinkedIn: {site.linkedin.replace('https://www.','')}</div><div>Live portfolio: shantanuspatil2002-tech.github.io/shantanu-portfolio</div></div>}
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={`mailto:${site.email}`} className="btn btn-primary">Email me</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href={site.resume} download className="btn btn-secondary">Resume</a>
        </div>
      </div>
    </div>
  </Section>
}
