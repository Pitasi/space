import { prisma } from "~/server/db";
import { WithGetter } from "~/components/WithGetter";
import { AmaQuestion } from "@prisma/client";

async function getQuestion({ id }: { id: string }) {
  return await prisma.amaQuestion.findFirst({
    where: { id },
  });
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const q = await getQuestion(params);
  return { title: q?.question };
}

const Page = ({ data }: { data: AmaQuestion }) => {
  return (
    <div>
      <h1>{data.question}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default WithGetter(getQuestion, Page);
