import { hero } from '../content'
import { Stat } from './ui'

/** Schematic connector-trace motif - understated, not clipart. */
function BlueprintMotif() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[420px] w-[560px] -translate-y-1/2 text-accent/70 lg:block"
      viewBox="0 0 560 420"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.55">
        {/* dimension bracket */}
        <path d="M40 40h120M40 36v8M160 36v8" />
        <path d="M40 380h480M40 376v8M520 376v8" />
        {/* CCS2-ish connector schematic: outline + pins */}
        <circle cx="300" cy="200" r="110" />
        <circle cx="300" cy="150" r="26" />
        <circle cx="256" cy="230" r="20" />
        <circle cx="344" cy="230" r="20" />
        <circle cx="300" cy="150" r="6" fill="currentColor" />
        <circle cx="256" cy="230" r="6" fill="currentColor" />
        <circle cx="344" cy="230" r="6" fill="currentColor" />
        {/* trace leaving the connector, resolving to a clean node */}
        <path d="M410 200h60v-90h70" />
        <circle cx="540" cy="110" r="5" fill="currentColor" />
        <path d="M300 310v50h180" />
        <circle cx="480" cy="360" r="5" fill="currentColor" />
      </g>
      <text x="40" y="28" className="stat" fill="currentColor" fontSize="11" opacity="0.5">
        FIG. 01 - CCS2 / IS 17017
      </text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0"
      />
      <BlueprintMotif />

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">
        <p className="stat text-xs uppercase tracking-[0.2em] text-accent">{hero.kicker}</p>

        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {hero.heading}
        </h1>

        <p className="mt-5 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
          {hero.statement}
        </p>
        <p className="mt-3 max-w-2xl text-base font-medium text-muted sm:text-lg">
          {(() => {
            // Break the positioning line at the "|" so the second half
            // ("EV, Automotive & Mobility") always sits on its own line.
            const [primary, secondary] = hero.positioning.split(' | ')
            return (
              <>
                {primary}
                {secondary && <span className="block">{secondary}</span>}
              </>
            )
          })()}
        </p>
        <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4 text-lg font-medium leading-snug text-ink sm:text-xl">
          {hero.thesisQuote}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{hero.sub}</p>
        <p className="mt-2 max-w-2xl text-sm text-faint">{hero.availability}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              {...('download' in cta && cta.download ? { download: true } : {})}
              {...('external' in cta && cta.external
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              className={
                cta.kind === 'primary'
                  ? 'rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90'
                  : 'rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent'
              }
            >
              {cta.label}
            </a>
          ))}
        </div>

        <ul className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {hero.quickStats.map((s) => (
            <li key={s.label}>
              <Stat value={s.value} label={s.label} size="md" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
