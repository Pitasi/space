import { prisma } from "~/server/db";
import { WithGetter } from "~/components/WithGetter";
import { App } from "@prisma/client";
import AppIcon from "~/components/AppIcon/AppIcon";

async function getApp({ slug }: { slug: string }) {
  return await prisma.app.findFirst({
    where: { slug },
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getApp(params);
  return { title: article?.title };
}

const Page = ({ data }: { data: App }) => {
  return (
    <div>
      <AppIcon logoUrl={data.logoUrl} title={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default WithGetter(getApp, Page);
