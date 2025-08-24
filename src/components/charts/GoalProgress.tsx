"use client"

import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

interface Goal {
  name: string;
  current: number;
  goal: number;
}

interface GoalProgressProps {
  data: Goal[];
}

export default function GoalProgress({ data }: GoalProgressProps) {
  return (
    <div className="space-y-4">
      {data.map((goal) => (
        <div key={goal.name} className="space-y-2">
          <div className="flex justify-between items-baseline">
            <Label htmlFor={goal.name} className="text-sm font-medium">
              {goal.name}
            </Label>
            <span className="text-sm text-muted-foreground">
                {goal.current}% of 100% goal
            </span>
          </div>
          <Progress id={goal.name} value={goal.current} className="h-3" />
        </div>
      ))}
    </div>
  )
}
