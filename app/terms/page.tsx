export const metadata = {
  title: "Terms of Service | Christopher Hoole – Google Ads Consultant",
  description: "Terms of service for christopherhoole.online",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 2026</p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            These Terms of Service govern your use of christopherhoole.online (the "Site"),
            operated by Christopher Hoole ("we", "us", "our"). By accessing or using this Site,
            you agree to these terms in full.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">2. Services</h2>
          <p>
            This Site provides information about freelance Google Ads consultancy services
            offered by Christopher Hoole. Submitting a contact form constitutes an enquiry only
            — it does not constitute a binding contract or guarantee of services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">3. Use of the Site</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Use the Site for any unlawful purpose</li>
            <li>Submit false or misleading information via the contact form</li>
            <li>Attempt to disrupt, hack, or damage the Site</li>
            <li>Use automated tools to scrape or crawl the Site without permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">4. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, and code — is the
            intellectual property of Christopher Hoole unless otherwise stated. You may not
            reproduce, distribute, or use any content without prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
          <p>
            This Site is provided "as is" without warranties of any kind. We do not guarantee
            that the Site will be error-free, uninterrupted, or free from viruses. Information
            on this Site is for general informational purposes and does not constitute
            professional advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Christopher Hoole shall not be liable for
            any indirect, incidental, or consequential damages arising from your use of this
            Site. Our total liability for any claim related to this Site shall not exceed £100.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">7. Third-Party Links</h2>
          <p>
            This Site may contain links to third-party websites. We are not responsible for the
            content, privacy practices, or terms of any third-party sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">8. Google Ads API Use</h2>
          <p>
            Our internal tools use the Google Ads API in accordance with Google's Terms of
            Service and Developer Policies. API access is used solely to manage and optimise
            Google Ads campaigns on behalf of clients who have explicitly authorised access to
            their accounts. We do not access, store, or process Google Ads account data beyond
            what is necessary to provide our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">9. Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the Site after changes
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes shall be
            subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
          <p>
            For any questions about these terms, contact us at{" "}
            <a href="mailto:chris@christopherhoole.com" className="text-blue-400 hover:underline">
              chris@christopherhoole.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
