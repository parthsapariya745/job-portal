"use client"

import { useState } from "react"

export default function JobSearch({ setCurrentPage }) {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    jobType: "",
    salary: "",
    experience: "",
  })

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions India",
      location: "Bangalore",
      salary: "12-18 LPA",
      type: "Full-time",
      experience: "5+ years",
      posted: "2 days ago",
      description: "Looking for experienced software engineer with expertise in cloud technologies.",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Analytics Pro",
      location: "Mumbai",
      salary: "8-12 LPA",
      type: "Full-time",
      experience: "2-3 years",
      posted: "1 day ago",
      description: "Analyze complex datasets and provide actionable insights for business decisions.",
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Brand Builders",
      location: "Delhi",
      salary: "10-15 LPA",
      type: "Full-time",
      experience: "3-5 years",
      posted: "3 days ago",
      description: "Lead marketing campaigns and manage team for digital marketing initiatives.",
    },
    {
      id: 4,
      title: "HR Executive",
      company: "People First",
      location: "Hyderabad",
      salary: "6-9 LPA",
      type: "Full-time",
      experience: "2-4 years",
      posted: "1 week ago",
      description: "Manage recruitment, employee relations, and HR operations.",
    },
    {
      id: 5,
      title: "Junior Developer",
      company: "StartUp Hub",
      location: "Pune",
      salary: "4-6 LPA",
      type: "Full-time",
      experience: "0-2 years",
      posted: "4 days ago",
      description: "Join our team as a junior developer and grow your skills in web development.",
    },
    {
      id: 6,
      title: "Project Manager",
      company: "Enterprise Solutions",
      location: "Bangalore",
      salary: "14-20 LPA",
      type: "Full-time",
      experience: "5+ years",
      posted: "5 days ago",
      description: "Manage large-scale projects and lead cross-functional teams.",
    },
  ])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.keyword === "" || job.title.toLowerCase().includes(filters.keyword.toLowerCase())) &&
      (filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.jobType === "" || job.type === filters.jobType) &&
      (filters.experience === "" || job.experience.includes(filters.experience.split("-")[0]))
    )
  })

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Advanced Job Search</h1>
          <p className="text-blue-100">Find your perfect job with our advanced filtering options</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Filter Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-neutral-700 mb-2">
                  Job Title / Keyword
                </label>
                <input
                  id="keyword"
                  type="text"
                  name="keyword"
                  value={filters.keyword}
                  onChange={handleFilterChange}
                  placeholder="e.g., Engineer"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder="e.g., Bangalore"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-neutral-700 mb-2">
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={filters.jobType}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
                  Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={filters.experience}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="">All Levels</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-neutral-700 mb-2">
                  Salary Range
                </label>
                <select
                  id="salary"
                  name="salary"
                  value={filters.salary}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="">All Ranges</option>
                  <option value="0-5">0-5 LPA</option>
                  <option value="5-10">5-10 LPA</option>
                  <option value="10-15">10-15 LPA</option>
                  <option value="15+">15+ LPA</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setFilters({ keyword: "", location: "", jobType: "", salary: "", experience: "" })}
              className="mt-4 px-4 py-2 text-sm text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Found
            </h2>
          </div>

          {filteredJobs.length > 0 ? (
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
                        <span className="flex items-center gap-1 text-neutral-600">💼 {job.type}</span>
                        <span className="flex items-center gap-1 text-neutral-600">⏱️ {job.experience}</span>
                        <span className="flex items-center gap-1 text-neutral-600">💰 {job.salary}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                        Apply Now
                      </button>
                      <button className="px-6 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-sm">
                        Save Job
                      </button>
                      <p className="text-xs text-neutral-500 text-center">{job.posted}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-lg text-center border border-neutral-200">
              <p className="text-neutral-600 mb-4">No jobs found matching your criteria.</p>
              <button
                onClick={() => setFilters({ keyword: "", location: "", jobType: "", salary: "", experience: "" })}
                className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
