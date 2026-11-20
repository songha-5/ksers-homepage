import type { ReactElement } from "react";
import { CommitteeTabs } from "@/components/committee/CommitteeTabs";
import {
  COMMITTEE_HEADING,
  COMMITTEE_TABS,
} from "@/components/committee/committee-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function CommitteeDetails(): ReactElement {
  return (
    <SubpageFrame title={COMMITTEE_HEADING}>
      <CommitteeTabs tabs={COMMITTEE_TABS} />
    </SubpageFrame>
  );
}
