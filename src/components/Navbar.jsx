import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Ethly Bank" className="navbar-logo" />
          <span className="navbar-name">ETHLY</span>
        </Link>

        {!isAuthPage && (
          <>
            <div className="navbar-links">
              <a href="#features">Features</a>
              <a href="#security">Security</a>
              <a href="#how-it-works">How it works</a>
            </div>

            <div className="navbar-actions">
              <Link to="/login" className="btn-ghost">Login</Link>
              <Link to="/register" className="btn-gold">Get Started</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar