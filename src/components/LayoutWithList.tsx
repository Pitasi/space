import { ItemComponent, Navigation, Path } from "~/components/Navigation";

export type ListGetter<T> = () => Promise<T[]>;

export type ItemToPathFn<ItemT> = (item: ItemT) => Path;

export default function LayoutWithList<ItemT>(
  getter: ListGetter<ItemT>,
  itemToPath: ItemToPathFn<ItemT>,
  navItemComponent: ItemComponent
) {
  return async function (props: { children: React.ReactNode }) {
    const items = await getter();

    return (
      <div>
        <Navigation
          className="bg-red-200"
          paths={items.map(itemToPath)}
          itemComponent={navItemComponent}
        />
        {props.children}
      </div>
    );
  };
}
