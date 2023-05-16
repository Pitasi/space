import { getSessionRSC } from "~/server/auth_rsc";
import { AddCommentDialog } from "./dialog";
import { addArticleComment } from "~/app/mutations/addComment";
import { LoginGate } from "../login-gate";

export function Comments(props: {
  id: string;
  kind: "article";
  children: React.ReactNode;
}) {
  return (
    <section className="bg-floralwhite">
      <div className="space-y-4 border-y-2 border-black bg-violet bg-pattern-plus px-8 py-24">
        <h1 className="font-neu text-6xl font-bold">Comments section</h1>
        <LoginGate>
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
