import { TypographyH1 } from "./ui/typography/TypographyH1";

export function Content(props: { title: string; children?: React.ReactNode }) {
  return (
    <article className="w-full bg-floralwhite p-8">
      <TypographyH1 className="font-neu">{props.title}</TypographyH1>
      {props.children}
    </article>
  );
}
