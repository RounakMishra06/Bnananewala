import { Recycle, Droplet, Bike } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ChallengesPage() {
  return (
    <div className="container py-6">
      <header className="mb-6 rounded-lg bg-[url('/images/challenges-header.jpg')] bg-cover bg-center p-6 text-white">
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-bold">Unlock Badges & Win! 🏅</h1>
          <p className="text-white/80">Complete challenges and earn rewards</p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-[url('/images/recycle-card.jpg')] bg-cover bg-center overflow-hidden">
          <div className="bg-white/90 dark:bg-black/80 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                    <Recycle className="h-4 w-4" />
                  </div>
                  <CardTitle>Recycle Master</CardTitle>
                </div>
                <Badge className="bg-purple-100 text-purple-700">7/10</Badge>
              </div>
              <CardDescription>Recycle 10 items in a week</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={70} className="h-2 bg-purple-100" indicatorClassName="bg-purple-600" />
            </CardContent>
          </div>
        </Card>

        <Card className="bg-[url('/images/bike-card.jpg')] bg-cover bg-center overflow-hidden">
          <div className="bg-white/90 dark:bg-black/80 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Bike className="h-4 w-4" />
                  </div>
                  <CardTitle>Green Mover</CardTitle>
                </div>
                <Badge className="bg-green-100 text-green-700">3/5</Badge>
              </div>
              <CardDescription>Walk 5km in 3 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={60} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
            </CardContent>
          </div>
        </Card>

        <Card className="bg-[url('/images/water-card.jpg')] bg-cover bg-center overflow-hidden">
          <div className="bg-white/90 dark:bg-black/80 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Droplet className="h-4 w-4" />
                  </div>
                  <CardTitle>Water Saver</CardTitle>
                </div>
                <Badge className="bg-blue-100 text-blue-700">2/3</Badge>
              </div>
              <CardDescription>Use bucket bath 3 times</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={66} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
            </CardContent>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Available Rewards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-gradient-to-r from-green-50 to-white dark:from-green-950/30 dark:to-black/60">
            <CardHeader>
              <CardTitle>Metro Recharge</CardTitle>
              <CardDescription>100 GreenCoins</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Claim Reward</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gradient-to-r from-green-50 to-white dark:from-green-950/30 dark:to-black/60">
            <CardHeader>
              <CardTitle>Ola Green Discount</CardTitle>
              <CardDescription>75 GreenCoins</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Claim Reward</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
