import { WithGetter } from "~/components/WithGetter";
import { Content } from "~/components/Content";
import { MDXRemote } from "next-mdx-remote/rsc";
import getArticle from "~/app/queries/getArticle";
import { WithComments } from "~/components/WithComments";

import { Header } from "~/components/header";
import { Navbar, NavbarSpacer } from "~/components/navbar";
import { Main } from "~/components/main";
import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { TypographyH1 } from "~/components/ui/typography/TypographyH1";
import { TypographyH2 } from "~/components/ui/typography/TypographyH2";
import { TypographyP } from "~/components/ui/typography/TypographyP";

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
      <Comments />

      <NavbarSpacer />
    </Main>
  );

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

function Comments() {
  return (
    <section className="bg-floralwhite">
      <div className="space-y-4 border-y-2 border-black bg-violet px-8 py-24">
        <h1 className="font-neu text-6xl font-bold">Comments section</h1>
        <Button variant="link" className="px-0">
          <Plus />
          <h2 className="flex items-center gap-2 text-xl text-eerie">
            Click here to add yours
          </h2>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((comment) => (
          <CommentCard key={comment} />
        ))}
      </div>
    </section>
  );
}

function CommentCard() {
  return (
    <div className="grid grid-cols-[3rem_1fr] grid-rows-[auto_1fr] gap-y-1 gap-x-4 border-b-2 border-black py-8 px-8">
      <Avatar className="row-span-2 aspect-square h-auto w-full border-2 border-black shadow-neu-2">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-row justify-start gap-2">
        <span className="font-semibold text-black">John Doe</span>
        <p className="leading-snug">·</p>
        <span className="text-liver">2 hours ago</span>
      </div>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae
      </span>
    </div>
  );
}
