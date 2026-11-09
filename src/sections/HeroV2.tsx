import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { about, hero, signature } from '../content'
import { useAudience } from '../hooks/useAudience'
import Magnetic from '../fx/Magnetic'
import LogoMarquee from '../components/LogoMarquee'

const words = (s: string) => s.split(' ')
const L1 = words('I find where a business is stuck,')
const L2 = words('and build the system that gets it moving.')

function Word({ w, i }: { w: string; i: number }) {
  return <span className="word-in mr-[.26em]" style={{ animationDelay: `${0.15 + i * 0.07}s` }}>{w}</span>
}

function Chip({ label, value, className, depth, mx, my }: { label: string; value: string; className: string; depth: number; mx: ReturnType<typeof useSpring>; my: ReturnType<typeof useSpring> }) {
  const x = useTransform(mx, (v) => v * depth)
  const y = useTransform(my, (v) => v * depth)
  return (
    <motion.div style={{ x, y }} className={`absolute z-20 border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md ${className}`}>
      <div className="stat text-xl font-semibold leading-none sm:text-2xl">{value}</div>
      <div className="mt-1 text-[9px] uppercase tracking-[.14em] text-faint">{label}</div>
    </motion.div>
  )
}

export default function HeroV2() {
  const audience = useAudience()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const mx = useSpring(px, { stiffness: 120, damping: 18 })
  const my = useSpring(py, { stiffness: 120, damping: 18 })
  const rotateY = useTransform(mx, (v) => v * 0.06)
  const rotateX = useTransform(my, (v) => v * -0.06)

  return (
    <section id="top" className="stage relative isolate overflow-hidden pt-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[620px] w-[620px] rounded-full bg-accent/20 blur-[120px]" />
      <div aria-hidden className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="section-shell grid min-h-[calc(100svh-7rem)] items-center gap-12 pb-10 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="fade-rise stat text-[11px] uppercase tracking-[.22em] text-accent">{audience ? `Prepared for ${audience.name}` : hero.kicker}</div>
          <h1 className="mt-6 font-serif text-[clamp(2.6rem,6.2vw,5.6rem)] font-semibold leading-[.98] tracking-[-.045em]" aria-label={`${L1.join(' ')} ${L2.join(' ')}`}>
            <span aria-hidden>{L1.map((w, i) => <Word key={i} w={w} i={i} />)}</span>
            <br />
            <span aria-hidden className="text-accent">{L2.map((w, i) => <Word key={i} w={w} i={i + L1.length} />)}</span>
          </h1>
          <p className="fade-rise mt-7 max-w-lg text-lg text-muted" style={{ animationDelay: '1.5s' }}>
            <b className="text-ink">Shantanu Patil.</b> Operator turned consultant. {signature}
          </p>
          {audience && <p className="mt-3 max-w-lg text-sm text-muted"><span className="stat mr-2 text-[10px] uppercase tracking-[.18em] text-accent">Relevant to {audience.name}</span>{audience.relevance}</p>}
          <div className="fade-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '1.8s' }}>
            <Magnetic><a href="#story" className="inline-flex bg-accent px-7 py-4 text-sm font-bold text-accent-ink">See the work ↓</a></Magnetic>
            <Magnetic><a href={hero.ctas[0].href} download className="inline-flex border border-white/20 px-6 py-4 text-sm font-semibold hover:border-accent hover:text-accent">Download resume</a></Magnetic>
            <a href={hero.ctas[2].href} target="_blank" rel="noreferrer" className="px-2 py-4 text-sm font-semibold text-muted hover:text-accent">LinkedIn ↗</a>
          </div>
        </div>

        <div
          ref={ref}
          className="relative mx-auto w-full max-w-[420px] [perspective:1000px]"
          onMouseMove={(e) => {
            if (reduce || !ref.current) return
            const r = ref.current.getBoundingClientRect()
            px.set(e.clientX - (r.left + r.width / 2))
            py.set(e.clientY - (r.top + r.height / 2))
          }}
          onMouseLeave={() => { px.set(0); py.set(0) }}
        >
          <motion.div style={reduce ? undefined : { rotateX, rotateY }} className="fade-rise relative [transform-style:preserve-3d]" >
            <img src={about.headshot.src} alt={about.headshot.alt} width={about.headshot.width} height={about.headshot.height} className="aspect-[4/5] w-full object-cover object-top shadow-[0_40px_120px_rgba(0,0,0,.6)]" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
          <Chip label="programs, zero escalations" value="500+" className="-left-4 top-[14%] sm:-left-10" depth={0.08} mx={mx} my={my} />
          <Chip label="monthly profit, Prodmax" value="+14.4%" className="-right-3 top-[44%] sm:-right-10" depth={-0.1} mx={mx} my={my} />
          <Chip label="eBAJA 2023, 1 of 81" value="AIR 1" className="-left-2 bottom-[8%] sm:-left-8" depth={0.12} mx={mx} my={my} />
        </div>
      </div>

      <div className="section-shell pb-10 pt-4"><LogoMarquee /></div>
    </section>
  )
}
