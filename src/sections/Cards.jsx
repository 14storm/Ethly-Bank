import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import '../styles/cards.css'

gsap.registerPlugin(ScrollTrigger)

const options = [
  {
    key: 'virtual',
    number: '01',
    title: 'Virtual Card',
    text: 'Ready whenever you are. Make online purchases, subscriptions, and digital payments without needing your physical card.',
    features: ['Instant access', 'Built for online payments'],
    image: phone1,
  },
  {
    key: 'physical',
    number: '02',
    title: 'Physical Card',
    text: 'Your everyday Ethly card. Tap, swipe, or withdraw cash wherever your card is accepted.',
    features: ['Contactless payments', 'Use it wherever you go'],
    image: phone2,
  },
]

function Cards() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState('virtual')
  const imgRefs = useRef({})

  const activeOption = options.find((o) => o.key === active)

  useGSAP(() => {
    gsap.from('.cards-label, .cards-heading h2, .cards-heading p', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })

    gsap.from('.cards-showcase', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.cards-showcase', start: 'top 80%' },
    })
  }, { scope: sectionRef })

  function handleSwitch(key) {
    if (key === active) return

    Object.entries(imgRefs.current).forEach(([k, el]) => {
      gsap.to(el, {
        opacity: k === key ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      })
    })

    setActive(key)
  }

  return (
    <section className="cards-section" ref={sectionRef}>
      <div className="cards-container">

        {/* HEADER */}
        <div className="cards-heading">
          <span className="cards-label">ETHLY CARDS</span>

          <h2>
            One account.
            <br />
            <span>Two ways to pay.</span>
          </h2>

          <p>
            Choose the card that works best for you. Use your
            virtual card for digital payments or carry the
            physical card wherever you go.
          </p>
        </div>

        {/* TABS — desktop */}
        <div className="cards-tabs">
          {options.map((o) => (
            <button
              key={o.key}
              className={`cards-tab ${active === o.key ? 'cards-tab-active' : ''}`}
              onClick={() => handleSwitch(o.key)}
            >
              {o.title}
            </button>
          ))}
        </div>

        {/* TOGGLE — mobile */}
        <div className="cards-toggle-wrap">
          <span className={`toggle-label ${active === 'physical' ? 'toggle-label-active' : ''}`}>
            Physical
          </span>

          <button
            className="cards-toggle"
            role="switch"
            aria-checked={active === 'virtual'}
            onClick={() => handleSwitch(active === 'virtual' ? 'physical' : 'virtual')}
          >
            <span className={`cards-toggle-knob ${active === 'virtual' ? 'knob-right' : 'knob-left'}`} />
          </button>

          <span className={`toggle-label ${active === 'virtual' ? 'toggle-label-active' : ''}`}>
            Virtual
          </span>
        </div>

        {/* SHOWCASE */}
        <div className="cards-showcase">

          <div className="cards-image-wrapper">
            {options.map((o) => (
              <img
                key={o.key}
                src={o.image}
                alt={o.title}
                className="ethly-cards-image"
                ref={(el) => (imgRefs.current[o.key] = el)}
                style={{ opacity: active === o.key ? 1 : 0 }}
              />
            ))}
          </div>

          <div className="card-option-content">
            <span className="card-option-number">{activeOption.number}</span>
            <h3>{activeOption.title}</h3>
            <p>{activeOption.text}</p>

            {activeOption.features.map((f, i) => (
              <div className="card-feature" key={i}>
                <span>0{i + 1}</span>
                {f}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cards