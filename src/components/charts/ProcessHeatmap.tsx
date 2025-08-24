"use client"

import { Card } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HeatmapDataPoint {
  hour: string;
  process: string;
  efficiency: number;
}

interface ProcessHeatmapProps {
  data: HeatmapDataPoint[];
}

const getEfficiencyColor = (efficiency: number) => {
  if (efficiency > 90) return "bg-green-500";
  if (efficiency > 80) return "bg-green-300";
  if (efficiency > 70) return "bg-yellow-300";
  return "bg-red-400";
};

export default function ProcessHeatmap({ data }: ProcessHeatmapProps) {
  const processes = [...new Set(data.map((d) => d.process))];
  const hours = [...new Set(data.map((d) => d.hour))];

  const getDataPoint = (process: string, hour: string) => {
    return data.find((d) => d.process === process && d.hour === hour);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 pt-8">
          {processes.map((process) => (
            <div key={process} className="text-sm font-medium text-right pr-2 h-10 flex items-center justify-end whitespace-nowrap">
              {process}
            </div>
          ))}
        </div>
        <div className="flex-grow grid grid-cols-6 gap-2">
          {hours.map((hour) => (
            <div key={hour} className="text-sm font-medium text-center pb-2 h-8 flex items-center justify-center">
              {hour}
            </div>
          ))}
          {processes.map((process) =>
            hours.map((hour) => {
              const point = getDataPoint(process, hour);
              return (
                <TooltipProvider key={`${process}-${hour}`} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={`w-full h-10 rounded-md ${
                          point ? getEfficiencyColor(point.efficiency) : "bg-gray-200"
                        }`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Process: {process}</p>
                      <p>Time: {hour}</p>
                      {point && <p>Efficiency: {point.efficiency}%</p>}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-4 text-xs">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-red-400"></div> &lt;70%</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-yellow-300"></div> 70-80%</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-green-300"></div> 80-90%</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-green-500"></div> &gt;90%</div>
      </div>
    </div>
  );
}
