import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <img src={logo} alt="Ethly Bank" className="navbar-logo" />
          <span className="navbar-name">ETHLY</span>
        </div>

        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#how-it-works">How it works</a>
        </div>

        <div className="navbar-actions">
          <a href="/login" className="btn-ghost">Login</a>
          <a href="/register" className="btn-gold">Get Started</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar