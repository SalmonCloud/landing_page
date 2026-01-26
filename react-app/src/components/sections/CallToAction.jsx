const CallToAction = () => (
  <section className="section">
    <div className="container">
      <div className="cta-section">
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Get started
        </p>
        <h2 className="section-title" style={{ color: '#fff', marginBottom: '0.5rem' }}>
          Ready to launch on SalmonCloud?
        </h2>
        <p>
          Spin up your first VPS in moments, request a dedicated cluster, or chat directly with our network engineers
          for a bespoke architecture review.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a className="primary-btn" href="https://billing.salmoncloud.co.uk/register.php" target="_blank" rel="noreferrer">
            Create Account
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
