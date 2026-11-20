import { Medal } from "lucide-react";
import type { ReactElement } from "react";
import type { EventPrizeRankLabel } from "@/components/event/event-model";

interface EventPrizeRankProps {
  readonly rank: EventPrizeRankLabel;
}

const RANK_CLASS_NAMES = {
  "1st": "bg-[#fff6e5] text-[#a16207]",
  "2nd": "bg-[#f3f5f7] text-[#5f6b76]",
  "3rd": "bg-[#f8efe6] text-[#9a5b2f]",
} as const satisfies Record<EventPrizeRankLabel, string>;

const BADGE_CLASS_NAME =
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold";

export function EventPrizeRank({ rank }: EventPrizeRankProps): ReactElement {
  return (
    <span className={`${BADGE_CLASS_NAME} ${RANK_CLASS_NAMES[rank]}`}>
      <Medal aria-hidden className="h-4 w-4" strokeWidth={1.8} />
      {rank}
    </span>
  );
}
