import { Home } from "lucide-react";
import { cn } from "~/utils/tw";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-10 flex h-12 w-full flex-row items-center justify-around border-t-2 border-black bg-acid",
        className
      )}
    >
      <Home size={25} fill="#FFA776" strokeWidth={3} />
      <Home size={25} />
      <Home size={25} />
      <Home size={25} />
    </nav>
  );
}
