import { cache } from "react";
import { prisma } from "~/server/db";

export default cache(
  async ({ slug }: { slug: string }) =>
    await prisma.article.findFirst({
      where: { slug },
    })
);
