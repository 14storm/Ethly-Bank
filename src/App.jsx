import DisclaimerBanner from './components/DisclaimerBanner'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Security from './sections/Security'
import HowItWorks from './sections/HowItWorks'
import Cards from './sections/Cards'
import Footer from './sections/Footer'
import ChatBot from './components/ChatBot'
import FinalCta from './sections/FinalCta'
import BrandStory from './sections/BrandStory'

function App() {
  return (
    <div className="app">
      <DisclaimerBanner />
      <Navbar />
      <Hero />
      <Features />
      <Security />
      {/* <HowItWorks /> */}
      <Cards />
      <BrandStory />
      <FinalCta />
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App