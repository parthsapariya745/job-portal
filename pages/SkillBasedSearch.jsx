"use client"

import { useState } from "react"

export default function SkillBasedSearch({ setCurrentPage }) {
  const [selectedSkills, setSelectedSkills] = useState([])

  const availableSkills = [
    "JavaScript",
    "Python",
    "Java",
    "React",
    "Node.js",
    "SQL",
    "AWS",
    "Docker",
    "Project Management",
    "Data Analysis",
    "Machine Learning",
    "Communication",
    "Leadership",
    "Sales",
    "Marketing",
    "Accounting",
  ]

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const matchedJobs = [
    {
      id: 1,
      title: "Senior Developer",
      company: "Tech Corp",
      matchPercentage: 95,
      requiredSkills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      matchPercentage: 85,
      requiredSkills: ["Python", "Data Analysis", "Machine Learning"],
    },
    {
      id: 3,
      title: "Project Manager",
      company: "Enterprise Solutions",
      matchPercentage: 90,
      requiredSkills: ["Project Management", "Leadership", "Communication"],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skill-Based Job Search</h1>
          <p className="text-lg text-blue-100">Find jobs that match your skills and expertise</p>
        </div>
      </section>

      {/* Skills Selection */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Select Your Skills</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                    selectedSkills.includes(skill)
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 border border-neutral-300 hover:border-primary"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-neutral-600">
                {selectedSkills.length} skill{selectedSkills.length !== 1 ? "s" : ""} selected
              </p>
              <button
                onClick={() => setSelectedSkills([])}
                className="px-4 py-2 text-sm text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Matched Jobs */}
      {selectedSkills.length > 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Jobs Matching Your Skills</h2>
            <div className="space-y-4">
              {matchedJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{job.title}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requiredSkills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              selectedSkills.includes(skill)
                                ? "bg-green-100 text-green-800"
                                : "bg-neutral-100 text-neutral-700"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{job.matchPercentage}%</div>
                        <p className="text-xs text-neutral-600">Match</p>
                      </div>
                      <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedSkills.length === 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-neutral-600 mb-4">Select skills above to see matching job opportunities</p>
          </div>
        </section>
      )}
    </div>
  )
}
