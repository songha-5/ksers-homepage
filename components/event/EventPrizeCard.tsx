import type { ReactElement } from "react";
import type { EventPrize } from "@/components/event/event-model";
import { EventPrizeRank } from "@/components/event/EventPrizeRank";
import { EventPrizeVisual } from "@/components/event/EventPrizeVisual";

interface EventPrizeCardProps {
  readonly prize: EventPrize;
}

const CARD_CLASS_NAME =
  "flex flex-col items-center gap-3 border border-[#e4e4e4] bg-white px-4 py-5 text-center";

export function EventPrizeCard({ prize }: EventPrizeCardProps): ReactElement {
  return (
    <li className={CARD_CLASS_NAME}>
      <EventPrizeRank rank={prize.rank} />
      <EventPrizeVisual prizeId={prize.id} />
      <p className="leading-snug text-[#263238]">
        {prize.captions.map((caption) => (
          <span key={caption.name} className="block">
            {caption.name}{" "}
            <span className="font-bold text-[#09428f]">{caption.quantity}</span>
          </span>
        ))}
      </p>
    </li>
  );
}
