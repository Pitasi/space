import { cache } from "react";
import { getSessionRSC } from "~/server/auth_rsc";
import { AddCommentDialog } from "./dialog";
import { addComment } from "~/app/mutations/addComment";
import { LoginGate } from "../login-gate";
import { OnSubmitData } from "./add-form";
import { prisma } from "~/server/db";
import { CommentCard } from "./comment-card";

const listComments = cache(async (targetId: string) => {
  return await prisma.comment.findMany({
    where: {
      targetId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
});

async function onSubmit(targetId: string, data: OnSubmitData) {
  const session = await getSessionRSC();
  if (!session) {
    throw new Error("Not authenticated");
  }
  await addComment({
    content: data.content,
    targetId,
    authorId: session.user.id,
  });
}

export async function Comments(props: { id: string }) {
  const targetId = props.id;
  const comments = await listComments(props.id);

  return (
    <section className="bg-floralwhite">
      <div className="space-y-4 border-y-2 border-black bg-violet bg-pattern-plus px-8 py-24">
        <h1 className="font-neu text-6xl font-bold">Comments section</h1>
        <LoginGate>
          <AddCommentDialog
            onSubmit={async (data) => {
              "use server";
              await onSubmit(targetId, data);
            }}
          />
        </LoginGate>
      </div>

      <div className="flex flex-col gap-4">
        <ul>
          {comments.map((c) => (
            <li key={c.id}>
              {/** @ts-expect-error Server Component */}
              <CommentCard key={c.id} {...c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
