import { cn } from "~/utils/tw";
import { NavLink } from "../NavLink/NavLink";
import { NavItemInfo } from "./Sidebar";

export function SidebarItem(props: {
  onClick?: () => void;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      onClick={props.onClick}
      href={props.href}
      className={cn(
        "data-active:bg-sun-300 dark:data-active:bg-midnight-600",
        "hover:bg-sun-300 dark:hover:bg-midnight-600",
        "flex rounded-3xl px-4 py-2"
      )}
    >
      {props.children}
    </NavLink>
  );
}

export function SimpleItem(props: NavItemInfo) {
  return (
    <div className="flex flex-row items-center gap-x-3 text-sm font-semibold leading-6">
      {props.icon && (
        <props.icon className={cn("h-4 w-4 shrink-0")} aria-hidden="true" />
      )}
      {props.name}
    </div>
  );
}
