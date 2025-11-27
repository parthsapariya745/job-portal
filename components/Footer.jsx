"use client"

export default function Footer({ setCurrentPage }) {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", id: "home" },
        { label: "About Us", id: "about" },
        { label: "Contact Us", id: "contact" },
        { label: "Site Map", id: "sitemap" },
      ],
    },
    {
      title: "For Job Seekers",
      links: [
        { label: "Browse Jobs", id: "job-categories" },
        { label: "My Dashboard", id: "user-dashboard" },
        { label: "Job Alerts", id: "job-alerts" },
        { label: "Career Resources", id: "career-guidance" },
      ],
    },
    {
      title: "For Employers",
      links: [
        { label: "Post a Job", id: "employer-registration" },
        { label: "Employer Dashboard", id: "employer-dashboard" },
        { label: "Browse Candidates", id: "employer-profiles" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", id: "terms" },
        { label: "Privacy Policy", id: "privacy" },
        { label: "FAQ", id: "faq" },
      ],
    },
  ]

  return (
    <footer className="bg-neutral-900 text-neutral-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setCurrentPage(link.id)}
                      className="text-sm text-neutral-400 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">© 2025 Government Job Portal. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.2-5.2 8.3A15.7 15.7 0 010 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
