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
      <main className="flex flex-row">
        <SecondarySidebar
          className="hidden min-h-full only:block lg:block"
          navigation={items.map((i) => itemToPath(i))}
        />
        {props.children}
      </main>
    );
  };
}
