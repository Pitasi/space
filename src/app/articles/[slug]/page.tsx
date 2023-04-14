import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/Content";
import { MDXRemote } from "next-mdx-remote/rsc";
import getArticle from "~/app/queries/getArticle";
import { Comments } from "~/components/comments/comments";

import { Header } from "~/components/header";
import { Navbar, NavbarSpacer } from "~/components/navbar";
import { Main } from "~/components/main";
import { TypographyH1 } from "~/components/ui/typography/TypographyH1";
import { TypographyH2 } from "~/components/ui/typography/TypographyH2";
import { TypographyP } from "~/components/ui/typography/TypographyP";
import { CommentCard } from "~/components/comments/comment-card";

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

      <Card />

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

  return (
    <>
      <Content title={data.title}>
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={data.content} />
      </Content>
    </>
  );
});

function Card() {
  return (
    <article className="w-full bg-floralwhite p-8">
      <TypographyH1 className="font-neu">Article Title</TypographyH1>
      <TypographyH2>subtitle</TypographyH2>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        consequuntur quos voluptatum quas quidem. Quisquam, quae. Quisquam
      </TypographyP>
      <figure>
        <img className="rounded-md" src="https://placehold.co/600x400" />
        <figcaption>An elephant at sunset</figcaption>
      </figure>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        consequuntur quos voluptatum quas quidem. Quisquam, quae. Quisquam Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates,
        quod, quia, voluptatibus quae voluptatem quibusdam consequuntur quos
        voluptatum quas quidem. Quisquam, quae. Quisquam
      </TypographyP>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        consequuntur quos voluptatum quas quidem. Quisquam, quae. Quisquam Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates,
        quod, quia, voluptatibus quae voluptatem quibusdam consequuntur quos
        voluptatum quas quidem. Quisquam, quae. Quisquam
      </TypographyP>
    </article>
  );
}
