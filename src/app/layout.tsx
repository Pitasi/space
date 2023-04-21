import { SquircleShapeProvider } from "~/components/Squircle";
import "../styles/globals.css";
import { cn } from "~/utils/tw";
import { darkerGrotesque, inter } from "~/utils/fonts";
import { RootSidebar } from "../components/root-sidebar";
import { Navbar } from "~/components/navbar";

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
        "h-full bg-beige-200 dark:bg-midnight-700 dark:text-neutral lg:h-screen",
        inter.variable,
        darkerGrotesque.variable
      )}
    >
      <body className="flex h-full flex-1 lg:h-screen lg:overflow-hidden">
        <SquircleShapeProvider />

        <div className="flex h-full flex-1 flex-row bg-white">
          <Navbar />
          <RootSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
