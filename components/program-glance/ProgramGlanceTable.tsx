import type { ReactElement } from "react";
import { ProgramGlanceSessionCell } from "@/components/program-glance/ProgramGlanceSessionCell";
import {
  buildProgramRows,
  groupRoomFloors,
} from "@/components/program-glance/program-glance-layout";
import type {
  ProgramDay,
  ProgramRoom,
} from "@/components/program-glance/program-glance-model";

interface ProgramGlanceTableProps {
  readonly day: ProgramDay;
  readonly rooms: readonly ProgramRoom[];
}

const HEADER_CLASS_NAME =
  "border border-white bg-[#3d4248] px-2 py-3 text-center align-middle font-bold text-white";

const TIME_CELL_CLASS_NAME =
  "border border-[#d0d0d0] bg-[#f3f3f3] px-2 py-3 text-center align-middle text-xs font-normal text-[#9a9a9a]";

export function ProgramGlanceTable({
  day,
  rooms,
}: ProgramGlanceTableProps): ReactElement {
  const floors = groupRoomFloors(rooms);
  const rows = buildProgramRows(day.slots, rooms);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[960px] border-collapse text-sm leading-[1.45] text-[#595959]">
        <thead>
          <tr>
            <th rowSpan={2} scope="col" className={HEADER_CLASS_NAME}>
              Time
            </th>
            {floors.map((group) => (
              <th
                key={`${group.floor}-${group.startColumn}`}
                colSpan={group.span}
                scope="col"
                className={HEADER_CLASS_NAME}
              >
                {group.floor}
              </th>
            ))}
          </tr>
          <tr>
            {rooms.map((room) => (
              <th key={room.code} scope="col" className={HEADER_CLASS_NAME}>
                {room.label}
                {room.venueName ? (
                  <span className="block font-normal">{`(${room.venueName})`}</span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th scope="row" className={TIME_CELL_CLASS_NAME}>
                {row.timeLabel}
              </th>
              {row.cells.map((cell) =>
                cell.kind === "session" ? (
                  <ProgramGlanceSessionCell
                    key={cell.session.id}
                    session={cell.session}
                  />
                ) : (
                  <td
                    key={cell.id}
                    className="border border-[#e4e4e4] bg-white"
                  />
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
