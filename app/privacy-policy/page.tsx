export const metadata = {
  title: "Privacy Policy | Christopher Hoole – Google Ads Consultant",
  description: "Privacy policy for christopherhoole.online",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 2026</p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">1. Who We Are</h2>
          <p>
            This website is operated by Christopher Hoole, a freelance Google Ads consultant
            trading as Ads Control Tower. You can contact us at{" "}
            <a href="mailto:chris@christopherhoole.com" className="text-blue-400 hover:underline">
              chris@christopherhoole.com
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">2. What Data We Collect</h2>
          <p className="mb-3">We only collect data you voluntarily provide through our contact form:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your company name</li>
            <li>Your message or enquiry</li>
          </ul>
          <p className="mt-3">
            We do not collect payment information, sensitive personal data, or any data from
            children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Data</h2>
          <p className="mb-3">Your data is used solely to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Respond to your enquiry</li>
            <li>Provide information about our Google Ads consultancy services</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or share your personal data with third parties for marketing
            purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">4. Google Analytics &amp; Advertising Tags</h2>
          <p>
            This website uses Google Analytics and Google Ads conversion tracking to measure
            website performance and advertising effectiveness. These services may use cookies and
            collect anonymous usage data including pages visited, time on site, and general
            location (country/city level). No personally identifiable information is sent to
            Google Analytics. You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">5. Cookies</h2>
          <p>
            This website uses essential cookies required for basic functionality. We also use
            Google Analytics cookies (analytical) and Google Ads cookies (advertising) as
            described above. By continuing to use this site, you consent to our use of cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">6. Data Retention</h2>
          <p>
            Contact form submissions are retained for up to 12 months for the purpose of
            follow-up communications. You may request deletion of your data at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">7. Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:chris@christopherhoole.com" className="text-blue-400 hover:underline">
              chris@christopherhoole.com
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">8. Security</h2>
          <p>
            We take reasonable precautions to protect your data. This website is served over
            HTTPS. Contact form data is transmitted securely and stored in a private system
            accessible only to Christopher Hoole.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page will
            reflect the latest revision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">10. Contact</h2>
          <p>
            For any privacy-related questions, email{" "}
            <a href="mailto:chris@christopherhoole.com" className="text-blue-400 hover:underline">
              chris@christopherhoole.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
