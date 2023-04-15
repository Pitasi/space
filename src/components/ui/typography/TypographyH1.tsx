import { classed } from "@tw-classed/react";
import classes from "./TypographyH1.module.css";

export const TypographyH1 = classed.h1(
  "scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl text-eerie",
  {
    variants: {
      variant: {
        default: "",
        neubrutal: classes.neubrutal || "",
      },
      shadow: {
        none: "",
        neu: "drop-shadow-neu-2 lg:drop-shadow-neu-3",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "none",
    },
  }
);
