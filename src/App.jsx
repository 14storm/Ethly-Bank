import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Security from './sections/Security'
import HowItWorks from './sections/HowItWorks'
import Cards from './sections/Cards'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <HowItWorks />
      <Cards />
      <Footer />
      
    </div>
  )
}

export default App