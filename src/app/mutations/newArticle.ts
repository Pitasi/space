import { z } from "zod";
import { prisma } from "~/server/db";

const schema = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.date(),
  slug: z.string(),
});

export default async (params: z.infer<typeof schema>) => {
  const { title, content, authorId, slug } = await schema.parseAsync(params);
  return await prisma.article.create({
    data: {
      title,
      content,
      slug,
      authorId,
    },
  });
};
