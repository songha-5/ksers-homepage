import type { ReactElement } from "react";

interface SocialProgramTimelineProps {
  readonly date: string | null;
  readonly weekday: string | null;
}

const MARK_CLASS_NAME =
  "absolute top-[13px] left-[5px] z-10 size-2.5 -translate-x-1/2 rounded-full border-2 border-[#09428f] bg-white";

export function SocialProgramTimeline({
  date,
  weekday,
}: SocialProgramTimelineProps): ReactElement {
  return (
    <div className="relative hidden min-h-6 pl-6 min-[1100px]:block">
      <span className={MARK_CLASS_NAME} />
      {renderDate(date, weekday)}
    </div>
  );
}

function renderDate(
  date: string | null,
  weekday: string | null,
): ReactElement | null {
  if (!date || !weekday) {
    return null;
  }

  return (
    <p className="text-sm leading-tight">
      <span className="block font-bold text-[#09428f]">{date}</span>
      <span className="mt-1 block text-xs text-[#595959]">{weekday}</span>
    </p>
  );
}
