export type KpiTitle = "Energy Consumption" | "Water Usage" | "Waste Generation" | "Emissions Output";

export interface Kpi {
  title: KpiTitle | "Overall Score";
  value: string;
  unit: string;
  change: string;
  changeType: "increase" | "decrease" | "none";
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface HotspotDataPoint {
  department: string;
  value: number;
}
