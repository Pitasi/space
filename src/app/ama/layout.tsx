import { AmaQuestion } from "@prisma/client";
import { prisma } from "~/server/db";
import { Path } from "~/components/Navigation";
import { StackNavItem } from "./StackNavItem";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";

export const metadata = {
  title: "AMA - Ask me anything!",
};

const getQuestions = cache(async () => await prisma.amaQuestion.findMany());

function questionToPath(q: AmaQuestion): Path {
  return {
    href: `/ama/${q.id}`,
    title: q.question,
  };
}

export default LayoutWithList(getQuestions, questionToPath, StackNavItem);
