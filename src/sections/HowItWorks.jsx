import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
import '../styles/howItWorks.css'

gsap.registerPlugin(ScrollTrigger)

function HowItWorks() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.how-it-works-label, .how-it-works-heading h2, .how-it-works-heading p', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })

    gsap.from('.how-card', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.how-it-works-cards', start: 'top 80%' },
    })

    gsap.from('.how-card-visual img', {
      opacity: 0,
      scale: 1.08,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.how-it-works-cards', start: 'top 75%' },
    })
  }, { scope: sectionRef })

  return (
    <section className="how-it-works" ref={sectionRef} id='HowItWorks'>
      <div className="how-it-works-container">

        <div className="how-it-works-heading">
          <span className="how-it-works-label">HOW ETHLY WORKS</span>

          <h2>
            Simple banking,
            <br />
            <span>from start to finish.</span>
          </h2>

          <p>
            Getting started with ETHLY is simple. Create your account,
            fund it, and enjoy everything modern banking has to offer.
          </p>
        </div>

        <div className="how-it-works-cards">

          {/* CARD 01 */}
          <article className="how-card">
            <div className="how-card-top">
              <span className="how-card-number">01</span>
              <span className="how-card-arrow">↗</span>
            </div>

            <div className="how-card-visual">
              <img src={phone1} alt="Create your account" className="how-card-image" />
            </div>

            <div className="how-card-content">
              <h3>Create your account</h3>
              <p>
                Get started with ETHLY in a few simple steps
                and set up your account securely.
              </p>
            </div>
          </article>

          {/* CARD 02 */}
          <article className="how-card">
            <div className="how-card-top">
              <span className="how-card-number">02</span>
              <span className="how-card-arrow">↗</span>
            </div>

            <div className="how-card-visual">
              <img src={phone2} alt="Fund your account" className="how-card-image" />
            </div>

            <div className="how-card-content">
              <h3>Fund your account</h3>
              <p>
                Add money to your ETHLY account and get ready
                to send, spend, save, and pay.
              </p>
            </div>
          </article>

          {/* CARD 03 */}
          <article className="how-card how-card-dark">
            <div className="how-card-top">
              <span className="how-card-number">03</span>
              <span className="how-card-arrow">↗</span>
            </div>

            <div className="how-card-visual">
              <img src={phone3} alt="Start banking" className="how-card-image" />
            </div>

            <div className="how-card-content">
              <h3>Start banking</h3>
              <p>
                Send money, pay bills, manage your cards,
                and stay on top of your finances from one place.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks