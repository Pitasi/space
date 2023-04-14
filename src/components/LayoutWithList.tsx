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
      <>
        <Sidebar className="hidden w-48 shrink-0 bg-acid lg:block">
          <SidebarHeader title={title} />
          <SidebarNav>
            {items.map(itemToPath).map((item) => (
              <SidebarNavItem key={item.href} {...item} />
            ))}
          </SidebarNav>
        </Sidebar>

        {props.children}
      </>
    );
  };
}
