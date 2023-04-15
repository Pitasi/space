export function TwoLinesNavItem(props: {
  children: [React.ReactNode, React.ReactNode];
}) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold">{props.children[0]}</span>
      <span className="opacity-60">{props.children[1]}</span>
    </div>
  );
}
