export function SquircleClip(props: { children: React.ReactNode }) {
  return (
    <div className="w-max" style={{ clipPath: "url(#squircleClip)" }}>
      {props.children}
    </div>
  );
}
