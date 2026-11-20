import type { ReactElement } from "react";
import { RelatedEventCard } from "@/components/related-event/RelatedEventCard";
import {
  RELATED_EVENT_HEADING,
  RELATED_EVENTS,
} from "@/components/related-event/related-event-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function RelatedEventDetails(): ReactElement {
  return (
    <SubpageFrame title={RELATED_EVENT_HEADING}>
      <div className="flex flex-col gap-5">
        {RELATED_EVENTS.map((event) => (
          <RelatedEventCard key={event.id} event={event} />
        ))}
      </div>
    </SubpageFrame>
  );
}
