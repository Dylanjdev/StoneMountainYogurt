function TextClubPage() {
  return (
    <section className="text-club-page" aria-label="Stone Mountain Yogurt text club">
      <header className="page-heading-block">
        <p className="eyebrow">Text Club</p>
        <h2>First access to drops, deals, and updates.</h2>
        <p>
          Join our text list for early alerts on specials and new menu items.
        </p>
      </header>

      <div className="club-flow-grid">
        <article className="flow-card join-card">
          <h3>Join In Seconds</h3>
          <p className="feature-line">Text "YOGURT" to 276-268-4720</p>
          <p>Sign-up is quick and free.</p>
          <a className="social-link-btn" href="sms:+12762684720?&body=YOGURT">Open Text Message</a>
        </article>

        <article className="flow-card">
          <h3>What You Get</h3>
          <ul>
            <li>New flavor drops and seasonal menu news</li>
            <li>Special promotions and event reminders</li>
            <li>Store updates and limited-time announcements</li>
          </ul>
        </article>

        <article className="flow-card">
          <h3>Privacy & Opt-Out</h3>
          <p>Your number stays private and is only used for text club updates.</p>
          <p>To stop messages anytime, reply "STOP" to any text.</p>
          <p>You may receive up to 30 messages per month.</p>
        </article>
      </div>
    </section>
  )
}

export default TextClubPage
