"use client";

import Link from "next/link";
import { useIsActive } from "~/components/Navigation";
import { cn } from "~/utils/tw";

export const RootNavItem = (props: { href: string; title: string }) => {
  const active = useIsActive(props.href);
  return (
    <Link className={cn(active && "font-bold underline")} href={props.href}>
      {props.title}
    </Link>
  );
};
