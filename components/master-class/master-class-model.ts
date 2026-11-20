export type MasterClassCellTone = "column" | "row" | "body";

export type MasterClassCellAlign = "auto" | "left" | "center";

export interface MasterClassCell {
  readonly id: string;
  readonly lines: readonly string[];
  readonly colSpan: number;
  readonly rowSpan: number;
  readonly tone: MasterClassCellTone;
  readonly align: MasterClassCellAlign;
}

export interface MasterClassGridRow {
  readonly id: string;
  readonly cells: readonly MasterClassCell[];
}

export interface MasterClassSchedule {
  readonly id: string;
  readonly title: string;
  readonly rows: readonly MasterClassGridRow[];
}

export type MasterClassFactEmphasis = "plain" | "danger";

interface MasterClassFactBase {
  readonly id: string;
  readonly label: string;
}

export type MasterClassFact =
  | (MasterClassFactBase & {
      readonly kind: "text";
      readonly text: string;
      readonly emphasis: MasterClassFactEmphasis;
    })
  | (MasterClassFactBase & {
      readonly kind: "lines";
      readonly lines: readonly string[];
    })
  | (MasterClassFactBase & { readonly kind: "submit"; readonly text: string });

export interface MasterClassCourse {
  readonly id: string;
  readonly title: string;
  readonly factsAlign: "center" | "left";
  readonly facts: readonly MasterClassFact[];
  readonly schedules: readonly MasterClassSchedule[];
}

export function textFact(
  id: string,
  label: string,
  text: string,
  emphasis: MasterClassFactEmphasis = "plain",
): MasterClassFact {
  return { id, kind: "text", label, text, emphasis };
}
