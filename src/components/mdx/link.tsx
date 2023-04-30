interface Props {
  href?: string;
}

export function EscapeAnchor<T extends Props>(
  AnchorComp: React.ComponentType<T>,
  LinkComp: React.ComponentType<T>
) {
  return function WrapEscapeAnchor(props: T) {
    if (props.href?.startsWith("#")) {
      return <AnchorComp {...props} />;
    }
    return <LinkComp {...props} />;
  };
}
