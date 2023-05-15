import { Content } from "~/components/content";
import { Header } from "~/components/header/header";
import { Main } from "~/components/main";
import { TypographyH2, TypographyP } from "~/components/ui/typography";

export default function LoadingArticle() {
  return (
    <Main>
      {/* @ts-expect-error Server Component */}
      <Header title="Loading..." backHref="/articles" />

      <Content title="Loading...">
        <TypographyH2>Spinner vs skeletons</TypographyH2>
        <TypographyP>
          Instead of a spinner, I&apos;m writing this content to keep you busy
          while my server is running an expensive database query.
        </TypographyP>
      </Content>
    </Main>
  );
}
