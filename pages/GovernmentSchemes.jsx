"use client"

export default function GovernmentSchemes({ setCurrentPage }) {
  const schemes = [
    {
      id: 1,
      name: "Prime Minister Internship Scheme",
      description: "Internship opportunities for students in leading companies",
      eligibility: "Students and recent graduates",
      benefits: "Monthly stipend, skill development, job placement assistance",
      deadline: "Rolling basis",
    },
    {
      id: 2,
      name: "Pradhan Mantri Kaushal Vikas Yojana",
      description: "Skill development training for youth",
      eligibility: "Youth aged 15-45 years",
      benefits: "Free training, certification, job placement",
      deadline: "Ongoing",
    },
    {
      id: 3,
      name: "National Apprenticeship Promotion Scheme",
      description: "Apprenticeship opportunities across sectors",
      eligibility: "10th pass and above",
      benefits: "Stipend, skill training, employment",
      deadline: "Rolling basis",
    },
    {
      id: 4,
      name: "Startup India Scheme",
      description: "Support for entrepreneurs and startups",
      eligibility: "Entrepreneurs with innovative ideas",
      benefits: "Funding, mentorship, tax benefits",
      deadline: "Ongoing",
    },
    {
      id: 5,
      name: "Employment Linked Incentive Scheme",
      description: "Incentives for first-time job seekers",
      eligibility: "First-time job seekers",
      benefits: "Monthly incentive, skill development",
      deadline: "Rolling basis",
    },
    {
      id: 6,
      name: "Self Employment Scheme",
      description: "Support for self-employment ventures",
      eligibility: "Unemployed youth",
      benefits: "Loan assistance, training, business support",
      deadline: "Ongoing",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government Employment Schemes</h1>
          <p className="text-lg text-blue-100">
            Explore government initiatives to support employment and skill development
          </p>
        </div>
      </section>

      {/* Schemes */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemes.map((scheme) => (
              <div key={scheme.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{scheme.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{scheme.description}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-neutral-900">Eligibility</p>
                    <p className="text-neutral-600">{scheme.eligibility}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Benefits</p>
                    <p className="text-neutral-600">{scheme.benefits}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Deadline</p>
                    <p className="text-neutral-600">{scheme.deadline}</p>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-blue-50 border border-blue-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Important Information</h2>
          <p className="text-neutral-700 mb-4">
            All government schemes listed above are sourced from official government websites. For the most up-to-date
            information and to apply, please visit the official scheme websites. Be cautious of fraudulent schemes and
            always verify information through official channels.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            Contact Us for More Information
          </button>
        </div>
      </section>
    </div>
  )
}
