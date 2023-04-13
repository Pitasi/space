import { Header } from "~/components/header";
import { Navbar } from "~/components/navbar";
import { Sidebar, SidebarNav, SidebarNavItem } from "~/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className="hidden w-48 shrink-0 bg-acid lg:block">
        <SidebarNav>
          <SidebarNavItem />
          <SidebarNavItem />
          <SidebarNavItem />
        </SidebarNav>
      </Sidebar>

      <div className="overflow-auto">
        <Header />
        <Navbar className="lg:hidden" />
        {children}
        <div className="h-10 lg:hidden" />
      </div>
    </>
  );
}
