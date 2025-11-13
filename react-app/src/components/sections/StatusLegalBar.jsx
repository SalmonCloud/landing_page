import { Link } from 'react-router-dom';

const StatusLegalBar = () => (
  <section className="status-legal">
    <div className="container status-legal-inner">
      <div className="status-chip">
        <span className="status-label">Live status</span>
        <statuspage-widget
          src="https://status.salmoncloud.co.uk"
          appearance="badge"
          title="SalmonCloud system status"
        ></statuspage-widget>
      </div>
      <span className="status-divider" aria-hidden="true">
        |
      </span>
      <Link to="/privacy" className="status-link">
        Privacy Policy
      </Link>
      <span className="status-divider" aria-hidden="true">
        |
      </span>
      <Link to="/terms" className="status-link">
        Terms of Service
      </Link>
    </div>
  </section>
);

export default StatusLegalBar;
