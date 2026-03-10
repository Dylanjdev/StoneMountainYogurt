function SocialPage() {
  return (
    <section className="social-page" aria-label="Stone Mountain Yogurt social media">
      <header className="page-heading-block">
        <p className="eyebrow">Social Media</p>
        <h2>Catch daily updates and specials.</h2>
        <p>
          Follow for menu drops, local event updates, and community shout-outs.
        </p>
      </header>

      <div className="social-columns">
        <article className="social-channel-card">
          <h3>Facebook</h3>
          <p>Flavor updates, specials, announcements, and community highlights.</p>
          <a
            className="social-link-btn"
            href="https://www.facebook.com/stonemountainyogurt"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Stone Mountain Yogurt Facebook page"
          >
            Follow on Facebook
          </a>
        </article>

        <article className="social-channel-card">
          <h3>TikTok</h3>
          <p>Behind-the-counter clips, drink builds, and frozen yogurt creations.</p>
          <a
            className="social-link-btn"
            href="https://www.tiktok.com/@stonemountainyogurt"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Stone Mountain Yogurt TikTok page"
          >
            Follow on TikTok
          </a>
        </article>
      </div>
    </section>
  )
}

export default SocialPage
