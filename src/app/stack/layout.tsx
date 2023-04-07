import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";

export const metadata = {
  title: "Articles",
};

const getApps = cache(async () => await prisma.app.findMany());

export default LayoutWithList(getApps, (app) => ({
  nav: {
    href: `/stack/${app.slug}`,
    name: app.title,
  },
}));
