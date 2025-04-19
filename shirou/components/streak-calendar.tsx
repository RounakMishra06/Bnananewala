"use client"

import { useState } from "react"

export function StreakCalendar() {
  // Mock data for the last 14 days
  const [streakData] = useState(() => {
    const today = new Date()
    const data = []

    for (let i = 13; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)

      // Generate some mock data - last 5 days are active for the streak
      const isActive = i <= 4

      data.push({
        date: date,
        isActive,
      })
    }

    return data
  })

  // Format date as "Mon 01"
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
    })
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="grid grid-cols-7 gap-1">
        {streakData.slice(0, 7).map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-xs text-muted-foreground">{formatDate(day.date)}</div>
            <div
              className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                day.isActive ? "bg-green-500 text-white" : "bg-gray-100 text-gray-400"
              }`}
            >
              {day.isActive ? "🔥" : ""}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {streakData.slice(7, 14).map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-xs text-muted-foreground">{formatDate(day.date)}</div>
            <div
              className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                day.isActive ? "bg-green-500 text-white" : "bg-gray-100 text-gray-400"
              }`}
            >
              {day.isActive ? "🔥" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
