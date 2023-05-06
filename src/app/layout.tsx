import PlausibleProvider from "next-plausible";
import { SquircleShapeProvider } from "~/components/Squircle";
import "../styles/globals.css";
import { cn } from "~/utils/tw";
import { darkerGrotesque, inter } from "~/utils/fonts";
import { RootSidebar } from "../components/root-sidebar";
import { Navbar } from "~/components/navbar";
import "highlight.js/styles/github.css";
import { env } from "~/env.mjs";
import Favicons from "./favicons";
import { SessionProviderClient } from "~/components/session-provider/client";

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
      className={cn("bg-floralwhite", inter.variable, darkerGrotesque.variable)}
    >
      <head>
        <Favicons />
        {env.PLAUSIBLE_DOMAIN ? (
          <PlausibleProvider
            domain="anto.pt"
            customDomain={env.PLAUSIBLE_DOMAIN}
            selfHosted
          />
        ) : null}
      </head>
      <body className="flex min-h-screen">
        <SessionProviderClient>
          <SquircleShapeProvider />
          <div className="flex flex-1 flex-row">
            <Navbar />
            <RootSidebar />
            {children}
          </div>
        </SessionProviderClient>
      </body>
    </html>
  );
}
