import type { ReactElement } from "react";
import { SocialProgramEvent } from "@/components/social-program/SocialProgramEvent";
import type { SocialProgramDay as SocialProgramDayItem } from "@/components/social-program/social-program-content";

interface SocialProgramDayProps {
  readonly day: SocialProgramDayItem;
  readonly isFirstDay: boolean;
  readonly isLastDay: boolean;
}

const DATE_CLASS_NAME =
  "mb-5 border-b border-[#e4e4e4] pb-2 font-(family-name:--font-roboto) text-lg font-bold text-[#09428f] min-[1100px]:hidden";

export function SocialProgramDay({
  day,
  isFirstDay,
  isLastDay,
}: SocialProgramDayProps): ReactElement {
  const lastEventIndex = day.events.length - 1;

  return (
    <section>
      <h2 className={DATE_CLASS_NAME}>
        {day.date} ({day.weekday})
      </h2>
      <div className="flex flex-col gap-8">
        {day.events.map((event, index) => (
          <SocialProgramEvent
            key={event.id}
            event={event}
            date={index === 0 ? day.date : null}
            weekday={index === 0 ? day.weekday : null}
            showLineAbove={!(isFirstDay && index === 0)}
            showLineBelow={!(isLastDay && index === lastEventIndex)}
          />
        ))}
      </div>
    </section>
  );
}
