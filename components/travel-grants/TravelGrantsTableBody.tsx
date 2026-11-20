import type { ReactElement } from "react";
import { SUBPAGE_TABLE_CELL_CLASS_NAME } from "@/components/subpage/subpage-table-styles";
import { TravelGrantsEligibility } from "@/components/travel-grants/TravelGrantsEligibility";
import {
  TRAVEL_GRANT_AMOUNT,
  TRAVEL_GRANT_NOTIFICATION,
} from "@/components/travel-grants/travel-grants-content";

const LABEL_CLASS_NAME = `${SUBPAGE_TABLE_CELL_CLASS_NAME} w-[22%] font-bold text-[#263238]`;

export function TravelGrantsTableBody(): ReactElement {
  return (
    <tbody>
      <tr>
        <th className={LABEL_CLASS_NAME} scope="row">
          Eligibility
        </th>
        <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>
          <TravelGrantsEligibility />
        </td>
      </tr>
      <tr>
        <th className={LABEL_CLASS_NAME} scope="row">
          Amount
        </th>
        <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>{TRAVEL_GRANT_AMOUNT}</td>
      </tr>
      <tr>
        <th className={LABEL_CLASS_NAME} scope="row">
          Notification
        </th>
        <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>
          {TRAVEL_GRANT_NOTIFICATION}
        </td>
      </tr>
    </tbody>
  );
}
