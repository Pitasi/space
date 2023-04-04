export function Content(props: { title: string }) {
  return (
    <div className="prose py-8 px-8 dark:prose-invert md:prose-lg lg:prose-xl lg:py-12 lg:px-20">
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        condimentum, nisl ut aliquam aliquet, nunc nisl aliquet nisl, eget
        aliquet nisl nisl sit amet nunc. Nulla facilisi. Sed euismod, nisl
        euismod aliquam aliquet, nisl nisl aliquet nisl, eget aliquet nisl nisl
        sit amet nunc. Nulla facilisi. Sed euismod, nisl euismod aliquam
      </p>
    </div>
  );
}
