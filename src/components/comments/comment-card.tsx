import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function CommentCard(props: { author: User }) {
  const displayName = props.author.name || props.author.email || "anonymous";

  return (
    <div className="grid grid-cols-[3rem_1fr] grid-rows-[auto_1fr] gap-y-1 gap-x-4 border-b-2 border-black py-8 px-8 last:border-0">
      <Avatar className="row-span-2 aspect-square h-auto w-full border-2 border-black shadow-neu-2">
        {props.author.image && <AvatarImage src={props.author.image} />}
        <AvatarFallback>{displayName[0] || ""}</AvatarFallback>
      </Avatar>

      <div className="flex flex-row justify-start gap-2">
        <span className="font-semibold text-black">{displayName}</span>
        <p className="leading-snug">·</p>
        <span className="text-liver">2 hours ago</span>
      </div>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae
      </span>
    </div>
  );
}
