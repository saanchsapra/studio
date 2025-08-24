"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Filters() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: new Date(2024, 0, 20),
  })

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className={cn("grid gap-2")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Select defaultValue="all-units">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Unit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-units">All Units</SelectItem>
          <SelectItem value="unit-a">Unit A</SelectItem>
          <SelectItem value="unit-b">Unit B</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-departments">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-departments">All Departments</SelectItem>
          <SelectItem value="spinning">Spinning</SelectItem>
          <SelectItem value="weaving">Weaving</SelectItem>
          <SelectItem value="dyeing">Dyeing</SelectItem>
          <SelectItem value="finishing">Finishing</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-shifts">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Shift" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-shifts">All Shifts</SelectItem>
          <SelectItem value="day">Day Shift</SelectItem>
          <SelectItem value="night">Night Shift</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
