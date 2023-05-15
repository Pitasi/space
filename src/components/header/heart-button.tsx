"use client";

import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function HeartButton({
  count,
  isHearted,
  onHeart,
  onUnheart,
}: {
  isHearted: () => Promise<boolean>;
  onHeart: () => Promise<void>;
  onUnheart: () => Promise<void>;
  count: number;
}) {
  const [hearted, setHearted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isHearted()
      .then((h) => {
        setLoading(true);
        setHearted(h);
        setLoading(false);
      })
      .catch((e) => console.error("cannot fetch heart state", e));
  }, [isHearted]);

  const onClick = async () => {
    setLoading(true);
    if (hearted) {
      try {
        await onUnheart();
        setHearted(false);
      } catch (e) {
        console.error("setting heart to false:", e);
        setHearted(true);
      }
    } else {
      try {
        await onHeart();
        setHearted(true);
      } catch (e) {
        console.error("setting heart to true:", e);
        setHearted(false);
      }
    }
    setLoading(false);
  };

  return (
    <Button disabled={loading} variant="ghost" size="sm" onClick={onClick}>
      <Hearts hearted={hearted} count={count} />
    </Button>
  );
}

function Hearts(props: { hearted: boolean; count: number }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 font-neu text-3xl font-bold">
      <Heart
        fill={props.hearted ? "red" : "white"}
        color="black"
        className="drop-shadow-neu-2"
      />
      <span>{props.count}</span>
    </div>
  );
}
