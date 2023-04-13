import { cn } from "~/utils/tw";

export default function SecondarySidebar(props: {
  className?: string | null;
  children: React.ReactNode;
}) {
  return (
    <nav
      className={cn(
        "flex w-full flex-col gap-y-5 overflow-y-auto p-6 lg:flex lg:min-h-full lg:w-72",
        props.className
      )}
    >
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {props.children}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
