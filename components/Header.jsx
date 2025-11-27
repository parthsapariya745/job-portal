"use client"

import { useState } from "react"

export default function Header({ setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mainNavItems = [
    { label: "Home", id: "home" },
    { label: "Job Search", id: "job-search" },
    { label: "Browse Jobs", id: "job-categories" },
    { label: "For Employers", id: "employer-profiles" },
    { label: "Resources", id: "career-guidance" },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Job Portal Home"
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-primary">
              JP
            </div>
            <span className="font-bold text-lg hidden sm:inline">Job Portal</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium hover:text-accent transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => handleNavClick("login")}
              className="px-4 py-2 text-sm font-medium border border-white rounded-lg hover:bg-white hover:text-primary transition-colors"
              aria-label="Login"
            >
              Login
            </button>
            <button
              onClick={() => handleNavClick("candidate-registration")}
              className="px-4 py-2 text-sm font-medium bg-accent text-primary rounded-lg hover:opacity-90 transition-opacity"
              aria-label="Sign Up"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary-dark rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-white border-opacity-20" aria-label="Mobile navigation">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-0 py-2 text-sm hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-white border-opacity-20">
              <button
                onClick={() => handleNavClick("login")}
                className="flex-1 px-3 py-2 text-sm font-medium border border-white rounded hover:bg-white hover:text-primary transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => handleNavClick("candidate-registration")}
                className="flex-1 px-3 py-2 text-sm font-medium bg-accent text-primary rounded hover:opacity-90 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
