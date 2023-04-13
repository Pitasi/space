import { ChevronLeft, Heart, Home, Mail } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "~/utils/tw";
import { Button } from "~/components/ui/button";
import { TypographyH1 } from "~/components/ui/typography/TypographyH1";
import { TypographyP } from "~/components/ui/typography/TypographyP";
import { TypographyH2 } from "~/components/ui/typography/TypographyH2";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Icon from "~/fixtures/logo_icon.png";

export default function NeuArticles() {
  return (
    <div className="h-screen overflow-hidden">
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
          <Sidebar className="hidden bg-seafoam lg:block">
            <SidebarHeader title="Blog" />
            <SidebarNav>
              <SidebarNavItem />
              <SidebarNavItem />
              <SidebarNavItem />
            </SidebarNav>
          </Sidebar>
        </div>

        <div className="overflow-auto p-4">
          <Header />
          <Navbar className="lg:hidden" />
          <Card />
          <Comments />
          <div className="h-20 lg:hidden" />
        </div>
      </div>
    </div>
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
        "w-full space-y-8 overflow-auto border-r border-liver p-4",
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
        "fixed bottom-0 left-0 flex h-20 w-full flex-row items-center justify-around border-t-2 border-black bg-seafoam",
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
        "flex w-full items-center justify-between pb-4 lg:justify-end lg:px-4",
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
    <div className="flex flex-row items-center gap-2 text-xl font-bold">
      <Heart fill="red" color="black" className="drop-shadow-neu-2" />
      <span>42</span>
    </div>
  );
}

function Card() {
  return (
    <article className="mb-8 w-full rounded-md border-2 border-black bg-floralwhite p-4 shadow-neu-2">
      <TypographyH1 variant="neubrutal">Article Title</TypographyH1>
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
    <section>
      <h1 className="mb-6 text-lg font-bold">Comments</h1>
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
    <div className="flex flex-col gap-4 rounded-md border-2 border-black bg-floralwhite p-4 shadow-neu-1">
      <div className="flex flex-row justify-start gap-2 text-liver">
        <User />
        <p className="leading-snug">·</p>
        <span>2 hours ago</span>
      </div>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae
      </span>
    </div>
  );
}

function User() {
  return (
    <div className="align-center flex flex-row items-center gap-2 text-black">
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.xpng" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span>John Doe</span>
    </div>
  );
}
