import { Link } from 'react-router-dom'
import { menuCards, milkshakeFlavors, toppings } from '../data/menuData'

function MenuPage() {
  return (
    <section className="menu-page" id="menu" aria-labelledby="menu-title">
      <header className="page-hero menu-hero">
        <div>
          <p className="eyebrow light">The full menu</p>
          <h1 id="menu-title">Find your<br /><em>favorite.</em></h1>
        </div>
        <div className="page-hero-note">
          <p>Cups, sundaes, smoothies, and more. Mix flavors, layer toppings, and go simple or all-in.</p>
          <span>Prices and availability may change.</span>
        </div>
      </header>

      <div className="menu-intro section-wrap">
        <p className="eyebrow">Made your way</p>
        <h2>A whole lot of happy in one menu.</h2>
      </div>

      <div className="menu-grid section-wrap">
        {menuCards.map((card, index) => (
          <article key={card.title} className={`menu-card menu-tone-${(index % 4) + 1}`}>
            <div className="menu-card-head">
              <span>{String(index + 1).padStart(2, '0')}</span>
              {card.price ? <p className="price-chip">{card.price}</p> : null}
            </div>
            <h3>{card.title}</h3>
            <ul>
              {card.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            {card.flavors ? (
              <div className="tag-cloud" aria-label={`${card.title} flavors`}>
                {card.flavors.map((flavor) => (
                  <span key={flavor} className="menu-tag">{flavor}</span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <article className="menu-extras toppings-panel section-wrap">
        <div className="extras-heading">
          <p className="eyebrow light">Pile it on</p>
          <h2>Toppings</h2>
          <p>Fruit, candy, crunch, and a finishing drizzle. Additional toppings are $0.75 each.</p>
        </div>
        <div className="topping-columns">
          {Object.entries(toppings).map(([group, items]) => (
            <section key={group}>
              <h4>{group}</h4>
              <div className="tag-cloud">
                {items.map((item) => (
                  <span key={item} className="menu-tag">{item}</span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <article className="menu-extras shakes-panel section-wrap">
        <div className="extras-heading">
          <p className="eyebrow">More than 30 choices</p>
          <h2>Milkshake flavors</h2>
          <p>From banana pudding to strawberry Nutella, there is a shake for every kind of craving.</p>
        </div>
        <div className="tag-cloud">
          {milkshakeFlavors.map((flavor) => (
            <span key={flavor} className="menu-tag">{flavor}</span>
          ))}
        </div>
      </article>

      <section className="menu-callout section-wrap">
        <div><p className="eyebrow">Need a recommendation?</p><h2>We love a delicious decision.</h2></div>
        <Link to="/contact/" className="button button-dark">Visit the shop <span aria-hidden="true">↗</span></Link>
      </section>
    </section>
  )
}

export default MenuPage
