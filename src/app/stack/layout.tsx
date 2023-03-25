import { App } from "@prisma/client";
import { prisma } from "~/server/db";
import { Path } from "~/components/Navigation";
import { StackNavItem } from "./StackNavItem";
import LayoutWithList from "~/components/LayoutWithList";

export const metadata = {
  title: "Articles",
};

async function getApps(): Promise<App[]> {
  const apps = await prisma.app.findMany();
  return apps;
}

function appToPath(app: App): Path {
  return {
    href: `/stack/${app.slug}`,
    title: app.title,
  };
}

export default LayoutWithList(getApps, appToPath, StackNavItem);
