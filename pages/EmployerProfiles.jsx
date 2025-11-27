"use client"

import { useState } from "react"

export default function EmployerProfiles({ setCurrentPage }) {
  const [selectedIndustry, setSelectedIndustry] = useState("")

  const employers = [
    {
      id: 1,
      name: "Tech Solutions India",
      industry: "IT",
      location: "Bangalore",
      employees: "500+",
      rating: 4.5,
      openJobs: 45,
      description: "Leading IT solutions provider with expertise in cloud and AI technologies.",
    },
    {
      id: 2,
      name: "Goldman Sachs India",
      industry: "Finance",
      location: "Mumbai",
      employees: "1000+",
      rating: 4.7,
      openJobs: 28,
      description: "Global investment banking and financial services company.",
    },
    {
      id: 3,
      name: "Infosys Limited",
      industry: "IT",
      location: "Bangalore",
      employees: "5000+",
      rating: 4.6,
      openJobs: 120,
      description: "Global IT consulting and business process services company.",
    },
    {
      id: 4,
      name: "HDFC Bank",
      industry: "Finance",
      location: "Mumbai",
      employees: "2000+",
      rating: 4.4,
      openJobs: 35,
      description: "Leading private sector bank in India.",
    },
    {
      id: 5,
      name: "Accenture India",
      industry: "IT",
      location: "Bangalore",
      employees: "3000+",
      rating: 4.5,
      openJobs: 85,
      description: "Global professional services company.",
    },
    {
      id: 6,
      name: "Reliance Industries",
      industry: "Manufacturing",
      location: "Mumbai",
      employees: "5000+",
      rating: 4.3,
      openJobs: 60,
      description: "Diversified conglomerate with interests in energy and retail.",
    },
  ]

  const industries = ["All", "IT", "Finance", "Manufacturing", "Healthcare"]

  const filteredEmployers =
    selectedIndustry === "" || selectedIndustry === "All"
      ? employers
      : employers.filter((emp) => emp.industry === selectedIndustry)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Employer Profiles</h1>
          <p className="text-lg text-blue-100">Browse and connect with leading employers across India</p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Industry</h2>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry === "All" ? "" : industry)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  (industry === "All" && selectedIndustry === "") || selectedIndustry === industry
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Grid */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">{filteredEmployers.length} Employers Found</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployers.map((employer) => (
              <div
                key={employer.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{employer.name}</h3>
                    <p className="text-primary font-medium text-sm">{employer.industry}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{employer.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm mb-4">{employer.description}</p>
                <div className="space-y-2 mb-4 text-sm text-neutral-600">
                  <p>📍 {employer.location}</p>
                  <p>👥 {employer.employees} employees</p>
                  <p className="text-primary font-semibold">{employer.openJobs} open jobs</p>
                </div>
                <button
                  onClick={() => setCurrentPage("job-search")}
                  className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  View Jobs
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
