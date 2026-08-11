import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ethlyVideo from '../assets/ethlyvideo.mp4'
import '../styles/brandstory.css'

gsap.registerPlugin(ScrollTrigger)

function BrandStory() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.story-label, .story-title .line, .story-text', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })

    gsap.from('.story-video-wrap', {
      opacity: 0,
      y: 50,
      scale: 0.97,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.story-video-wrap', start: 'top 80%' },
    })
  }, { scope: sectionRef })

  return (
    <section className="brand-story" ref={sectionRef}>
      <div className="story-container">

        <div className="story-heading">
          <span className="story-label">WHY WE BUILT ETHLY</span>

          <h2 className="story-title">
            <span className="line">Banking shouldn't</span>
            <span className="line">
              feel like a <span className="story-gold">chore</span>.
            </span>
          </h2>

          <p className="story-text">
            We built Ethly because managing money should be simple,
            fast, and honest — no hidden fees, no confusing menus,
            no waiting in line. Just a bank that works the way you do.
          </p>
        </div>

        <div className="story-video-wrap">
          <video
            className="story-video"
            src={ethlyVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </section>
  )
}

export default BrandStory