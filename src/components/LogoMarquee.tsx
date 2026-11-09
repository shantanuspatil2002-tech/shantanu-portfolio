import { clientLogos } from '../content'

/** Organisations whose EV-charger programs were worked on at ARAI. Pauses on hover. */
export default function LogoMarquee() {
  const row = [...clientLogos, ...clientLogos]
  return (
    <div>
      <div className="stat mb-3 text-[10px] uppercase tracking-[.2em] text-accent">Who I ran EV-charger programs for</div>
      <div className="marquee overflow-hidden" aria-label="Organisations worked with on EV-charger testing at ARAI">
        <div className="marquee-track gap-3">
          {row.map((l, i) => (
            <div key={`${l.name}-${i}`} className="flex h-24 w-44 shrink-0 items-center justify-center bg-white px-6" aria-hidden={i >= clientLogos.length}>
              <img src={l.src} alt={i < clientLogos.length ? l.name : ''} style={{ maxHeight: l.h, maxWidth: '100%' }} className="w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[11px] text-faint">Organisations whose EV-charger programs I worked on at ARAI. Logos belong to their owners; no employment by, or endorsement from, these companies is implied.</p>
    </div>
  )
}
