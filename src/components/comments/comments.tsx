import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { getSessionRSC } from "~/server/auth_rsc";
import { AddCommentForm } from "./add-form";
import { addArticleComment } from "~/app/mutations/addComment";

export async function Comments(props: {
  id: string;
  kind: "article";
  children: React.ReactNode;
}) {
  const session = await getSessionRSC();
  return (
    <section className="bg-floralwhite">
      <div className="space-y-4 border-y-2 border-black bg-violet px-8 py-24">
        <h1 className="font-neu text-6xl font-bold">Comments section</h1>

        <Dialog>
          <DialogTrigger asChild>
            <AddNewCommentBtn />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                I encourage you to speak up everything you want to say!
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            {session && (
              <AddCommentForm
                onSubmit={async ({ content }) => {
                  "use server";
                  const session = await getSessionRSC();
                  if (!session) {
                    throw new Error("Not authenticated");
                  }
                  switch (props.kind) {
                    case "article":
                      await addArticleComment({
                        content,
                        authorId: session.user.id,
                        toId: props.id,
                      });
                  }
                }}
              />
            )}

            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4">{props.children}</div>
    </section>
  );
}

function AddNewCommentBtn() {
  return (
    <Button variant="link" className="px-0">
      <Plus />
      <h2 className="flex items-center gap-2 text-xl text-eerie">
        Click here to add yours
      </h2>
    </Button>
  );
}
