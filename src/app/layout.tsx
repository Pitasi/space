import { SquircleShapeProvider } from "~/components/Squircle";
import { Navigation } from "../components/Navigation";
import "../styles/globals.css";
import { RootNavItem } from "./RootNavItem";

export const metadata = {
  title: {
    default: "Antonio Pitasi",
    template: "%s - Antonio Pitasi",
  },
};

const paths = [
  { href: "/", title: "Home" },
  { href: "/articles", title: "Articles" },
  { href: "/ama", title: "AMA" },
  { href: "/stack", title: "Stack" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation
            className="bg-green-200"
            paths={paths}
            itemComponent={RootNavItem}
          />
        </header>
        <main>{children}</main>
        <SquircleShapeProvider />
      </body>
    </html>
  );
}
