import Image from "next/image";
import Icon from "~/fixtures/logo_icon.png";
import { NavLink } from "../NavLink/NavLink";
import { cn } from "~/utils/tw";
import { NavItem } from "./Sidebar";

export function Desktop(props: { navigation: NavItem[] }) {
  return (
    <div className="hidden grow flex-col gap-y-5 overflow-y-auto bg-fantasy-50 p-6 text-fantasy-950 dark:bg-fantasy-950 dark:text-fantasy-100 lg:z-50 lg:flex lg:min-h-full lg:w-56 lg:flex-col">
      <div className="flex flex-row items-center gap-1 rounded-2xl bg-fantasy-300/5 p-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
          <Image
            className="w-auto"
            height={24}
            src={Icon}
            alt="Antonio Pitasi"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-md font-bold">Antonio Pitasi</span>
          <span className="text-xs text-opacity-60">A personal space</span>
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
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
                      "group z-10 flex items-center gap-x-3 rounded-md px-4 py-2 text-sm font-semibold leading-6"
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        className={cn("h-5 w-5 shrink-0")}
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            {/* Profile
                <Link
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-maize-700"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-maize-700"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
