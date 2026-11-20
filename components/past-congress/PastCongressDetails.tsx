import type { ReactElement } from "react";
import { PAST_CONGRESS_HEADING } from "@/components/past-congress/past-congress-content";
import { PastCongressTable } from "@/components/past-congress/PastCongressTable";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function PastCongressDetails(): ReactElement {
  return (
    <SubpageFrame title={PAST_CONGRESS_HEADING}>
      <PastCongressTable />
    </SubpageFrame>
  );
}
