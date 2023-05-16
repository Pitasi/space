"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

export const Schema = z.object({
  content: z.string().nonempty(),
});

export type OnSubmitData = z.infer<typeof Schema>;

export function AddCommentForm(props: {
  onSubmit: (data: OnSubmitData) => Promise<void>;
}) {
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm<OnSubmitData>({
    resolver: zodResolver(Schema),
  });
  const onSubmit = handleSubmit(async (d) => {
    await props.onSubmit(d);
    reset();
    router.refresh();
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <textarea
        className="rounded-none border-2 border-black p-2 shadow-neu-3 outline-0 ring-0 focus:border-violet focus:shadow-violet"
        rows={4}
        placeholder="Write your thoughts here :)"
        {...register("content")}
      />
      <Button variant="default" type="submit" disabled={formState.isLoading}>
        {!formState.isSubmitting ? "Submit" : "Submitting..."}
      </Button>
    </form>
  );
}
