import { App } from "@prisma/client";
import { prisma } from "~/server/db";
import { Path } from "~/components/Navigation";
import { StackNavItem } from "./StackNavItem";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";

export const metadata = {
  title: "Articles",
};

const getApps = cache(async () => await prisma.app.findMany());

function appToPath(app: App): Path {
  return {
    href: `/stack/${app.slug}`,
    title: app.title,
  };
}

export default LayoutWithList(getApps, appToPath, StackNavItem);
