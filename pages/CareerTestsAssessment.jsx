"use client"

import { useState } from "react"

export default function CareerTestsAssessment({ setCurrentPage }) {
  const [selectedTest, setSelectedTest] = useState(null)

  const tests = [
    {
      id: 1,
      name: "Career Aptitude Test",
      description: "Discover your strengths and suitable career paths",
      duration: "20 minutes",
      questions: 40,
      difficulty: "Easy",
    },
    {
      id: 2,
      name: "Personality Assessment",
      description: "Understand your personality traits and work style",
      duration: "15 minutes",
      questions: 30,
      difficulty: "Easy",
    },
    {
      id: 3,
      name: "Technical Skills Assessment",
      description: "Evaluate your technical knowledge and programming skills",
      duration: "45 minutes",
      questions: 50,
      difficulty: "Hard",
    },
    {
      id: 4,
      name: "Communication Skills Test",
      description: "Assess your verbal and written communication abilities",
      duration: "25 minutes",
      questions: 35,
      difficulty: "Medium",
    },
    {
      id: 5,
      name: "Leadership Potential Test",
      description: "Evaluate your leadership qualities and management skills",
      duration: "30 minutes",
      questions: 45,
      difficulty: "Medium",
    },
    {
      id: 6,
      name: "Entrepreneurship Assessment",
      description: "Determine your entrepreneurial mindset and business acumen",
      duration: "20 minutes",
      questions: 40,
      difficulty: "Medium",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Tests & Assessments</h1>
          <p className="text-lg text-blue-100">Discover your strengths and find the right career path</p>
        </div>
      </section>

      {/* Tests */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{test.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{test.description}</p>
                <div className="space-y-2 mb-4 text-sm text-neutral-600">
                  <p>⏱️ Duration: {test.duration}</p>
                  <p>❓ Questions: {test.questions}</p>
                  <p>
                    📊 Difficulty:{" "}
                    <span
                      className={`font-semibold ${
                        test.difficulty === "Easy"
                          ? "text-green-600"
                          : test.difficulty === "Medium"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {test.difficulty}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTest(test.id)}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm"
                >
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Modal */}
      {selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {tests.find((t) => t.id === selectedTest)?.name}
            </h2>
            <p className="text-neutral-600 mb-6">{tests.find((t) => t.id === selectedTest)?.description}</p>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-neutral-700">
                <strong>Duration:</strong> {tests.find((t) => t.id === selectedTest)?.duration}
              </p>
              <p className="text-sm text-neutral-700">
                <strong>Questions:</strong> {tests.find((t) => t.id === selectedTest)?.questions}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedTest(null)}
                className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Test started! This is a demo version.")
                  setSelectedTest(null)
                }}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
