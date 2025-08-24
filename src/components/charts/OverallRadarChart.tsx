"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart"

interface OverallRadarChartProps {
  data: { metric: string; score: number }[];
}

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function OverallRadarChart({ data }: OverallRadarChartProps) {
  return (
    <div className="h-[350px] w-full">
      <ChartContainer config={chartConfig}>
        <RadarChart 
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip content={<ChartTooltipContent />} />
          <Radar
            name="Sustainability Score"
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
    </div>
  )
}
