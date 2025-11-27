"use client"

import { useState } from "react"

export default function EmployerDashboard({ setCurrentPage }) {
  const [stats] = useState({
    activeJobs: 8,
    totalApplications: 156,
    interviews: 12,
    hired: 5,
  })

  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      posted: "5 days ago",
      applications: 24,
      views: 450,
      status: "active",
    },
    {
      id: 2,
      title: "Data Analyst",
      posted: "2 weeks ago",
      applications: 18,
      views: 320,
      status: "active",
    },
    {
      id: 3,
      title: "Marketing Manager",
      posted: "1 month ago",
      applications: 12,
      views: 280,
      status: "closed",
    },
  ])

  const [recentApplications] = useState([
    {
      id: 1,
      candidateName: "Amit Kumar",
      jobTitle: "Senior Software Engineer",
      appliedDate: "2 hours ago",
      status: "new",
    },
    {
      id: 2,
      candidateName: "Priya Singh",
      jobTitle: "Data Analyst",
      appliedDate: "1 day ago",
      status: "reviewing",
    },
    {
      id: 3,
      candidateName: "Rajesh Patel",
      jobTitle: "Senior Software Engineer",
      appliedDate: "3 days ago",
      status: "shortlisted",
    },
  ])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Employer Dashboard</h1>
          <p className="text-blue-100">Manage your job postings and applications</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Active Jobs</p>
              <p className="text-4xl font-bold text-primary">{stats.activeJobs}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Total Applications</p>
              <p className="text-4xl font-bold text-primary">{stats.totalApplications}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Interviews Scheduled</p>
              <p className="text-4xl font-bold text-primary">{stats.interviews}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Hired</p>
              <p className="text-4xl font-bold text-primary">{stats.hired}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Active Jobs */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">Active Job Postings</h2>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">
                    + Post New Job
                  </button>
                </div>
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="p-4 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-neutral-900">{job.title}</h3>
                          <p className="text-sm text-neutral-600">Posted {job.posted}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            job.status === "active" ? "bg-green-100 text-green-800" : "bg-neutral-100 text-neutral-800"
                          }`}
                        >
                          {job.status === "active" ? "Active" : "Closed"}
                        </span>
                      </div>
                      <div className="flex gap-6 text-sm text-neutral-600">
                        <span>📋 {job.applications} applications</span>
                        <span>👁️ {job.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Applications */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Recent Applications</h3>
                <div className="space-y-3">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="pb-3 border-b border-neutral-200 last:border-0">
                      <p className="font-semibold text-neutral-900 text-sm">{app.candidateName}</p>
                      <p className="text-xs text-neutral-600 mt-1">{app.jobTitle}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-neutral-500">{app.appliedDate}</span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            app.status === "new"
                              ? "bg-blue-100 text-blue-800"
                              : app.status === "reviewing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {app.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold text-left">
                    Post New Job
                  </button>
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold text-left">
                    View All Applications
                  </button>
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold text-left">
                    Manage Interviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
