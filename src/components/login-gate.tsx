"use client";

import { Session } from "next-auth";

export function LoginGate(props: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  const loggedIn = props.session && props.session.user;
  return (
    <div
      onClickCapture={
        loggedIn
          ? undefined
          : (e) => {
              e.stopPropagation();
              alert("You have to login first.");
            }
      }
    >
      {props.children}
    </div>
  );
}
