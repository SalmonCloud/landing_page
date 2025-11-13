import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/Logos/SalmonCloud/salmoncloud_icon_175x175.png" alt="SalmonCloud logo" width={40} height={40} />
            <div>
              <strong>SalmonCloud Ltd.</strong>
              <div>Company No. 15218615</div>
            </div>
          </div>
          <p>Customer-centric cloud infrastructure delivered from London to the world.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <div className="footer-links">
            <span>128 City Road, London, EC1V 2NX</span>
            <a href="mailto:contact@salmoncloud.co.uk">contact@salmoncloud.co.uk</a>
            <a href="tel:+442033766472">+44 020 3376 6472</a>
            <a href="https://discord.gg/4Vja6qKQ" target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
        </div>
        <div>
          <strong>Resources</strong>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="https://status.salmoncloud.co.uk" target="_blank" rel="noreferrer">
              Service Status
            </a>
            <a href="https://billing.salmoncloud.co.uk/" target="_blank" rel="noreferrer">
              Client Area
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SalmonCloud Ltd. All Rights Reserved.</span>
        <span>Registered in England &amp; Wales</span>
      </div>
    </div>
  </footer>
);

export default Footer;
