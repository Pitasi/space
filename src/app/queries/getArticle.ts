import { cache } from "react";
import { prisma } from "~/server/db";

export default cache(
  async ({
    slug,
    onlyPublished = true,
  }: {
    slug: string;
    onlyPublished?: boolean;
  }) =>
    await prisma.article.findFirst({
      where: { slug, published: onlyPublished ? true : undefined },
      include: {
        comment: {
          orderBy: { createdAt: "desc" },
          include: {
            author: true,
          },
        },
      },
    })
);
