import { Article } from "@prisma/client";
import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";
import { TwoLinesNavItem } from "~/components/TwoLinesItem";
import { formatDate } from "~/utils/dates";

export const metadata = {
  title: "Articles",
};

const getArticles = cache(async () => {
  return await prisma.article.findMany({
    where: { published: true },
  });
});

export default LayoutWithList("Articles", getArticles, (article: Article) => {
  return {
    href: `/articles/${article.slug}`,
    name: article.title,
    children: (
      <TwoLinesNavItem>
        {article.title}
        {formatDate(article.createdAt)}
      </TwoLinesNavItem>
    ),
  };
});
