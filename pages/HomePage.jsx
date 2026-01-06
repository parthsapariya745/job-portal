"use client"

import { useState, useEffect } from "react"
import { isAuthenticated, getUserFromToken, setToken } from "../lib/auth"

export default function HomePage({ setCurrentPage }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Handle OAuth callback token from URL
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get("token")
    
    if (token) {
      setToken(token)
      // Clear URL params
      window.history.replaceState({}, document.title, window.location.pathname)
    }

    // Check auth state
    const checkAuth = () => {
      const authenticated = isAuthenticated()
      setIsLoggedIn(authenticated)
      if (authenticated) {
        setUser(getUserFromToken())
      }
    }
    checkAuth()
  }, [])
  const stats = [
    { label: "Active Jobs", value: "12,450" },
    { label: "Registered Candidates", value: "85,320" },
    { label: "Employers", value: "2,840" },
    { label: "Placements", value: "34,560" },
  ]

  const features = [
    {
      title: "Advanced Job Search",
      description: "Filter jobs by location, salary, skills, and job type with our powerful search engine.",
      icon: "🔍",
    },
    {
      title: "Skill-Based Matching",
      description: "Get matched with jobs that align with your skills and career goals.",
      icon: "⚡",
    },
    {
      title: "Interview Scheduling",
      description: "Manage interview appointments directly through our platform.",
      icon: "📅",
    },
    {
      title: "Career Resources",
      description: "Access guides, salary insights, and career development resources.",
      icon: "📚",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Find Your Perfect Job or Hire Top Talent
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-balance">
              India's leading government-compliant job portal connecting job seekers with employers across all sectors.
            </p>
            {isLoggedIn && user ? (
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-md w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-2xl">
                      {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{user.name || "Welcome!"}</h2>
                      <p className="text-blue-200 text-sm">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => setCurrentPage("user-dashboard")}
                      className="flex-1 px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Go to Dashboard
                    </button>
                    <button
                      onClick={() => setCurrentPage("job-search")}
                      className="flex-1 px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
                    >
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentPage("job-search")}
                  className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Search Jobs
                </button>
                <button
                  onClick={() => setCurrentPage("employer-registration")}
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  Post a Job
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-neutral-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Job Search</h2>
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="job-title" className="block text-sm font-medium text-neutral-700 mb-2">
                  Job Title or Keyword
                </label>
                <input
                  id="job-title"
                  type="text"
                  placeholder="e.g., Software Engineer"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="e.g., New Delhi"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="job-type" className="block text-sm font-medium text-neutral-700 mb-2">
                  Job Type
                </label>
                <select
                  id="job-type"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>All Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage("job-search")}
              className="w-full mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Portal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers and employers who trust our platform.
          </p>
          {isLoggedIn && user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage("user-dashboard")}
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => setCurrentPage("job-search")}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Search Jobs
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage("candidate-registration")}
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Register as Job Seeker
              </button>
              <button
                onClick={() => setCurrentPage("employer-registration")}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Register as Employer
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
