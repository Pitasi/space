import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyP,
  TypographyPre,
  TypographySmall,
  TypographySubtle,
} from "~/components/ui/typography";

const components = {
  blockquote: TypographyBlockquote,
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  small: TypographySmall,
  pre: TypographyPre,
  code: TypographyInlineCode,

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
          },
        }}
        source={props.content}
        components={components}
      />
    </>
  );
}
