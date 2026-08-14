import { Link } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'
import heroImg from '../assets/hero-portrait.png'
import '../styles/auth.css'

function Register() {
  return (
    <section className="auth-page">
      <div className="auth-visual">
        <img src={heroImg} alt="Ethly Bank" className="auth-visual-img" />
        <div className="auth-visual-overlay" />
        <div className="auth-visual-text">
          <span className="auth-visual-eyebrow">Ethly Bank</span>
          <h2>Banking made simple.</h2>
          <p>Open your account in minutes — no paperwork, no waiting.</p>
        </div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-form-inner">
          <Link to="/" className="auth-back-link">
            <ArrowLeft2 size={16} color="#6b6b66" />
            Back to homepage
          </Link>

          <span className="auth-form-label">Get Started</span>
          <h1 className="auth-form-title">Create your account</h1>
          <p className="auth-form-subtext">
            Fill in your details to open your Ethly account.
          </p>

          <form className="auth-form">
            <div className="auth-field">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" placeholder="John Doe" />
            </div>

            <div className="auth-field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="you@example.com" />
            </div>

            <div className="auth-field">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="080X XXX XXXX" />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" />
            </div>

            <div className="auth-field">
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" id="confirm" placeholder="••••••••" />
            </div>

            <label className="auth-checkbox auth-checkbox-terms">
              <input type="checkbox" />
              I agree to the <a href="#" className="auth-link">Terms & Conditions</a>
            </label>

            <button type="submit" className="btn-gold btn-lg auth-submit">
              Create Account
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{' '}
            <Link to="/login" className="auth-link auth-link-gold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register