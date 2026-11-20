import type { ReactElement } from "react";
import type { PresenterGuidelinesPairRow } from "@/components/presenter-guidelines/presenter-guidelines-model";
import {
  SUBPAGE_TABLE_CELL_CLASS_NAME,
  SUBPAGE_TABLE_CLASS_NAME,
} from "@/components/subpage/subpage-table-styles";

interface PresenterGuidelinesPairTableProps {
  readonly rows: readonly PresenterGuidelinesPairRow[];
}

const LABEL_CLASS_NAME = `${SUBPAGE_TABLE_CELL_CLASS_NAME} w-[40%] font-bold text-[#263238]`;

export function PresenterGuidelinesPairTable({
  rows,
}: PresenterGuidelinesPairTableProps): ReactElement {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className={`${SUBPAGE_TABLE_CLASS_NAME} min-w-[720px] border-t border-[#e4e4e4]`}>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th scope="row" className={LABEL_CLASS_NAME}>
                {row.label}
              </th>
              <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
