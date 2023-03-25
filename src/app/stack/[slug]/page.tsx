import { prisma } from "~/server/db";
import { WithGetter } from "~/components/WithGetter";
import AppIcon from "~/components/AppIcon/AppIcon";
import { cache } from "react";

const getApp = cache(
  async ({ slug }: { slug: string }) =>
    await prisma.app.findFirst({
      where: { slug },
    })
);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getApp(params);
  return { title: article?.title };
}

export default WithGetter(getApp, ({ data }) => {
  return (
    <div>
      <AppIcon logoUrl={data.logoUrl} title={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
});
