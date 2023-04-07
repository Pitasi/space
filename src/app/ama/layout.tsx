import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";

export const metadata = {
  title: "AMA - Ask me anything!",
};

const getQuestions = cache(async () => await prisma.amaQuestion.findMany());

export default LayoutWithList(getQuestions, (q) => ({
  nav: {
    href: `/ama/${q.id}`,
    name: q.question,
  },
}));
