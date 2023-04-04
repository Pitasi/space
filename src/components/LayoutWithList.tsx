import SecondarySidebar from "./Sidebar/SecondarySidebar";
import { NavItem } from "./Sidebar";

export type ListGetter<T> = () => Promise<T[]>;

export type ItemToPathFn<ItemT> = (item: ItemT) => NavItem;

export default function LayoutWithList<ItemT>(
  getter: ListGetter<ItemT>,
  itemToPath: ItemToPathFn<ItemT>
) {
  return async function (props: { children: React.ReactNode }) {
    const items = await getter();

    return (
      <div className="relative h-full w-full">
        <section className="flex h-full w-full flex-col lg:flex-row">
          <SecondarySidebar
            className="block shrink"
            navigation={items.map((i) => itemToPath(i))}
          />

          <article className="absolute inset-0 h-full w-full overflow-y-auto bg-neutral empty:hidden dark:bg-midnight-600 lg:static lg:rounded-l-3xl">
            {props.children}
          </article>
        </section>
      </div>
    );
  };
}
