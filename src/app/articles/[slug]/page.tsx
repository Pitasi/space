import getArticle from "~/app/queries/getArticle";

import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/content";
import { Comments } from "~/components/comments/comments";
import { Header } from "~/components/header";
import { Navbar, NavbarSpacer } from "~/components/navbar";
import { Main } from "~/components/main";
import { CommentCard } from "~/components/comments/comment-card";
import { MDX } from "~/components/mdx";

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
      <Navbar />

      <Content title={data.title}>
        <MDX content={data.content} />
      </Content>

      {/* @ts-expect-error Server Component */}
      <Comments id={data.id} kind="article">
        <ul>
          {data.comment.map((c) => (
            <CommentCard key={c.id} {...c} />
          ))}
        </ul>
      </Comments>

      <NavbarSpacer />
    </Main>
  );
});
