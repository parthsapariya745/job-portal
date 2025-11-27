"use client"

import { useState } from "react"

export default function ResumeManagement({ setCurrentPage }) {
  const [resumes, setResumes] = useState([
    {
      id: 1,
      name: "John_Doe_Resume_2025.pdf",
      uploadDate: "2 days ago",
      size: "245 KB",
      isPrimary: true,
    },
    {
      id: 2,
      name: "John_Doe_Resume_IT.pdf",
      uploadDate: "1 week ago",
      size: "198 KB",
      isPrimary: false,
    },
  ])

  const [showUploadForm, setShowUploadForm] = useState(false)

  const handleDelete = (id) => {
    setResumes(resumes.filter((r) => r.id !== id))
  }

  const handleSetPrimary = (id) => {
    setResumes(resumes.map((r) => ({ ...r, isPrimary: r.id === id })))
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume Management</h1>
          <p className="text-blue-100">Upload and manage your resumes for job applications</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upload Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Upload Resume</h2>
            {showUploadForm ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="resume-file" className="block text-sm font-medium text-neutral-700 mb-2">
                    Select Resume File (PDF, DOC, DOCX)
                  </label>
                  <input
                    id="resume-file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="resume-name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Resume Name
                  </label>
                  <input
                    id="resume-name"
                    type="text"
                    placeholder="e.g., John_Doe_Resume_2025"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowUploadForm(false)}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    Upload
                  </button>
                  <button
                    onClick={() => setShowUploadForm(false)}
                    className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowUploadForm(true)}
                className="w-full px-6 py-4 border-2 border-dashed border-primary rounded-lg text-primary font-semibold hover:bg-blue-50 transition-colors"
              >
                + Upload New Resume
              </button>
            )}
          </div>

          {/* Resumes List */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Resumes</h2>
            <div className="space-y-4">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl">📄</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900">{resume.name}</h3>
                      <p className="text-sm text-neutral-600">
                        {resume.size} • Uploaded {resume.uploadDate}
                      </p>
                    </div>
                    {resume.isPrimary && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {!resume.isPrimary && (
                      <button
                        onClick={() => handleSetPrimary(resume.id)}
                        className="px-3 py-1 text-sm border border-primary text-primary rounded hover:bg-blue-50 transition-colors"
                      >
                        Set Primary
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(resume.id)}
                      className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-neutral-900 mb-3">Resume Tips</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>• Keep your resume updated with latest skills and experience</li>
              <li>• Use clear formatting and professional fonts</li>
              <li>• Limit resume to 2-3 pages maximum</li>
              <li>• Customize resume for different job applications</li>
              <li>• Ensure file size is less than 5 MB</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
