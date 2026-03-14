import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Experience from './components/Experience'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Register GSAP plugins once at app level
gsap.registerPlugin(ScrollTrigger)

// Global noise texture overlay
function NoiseOverlay() {
  return (
    <svg
      className="noise-overlay"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="bg-[#0D0D12] text-[#FAF8F5] min-h-screen">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <Features />
      <Experience />
      <Philosophy />
      <Protocol />
      <Contact />
      <Footer />
    </div>
  )
}
