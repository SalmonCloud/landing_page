import privacyHtml from '../content/privacy.html?raw';
import termsHtml from '../content/terms.html?raw';

const stripScripts = (html) => html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');

const PolicyPage = ({ title, html }) => (
  <section className="section">
    <div className="container policy-wrapper">
      <p className="eyebrow">{title}</p>
      <h1 className="section-title" style={{ fontSize: '2.25rem' }}>
        {title}
      </h1>
      <div
        className="policy-content"
        dangerouslySetInnerHTML={{
          __html: stripScripts(html)
        }}
      />
    </div>
  </section>
);

export const PrivacyPage = () => <PolicyPage title="Privacy Policy" html={privacyHtml} />;
export const TermsPage = () => <PolicyPage title="Terms of Service" html={termsHtml} />;
