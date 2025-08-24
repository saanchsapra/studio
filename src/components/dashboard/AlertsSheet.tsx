"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { alerts } from "@/lib/data"
import { BellRing } from "lucide-react"

interface AlertsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AlertsSheet({ open, onOpenChange }: AlertsSheetProps) {
  const unreadCount = alerts.filter(alert => !alert.read).length;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have {unreadCount} unread messages.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <ul className="space-y-4">
            {alerts.map((alert) => (
              <li key={alert.id}>
                <div className="flex items-start gap-4">
                  <div className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full ${alert.read ? 'bg-secondary' : 'bg-primary/10'}`}>
                    <BellRing className={`h-5 w-5 ${alert.read ? 'text-muted-foreground' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${alert.read ? 'text-muted-foreground' : 'text-foreground'}`}>{alert.title}</p>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                  </div>
                </div>
                <Separator className="mt-4" />
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
