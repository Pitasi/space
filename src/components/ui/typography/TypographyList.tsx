import { classed } from "~/utils/tw";

export const TypographyList = classed.ul("my-6 ml-6 list-disc [&>li]:mt-2");

export const TypographyOrderedList = classed.ol(
  "my-6 ml-6 list-decimal [&>li]:mt-2"
);
