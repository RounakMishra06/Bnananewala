"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", acts: 3 },
  { day: "Tue", acts: 5 },
  { day: "Wed", acts: 4 },
  { day: "Thu", acts: 7 },
  { day: "Fri", acts: 2 },
  { day: "Sat", acts: 3 },
  { day: "Sun", acts: 3 },
]

export function MonthlyBarChart() {
  return (
    <ChartContainer
      config={{
        acts: {
          label: "Green Acts",
          color: "hsl(142, 76%, 36%)",
        },
      }}
      className="h-[200px]"
    >
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} width={30} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="acts" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} barSize={30} />
      </BarChart>
    </ChartContainer>
  )
}
