function TermsPage() {
  return (
    <section className="contact-page" aria-label="Stone Mountain Yogurt terms and conditions">
      <header className="page-heading-block">
        <p className="eyebrow">Terms & Conditions</p>
        <h2>Stone Mountain Yogurt Text Club terms.</h2>
        <p>Effective date: March 21, 2026</p>
      </header>

      <div className="contact-stack-grid">
        <article className="stack-card">
          <h3>Program Description</h3>
          <p>
            The Stone Mountain Yogurt Text Club sends recurring promotional and informational SMS
            messages, including specials, flavor drops, events, and store updates.
          </p>
        </article>

        <article className="stack-card standout">
          <h3>Consent and Message Frequency</h3>
          <p>
            By opting in, you consent to receive recurring SMS messages from Stone Mountain Yogurt.
            Message frequency varies.
          </p>
          <p>Message and data rates may apply.</p>
        </article>

        <article className="stack-card">
          <h3>Opt-Out and Help</h3>
          <p>Reply STOP to cancel at any time.</p>
          <p>Reply HELP for help.</p>
          <p>Consent is not a condition of purchase.</p>
        </article>

        <article className="stack-card">
          <h3>Eligibility</h3>
          <p>
            You must be the authorized user of the mobile number used to subscribe and be legally
            able to receive text messages.
          </p>
        </article>

        <article className="stack-card">
          <h3>Contact Information</h3>
          <p>Stone Mountain Yogurt</p>
          <p>124 Main St, Pennington Gap, VA 24277</p>
          <p>Email: StoneMountainYogurt@gmail.com</p>
        </article>
      </div>
    </section>
  )
}

export default TermsPage
