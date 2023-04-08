import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/Content";
import { MDXRemote } from "next-mdx-remote/rsc";
import getArticle from "~/app/queries/getArticle";
import { WithComments } from "~/components/WithComments";

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
    <>
      {/* @ts-expect-error Server Component */}
      <WithComments comments={data.comment} kind="article" id={data.id}>
        <Content title={data.title}>
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={data.content} />
        </Content>
      </WithComments>
    </>
  );
});
