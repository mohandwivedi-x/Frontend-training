"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendarui } from "@/components/ui/calendar"
interface DropDownInterface {
  title: string;
}
export function Calendar({ title }: DropDownInterface) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  React.useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-7 py-1">
          {date ? title : date}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <Calendarui
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
