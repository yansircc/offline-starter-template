"use client";

import type * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: `relative flex ${defaultClassNames.month}`,
        month_caption: `relative mx-10 flex h-7 items-center justify-center ${defaultClassNames.month_caption}`,
        weekdays: cn("flex flex-row", classNames?.weekdays),
        weekday: cn(
          "w-8 font-normal text-muted-foreground text-sm",
          classNames?.weekday
        ),
        month: cn("w-full", classNames?.month),

        caption_label: cn(
          "truncate font-medium text-sm",
          classNames?.caption_label
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&_svg]:fill-foreground",
          classNames?.button_next
        ),
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&_svg]:fill-foreground",
          classNames?.button_previous
        ),
        nav: cn("flex items-start", classNames?.nav),
        month_grid: cn("mx-auto mt-4", classNames?.month_grid),
        week: cn("mt-2 flex w-max items-start", classNames?.week),
        day: cn(
          "flex size-8 flex-1 items-center justify-center p-0 text-sm",
          classNames?.day
        ),
        day_button: cn(
          "size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100",
          classNames?.day_button
        ),
        range_start: cn(
          "day-range-start rounded-s-md bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
          classNames?.range_start
        ),
        range_middle: cn(
          "!text-foreground [&>button]:!text-foreground [&>button]:hover:!text-foreground bg-accent [&>button]:bg-transparent [&>button]:hover:bg-transparent",
          classNames?.range_middle
        ),
        range_end: cn(
          "day-range-end rounded-e-md bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
          classNames?.range_end
        ),
        selected: cn(
          "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
          classNames?.selected
        ),
        today: cn(
          "[&>button]:bg-accent [&>button]:text-accent-foreground",
          classNames?.today
        ),
        outside: cn(
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          classNames?.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", classNames?.disabled),
        hidden: cn("invisible flex-1", classNames?.hidden),
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
