import { revalidateTag, unstable_cache } from "next/cache";
import { cn } from "~/utils/tw";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Title } from "./title";
import { LoginGate } from "../login-gate";
import { HeartButton } from "./heart-button";
import { prisma } from "~/server/db";
import { getSessionRSC } from "~/server/auth_rsc";

async function isHearted(authorId: string, targetId: string) {
  return !!(await prisma.reaction.findFirst({
    where: {
      AND: {
        authorId,
        targetId,
      },
    },
  }));
}

async function heart(authorId: string, targetId: string) {
  await prisma.reaction.upsert({
    update: {},
    create: {
      authorId,
      targetId,
    },
    where: {
      authorId_targetId: {
        authorId,
        targetId,
      },
    },
  });
}
async function unheart(authorId: string, targetId: string) {
  await prisma.reaction.delete({
    where: {
      authorId_targetId: {
        authorId,
        targetId,
      },
    },
  });
}

async function heartCount(targetId: string) {
  return await prisma.reaction.count({
    where: {
      targetId,
    },
  });
}

export async function Header({
  title,
  backHref,
  className,
  heartTargetId,
}: {
  heartTargetId?: string;
  title: string;
  backHref: string;
  className?: string;
}) {
  const count = heartTargetId
    ? await unstable_cache(
        () => heartCount(heartTargetId),
        ["reaction", heartTargetId],
        {
          tags: [`reaction:${heartTargetId}`],
        }
      )()
    : 0;

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex w-full items-center justify-between gap-2 overflow-hidden border-b-2 border-black bg-yellow px-3 py-3 lg:justify-end lg:gap-4",
        className
      )}
    >
      <Link href={backHref}>
        <Button className="lg:hidden" variant="ghost" size="sm">
          <ChevronLeft />
        </Button>
      </Link>

      <Title>{title}</Title>

      {heartTargetId ? (
        <LoginGate>
          <HeartButton
            count={count}
            isHearted={async () => {
              "use server";
              const session = await getSessionRSC();
              if (!session) {
                return false;
              }
              return await isHearted(session.user.id, heartTargetId);
            }}
            onHeart={async () => {
              "use server";
              const session = await getSessionRSC();
              if (!session) {
                throw new Error("Not authenticated");
              }
              await heart(session.user.id, heartTargetId);
              revalidateTag(`reaction:${heartTargetId}`);
            }}
            onUnheart={async () => {
              "use server";
              const session = await getSessionRSC();
              if (!session) {
                throw new Error("Not authenticated");
              }
              await unheart(session.user.id, heartTargetId);
              revalidateTag(`reaction:${heartTargetId}`);
            }}
          />
        </LoginGate>
      ) : null}
    </header>
  );
}
