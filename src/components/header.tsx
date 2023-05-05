"use client";
import { cn } from "~/utils/tw";
import { Button } from "./ui/button";
import { ChevronLeft /*, Heart*/ } from "lucide-react";
import Link from "next/link";
// import { LoginGate } from "./login-gate";
// import { getSessionRSC } from "~/server/auth_rsc";
import { motion, useScroll, useTransform } from "framer-motion";

export function Header({
  title,
  backHref,
  className,
}: {
  title: string;
  backHref: string;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const translateY = useTransform(scrollY, [0, 200], [20, 0]);

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
      <motion.span
        style={{ opacity, translateY }}
        className="line-clamp-1 text-ellipsis font-bold"
      >
        {title}
      </motion.span>
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
