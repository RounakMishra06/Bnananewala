"use client"

import type React from "react"

import { useState } from "react"
import { Bike, Leaf, TreesIcon as Plant, Recycle, ShoppingBag } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type GreenAct = {
  id: string
  name: string
  icon: React.ElementType
  points: number
}

export default function LogActPage() {
  const [selectedAct, setSelectedAct] = useState<string | null>(null)

  const greenActs: GreenAct[] = [
    { id: "recycle", name: "Recycled", icon: Recycle, points: 5 },
    { id: "bike", name: "Biked", icon: Bike, points: 10 },
    { id: "metro", name: "Took Metro", icon: Leaf, points: 8 },
    { id: "plant", name: "Planted a Tree", icon: Plant, points: 15 },
    { id: "bag", name: "Used Cloth Bag", icon: ShoppingBag, points: 3 },
  ]

  const handleSubmit = () => {
    if (selectedAct) {
      alert(`Logged: ${greenActs.find((act) => act.id === selectedAct)?.name}`)
      setSelectedAct(null)
    }
  }

  return (
    <div className="container py-6">
      <header className="mb-6 rounded-lg bg-[url('/images/log-act-header.jpg')] bg-cover bg-center p-6 text-white">
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-bold">What Green Act Did You Do Today?</h1>
          <p className="text-white/80">Log your eco-friendly activities</p>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {greenActs.map((act) => (
          <Card
            key={act.id}
            className={`cursor-pointer transition-all hover:border-green-500 ${
              selectedAct === act.id ? "border-2 border-green-500" : ""
            } bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-black/60`}
            onClick={() => setSelectedAct(act.id)}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                <act.icon className="h-6 w-6" />
              </div>
              <h3 className="text-center font-medium">{act.name}</h3>
              <p className="text-sm text-muted-foreground">{act.points} points</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          className="w-full max-w-md bg-green-600 hover:bg-green-700 md:w-auto md:px-8"
          disabled={!selectedAct}
          onClick={handleSubmit}
        >
          Submit Log
        </Button>
      </div>
    </div>
  )
}
