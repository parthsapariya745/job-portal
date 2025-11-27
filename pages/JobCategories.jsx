"use client"

export default function JobCategories({ setCurrentPage }) {
  const categories = [
    {
      name: "Information Technology",
      icon: "💻",
      jobs: 2450,
      description: "Software engineers, developers, IT support, and more",
      color: "bg-blue-50",
    },
    {
      name: "Banking & Finance",
      icon: "🏦",
      jobs: 1850,
      description: "Bankers, financial analysts, accountants, and more",
      color: "bg-green-50",
    },
    {
      name: "Government Jobs",
      icon: "🏛️",
      jobs: 3200,
      description: "Civil services, administrative roles, and more",
      color: "bg-orange-50",
    },
    {
      name: "Healthcare",
      icon: "⚕️",
      jobs: 1200,
      description: "Doctors, nurses, medical technicians, and more",
      color: "bg-red-50",
    },
    {
      name: "Education",
      icon: "📚",
      jobs: 980,
      description: "Teachers, professors, trainers, and more",
      color: "bg-purple-50",
    },
    {
      name: "Sales & Marketing",
      icon: "📊",
      jobs: 1650,
      description: "Sales executives, marketing managers, and more",
      color: "bg-pink-50",
    },
    {
      name: "Engineering",
      icon: "🔧",
      jobs: 2100,
      description: "Civil, mechanical, electrical engineers, and more",
      color: "bg-yellow-50",
    },
    {
      name: "Human Resources",
      icon: "👥",
      jobs: 450,
      description: "HR managers, recruiters, training specialists, and more",
      color: "bg-indigo-50",
    },
    {
      name: "Hospitality & Tourism",
      icon: "🏨",
      jobs: 780,
      description: "Hotel managers, chefs, tour guides, and more",
      color: "bg-cyan-50",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Job Categories</h1>
          <p className="text-lg text-blue-100">Explore opportunities across various industries and sectors</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage("job-search")}
                className={`${category.color} p-6 rounded-lg border-2 border-neutral-200 hover:border-primary hover:shadow-md transition-all text-left`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{category.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{category.jobs}</span>
                  <span className="text-neutral-600 text-sm">jobs available</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Job Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-4xl font-bold text-primary mb-2">18,760</div>
              <p className="text-neutral-600">Total Jobs Available</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-4xl font-bold text-primary mb-2">9</div>
              <p className="text-neutral-600">Job Categories</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,840</div>
              <p className="text-neutral-600">Active Employers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
