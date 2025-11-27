"use client"

import { useState } from "react"

export default function BlogCareerNews({ setCurrentPage }) {
  const [posts] = useState([
    {
      id: 1,
      title: "Tech Industry Sees 25% Growth in Hiring",
      excerpt: "Major tech companies are expanding their workforce with focus on AI and cloud technologies",
      date: "Nov 20, 2025",
      author: "Rajesh Kumar",
      category: "Industry News",
      image: "📰",
    },
    {
      id: 2,
      title: "Remote Work Trends in 2025",
      excerpt: "Survey reveals 60% of companies now offer flexible remote work options",
      date: "Nov 18, 2025",
      author: "Priya Singh",
      category: "Workplace Trends",
      image: "🏠",
    },
    {
      id: 3,
      title: "Top Skills Employers Are Looking For",
      excerpt: "Data analysis, cloud computing, and soft skills top the list of in-demand skills",
      date: "Nov 15, 2025",
      author: "Amit Patel",
      category: "Skills",
      image: "💼",
    },
    {
      id: 4,
      title: "Government Announces New Employment Scheme",
      excerpt: "New initiative aims to create 1 million jobs in the next two years",
      date: "Nov 12, 2025",
      author: "Neha Sharma",
      category: "Government",
      image: "🏛️",
    },
    {
      id: 5,
      title: "Startup Ecosystem Booming in India",
      excerpt: "Record number of startups funded in 2025, creating thousands of job opportunities",
      date: "Nov 10, 2025",
      author: "Vikram Singh",
      category: "Startups",
      image: "🚀",
    },
    {
      id: 6,
      title: "Salary Trends Across Industries",
      excerpt: "Analysis of salary growth patterns and compensation trends in major sectors",
      date: "Nov 8, 2025",
      author: "Anjali Verma",
      category: "Salary",
      image: "💰",
    },
  ])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career News & Blog</h1>
          <p className="text-lg text-blue-100">Latest updates from the job market and career insights</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="text-4xl">{post.image}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-sm text-neutral-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{post.title}</h3>
                    <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">By {post.author}</span>
                      <button className="text-primary font-semibold text-sm hover:underline">Read More →</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for weekly career tips and job market insights
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 bg-accent text-primary rounded-lg hover:opacity-90 transition-opacity font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}