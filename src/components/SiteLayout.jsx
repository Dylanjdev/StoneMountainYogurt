import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import stoneLogo from '../assets/StoneLogo.webp'
import Seo from './Seo'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu/' },
  { label: 'Gallery', to: '/gallery/' },
  { label: 'Social', to: '/social/' },
  { label: 'Visit', to: '/contact/' },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  )
}

function SiteLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="site-shell">
      <Seo />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="announcement-bar">
        <div className="announcement-inner">
          <p><span className="status-dot" />Serving Thursday—Sunday, 12pm—8pm</p>
          <p className="announcement-address">124 Main St · Pennington Gap, VA</p>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="site-brand" aria-label="Stone Mountain Yogurt home">
            <img src={stoneLogo} alt="Stone Mountain Yogurt" />
          </Link>

          <nav id="primary-navigation" className={`main-nav${isNavOpen ? ' open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                end={item.to === '/'}
                onClick={() => setIsNavOpen(false)}
              >
                <span aria-hidden="true">0{index + 1}</span>{item.label}
              </NavLink>
            ))}
          </nav>

          <a
            className="header-cta"
            href="https://maps.google.com/?q=124+Main+St+Pennington+Gap+VA+24277"
            target="_blank"
            rel="noreferrer"
          >
            124 Main / directions <ArrowIcon />
          </a>

          <button
            type="button"
            className={`mobile-menu-toggle${isNavOpen ? ' active' : ''}`}
            aria-controls="primary-navigation"
            aria-expanded={isNavOpen}
            aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main-content" className="page-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <section className="footer-branding">
            <img src={stoneLogo} alt="Stone Mountain Yogurt" />
            <p>Bright green storefront. Big frozen-yogurt energy. Right in the middle of Main Street.</p>
          </section>

          <section className="footer-nav" aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            {navItems.slice(1).map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
          </section>

          <section className="footer-visit">
            <p className="footer-label">Come say hello</p>
            <address>124 Main St<br />Pennington Gap, VA 24277</address>
            <p>Thursday—Sunday<br />12pm—8pm</p>
          </section>

          <section className="footer-contact">
            <p className="footer-label">Stay in touch</p>
            <a href="tel:2762952302">276-295-2302</a>
            <a href="mailto:StoneMountainYogurt@gmail.com">Email the shop</a>
            <div className="footer-socials">
              <a href="https://www.facebook.com/stonemountainyogurt" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.tiktok.com/@stonemountainyogurt" target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </section>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Stone Mountain Yogurt</p>
          <p>Made with care in Pennington Gap · Site by <a href="https://smithdigitals.com" target="_blank" rel="noreferrer">Smith Digitals</a></p>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
