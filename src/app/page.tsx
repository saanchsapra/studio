"use client";

import { useState } from "react";
import type { Kpi } from "@/types";
import { kpiData, overallData, wasteData, processData } from "@/lib/data";
import DashboardHeader from "@/components/dashboard/Header";
import Filters from "@/components/dashboard/Filters";
import KpiCard from "@/components/dashboard/KpiCard";
import KpiInsightsDialog from "@/components/dashboard/KpiInsightsDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OverallRadarChart from "@/components/charts/OverallRadarChart";
import WastePieChart from "@/components/charts/WastePieChart";
import ProcessHeatmap from "@/components/charts/ProcessHeatmap";
import { Target } from "lucide-react";

export default function DashboardPage() {
  const [selectedKpi, setSelectedKpi] = useState<Kpi | null>(null);

  const handleKpiSelect = (kpi: Kpi) => {
    setSelectedKpi(kpi);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Filters />
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-5">
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.title} kpi={kpi} onSelect={handleKpiSelect} />
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2 shadow-lg rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Overall Sustainability Score
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <OverallRadarChart data={overallData} />
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base font-medium">Waste Stream Mix</CardTitle>
            </CardHeader>
            <CardContent>
              <WastePieChart data={wasteData} />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8">
           <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base font-medium">Process Efficiency Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <ProcessHeatmap data={processData} />
            </CardContent>
          </Card>
        </div>
      </main>
      <KpiInsightsDialog
        kpi={selectedKpi}
        open={!!selectedKpi}
        onOpenChange={(isOpen) => !isOpen && setSelectedKpi(null)}
      />
    </div>
  );
}
