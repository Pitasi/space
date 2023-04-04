import { cn } from "~/utils/tw";
import { NavLink } from "../NavLink/NavLink";
import { NavItem } from "./Sidebar";

export function SidebarItem(
  props: NavItem & {
    onClick?: () => void;
  }
) {
  return (
    <NavLink
      onClick={props.onClick}
      href={props.href}
      className={cn(
        "data-active:bg-sun-300 dark:data-active:bg-midnight-600",
        "hover:bg-sun-300 dark:hover:bg-midnight-700",
        "group flex items-center gap-x-3 rounded-3xl px-4 py-2 text-sm font-semibold leading-6"
      )}
    >
      {props.icon && (
        <props.icon className={cn("h-4 w-4 shrink-0")} aria-hidden="true" />
      )}
      {props.name}
    </NavLink>
  );
}
