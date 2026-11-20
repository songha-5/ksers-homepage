import Image from "next/image";
import type { ReactElement } from "react";
import { EventProductIcon } from "@/components/event/EventProductIcon";
import type { EventPrizeId } from "@/components/event/event-model";
import goldPrizeImage from "@/images/prize_Pure_Gold_24K.png";

interface EventPrizeVisualProps {
  readonly prizeId: EventPrizeId;
}

export function EventPrizeVisual({
  prizeId,
}: EventPrizeVisualProps): ReactElement {
  if (prizeId === "gold") {
    return (
      <Image
        src={goldPrizeImage}
        alt="24K pure gold prize"
        width={goldPrizeImage.width}
        height={goldPrizeImage.height}
        unoptimized
        className="mx-auto h-40 w-auto"
      />
    );
  }

  return <EventProductIcon prizeId={prizeId} />;
}
