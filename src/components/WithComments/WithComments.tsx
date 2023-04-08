import { Comment, User } from "@prisma/client";
import { getSessionRSC } from "~/server/auth_rsc";
import { AddCommentForm } from "./AddCommentForm";
import { addArticleComment } from "~/app/mutations/addComment";

export async function WithComments(props: {
  comments: (Comment & { author: User })[];
  children: React.ReactNode;
  kind: "article";
  id: string;
}) {
  const session = await getSessionRSC();

  return (
    <>
      {props.children}
      <hr />
      <section className="flex flex-col">
        <span>Comments</span>
        {session && (
          <AddCommentForm
            onSubmit={async ({ content }) => {
              "use server";
              const session = await getSessionRSC();
              if (!session) {
                throw new Error("Not authenticated");
              }
              switch (props.kind) {
                case "article":
                  await addArticleComment({
                    content,
                    authorId: session.user.id,
                    toId: props.id,
                  });
              }
            }}
          />
        )}
        <ul>
          {props.comments.map((c) => (
            <li key={c.id}>
              {c.content} (by {c.author.name})
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
