"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendarui } from "@/components/ui/calendar";

interface DropDownInterface {
  title: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function Calendar({ title, date, setDate }: DropDownInterface) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.log(date);
  }, [date]);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false); // ✅ close dropdown after selecting
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[110px] py-1">
          {date ? date.toLocaleDateString() : title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Calendarui
          mode="single"
          selected={date}
          onSelect={handleSelect}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
