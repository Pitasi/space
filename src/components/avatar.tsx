import { User } from "next-auth";
import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from "./ui/avatar";
import { classed } from "~/utils/tw";

export function displayName(user: User) {
  return user.name || user.email || "anonymous";
}

function _Avatar(props: { user: User }) {
  const n = displayName(props.user);
  return (
    <AvatarUI className="row-span-2 aspect-square h-auto w-full border-2 border-black">
      {props.user.image && <AvatarImage src={props.user.image} />}
      <AvatarFallback>{n?.[0] || ""}</AvatarFallback>
    </AvatarUI>
  );
}

export const Avatar = classed(_Avatar, {
  variants: {
    shadow: {
      none: "",
      small: "shadow-neu-2",
    },
  },
  defaultVariants: {
    shadow: "none",
  },
});
