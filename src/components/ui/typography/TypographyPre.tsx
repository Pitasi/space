import { classed } from "~/utils/tw";

export const TypographyPre = classed(
  "pre",
  "bg-white min-w-full overflow-x-auto [&>code]:w-full [&>code]:inline-block rounded-md [&>code]:bg-transparent"
);
