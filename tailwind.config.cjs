const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{ts,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        // All colours are driven from CSS custom properties defined in src/index.css.
        // Light and dark are two value sets for the same tokens — never duplicated markup.
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        'surface-2': 'var(--c-surface-2)',
        line: 'var(--c-line)',
        ink: 'var(--c-ink)',
        muted: 'var(--c-muted)',
        faint: 'var(--c-faint)',
        accent: 'var(--c-accent)',
        'accent-ink': 'var(--c-accent-ink)',
        blueprint: 'var(--c-blueprint)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
