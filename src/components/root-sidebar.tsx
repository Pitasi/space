import { Home, PenTool } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
} from "~/components/sidebar";
import Icon from "~/fixtures/logo_icon.png";
import { LoginCard } from "./login-card";
import { cn } from "~/utils/tw";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Articles", href: "/articles", icon: PenTool },
  // { name: "AMA", href: "/ama", icon: MessageCircle },
  // { name: "Stack", href: "/stack", icon: LayoutGrid },
];

export function RootSidebar() {
  return (
    <Sidebar className="hidden w-48 shrink-0 bg-lightviolet bg-pattern-hideout lg:flex lg:flex-col lg:justify-between">
      <div className="space-y-8">
        <SidebarHeader title="Antonio Pitasi" imageSrc={Icon} />
        <SidebarNav className="text-black">
          {navigation.map((item) => (
            <SidebarNavItem
              key={item.name}
              href={item.href}
              icon={item.icon}
              className={cn(
                "ring-inset ring-lightviolet ring-offset-transparent focus:ring-1",
                "data-active:translate-x-0 data-active:translate-y-0 data-active:border-black data-active:bg-yellow data-active:shadow-none",
                "-translate-x-0.5 -translate-y-0.5 border-2 border-black bg-white shadow-neu-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-none"
              )}
            >
              {item.name}
            </SidebarNavItem>
          ))}
        </SidebarNav>
      </div>

      <LoginCard />
    </Sidebar>
  );
}
