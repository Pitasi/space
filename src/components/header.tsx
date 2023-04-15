import { cn } from "~/utils/tw";
import { Button } from "./ui/button";
import { ChevronLeft, Heart } from "lucide-react";
import Link from "next/link";
import { LoginGate } from "./login-gate";
import { getSessionRSC } from "~/server/auth_rsc";

export async function Header({
  title,
  backHref,
  className,
}: {
  title: string;
  backHref: string;
  className?: string;
}) {
  const session = await getSessionRSC();

  return (
    <header
      className={cn(
        "flex w-full items-center justify-between border-b-2 border-black bg-yellow py-4 px-4 lg:justify-end",
        className
      )}
    >
      <Link href={backHref}>
        <Button className="lg:hidden" variant="ghost" size="sm">
          <ChevronLeft />
        </Button>
      </Link>
      <span className="font-bold lg:hidden">
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </span>
      <LoginGate session={session}>
        <Button variant="ghost" size="sm">
          <Hearts />
        </Button>
      </LoginGate>
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
