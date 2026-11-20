import type { ReactElement } from "react";
import { ItpApplicationProcess } from "@/components/itp/ItpApplicationProcess";
import { ItpKeyDates } from "@/components/itp/ItpKeyDates";
import { ItpOverview } from "@/components/itp/ItpOverview";
import { ITP_HEADING, ITP_LEAD } from "@/components/itp/itp-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function ItpDetails(): ReactElement {
  return (
    <SubpageFrame title={ITP_HEADING}>
      <p>{ITP_LEAD}</p>
      <ItpOverview />
      <ItpKeyDates />
      <ItpApplicationProcess />
    </SubpageFrame>
  );
}
