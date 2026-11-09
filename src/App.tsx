import FloatNav from './sections/FloatNav'
import HeroV2 from './sections/HeroV2'
import ScrollQuote from './sections/ScrollQuote'
import HorizontalStory from './sections/HorizontalStory'
import RelianceWin from './components/RelianceWin'
import CaseCarousel from './sections/CaseCarousel'
import DeviceScroll from './sections/DeviceScroll'
import ExperienceBeam from './sections/ExperienceBeam'
import BentoCreds from './sections/BentoCreds'
import ContactV2 from './sections/ContactV2'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <FloatNav />
      <a href="#story" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-ink">Skip to content</a>
      <main>
        <HeroV2 />
        <ScrollQuote />
        <HorizontalStory />
        <RelianceWin />
        <CaseCarousel />
        <DeviceScroll />
        <ExperienceBeam />
        <BentoCreds />
        <ContactV2 />
      </main>
    </>
  )
}
