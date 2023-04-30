import { notFound, redirect } from "next/navigation";
import getArticle from "~/app/queries/getArticle";
import updateArticle from "~/app/mutations/updateArticle";
import { Form } from "../../form";
import { getSessionRSC } from "~/server/auth_rsc";

export default async function EditArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getSessionRSC();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const article = await getArticle({ slug: params.slug, onlyPublished: false });
  if (!article) {
    notFound();
  }

  return (
    <div className="px-6 py-6">
      <Form
        article={{
          title: article.title,
          content: article.content,
          createdAt: article.createdAt,
          published: article.published,
          slug: article.slug,
        }}
        onSubmit={async (data) => {
          "use server";
          const session = await getSessionRSC();
          if (!session?.user.admin) {
            throw new Error("Unauthorized");
          }
          await updateArticle({
            ...data,
            createdAt: new Date(data.createdAt),
            id: article.id,
          });
          return { redirect: `/articles/${article.slug}` };
        }}
      />
    </div>
  );
}
