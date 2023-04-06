export function Content(props: { title: string; children?: React.ReactNode }) {
  return (
    <div className="prose py-8 px-8 dark:prose-invert md:prose-lg lg:prose-xl lg:py-12 lg:px-20">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
