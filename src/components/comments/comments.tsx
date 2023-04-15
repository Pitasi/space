import { getSessionRSC } from "~/server/auth_rsc";
import { AddCommentDialog } from "./dialog";
import { addArticleComment } from "~/app/mutations/addComment";
import { LoginGate } from "../login-gate";

export async function Comments(props: {
  id: string;
  kind: "article";
  children: React.ReactNode;
}) {
  const session = await getSessionRSC();
  return (
    <section className="bg-floralwhite">
      <div className="space-y-4 border-y-2 border-black bg-violet px-8 py-24">
        <h1 className="font-neu text-6xl font-bold">Comments section</h1>
        <LoginGate session={session}>
          <AddCommentDialog
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
        </LoginGate>
      </div>

      <div className="flex flex-col gap-4">{props.children}</div>
    </section>
  );
}
