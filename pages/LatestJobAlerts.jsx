"use client"

import { useState } from "react"

export default function LatestJobAlerts({ setCurrentPage }) {
  const [alerts] = useState([
    {
      id: 1,
      title: "New Government Job Notification",
      description: "Ministry of Defence has released 500 positions for various roles",
      date: "Today",
      type: "government",
      priority: "high",
    },
    {
      id: 2,
      title: "Tech Industry Hiring Surge",
      description: "Major IT companies are actively hiring for software development roles",
      date: "Today",
      type: "industry",
      priority: "high",
    },
    {
      id: 3,
      title: "Banking Sector Recruitment",
      description: "HDFC Bank and ICICI Bank announce recruitment drives",
      date: "Yesterday",
      type: "sector",
      priority: "medium",
    },
    {
      id: 4,
      title: "Startup Funding Announcement",
      description: "New startups funded and hiring for multiple positions",
      date: "2 days ago",
      type: "startup",
      priority: "medium",
    },
    {
      id: 5,
      title: "Government Scheme Launch",
      description: "New employment scheme for youth launched by government",
      date: "3 days ago",
      type: "scheme",
      priority: "low",
    },
  ])

  const getAlertIcon = (type) => {
    switch (type) {
      case "government":
        return "🏛️"
      case "industry":
        return "🏢"
      case "sector":
        return "🏦"
      case "startup":
        return "🚀"
      case "scheme":
        return "📋"
      default:
        return "📢"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-50 border-red-200"
      case "medium":
        return "bg-yellow-50 border-yellow-200"
      case "low":
        return "bg-neutral-50 border-neutral-200"
      default:
        return "bg-neutral-50 border-neutral-200"
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Latest Job Alerts</h1>
          <p className="text-blue-100">Stay updated with the latest job market news and announcements</p>
        </div>
      </section>

      {/* Alerts */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-6 rounded-lg border-2 ${getPriorityColor(alert.priority)} hover:shadow-md transition-shadow`}
              >
                <div className="flex gap-4">
                  <div className="text-4xl">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-neutral-900">{alert.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          alert.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : alert.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-neutral-100 text-neutral-800"
                        }`}
                      >
                        {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)} Priority
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-3">{alert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-500">{alert.date}</span>
                      <button
                        onClick={() => setCurrentPage("job-search")}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold"
                      >
                        View Jobs
                      </button>
                    </div>
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
