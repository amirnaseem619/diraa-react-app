import LegalLayout from "../components/LegalLayout.jsx";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      heroImage="/images/images/banner3.png"
      activeLabel="Privacy Policy"
      lastUpdated="June 2026"
    >
      <p className="legal-intro">
        Welcome to Diraa. We are committed to protecting your privacy and ensuring the security of
        your personal information. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website, use our services, or interact with
        us.
      </p>

      <div className="legal-section">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide, including your name,
          email address, phone number, company name, job title, and any information submitted
          through contact forms, newsletters, or support requests. When you visit our website, we
          may also automatically collect technical information such as your IP address, browser
          type and version, device information, operating system, pages visited, date and time of
          access, and website usage statistics.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. How We Use Your Information</h2>
        <p>
          We may use collected information to provide and improve our services, respond to
          inquiries and support requests, send service related communications, send newsletters and
          marketing communications (with your consent), monitor website performance and security,
          detect, prevent, and investigate security incidents, and comply with legal obligations.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Cookies and Analytics</h2>
        <p>
          Our website may use cookies and similar technologies to improve user experience, analyze
          website traffic, understand visitor behavior, and maintain website security. You may
          disable cookies through your browser settings, although some website features may not
          function properly.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          We do not sell, rent, or trade personal information. We may share information with
          trusted service providers assisting in website operation, hosting and infrastructure
          providers, analytics providers, and legal or regulatory authorities when required by law.
          All third parties are required to maintain appropriate security measures.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Data Security</h2>
        <p>
          We implement reasonable technical, administrative, and organizational safeguards designed
          to protect personal information from unauthorized access, disclosure, alteration, or
          destruction. However, no internet based transmission or storage system can be guaranteed
          to be completely secure.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to provide services, fulfill
          legal obligations, resolve disputes, and enforce agreements.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access your personal
          information, correct inaccurate information, request deletion of your information, object
          to processing, withdraw consent, and request data portability. Requests may be submitted
          using the contact details below.
        </p>
      </div>

      <div className="legal-section">
        <h2>8. Third Party Links</h2>
        <p>
          Our website may contain links to third party websites. We are not responsible for the
          privacy practices or content of external websites.
        </p>
      </div>

      <div className="legal-section">
        <h2>9. Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 13 (or the minimum age
          required by applicable law). We do not knowingly collect personal information from
          children.
        </p>
      </div>

      <div className="legal-section">
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updated versions will be posted on
          this page with a revised effective date.
        </p>
      </div>

      <div className="legal-section">
        <h2>11. Contact Us</h2>
        <p>
          For questions regarding this Privacy Policy or your personal data, please contact Diraa at
          deeplenz.sales@3pillars-sa.com or visit our website at www.diraa.io.
        </p>
      </div>
    </LegalLayout>
  );
}
