import type { ReactElement } from "react";
import { PAST_CONGRESSES } from "@/components/past-congress/past-congress-content";
import { PastCongressRow } from "@/components/past-congress/PastCongressRow";
import {
  SUBPAGE_TABLE_CLASS_NAME,
  SUBPAGE_TABLE_HEADER_CLASS_NAME,
} from "@/components/subpage/subpage-table-styles";

const COLUMNS = [
  { id: "congress", label: "Congress", widthClassName: "w-[28%]" },
  { id: "date", label: "Date", widthClassName: "w-[16%]" },
  { id: "venue", label: "Venue", widthClassName: "w-[18%]" },
  { id: "theme", label: "Theme", widthClassName: "w-[24%]" },
  { id: "homepage", label: "Homepage", widthClassName: "w-[14%]" },
] as const;

export function PastCongressTable(): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className={`${SUBPAGE_TABLE_CLASS_NAME} min-w-[880px]`}>
        <colgroup>
          {COLUMNS.map((column) => (
            <col key={column.id} className={column.widthClassName} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <th
                key={column.id}
                scope="col"
                className={SUBPAGE_TABLE_HEADER_CLASS_NAME}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PAST_CONGRESSES.map((entry) => (
            <PastCongressRow key={entry.id} entry={entry} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
