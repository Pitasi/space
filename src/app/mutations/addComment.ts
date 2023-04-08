import { z } from "zod";
import { prisma } from "~/server/db";

const schema = z.object({
  content: z.string().nonempty(),
  authorId: z.string().nonempty(),
  toId: z.string().nonempty(),
});

type SchemaType = z.infer<typeof schema>;

export async function addArticleComment(data: SchemaType) {
  const d = await schema.parseAsync(data);
  await prisma.comment.create({
    data: {
      content: d.content,
      authorId: d.authorId,
      articleId: d.toId,
    },
  });
}
