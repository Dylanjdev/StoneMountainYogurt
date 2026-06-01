function ContactPage() {
  return (
    <section className="contact-page" aria-label="Stone Mountain Yogurt contact page">
      <header className="page-heading-block">
        <p className="eyebrow">Contact</p>
        <h2>Visit, call, or message us.</h2>
        <p>
          Reach us by phone or email, or stop in for a fresh cup on Main Street.
        </p>
      </header>

      <div className="contact-stack-grid">
        <article className="stack-card">
          <h3>Address</h3>
          <p>124 Main St</p>
          <p>Pennington Gap, VA 24277</p>
          <a className="inline-link" href="https://maps.google.com/?q=124+Main+St+Pennington+Gap+VA+24277" target="_blank" rel="noreferrer">
            Open in Maps
          </a>
        </article>

        <article className="stack-card standout">
          <h3>Call</h3>
          <p className="feature-line">276-295-2302</p>
          <a className="inline-link" href="tel:2762952302">Call Now</a>
        </article>

        <article className="stack-card">
          <h3>Email</h3>
          <p>StoneMountainYogurt@gmail.com</p>
          <a className="inline-link" href="mailto:StoneMountainYogurt@gmail.com">Send Email</a>
        </article>

        <article className="stack-card">
          <h3>Hours</h3>
          <p>Thursday-Sunday</p>
          <p>12 PM-8 PM</p>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
