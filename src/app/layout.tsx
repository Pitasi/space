import { SquircleShapeProvider } from "~/components/Squircle";
import "../styles/globals.css";

import { ChevronLeft, Heart, Home, Mail, Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "~/utils/tw";
import { Button } from "~/components/ui/button";
import { TypographyH1 } from "~/components/ui/typography/TypographyH1";
import { TypographyP } from "~/components/ui/typography/TypographyP";
import { TypographyH2 } from "~/components/ui/typography/TypographyH2";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Icon from "~/fixtures/logo_icon.png";
import { darkerGrotesque, inter } from "~/utils/fonts";

export const revalidate = 0;

export const metadata = {
  title: {
    default: "Antonio Pitasi",
    template: "%s - Antonio Pitasi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-screen bg-beige-200 dark:bg-midnight-700 dark:text-neutral",
        inter.variable,
        darkerGrotesque.variable
      )}
    >
      <body className="h-screen overflow-hidden">
        <SquircleShapeProvider />

        <div className="grid h-full bg-jasmine lg:grid-cols-[24rem_1fr]">
          <div className="flex flex-row ">
            <Sidebar className="hidden bg-lightviolet lg:block">
              <SidebarHeader title="Antonio Pitasi" imageSrc={Icon} />
              <SidebarNav>
                <SidebarNavItem />
                <SidebarNavItem />
                <SidebarNavItem />
              </SidebarNav>
            </Sidebar>
            <Sidebar className="hidden bg-acid lg:block">
              <SidebarHeader title="Blog" />
              <SidebarNav>
                <SidebarNavItem />
                <SidebarNavItem />
                <SidebarNavItem />
              </SidebarNav>
            </Sidebar>
          </div>

          <div className="overflow-auto">
            <Header />
            <Navbar className="lg:hidden" />
            <Card />
            <Comments />
            <div className="h-10 lg:hidden" />
          </div>
        </div>
      </body>
    </html>
  );
}

function Sidebar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full space-y-8 overflow-auto border-r-2 border-black p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

function SidebarHeader(props: {
  imageSrc?: string | StaticImageData;
  title: string;
}) {
  return (
    <header className="flex h-10 w-full flex-row items-center gap-1">
      {props.imageSrc ? (
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          )}
        >
          <Image
            className="w-auto drop-shadow-neu-1"
            height={24}
            src={Icon}
            alt="Antonio Pitasi"
          />
        </div>
      ) : (
        <div className="h-10 w-4" />
      )}
      <div className="flex flex-col font-neu text-xl font-bold leading-none tracking-tight text-black">
        <span>{props.title}</span>
      </div>
    </header>
  );
}

function SidebarNav(props: { children: React.ReactNode }) {
  return <div className="space-y-4">{props.children}</div>;
}

function SidebarNavItem() {
  return (
    <Button variant="link" className="w-full">
      <Mail className="mr-2 h-4 w-4" /> click here yo
    </Button>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-10 flex h-12 w-full flex-row items-center justify-around border-t-2 border-black bg-acid",
        className
      )}
    >
      <Home size={25} fill="#FFA776" strokeWidth={3} />
      <Home size={25} />
      <Home size={25} />
      <Home size={25} />
    </nav>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between border-b-2 border-black bg-yellow py-4 px-4 lg:justify-end",
        className
      )}
    >
      <Button className="lg:hidden" variant="ghost" size="sm">
        <ChevronLeft />
      </Button>
      <span className="font-bold lg:hidden">Title of the page</span>
      <Button variant="ghost" size="sm">
        <Hearts />
      </Button>
    </header>
  );
}

function Hearts() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 font-neu text-3xl font-bold">
      <Heart fill="red" color="black" className="drop-shadow-neu-2" />
      <span>42</span>
    </div>
  );
}

function Card() {
  return (
    <article className="w-full bg-floralwhite p-8">
      <TypographyH1 className="font-neu">Article Title</TypographyH1>
      <TypographyH2>subtitle</TypographyH2>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        consequuntur quos voluptatum quas quidem. Quisquam, quae. Quisquam
      </TypographyP>
      <figure>
        <img className="rounded-md" src="https://placehold.co/600x400" />
        <figcaption>An elephant at sunset</figcaption>
      </figure>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        consequuntur quos voluptatum quas quidem. Quisquam, quae. Quisquam Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates,
        quod, quia, voluptatibus quae voluptatem quibusdam consequuntur quos
        voluptatum quas quidem. Quisquam, quae. Quisquam
      </TypographyP>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        consequuntur quos voluptatum quas quidem. Quisquam, quae. Quisquam Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates,
        quod, quia, voluptatibus quae voluptatem quibusdam consequuntur quos
        voluptatum quas quidem. Quisquam, quae. Quisquam
      </TypographyP>
    </article>
  );
}

function Comments() {
  return (
    <section className="bg-floralwhite">
      <div className="space-y-4 border-y-2 border-black bg-violet px-8 py-24">
        <h1 className="font-neu text-6xl font-bold">Comments section</h1>
        <Button variant="link" className="px-0">
          <Plus />
          <h2 className="flex items-center gap-2 text-xl text-eerie">
            Click here to add yours
          </h2>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((comment) => (
          <CommentCard key={comment} />
        ))}
      </div>
    </section>
  );
}

function CommentCard() {
  return (
    <div className="grid grid-cols-[3rem_1fr] grid-rows-[auto_1fr] gap-y-1 gap-x-4 border-b-2 border-black py-8 px-8">
      <Avatar className="row-span-2 aspect-square h-auto w-full border-2 border-black shadow-neu-2">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-row justify-start gap-2">
        <span className="font-semibold text-black">John Doe</span>
        <p className="leading-snug">·</p>
        <span className="text-liver">2 hours ago</span>
      </div>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae
      </span>
    </div>
  );
}
