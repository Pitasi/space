"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Title(props: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const translateY = useTransform(scrollY, [0, 200], [20, 0]);

  return (
    <motion.span
      style={{ opacity, translateY }}
      className="line-clamp-1 text-ellipsis font-bold"
    >
      {props.children}
    </motion.span>
  );
}
