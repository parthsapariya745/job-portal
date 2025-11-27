"use client"

import { useState } from "react"

export default function NotificationsHistory({ setCurrentPage }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Application Received",
      message: "Your application for Senior Developer has been received",
      date: "Today at 2:30 PM",
      type: "application",
      read: false,
    },
    {
      id: 2,
      title: "Interview Scheduled",
      message: "Your interview for Data Analyst role is scheduled for 15 Nov at 2:00 PM",
      date: "Today at 10:15 AM",
      type: "interview",
      read: false,
    },
    {
      id: 3,
      title: "Job Alert",
      message: "New job matching your profile: Senior Software Engineer at Tech Corp",
      date: "Yesterday at 9:00 AM",
      type: "alert",
      read: true,
    },
    {
      id: 4,
      title: "Application Status Update",
      message: "Your application for Marketing Manager has been shortlisted",
      date: "2 days ago",
      type: "status",
      read: true,
    },
    {
      id: 5,
      title: "Profile Viewed",
      message: "Your profile was viewed by 5 employers",
      date: "3 days ago",
      type: "profile",
      read: true,
    },
  ])

  const [filter, setFilter] = useState("all")

  const filteredNotifications = filter === "all" ? notifications : notifications.filter((n) => n.type === filter)

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "application":
        return "📝"
      case "interview":
        return "📅"
      case "alert":
        return "🔔"
      case "status":
        return "✅"
      case "profile":
        return "👁️"
      default:
        return "📢"
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Notifications</h1>
          <p className="text-blue-100">View all your notifications and updates</p>
        </div>
      </section>

      {/* Notifications */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Notifications {unreadCount > 0 && <span className="text-primary">({unreadCount} unread)</span>}
              </h2>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="px-4 py-2 text-sm text-primary border border-primary rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["all", "application", "interview", "alert", "status", "profile"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  filter === f ? "bg-primary text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  notification.read ? "bg-white border-neutral-200" : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex gap-4">
                  <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-semibold ${notification.read ? "text-neutral-700" : "text-neutral-900"}`}>
                        {notification.title}
                      </h3>
                      {!notification.read && <span className="w-3 h-3 bg-primary rounded-full"></span>}
                    </div>
                    <p className="text-neutral-600 text-sm mb-2">{notification.message}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-500">{notification.date}</span>
                      {!notification.read && (
                        <button
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="text-xs text-primary hover:underline font-semibold"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No notifications found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
