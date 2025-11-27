"use client"

export default function CareerGuidance({ setCurrentPage }) {
  const resources = [
    {
      id: 1,
      title: "Resume Writing Guide",
      description: "Learn how to write an effective resume that gets noticed by employers",
      category: "Resume",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Interview Preparation Tips",
      description: "Master the art of interviewing with our comprehensive guide",
      category: "Interview",
      readTime: "10 min read",
    },
    {
      id: 3,
      title: "Career Transition Guide",
      description: "Successfully transition to a new career with our step-by-step guide",
      category: "Career Change",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Networking for Job Seekers",
      description: "Build professional networks that lead to job opportunities",
      category: "Networking",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Salary Negotiation Strategies",
      description: "Negotiate your salary confidently and effectively",
      category: "Salary",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "LinkedIn Profile Optimization",
      description: "Create a compelling LinkedIn profile that attracts recruiters",
      category: "Online Presence",
      readTime: "6 min read",
    },
  ]

  const categories = ["All", "Resume", "Interview", "Career Change", "Networking", "Salary", "Online Presence"]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Guidance</h1>
          <p className="text-lg text-blue-100">Expert resources to advance your career</p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Browse Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{resource.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">{resource.readTime}</span>
                  <button className="text-primary font-semibold text-sm hover:underline">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Getting Your First Job</h3>
              <p className="text-neutral-600 mb-6">
                A comprehensive guide for freshers entering the job market. Learn about job search strategies, resume
                building, and interview preparation.
              </p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                Read Guide
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Career Growth Strategies</h3>
              <p className="text-neutral-600 mb-6">
                Develop a career roadmap and accelerate your professional growth. Learn about skill development,
                certifications, and advancement opportunities.
              </p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                Read Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}