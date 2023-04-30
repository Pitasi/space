import { classed } from "~/utils/tw";

export const TypographyPre = classed(
  "pre",
  "bg-white min-w-full [&>code]:w-full [&>code]:inline-block rounded-md [&>code]:bg-transparent"
);
