import { APR22_SLOTS } from "@/components/program-glance/program-glance-april-22";
import { APR23_SLOTS } from "@/components/program-glance/program-glance-april-23";
import { APR24_SLOTS } from "@/components/program-glance/program-glance-april-24";
import type {
  ProgramGlancePage,
  ProgramRoom,
} from "@/components/program-glance/program-glance-model";

export const PROGRAM_GLANCE_HEADING = "Program at a Glance";

export const PROGRAM_GLANCE_NOTICE =
  "* Program schedules are subject to change.";

/** 2F는 Crystal·Emerald, 3F는 Sapphire다. 헤더 칸 합치기는 이 순서로 계산한다. */
export const PROGRAM_GLANCE_ROOMS = [
  { code: "A", floor: "2F", label: "Room A", venueName: "Crystal 1" },
  { code: "B", floor: "2F", label: "Room B", venueName: "Crystal 2" },
  { code: "C", floor: "2F", label: "Room C", venueName: "Crystal 3" },
  { code: "D", floor: "2F", label: "Room D", venueName: "Emerald" },
  { code: "E", floor: "3F", label: "Room E", venueName: "Sapphire" },
] as const satisfies readonly ProgramRoom[];

export const LOCAL_PROGRAM_GLANCE = {
  heading: PROGRAM_GLANCE_HEADING,
  notice: PROGRAM_GLANCE_NOTICE,
  rooms: PROGRAM_GLANCE_ROOMS,
  days: [
    { id: "april-22", label: "April 22 (Thu)", slots: APR22_SLOTS },
    { id: "april-23", label: "April 23 (Fri)", slots: APR23_SLOTS },
    { id: "april-24", label: "April 24 (Sat)", slots: APR24_SLOTS },
  ],
} as const satisfies ProgramGlancePage;
