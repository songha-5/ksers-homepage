"use client";

import { useState, type ReactElement } from "react";
import { ProgramGlanceDayButton } from "@/components/program-glance/ProgramGlanceDayButton";
import { ProgramGlanceTable } from "@/components/program-glance/ProgramGlanceTable";
import type {
  ProgramDay,
  ProgramRoom,
} from "@/components/program-glance/program-glance-model";

interface ProgramGlanceTabsProps {
  readonly days: readonly ProgramDay[];
  readonly rooms: readonly ProgramRoom[];
}

export function ProgramGlanceTabs({
  days,
  rooms,
}: ProgramGlanceTabsProps): ReactElement | null {
  const [activeDayId, setActiveDayId] = useState(days[0]?.id ?? "");
  const activeDay = days.find((day) => day.id === activeDayId) ?? days[0];

  if (!activeDay) {
    return null;
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Program days"
        className="grid grid-cols-1 border-t border-l border-[#e4e4e4] min-[768px]:grid-cols-3"
      >
        {days.map((day) => (
          <ProgramGlanceDayButton
            key={day.id}
            day={day}
            isSelected={day.id === activeDay.id}
            onSelect={setActiveDayId}
          />
        ))}
      </div>
      <div
        role="tabpanel"
        id={`glance-panel-${activeDay.id}`}
        aria-labelledby={`glance-tab-${activeDay.id}`}
        className="mt-5"
      >
        <ProgramGlanceTable day={activeDay} rooms={rooms} />
      </div>
    </div>
  );
}
