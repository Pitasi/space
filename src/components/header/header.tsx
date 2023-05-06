import { cn } from "~/utils/tw";
import { Button } from "../ui/button";
import { ChevronLeft /*, Heart*/ } from "lucide-react";
import Link from "next/link";
import { Title } from "./title";
// import { LoginGate } from "./login-gate";
// import { getSessionRSC } from "~/server/auth_rsc";

export function Header({
  title,
  backHref,
  className,
}: {
  title: string;
  backHref: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex w-full items-center justify-between gap-2 overflow-hidden border-b-2 border-black bg-yellow px-3 py-3 lg:justify-end",
        className
      )}
    >
      <Link href={backHref}>
        <Button className="lg:hidden" variant="ghost" size="sm">
          <ChevronLeft />
        </Button>
      </Link>

      <Title>{title}</Title>
      {/* Will launch "hearts" in near future
      <LoginGate session={session}>
        <Button variant="ghost" size="sm">
          <Hearts />
        </Button>
      </LoginGate>
      */}
      <div />
    </header>
  );
}

// function Hearts() {
//   return (
//     <div className="flex flex-row items-center justify-center gap-2 font-neu text-3xl font-bold">
//       <Heart fill="red" color="black" className="drop-shadow-neu-2" />
//       <span>42</span>
//     </div>
//   );
// }
