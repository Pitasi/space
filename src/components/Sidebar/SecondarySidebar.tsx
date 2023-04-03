import { cn } from "~/utils/tw";
import { NavItem } from ".";
import { NavLink } from "../NavLink/NavLink";

export default function SecondarySidebar(props: {
  className?: string | null;
  navigation: NavItem[];
}) {
  return (
    <nav
      className={cn(
        "flex w-full grow flex-col gap-y-5 overflow-y-auto bg-fantasy-50 p-6 text-fantasy-950 dark:bg-fantasy-950 dark:text-fantasy-100 lg:flex lg:min-h-full lg:w-72 lg:grow-0 lg:flex-col",
        props.className
      )}
    >
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {props.navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  href={item.href}
                  className={cn(
                    "data-active:bg-fantasy-100 data-active:shadow-sm dark:data-active:bg-fantasy-900",
                    "hover:bg-fantasy-100 dark:hover:bg-fantasy-900",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                  )}
                >
                  {item.icon && (
                    <item.icon
                      className={cn("text-indigo-200", "h-6 w-6 shrink-0")}
                      aria-hidden="true"
                    />
                  )}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
