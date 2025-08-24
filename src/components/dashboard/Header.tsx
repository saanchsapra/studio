"use client";

import { Bell, Download, FileText, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlertsSheet from "@/components/dashboard/AlertsSheet";
import { useState } from "react";

export default function DashboardHeader() {
  const [alertsOpen, setAlertsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <h1 className="text-2xl font-bold tracking-tight">EcoFabric Insights</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
           <Button variant="outline" size="icon" className="relative" onClick={() => setAlertsOpen(true)}>
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </Button>
        </div>
      </header>
      <AlertsSheet open={alertsOpen} onOpenChange={setAlertsOpen} />
    </>
  );
}
