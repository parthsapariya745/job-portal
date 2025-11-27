"use client"

export default function SiteMap({ setCurrentPage }) {
  const siteStructure = [
    {
      category: "Main Navigation",
      pages: [
        { name: "Home", id: "home" },
        { name: "About Us", id: "about" },
        { name: "Contact Us", id: "contact" },
      ],
    },
    {
      category: "Job Search & Listings",
      pages: [
        { name: "Job Search", id: "job-search" },
        { name: "Job Categories", id: "job-categories" },
        { name: "Government Jobs", id: "government-jobs" },
        { name: "Private Sector Jobs", id: "private-sector-jobs" },
        { name: "Skill-Based Search", id: "skill-based-search" },
        { name: "Location-Based Search", id: "location-based-search" },
      ],
    },
    {
      category: "Employer & Candidate",
      pages: [
        { name: "Employer Profiles", id: "employer-profiles" },
        { name: "Candidate Registration", id: "candidate-registration" },
        { name: "Employer Registration", id: "employer-registration" },
        { name: "User Login", id: "login" },
      ],
    },
    {
      category: "Job Seeker Dashboard",
      pages: [
        { name: "User Profile Dashboard", id: "user-dashboard" },
        { name: "Resume Management", id: "resume-management" },
        { name: "Job Application Process", id: "job-application" },
        { name: "Application Status Tracking", id: "application-tracking" },
        { name: "Interview Scheduling", id: "interview-scheduling" },
        { name: "Create Job Alerts", id: "job-alerts" },
      ],
    },
    {
      category: "Employer Dashboard",
      pages: [{ name: "Employer Dashboard", id: "employer-dashboard" }],
    },
    {
      category: "Alerts & Notifications",
      pages: [
        { name: "Latest Job Alerts", id: "latest-alerts" },
        { name: "Notifications History", id: "notifications" },
      ],
    },
    {
      category: "Career Resources",
      pages: [
        { name: "Career Guidance", id: "career-guidance" },
        { name: "Blog & Career News", id: "career-news" },
        { name: "Salary Insights & Tips", id: "salary-insights" },
        { name: "Government Schemes", id: "government-schemes" },
        { name: "Career Tests & Assessment", id: "career-tests" },
      ],
    },
    {
      category: "Legal & Support",
      pages: [
        { name: "FAQ", id: "faq" },
        { name: "Help Desk Support", id: "help" },
        { name: "Terms & Conditions", id: "terms" },
        { name: "Privacy Policy", id: "privacy" },
      ],
    },
    {
      category: "Miscellaneous",
      pages: [
        { name: "Advertisement & Promotion", id: "advertisements" },
        { name: "User Reviews & Ratings", id: "reviews" },
        { name: "Mobile App Info", id: "mobile-app" },
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Map</h1>
          <p className="text-lg text-blue-100">Complete navigation guide to all pages and sections of our portal.</p>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h2 className="text-lg font-bold text-primary mb-4">{section.category}</h2>
                <ul className="space-y-2">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <button
                        onClick={() => setCurrentPage(page.id)}
                        className="text-neutral-600 hover:text-primary hover:underline text-sm transition-colors text-left"
                      >
                        {page.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">35</div>
              <p className="text-neutral-600">Total Pages</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">9</div>
              <p className="text-neutral-600">Main Categories</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-neutral-600">Accessible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
