import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Achievements from './components/Achievements'
import Insights from './components/Insights'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScaleBar } from './components/ui'

export default function App() {
  return (
    <>
      <Nav />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-ink"
      >
        Skip to content
      </a>

      <main>
        <Hero />
        <About />
        <Experience />

        {/* The theme's hinge: blueprint dissolves into boardroom here. */}
        <div className="py-4">
          <ScaleBar label="Blueprint → Boardroom" />
        </div>

        <CaseStudies />
        <Achievements />
        <Insights />
        <Skills />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
