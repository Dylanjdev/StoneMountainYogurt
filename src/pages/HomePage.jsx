import { Link } from 'react-router-dom'
import bananaSplit from '../assets/Split.webp'
import smoothie1 from '../assets/Smoothie1.webp'
import smoothie4 from '../assets/Smoothie4.webp'
import smoothie7 from '../assets/Smoothie7.webp'
import stoneHero from '../assets/StoneOG.webp'
import storeFront from '../assets/StoreFront.webp'

const treats = [
  {
    number: '01',
    title: 'Pick a base',
    text: 'Cup, cone, parfait, sundae—or skip straight to a shake.',
  },
  {
    number: '02',
    title: 'Load it up',
    text: 'Fruit, candy, crunch, hot fudge, caramel. You know the drill.',
  },
  {
    number: '03',
    title: 'Take the first bite',
    text: 'Find a table inside or carry it down Main Street.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  )
}

function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> 124 Main Street · Pennington Gap</p>
          <h1 id="home-title">Frozen yogurt.<br /><em>Right on Main.</em></h1>
          <p className="hero-lede">
            Find the bright green storefront, choose your swirl, then make it yours. We do
            cups, sundaes, shakes, smoothies, floats—and one glorious banana split.
          </p>
          <div className="button-row">
            <Link to="/menu/" className="button button-primary">See the menu <ArrowIcon /></Link>
            <a href="tel:2762952302" className="button button-text">Call 276-295-2302</a>
          </div>
          <dl className="hero-details">
            <div><dt>Open</dt><dd>Thu—Sun</dd></div>
            <div><dt>Hours</dt><dd>12pm—8pm</dd></div>
            <div><dt>Find us</dt><dd>124 Main St</dd></div>
          </dl>
        </div>

        <div className="hero-media">
          <img src={stoneHero} alt="Two colorful frozen yogurt cones at Stone Mountain Yogurt" />
          <div className="hero-sticker" aria-hidden="true">
            <span>Open</span>
            <strong>12—8</strong>
            <span>Thu—Sun</span>
          </div>
          <div className="hero-note">
            <span className="hero-note-icon">✦</span>
            <p><strong>Small cup / $3.95</strong><br />First topping is on us.</p>
          </div>
        </div>
      </section>

      <section className="intro-section section-wrap" aria-labelledby="pick-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="pick-title">Order it like you mean it.</h2>
          </div>
          <p>No preset formula. Start simple, pile it high, or ask us what’s good today.</p>
        </div>

        <div className="treat-grid">
          {treats.map((item) => (
            <article key={item.number} className="treat-card">
              <span className="treat-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="flavor-ribbon" aria-label="Popular menu categories">
        <div>
          <span>Frozen yogurt</span><i>✦</i><span>Milkshakes</span><i>✦</i><span>Sundaes</span><i>✦</i>
          <span>Fruit smoothies</span><i>✦</i><span>Waffle nachos</span><i>✦</i><span>Banana splits</span><i>✦</i>
        </div>
      </div>

      <section className="split-feature section-wrap" aria-labelledby="split-title">
        <div className="split-photo">
          <img src={bananaSplit} alt="A loaded banana split with yogurt, fruit, whipped cream, and chocolate drizzle" loading="lazy" />
          <span className="photo-caption">One glorious classic</span>
        </div>
        <div className="split-copy">
          <p className="eyebrow">Banana split · $7.50</p>
          <h2 id="split-title">Three swirls. The whole works.</h2>
          <p>
            Three yogurt flavors, strawberries, pineapple, hot fudge or caramel, nuts,
            whipped topping, and the cherry on top.
          </p>
          <div className="price-line"><span>Banana split</span><strong>$7.50</strong></div>
          <Link to="/menu/" className="button button-dark">Explore every treat <ArrowIcon /></Link>
        </div>
      </section>

      <section className="favorites-section section-wrap" aria-labelledby="favorites-title">
        <div className="section-heading">
            <p className="eyebrow">Counter roll · Frames 001—003</p>
          <h2 id="favorites-title">From behind the counter.</h2>
        </div>
        <div className="favorites-grid">
          <figure className="favorite-card favorite-tall">
            <img src={smoothie1} alt="Layered frozen yogurt parfait with strawberries and chocolate chips" loading="lazy" />
            <figcaption><span>Layered parfaits</span><small>Fruit · crunch · swirls</small></figcaption>
          </figure>
          <figure className="favorite-card">
            <img src={smoothie4} alt="Two chocolate sundaes topped with whipped cream and cherries" loading="lazy" />
            <figcaption><span>Classic sundaes</span><small>Made to make your day</small></figcaption>
          </figure>
          <figure className="favorite-card">
            <img src={smoothie7} alt="Waffle nachos with frozen yogurt and caramel drizzle" loading="lazy" />
            <figcaption><span>Waffle nachos</span><small>Dip, crunch, repeat</small></figcaption>
          </figure>
        </div>
        <Link to="/gallery/" className="circle-link" aria-label="View the full gallery"><span>See all<br />the sweets</span><ArrowIcon /></Link>
      </section>

      <section className="visit-section" aria-labelledby="visit-title">
        <div className="visit-photo">
          <img src={storeFront} alt="The green Stone Mountain Yogurt storefront on Main Street" loading="lazy" />
        </div>
        <div className="visit-copy">
          <p className="eyebrow light">The green storefront</p>
          <h2 id="visit-title">124 Main Street. You can’t miss it.</h2>
          <p>Look for the green brick, orange tables, and frozen yogurt sign in downtown Pennington Gap.</p>
          <address>124 Main Street<br />Pennington Gap, Virginia</address>
          <div className="button-row">
            <a className="button button-lime" href="https://maps.google.com/?q=124+Main+St+Pennington+Gap+VA+24277" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a>
            <Link className="button button-text-light" to="/contact/">Hours & contact</Link>
          </div>
        </div>
      </section>

      <section className="closing-cta section-wrap" aria-label="Menu call to action">
        <p className="eyebrow">Thursday—Sunday · 12pm—8pm</p>
        <h2>See you on Main Street.</h2>
        <Link to="/menu/" className="button button-primary">Read the menu <ArrowIcon /></Link>
      </section>
    </>
  )
}

export default HomePage
