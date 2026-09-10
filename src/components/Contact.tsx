import { contact, site } from '../content'
import { Section } from './ui'

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-line">
      <div className="max-w-2xl">
        <span className="stat text-sm text-accent">09</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-4 text-lg font-medium text-ink">
          {contact.line.split(' | ').map((part, i) => (
            <span key={i} className="block">
              {part}
            </span>
          ))}
        </p>
        <p className="mt-2 text-base text-muted">{contact.sub}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            Email Me
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.resume}
            download
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            Download Resume
          </a>
        </div>

        <p className="stat mt-8 text-xs text-faint">{site.email}</p>
      </div>
    </Section>
  )
}
