/**
 * 위원회 중첩 데이터를 표의 한 줄로 펼친다.
 * 위원 한 명이 한 행이고, 역할·분야 칸은 묶음의 첫 행에만 둔다.
 * 이어서 나오는 행의 role, division이 null이면 위 칸의 rowSpan에 포함된 자리다.
 */
import type {
  CommitteeBlock,
  CommitteeGroup,
  CommitteeLayout,
  CommitteeTab,
} from "@/components/committee/committee-model";

export interface CommitteeTableCell {
  readonly label: string;
  readonly rowSpan: number;
  readonly colSpan: number;
}

export interface CommitteeTableRow {
  readonly id: string;
  readonly role: CommitteeTableCell | null;
  readonly division: CommitteeTableCell | null;
  readonly name: string;
  readonly affiliation: string;
}

interface GroupRowOptions {
  readonly layout: CommitteeLayout;
  readonly block: CommitteeBlock;
  readonly group: CommitteeGroup;
  readonly roleRowSpan: number;
  readonly isFirstInBlock: boolean;
}

function countMembers(groups: readonly CommitteeGroup[]): number {
  let total = 0;
  for (const group of groups) {
    total += group.members.length;
  }
  return total;
}

/** 분야가 없는 grouped 역할은 분야 열까지 합친다. Chair, Secretary가 이 경우다. */
function roleColSpan(layout: CommitteeLayout, division: string | null): number {
  switch (layout) {
    case "simple":
      return 1;
    case "grouped":
      return division === null ? 2 : 1;
    default: {
      const unreachable: never = layout;
      return unreachable;
    }
  }
}

/** 역할 칸은 그 역할의 첫 위원 행에만 만들고, 높이는 소속 위원 수다. */
function roleCell(
  options: GroupRowOptions,
  isFirstRow: boolean,
): CommitteeTableCell | null {
  if (!isFirstRow) {
    return null;
  }

  return {
    label: options.block.role,
    rowSpan: options.roleRowSpan,
    colSpan: roleColSpan(options.layout, options.group.division),
  };
}

/** 분야 칸은 그 분야의 첫 위원 행에만 만든다. 분야가 없으면 역할 칸이 대신한다. */
function divisionCell(
  group: CommitteeGroup,
  isFirstInGroup: boolean,
): CommitteeTableCell | null {
  if (!isFirstInGroup || group.division === null) {
    return null;
  }

  return {
    label: group.division,
    rowSpan: group.members.length,
    colSpan: 1,
  };
}

function buildGroupRows(options: GroupRowOptions): CommitteeTableRow[] {
  const rows: CommitteeTableRow[] = [];
  let isFirstRow = options.isFirstInBlock;
  let isFirstInGroup = true;

  for (const member of options.group.members) {
    rows.push({
      id: member.id,
      role: roleCell(options, isFirstRow),
      division: divisionCell(options.group, isFirstInGroup),
      name: member.name,
      affiliation: member.affiliation,
    });
    isFirstRow = false;
    isFirstInGroup = false;
  }

  return rows;
}

function buildBlockRows(
  layout: CommitteeLayout,
  block: CommitteeBlock,
): readonly CommitteeTableRow[] {
  const roleRowSpan = countMembers(block.groups);
  const rows: CommitteeTableRow[] = [];
  let isFirstInBlock = true;

  for (const group of block.groups) {
    rows.push(
      ...buildGroupRows({
        layout,
        block,
        group,
        roleRowSpan,
        isFirstInBlock,
      }),
    );
    if (group.members.length > 0) {
      isFirstInBlock = false;
    }
  }

  return rows;
}

/** 선택한 탭의 역할 묶음을 위에서부터 표 행으로 만든다. */
export function buildCommitteeRows(
  tab: CommitteeTab,
): readonly CommitteeTableRow[] {
  const rows: CommitteeTableRow[] = [];
  for (const block of tab.blocks) {
    rows.push(...buildBlockRows(tab.layout, block));
  }
  return rows;
}
