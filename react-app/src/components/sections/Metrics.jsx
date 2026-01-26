import { metrics } from '../../data/siteData';

const Metrics = () => (
  <section className="section">
    <div className="container">
      <p className="eyebrow">Operational excellence</p>
      <h2 className="section-title">Numbers that keep your SRE team relaxed.</h2>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <h3>{metric.value}</h3>
            <span>{metric.label}</span>
            <p style={{ marginTop: '0.4rem' }}>{metric.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
