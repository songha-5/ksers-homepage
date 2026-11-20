import Image from "next/image";
import type { ReactElement } from "react";
import visualSub from "@/images/visual_sub01.png";

export function SubpageVisual(): ReactElement {
  return (
    <div className="w-full shrink-0 bg-white">
      <Image
        src={visualSub}
        alt=""
        width={visualSub.width}
        height={visualSub.height}
        unoptimized
        loading="eager"
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
