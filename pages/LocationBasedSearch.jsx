"use client"

import { useState } from "react"

export default function LocationBasedSearch({ setCurrentPage }) {
  const [selectedLocation, setSelectedLocation] = useState("")

  const locations = [
    { name: "Bangalore", jobs: 2450, region: "South" },
    { name: "Mumbai", jobs: 2100, region: "West" },
    { name: "Delhi", jobs: 1950, region: "North" },
    { name: "Hyderabad", jobs: 1850, region: "South" },
    { name: "Pune", jobs: 1650, region: "West" },
    { name: "Chennai", jobs: 1200, region: "South" },
    { name: "Kolkata", jobs: 950, region: "East" },
    { name: "Ahmedabad", jobs: 850, region: "West" },
  ]

  const filteredJobs = selectedLocation
    ? [
        {
          id: 1,
          title: "Software Engineer",
          company: "Tech Company",
          location: selectedLocation,
          salary: "10-15 LPA",
        },
        {
          id: 2,
          title: "Business Analyst",
          company: "Consulting Firm",
          location: selectedLocation,
          salary: "8-12 LPA",
        },
        {
          id: 3,
          title: "Marketing Manager",
          company: "Brand Company",
          location: selectedLocation,
          salary: "9-14 LPA",
        },
      ]
    : []

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Location-Based Job Search</h1>
          <p className="text-lg text-blue-100">Find jobs in your preferred location across India</p>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Select a Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((location) => (
              <button
                key={location.name}
                onClick={() => setSelectedLocation(location.name)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  selectedLocation === location.name
                    ? "border-primary bg-blue-50"
                    : "border-neutral-200 bg-white hover:border-primary"
                }`}
              >
                <h3 className="font-semibold text-neutral-900 mb-2">{location.name}</h3>
                <p className="text-sm text-neutral-600 mb-3">{location.region} India</p>
                <p className="text-lg font-bold text-primary">{location.jobs}</p>
                <p className="text-xs text-neutral-600">jobs available</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">India Job Market Map</h2>
          <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <img src="/india-job-map.jpg" alt="India job market map" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Jobs in Selected Location */}
      {selectedLocation && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Jobs in {selectedLocation}</h2>
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{job.title}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{job.company}</p>
                      <div className="flex gap-4 text-sm text-neutral-600">
                        <span>📍 {job.location}</span>
                        <span>💰 {job.salary}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
