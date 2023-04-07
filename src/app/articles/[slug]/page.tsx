import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/Content";
import { MDXRemote } from "next-mdx-remote/rsc";
import getArticle from "~/app/queries/getArticle";

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
