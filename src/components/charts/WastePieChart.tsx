"use client"

import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

interface WastePieChartProps {
  data: { name: string; value: number, fill: string }[];
}

const chartConfig = {
    value: {
      label: "Value",
    },
    ...Object.fromEntries(
        [
            { name: 'Cotton Scraps', fill: 'hsl(var(--chart-1))' },
            { name: 'Chemicals', fill: 'hsl(var(--chart-2))' },
            { name: 'Plastics', fill: 'hsl(var(--chart-3))' },
            { name: 'Other', fill: 'hsl(var(--chart-4))' },
        ].map(item => [item.name, {label: item.name, color: item.fill}])
    )
  } satisfies ChartConfig;

export default function WastePieChart({ data }: WastePieChartProps) {
  return (
    <div className="h-[350px] w-full flex items-center justify-center">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
        <PieChart>
          <Tooltip content={<ChartTooltipContent nameKey="name" hideLabel />} />
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
             {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
           <ChartLegend
            content={<ChartLegendContent nameKey="name" />}
            className="-translate-y-[20px] flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}
