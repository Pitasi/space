import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  TypographyA,
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyHr,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyLink,
  TypographyList,
  TypographyP,
  TypographyPre,
  TypographySmall,
  TypographySubtle,
} from "~/components/ui/typography";
import rehypeHighlight from "rehype-highlight";
import { EscapeAnchor } from "./link";

const components = {
  a: EscapeAnchor(TypographyA, TypographyLink),
  blockquote: TypographyBlockquote,
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  small: TypographySmall,
  ul: TypographyList,
  pre: TypographyPre,
  code: TypographyInlineCode,
  hr: TypographyHr,

  Large: TypographyLarge,
  Lead: TypographyLead,
  Subtle: TypographySubtle,
} as MDXRemoteProps["components"];

export function MDX(props: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
        source={props.content}
        components={components}
      />
    </>
  );
}
