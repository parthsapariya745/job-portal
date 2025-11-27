"use client"

import { useState } from "react"

export default function PrivateSectorJobs({ setCurrentPage }) {
  const [selectedIndustry, setSelectedIndustry] = useState("")

  const industries = [
    { name: "All Industries", id: "" },
    { name: "IT & Software", id: "it" },
    { name: "Finance & Banking", id: "finance" },
    { name: "Retail & E-commerce", id: "retail" },
    { name: "Manufacturing", id: "manufacturing" },
    { name: "Consulting", id: "consulting" },
  ]

  const privateSectorJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechCorp India",
      industry: "it",
      location: "Bangalore",
      salary: "10-15 LPA",
      posted: "2 days ago",
      description: "Develop and maintain web applications using modern technologies.",
    },
    {
      id: 2,
      title: "Investment Banker",
      company: "Goldman Sachs India",
      industry: "finance",
      location: "Mumbai",
      salary: "20-30 LPA",
      posted: "1 week ago",
      description: "Provide investment banking services to corporate clients.",
    },
    {
      id: 3,
      title: "Store Manager",
      company: "Retail Giants Ltd",
      industry: "retail",
      location: "Delhi",
      salary: "6-10 LPA",
      posted: "3 days ago",
      description: "Manage retail store operations and lead sales team.",
    },
    {
      id: 4,
      title: "Production Engineer",
      company: "Manufacturing Solutions",
      industry: "manufacturing",
      location: "Pune",
      salary: "8-12 LPA",
      posted: "4 days ago",
      description: "Oversee production processes and ensure quality standards.",
    },
    {
      id: 5,
      title: "Management Consultant",
      company: "McKinsey & Company",
      industry: "consulting",
      location: "New Delhi",
      salary: "18-25 LPA",
      posted: "5 days ago",
      description: "Provide strategic consulting services to leading organizations.",
    },
  ]

  const filteredJobs = selectedIndustry
    ? privateSectorJobs.filter((job) => job.industry === selectedIndustry)
    : privateSectorJobs

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Private Sector Jobs</h1>
          <p className="text-lg text-blue-100">Discover exciting career opportunities in India's private sector</p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Industry</h2>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  selectedIndustry === industry.id
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">{filteredJobs.length} Private Sector Jobs Available</h2>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{job.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{job.company}</p>
                    <p className="text-neutral-600 text-sm mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-1 text-neutral-600">📍 {job.location}</span>
                      <span className="flex items-center gap-1 text-neutral-600">💰 {job.salary}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                      Apply Now
                    </button>
                    <p className="text-xs text-neutral-500 text-center">{job.posted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
