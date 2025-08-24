"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Kpi } from "@/types";
import { trendData, hotspotData, processData, goalsData } from "@/lib/data";
import LineTrendChart from "@/components/charts/LineTrendChart";
import HotspotsBarChart from "@/components/charts/HotspotsBarChart";
import ProcessHeatmap from "@/components/charts/ProcessHeatmap";
import GoalProgress from "@/components/charts/GoalProgress";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DollarSign } from "lucide-react";


interface KpiInsightsDialogProps {
  kpi: Kpi | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function KpiInsightsDialog({
  kpi,
  open,
  onOpenChange,
}: KpiInsightsDialogProps) {
  if (!kpi) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">{kpi.title} Insights</DialogTitle>
          <DialogDescription>
            Detailed analysis and trends for {kpi.title.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
        <Tabs defaultValue="trend" className="flex flex-col h-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trend">Trend Analysis</TabsTrigger>
            <TabsTrigger value="hotspots">Department Hotspots</TabsTrigger>
            <TabsTrigger value="heatmap">Process Analysis</TabsTrigger>
            <TabsTrigger value="goals">Goals & Cost</TabsTrigger>
          </TabsList>
          <div className="flex-grow overflow-auto p-1">
            <TabsContent value="trend" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly {kpi.unit} Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineTrendChart data={trendData} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hotspots" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Consumption by Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <HotspotsBarChart data={hotspotData} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="heatmap" className="mt-4">
               <Card>
                <CardHeader>
                  <CardTitle>Process Efficiency Heatmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProcessHeatmap data={processData} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="goals" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Goal Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <GoalProgress data={goalsData} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">
                    Estimated Cost Impact
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">+$12,450</div>
                  <p className="text-xs text-muted-foreground">
                    increase in costs this month based on consumption
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
