import {
  Sidebar,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarNavItemProps,
} from "./sidebar";

export type ListGetter<T> = () => Promise<T[]>;

export type ItemToNavItem<ItemT> = (item: ItemT) => SidebarNavItemProps;

export default function LayoutWithList<ItemT>(
  title: string,
  getter: ListGetter<ItemT>,
  itemToPath: ItemToNavItem<ItemT>
) {
  return async function (props: { children: React.ReactNode }) {
    const items = await getter();

    return (
      <div className="relative flex h-full w-full flex-row">
        <Sidebar className="w-full shrink-0 bg-acid lg:block lg:w-48">
          <SidebarHeader title={title} />
          <SidebarNav>
            {items.map(itemToPath).map((item) => (
              <SidebarNavItem key={item.href} {...item} />
            ))}
          </SidebarNav>
        </Sidebar>

        <div className="absolute inset-0 h-full w-full empty:hidden lg:static lg:overflow-y-auto">
          {props.children}
        </div>
      </div>
    );
  };
}
