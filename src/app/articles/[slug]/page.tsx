import { prisma } from "~/server/db";
import { WithGetter } from "~/components/WithGetter";
import { type Article } from "@prisma/client";

async function getArticle({ slug }: { slug: string }) {
  return await prisma.article.findFirst({
    where: { slug },
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params);
  return { title: article?.title };
}

const Page = ({ data }: { data: Article }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default WithGetter(getArticle, Page);
