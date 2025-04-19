import { Leaf, MapPin, Wallet } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="container py-6">
      <header className="mb-6 rounded-lg bg-[url('/images/eco-header.jpg')] bg-cover bg-center p-6 text-white">
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-bold">Welcome back, Rounak!</h1>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-300" />
            <span className="font-medium">Your eco-streak: 5 days</span>
          </div>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="bg-[url('/images/commute-card.jpg')] bg-cover bg-center overflow-hidden">
          <div className="bg-white/90 dark:bg-black/80 h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Leaf className="h-4 w-4" />
                </div>
                <CardTitle>Track Green Commute</CardTitle>
              </div>
              <CardDescription>Log your metro, cycle, or carpool rides</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700">Log Commute</Button>
            </CardContent>
          </div>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Leaf className="h-4 w-4" />
              </div>
              <CardTitle>Daily Eco Goals</CardTitle>
            </div>
            <CardDescription>Complete 3 green acts today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  ✓
                </Badge>
                <span>Recycled plastic</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  ✓
                </Badge>
                <span>Walked to shop</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-red-50 text-red-700">
                  ✗
                </Badge>
                <span>Used disposable bottle</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Wallet className="h-4 w-4" />
              </div>
              <CardTitle>GreenCoins Wallet</CardTitle>
            </div>
            <CardDescription>You've earned 152 GreenCoins</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-green-600 hover:bg-green-700">Redeem Rewards</Button>
          </CardContent>
        </Card>

        <Card className="bg-[url('/images/leaderboard-card.jpg')] bg-cover bg-center overflow-hidden">
          <div className="bg-white/90 dark:bg-black/80 h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <MapPin className="h-4 w-4" />
                </div>
                <CardTitle>Delhi Eco Leaderboard</CardTitle>
              </div>
              <CardDescription>South Delhi: 1,290 pts | Dwarka: 1,410 pts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700">View Rankings</Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  )
}
