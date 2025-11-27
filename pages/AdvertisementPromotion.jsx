"use client"

export default function AdvertisementPromotion({ setCurrentPage }) {
  const adPackages = [
    {
      id: 1,
      name: "Starter",
      price: "₹5,000",
      duration: "1 month",
      features: ["1 featured job posting", "500 impressions", "Basic analytics", "Email support"],
    },
    {
      id: 2,
      name: "Professional",
      price: "₹15,000",
      duration: "3 months",
      features: ["5 featured job postings", "5,000 impressions", "Advanced analytics", "Priority support"],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "₹40,000",
      duration: "6 months",
      features: ["Unlimited featured postings", "50,000 impressions", "Custom analytics", "Dedicated account manager"],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Advertising & Promotion</h1>
          <p className="text-lg text-blue-100">Boost your job postings with our advertising packages</p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 rounded-lg border-2 transition-all ${
                  pkg.popular
                    ? "border-primary bg-blue-50 shadow-lg transform scale-105"
                    : "border-neutral-200 bg-white hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary mb-1">{pkg.price}</p>
                <p className="text-neutral-600 text-sm mb-6">{pkg.duration}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-700 text-sm">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border border-primary text-primary hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Why Advertise With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-neutral-900 mb-2">Targeted Reach</h3>
              <p className="text-neutral-600 text-sm">
                Reach qualified job seekers actively looking for opportunities in your industry
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-neutral-900 mb-2">Increased Visibility</h3>
              <p className="text-neutral-600 text-sm">Get your job postings featured prominently on our platform</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="font-bold text-neutral-900 mb-2">Better ROI</h3>
              <p className="text-neutral-600 text-sm">
                Track performance with detailed analytics and optimize your campaigns
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}