import { Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "~/components/ui/button";
import { TypographyLink, TypographyP } from "~/components/ui/typography";

const Page = () => {
  return (
    <main className="mx-auto my-20 max-w-2xl space-y-16 px-6 text-liver lg:px-14">
      <MainSection />
      <FollowMeSection />
      <WorkSection />
    </main>
  );
};

function MainSection() {
  return (
    <section>
      <TypographyP>
        I&apos;m Antonio, a backend software engineer. I&apos;m passionate about
        distributed systems and clean maintainable software. In my free time, I
        organize events with the local community I founded:{" "}
        <TypographyLink
          className="font-semibold text-darkviolet"
          href="https://pisa.dev"
          target="_blank"
        >
          pisa.dev
        </TypographyLink>
        .
      </TypographyP>

      <TypographyP>
        I&apos;m currently working on exciting technology at{" "}
        <TypographyLink>Qredo</TypographyLink>. We aim to decentralize the
        private keys for your cryptocurrencies using our dMPC solution.
      </TypographyP>

      <TypographyP>
        Before that, I worked at{" "}
        <TypographyLink href="https://ignite.com">Ignite</TypographyLink> (also
        known as{" "}
        <TypographyLink href="https://tendermint.com">
          Tendermint
        </TypographyLink>
        ), the company that first created{" "}
        <TypographyLink href="https://blog.cosmos.network/cosmos-history-inception-to-prelaunch-b05bcb6a4b2b">
          Proof-of-Stake
        </TypographyLink>{" "}
        and{" "}
        <TypographyLink href="https://cosmos.network">
          Cosmos SDK
        </TypographyLink>
        . My role was Senior Backend Engineer for the <em>(now defunct)</em>{" "}
        <TypographyLink href="https://emeris.com">Emeris</TypographyLink>.
      </TypographyP>

      <TypographyP>
        Before diving into cryptocurrencies tech, I&apos;ve cutted my teeth in
        fast-paced startups where I helped shaping products such as{" "}
        <TypographyLink href="https://traent.com">Traent</TypographyLink> and{" "}
        <TypographyLink href="https://zerynth.com">Zerynth</TypographyLink>.
      </TypographyP>

      <TypographyP>
        Sometimes I have over-engineering tendencies, such as{" "}
        <TypographyLink href="https://github.com/pitasi/space">
          my personal website
        </TypographyLink>
        . Most of the times I&apos;m harmless though.
      </TypographyP>
    </section>
  );
}

const socials = [
  {
    name: (
      <>
        <Twitter className="inline-block" fill="currentColor" />
      </>
    ),
    href: "https://twitter.com/zaphodias",
  },
  {
    name: (
      <>
        <Github className="inline-block" fill="currentColor" />
      </>
    ),
    href: "https://github.com/Pitasi",
  },
  {
    name: (
      <>
        <Linkedin className="inline-block" fill="currentColor" />
      </>
    ),
    href: "https://linkedin.com/in/pitasiantonio",
  },
];
function FollowMeSection() {
  return (
    <section>
      <ul className="flex flex-row gap-4">
        {socials.map((s) => (
          <li key={s.href}>
            <Link variant="default" href={s.href}>
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

import logoQredo from "~/fixtures/qredo.png";
import logoTendermint from "~/fixtures/tendermint.svg";
import logoGeckosoft from "~/fixtures/geckosoft.svg";
import logoNextworks from "~/fixtures/nextworks.svg";
import logoZerynth from "~/fixtures/zerynth.svg";
import Image, { StaticImageData } from "next/image";

interface Resume {
  company: string;
  title: string;
  logo: StaticImageData;
  start: string | { label: string; dateTime: number };
  end: string | { label: string; dateTime: number };
}

const resume: Resume[] = [
  {
    company: "Qredo",
    title: "Blockchain Engineer",
    logo: logoQredo,
    start: "2022",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "Ignite (fka Tendermint)",
    title: "Sr. Backend Engineer",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logo: logoTendermint,
    start: "2022",
    end: "2022",
  },
  {
    company: "Geckosoft",
    title: "Backend engineer",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logo: logoGeckosoft,
    start: "2020",
    end: "2022",
  },
  {
    company: "Nextworks",
    title: "Backend engineer",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logo: logoNextworks,
    start: "2019",
    end: "2020",
  },
  {
    company: "Zerynth",
    title: "Fullstack developer",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logo: logoZerynth,
    start: "2018",
    end: "2019",
  },
];

function WorkSection() {
  return (
    <section>
      <ol className="mt-6 space-y-6">
        {resume.map((role) => (
          <li className="flex gap-4" key={role.company}>
            <Image
              src={role.logo}
              alt=""
              width="48"
              height="48"
              className="h-7 w-7 rounded-full"
            />
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-black">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-eerie">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-liver"
                aria-label={`${
                  typeof role.start === "object" ? role.start.label : role.start
                } until ${
                  typeof role.end === "object" ? role.end.label : role.end
                }`}
              >
                <time
                  dateTime={
                    typeof role.start === "object"
                      ? role.start.label
                      : role.start
                  }
                >
                  {typeof role.start === "object"
                    ? role.start.label
                    : role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time
                  dateTime={
                    typeof role.end === "object" ? role.end.label : role.end
                  }
                >
                  {typeof role.end === "object" ? role.end.label : role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Page;
