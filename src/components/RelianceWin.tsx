import { relianceWin } from '../content'
import { Reveal } from './ui'

/** Renders only when the Reliance case-competition facts exist in content.ts. */
export default function RelianceWin() {
  const w = relianceWin
  if (!w) return null
  return (
    <section id="reliance" className="stage relative overflow-hidden border-t border-line py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="stat text-[10px] uppercase tracking-[.22em] text-accent">Won under pressure</div>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className={w.image ? 'lg:col-span-7' : 'lg:col-span-12'}>
              <h2 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1] tracking-[-.04em]">{w.competition}</h2>
              <div className="mt-5 inline-block bg-accent px-4 py-2 text-sm font-bold text-accent-ink">{w.result}</div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{w.summary}</p>
              <dl className="mt-7 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-5">
                <div><dt className="stat text-[10px] uppercase tracking-[.16em] text-faint">Date</dt><dd className="mt-1 text-sm font-semibold">{w.date}</dd></div>
                <div><dt className="stat text-[10px] uppercase tracking-[.16em] text-faint">My role</dt><dd className="mt-1 text-sm font-semibold">{w.role}</dd></div>
              </dl>
            </div>
            {w.image && (
              <figure className="lg:col-span-5">
                <img src={w.image.src} alt={w.image.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                {w.image.caption && <figcaption className="stat mt-3 text-[10px] uppercase tracking-[.14em] text-faint">{w.image.caption}</figcaption>}
              </figure>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
