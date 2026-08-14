import { Link } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'
import heroImg from '../assets/hero-portrait.png'
import '../styles/auth.css'

function Login() {
  function handleSubmit(e) {
    e.preventDefault()
    // form logic will go here later (validation, API call, etc.)
    console.log('Login form submitted')
  }

  return (
    <section className="auth-page">
      <div className="auth-visual">
        <img src={heroImg} alt="Ethly Bank" className="auth-visual-img" />
        <div className="auth-visual-overlay" />
        <div className="auth-visual-text">
          <span className="auth-visual-eyebrow">Ethly Bank</span>
          <h2>Welcome back.</h2>
          <p>Log in to send money, pay bills, and manage your account.</p>
        </div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-form-inner">
          <Link to="/" className="auth-back-link">
            <ArrowLeft2 size={16} color="#6b6b66" />
            Back to homepage
          </Link>

          <span className="auth-form-label">Login</span>
          <h1 className="auth-form-title">Log in to your account</h1>
          <p className="auth-form-subtext">
            Enter your details below to access your account.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="email">Email or Account Number</label>
              <input type="text" id="email" placeholder="you@example.com" />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" />
            </div>

            <div className="auth-field-row">
              <label className="auth-checkbox">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="auth-link">Forgot password?</a>
            </div>

            <button type="submit" className="btn-gold btn-lg auth-submit">
              Log In
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{' '}
            <Link to="/register" className="auth-link auth-link-gold">
              Get started
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login