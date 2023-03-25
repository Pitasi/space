import { usePathname } from "next/navigation";

export interface Path {
  href: string;
  title: string;
}

export type ItemComponent = React.ComponentType<Path>;

export const Navigation = (props: {
  paths: Path[];
  itemComponent: ItemComponent;
  className?: string | undefined;
}) => {
  const ItemComponent = props.itemComponent;
  return (
    <nav className={props.className}>
      <ul>
        {props.paths.map((path) => (
          <li key={path.href}>
            <ItemComponent href={path.href} title={path.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const useIsActive = (href: string) => {
  const path = usePathname();
  return (
    (path === "/" && href === "/") || (href !== "/" && path?.startsWith(href))
  );
};
