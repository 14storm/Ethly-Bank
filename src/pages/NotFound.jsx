import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Loader from '../components/Loader'
import '../styles/notfound.css'

function NotFound() {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.from('.notfound-loader, .notfound-title, .notfound-text, .notfound-button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    })
  }, { scope: pageRef })

  return (
    <section className="notfound-page" ref={pageRef}>
      <div className="notfound-inner">
        <div className="notfound-loader">
          <Loader />
        </div>
        <h1 className="notfound-title">Lost your way?</h1>
        <p className="notfound-text">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn-gold btn-lg notfound-button">
          Back to homepage
        </Link>
      </div>
    </section>
  )
}

export default NotFound