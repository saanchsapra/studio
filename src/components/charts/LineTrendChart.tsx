"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart"
import type { ChartDataPoint } from "@/types"

interface LineTrendChartProps {
  data: ChartDataPoint[];
}

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function LineTrendChart({ data }: LineTrendChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={chartConfig}>
        <LineChart
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
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
           />
          <Tooltip content={<ChartTooltipContent />} />
          <Line
            dataKey="value"
            type="monotone"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}
