import { osOptions } from '../../data/siteData';

const OSLibrary = () => (
  <section className="section" id="os-library">
    <div className="container">
      <p className="eyebrow">OS Library</p>
      <h2 className="section-title">Deploy any stack in seconds.</h2>
      <p className="section-subtitle">Choose from curated Linux, BSD, and Windows templates or upload your own ISO.</p>
      <div className="os-grid">
        {osOptions.map((os) => (
          <div key={os.name} className="os-card">
            <img src={os.logo} alt={`${os.name} logo`} loading="lazy" />
            <strong>{os.name}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OSLibrary;
