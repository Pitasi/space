import { SquircleShapeProvider } from "~/components/Squircle";
import "../styles/globals.css";
import Sidebar from "~/components/Sidebar/Sidebar";

export const revalidate = 0;

export const metadata = {
  title: {
    default: "Antonio Pitasi",
    template: "%s - Antonio Pitasi",
  },
};

const paths = [
  { name: "Home", href: "/", current: false },
  { name: "Articles", href: "/articles", current: false },
  { name: "AMA", href: "/ama", current: false },
  { name: "Stack", href: "/stack", current: false },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <SquircleShapeProvider />
        <div className="flex min-h-full flex-col lg:flex-row">
          <Sidebar navigation={paths} />
          {children}
        </div>
      </body>
    </html>
  );
}
