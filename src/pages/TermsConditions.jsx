import LegalLayout from "../components/LegalLayout.jsx";

export default function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      heroImage="/images/images/home.png"
      activeLabel="Terms & Conditions"
      lastUpdated="June 2026"
    >
      <p className="legal-intro">
        Welcome to Diraa. Please read these Terms and Conditions carefully before using our website
        or services. By accessing or using Diraa&apos;s platform, you agree to be bound by these
        terms. If you do not agree, please discontinue use of our services.
      </p>

      <div className="legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Diraa&apos;s website, products, or services, you confirm that you
          have read, understood, and agree to be bound by these Terms and Conditions, along with our
          Privacy Policy. These terms apply to all visitors, users, and others who access or use our
          services.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Use of Service</h2>
        <p>
          You agree to use Diraa&apos;s services only for lawful purposes and in accordance with
          these Terms. You must not use our services in any way that violates applicable local,
          national, or international laws or regulations, or to transmit any unsolicited or
          unauthorized advertising or promotional material.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Intellectual Property</h2>
        <p>
          All content, features, and functionality on Diraa&apos;s platform — including but not
          limited to text, graphics, logos, software, and data — are the exclusive property of Diraa
          and its licensors and are protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works without our express written permission.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. User Obligations</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activities that occur under your account. You agree to notify us immediately of
          any unauthorized use of your account. You must not attempt to gain unauthorized access to
          any part of our services or related systems.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Disclaimers</h2>
        <p>
          Diraa&apos;s services are provided on an &quot;as is&quot; and &quot;as available&quot;
          basis without warranties of any kind, either express or implied. We do not warrant that
          our services will be uninterrupted, error free, or completely secure. Your use of our
          services is at your sole risk.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Diraa and its affiliates, officers,
          employees, and partners shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of, or inability to use, our
          services even if we have been advised of the possibility of such damages.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Updated versions
          will be posted on this page with a revised effective date. Your continued use of our
          services after any changes constitutes your acceptance of the new terms.
        </p>
      </div>

      <div className="legal-section">
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact Diraa at
          deeplenz.sales@3pillars-sa.com or visit our website at www.diraa.io.
        </p>
      </div>
    </LegalLayout>
  );
}
