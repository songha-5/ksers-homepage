import type { ReactElement } from "react";
import type { ProgramDay } from "@/components/program-glance/program-glance-model";

interface ProgramGlanceDayButtonProps {
  readonly day: ProgramDay;
  readonly isSelected: boolean;
  readonly onSelect: (dayId: string) => void;
}

const TAB_CLASS_NAME =
  "cursor-pointer border-r border-b border-[#e4e4e4] px-2 py-[10px] text-center text-sm font-bold";

const ACTIVE_TAB_CLASS_NAME = "bg-[#09428f] text-white";

const IDLE_TAB_CLASS_NAME =
  "bg-[#f2f4f5] text-[#263238] hover:bg-[#09428f] hover:text-white";

export function ProgramGlanceDayButton({
  day,
  isSelected,
  onSelect,
}: ProgramGlanceDayButtonProps): ReactElement {
  const toneClassName = isSelected
    ? ACTIVE_TAB_CLASS_NAME
    : IDLE_TAB_CLASS_NAME;

  return (
    <button
      type="button"
      role="tab"
      id={`glance-tab-${day.id}`}
      aria-selected={isSelected}
      aria-controls={`glance-panel-${day.id}`}
      className={`${TAB_CLASS_NAME} ${toneClassName}`}
      onClick={() => {
        onSelect(day.id);
      }}
    >
      {day.label}
    </button>
  );
}
