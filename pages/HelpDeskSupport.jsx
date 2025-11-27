"use client"

import { useState } from "react"

export default function HelpDeskSupport({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState("general")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", category: "general", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const supportChannels = [
    {
      title: "Email Support",
      description: "support@jobportal.gov.in",
      icon: "✉️",
      responseTime: "24-48 hours",
    },
    {
      title: "Phone Support",
      description: "+91-11-XXXX-XXXX",
      icon: "📞",
      responseTime: "9 AM - 6 PM IST",
    },
    {
      title: "Live Chat",
      description: "Available on website",
      icon: "💬",
      responseTime: "Instant",
    },
    {
      title: "FAQ & Knowledge Base",
      description: "Self-service resources",
      icon: "📚",
      responseTime: "Instant",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Desk Support</h1>
          <p className="text-lg text-blue-100">Get help from our support team</p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Support Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{channel.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{channel.description}</p>
                <p className="text-xs text-primary font-semibold">{channel.responseTime}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Submit a Support Ticket</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-semibold text-green-900 mb-2">Ticket Submitted Successfully</h3>
              <p className="text-green-700">
                Thank you for contacting us. Our support team will respond within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account Issue</option>
                  <option value="job-posting">Job Posting</option>
                  <option value="application">Application Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Brief subject of your issue"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe your issue in detail..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
              >
                Submit Ticket
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
