import { redirect } from "next/navigation";
import { Link } from "~/components/ui/button";
import { getSessionRSC } from "~/server/auth_rsc";

export default async function SettingsPage() {
  const session = await getSessionRSC();
  if (!session) {
    redirect("/api/auth/signin");
  }

  return <Link href="/api/auth/signout">Sign out</Link>;
}
