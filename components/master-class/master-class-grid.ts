import type {
  MasterClassCell,
  MasterClassGridRow,
} from "@/components/master-class/master-class-model";

export function columnCell(
  id: string,
  lines: readonly string[],
  colSpan = 1,
): MasterClassCell {
  return { id, lines, colSpan, rowSpan: 1, tone: "column", align: "auto" };
}

export function rowCell(
  id: string,
  lines: readonly string[],
  rowSpan = 1,
): MasterClassCell {
  return { id, lines, colSpan: 1, rowSpan, tone: "row", align: "auto" };
}

export function bodyCell(
  id: string,
  lines: readonly string[],
  colSpan = 1,
  rowSpan = 1,
  align: MasterClassCell["align"] = "auto",
): MasterClassCell {
  return { id, lines, colSpan, rowSpan, tone: "body", align };
}

export function gridRow(
  id: string,
  cells: readonly MasterClassCell[],
): MasterClassGridRow {
  return { id, cells };
}

export function wideProgramRow(
  id: string,
  time: readonly string[],
  program: readonly string[],
): MasterClassGridRow {
  return gridRow(id, [
    rowCell(`${id}-time`, time),
    bodyCell(`${id}-program`, program, 3),
  ]);
}

export function timeProgramRow(
  id: string,
  time: readonly string[],
  program: readonly string[],
  timeRowSpan = 1,
): MasterClassGridRow {
  return gridRow(id, [
    rowCell(`${id}-time`, time, timeRowSpan),
    bodyCell(`${id}-program`, program, 1, 1, "left"),
  ]);
}
