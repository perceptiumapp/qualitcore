import { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      document.getElementById('main-nav')?.classList.toggle('scrolled', window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  return (
    <nav id="main-nav">
      <a href="#" className="nav-logo">
        <div className="nav-logo-mark">QC</div>
        <div className="nav-logo-text">Qualit<span>Core</span></div>
      </a>

      {/* Desktop nav links (unchanged) */}
      <ul className="nav-links">
        <li><a href="#modules">Módulos</a></li>
        <li><a href="#features">Funcionalidades</a></li>
        <li><a href="#regulatory">Regulatório</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#tech">Tecnologia</a></li>
      </ul>

      {/* Desktop CTA (unchanged) */}
      <a href="#cta" className="nav-cta nav-cta-desktop">Solicitar demonstração</a>

      {/* Hamburger button (mobile only) */}
      <button
        className={`hamburger${menuOpen ? ' hamburger--active' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        type="button"
      >
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </button>

      {/* Mobile overlay backdrop */}
      <div
        className={`mobile-overlay${menuOpen ? ' mobile-overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__content">
          <ul className="mobile-nav-links">
            <li style={{ animationDelay: '0.05s' }}>
              <a href="#modules" onClick={closeMenu}>
                <span className="mobile-nav-icon">&#9670;</span>
                Módulos
              </a>
            </li>
            <li style={{ animationDelay: '0.1s' }}>
              <a href="#features" onClick={closeMenu}>
                <span className="mobile-nav-icon">&#9670;</span>
                Funcionalidades
              </a>
            </li>
            <li style={{ animationDelay: '0.15s' }}>
              <a href="#regulatory" onClick={closeMenu}>
                <span className="mobile-nav-icon">&#9670;</span>
                Regulatório
              </a>
            </li>
            <li style={{ animationDelay: '0.2s' }}>
              <a href="#roadmap" onClick={closeMenu}>
                <span className="mobile-nav-icon">&#9670;</span>
                Roadmap
              </a>
            </li>
            <li style={{ animationDelay: '0.25s' }}>
              <a href="#tech" onClick={closeMenu}>
                <span className="mobile-nav-icon">&#9670;</span>
                Tecnologia
              </a>
            </li>
          </ul>

          <div className="mobile-drawer__cta-wrapper">
            <a href="#cta" className="mobile-drawer__cta" onClick={closeMenu}>
              Solicitar demonstração
              <span className="mobile-drawer__cta-arrow">&rarr;</span>
            </a>
          </div>

          <div className="mobile-drawer__footer">
            <div className="mobile-drawer__brand">
              <div className="nav-logo-mark" style={{ width: 28, height: 28, fontSize: 12 }}>QC</div>
              <span>QualitCore</span>
            </div>
            <p className="mobile-drawer__tagline">Plataforma de Gestão da Qualidade</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
