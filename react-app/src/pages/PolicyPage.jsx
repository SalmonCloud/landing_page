import privacyHtml from '../content/privacy.html?raw';
import termsHtml from '../content/terms.html?raw';

const sanitizePolicyHtml = (html) =>
  html
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<link[\s\S]*?>/gi, '')
    .replace(/<\/?(html|head|body)[^>]*>/gi, '');

const PolicyPage = ({ html }) => (
  <section className="section">
    <div className="container policy-wrapper">
      <div
        className="policy-content"
        dangerouslySetInnerHTML={{
          __html: sanitizePolicyHtml(html)
        }}
      />
    </div>
  </section>
);

export const PrivacyPage = () => <PolicyPage html={privacyHtml} />;
export const TermsPage = () => <PolicyPage html={termsHtml} />;
