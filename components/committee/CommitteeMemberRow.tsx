import type { ReactElement } from "react";
import type { CommitteeTableRow } from "@/components/committee/committee-rows";

interface CommitteeMemberRowProps {
  readonly row: CommitteeTableRow;
}

const HEAD_CLASS_NAME =
  "border border-[#e4e4e4] px-[2px] py-[5px] text-center align-middle font-bold break-words text-[#263238] min-[768px]:bg-[#f5f7f8] min-[768px]:px-[10px] min-[768px]:py-[10px]";

const CELL_CLASS_NAME =
  "border border-[#e4e4e4] px-[2px] py-[5px] text-center align-middle break-words min-[768px]:px-[10px] min-[768px]:py-[10px]";

export function CommitteeMemberRow({
  row,
}: CommitteeMemberRowProps): ReactElement {
  return (
    <tr>
      {row.role ? (
        <th
          scope="row"
          rowSpan={row.role.rowSpan}
          colSpan={row.role.colSpan}
          className={HEAD_CLASS_NAME}
        >
          {row.role.label}
        </th>
      ) : null}
      {row.division ? (
        <th
          scope="row"
          rowSpan={row.division.rowSpan}
          colSpan={row.division.colSpan}
          className={HEAD_CLASS_NAME}
        >
          {row.division.label}
        </th>
      ) : null}
      <td className={CELL_CLASS_NAME}>{row.name}</td>
      <td className={CELL_CLASS_NAME}>{row.affiliation}</td>
    </tr>
  );
}
