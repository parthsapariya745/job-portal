"use client"

import { useState } from "react"

export default function ApplicationStatusTracking({ setCurrentPage }) {
  const [applications] = useState([
    {
      id: 1,
      jobTitle: "Senior Software Engineer",
      company: "Tech Solutions India",
      appliedDate: "2 days ago",
      status: "reviewing",
      statusLabel: "Under Review",
      nextStep: "Waiting for company response",
    },
    {
      id: 2,
      jobTitle: "Data Analyst",
      company: "Analytics Pro",
      appliedDate: "1 week ago",
      status: "interview",
      statusLabel: "Interview Scheduled",
      nextStep: "Interview on 15th Nov at 2:00 PM",
    },
    {
      id: 3,
      jobTitle: "Marketing Manager",
      company: "Brand Builders",
      appliedDate: "2 weeks ago",
      status: "rejected",
      statusLabel: "Not Selected",
      nextStep: "You can apply for other positions",
    },
    {
      id: 4,
      jobTitle: "Project Manager",
      company: "Enterprise Solutions",
      appliedDate: "3 weeks ago",
      status: "accepted",
      statusLabel: "Offer Received",
      nextStep: "Review and accept offer",
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "reviewing":
        return "bg-yellow-50 border-yellow-200 text-yellow-800"
      case "interview":
        return "bg-blue-50 border-blue-200 text-blue-800"
      case "rejected":
        return "bg-red-50 border-red-200 text-red-800"
      case "accepted":
        return "bg-green-50 border-green-200 text-green-800"
      default:
        return "bg-neutral-50 border-neutral-200 text-neutral-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "reviewing":
        return "⏳"
      case "interview":
        return "📅"
      case "rejected":
        return "❌"
      case "accepted":
        return "✅"
      default:
        return "📋"
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Application Status</h1>
          <p className="text-blue-100">Track the status of all your job applications</p>
        </div>
      </section>

      {/* Applications List */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{app.jobTitle}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{app.company}</p>
                    <p className="text-neutral-600 text-sm mb-4">Applied {app.appliedDate}</p>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(
                        app.status,
                      )}`}
                    >
                      {getStatusIcon(app.status)} {app.statusLabel}
                    </div>
                    <p className="text-sm text-neutral-600 mt-3">{app.nextStep}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold">
                      View Job
                    </button>
                    {app.status === "interview" && (
                      <button
                        onClick={() => setCurrentPage("interview-scheduling")}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold"
                      >
                        Schedule
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <p className="text-3xl font-bold text-primary mb-2">4</p>
              <p className="text-neutral-600 text-sm">Total Applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <p className="text-3xl font-bold text-yellow-600 mb-2">1</p>
              <p className="text-neutral-600 text-sm">Under Review</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">1</p>
              <p className="text-neutral-600 text-sm">Interviews</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">1</p>
              <p className="text-neutral-600 text-sm">Offers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}