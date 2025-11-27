"use client"

export default function MobileAppInfo({ setCurrentPage }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile App</h1>
          <p className="text-lg text-blue-100">Access job opportunities on the go</p>
        </div>
      </section>

      {/* App Features */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Download Our App</h2>
              <p className="text-neutral-700 mb-6">
                Get access to thousands of job opportunities right in your pocket. Our mobile app provides a seamless
                experience for job searching, applications, and career management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold text-neutral-900">Easy Job Search</p>
                    <p className="text-neutral-600 text-sm">Browse and apply for jobs anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔔</span>
                  <div>
                    <p className="font-semibold text-neutral-900">Push Notifications</p>
                    <p className="text-neutral-600 text-sm">Get instant alerts for new job opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="font-semibold text-neutral-900">Track Applications</p>
                    <p className="text-neutral-600 text-sm">Monitor your application status in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-semibold text-neutral-900">Manage Profile</p>
                    <p className="text-neutral-600 text-sm">Update your resume and profile on the go</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
              <img
                src="/mobile-app-mockup.jpg"
                alt="Mobile app mockup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Download Links */}
          <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Download Now</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="p-6 bg-white border-2 border-neutral-300 rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🍎</div>
                <p className="font-semibold text-neutral-900 mb-1">Download on App Store</p>
                <p className="text-sm text-neutral-600">iOS 12.0 or later</p>
              </button>
              <button className="p-6 bg-white border-2 border-neutral-300 rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🤖</div>
                <p className="font-semibold text-neutral-900 mb-1">Get it on Google Play</p>
                <p className="text-sm text-neutral-600">Android 8.0 or later</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">App Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-bold text-neutral-900 mb-2">Advanced Search</h3>
              <p className="text-neutral-600 text-sm">Filter jobs by location, salary, skills, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-neutral-900 mb-2">Save Favorites</h3>
              <p className="text-neutral-600 text-sm">Bookmark jobs and apply later at your convenience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-bold text-neutral-900 mb-2">In-App Chat</h3>
              <p className="text-neutral-600 text-sm">Communicate directly with employers and recruiters</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="font-bold text-neutral-900 mb-2">Is the app free to download?</h3>
              <p className="text-neutral-700 text-sm">
                Yes, the app is completely free to download and use. All features are available at no cost.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="font-bold text-neutral-900 mb-2">What are the system requirements?</h3>
              <p className="text-neutral-700 text-sm">
                iOS 12.0 or later for Apple devices, and Android 8.0 or later for Android devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="font-bold text-neutral-900 mb-2">Can I use the same account on web and app?</h3>
              <p className="text-neutral-700 text-sm">
                Yes, your account is synchronized across all devices. You can seamlessly switch between web and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
