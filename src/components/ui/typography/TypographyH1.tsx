import { classed } from "@tw-classed/react";
import classes from "./TypographyH1.module.css";

export const TypographyH1 = classed(
  "h1",
  "scroll-m-20 text-5xl font-extrabold tracking-tight drop-shadow-neu-2 lg:drop-shadow-neu-3 lg:text-7xl",
  {
    variants: {
      variant: {
        neubrutal: classes.neubrutal || "",
      },
    },
  }
);
