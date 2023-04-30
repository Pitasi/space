"use server";

import { Avatar } from "./avatar";
import { User } from "next-auth";
import { Link } from "./ui/button";
import { LogOut } from "lucide-react";
import { getSessionRSC } from "~/server/auth_rsc";

export async function LoginCard() {
  const session = await getSessionRSC();

  return (
    <div className="w-full">
      {session ? <LogoutCard user={session.user} /> : <LoginButton />}
    </div>
  );
}

function LoginButton() {
  return (
    <Link
      className="w-full border-2 border-black"
      variant="subtle"
      href="/api/auth/signin"
    >
      Sign in
    </Link>
  );
}

function LogoutCard(props: { user: User }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-10">
        <Avatar user={props.user} shadow="none" />
      </div>
      <Link
        href="/api/auth/signout"
        className="border-2 border-black"
        variant="subtle"
        size="square"
      >
        <LogOut />
      </Link>
    </div>
  );
}
