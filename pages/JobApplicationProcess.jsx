"use client"

import { useState } from "react"

export default function JobApplicationProcess({ setCurrentPage }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    resume: "",
    coverLetter: "",
    experience: "",
    availability: "",
    expectedSalary: "",
    additionalInfo: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    alert("Application submitted successfully!")
    setCurrentPage("application-tracking")
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Job Application</h1>
          <p className="text-blue-100">Senior Software Engineer at Tech Solutions India</p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                      s <= step ? "bg-primary text-white" : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {s}
                  </div>
                  <span className="text-xs text-neutral-600 text-center">
                    {s === 1 ? "Resume" : s === 2 ? "Cover Letter" : s === 3 ? "Details" : "Review"}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Select Resume</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      name="resume"
                      value="resume1"
                      checked={formData.resume === "resume1"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-semibold text-neutral-900">John_Doe_Resume_2025.pdf</p>
                      <p className="text-sm text-neutral-600">245 KB • Primary Resume</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      name="resume"
                      value="resume2"
                      checked={formData.resume === "resume2"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-semibold text-neutral-900">John_Doe_Resume_IT.pdf</p>
                      <p className="text-sm text-neutral-600">198 KB • IT Focused</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Cover Letter</h2>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-neutral-700 mb-2">
                    Write or paste your cover letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Dear Hiring Manager..."
                  ></textarea>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Additional Details</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Describe your relevant experience..."
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-neutral-700 mb-2">
                      Availability to Join
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2weeks">2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2months">2 months</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expectedSalary" className="block text-sm font-medium text-neutral-700 mb-2">
                      Expected Salary (LPA)
                    </label>
                    <input
                      id="expectedSalary"
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 15-18"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Review Application</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="text-sm text-neutral-600 mb-1">Resume</p>
                    <p className="font-semibold text-neutral-900">{formData.resume || "Not selected"}</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="text-sm text-neutral-600 mb-1">Cover Letter</p>
                    <p className="font-semibold text-neutral-900">
                      {formData.coverLetter ? "Provided" : "Not provided"}
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="text-sm text-neutral-600 mb-1">Availability</p>
                    <p className="font-semibold text-neutral-900">{formData.availability || "Not specified"}</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      By submitting this application, you agree to our Terms and Conditions and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  step === 1
                    ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                }`}
              >
                Previous
              </button>
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
