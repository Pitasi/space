import { AmaQuestion } from "@prisma/client";
import { prisma } from "~/server/db";
import { Path } from "~/components/Navigation";
import { StackNavItem } from "./StackNavItem";
import LayoutWithList from "~/components/LayoutWithList";

export const metadata = {
  title: "AMA - Ask me anything!",
};

async function getQuestions(): Promise<AmaQuestion[]> {
  const questions = await prisma.amaQuestion.findMany();
  return questions;
}

function questionToPath(q: AmaQuestion): Path {
  return {
    href: `/ama/${q.id}`,
    title: q.question,
  };
}

export default LayoutWithList(getQuestions, questionToPath, StackNavItem);
