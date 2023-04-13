import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClassed } from "@tw-classed/react";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const { classed } = createClassed({ merger: cn });
