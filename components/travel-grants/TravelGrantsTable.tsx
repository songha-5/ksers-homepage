import type { ReactElement } from "react";
import {
  SUBPAGE_TABLE_CLASS_NAME,
  SUBPAGE_TABLE_HEADER_CLASS_NAME,
} from "@/components/subpage/subpage-table-styles";
import { TravelGrantsTableBody } from "@/components/travel-grants/TravelGrantsTableBody";
import { TRAVEL_GRANT_CATEGORY } from "@/components/travel-grants/travel-grants-content";

export function TravelGrantsTable(): ReactElement {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className={`${SUBPAGE_TABLE_CLASS_NAME} min-w-[720px]`}>
        <thead>
          <tr>
            <th className={SUBPAGE_TABLE_HEADER_CLASS_NAME} scope="col">
              Category
            </th>
            <th className={SUBPAGE_TABLE_HEADER_CLASS_NAME} scope="col">
              {TRAVEL_GRANT_CATEGORY}
            </th>
          </tr>
        </thead>
        <TravelGrantsTableBody />
      </table>
    </div>
  );
}
