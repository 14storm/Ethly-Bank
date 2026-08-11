import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ctaBg from '../assets/cta-background.png'
import '../styles/finalcta.css'

gsap.registerPlugin(ScrollTrigger)

function FinalCta() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.cta-title .line', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
    })

    gsap.from('.cta-subtext, .cta-button', {
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
    })

    // subtle parallax on the background image
    gsap.to('.cta-bg-img', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: sectionRef })

  return (
    <section className="final-cta" ref={sectionRef}>
      <div className="cta-bg">
        <img src={ctaBg} alt="" className="cta-bg-img" />
        <div className="cta-overlay" />
      </div>

      <div className="cta-content">
        <h2 className="cta-title">
          <span className="line">Banking,</span>
          <span className="line">reimagined.</span>
        </h2>

        <p className="cta-subtext">
          Everything you need to manage your money, wherever life
          takes you.
        </p>

        <a href="/register" className="cta-button">
          Get Started
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  )
}

export default FinalCta