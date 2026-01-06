"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { setToken } from "../lib/auth";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function UserLogin({ setCurrentPage }) {
  const [userType, setUserType] = useState("candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle OAuth callback token from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    
    if (token) {
      setToken(token);
      // Clear URL params
      window.history.replaceState({}, document.title, window.location.pathname);
      // Redirect to home page
      setCurrentPage("home");
    }
  }, [setCurrentPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      const res = await axios.post(`${API_BASE_URL}/api/auth/login`,
        { email, password }
      );

      const data = res.data;

      // Save token
      if (data.token) {
        setToken(data.token);
      }
      // Redirect to home page
      setCurrentPage("home");

    } catch (err) {
      // Axios error handling
      if (err.response) {
        // Server responded with error status
        setErrors({
          password: err.response.data?.message || "Invalid credentials",
        });
      } else {
        // Network / server down
        setErrors({
          password: "Server not reachable. Try again later.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/google`;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Login</h1>
          <p className="text-blue-100">
            Access your account to manage jobs and applications
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            {/* User Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Login as:
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setUserType("candidate")}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${userType === "candidate"
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                >
                  Job Seeker
                </button>
                <button
                  onClick={() => setUserType("employer")}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${userType === "employer"
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                >
                  Employer
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : "border-neutral-300"
                    }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.password ? "border-red-500" : "border-neutral-300"
                    }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-neutral-700">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-neutral-200" />
                <span className="text-xs text-neutral-500 uppercase tracking-wide">
                  Or continue with
                </span>
                <div className="flex-1 h-px bg-neutral-200" />
              </div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50 transition-colors"
              >
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <p className="text-center text-neutral-600 text-sm">
                Don't have an account?{" "}
                {userType === "candidate" ? (
                  <button
                    onClick={() => setCurrentPage("candidate-registration")}
                    className="text-primary font-semibold hover:underline"
                  >
                    Register as Job Seeker
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentPage("employer-registration")}
                    className="text-primary font-semibold hover:underline"
                  >
                    Register as Employer
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
