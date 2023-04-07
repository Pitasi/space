"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Schema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
});

type SchemaType = z.infer<typeof Schema>;

export function Form(props: {
  title: string;
  content: string;
  onSubmit: (data: SchemaType) => Promise<void>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(Schema),
  });
  const onSubmit = handleSubmit((d) => props.onSubmit(d));

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {errors.title && <div>Title is required</div>}
      <input
        className="p-2 dark:text-slate-800"
        {...register("title", { value: props.title })}
      />
      <textarea
        className="p-2 dark:text-slate-800"
        rows={10}
        {...register("content", { value: props.content })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
