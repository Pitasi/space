import SecondarySidebar from "./Sidebar/SecondarySidebar";
import { NavItemInfo } from "./Sidebar";
import { SidebarItem, SimpleItem } from "./Sidebar/SidebarItem";

export type ListGetter<T> = () => Promise<T[]>;

export type NavItem = {
  nav: NavItemInfo;
  comp?: React.ReactNode;
};

export type ItemToNavItem<ItemT> = (item: ItemT) => NavItem;

export default function LayoutWithList<ItemT>(
  getter: ListGetter<ItemT>,
  itemToPath: ItemToNavItem<ItemT>
) {
  return async function (props: { children: React.ReactNode }) {
    const items = await getter();

    return (
      <div className="relative h-full w-full">
        <section className="flex h-full w-full flex-col lg:flex-row">
          <SecondarySidebar className="block shrink-0">
            {items.map(itemToPath).map((item) => (
              <li key={item.nav.name}>
                <SidebarItem key={item.nav.name} href={item.nav.href}>
                  {item.comp || <SimpleItem {...item.nav} />}
                </SidebarItem>
              </li>
            ))}
          </SecondarySidebar>

          <article className="absolute inset-0 h-full w-full overflow-y-auto bg-neutral empty:hidden dark:bg-midnight-600 lg:static lg:rounded-l-3xl">
            {props.children}
          </article>
        </section>
      </div>
    );
  };
}
