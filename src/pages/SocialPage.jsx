import smoothie2 from '../assets/Smoothie2.webp'

function SocialPage() {
  return (
    <section className="social-page" aria-labelledby="social-title">
      <header className="page-hero social-hero">
        <div>
          <p className="eyebrow light">Follow along</p>
          <h1 id="social-title">The sweet stuff,<br /><em>in real time.</em></h1>
        </div>
        <p className="page-hero-note">Daily specials, new creations, and a peek behind the counter—this is where every delicious update lands first.</p>
      </header>

      <div className="social-layout section-wrap">
        <div className="social-photo">
          <img src={smoothie2} alt="A blended Stone Mountain Yogurt drink with whipped cream and chocolate drizzle" />
          <span>Fresh posts.<br />Fresh treats.</span>
        </div>
        <div className="social-cards">
        <article className="social-channel-card facebook-card">
          <div className="social-card-top"><span>f</span><small>Community updates</small></div>
          <h2>Facebook</h2>
          <p>Flavor updates, specials, announcements, and hometown highlights.</p>
          <a
            className="social-link-btn"
            href="https://www.facebook.com/stonemountainyogurt"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Stone Mountain Yogurt Facebook page"
          >
            Follow on Facebook <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="social-channel-card tiktok-card">
          <div className="social-card-top"><span>♪</span><small>@stonemountainyogurt</small></div>
          <h2>TikTok</h2>
          <p>Behind-the-counter clips, drink builds, and frozen yogurt creations.</p>
          <a
            className="social-link-btn"
            href="https://www.tiktok.com/@stonemountainyogurt"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Stone Mountain Yogurt TikTok page"
          >
            Follow on TikTok <span aria-hidden="true">↗</span>
          </a>
        </article>
        </div>
      </div>
    </section>
  )
}

export default SocialPage
