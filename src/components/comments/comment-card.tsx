import { User } from "@prisma/client";
import { formatDateRelative } from "~/utils/dates";
import { Avatar, displayName } from "../avatar";

export function CommentCard(props: {
  content: string;
  author: User;
  createdAt: Date;
}) {
  const n = displayName(props.author);
  return (
    <div className="grid grid-cols-[3rem_1fr] grid-rows-[auto_1fr] gap-y-1 gap-x-4 border-b-2 border-black py-8 px-8 last:border-0">
      <Avatar user={props.author} />

      <div className="flex flex-row justify-start gap-2">
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
