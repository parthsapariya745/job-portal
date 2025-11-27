"use client"

export default function TermsAndConditions({ setCurrentPage }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg text-blue-100">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-neutral-700">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Use License</h2>
              <p className="text-neutral-700">
                Permission is granted to temporarily download one copy of the materials (information or software) on our
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mt-2 space-y-1">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Disclaimer</h2>
              <p className="text-neutral-700">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or
                implied, and hereby disclaim and negate all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">4. Limitations</h2>
              <p className="text-neutral-700">
                In no event shall our company or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">5. Accuracy of Materials</h2>
              <p className="text-neutral-700">
                The materials appearing on our website could include technical, typographical, or photographic errors.
                We do not warrant that any of the materials on our website are accurate, complete, or current. We may
                make changes to the materials contained on our website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">6. Links</h2>
              <p className="text-neutral-700">
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of
                any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any
                such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">7. Modifications</h2>
              <p className="text-neutral-700">
                We may revise these terms of service for our website at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">8. Governing Law</h2>
              <p className="text-neutral-700">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you
                irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-neutral-700">
                For any questions about these Terms and Conditions, please{" "}
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
