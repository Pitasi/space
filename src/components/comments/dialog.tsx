"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

import { AddCommentForm } from "./add-form";
import { useState } from "react";
import { OnSubmitData } from "./add-form";

export function AddCommentDialog(props: {
  onSubmit: (data: OnSubmitData) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="link" className="px-0" onClick={() => setOpen(true)}>
        <Plus />
        <h2 className="flex items-center gap-2 text-xl text-eerie">
          Click here to add yours
        </h2>
      </Button>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            I encourage you to speak up everything you want to say!
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <AddCommentForm
          onSubmit={async (...args) => {
            await props.onSubmit(...args);
            setOpen(false);
          }}
        />

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
