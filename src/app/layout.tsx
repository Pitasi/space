import { SquircleShapeProvider } from "~/components/Squircle";
import "../styles/globals.css";
import { cn } from "~/utils/tw";
import { darkerGrotesque, inter } from "~/utils/fonts";
import { RootSidebar } from "../components/root-sidebar";

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
      <body className="lg:h-screen lg:overflow-hidden">
        <SquircleShapeProvider />

        <div className="flex h-full flex-row bg-jasmine">
          <RootSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
