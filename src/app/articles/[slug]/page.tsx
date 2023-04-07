import { prisma } from "~/server/db";
import { WithGetter } from "~/components/WithGetter";
import { cache } from "react";
import { Content } from "~/components/Content";
import { MDXRemote } from "next-mdx-remote/rsc";

const getArticle = cache(
  async ({ slug }: { slug: string }) =>
    await prisma.article.findFirst({
      where: { slug },
    })
);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params);
  return { title: article?.title };
}

export default WithGetter(getArticle, ({ data }) => {
  return (
    <Content title={data.title}>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={data.content} />
    </Content>
  );
});
