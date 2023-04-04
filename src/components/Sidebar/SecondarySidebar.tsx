import { cn } from "~/utils/tw";
import { NavItem } from ".";
import { SidebarItem } from "./SidebarItem";

export default function SecondarySidebar(props: {
  className?: string | null;
  navigation: NavItem[];
}) {
  return (
    <nav
      className={cn(
        "flex w-full grow flex-col gap-y-5 overflow-y-auto p-6 lg:flex lg:min-h-full lg:w-72 lg:grow-0 lg:flex-col",
        props.className
      )}
    >
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {props.navigation.map((item) => (
              <li key={item.name}>
                <SidebarItem {...item} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
