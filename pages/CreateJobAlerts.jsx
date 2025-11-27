"use client"

import { useState } from "react"

export default function CreateJobAlerts({ setCurrentPage }) {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Senior Developer Jobs",
      keywords: "Senior Developer, Full Stack",
      locations: "Bangalore, Pune",
      frequency: "Daily",
      active: true,
    },
    {
      id: 2,
      title: "Data Science Roles",
      keywords: "Data Scientist, Machine Learning",
      locations: "Mumbai, Delhi",
      frequency: "Weekly",
      active: true,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    keywords: "",
    locations: "",
    frequency: "daily",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddAlert = () => {
    if (formData.title && formData.keywords) {
      setAlerts([
        ...alerts,
        {
          id: alerts.length + 1,
          ...formData,
          active: true,
        },
      ])
      setFormData({ title: "", keywords: "", locations: "", frequency: "daily" })
      setShowForm(false)
    }
  }

  const handleDeleteAlert = (id) => {
    setAlerts(alerts.filter((a) => a.id !== id))
  }

  const handleToggleAlert = (id) => {
    setAlerts(alerts.map((a) => (a.id === id ? { ...a, active: !a.active } : a)))
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Job Alerts</h1>
          <p className="text-blue-100">Create and manage personalized job alerts</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Create Alert Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Create New Alert</h2>
            {showForm ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="alert-title" className="block text-sm font-medium text-neutral-700 mb-2">
                    Alert Title
                  </label>
                  <input
                    id="alert-title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Senior Developer Jobs"
                  />
                </div>
                <div>
                  <label htmlFor="keywords" className="block text-sm font-medium text-neutral-700 mb-2">
                    Keywords (comma-separated)
                  </label>
                  <input
                    id="keywords"
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Developer, React, Node.js"
                  />
                </div>
                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-neutral-700 mb-2">
                    Locations (comma-separated)
                  </label>
                  <input
                    id="locations"
                    type="text"
                    name="locations"
                    value={formData.locations}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Bangalore, Pune"
                  />
                </div>
                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-neutral-700 mb-2">
                    Alert Frequency
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="immediate">Immediate</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddAlert}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    Create Alert
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowForm(true)}
                className="w-full px-6 py-4 border-2 border-dashed border-primary rounded-lg text-primary font-semibold hover:bg-blue-50 transition-colors"
              >
                + Create New Alert
              </button>
            )}
          </div>

          {/* Active Alerts */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Alerts ({alerts.length})</h2>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900">{alert.title}</h3>
                      <p className="text-neutral-600 text-sm mt-1">Keywords: {alert.keywords}</p>
                      <p className="text-neutral-600 text-sm">Locations: {alert.locations || "All"}</p>
                      <p className="text-neutral-600 text-sm">Frequency: {alert.frequency}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={alert.active}
                          onChange={() => handleToggleAlert(alert.id)}
                          className="rounded"
                        />
                        <span className="text-sm text-neutral-700">{alert.active ? "Active" : "Inactive"}</span>
                      </label>
                      <button
                        onClick={() => handleDeleteAlert(alert.id)}
                        className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
