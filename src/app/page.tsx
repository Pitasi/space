import Link from "next/link";
import { TypographyP } from "~/components/ui/typography";

const Page = () => {
  return (
    <main>
      <TypographyP>
        Hey there. I&apos;m Antonio, a software engineer based in Pisa, Italy. I
        work with backend technologies and I&apos;m passionate about distributed
        systems. In my free time, I organize events with the local community I
        founded:{" "}
        <Link
          className="text-violet underline"
          href="https://pisa.dev"
          target="_blank"
        >
          pisa.dev
        </Link>
        .
      </TypographyP>
    </main>
  );
};

export default Page;
