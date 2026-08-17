import smoothie1 from '../assets/Smoothie1.webp'
import smoothie2 from '../assets/Smoothie2.webp'
import smoothie3 from '../assets/Smoothie3.webp'
import smoothie4 from '../assets/Smoothie4.webp'
import smoothie5 from '../assets/Smoothie5.webp'
import smoothie6 from '../assets/Smoothie6.webp'
import smoothie7 from '../assets/Smoothie7.webp'
import smoothie8 from '../assets/Smoothie8.webp'

const galleryItems = [
  { src: smoothie1, title: 'Berry-loaded parfait', note: 'Layers on layers' },
  { src: smoothie2, title: 'Blended & topped', note: 'Sip happy' },
  { src: smoothie3, title: 'Cool refresher', note: 'Bright and breezy' },
  { src: smoothie4, title: 'Chocolate sundaes', note: 'A timeless duo' },
  { src: smoothie5, title: 'Chocolate parfait', note: 'Brownie bliss' },
  { src: smoothie6, title: 'Cookies & cream', note: 'Crunch in every bite' },
  { src: smoothie7, title: 'Waffle nachos', note: 'Built for dipping' },
  { src: smoothie8, title: 'Caramel crunch', note: 'Sweet meets salty' },
]

function GalleryPage() {
  return (
    <section className="gallery-page" aria-labelledby="gallery-title">
      <header className="page-hero gallery-hero">
        <div>
          <p className="eyebrow">From our counter</p>
          <h1 id="gallery-title">Looks good.<br /><em>Tastes better.</em></h1>
        </div>
        <p className="page-hero-note">Bright cups, creamy blends, and colorful creations made right here in Pennington Gap.</p>
      </header>

      <div className="gallery-grid section-wrap">
        {galleryItems.map((item, index) => (
          <figure key={item.title} className={`gallery-card gallery-card-${index + 1}`}>
            <img src={item.src} alt={item.title} className="gallery-image" loading="lazy" />
            <figcaption><span>{item.title}</span><small>{item.note}</small></figcaption>
          </figure>
        ))}
      </div>

      <section className="gallery-cta section-wrap">
        <p>See the newest specials and creations as they happen.</p>
        <a className="button button-primary" href="https://www.facebook.com/stonemountainyogurt" target="_blank" rel="noreferrer">Follow on Facebook <span aria-hidden="true">↗</span></a>
      </section>
    </section>
  )
}

export default GalleryPage
