"use server";

import { getSessionRSC } from "~/server/auth_rsc";
import { SessionProviderClient } from "./client";

export async function SessionProviderRSC({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionRSC();
  return (
    <SessionProviderClient session={session}>{children}</SessionProviderClient>
  );
}
