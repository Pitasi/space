import { z } from "zod";
import { prisma } from "~/server/db";

const schema = z.object({
  content: z.string().nonempty(),
  authorId: z.string().nonempty(),
  targetId: z.string().nonempty(),
});

type SchemaType = z.infer<typeof schema>;

export async function addComment(data: SchemaType) {
  const { content, authorId, targetId } = await schema.parseAsync(data);
  await prisma.comment.create({
    data: {
      content,
      authorId,
      targetId,
    },
  });
}
