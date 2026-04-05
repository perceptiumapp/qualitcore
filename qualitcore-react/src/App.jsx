import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Certs from './components/Certs'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import Modules from './components/Modules'
import Features from './components/Features'
import Regulatory from './components/Regulatory'
import Stats from './components/Stats'
import Roadmap from './components/Roadmap'
import Highlight from './components/Highlight'
import TechStack from './components/TechStack'
import CTA from './components/CTA'
import Footer from './components/Footer'

function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })

    document.querySelectorAll('h2, .module-card, .problem-card, .wave-card, .reg-card, .stat-block, .how-step, .feat-item').forEach(el => {
      el.classList.add('fade-up')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function App() {
  useFadeUp()

  return (
    <>
      <Navbar />
      <Hero />
      <Certs />
      <Problems />
      <HowItWorks />
      <Modules />
      <Features />
      <Regulatory />
      <Stats />
      <Roadmap />
      <Highlight />

      <CTA />
      <Footer />
    </>
  )
}

export default App
