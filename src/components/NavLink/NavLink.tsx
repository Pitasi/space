"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const useIsActive = (href: string) => {
  const path = usePathname();
  return !!(
    (path === "/" && href === "/") ||
    (href !== "/" && path?.startsWith(href))
  );
};

export function NavLink(props: React.ComponentProps<typeof Link>) {
  const isActive = useIsActive(props.href.toString());
  return (
    <Link
      {...props}
      href={props.href}
      data-active={isActive ? true : undefined}
    />
  );
}
