import { SquircleShapeProvider } from "~/components/Squircle";
import "../styles/globals.css";

import { cn } from "~/utils/tw";
import Icon from "~/fixtures/logo_icon.png";
import { darkerGrotesque, inter } from "~/utils/fonts";
import {
  Sidebar,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
} from "~/components/sidebar";

export const revalidate = 0;

export const metadata = {
  title: {
    default: "Antonio Pitasi",
    template: "%s - Antonio Pitasi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-screen bg-beige-200 dark:bg-midnight-700 dark:text-neutral",
        inter.variable,
        darkerGrotesque.variable
      )}
    >
      <body className="h-screen overflow-hidden">
        <SquircleShapeProvider />

        <div className="flex h-full flex-row bg-jasmine">
          <Sidebar className="hidden w-48 shrink-0 bg-lightviolet lg:block">
            <SidebarHeader title="Antonio Pitasi" imageSrc={Icon} />
            <SidebarNav>
              <SidebarNavItem />
              <SidebarNavItem />
              <SidebarNavItem />
            </SidebarNav>
          </Sidebar>

          {children}
        </div>
      </body>
    </html>
  );
}
