import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const STORAGE_KEY = 'sp-theme'

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function storedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

/**
 * Theme starts from the OS preference and follows it until the user makes an
 * explicit choice. Once chosen, the choice is persisted and pins the theme via
 * an explicit class on <html> (see index.css).
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => storedTheme() ?? systemTheme())
  const [isExplicit, setIsExplicit] = useState<boolean>(() => storedTheme() != null)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    if (isExplicit) root.classList.add(theme)
  }, [theme, isExplicit])

  useEffect(() => {
    if (isExplicit) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setTheme(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [isExplicit])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* private mode / storage disabled — theme still applies for this session */
      }
      return next
    })
    setIsExplicit(true)
  }, [])

  return { theme, toggle }
}
