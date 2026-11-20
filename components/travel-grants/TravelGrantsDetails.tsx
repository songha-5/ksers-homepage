import type { ReactElement } from "react";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";
import { TravelGrantsTable } from "@/components/travel-grants/TravelGrantsTable";
import {
  TRAVEL_GRANT_LEAD,
  TRAVEL_GRANTS_HEADING,
} from "@/components/travel-grants/travel-grants-content";

export function TravelGrantsDetails(): ReactElement {
  return (
    <SubpageFrame title={TRAVEL_GRANTS_HEADING}>
      {/* 주석: 수정필요. 소개 문구는 DB 내용으로 교체한다. */}
      <p>{TRAVEL_GRANT_LEAD}</p>
      <TravelGrantsTable />
    </SubpageFrame>
  );
}
