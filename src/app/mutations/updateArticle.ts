import { z } from "zod";
import { prisma } from "~/server/db";

const schema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export default async (params: z.infer<typeof schema>) => {
  const { id, title, content } = await schema.parseAsync(params);
  await prisma.article.update({
    where: { id: id },
    data: { title: title, content: content },
  });
};
