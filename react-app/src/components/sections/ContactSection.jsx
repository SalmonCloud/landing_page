const ContactSection = () => (
  <section className="section contact-section" id="contact">
    <div className="container">
      <p className="eyebrow">Contact the support team directly</p>
      <h2 className="section-title">Get help from SalmonCloud engineers.</h2>
      <p className="section-subtitle">
        Submit a ticket for tracked requests, use the official email for formal inquiries, or DM our Telegram bot for
        real-time chat with the support team.
      </p>
      <div className="contact-buttons">
        <a
          className="contact-button"
          href="https://billing.salmoncloud.co.uk/submitticket.php"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Logos/SalmonCloud/salmoncloud_icon_175x175.png" alt="Ticket system" />
          <span>Submit a ticket</span>
        </a>
        <a
          className="contact-button"
          href="mailto:contact@salmoncloud.co.uk"
        >
          <span className="contact-button-icon" aria-hidden="true">✉️</span>
          <span>Official email</span>
        </a>
        <a className="contact-button" href="https://t.me/salmoncloudchatbot" target="_blank" rel="noreferrer">
          <img src="/Logos/Telegram.png" alt="Telegram bot" />
          <span>Telegram bot</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
