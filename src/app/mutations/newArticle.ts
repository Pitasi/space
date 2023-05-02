import { z } from "zod";
import { prisma } from "~/server/db";

const schema = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.date(),
  slug: z.string(),
  published: z.boolean(),
});

export default async (params: z.infer<typeof schema>) => {
  const { title, content, authorId, slug, published, createdAt } =
    await schema.parseAsync(params);
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
