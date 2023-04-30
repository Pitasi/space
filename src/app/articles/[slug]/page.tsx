import getArticle from "~/app/queries/getArticle";

import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/content";
// import { Comments } from "~/components/comments/comments";
import { Header } from "~/components/header";
import { Main } from "~/components/main";
// import { CommentCard } from "~/components/comments/comment-card";
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
      <Header title={data.title} backHref="/articles" />

      <Content title={data.title}>
        <MDX content={data.content} />
      </Content>

      {/* Will launch comments in near future
      @ts-expect-error Server Component
      <Comments id={data.id} kind="article">
        <ul>
          {data.comment.map((c) => (
            <CommentCard key={c.id} {...c} />
          ))}
        </ul>
      </Comments>
      */}
    </Main>
  );
});
