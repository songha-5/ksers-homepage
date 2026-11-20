import {
  CalendarDays,
  ClipboardCheck,
  Stamp,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { ReactElement } from "react";
import { EVENT_STEPS } from "@/components/event/event-content";
import { EventStepCard } from "@/components/event/EventStepCard";
import type { EventStepId } from "@/components/event/event-model";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

const STEP_ICONS = {
  stamp: Stamp,
  desk: ClipboardCheck,
  drawing: CalendarDays,
  winner: Trophy,
} as const satisfies Record<EventStepId, LucideIcon>;

export function EventProcedure(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Application Procedure" />
      <ol className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[1100px]:grid-cols-4">
        {EVENT_STEPS.map((step) => (
          <EventStepCard
            key={step.id}
            label={step.label}
            text={step.text}
            note={step.note}
            icon={STEP_ICONS[step.id]}
          />
        ))}
      </ol>
    </div>
  );
}
