import { site } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-5 sm:flex-row sm:items-center sm:px-8">
        <p className="stat text-xs text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs text-faint">Built with Vite, React &amp; Tailwind. Blueprint to Boardroom.</p>
      </div>
    </footer>
  )
}
