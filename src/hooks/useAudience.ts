import { useState } from 'react'
import { audiences, type Audience } from '../content'

/**
 * Optional personalised link: /?for=tata-motors shows "Prepared for Tata Motors"
 * plus one relevance line. Only keys listed in `audiences` (content.ts) are
 * honoured, so a crafted link can never put arbitrary text on the page.
 */
export function useAudience(): Audience | null {
  const [audience] = useState<Audience | null>(() => {
    if (typeof window === 'undefined') return null
    const key = new URLSearchParams(window.location.search).get('for')?.trim().toLowerCase()
    return key && Object.prototype.hasOwnProperty.call(audiences, key) ? audiences[key] : null
  })
  return audience
}
