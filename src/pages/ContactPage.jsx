import storeFront from '../assets/StoreFront.webp'

function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <header className="page-hero contact-hero">
        <div>
          <p className="eyebrow">Come on in</p>
          <h1 id="contact-title">Your next treat<br /><em>is this way.</em></h1>
        </div>
        <p className="page-hero-note">Find us in downtown Pennington Gap. Bring your favorite people—and your biggest sweet tooth.</p>
      </header>

      <div className="contact-layout section-wrap">
        <div className="contact-photo">
          <img src={storeFront} alt="Stone Mountain Yogurt's bright green storefront at 124 Main Street" />
          <a className="button button-lime" href="https://maps.google.com/?q=124+Main+St+Pennington+Gap+VA+24277" target="_blank" rel="noreferrer">Open in maps <span aria-hidden="true">↗</span></a>
        </div>

        <div className="contact-details">
          <section className="contact-detail contact-address">
            <p className="eyebrow">Find us</p>
            <h2>124 Main Street</h2>
            <p>Pennington Gap, VA 24277</p>
          </section>

          <section className="contact-detail">
            <p className="eyebrow">Shop hours</p>
            <div className="hours-row"><span>Thursday—Sunday</span><strong>12pm—8pm</strong></div>
            <div className="hours-row muted"><span>Monday—Wednesday</span><strong>Closed</strong></div>
          </section>

          <section className="contact-detail contact-links">
            <p className="eyebrow">Talk to us</p>
            <a href="tel:2762952302"><span>Call</span><strong>276-295-2302</strong></a>
            <a href="mailto:StoneMountainYogurt@gmail.com"><span>Email</span><strong>Send a message ↗</strong></a>
          </section>
        </div>
      </div>

      <section className="contact-note section-wrap">
        <span>✦</span><p>Questions about flavors, specials, or a big order? Give us a call—we’re happy to help.</p>
      </section>
    </section>
  )
}

export default ContactPage
