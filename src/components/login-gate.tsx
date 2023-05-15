"use client";

import { signIn, useSession } from "next-auth/react";

export function LoginGate(props: { children: React.ReactNode }) {
  const { status } = useSession();
  return (
    <div
      onClickCapture={async (e) => {
        if (status === "authenticated") {
          return;
        }
        e.stopPropagation();
        if (status === "unauthenticated") {
          await signIn();
        }
      }}
    >
      {props.children}
    </div>
  );
}
