import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CircularProgressBar } from "@/components/circular-progress"
import { MonthlyBarChart } from "@/components/monthly-bar-chart"
import { StreakCalendar } from "@/components/streak-calendar"

export default function ImpactPage() {
  return (
    <div className="container py-6">
      <header className="mb-6 rounded-lg bg-[url('/images/impact-header.jpg')] bg-cover bg-center p-6 text-white">
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-bold">Your Environmental Impact 🌍</h1>
          <p className="text-white/80">Track your eco-friendly activities and their impact</p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-black/60">
          <CardHeader>
            <CardTitle>CO2 Saved</CardTitle>
            <CardDescription>Your contribution to reducing carbon emissions</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <CircularProgressBar value={65} label="2.3 kg" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-black/60">
          <CardHeader>
            <CardTitle>Monthly Green Acts</CardTitle>
            <CardDescription>Your eco-friendly activities this month</CardDescription>
          </CardHeader>
          <CardContent>
            <MonthlyBarChart />
          </CardContent>
        </Card>

        <Card className="bg-[url('/images/streak-card.jpg')] bg-cover bg-center overflow-hidden">
          <div className="bg-white/90 dark:bg-black/80 h-full">
            <CardHeader>
              <CardTitle>Streak Calendar</CardTitle>
              <CardDescription>🔥 5-day streak</CardDescription>
            </CardHeader>
            <CardContent>
              <StreakCalendar />
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  )
}
