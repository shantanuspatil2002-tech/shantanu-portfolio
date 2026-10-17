import { timeline, type TimelineItem } from '../content'
import { PortfolioImage } from './PortfolioImage'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const { axisStart, axisEnd } = timeline

// 'YYYY-MM' -> fractional year, so bars are time-scaled and overlaps show.
const frac = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return y + (m - 1) / 12
}
const pct = (year: number) => ((year - axisStart) / (axisEnd - axisStart)) * 100
const fmt = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}
const range = (it: TimelineItem) => `${fmt(it.start)} – ${it.end ? fmt(it.end) : 'present'}`

const years = Array.from({ length: axisEnd - axisStart }, (_, i) => axisStart + i)
const laneLabels: Record<TimelineItem['lane'], string> = {
  study: 'Study',
  work: 'Work',
  alongside: 'Alongside',
}
const lanes = ['study', 'alongside', 'work'] as const
const chapters = ['Build', 'Test', 'Improve', 'Scale']

function Bar({ item }: { item: TimelineItem }) {
  const left = pct(frac(item.start))
  const width = pct(item.end ? frac(item.end) : axisEnd) - left
  const story = Boolean(item.verb)
  return (
    <li
      title={`${item.name}: ${range(item)}. ${item.note}`}
      className={`absolute inset-y-1 overflow-hidden px-2 py-1 ${
        story ? 'border border-accent bg-accent/10' : 'border border-line bg-surface-2'
      } ${item.end ? '' : '[mask-image:linear-gradient(to_right,black_55%,transparent)]'}`}
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      {item.verb && (
        <div className="stat truncate text-[8px] uppercase tracking-[.16em] text-accent">{item.verb}</div>
      )}
      <div className="truncate text-[11px] font-medium leading-4">{item.name}</div>
    </li>
  )
}

export default function Timeline() {
  const chapterItems = chapters
    .map((verb) => timeline.items.find((i) => i.verb === verb))
    .filter((i): i is TimelineItem => Boolean(i))
  const chronological = [...timeline.items].sort((a, b) => frac(a.start) - frac(b.start))

  return (
    <div>
      {/* Desktop: time-scaled lanes. Hidden from assistive tech; the list below carries the same data. */}
      <div aria-hidden className="hidden md:block">
        <div className="space-y-2">
          {lanes.map((lane) => (
            <div key={lane} className="grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3">
              <span className="stat text-[9px] uppercase tracking-[.16em] text-faint">{laneLabels[lane]}</span>
              <ul className="relative h-12 border-y border-line">
                {timeline.items.filter((i) => i.lane === lane).map((i) => <Bar key={i.id} item={i} />)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-[72px_minmax(0,1fr)] gap-3">
          <span />
          <div className="relative h-4">
            {years.map((y) => (
              <span
                key={y}
                className="stat absolute top-0 -translate-x-1/2 text-[9px] text-faint"
                style={{ left: `${pct(y)}%` }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile and screen readers: the same milestones as a dated list. */}
      <ol className="divide-y divide-line border-y border-line md:sr-only">
        {chronological.map((i) => (
          <li key={i.id} className="grid grid-cols-[96px_1fr] gap-3 py-3">
            <div className="stat text-[10px] leading-4 text-faint">{range(i)}</div>
            <div>
              <div className="text-sm font-semibold">
                {i.name}
                {i.verb && <span className="stat ml-2 text-[9px] uppercase tracking-[.16em] text-accent">{i.verb}</span>}
              </div>
              <div className="mt-0.5 text-xs leading-5 text-muted">{i.note}</div>
            </div>
          </li>
        ))}
      </ol>

      {/* The four chapters of the story, one line each. */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {chapterItems.map((i) => (
          <li key={i.id} className="border-t border-accent pt-3">
            {i.image && <PortfolioImage {...i.image} aspectClassName="aspect-[4/3]" className="mb-3" />}
            <div className="stat text-[10px] uppercase tracking-[.18em] text-accent">{i.verb}</div>
            <div className="mt-1 text-sm font-semibold">{i.name}</div>
            <div className="stat mt-1 text-[9px] text-faint">{range(i)}</div>
            <p className="mt-2 text-xs leading-5 text-muted">{i.note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
