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
      <div className="relative h-full w-full flex-row lg:grid lg:grid-cols-[20rem_minmax(0,1fr)]">
        <Sidebar className="min-h-full shrink-0 bg-acid bg-pattern-hideout lg:block lg:min-h-0">
          <SidebarHeader title={title} />
          <SidebarNav>
            {items.map(itemToPath).map((item) => (
              <SidebarNavItem
                className="ring-inset ring-lightviolet ring-offset-transparent focus:ring-1 data-active:-translate-x-0.5 data-active:-translate-y-0.5 data-active:border-2 data-active:border-black data-active:bg-yellow data-active:shadow-neu-2 data-active:hover:translate-x-0 data-active:hover:translate-y-0 data-active:hover:shadow-none"
                key={item.href}
                {...item}
              />
            ))}
          </SidebarNav>
        </Sidebar>

        <div className="absolute inset-0 bg-white empty:hidden lg:static">
          {props.children}
        </div>
      </div>
    );
  };
}
