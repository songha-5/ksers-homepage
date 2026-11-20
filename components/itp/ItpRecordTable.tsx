import type { ReactElement, ReactNode } from "react";
import {
  SUBPAGE_TABLE_CELL_CLASS_NAME,
  SUBPAGE_TABLE_CLASS_NAME,
} from "@/components/subpage/subpage-table-styles";

export interface ItpTableRow {
  readonly id: string;
  readonly label: string;
  readonly align: "center" | "left";
  readonly children: ReactNode;
}

interface ItpRecordTableProps {
  readonly rows: readonly ItpTableRow[];
}

const LABEL_CLASS_NAME = `${SUBPAGE_TABLE_CELL_CLASS_NAME} w-[36%] font-bold text-[#263238]`;

const LEFT_VALUE_CLASS_NAME = `${SUBPAGE_TABLE_CELL_CLASS_NAME} text-left`;

export function ItpRecordTable({
  rows,
}: ItpRecordTableProps): ReactElement {
  return (
    <div className="mt-4 overflow-x-auto">
      <table
        className={`${SUBPAGE_TABLE_CLASS_NAME} min-w-[720px] border-t border-[#e4e4e4]`}
      >
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th scope="row" className={LABEL_CLASS_NAME}>
                {row.label}
              </th>
              <td className={valueClassName(row.align)}>{row.children}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function valueClassName(align: ItpTableRow["align"]): string {
  if (align === "left") {
    return LEFT_VALUE_CLASS_NAME;
  }

  return SUBPAGE_TABLE_CELL_CLASS_NAME;
}
