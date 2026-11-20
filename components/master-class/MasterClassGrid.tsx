import type { ReactElement } from "react";
import type {
  MasterClassCell,
  MasterClassGridRow,
} from "@/components/master-class/master-class-model";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_CELL_LEFT_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

interface MasterClassGridProps {
  readonly rows: readonly MasterClassGridRow[];
}

export function MasterClassGrid({
  rows,
}: MasterClassGridProps): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell) => renderGridCell(cell))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderGridCell(cell: MasterClassCell): ReactElement {
  const className = cellClassName(cell);
  const content = renderLines(cell);

  if (cell.tone === "body") {
    return (
      <td
        key={cell.id}
        className={className}
        colSpan={spanValue(cell.colSpan)}
        rowSpan={spanValue(cell.rowSpan)}
      >
        {content}
      </td>
    );
  }

  return (
    <th
      key={cell.id}
      scope={cell.tone === "row" ? "row" : "col"}
      className={className}
      colSpan={spanValue(cell.colSpan)}
      rowSpan={spanValue(cell.rowSpan)}
    >
      {content}
    </th>
  );
}

function renderLines(cell: MasterClassCell): ReactElement {
  if (cell.lines.length === 0) {
    return <span>{"\u00a0"}</span>;
  }

  return (
    <>
      {cell.lines.map((line) => (
        <span key={`${cell.id}-${line}`} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

function cellClassName(cell: MasterClassCell): string {
  if (cell.tone !== "body") {
    return SIMPLE_TABLE_HEADER_CLASS;
  }

  if (usesLeftAlign(cell)) {
    return SIMPLE_TABLE_CELL_LEFT_CLASS;
  }

  return SIMPLE_TABLE_CELL_CLASS;
}

function usesLeftAlign(cell: MasterClassCell): boolean {
  if (cell.align === "left") {
    return true;
  }

  return cell.align === "auto" && cell.lines.length > 1;
}

function spanValue(span: number): number | undefined {
  if (span > 1) {
    return span;
  }

  return undefined;
}
