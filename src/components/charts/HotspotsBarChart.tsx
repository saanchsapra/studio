"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart"
import type { HotspotDataPoint } from "@/types"

interface HotspotsBarChartProps {
  data: HotspotDataPoint[];
}

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function HotspotsBarChart({ data }: HotspotsBarChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={chartConfig}>
        <BarChart 
            accessibilityLayer
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 10,
              bottom: 5,
            }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="department"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--primary))" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
