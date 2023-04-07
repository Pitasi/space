export function TwoLinesNavItem(props: {
  children: [React.ReactNode, React.ReactNode];
}) {
  return (
    <div className="flex flex-col">
      <span>{props.children[0]}</span>
      <span className="text-slate-400 dark:text-slate-500">
        {props.children[1]}
      </span>
    </div>
  );
}
