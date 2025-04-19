import { Building, Building2, School } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function LeaderboardPage() {
  return (
    <div className="container py-6">
      <header className="mb-6 rounded-lg bg-[url('/images/leaderboard-header.jpg')] bg-cover bg-center p-6 text-white">
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-bold">Delhi Green Zones 🌳</h1>
          <p className="text-white/80">See how different areas are contributing</p>
        </div>
      </header>

      <div className="space-y-4">
        <Card className="bg-gradient-to-r from-amber-50 to-white dark:from-amber-950/30 dark:to-black/60">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Dwarka
                    <Badge className="bg-amber-100 text-amber-700">1</Badge>
                  </CardTitle>
                  <CardDescription>1,410 points</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={100} className="h-2 bg-amber-100" indicatorClassName="bg-amber-600" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/30 dark:to-black/60">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-silver-100 text-gray-700">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    South Delhi
                    <Badge className="bg-gray-100 text-gray-700">2</Badge>
                  </CardTitle>
                  <CardDescription>1,290 points</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={91} className="h-2 bg-gray-100" indicatorClassName="bg-gray-600" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-white dark:from-orange-950/30 dark:to-black/60">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bronze-100 text-orange-700">
                  <School className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Venkateshwara College
                    <Badge className="bg-orange-100 text-orange-700">3</Badge>
                  </CardTitle>
                  <CardDescription>92 green acts this week</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={82} className="h-2 bg-orange-100" indicatorClassName="bg-orange-600" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex justify-center">
        <Button className="bg-green-600 hover:bg-green-700">See Full Leaderboard</Button>
      </div>
    </div>
  )
}
