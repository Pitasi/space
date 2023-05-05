import { z } from "zod";
import { prisma } from "~/server/db";
import { newArticleSchema } from "./newArticle";

const schema = newArticleSchema
  .omit({ slug: true, authorId: true })
  .merge(z.object({ id: z.string() }));

export default async (params: z.infer<typeof schema>) => {
  const { id, title, content, published, createdAt } = await schema.parseAsync(
    params
  );
  await prisma.article.update({
    where: { id: id },
    data: { title, content, published, createdAt },
  });
};
