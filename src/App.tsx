import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import { GlassmorphismPortfolioBlock } from './components/ui/glassmorphism-portfolio-block-shadcnui'
import LogoMarquee from './components/LogoMarquee'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <Services />
        <Process />
        <Portfolio />
        <GlassmorphismPortfolioBlock />
        <LogoMarquee />
        <Pricing />
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}
