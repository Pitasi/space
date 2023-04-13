import { cn } from "~/utils/tw";
import { Button } from "./ui/button";
import { ChevronLeft, Heart } from "lucide-react";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between border-b-2 border-black bg-yellow py-4 px-4 lg:justify-end",
        className
      )}
    >
      <Button className="lg:hidden" variant="ghost" size="sm">
        <ChevronLeft />
      </Button>
      <span className="font-bold lg:hidden">Title of the page</span>
      <Button variant="ghost" size="sm">
        <Hearts />
      </Button>
    </header>
  );
}

function Hearts() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 font-neu text-3xl font-bold">
      <Heart fill="red" color="black" className="drop-shadow-neu-2" />
      <span>42</span>
    </div>
  );
}
