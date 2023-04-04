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
      <section className="flex w-full flex-col lg:flex-row">
        <SecondarySidebar
          className="block max-lg:[&:has(+*:not(:empty))]:hidden"
          navigation={items.map((i) => itemToPath(i))}
        />

        <article className="w-full overflow-y-auto bg-neutral dark:bg-midnight-600 lg:rounded-l-3xl">
          {props.children}
        </article>
      </section>
    );
  };
}
