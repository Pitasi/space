import { Article } from "@prisma/client";
import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";
import { TwoLinesNavItem } from "~/components/TwoLinesItem";

export const metadata = {
  title: "Articles",
};

const getArticles = cache(async () => {
  return await prisma.article.findMany();
});

export default LayoutWithList(getArticles, (article: Article) => {
  return {
    nav: {
      href: `/articles/${article.slug}`,
      name: article.title,
    },
    comp: (
      <div className="flex flex-col">
        <TwoLinesNavItem>
          {article.title}
          {article.createdAt.toLocaleDateString(new Intl.Locale("en-US"), {
            dateStyle: "medium",
          })}
        </TwoLinesNavItem>
      </div>
    ),
  };
});
