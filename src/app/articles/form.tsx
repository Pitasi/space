"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EditorTextarea } from "~/components/editor";

export const Schema = z.object({
  title: z.string().nonempty(),
  slug: z.string().nonempty(),
  content: z.string().nonempty(),
  createdAt: z.string().nonempty(),
  published: z.boolean(),
});

type SchemaType = z.infer<typeof Schema>;

type OnSubmitData = Omit<SchemaType, "createdAt"> & {
  createdAt: string;
};

type OnSubmitResult = { redirect?: string };

export function Form(props: {
  onSubmit: (data: OnSubmitData) => Promise<OnSubmitResult>;
  article?: {
    title: string;
    slug: string;
    content: string;
    createdAt: Date;
    published: boolean;
  };
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(Schema),
  });
  const onSubmit = handleSubmit(async (d) => {
    const { redirect } = await props.onSubmit({
      ...d,
      createdAt: d.createdAt,
    });
    if (redirect) {
      router.push(redirect);
    }
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        className="border border-black p-2 dark:text-slate-800"
        placeholder="the-slug"
        {...register("slug", { value: props.article?.slug })}
      />
      <input
        className="border border-black p-2 dark:text-slate-800"
        placeholder="The Title"
        {...register("title", { value: props.article?.title })}
      />
      {errors.createdAt && <div>{errors.createdAt.message}</div>}
      <input
        type="text"
        className="border border-black p-2 dark:text-slate-800"
        {...register("createdAt", {
          value: (props.article?.createdAt || new Date()).toISOString(),
          setValueAs: (value: string) => new Date(value),
        })}
      />
      <div>
        <label>Published</label>
        <input
          type="checkbox"
          className="border border-black p-2 dark:text-slate-800"
          {...register("published", { value: props.article?.published })}
        />
      </div>
      <EditorTextarea
        className="border border-black p-2 dark:text-slate-800"
        rows={10}
        {...register("content", { value: props.article?.content })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
