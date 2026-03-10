import { menuCards, milkshakeFlavors, toppings } from '../data/menuData'

function MenuPage() {
  return (
    <section className="menu-page" id="menu" aria-label="Stone Mountain Yogurt menu">
      <header className="page-heading-block">
        <p className="eyebrow">Menu Board</p>
        <h2>Build your dessert your way.</h2>
        <p>
          Cups, sundaes, coffee drinks, smoothies, and extras. Mix flavors, layer toppings,
          and go simple or all-in.
        </p>
      </header>

      <div className="menu-masonry">
        {menuCards.map((card) => (
          <article key={card.title} className="menu-tile">
            <h3>{card.title}</h3>
            {card.price ? <p className="price-chip">{card.price}</p> : null}
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

      <article className="menu-wide-panel">
        <h3>Toppings</h3>
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

      <article className="menu-wide-panel">
        <h3>Milkshake Flavors</h3>
        <div className="tag-cloud">
          {milkshakeFlavors.map((flavor) => (
            <span key={flavor} className="menu-tag">{flavor}</span>
          ))}
        </div>
      </article>
    </section>
  )
}

export default MenuPage
