"use client"

export default function PrivacyPolicy({ setCurrentPage }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. Introduction</h2>
              <p className="text-neutral-700">
                We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Information We Collect</h2>
              <p className="text-neutral-700 mb-3">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc list-inside text-neutral-700 space-y-1">
                <li>Information you voluntarily provide (name, email, phone, resume, etc.)</li>
                <li>Information collected automatically (IP address, browser type, pages visited)</li>
                <li>Information from third-party sources (social media, verification services)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Use of Your Information</h2>
              <p className="text-neutral-700">We use the information we collect in the following ways:</p>
              <ul className="list-disc list-inside text-neutral-700 mt-2 space-y-1">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your job applications and registrations</li>
                <li>To send you promotional communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and security threats</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">4. Data Security</h2>
              <p className="text-neutral-700">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">5. Your Rights</h2>
              <p className="text-neutral-700">
                You have the right to access, correct, or delete your personal data. You can also opt-out of marketing
                communications at any time. To exercise these rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">6. Cookies</h2>
              <p className="text-neutral-700">
                Our website uses cookies to enhance your experience. You can choose to disable cookies through your
                browser settings, but this may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">7. Third-Party Links</h2>
              <p className="text-neutral-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">8. Changes to This Policy</h2>
              <p className="text-neutral-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-neutral-700">
                If you have any questions about this Privacy Policy, please{" "}
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="text-primary font-semibold hover:underline"
                >
                  contact us
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
