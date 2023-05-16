import getArticle from "~/app/queries/getArticle";

import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/content";
import { Comments } from "~/components/comments/comments";
import { Header } from "~/components/header/header";
import { Main } from "~/components/main";
import { MDX } from "~/components/mdx/mdx";

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
    <Main>
      {/* @ts-expect-error Server Component */}
      <Header title={data.title} backHref="/articles" heartTargetId={data.id} />

      <Content title={data.title}>
        <MDX content={data.content} />
      </Content>

      {/* @ts-expect-error Server Component */}
      <Comments id={data.id} />
    </Main>
  );
});

export const revalidate = 120;
export const dynamic = "error";
