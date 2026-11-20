import type { ReactElement } from "react";
import { ProgramGlanceTabs } from "@/components/program-glance/ProgramGlanceTabs";
import type { ProgramGlancePage } from "@/components/program-glance/program-glance-model";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

interface ProgramGlanceDetailsProps {
  readonly page: ProgramGlancePage;
}

export function ProgramGlanceDetails({
  page,
}: ProgramGlanceDetailsProps): ReactElement {
  return (
    <SubpageFrame title={page.heading}>
      <p className="pb-5 text-center">{page.notice}</p>
      <ProgramGlanceTabs days={page.days} rooms={page.rooms} />
    </SubpageFrame>
  );
}
