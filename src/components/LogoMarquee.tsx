import { clientLogos } from '../content'

/** Organisations whose EV-charger programs were worked on at ARAI. Transparent marks, pauses on hover. */
export default function LogoMarquee() {
  const row = [...clientLogos, ...clientLogos]
  return (
    <div>
      <div className="stat mb-4 text-[10px] uppercase tracking-[.2em] text-accent">Who I ran EV-charger programs for</div>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-label="Organisations worked with on EV-charger testing at ARAI">
        <div className="marquee-track">
          {row.map((l, i) => (
            <div key={`${l.name}-${i}`} className="flex h-20 w-44 shrink-0 items-center justify-center px-6 opacity-80 transition-opacity hover:opacity-100" aria-hidden={i >= clientLogos.length}>
              <img src={l.src} alt={i < clientLogos.length ? l.name : ''} style={{ maxHeight: l.h, maxWidth: '100%' }} className="w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 text-[11px] text-faint">Organisations whose EV-charger programs I worked on at ARAI. Logos belong to their owners; no employment by, or endorsement from, these companies is implied.</p>
    </div>
  )
}
