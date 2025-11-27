"use client"

export default function AboutUs({ setCurrentPage }) {
  const team = [
    { name: "Rajesh Kumar", role: "Executive Director", dept: "Administration" },
    { name: "Priya Sharma", role: "Head of Operations", dept: "Operations" },
    { name: "Amit Patel", role: "Technology Lead", dept: "Technology" },
    { name: "Neha Singh", role: "HR Manager", dept: "Human Resources" },
  ]

  const values = [
    { title: "Transparency", description: "We maintain complete transparency in all our operations and dealings." },
    {
      title: "Accessibility",
      description: "Our platform is designed to be accessible to all users regardless of background.",
    },
    { title: "Excellence", description: "We strive for excellence in every aspect of our service delivery." },
    { title: "Integrity", description: "We operate with the highest standards of integrity and ethics." },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Empowering job seekers and employers through a transparent, accessible, and efficient job portal.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                To create a transparent, accessible, and efficient job portal that connects qualified candidates with
                suitable employment opportunities across all sectors of the economy.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                We are committed to promoting fair employment practices, supporting career development, and contributing
                to economic growth through effective talent matching.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our platform adheres to all government regulations and maintains the highest standards of data security
                and user privacy.
              </p>
            </div>
            <div className="bg-neutral-100 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/office-team-meeting.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="w-1 h-24 bg-neutral-300"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">2020 - Platform Launch</h3>
                  <p className="text-neutral-600 mt-2">
                    Launched our government-compliant job portal to connect job seekers with employers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="w-1 h-24 bg-neutral-300"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">2021 - Expansion</h3>
                  <p className="text-neutral-600 mt-2">
                    Expanded to 15 states with over 50,000 registered users and 1,000 employers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">2025 - Present</h3>
                  <p className="text-neutral-600 mt-2">
                    Serving over 85,000 candidates and 2,800 employers with advanced features and mobile app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}