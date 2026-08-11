import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero6 from '../assets/hero6.jpg'
import '../styles/hero.css'

const images = [hero1, hero2, hero3, hero4, hero6]

function Hero() {
  const heroRef = useRef(null)
  const imgRefs = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
      .from(
        '.hero-title .line',
        { opacity: 0, y: 60, duration: 0.9, stagger: 0.15 },
        '-=0.3'
      )
      .from('.hero-subtext', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
      .from('.hero-actions', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from(
        '.hero-image-offset',
        { opacity: 0, x: 20, duration: 0.8 },
        '-=0.6'
      )
      .from(
        '.hero-image-stack',
        { opacity: 0, scale: 1.05, duration: 1 },
        '-=0.7'
      )

    // Crossfade cycle through images, starts after intro finishes
    const cycle = gsap.timeline({ repeat: -1, delay: 1.5 })

    imgRefs.current.forEach((img, i) => {
      if (i === 0) return
      cycle.to(imgRefs.current[i - 1], { opacity: 0, duration: 1 }, `+=2`)
      cycle.to(img, { opacity: 1, duration: 1 }, '<')
    })

    // loop back to first image
    cycle.to(imgRefs.current[imgRefs.current.length - 1], {
      opacity: 0,
      duration: 1,
    }, '+=2')
    cycle.to(imgRefs.current[0], { opacity: 1, duration: 1 }, '<')
  }, { scope: heroRef })

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">Ethly Bank</span>

          <h1 className="hero-title">
            <span className="line">Your money,</span>
            <span className="line">
              held to a <span className="hero-gold">higher</span>
            </span>
            <span className="line">standard.</span>
          </h1>

          <p className="hero-subtext">
            No hidden fees. No waiting rooms. Just a bank account that
            moves as fast as you do — built for people who expect more.
          </p>

          <div className="hero-actions">
            <a href="/register" className="btn-gold btn-lg">
              Open an account
            </a>
            <a href="#how-it-works" className="btn-ghost btn-lg">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-offset" />
          <div className="hero-image-stack">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Ethly Bank customer ${i + 1}`}
                className="hero-image"
                ref={(el) => (imgRefs.current[i] = el)}
                style={{ opacity: i === 0 ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero