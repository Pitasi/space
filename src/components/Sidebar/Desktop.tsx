import Link from "next/link";
import { NavItemInfo } from "./Sidebar";
import { SidebarItem, SimpleItem } from "./SidebarItem";
import { SidebarLogo } from "./SidebarLogo";
import { useSession } from "next-auth/react";

export function Desktop(props: { navigation: NavItemInfo[] }) {
  const { data: session } = useSession();

  return (
    <div className="hidden grow flex-col gap-y-16 overflow-y-auto border-r-2 border-wood/5 p-6 dark:border-midnight-700/20 lg:z-50 lg:flex lg:min-h-full lg:w-56 lg:flex-col">
      <SidebarLogo />
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {props.navigation.map((item) => (
                <li key={item.name}>
                  <SidebarItem href={item.href}>
                    <SimpleItem {...item} />
                  </SidebarItem>
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

        {session ? (
          <div className="flex flex-col">
            <p>Logged in as {session.user.name}</p>
            <Link href="/api/auth/signout">Logout</Link>
          </div>
        ) : (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </nav>
    </div>
  );
}
