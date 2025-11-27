"use client"

import { useState } from "react"

export default function GovernmentJobs({ setCurrentPage }) {
  const [selectedDepartment, setSelectedDepartment] = useState("")

  const departments = [
    { name: "All Departments", id: "" },
    { name: "Ministry of Defence", id: "defence" },
    { name: "Ministry of Railways", id: "railways" },
    { name: "Ministry of Education", id: "education" },
    { name: "Ministry of Health", id: "health" },
    { name: "Ministry of Finance", id: "finance" },
  ]

  const governmentJobs = [
    {
      id: 1,
      title: "IAS Officer",
      department: "defence",
      location: "New Delhi",
      salary: "56,100 - 2,50,000",
      posted: "1 week ago",
      description: "Indian Administrative Service - Competitive examination for civil service positions.",
    },
    {
      id: 2,
      title: "Railway Recruitment Board - Group A",
      department: "railways",
      location: "Pan India",
      salary: "35,400 - 1,12,400",
      posted: "2 weeks ago",
      description: "Recruitment for various positions in Indian Railways.",
    },
    {
      id: 3,
      title: "Teacher - Government School",
      department: "education",
      location: "Various States",
      salary: "21,000 - 63,000",
      posted: "3 days ago",
      description: "Teaching positions in government schools across India.",
    },
    {
      id: 4,
      title: "AIIMS Recruitment - Medical Staff",
      department: "health",
      location: "Pan India",
      salary: "44,900 - 1,42,400",
      posted: "5 days ago",
      description: "Recruitment for medical and paramedical staff in AIIMS.",
    },
    {
      id: 5,
      title: "Income Tax Officer",
      department: "finance",
      location: "Pan India",
      salary: "56,100 - 1,77,500",
      posted: "1 week ago",
      description: "Income Tax Department recruitment for officer positions.",
    },
  ]

  const filteredJobs = selectedDepartment
    ? governmentJobs.filter((job) => job.department === selectedDepartment)
    : governmentJobs

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government Jobs</h1>
          <p className="text-lg text-blue-100">Explore career opportunities in government sector across India</p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Department</h2>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  selectedDepartment === dept.id
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">{filteredJobs.length} Government Jobs Available</h2>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{job.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {job.department.replace("-", " ").toUpperCase()}
                    </p>
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

      {/* Important Notice */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">Important Notice</h3>
            <p className="text-neutral-600 text-sm">
              All government job notifications are sourced from official government websites. Candidates are advised to
              verify all details on the official notification before applying. No application fees are charged for
              government jobs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
