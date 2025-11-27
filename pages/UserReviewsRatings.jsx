"use client"

import { useState } from "react"

export default function UserReviewsRatings({ setCurrentPage }) {
  const [reviews] = useState([
    {
      id: 1,
      author: "Amit Kumar",
      rating: 5,
      title: "Excellent platform for job search",
      content:
        "Found my dream job within 2 weeks of registering. The platform is user-friendly and has great job listings.",
      date: "2 weeks ago",
      type: "job-seeker",
    },
    {
      id: 2,
      author: "Priya Singh",
      rating: 4,
      title: "Good experience overall",
      content: "Easy to use interface and good support team. Would recommend to anyone looking for a job.",
      date: "1 month ago",
      type: "job-seeker",
    },
    {
      id: 3,
      author: "Tech Solutions India",
      rating: 5,
      title: "Great platform for hiring",
      content: "We found excellent candidates through this platform. The quality of applications is very good.",
      date: "3 weeks ago",
      type: "employer",
    },
    {
      id: 4,
      author: "Rajesh Patel",
      rating: 4,
      title: "Helpful resources",
      content: "The career guidance section is very helpful. Got some great tips for interview preparation.",
      date: "1 month ago",
      type: "job-seeker",
    },
  ])

  const stats = {
    avgRating: 4.5,
    totalReviews: 1250,
    fiveStars: 850,
    fourStars: 300,
    threeStars: 80,
    twoStars: 15,
    oneStar: 5,
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">User Reviews & Ratings</h1>
          <p className="text-lg text-blue-100">See what our users are saying about us</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Overall Rating */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.avgRating}</div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(stats.avgRating) ? "text-yellow-500" : "text-neutral-300"}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-neutral-600">Based on {stats.totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="font-bold text-neutral-900 mb-4">Rating Distribution</h3>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-neutral-700 w-12">{rating} ★</span>
                    <div className="flex-1 bg-neutral-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full"
                        style={{
                          width: `${(stats[`${rating}Stars`] / stats.totalReviews) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-neutral-600 w-12 text-right">{stats[`${rating}Stars`]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Recent Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-neutral-900">{review.author}</h3>
                    <p className="text-xs text-neutral-600">
                      {review.type === "job-seeker" ? "Job Seeker" : "Employer"} • {review.date}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-yellow-500" : "text-neutral-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{review.title}</h4>
                <p className="text-neutral-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
