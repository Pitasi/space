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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className="h-screen">
        <SquircleShapeProvider />
        <div className="flex h-full flex-col lg:flex-row">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
