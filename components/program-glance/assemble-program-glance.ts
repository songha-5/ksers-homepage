import { LOCAL_PROGRAM_GLANCE } from "@/components/program-glance/program-glance-content";
import type {
  ProgramDay,
  ProgramGlancePage,
  ProgramRoom,
  ProgramSession,
  ProgramSlot,
} from "@/components/program-glance/program-glance-model";
import type {
  ProgramDayRow,
  ProgramRoomRow,
  ProgramSessionRow,
  ProgramSlotRow,
} from "@/components/program-glance/program-glance-schema";

interface GlanceRows {
  readonly rooms: readonly ProgramRoomRow[];
  readonly days: readonly ProgramDayRow[];
  readonly slots: readonly ProgramSlotRow[];
  readonly sessions: readonly ProgramSessionRow[];
}

function bySortOrder<TItem extends { readonly sort_order: number }>(
  left: TItem,
  right: TItem,
): number {
  return left.sort_order - right.sort_order;
}

function groupByKey<TItem>(
  items: readonly TItem[],
  readKey: (item: TItem) => string,
): ReadonlyMap<string, readonly TItem[]> {
  const groups = new Map<string, TItem[]>();
  for (const item of items) {
    const key = readKey(item);
    const group = groups.get(key);
    if (group) {
      group.push(item);
      continue;
    }
    groups.set(key, [item]);
  }
  return groups;
}

function mapRoom(row: ProgramRoomRow): ProgramRoom {
  return {
    code: row.code,
    floor: row.floor,
    label: row.label,
    venueName: row.venue_name,
  };
}

function mapSession(row: ProgramSessionRow): ProgramSession {
  return {
    id: row.id,
    roomCode: row.room_code,
    columnSpan: row.column_span,
    rowSpan: row.row_span,
    title: row.title,
    content: row.content,
    topic: row.topic,
    href: row.href,
    label: row.label,
    color: row.color,
  };
}

function mapSlot(
  row: ProgramSlotRow,
  sessionsBySlot: ReadonlyMap<string, readonly ProgramSessionRow[]>,
): ProgramSlot {
  const sessions = [...(sessionsBySlot.get(row.id) ?? [])]
    .sort(bySortOrder)
    .map(mapSession);

  return { id: row.id, timeLabel: row.time_label, sessions };
}

function mapDay(
  row: ProgramDayRow,
  slotsByDay: ReadonlyMap<string, readonly ProgramSlotRow[]>,
  sessionsBySlot: ReadonlyMap<string, readonly ProgramSessionRow[]>,
): ProgramDay {
  const slots = [...(slotsByDay.get(row.id) ?? [])]
    .sort(bySortOrder)
    .map((slot) => mapSlot(slot, sessionsBySlot));

  return { id: row.id, label: row.label, slots };
}

function connectedSessions(rows: GlanceRows): readonly ProgramSessionRow[] {
  const slotIds = new Set(rows.slots.map((slot) => slot.id));
  const roomCodes = new Set(rows.rooms.map((room) => room.code));
  return rows.sessions.filter(
    (session) =>
      slotIds.has(session.slot_id) && roomCodes.has(session.room_code),
  );
}

/** timeSlots는 days에, sessions는 timeSlots와 rooms에 붙여 시간표로 묶는다. 날짜가 없으면 null이다. */
export function assembleProgramGlance(
  rows: GlanceRows,
): ProgramGlancePage | null {
  if (rows.days.length === 0) {
    return null;
  }

  const slotsByDay = groupByKey(rows.slots, (slot) => slot.day_id);
  const sessionsBySlot = groupByKey(
    connectedSessions(rows),
    (session) => session.slot_id,
  );

  return {
    heading: LOCAL_PROGRAM_GLANCE.heading,
    notice: LOCAL_PROGRAM_GLANCE.notice,
    rooms: [...rows.rooms].sort(bySortOrder).map(mapRoom),
    days: [...rows.days]
      .sort(bySortOrder)
      .map((day) => mapDay(day, slotsByDay, sessionsBySlot)),
  };
}
