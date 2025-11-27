"use client"

import { useState } from "react"

export default function EmployerRegistration({ setCurrentPage }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    industry: "",
    companySize: "",
    website: "",
    contactPerson: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    description: "",
    agreeTerms: false,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const validateStep = (currentStep) => {
    const newErrors = {}

    if (currentStep === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required"
      if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration number is required"
      if (!formData.industry) newErrors.industry = "Industry is required"
      if (!formData.companySize) newErrors.companySize = "Company size is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    } else if (currentStep === 2) {
      if (!formData.password) newErrors.password = "Password is required"
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
      if (!formData.address.trim()) newErrors.address = "Address is required"
      if (!formData.city.trim()) newErrors.city = "City is required"
      if (!formData.state) newErrors.state = "State is required"
      if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required"
    } else if (currentStep === 3) {
      if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required"
      if (!formData.description.trim()) newErrors.description = "Company description is required"
      if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep(step)) {
      alert("Registration successful! Please check your email for verification.")
      setCurrentPage("login")
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Register as Employer</h1>
          <p className="text-blue-100">Create your company account and start hiring top talent</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                      s <= step ? "bg-primary text-white" : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {s}
                  </div>
                  <span className="text-xs text-neutral-600 text-center">
                    {s === 1 ? "Company" : s === 2 ? "Credentials" : "Details"}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            {/* Step 1: Company Information */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Company Information</h2>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.companyName ? "border-red-500" : "border-neutral-300"
                    }`}
                    placeholder="Your Company Name"
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                </div>
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-medium text-neutral-700 mb-2">
                    Registration Number (CIN/GSTIN) *
                  </label>
                  <input
                    id="registrationNumber"
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.registrationNumber ? "border-red-500" : "border-neutral-300"
                    }`}
                    placeholder="CIN or GSTIN"
                  />
                  {errors.registrationNumber && (
                    <p className="text-red-500 text-xs mt-1">{errors.registrationNumber}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-neutral-700 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.industry ? "border-red-500" : "border-neutral-300"
                      }`}
                    >
                      <option value="">Select Industry</option>
                      <option value="it">IT & Software</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                    </select>
                    {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-neutral-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.companySize ? "border-red-500" : "border-neutral-300"
                      }`}
                    >
                      <option value="">Select Size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                    {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    id="website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://www.example.com"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="company@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="+91-XXXXXXXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Credentials & Address */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Credentials & Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                      Password *
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.password ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="••••••••"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.confirmPassword ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-2">
                    Office Address *
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.address ? "border-red-500" : "border-neutral-300"
                    }`}
                    placeholder="Street address"
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-2">
                      City *
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.city ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="City"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-2">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.state ? "border-red-500" : "border-neutral-300"
                      }`}
                    >
                      <option value="">Select State</option>
                      <option value="delhi">Delhi</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-neutral-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      id="pincode"
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.pincode ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="110001"
                    />
                    {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Additional Details</h2>
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-neutral-700 mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    id="contactPerson"
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.contactPerson ? "border-red-500" : "border-neutral-300"
                    }`}
                    placeholder="Contact person name"
                  />
                  {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
                    Company Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.description ? "border-red-500" : "border-neutral-300"
                    }`}
                    placeholder="Tell us about your company..."
                  ></textarea>
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-neutral-700">
                    I agree to the Terms and Conditions and Privacy Policy *
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-xs">{errors.agreeTerms}</p>}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  step === 1
                    ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                }`}
              >
                Previous
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Register
                </button>
              )}
            </div>
          </form>

          <p className="text-center text-neutral-600 mt-6">
            Already have an account?{" "}
            <button onClick={() => setCurrentPage("login")} className="text-primary font-semibold hover:underline">
              Login here
            </button>
          </p>
        </div>
      </section>
    </div>
  )
}
