"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Target, Trash2, Wind, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { Kpi } from "@/types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", value: 186 },
  { month: "February", value: 305 },
  { month: "March", value: 237 },
  { month: "April", value: 250 },
  { month: "May", value: 200 },
  { month: "June", value: 320 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--primary))",
  },
};

const iconMap: { [key: string]: React.ElementType } = {
  "Energy Consumption": Zap,
  "Water Usage": Droplets,
  "Waste Generation": Trash2,
  "Emissions Output": Wind,
  "Overall Score": Target,
};

interface KpiCardProps {
  kpi: Kpi;
  onSelect: (kpi: Kpi) => void;
}

export default function KpiCard({ kpi, onSelect }: KpiCardProps) {
  const Icon = iconMap[kpi.title];
  const isPositive = kpi.changeType === "decrease";
  const isNegative = kpi.changeType === "increase";

  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-2xl"
      onClick={() => onSelect(kpi)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {kpi.value}
          <span className="text-sm font-normal text-muted-foreground ml-1">{kpi.unit}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span
            className={`flex items-center gap-1 font-semibold ${isPositive ? "text-green-600" : ""} ${isNegative ? "text-red-600" : ""}`}
          >
            {isPositive && <ArrowDownRight className="h-4 w-4" />}
            {isNegative && <ArrowUpRight className="h-4 w-4" />}
            {kpi.change}
          </span>
          <span>from last month</span>
        </div>
        <div className="h-16 mt-4 -mx-6 mb-[-1.5rem]">
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-value)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-value)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="value"
                type="natural"
                fill="url(#fillValue)"
                stroke="var(--color-value)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
