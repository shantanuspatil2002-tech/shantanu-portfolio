import { useState } from 'react'
import { insights } from '../content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Insights() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <Section id="insights">
      <SectionHeading
        index="05"
        title="Insights"
        lede="Short essays on EV infrastructure, operations and consulting."
      />

      {insights.length === 0 ? (
        <Reveal className="rounded-md border border-dashed border-line p-10 text-center">
          <p className="text-sm text-muted">More essays coming soon.</p>
        </Reveal>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((piece, i) => {
            const open = openIdx === i
            return (
              <Reveal key={piece.title} className="flex flex-col border border-line bg-surface p-6">
                <div className="stat text-[11px] uppercase tracking-widest text-faint">
                  {piece.readTime}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{piece.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{piece.excerpt}</p>

                {piece.body && piece.body.length > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? null : i)}
                      aria-expanded={open}
                      className="mt-4 self-start text-sm font-medium text-ink transition-colors hover:text-accent"
                    >
                      {open ? 'Close' : 'Read'}
                    </button>
                    {open && (
                      <div className="mt-4 space-y-3 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                        {piece.body.map((para, p) => (
                          <p key={p}>{para}</p>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {piece.href && !piece.body && (
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 self-start text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    Read →
                  </a>
                )}
              </Reveal>
            )
          })}
        </div>
      )}
    </Section>
  )
}
