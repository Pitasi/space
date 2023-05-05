import { Form } from "../form";
import { getSessionRSC } from "~/server/auth_rsc";
import newArticle from "~/app/mutations/newArticle";
import { redirect } from "next/navigation";

export default async function NewArticlePage() {
  const session = await getSessionRSC();
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="px-6 py-6">
      <Form
        onSubmit={async (data) => {
          "use server";
          const session = await getSessionRSC();
          if (!session?.user.admin) {
            throw new Error("Unauthorized");
          }
          const { slug } = await newArticle({
            ...data,
            createdAt: new Date(data.createdAt),
            authorId: session.user.id,
          });
          return { redirect: `/articles/${slug}` };
        }}
      />
    </div>
  );
}
