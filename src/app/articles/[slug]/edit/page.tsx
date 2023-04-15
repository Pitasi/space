import { notFound, redirect } from "next/navigation";
import getArticle from "~/app/queries/getArticle";
import updateArticle from "~/app/mutations/updateArticle";
import { Form } from "./form";
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

  const article = await getArticle(params);
  if (!article) {
    notFound();
  }

  return (
    <div className="px-6 py-6">
      <Form
        content={article.content}
        title={article.title}
        onSubmit={async (data) => {
          "use server";
          const session = await getSessionRSC();
          if (!session?.user.admin) {
            throw new Error("Unauthorized");
          }
          await updateArticle({ ...data, id: article.id });
        }}
      />
    </div>
  );
}
