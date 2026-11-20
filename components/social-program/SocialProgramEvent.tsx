import type { ReactElement } from "react";
import { SocialProgramEventMeta } from "@/components/social-program/SocialProgramEventMeta";
import { SocialProgramPhoto } from "@/components/social-program/SocialProgramPhoto";
import { SocialProgramTimeline } from "@/components/social-program/SocialProgramTimeline";
import { SocialProgramTimelineLines } from "@/components/social-program/SocialProgramTimelineLines";
import type { SocialProgramEvent as SocialProgramEventItem } from "@/components/social-program/social-program-content";

interface SocialProgramEventProps {
  readonly event: SocialProgramEventItem;
  readonly date: string | null;
  readonly weekday: string | null;
  readonly showLineAbove: boolean;
  readonly showLineBelow: boolean;
}

const ROW_CLASS_NAME =
  "relative grid grid-cols-1 items-center gap-4 min-[768px]:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] min-[768px]:gap-6 min-[1100px]:grid-cols-[132px_minmax(0,1fr)_300px] min-[1100px]:items-start min-[1100px]:gap-8";

const TITLE_CLASS_NAME =
  "text-base leading-snug font-bold text-[#263238] min-[1100px]:text-lg";

export function SocialProgramEvent({
  event,
  date,
  weekday,
  showLineAbove,
  showLineBelow,
}: SocialProgramEventProps): ReactElement {
  return (
    <article className={ROW_CLASS_NAME}>
      <SocialProgramTimelineLines
        showLineAbove={showLineAbove}
        showLineBelow={showLineBelow}
      />
      <SocialProgramTimeline date={date} weekday={weekday} />
      <div>
        <h3 className={TITLE_CLASS_NAME}>{event.title}</h3>
        {renderNote(event.note)}
        <SocialProgramEventMeta event={event} />
      </div>
      <SocialProgramPhoto imageId={event.imageId} alt={event.imageAlt} />
    </article>
  );
}

function renderNote(note: string | null): ReactElement | null {
  if (!note) {
    return null;
  }

  return <p className="mt-1 text-[#09428f]">{note}</p>;
}
