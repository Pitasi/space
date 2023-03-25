import Image from "next/image";
import { SquircleClip } from "~/components/Squircle";
export default function AppIcon(props: {
  logoUrl: string | null;
  title: string;
}) {
  if (props.logoUrl === null) {
    return <div>{props.title[0]}</div>;
  }

  return (
    <SquircleClip>
      <div className="h-24 w-24 overflow-hidden bg-slate-800 p-2">
        <div className="relative h-full">
          <Image
            src={props.logoUrl}
            alt={props.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SquircleClip>
  );
}
