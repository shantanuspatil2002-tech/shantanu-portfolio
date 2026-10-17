import type { MediaGroup } from '../content'
import { PortfolioImage } from './PortfolioImage'

const cols = (n: number, artifact: boolean) =>
  artifact || n === 2 ? 'sm:grid-cols-2' : n === 1 ? 'max-w-2xl' : 'sm:grid-cols-2 lg:grid-cols-3'

export default function MediaGrid({ groups }: { groups: MediaGroup[] }) {
  return (
    <div className="mt-8 space-y-9 border-t border-line pt-7">
      {groups.map((g) => {
        const artifact = g.layout === 'artifact'
        return (
          <div key={g.title}>
            <div className="stat text-[9px] uppercase tracking-[.2em] text-accent">{g.title}</div>
            {g.note && <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{g.note}</p>}
            <ul className={`mt-4 grid gap-4 ${cols(g.items.length, artifact)}`}>
              {g.items.map((it) => (
                <li key={it.src}>
                  <PortfolioImage
                    {...it}
                    href={it.src}
                    aspectClassName={artifact ? 'aspect-[16/10]' : 'aspect-[4/3]'}
                    fit={artifact ? 'object-contain' : 'object-cover'}
                  />
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
