import { AmaQuestion } from "@prisma/client";
import { prisma } from "~/server/db";
import LayoutWithList from "~/components/LayoutWithList";
import { cache } from "react";
import { NavItem } from "~/components/Sidebar";

export const metadata = {
  title: "AMA - Ask me anything!",
};

const getQuestions = cache(async () => await prisma.amaQuestion.findMany());

function questionToPath(q: AmaQuestion): NavItem {
  return {
    href: `/ama/${q.id}`,
    name: q.question,
  };
}

export default LayoutWithList(getQuestions, questionToPath);
