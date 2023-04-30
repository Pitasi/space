"use client";

import { Home, Menu, PenTool } from "lucide-react";
import { cn } from "~/utils/tw";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Sidebar, SidebarHeader, SidebarNav, SidebarNavItem } from "./sidebar";
import Icon from "~/fixtures/logo_icon.png";
import { useState } from "react";
import { LoginCard } from "./login-card";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Articles", href: "/articles", icon: PenTool },
  // { name: "AMA", href: "/ama", icon: MessageCircle },
  // { name: "Stack", href: "/stack", icon: LayoutGrid },
];

export function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-10 flex h-12 w-full flex-row items-center justify-start border-t-2 border-black bg-acid px-2 lg:hidden",
        className
      )}
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <Menu size={25} fill="#FFA776" strokeWidth={3} />
          </Button>
        </DialogTrigger>

        <DialogContent className="bottom-0 top-auto border-0 p-0 sm:max-w-full lg:hidden">
          <Sidebar className="w-full space-y-20 border-t-2 border-black bg-lightviolet bg-pattern-hideout pb-10">
            <div className="space-y-10">
              <SidebarHeader title="Antonio Pitasi" imageSrc={Icon} />
              <SidebarNav className="text-black" onClick={() => setOpen(false)}>
                {navigation.map((item) => (
                  <SidebarNavItem
                    key={item.name}
                    href={item.href}
                    icon={item.icon}
                    className="ring-inset ring-lightviolet ring-offset-transparent focus:ring-1 data-active:-translate-x-0.5 data-active:-translate-y-0.5 data-active:border-2 data-active:border-black data-active:bg-yellow data-active:shadow-neu-2 data-active:hover:translate-x-0 data-active:hover:translate-y-0 data-active:hover:shadow-none"
                  >
                    {item.name}
                  </SidebarNavItem>
                ))}
              </SidebarNav>
            </div>

            <LoginCard />
          </Sidebar>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
