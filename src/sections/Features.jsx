import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TickCircle } from 'iconsax-react'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
import '../styles/features.css'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    image: phone1,
    title: 'Send & Receive',
    text: 'Move money easily.',
    badgeText: 'Sent',
    badgeClass: 'badge-success',
  },
  {
    image: phone2,
    title: 'Pay Bills',
    text: 'Pay everyday expenses.',
    badgeText: 'Paid ✓',
    badgeClass: 'badge-paid',
  },
  {
    image: phone3,
    title: 'Manage Money',
    text: 'Stay on top of your finances.',
    badgeText: '+18.2% this month',
    badgeClass: 'badge-stat',
  },
]

function Features() {
  const sectionRef = useRef(null)
  const phoneRefs = useRef([])
  const badgeRefs = useRef([])
  const stepRefs = useRef([])

  useGSAP(() => {
    gsap.from('.features-eyebrow, .features-title, .features-subtext', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })

    const mm = gsap.matchMedia()

    // Desktop: pinned single phone panel that swaps per step
    mm.add('(min-width: 900px)', () => {
      gsap.to('.features-scroll-panel .floating-badge', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      const track = sectionRef.current.querySelector('.features-track')
      const panel = sectionRef.current.querySelector('.features-scroll-panel')

      const pinTrigger = ScrollTrigger.create({
        trigger: track,
        start: 'top top+=80',
        end: 'bottom bottom',
        pin: panel,
        pinSpacing: false,
      })

      const stepTriggers = stepRefs.current.map((step, i) =>
        ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => activatePhone(i),
          onEnterBack: () => activatePhone(i),
        })
      )

      function activatePhone(index) {
        phoneRefs.current.forEach((img, i) => {
          gsap.set(img, { opacity: i === index ? 1 : 0 })
        })
        badgeRefs.current.forEach((badge, i) => {
          gsap.to(badge, {
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 0.7,
            duration: 0.5,
            ease: 'back.out(1.7)',
          })
        })
        stepRefs.current.forEach((step, i) => {
          step.classList.toggle('step-active', i === index)
        })
      }

      activatePhone(0)

      return () => {
        pinTrigger.kill()
        stepTriggers.forEach((t) => t.kill())
      }
    })

    // Mobile: each step reveals its own inline phone as it scrolls into view
    mm.add('(max-width: 899px)', () => {
      const inlineMockups = gsap.utils.toArray('.mockup-inline')

      inlineMockups.forEach((mockup) => {
        gsap.from(mockup, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mockup,
            start: 'top 85%',
          },
        })

        gsap.to(mockup.querySelector('.floating-badge'), {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      stepRefs.current.forEach((step) => step.classList.add('step-active'))
    })

    return () => mm.revert()
  }, { scope: sectionRef })

  return (
    <section className="features" ref={sectionRef} id="features">
      <div className="features-inner">
        <span className="features-eyebrow">The Ethly Experience</span>
        <h2 className="features-title">
          Everything you need.
          <br />
          Nothing you don't.
        </h2>
        <p className="features-subtext">
          From sending money to managing your account, Ethly keeps
          banking simple.
        </p>
      </div>

      <div className="features-track">
        <div className="features-steps">
          {features.map((f, i) => (
            <div
              className={`feature-step ${i === 0 ? 'step-active' : ''}`}
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
            >
              <span className="feature-step-num">0{i + 1}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>

              {/* Mobile-only: this step's own phone image right below its text */}
              <div className="mockup mockup-inline">
                <img src={f.image} alt={f.title} className="mockup-phone" />
                <div className={`floating-badge ${f.badgeClass}`}>
                  {f.badgeClass === 'badge-success' && (
                    <TickCircle size={16} color="#111111" variant="Bold" />
                  )}
                  <span>{f.badgeText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only: single pinned phone that swaps per step */}
        <div className="features-scroll-panel">
          <div className="mockup">
            {features.map((f, i) => (
              <img
                key={i}
                src={f.image}
                alt={f.title}
                className="mockup-phone"
                ref={(el) => (phoneRefs.current[i] = el)}
                style={{ opacity: i === 0 ? 1 : 0 }}
              />
            ))}

            {features.map((f, i) => (
              <div
                key={i}
                className={`floating-badge ${f.badgeClass}`}
                ref={(el) => (badgeRefs.current[i] = el)}
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                {f.badgeClass === 'badge-success' && (
                  <TickCircle size={16} color="#111111" variant="Bold" />
                )}
                <span>{f.badgeText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features