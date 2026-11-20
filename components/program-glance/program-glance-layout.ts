import type {
  ProgramRoom,
  ProgramSession,
  ProgramSlot,
} from "@/components/program-glance/program-glance-model";

/**
 * 세션 데이터를 HTML 표 칸으로 펼친다.
 * 세션은 시작 룸과 가로·세로로 덮는 칸 수만 가지고,
 * 표는 합쳐진 칸을 한 번만 그려야 해서 빈 칸과 건너뛸 칸을 여기서 계산한다.
 */

/** 헤더에서 연속된 같은 층을 하나로 묶은 칸. span이 colspan이다. */
export interface ProgramFloorGroup {
  readonly floor: string;
  readonly span: number;
  /** 이 층이 시작되는 룸 열. 헤더 key로 쓴다. */
  readonly startColumn: number;
}

/** 본문 칸. 세션이 있으면 session, 그 시간·룸이 비어 있으면 blank. */
export type ProgramTableCell =
  | { readonly kind: "session"; readonly session: ProgramSession }
  | { readonly kind: "blank"; readonly id: string };

/** 시간 한 줄. timeLabel은 왼쪽 시간, cells는 그 줄의 룸 칸들이다. */
export interface ProgramTableRow {
  readonly id: string;
  readonly timeLabel: string;
  readonly cells: readonly ProgramTableCell[];
}

/** 시간 한 줄을 배치한 결과. nextPending은 아래 줄이 건너뛸 칸 수다. */
interface LaidSlot {
  readonly cells: readonly ProgramTableCell[];
  readonly nextPending: readonly number[];
}

/** 룸 코드가 왼쪽에서 몇 번째 열인지 찾는다. */
function createRoomIndex(
  roomCodes: readonly string[],
): ReadonlyMap<string, number> {
  return new Map(roomCodes.map((code, index) => [code, index]));
}

/**
 * 룸 수만큼 0으로 채운다.
 * 각 숫자는 그 열이 위 세션의 rowSpan에 아직 몇 줄 덮여 있는지다.
 */
function createPending(roomCount: number): number[] {
  return Array.from({ length: roomCount }, () => 0);
}

/**
 * 한 시간 안의 세션을 왼쪽 룸부터 정렬한다.
 * 룸 목록에 없는 코드는 맨 뒤로 보내 열 계산을 막지 않는다.
 */
function compareSessions(
  roomIndex: ReadonlyMap<string, number>,
  left: ProgramSession,
  right: ProgramSession,
): number {
  const leftIndex = roomIndex.get(left.roomCode) ?? Number.MAX_SAFE_INTEGER;
  const rightIndex = roomIndex.get(right.roomCode) ?? Number.MAX_SAFE_INTEGER;
  return leftIndex - rightIndex;
}

/**
 * 세션이 덮는 열마다 아래 줄에서 건너뛸 횟수를 적는다.
 * rowSpan이 2이면 다음 한 줄만 건너뛰므로 1을 저장한다.
 */
function markRowSpan(
  pending: number[],
  column: number,
  session: ProgramSession,
): void {
  for (let offset = 0; offset < session.columnSpan; offset += 1) {
    const target = column + offset;
    if (target < pending.length) {
      pending[target] = session.rowSpan - 1;
    }
  }
}

/** 위 행이 이미 덮은 열은 칸을 만들지 않고, 남은 줄 수를 1 줄인다. */
function consumePending(
  column: number,
  pending: number,
  nextPending: number[],
): number {
  nextPending[column] = pending - 1;
  return column + 1;
}

/** 세션이 없는 열에 빈 칸을 넣는다. 열 수를 유지해야 표가 밀리지 않는다. */
function appendBlank(
  column: number,
  roomCodes: readonly string[],
  cells: ProgramTableCell[],
): number {
  const roomCode = roomCodes[column] ?? "unknown";
  cells.push({ kind: "blank", id: `blank-${column}-${roomCode}` });
  return column + 1;
}

/** 세션 칸을 하나 넣고, columnSpan만큼 옆 열을 건너뛴다. */
function placeSession(
  column: number,
  session: ProgramSession,
  cells: ProgramTableCell[],
  nextPending: number[],
): number {
  cells.push({ kind: "session", session });
  markRowSpan(nextPending, column, session);
  return column + session.columnSpan;
}

interface ColumnStepInput {
  readonly column: number;
  readonly pending: number;
  readonly session: ProgramSession | undefined;
  readonly sessionColumn: number | undefined;
  readonly roomCodes: readonly string[];
  readonly cells: ProgramTableCell[];
  readonly nextPending: number[];
}

/**
 * 지금 열에 칸을 어떻게 둘지 고른다.
 * 위 세션이 덮고 있으면 건너뛰고, 세션이 없으면 빈 칸, 여기서 시작하면 세션 칸이다.
 */
function stepColumn(input: ColumnStepInput): {
  readonly column: number;
  readonly consumedSession: boolean;
} {
  if (input.pending > 0) {
    return {
      column: consumePending(input.column, input.pending, input.nextPending),
      consumedSession: false,
    };
  }

  const startsLater =
    input.sessionColumn !== undefined && input.sessionColumn > input.column;
  if (!input.session || input.sessionColumn === undefined || startsLater) {
    return {
      column: appendBlank(input.column, input.roomCodes, input.cells),
      consumedSession: false,
    };
  }

  return {
    column: placeSession(
      input.column,
      input.session,
      input.cells,
      input.nextPending,
    ),
    consumedSession: true,
  };
}

/** 시간 한 줄을 왼쪽 룸부터 오른쪽 끝까지 칸으로 채운다. */
function layoutSlot(
  sessions: readonly ProgramSession[],
  pendingSpans: readonly number[],
  roomCodes: readonly string[],
): LaidSlot {
  const roomIndex = createRoomIndex(roomCodes);
  const nextPending = createPending(roomCodes.length);
  const cells: ProgramTableCell[] = [];
  const sorted = [...sessions].sort((left, right) =>
    compareSessions(roomIndex, left, right),
  );
  let sessionIndex = 0;
  let column = 0;

  while (column < roomCodes.length) {
    const session = sorted[sessionIndex];
    const step = stepColumn({
      column,
      pending: pendingSpans[column] ?? 0,
      session,
      sessionColumn: session ? roomIndex.get(session.roomCode) : undefined,
      roomCodes,
      cells,
      nextPending,
    });
    column = step.column;
    if (step.consumedSession) {
      sessionIndex += 1;
    }
  }

  return { cells, nextPending };
}

/**
 * 연속된 같은 floor를 헤더 한 칸으로 묶는다.
 * A–D가 2F이고 E가 3F이면 2F는 4칸, 3F는 1칸이다.
 */
export function groupRoomFloors(
  rooms: readonly ProgramRoom[],
): readonly ProgramFloorGroup[] {
  const groups: ProgramFloorGroup[] = [];

  for (const room of rooms) {
    const current = groups[groups.length - 1];
    if (current && current.floor === room.floor) {
      groups[groups.length - 1] = {
        floor: current.floor,
        span: current.span + 1,
        startColumn: current.startColumn,
      };
      continue;
    }
    const startColumn = current ? current.startColumn + current.span : 0;
    groups.push({ floor: room.floor, span: 1, startColumn });
  }

  return groups;
}

/**
 * 모든 시간 줄을 표 행으로 만든다.
 * 한 줄의 rowSpan 기록은 다음 시간 줄로 넘어가 그 칸을 다시 그리지 않게 한다.
 */
export function buildProgramRows(
  slots: readonly ProgramSlot[],
  rooms: readonly ProgramRoom[],
): readonly ProgramTableRow[] {
  const roomCodes = rooms.map((room) => room.code);
  let pendingSpans: readonly number[] = createPending(roomCodes.length);

  return slots.map((slot) => {
    const laid = layoutSlot(slot.sessions, pendingSpans, roomCodes);
    pendingSpans = laid.nextPending;
    return { id: slot.id, timeLabel: slot.timeLabel, cells: laid.cells };
  });
}
