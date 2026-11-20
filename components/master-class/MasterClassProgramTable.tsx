import type { ReactElement } from "react";
import {
  MASTER_CLASS_PROGRAM_COLUMNS,
  MASTER_CLASS_PROGRAM_ROWS,
  type MasterClassProgramRow,
} from "@/components/master-class/master-class-content";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

const PROGRAM_LINK_CLASS_NAME = "font-bold text-primary underline";

const NOTE_CLASS_NAME = "font-bold text-danger";

export function MasterClassProgramTable(): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr>
            {MASTER_CLASS_PROGRAM_COLUMNS.map((column) => (
              <th key={column} scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MASTER_CLASS_PROGRAM_ROWS.map((row) => (
            <tr key={row.id}>{renderRow(row)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderRow(row: MasterClassProgramRow): readonly ReactElement[] {
  return [
    renderHeaderCell(row.id, row.number),
    renderProgramCell(row),
    renderBodyCell(`${row.id}-venue`, row.venue),
    renderBodyCell(`${row.id}-fee`, row.fee),
    renderBodyCell(`${row.id}-limit`, row.limit),
    renderNoteCell(row),
  ];
}

function renderHeaderCell(id: string, value: string): ReactElement {
  return (
    <th key={`${id}-number`} scope="row" className={SIMPLE_TABLE_HEADER_CLASS}>
      {value}
    </th>
  );
}

function renderProgramCell(row: MasterClassProgramRow): ReactElement {
  return (
    <td key={`${row.id}-program`} className={SIMPLE_TABLE_CELL_CLASS}>
      <a href={`#${row.id}`} className={PROGRAM_LINK_CLASS_NAME}>
        {row.program}
      </a>
    </td>
  );
}

function renderBodyCell(id: string, value: string): ReactElement {
  return (
    <td key={id} className={SIMPLE_TABLE_CELL_CLASS}>
      {value}
    </td>
  );
}

function renderNoteCell(row: MasterClassProgramRow): ReactElement {
  return (
    <td key={`${row.id}-note`} className={SIMPLE_TABLE_CELL_CLASS}>
      {row.note ? <strong className={NOTE_CLASS_NAME}>{row.note}</strong> : null}
    </td>
  );
}
