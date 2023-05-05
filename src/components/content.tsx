import { TypographyH1 } from "./ui/typography/TypographyH1";

export function Content(props: { title?: string; children?: React.ReactNode }) {
  return (
    <article className="w-full bg-floralwhite p-8">
      <div className="mx-auto max-w-2xl">
        {props.title ? (
          <TypographyH1 variant="neubrutal">{props.title}</TypographyH1>
        ) : null}
        {props.children}
      </div>
    </article>
  );
}
