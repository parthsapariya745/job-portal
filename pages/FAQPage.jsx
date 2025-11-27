"use client"

import { useState } from "react"

export default function FAQPage({ setCurrentPage }) {
  const [expandedId, setExpandedId] = useState(null)

  const faqs = [
    {
      id: 1,
      category: "Job Seekers",
      question: "How do I create an account?",
      answer:
        "Click on 'Sign Up' and select 'Register as Job Seeker'. Fill in your details, verify your email, and you're ready to start applying for jobs.",
    },
    {
      id: 2,
      category: "Job Seekers",
      question: "How do I upload my resume?",
      answer:
        "Go to your dashboard, click on 'Resume Management', and upload your resume in PDF or DOC format. You can upload multiple resumes for different job types.",
    },
    {
      id: 3,
      category: "Job Seekers",
      question: "Can I apply for multiple jobs?",
      answer:
        "Yes, you can apply for as many jobs as you want. There's no limit on the number of applications you can submit.",
    },
    {
      id: 4,
      category: "Job Seekers",
      question: "How do I track my applications?",
      answer:
        "Visit the 'Application Status' page in your dashboard to see the status of all your applications in one place.",
    },
    {
      id: 5,
      category: "Employers",
      question: "How do I post a job?",
      answer:
        "Register as an employer, go to your dashboard, and click 'Post New Job'. Fill in the job details and publish. Your job will be visible to all job seekers.",
    },
    {
      id: 6,
      category: "Employers",
      question: "How much does it cost to post a job?",
      answer:
        "Job posting is free for the first 3 jobs. After that, there's a nominal fee per job posting. Contact our support team for pricing details.",
    },
    {
      id: 7,
      category: "General",
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your personal data. Your information is never shared with third parties without your consent.",
    },
    {
      id: 8,
      category: "General",
      question: "How do I delete my account?",
      answer:
        "You can delete your account from your account settings. Note that this action is permanent and cannot be undone.",
    },
  ]

  const categories = ["All", ...new Set(faqs.map((faq) => faq.category))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = selectedCategory === "All" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-100">Find answers to common questions about our platform</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-neutral-50 transition-colors text-left"
                >
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1">{faq.category}</p>
                    <p className="font-semibold text-neutral-900">{faq.question}</p>
                  </div>
                  <span className={`text-2xl transition-transform ${expandedId === faq.id ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedId === faq.id && (
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                    <p className="text-neutral-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Didn't find your answer?</h2>
          <p className="text-neutral-600 mb-6">Our support team is here to help. Contact us for any questions.</p>
          <button
            onClick={() => setCurrentPage("help")}
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            Contact Support
          </button>
        </div>
      </section>
    </div>
  )
}
