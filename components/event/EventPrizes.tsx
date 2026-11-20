import type { ReactElement } from "react";
import { EVENT_PRIZES } from "@/components/event/event-content";
import { EventPrizeCard } from "@/components/event/EventPrizeCard";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function EventPrizes(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Prizes" />
      <ul className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-3">
        {EVENT_PRIZES.map((prize) => (
          <EventPrizeCard key={prize.id} prize={prize} />
        ))}
      </ul>
    </div>
  );
}
