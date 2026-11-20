import type { ReactElement } from "react";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

interface SimpleTableProps {
  readonly columns: readonly string[];
  readonly rows: readonly (readonly string[])[];
}

export function SimpleTable({
  columns,
  rows,
}: SimpleTableProps): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                renderCell(columns[index] ?? cell, cell, index === 0),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderCell(
  column: string,
  cell: string,
  isRowHeader: boolean,
): ReactElement {
  if (isRowHeader) {
    return (
      <th key={column} scope="row" className={SIMPLE_TABLE_HEADER_CLASS}>
        {cell}
      </th>
    );
  }

  return (
    <td key={column} className={SIMPLE_TABLE_CELL_CLASS}>
      {cell}
    </td>
  );
}
