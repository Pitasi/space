import { z } from "zod";
import { prisma } from "~/server/db";

export const newArticleSchema = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.date(),
  slug: z.string(),
  published: z.boolean(),
});

export default async (params: z.infer<typeof newArticleSchema>) => {
  const { title, content, authorId, slug, published, createdAt } =
    await newArticleSchema.parseAsync(params);
  return await prisma.article.create({
    data: {
      title,
      content,
      createdAt,
      slug,
      authorId,
      published,
    },
  });
};
