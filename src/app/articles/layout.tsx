import { Article } from "@prisma/client";
import { prisma } from "~/server/db";
import { Path } from "~/components/Navigation";
import { ArticlesNavItem } from "./ArticlesNavItem";
import LayoutWithList from "~/components/LayoutWithList";

export const metadata = {
  title: "Articles",
};

async function getArticles(): Promise<Article[]> {
  const articles = await prisma.article.findMany();
  return articles;
}

function articleToPath(article: Article): Path {
  return {
    href: `/articles/${article.slug}`,
    title: article.title,
  };
}

export default LayoutWithList(getArticles, articleToPath, ArticlesNavItem);
