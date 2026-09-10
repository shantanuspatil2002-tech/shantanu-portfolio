import { useEffect, useState } from 'react'
import { nav, site } from '../content'
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.id)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="#top" className="stat text-sm font-semibold tracking-tight text-ink">
          SP<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-sm transition-colors hover:text-ink ${
                active === n.id ? 'text-ink' : 'text-muted'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            download
            className="hidden rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90 sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-bg px-5 pb-4 pt-2 md:hidden"
          aria-label="Sections"
        >
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
