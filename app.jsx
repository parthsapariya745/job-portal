"use client"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import SiteMap from "./pages/SiteMap"
import JobSearch from "./pages/JobSearch"
import JobCategories from "./pages/JobCategories"
import GovernmentJobs from "./pages/GovernmentJobs"
import PrivateSectorJobs from "./pages/PrivateSectorJobs"
import SkillBasedSearch from "./pages/SkillBasedSearch"
import LocationBasedSearch from "./pages/LocationBasedSearch"
import EmployerProfiles from "./pages/EmployerProfiles"
import CandidateRegistration from "./pages/CandidateRegistration"
import EmployerRegistration from "./pages/EmployerRegistration"
import UserLogin from "./pages/UserLogin"
import UserProfileDashboard from "./pages/UserProfileDashboard"
import ResumeManagement from "./pages/ResumeManagement"
import JobApplicationProcess from "./pages/JobApplicationProcess"
import ApplicationStatusTracking from "./pages/ApplicationStatusTracking"
import InterviewScheduling from "./pages/InterviewScheduling"
import CreateJobAlerts from "./pages/CreateJobAlerts"
import EmployerDashboard from "./pages/EmployerDashboard"
import LatestJobAlerts from "./pages/LatestJobAlerts"
import NotificationsHistory from "./pages/NotificationsHistory"
import CareerGuidance from "./pages/CareerGuidance"
import BlogCareerNews from "./pages/BlogCareerNews"
import SalaryInsightsTips from "./pages/SalaryInsightsTips"
import GovernmentSchemes from "./pages/GovernmentSchemes"
import CareerTestsAssessment from "./pages/CareerTestsAssessment"
import FAQPage from "./pages/FAQPage"
import HelpDeskSupport from "./pages/HelpDeskSupport"
import TermsAndConditions from "./pages/TermsAndConditions"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import AdvertisementPromotion from "./pages/AdvertisementPromotion"
import UserReviewsRatings from "./pages/UserReviewsRatings"
import MobileAppInfo from "./pages/MobileAppInfo"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />
      case "about":
        return <AboutUs setCurrentPage={setCurrentPage} />
      case "contact":
        return <ContactUs setCurrentPage={setCurrentPage} />
      case "sitemap":
        return <SiteMap setCurrentPage={setCurrentPage} />
      case "job-search":
        return <JobSearch setCurrentPage={setCurrentPage} />
      case "job-categories":
        return <JobCategories setCurrentPage={setCurrentPage} />
      case "government-jobs":
        return <GovernmentJobs setCurrentPage={setCurrentPage} />
      case "private-sector-jobs":
        return <PrivateSectorJobs setCurrentPage={setCurrentPage} />
      case "skill-based-search":
        return <SkillBasedSearch setCurrentPage={setCurrentPage} />
      case "location-based-search":
        return <LocationBasedSearch setCurrentPage={setCurrentPage} />
      case "employer-profiles":
        return <EmployerProfiles setCurrentPage={setCurrentPage} />
      case "candidate-registration":
        return <CandidateRegistration setCurrentPage={setCurrentPage} />
      case "employer-registration":
        return <EmployerRegistration setCurrentPage={setCurrentPage} />
      case "login":
        return <UserLogin setCurrentPage={setCurrentPage} />
      case "user-dashboard":
        return <UserProfileDashboard setCurrentPage={setCurrentPage} />
      case "resume-management":
        return <ResumeManagement setCurrentPage={setCurrentPage} />
      case "job-application":
        return <JobApplicationProcess setCurrentPage={setCurrentPage} />
      case "application-tracking":
        return <ApplicationStatusTracking setCurrentPage={setCurrentPage} />
      case "interview-scheduling":
        return <InterviewScheduling setCurrentPage={setCurrentPage} />
      case "job-alerts":
        return <CreateJobAlerts setCurrentPage={setCurrentPage} />
      case "employer-dashboard":
        return <EmployerDashboard setCurrentPage={setCurrentPage} />
      case "latest-alerts":
        return <LatestJobAlerts setCurrentPage={setCurrentPage} />
      case "notifications":
        return <NotificationsHistory setCurrentPage={setCurrentPage} />
      case "career-guidance":
        return <CareerGuidance setCurrentPage={setCurrentPage} />
      case "career-news":
        return <BlogCareerNews setCurrentPage={setCurrentPage} />
      case "salary-insights":
        return <SalaryInsightsTips setCurrentPage={setCurrentPage} />
      case "government-schemes":
        return <GovernmentSchemes setCurrentPage={setCurrentPage} />
      case "career-tests":
        return <CareerTestsAssessment setCurrentPage={setCurrentPage} />
      case "faq":
        return <FAQPage setCurrentPage={setCurrentPage} />
      case "help":
        return <HelpDeskSupport setCurrentPage={setCurrentPage} />
      case "terms":
        return <TermsAndConditions setCurrentPage={setCurrentPage} />
      case "privacy":
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />
      case "advertisements":
        return <AdvertisementPromotion setCurrentPage={setCurrentPage} />
      case "reviews":
        return <UserReviewsRatings setCurrentPage={setCurrentPage} />
      case "mobile-app":
        return <MobileAppInfo setCurrentPage={setCurrentPage} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
