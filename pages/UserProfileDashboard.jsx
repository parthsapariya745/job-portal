"use client"

import { useState } from "react"

export default function UserProfileDashboard({ setCurrentPage }) {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91-9876543210",
    location: "Bangalore",
    headline: "Senior Software Engineer",
    bio: "Experienced software engineer with 5+ years in full-stack development",
    skills: ["JavaScript", "React", "Node.js", "AWS"],
    experience: "5+ years",
    qualification: "Bachelor's in Computer Science",
  })

  const [recentActivity] = useState([
    { id: 1, action: "Applied to Senior Developer at Tech Corp", date: "2 days ago" },
    { id: 2, action: "Saved job: Data Scientist at Analytics Pro", date: "3 days ago" },
    { id: 3, action: "Updated resume", date: "1 week ago" },
    { id: 4, action: "Completed profile", date: "2 weeks ago" },
  ])

  const [stats] = useState({
    applications: 12,
    saved: 8,
    interviews: 2,
    views: 45,
  })

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Dashboard</h1>
          <p className="text-blue-100">Manage your profile and job applications</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-neutral-900">{user.name}</h2>
                    <p className="text-primary font-medium">{user.headline}</p>
                    <p className="text-neutral-600 text-sm mt-1">{user.location}</p>
                  </div>
                  <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold">
                    Edit Profile
                  </button>
                </div>
                <p className="text-neutral-600 mb-4">{user.bio}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-neutral-200">
                  <div>
                    <p className="text-xs text-neutral-600 mb-1">Email</p>
                    <p className="text-sm font-medium text-neutral-900">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 mb-1">Phone</p>
                    <p className="text-sm font-medium text-neutral-900">{user.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 mb-1">Experience</p>
                    <p className="text-sm font-medium text-neutral-900">{user.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 mb-1">Qualification</p>
                    <p className="text-sm font-medium text-neutral-900">{user.qualification}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentPage("resume-management")}
                  className="p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-md transition-shadow text-left"
                >
                  <p className="font-semibold text-neutral-900">📄 Manage Resume</p>
                  <p className="text-sm text-neutral-600 mt-1">Upload and manage your resumes</p>
                </button>
                <button
                  onClick={() => setCurrentPage("job-alerts")}
                  className="p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-md transition-shadow text-left"
                >
                  <p className="font-semibold text-neutral-900">🔔 Job Alerts</p>
                  <p className="text-sm text-neutral-600 mt-1">Create and manage job alerts</p>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Your Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                    <span className="text-neutral-600">Applications</span>
                    <span className="text-2xl font-bold text-primary">{stats.applications}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                    <span className="text-neutral-600">Saved Jobs</span>
                    <span className="text-2xl font-bold text-primary">{stats.saved}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                    <span className="text-neutral-600">Interviews</span>
                    <span className="text-2xl font-bold text-primary">{stats.interviews}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Profile Views</span>
                    <span className="text-2xl font-bold text-primary">{stats.views}</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="pb-3 border-b border-neutral-200 last:border-0">
                      <p className="text-sm text-neutral-700">{activity.action}</p>
                      <p className="text-xs text-neutral-500 mt-1">{activity.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
