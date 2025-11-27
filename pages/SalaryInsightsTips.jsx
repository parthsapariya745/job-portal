"use client"

import { useState } from "react"

export default function SalaryInsightsTips({ setCurrentPage }) {
  const [selectedRole, setSelectedRole] = useState("software-engineer")

  const salaryData = {
    "software-engineer": {
      role: "Software Engineer",
      avgSalary: "12-18 LPA",
      range: "8-25 LPA",
      experience: "5+ years",
      skills: ["JavaScript", "React", "Node.js", "AWS"],
    },
    "data-analyst": {
      role: "Data Analyst",
      avgSalary: "8-12 LPA",
      range: "5-18 LPA",
      experience: "2-3 years",
      skills: ["SQL", "Python", "Tableau", "Excel"],
    },
    "project-manager": {
      role: "Project Manager",
      avgSalary: "14-20 LPA",
      range: "10-28 LPA",
      experience: "5+ years",
      skills: ["Leadership", "Communication", "Planning", "Risk Management"],
    },
  }

  const tips = [
    {
      title: "Research Market Rates",
      description: "Use salary comparison tools and industry reports to understand current market rates for your role",
    },
    {
      title: "Highlight Your Skills",
      description: "Emphasize unique skills and certifications that add value to your profile",
    },
    {
      title: "Negotiate Confidently",
      description: "Know your worth and negotiate based on data, not emotions",
    },
    {
      title: "Consider Total Compensation",
      description: "Look beyond base salary - consider benefits, bonuses, and growth opportunities",
    },
  ]

  const currentData = salaryData[selectedRole]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Salary Insights & Tips</h1>
          <p className="text-lg text-blue-100">Understand salary trends and negotiate better compensation</p>
        </div>
      </section>

      {/* Salary Comparison */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Salary Comparison Tool</h2>

          {/* Role Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-700 mb-3">Select Role</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(salaryData).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedRole === key
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {value.role}
                </button>
              ))}
            </div>
          </div>

          {/* Salary Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Average Salary</p>
              <p className="text-3xl font-bold text-primary">{currentData.avgSalary}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Salary Range</p>
              <p className="text-3xl font-bold text-primary">{currentData.range}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Experience Required</p>
              <p className="text-3xl font-bold text-primary">{currentData.experience}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <p className="text-neutral-600 text-sm mb-2">Top Skills</p>
              <p className="text-sm font-semibold text-neutral-900">{currentData.skills.slice(0, 2).join(", ")}</p>
            </div>
          </div>

          {/* Skills for Role */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Key Skills for {currentData.role}</h3>
            <div className="flex flex-wrap gap-2">
              {currentData.skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Salary Tips */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Salary Negotiation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{tip.title}</h3>
                <p className="text-neutral-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
