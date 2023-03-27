import { Article } from "@prisma/client";
import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";
import { NavItem } from "~/components/Sidebar";

export const metadata = {
  title: "Articles",
};

const getArticles = cache(async () => await prisma.article.findMany());

function articleToPath(article: Article): NavItem {
  return {
    href: `/articles/${article.slug}`,
    name: article.title,
    current: false,
  };
}

export default LayoutWithList(getArticles, articleToPath);
