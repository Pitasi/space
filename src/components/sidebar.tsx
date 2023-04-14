import { Button } from "./ui/button";
import { cn } from "~/utils/tw";
import Image, { StaticImageData } from "next/image";
import Icon from "~/fixtures/logo_icon.png";
import Link from "next/link";

export function Sidebar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full space-y-8 overflow-auto border-r-2 border-black p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SidebarHeader(props: {
  imageSrc?: string | StaticImageData;
  title: string;
}) {
  return (
    <header className="flex h-10 w-full flex-row items-center gap-1">
      {props.imageSrc ? (
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          )}
        >
          <Image
            className="drop-shadow-border w-auto"
            height={24}
            src={Icon}
            alt="Antonio Pitasi"
          />
        </div>
      ) : (
        <div className="h-10 w-4" />
      )}
      <div className="flex flex-col font-neu text-xl font-bold leading-none tracking-tight text-black">
        <span>{props.title}</span>
      </div>
    </header>
  );
}

export function SidebarNav(props: { children: React.ReactNode }) {
  return <ul className="space-y-4">{props.children}</ul>;
}

export interface SidebarNavItemProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function SidebarNavItem(props: SidebarNavItemProps) {
  return (
    <li>
      <Link href={props.href}>
        <Button
          variant="link"
          className={cn("flex w-full flex-row justify-center", props.className)}
        >
          {props.icon ? <props.icon className="mr-2 h-4 w-4" /> : null}
          {props.children}
        </Button>
      </Link>
    </li>
  );
}