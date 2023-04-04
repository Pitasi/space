import Image from "next/image";
import Icon from "../../fixtures/logo_icon.png";
import { cn } from "~/utils/tw";

export function SidebarLogo(props: { small?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-1 rounded-2xl dark:text-neutral",
        props.small ? "gap-2" : "bg-wood/10 p-2 dark:bg-midnight-600/20 "
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl",
          props.small ? "h-4 w-4" : "h-10 w-10"
        )}
      >
        <Image className="w-auto" height={24} src={Icon} alt="Antonio Pitasi" />
      </div>
      <div className="flex flex-col">
        <span className="text-md font-bold">Antonio Pitasi</span>
      </div>
    </div>
  );
}
