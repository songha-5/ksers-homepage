const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
const CONGRESS_TIME_ZONE = "Asia/Seoul";

interface CalendarDate {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}

function readPart(
  parts: readonly Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
): number {
  const parsed = Number(parts.find((part) => part.type === type)?.value);
  if (!Number.isInteger(parsed)) {
    throw new Error(`서울 날짜를 읽지 못했습니다: ${type}`);
  }

  return parsed;
}

/** 서버와 브라우저가 같은 달력 날짜를 쓰도록 서울 기준이다. */
function readSeoulDate(today: Date): CalendarDate {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CONGRESS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(today);

  return {
    year: readPart(parts, "year"),
    month: readPart(parts, "month"),
    day: readPart(parts, "day"),
  };
}

function utcDay(year: number, month: number, day: number): number {
  return Date.UTC(year, month - 1, day);
}

function readTargetDate(targetDate: string): CalendarDate {
  const [year, month, day] = targetDate.split("-").map(Number);
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    throw new Error(`대회 시작일 형식이 올바르지 않습니다: ${targetDate}`);
  }

  return { year, month, day };
}

/** 서울의 오늘부터 targetDate(YYYY-MM-DD)까지 남은 일수. 당일은 0이다. */
export function getDaysUntil(targetDate: string, today = new Date()): number {
  const target = readTargetDate(targetDate);
  const current = readSeoulDate(today);

  return Math.round(
    (utcDay(target.year, target.month, target.day) -
      utcDay(current.year, current.month, current.day)) /
      MILLISECONDS_PER_DAY,
  );
}

/** 캡처와 같이 남은 일수는 음수로 보여 준다. */
export function formatRemainingDays(days: number): string {
  if (days > 0) {
    return `-${days}`;
  }
  return String(days);
}
