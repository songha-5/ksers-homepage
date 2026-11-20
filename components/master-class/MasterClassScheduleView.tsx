import type { ReactElement } from "react";
import { MasterClassGrid } from "@/components/master-class/MasterClassGrid";
import type { MasterClassSchedule } from "@/components/master-class/master-class-model";

interface MasterClassScheduleViewProps {
  readonly schedule: MasterClassSchedule;
}

const TITLE_CLASS_NAME =
  "mt-8 mb-4 font-(family-name:--font-roboto) text-lg leading-[1.4] font-bold text-[#263238]";

export function MasterClassScheduleView({
  schedule,
}: MasterClassScheduleViewProps): ReactElement {
  return (
    <div>
      <h3 className={TITLE_CLASS_NAME}>{schedule.title}</h3>
      <MasterClassGrid rows={schedule.rows} />
    </div>
  );
}
