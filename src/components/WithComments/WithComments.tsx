import { Comment, User } from "@prisma/client";

export function WithComments(props: {
  comments: (Comment & { author: User })[];
  children: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <hr />
      <section className="flex flex-col">
        <span>Comments</span>
        <ul>
          {props.comments.map((c) => (
            <li key={c.id}>
              {c.content} (by {c.author.name})
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
