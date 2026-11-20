import type { ReactElement } from "react";
import { SocialProgramDay } from "@/components/social-program/SocialProgramDay";
import { SOCIAL_PROGRAM_DAYS } from "@/components/social-program/social-program-content";

const SCHEDULE_CLASS_NAME = "flex flex-col gap-10 min-[1100px]:gap-8";

export function SocialProgramSchedule(): ReactElement {
  const lastDayIndex = SOCIAL_PROGRAM_DAYS.length - 1;

  return (
    <div className={SCHEDULE_CLASS_NAME}>
      {SOCIAL_PROGRAM_DAYS.map((day, index) => (
        <SocialProgramDay
          key={day.id}
          day={day}
          isFirstDay={index === 0}
          isLastDay={index === lastDayIndex}
        />
      ))}
    </div>
  );
}
