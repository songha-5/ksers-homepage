/**
 * Committee 탭 한 개의 화면 데이터다.
 * Supabase에서는 탭, 역할, 그룹, 위원 네 테이블을 sort_order로 이어 이 형태로 맞춘다.
 * layout이 simple이면 역할·이름·소속, grouped이면 역할·분야·이름·소속이다.
 * division이 null인 그룹은 역할 칸이 분야 칸까지 합쳐진다.
 */
export interface CommitteeMember {
  readonly id: string;
  readonly name: string;
  readonly affiliation: string;
}

export interface CommitteeGroup {
  readonly id: string;
  readonly division: string | null;
  readonly members: readonly CommitteeMember[];
}

export interface CommitteeBlock {
  readonly id: string;
  readonly role: string;
  readonly groups: readonly CommitteeGroup[];
}

export type CommitteeLayout = "simple" | "grouped";

export interface CommitteeTab {
  readonly id: string;
  readonly label: string;
  readonly layout: CommitteeLayout;
  readonly blocks: readonly CommitteeBlock[];
}

export function createMember(
  id: string,
  name: string,
  affiliation: string,
): CommitteeMember {
  return { id, name, affiliation };
}

export function createRoleBlock(
  id: string,
  role: string,
  members: readonly CommitteeMember[],
): CommitteeBlock {
  return {
    id,
    role,
    groups: [{ id: `${id}-group`, division: null, members }],
  };
}

export function createDivisionGroup(
  id: string,
  division: string,
  members: readonly CommitteeMember[],
): CommitteeGroup {
  return { id, division, members };
}

export function createGroupedBlock(
  id: string,
  role: string,
  groups: readonly CommitteeGroup[],
): CommitteeBlock {
  return { id, role, groups };
}
