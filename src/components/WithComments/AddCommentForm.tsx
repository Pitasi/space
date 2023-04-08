"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Schema = z.object({
  content: z.string().nonempty(),
});

type SchemaType = z.infer<typeof Schema>;

export function AddCommentForm(props: {
  onSubmit: (data: SchemaType) => Promise<void>;
}) {
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm<SchemaType>({
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
        className="p-2 dark:text-slate-800"
        rows={4}
        placeholder="I want to hear from you! Write your thoughts :)"
        {...register("content")}
      />
      <button type="submit" disabled={formState.isLoading}>
        {!formState.isSubmitting ? "Submit" : "Submitting..."}
      </button>
    </form>
  );
}
