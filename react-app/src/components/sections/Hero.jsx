import { heroBadges, heroHighlights } from '../../data/siteData';

const Hero = () => (
  <section className="section" id="hero">
    <div className="container hero">
      <div>
        <p className="eyebrow">Customer-centric cloud</p>
        <h1 className="section-title">Calm, precise infrastructure built for performance.</h1>
        <p className="section-subtitle">
          SalmonCloud pairs enterprise hardware with artisan support so your workloads stay responsive, compliant, and
          ready for scale.
        </p>
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
          <a className="primary-btn" href="https://billing.salmoncloud.co.uk/" target="_blank" rel="noreferrer">
            Launch Control Panel
          </a>
        </div>
        <div className="badge-row">
          {heroBadges.map((badge) => (
            <span key={badge} className="pill">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <span className="pill">Realtime capacity</span>
        <div className="hero-grid" style={{ marginTop: '1.5rem' }}>
          {heroHighlights.map((item) => (
            <div key={item.label} className="mini-card">
              <h4>{item.value}</h4>
              <span className="text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
