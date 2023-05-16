import { cache } from "react";
import { formatDateRelative } from "~/utils/dates";
import { Avatar, displayName } from "../avatar";
import { prisma } from "~/server/db";

const getUser = cache(async (id: string) => {
  return await prisma.user.findFirstOrThrow({
    where: {
      id,
    },
  });
});

export async function CommentCard(props: {
  content: string;
  authorId: string;
  createdAt: Date;
}) {
  const author = await getUser(props.authorId);
  const n = displayName(author);
  return (
    <div className="grid grid-cols-[3rem_1fr] grid-rows-[auto_1fr] gap-x-4 gap-y-1 border-b-2 border-black px-8 py-8 last:border-0">
      <Avatar user={author} />

      <div className="flex flex-row items-center justify-start gap-2">
        <span className="font-semibold text-black">{n}</span>
        <p className="leading-snug">·</p>
        <span className="text-liver">
          {formatDateRelative(props.createdAt)}
        </span>
      </div>

      <span>{props.content}</span>
    </div>
  );
}
