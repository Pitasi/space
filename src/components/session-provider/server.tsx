"use server";

import { getSessionRSC } from "~/server/auth_rsc";
import { Provider } from "./client";

// This is a RSC component that provides the next-auth session to the children.
// The children will be rendered as client components, but they will gain the
// ability of running the useSession() hook.
// NOTE: at the time of writing this, I can't find of a solution for wrapping
// the entire app in a single provider like you were able to do in _app.tsx.
export async function SessionProviderRSC({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionRSC();
  return <Provider session={session}>{children}</Provider>;
}
