import smoothie1 from '../assets/Smoothie1.webp'
import smoothie2 from '../assets/Smoothie2.webp'
import smoothie3 from '../assets/Smoothie3.webp'
import smoothie4 from '../assets/Smoothie4.webp'
import smoothie5 from '../assets/Smoothie5.webp'
import smoothie6 from '../assets/Smoothie6.webp'
import smoothie7 from '../assets/Smoothie7.webp'
import smoothie8 from '../assets/Smoothie8.webp'

const galleryItems = [
  { src: smoothie1, title: 'Smoothie 1' },
  { src: smoothie2, title: 'Smoothie 2' },
  { src: smoothie3, title: 'Smoothie 3' },
  { src: smoothie4, title: 'Smoothie 4' },
  { src: smoothie5, title: 'Smoothie 5' },
  { src: smoothie6, title: 'Smoothie 6' },
  { src: smoothie7, title: 'Smoothie 7' },
  { src: smoothie8, title: 'Smoothie 8' },
]

function GalleryPage() {
  return (
    <section className="gallery-page" aria-label="Stone Mountain Yogurt gallery">
      <header className="page-heading-block">
        <p className="eyebrow">Gallery</p>
        <h2>Flavor snapshots from the shop.</h2>
        <p>
          Bright cups, creamy blends, and colorful swirls from Stone Mountain Yogurt.
        </p>
      </header>

      <div className="gallery-montage">
        {galleryItems.map((item, index) => (
          <figure key={item.title} className={`gallery-card tone-${(index % 4) + 1}`}>
            <img src={item.src} alt={item.title} className="gallery-image" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage
