import { notFound } from "next/navigation";
import getArticle from "~/app/queries/getArticle";
import updateArticle from "~/app/mutations/updateArticle";
import { Form } from "./form";

export default async function EditArticlePage({
  params,
}: {
  params: { slug: string };
}) {
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
          await updateArticle({ ...data, id: article.id });
        }}
      />
    </div>
  );
}
