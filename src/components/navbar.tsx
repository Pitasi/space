"use client";

import { Menu } from "lucide-react";
import { cn } from "~/utils/tw";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Sidebar, SidebarHeader, SidebarNav, SidebarNavItem } from "./sidebar";
import { navigation } from "./root-sidebar";
import Icon from "~/fixtures/logo_icon.png";
import { useState } from "react";

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

        <DialogContent className="bottom-0 top-auto border-0 p-0 lg:hidden">
          <Sidebar className="w-full border-t-2 border-black bg-lightviolet bg-pattern-hideout pb-20">
            <SidebarHeader title="Antonio Pitasi" imageSrc={Icon} />
            <SidebarNav className="text-black" onClick={() => setOpen(false)}>
              {navigation.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  href={item.href}
                  icon={item.icon}
                  className="data-active:border-2 data-active:border-black data-active:bg-yellow data-active:shadow-neu-2"
                >
                  {item.name}
                </SidebarNavItem>
              ))}
            </SidebarNav>
          </Sidebar>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
