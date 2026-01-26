import { communityLinks } from '../../data/siteData';

const CommunitySection = () => (
  <section className="section community-section" id="community">
    <div className="container">
      <p className="eyebrow">Join the community</p>
      <h2 className="section-title">Connect with SalmonClouders worldwide.</h2>
      <p className="section-subtitle">Choose your preferred language and chat with our team and other users in real time.</p>
      <div className="community-grid">
        {communityLinks.map((item) => (
          <a key={item.label} className="community-card" href={item.href} target="_blank" rel="noreferrer">
            <div className="community-icon">
              <img src={item.logo} alt={item.alt} />
            </div>
            <div>
              <strong>{item.label}</strong>
              <p>{item.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
