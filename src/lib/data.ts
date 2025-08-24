import type { Kpi, Alert, ChartDataPoint, HotspotDataPoint } from "@/types";

export const kpiData: Kpi[] = [
  {
    title: "Energy Consumption",
    value: "1.2M",
    unit: "kWh",
    change: "+5.2%",
    changeType: "increase",
  },
  {
    title: "Water Usage",
    value: "8.5M",
    unit: "Liters",
    change: "-2.1%",
    changeType: "decrease",
  },
  {
    title: "Waste Generation",
    value: "45",
    unit: "Tons",
    change: "+8.7%",
    changeType: "increase",
  },
  {
    title: "Emissions Output",
    value: "1,200",
    unit: "tCO2e",
    change: "+1.5%",
    changeType: "increase",
  },
  {
    title: "Overall Score",
    value: "82",
    unit: "/ 100",
    change: "+1.2 pts",
    changeType: "decrease", // semantically "decrease" is good here (positive change)
  },
];

export const alerts: Alert[] = [
  {
    id: "1",
    title: "High Energy Alert",
    description: "Spinning Department energy usage exceeded threshold by 15% at 3:00 PM.",
    timestamp: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    title: "Water Leak Detected",
    description: "Potential water leak detected in the Dyeing Unit. Usage up 30% from baseline.",
    timestamp: "1 day ago",
    read: false,
  },
  {
    id: "3",
    title: "Waste Target Missed",
    description: "Weaving Department missed its weekly waste reduction target.",
    timestamp: "3 days ago",
    read: true,
  },
  {
    id: "4",
    title: "System Maintenance",
    description: "Scheduled system maintenance on Sunday at 2 AM.",
    timestamp: "1 week ago",
    read: true,
  }
];

export const trendData: ChartDataPoint[] = [
  { date: "Jan", value: 1200 },
  { date: "Feb", value: 1100 },
  { date: "Mar", value: 1300 },
  { date: "Apr", value: 1250 },
  { date: "May", value: 1400 },
  { date: "Jun", value: 1350 },
];

export const hotspotData: HotspotDataPoint[] = [
  { department: "Spinning", value: 450 },
  { department: "Weaving", value: 280 },
  { department: "Dyeing", value: 650 },
  { department: "Finishing", value: 220 },
  { department: "QA", value: 100 },
];

export const overallData = [
    { metric: 'Energy', score: 75 },
    { metric: 'Water', score: 85 },
    { metric: 'Waste', score: 60 },
    { metric: 'Emissions', score: 70 },
    { metric: 'Efficiency', score: 90 },
];

export const wasteData = [
    { name: 'Cotton Scraps', value: 400, fill: 'hsl(var(--chart-1))' },
    { name: 'Chemicals', value: 300, fill: 'hsl(var(--chart-2))' },
    { name: 'Plastics', value: 300, fill: 'hsl(var(--chart-3))' },
    { name: 'Other', value: 200, fill: 'hsl(var(--chart-4))' },
];

export const processData = [
    { hour: '00:00', process: 'Spinning', efficiency: 85 },
    { hour: '00:00', process: 'Weaving', efficiency: 90 },
    { hour: '00:00', process: 'Dyeing', efficiency: 78 },
    { hour: '00:00', process: 'Finishing', efficiency: 92 },
    { hour: '04:00', process: 'Spinning', efficiency: 88 },
    { hour: '04:00', process: 'Weaving', efficiency: 91 },
    { hour: '04:00', process: 'Dyeing', efficiency: 82 },
    { hour: '04:00', process: 'Finishing', efficiency: 90 },
    { hour: '08:00', process: 'Spinning', efficiency: 92 },
    { hour: '08:00', process: 'Weaving', efficiency: 85 },
    { hour: '08:00', process: 'Dyeing', efficiency: 88 },
    { hour: '08:00', process: 'Finishing', efficiency: 95 },
    { hour: '12:00', process: 'Spinning', efficiency: 70 },
    { hour: '12:00', process: 'Weaving', efficiency: 75 },
    { hour: '12:00', process: 'Dyeing', efficiency: 65 },
    { hour: '12:00', process: 'Finishing', efficiency: 80 },
    { hour: '16:00', process: 'Spinning', efficiency: 90 },
    { hour: '16:00', process: 'Weaving', efficiency: 94 },
    { hour: '16:00', process: 'Dyeing', efficiency: 91 },
    { hour: '16:00', process: 'Finishing', efficiency: 96 },
    { hour: '20:00', process: 'Spinning', efficiency: 87 },
    { hour: '20:00', process: 'Weaving', efficiency: 89 },
    { hour: '20:00', process: 'Dyeing', efficiency: 84 },
    { hour: '20:00', process: 'Finishing', efficiency: 91 },
];

export const goalsData = [
  { name: 'Energy Reduction', current: 75, goal: 100 },
  { name: 'Water Conservation', current: 60, goal: 100 },
  { name: 'Waste Minimization', current: 90, goal: 100 },
];
