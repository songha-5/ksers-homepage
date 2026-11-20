import type {
  ProgramGlancePage,
  ProgramSession,
} from "@/components/program-glance/program-glance-model";
import {
  scientificSessionHref,
  type ScientificCategory,
  type ScientificSession,
} from "@/components/scientific-program/scientific-program-model";

function listSessions(
  categories: readonly ScientificCategory[],
): readonly ScientificSession[] {
  return categories.flatMap((category) => category.sessions);
}

function hashOf(href: string | null): string | null {
  if (!href) {
    return null;
  }
  const index = href.indexOf("#");
  if (index < 0 || index === href.length - 1) {
    return null;
  }
  return href.slice(index + 1);
}

function sessionIdForCell(
  cell: ProgramSession,
  sessions: readonly ScientificSession[],
): string | null {
  const existingHash = hashOf(cell.href);
  if (existingHash) {
    return existingHash;
  }

  const linked = sessions.find((session) => session.glanceId === cell.id);
  if (linked) {
    return linked.id;
  }

  const title = cell.title?.trim().toLowerCase();
  if (!title) {
    return null;
  }

  const byId = sessions.find((session) => session.id.toLowerCase() === title);
  if (byId) {
    return byId.id;
  }

  const byTitle = sessions.find((session) =>
    session.title.toLowerCase().includes(`[${title}]`),
  );
  return byTitle?.id ?? null;
}

function linkCell(
  cell: ProgramSession,
  sessions: readonly ScientificSession[],
): ProgramSession {
  const sessionId = sessionIdForCell(cell, sessions);
  if (!sessionId) {
    return cell;
  }

  return { ...cell, href: scientificSessionHref(sessionId) };
}

/** 시간표 칸을 같은 코드의 Scientific Program 세션 주소로 연결한다. */
export function linkGlanceToScientificSessions(
  page: ProgramGlancePage,
  categories: readonly ScientificCategory[],
): ProgramGlancePage {
  const sessions = listSessions(categories);
  return {
    ...page,
    days: page.days.map((day) => ({
      ...day,
      slots: day.slots.map((slot) => ({
        ...slot,
        sessions: slot.sessions.map((cell) => linkCell(cell, sessions)),
      })),
    })),
  };
}
