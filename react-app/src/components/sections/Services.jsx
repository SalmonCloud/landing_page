import { useLocation, useNavigate } from 'react-router-dom';
import { serviceCards } from '../../data/siteData';

const serviceIcons = {
  'VPS Cloud': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path
        d="M10 20h12M10 16h12M10 12h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Bare Metal': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 23v2h8v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="16" r="1" fill="currentColor" />
      <circle cx="18" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  Colocation: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 11h16v12H8zM12 7h8v4M12 23v4M20 23v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactScroll = (event) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#contact');
      return;
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section" id="solutions">
      <div className="container">
        <p className="eyebrow">Solutions</p>
        <h2 className="section-title">Choose the right landing zone for every workload.</h2>
        <p className="section-subtitle">
          From low-latency trading engines to high-traffic live streaming and content delivery, each platform is tuned for predictable throughput
          and minimal noise.
        </p>
        <div className="grid services-grid grid-3" style={{ marginTop: '2.5rem' }}>
          {serviceCards.map((card) => {
            const isContactCta = card.cta && card.cta.href === '/#contact';
            return (
              <article key={card.title} className="service-card">
                <div className="service-header">
                  <span className="service-icon">{serviceIcons[card.title]}</span>
                  <div>
                    <p className="service-label">{card.title}</p>
                    <h3>{card.tagline}</h3>
                  </div>
                </div>
                <p className="service-description">{card.description}</p>
                <div className="service-highlights">
                  {card.highlights.map((item) => (
                    <div key={`${card.title}-${item.label}`} className="service-stat">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
                {card.note && <p className="service-note">{card.note}</p>}
                {card.cta &&
                  (isContactCta ? (
                    <button type="button" className="primary-btn service-cta" onClick={handleContactScroll}>
                      {card.cta.label}
                    </button>
                  ) : (
                    <a
                      className="primary-btn service-cta"
                      href={card.cta.href}
                      target={card.cta.target ?? '_blank'}
                      rel={card.cta.target === '_blank' || !card.cta.target ? 'noreferrer' : undefined}
                    >
                      {card.cta.label}
                    </a>
                  ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
