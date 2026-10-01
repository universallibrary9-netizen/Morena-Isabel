import { useState } from 'react'
import { SplashScreen } from './components/SplashScreen'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { GratitudeLetter } from './components/GratitudeLetter'
import { GallerySection } from './components/GallerySection'
import { Footer } from './components/Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [siteVisible, setSiteVisible] = useState(false)

  const handleEnterSite = () => {
    // SplashScreen handles its own fade-out, then calls this
    setShowSplash(false)
    setSiteVisible(true)
  }

  return (
    <div
      className="relative min-h-screen"
      style={{ background: 'linear-gradient(180deg, #09070F 0%, #120c18 50%, #09070F 100%)' }}
    >
      {/* Splash Screen */}
      {showSplash && <SplashScreen onEnter={handleEnterSite} />}

      {/* Main Site */}
      {siteVisible && (
        <div
          className="animate-fade-in"
          style={{ animationDuration: '1s' }}
        >
          <Navbar />
          <main className="pt-14">
            <HeroSection />
            <GratitudeLetter />
            <GallerySection />
          </main>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
