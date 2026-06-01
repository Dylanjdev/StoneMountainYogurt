import { NavLink, Outlet } from 'react-router-dom'
import stoneLogo from '../assets/StoneLogo.webp'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Social Media', to: '/social' },
  { label: 'Text Club', to: '/text-club' },
  { label: 'Contact', to: '/contact' },
]

function SiteLayout() {
  return (
    <div className="site-shell" id="home">
      <div className="ambient-bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
        <span className="grid-wash" />
      </div>

      <header className="ticker">
        <p>OPEN NOW • WINTER HOURS • THU-SUN 12 PM-8 PM • 124 MAIN ST, PENNINGTON GAP</p>
      </header>

      <div className="frame-wrap">
        <div className="masthead">
          <div className="brand-block">
            <img src={stoneLogo} className="brand-mini-logo" alt="Stone Mountain Yogurt logo" />
            <div>
              <p className="eyebrow">Stone Mountain Yogurt</p>
              <h1 className="brand-wordmark">Frozen. Bright. Local.</h1>
            </div>
          </div>

          <div className="masthead-actions">
            <a href="tel:2762952302" className="call-pill" aria-label="Call Stone Mountain Yogurt">
              Call 276-295-2302
            </a>
            <a
              href="https://maps.google.com/?q=124+Main+St+Pennington+Gap+VA+24277"
              className="ghost-pill"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          if (item.to) {
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            )
          }

          return (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          )
        })}
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className="site-footer">
          <section className="footer-branding">
            <p className="footer-kicker">STONE MOUNTAIN YOGURT</p>
            <p className="footer-title">Main Street flavor lab for frozen yogurt and sweet drinks.</p>
          </section>

          <section className="footer-details">
            <p>124 Main St, Pennington Gap, VA 24277</p>
            <p>
              <a href="tel:2762952302">276-295-2302</a> •{' '}
              <a href="mailto:StoneMountainYogurt@gmail.com">StoneMountainYogurt@gmail.com</a>
            </p>
            <p>Thu-Sun 12 PM-8 PM</p>
            <p>
              <NavLink to="/privacy-policy" className="inline-link">Privacy Policy</NavLink>
            </p>
            <p>
              <NavLink to="/terms-and-conditions" className="inline-link">Terms & Conditions</NavLink>
            </p>
            <p>
              Built By Smith Digitals •{' '}
              <a href="https://smithdigitals.com" target="_blank" rel="noreferrer">
                smithdigitals.com
              </a>
            </p>
          </section>

          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/stonemountainyogurt"
              target="_blank"
              rel="noreferrer"
              className="social-foot-link"
              aria-label="Open Stone Mountain Yogurt Facebook page"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@stonemountainyogurt"
              target="_blank"
              rel="noreferrer"
              className="social-foot-link"
              aria-label="Open Stone Mountain Yogurt TikTok page"
            >
              TikTok
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SiteLayout
