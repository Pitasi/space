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
        "flex w-full grow flex-col gap-y-5 overflow-y-auto bg-penn-200 px-6 lg:flex lg:min-h-full lg:w-72 lg:flex-col",
        props.className
      )}
    >
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {props.navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    href={item.href}
                    className={cn(
                      "data-active:bg-penn-400 data-active:text-white",
                      "text-white hover:bg-penn-300 hover:text-white",
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        className={cn(
                          "data-active:text-white",
                          "text-indigo-200 group-hover:text-white",
                          "h-6 w-6 shrink-0"
                        )}
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
    </nav>
  );
}
