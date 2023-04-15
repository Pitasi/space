import { Home, PenTool } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
} from "~/components/sidebar";
import Icon from "~/fixtures/logo_icon.png";

export const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Articles", href: "/articles", icon: PenTool },
  // { name: "AMA", href: "/ama", icon: MessageCircle },
  // { name: "Stack", href: "/stack", icon: LayoutGrid },
];

export function RootSidebar() {
  return (
    <Sidebar className="hidden w-48 shrink-0 bg-lightviolet bg-pattern-hideout lg:block">
      <SidebarHeader title="Antonio Pitasi" imageSrc={Icon} />
      <SidebarNav className="text-black">
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
  );
}
