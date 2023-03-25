import { prisma } from "~/server/db";
import { WithGetter } from "~/components/WithGetter";
import { cache } from "react";

const getQuestion = cache(
  async ({ id }: { id: string }) =>
    await prisma.amaQuestion.findFirst({
      where: { id },
      include: {
        comment: {
          include: {
            author: true,
          },
        },
      },
    })
);

export async function generateMetadata({ params }: { params: { id: string } }) {
  const q = await getQuestion(params);
  return { title: q?.question };
}

export default WithGetter(getQuestion, ({ data }) => {
  return (
    <div>
      <h1>{data.question}</h1>
      <p>{data.description}</p>
      <ul>
        {data.comment.map((comment) => (
          <li key={comment.id}>
            {comment.content} (from {comment.author.name})
          </li>
        ))}
      </ul>
    </div>
  );
});
