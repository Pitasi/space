"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Schema = z.object({
  title: z.string().nonempty(),
  slug: z.string().nonempty(),
  content: z.string().nonempty(),
  createdAt: z.date(),
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
      createdAt: d.createdAt.toISOString(),
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
        type="datetime-local"
        className="border border-black p-2 dark:text-slate-800"
        placeholder="2021-01-01T00:12Z"
        {...register("createdAt", {
          value: props.article?.createdAt,
          valueAsDate: true,
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
      <textarea
        className="border border-black p-2 dark:text-slate-800"
        rows={10}
        {...register("content", { value: props.article?.content })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
