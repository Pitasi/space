import { Code } from "bright";

interface Props {
  className?: string;
}

export function WithCodeHighlight<T extends Props>(
  Comp: React.ComponentType<T>
) {
  return function WrappedWithCodeHighlighting(props: T) {
    const className = props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    const lang = matches?.groups?.lang || "";

    if (lang) {
      // @ts-expect-error Server Component
      return <Code lang={lang} {...props} />;
    }

    return <Comp {...props} />;
  };
}
