import type { ReactElement, ReactNode } from "react";
import {
  SUBPAGE_TABLE_CELL_CLASS_NAME,
  SUBPAGE_TABLE_CLASS_NAME,
  SUBPAGE_TABLE_HEADER_CLASS_NAME,
} from "@/components/subpage/subpage-table-styles";

interface ResearchGrantTableHeader {
  readonly label: string;
  readonly value: string;
}

interface ResearchGrantTableRow {
  readonly id: string;
  readonly label: string;
  readonly children: ReactNode;
}

interface ResearchGrantRecordTableProps {
  readonly header?: ResearchGrantTableHeader;
  readonly rows: readonly ResearchGrantTableRow[];
  readonly labelWidthClassName: string;
}

const LABEL_TEXT_CLASS_NAME = "font-bold text-[#263238]";

export function ResearchGrantRecordTable({
  header,
  rows,
  labelWidthClassName,
}: ResearchGrantRecordTableProps): ReactElement {
  const labelClassName = `${SUBPAGE_TABLE_CELL_CLASS_NAME} ${labelWidthClassName} ${LABEL_TEXT_CLASS_NAME}`;

  return (
    <div className="overflow-x-auto">
      <table className={`${SUBPAGE_TABLE_CLASS_NAME} min-w-[720px]`}>
        {renderHeader(header)}
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th className={labelClassName} scope="row">
                {row.label}
              </th>
              <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>{row.children}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderHeader(
  header: ResearchGrantTableHeader | undefined,
): ReactElement | null {
  if (!header) {
    return null;
  }

  return (
    <thead>
      <tr>
        <th className={SUBPAGE_TABLE_HEADER_CLASS_NAME} scope="col">
          {header.label}
        </th>
        <th className={SUBPAGE_TABLE_HEADER_CLASS_NAME} scope="col">
          {header.value}
        </th>
      </tr>
    </thead>
  );
}
