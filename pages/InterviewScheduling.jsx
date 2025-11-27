"use client"

import { useState } from "react"

export default function InterviewScheduling({ setCurrentPage }) {
  const [interviews] = useState([
    {
      id: 1,
      jobTitle: "Senior Software Engineer",
      company: "Tech Solutions India",
      date: "15 Nov 2025",
      time: "2:00 PM",
      type: "Video Call",
      interviewer: "Rajesh Kumar",
      status: "scheduled",
    },
    {
      id: 2,
      jobTitle: "Data Analyst",
      company: "Analytics Pro",
      date: "18 Nov 2025",
      time: "10:30 AM",
      type: "In-Person",
      interviewer: "Priya Sharma",
      status: "scheduled",
    },
  ])

  const [showScheduleForm, setShowScheduleForm] = useState(false)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Interview Scheduling</h1>
          <p className="text-blue-100">Manage your interview appointments</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scheduled Interviews */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Scheduled Interviews</h2>
            <div className="space-y-4">
              {interviews.map((interview) => (
                <div key={interview.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{interview.jobTitle}</h3>
                      <p className="text-primary font-medium text-sm mb-4">{interview.company}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-neutral-600 mb-1">Date</p>
                          <p className="font-semibold text-neutral-900">📅 {interview.date}</p>
                        </div>
                        <div>
                          <p className="text-neutral-600 mb-1">Time</p>
                          <p className="font-semibold text-neutral-900">🕐 {interview.time}</p>
                        </div>
                        <div>
                          <p className="text-neutral-600 mb-1">Type</p>
                          <p className="font-semibold text-neutral-900">{interview.type}</p>
                        </div>
                        <div>
                          <p className="text-neutral-600 mb-1">Interviewer</p>
                          <p className="font-semibold text-neutral-900">{interview.interviewer}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold">
                        Reschedule
                      </button>
                      <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">
                        Join Call
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-neutral-900 mb-4">Interview Preparation Tips</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>• Research the company and role thoroughly</li>
              <li>• Prepare answers for common interview questions</li>
              <li>• Test your internet connection and camera before video interviews</li>
              <li>• Dress professionally and arrive 10 minutes early</li>
              <li>• Prepare questions to ask the interviewer</li>
              <li>• Follow up with a thank you email after the interview</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
