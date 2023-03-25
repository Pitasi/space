import { Article } from "@prisma/client";
import { prisma } from "~/server/db";
import { Path } from "~/components/Navigation";
import { ArticlesNavItem } from "./ArticlesNavItem";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";

export const metadata = {
  title: "Articles",
};

const getArticles = cache(async () => await prisma.article.findMany());

function articleToPath(article: Article): Path {
  return {
    href: `/articles/${article.slug}`,
    title: article.title,
  };
}

export default LayoutWithList(getArticles, articleToPath, ArticlesNavItem);
