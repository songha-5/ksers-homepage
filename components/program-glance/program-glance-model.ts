/**
 * Program at a Glance 화면 데이터다.
 * 층, 룸 이름, 시간 문구는 고정값이 아니라 입력값이다.
 * sort_order가 클수록 아래 행에 쌓인다.
 * 세션의 roomCode는 시작 룸이고, columnSpan·rowSpan만큼 옆 룸과 다음 시간을 덮는다.
 * content의 href가 있으면 그 글자가 링크가 된다. href는 입력된 주소 그대로 쓴다.
 */

export const PROGRAM_SESSION_COLORS = [
  "gray",
  "light-green",
  "purple",
  "light-blue",
  "green",
  "red",
  "orange",
  "indigo",
  "pink",
  "dark-yellow",
  "mint",
  "blue",
  "none",
] as const;

export type ProgramSessionColor = (typeof PROGRAM_SESSION_COLORS)[number];

export interface ProgramRoom {
  readonly code: string;
  readonly floor: string;
  readonly label: string;
  readonly venueName: string | null;
}

export interface ProgramSession {
  readonly id: string;
  readonly roomCode: string;
  readonly columnSpan: number;
  readonly rowSpan: number;
  readonly title: string | null;
  readonly content: string | null;
  readonly topic: string | null;
  readonly href: string | null;
  readonly label: string | null;
  readonly color: ProgramSessionColor;
}

export interface ProgramSlot {
  readonly id: string;
  readonly timeLabel: string;
  readonly sessions: readonly ProgramSession[];
}

export interface ProgramDay {
  readonly id: string;
  readonly label: string;
  readonly slots: readonly ProgramSlot[];
}

export interface ProgramGlancePage {
  readonly heading: string;
  readonly notice: string;
  readonly rooms: readonly ProgramRoom[];
  readonly days: readonly ProgramDay[];
}

interface ProgramSessionInput {
  readonly id: string;
  readonly roomCode: string;
  readonly columnSpan?: number;
  readonly rowSpan?: number;
  readonly color?: ProgramSessionColor;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly topic?: string | null;
  readonly href?: string | null;
  readonly label?: string | null;
}

export function createSession(input: ProgramSessionInput): ProgramSession {
  return {
    id: input.id,
    roomCode: input.roomCode,
    columnSpan: input.columnSpan ?? 1,
    rowSpan: input.rowSpan ?? 1,
    color: input.color ?? "none",
    title: input.title ?? null,
    content: input.content ?? null,
    topic: input.topic ?? null,
    href: input.href ?? null,
    label: input.label ?? null,
  };
}

export function createSlot(
  id: string,
  timeLabel: string,
  sessions: readonly ProgramSession[],
): ProgramSlot {
  return { id, timeLabel, sessions };
}
