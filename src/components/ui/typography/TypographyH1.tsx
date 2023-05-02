import classes from "./TypographyH1.module.css";
import { classed } from "~/utils/tw";

export const TypographyH1 = classed.h1(
  "scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-eerie",
  {
    variants: {
      variant: {
        default: "",
        neubrutal: [classes.neubrutal, "text-7xl lg:text-8xl"].join(" "),
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
