import type { ReactElement } from "react";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

interface RegistrationPairRow {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

interface RegistrationPairTableProps {
  readonly rows: readonly RegistrationPairRow[];
}

export function RegistrationPairTable({
  rows,
}: RegistrationPairTableProps): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th
                scope="row"
                className={`${SIMPLE_TABLE_HEADER_CLASS} w-[32%]`}
              >
                {row.label}
              </th>
              <td className={SIMPLE_TABLE_CELL_CLASS}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
