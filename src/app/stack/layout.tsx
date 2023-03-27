import { App } from "@prisma/client";
import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";
import { NavItem } from "~/components/Sidebar";

export const metadata = {
  title: "Articles",
};

const getApps = cache(async () => await prisma.app.findMany());

function appToPath(app: App): NavItem {
  return {
    href: `/stack/${app.slug}`,
    name: app.title,
    current: false,
  };
}

export default LayoutWithList(getApps, appToPath);
