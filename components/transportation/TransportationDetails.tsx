import type { ReactElement } from "react";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";
import { TRANSPORTATION_HEADING } from "@/components/transportation/transportation-content";
import { TransportationTabs } from "@/components/transportation/TransportationTabs";

export function TransportationDetails(): ReactElement {
  return (
    <SubpageFrame title={TRANSPORTATION_HEADING}>
      <TransportationTabs />
    </SubpageFrame>
  );
}
