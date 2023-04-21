import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { createClassed } from "@tw-classed/react";

const twMerge = extendTailwindMerge({
  classGroups: {
    "bg-image": ["bg-pattern-hideout", "bg-pattern-plus"],
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const { classed } = createClassed({ merger: cn });
