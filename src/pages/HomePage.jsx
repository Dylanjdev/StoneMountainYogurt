import { Link } from 'react-router-dom'
import storeFront from '../assets/StoreFront.webp'
import stoneLogo from '../assets/StoneLogo.webp'

const spotlightItems = [
  {
    id: 'swirl',
    title: 'Swirl Bar',
    text: 'Mix flavors, layer toppings, and build your own cup exactly how you want it.',
  },
  {
    id: 'sips',
    title: 'Sip Menu',
    text: 'Frappes, smoothies, floats, and refreshers built for weekend walks downtown.',
  },
  {
    id: 'community',
    title: 'Community Spot',
    text: 'A bright stop for families, students, and anyone craving something sweet and cold.',
  },
]

function HomePage() {
  return (
    <>
      <section className="hero-stage" aria-label="Stone Mountain Yogurt welcome section">
        <div className="hero-copy-panel">
          <p className="eyebrow">Pennington Gap, Virginia</p>
          <h2>Frozen yogurt with loud flavor and small-town energy.</h2>
          <p className="hero-support">
            From classic swirls to candy-loaded creations, Stone Mountain Yogurt is your quick
            stop for dessert, coffee-inspired drinks, and weekend treats.
          </p>
          <div className="hero-cta-row">
            <Link to="/menu" className="action-btn solid">Explore Menu</Link>
            <Link to="/text-club" className="action-btn outline">Join Text Club</Link>
          </div>
        </div>

        <div className="hero-visual-panel">
          <img src={stoneLogo} className="stone-logo" alt="Stone Mountain Yogurt logo" />
          <div className="metric-strip" role="presentation">
            <p>
              <span>30+</span> milkshake flavors
            </p>
            <p>
              <span>4</span> days a week open
            </p>
            <p>
              <span>1</span> local favorite stop
            </p>
          </div>
        </div>
      </section>

      <section className="storefront-ribbon" aria-label="Front of Stone Mountain Yogurt store">
        <div className="storefront-copy">
          <p className="eyebrow">Visit The Shop</p>
          <h3>Main Street storefront. Big color. Better dessert.</h3>
          <p>
            We are in the center of downtown Pennington Gap, serving frozen yogurt, shakes,
            parfaits, and sweet add-ons all day.
          </p>
          <Link to="/contact" className="inline-link">See Contact + Hours</Link>
        </div>
        <div className="storefront-image-wrap">
          <img src={storeFront} className="storefront-image" alt="Front of Stone Mountain Yogurt store" />
        </div>
      </section>

      <section className="spotlight-grid" aria-label="Stone Mountain Yogurt highlights">
        {spotlightItems.map((item) => (
          <article key={item.id} id={item.id} className="spotlight-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="contact-band" id="contact" aria-label="Contact details">
        <article>
          <p className="label">Phone</p>
          <p className="value">276-295-2302</p>
        </article>
        <article>
          <p className="label">Address</p>
          <p>124 Main St</p>
          <p>Pennington Gap, VA 24277</p>
        </article>
        <article>
          <p className="label">Hours</p>
          <p>Thursday-Sunday</p>
          <p>12 PM-7 PM</p>
        </article>
      </section>
    </>
  )
}

export default HomePage
