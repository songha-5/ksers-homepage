import { z } from "zod";
import { PROGRAM_SESSION_COLORS } from "@/components/program-glance/program-glance-model";

const dbInteger = z.coerce.number().int();

const blankText = z
  .string()
  .nullable()
  .transform((value) => (value === "" ? null : value));

export const programRoomRowSchema = z.object({
  code: z.string().min(1),
  floor: z.string(),
  label: z.string(),
  venue_name: blankText,
  sort_order: dbInteger,
});

export const programDayRowSchema = z.object({
  id: z.string().min(1),
  label: z.string(),
  sort_order: dbInteger,
});

export const programSlotRowSchema = z.object({
  id: z.string().min(1),
  day_id: z.string().min(1),
  time_label: z.string(),
  sort_order: dbInteger,
});

export const programSessionRowSchema = z.object({
  id: z.string().min(1),
  slot_id: z.string().min(1),
  room_code: z.string().min(1),
  column_span: dbInteger.positive(),
  row_span: dbInteger.positive(),
  title: blankText,
  content: blankText,
  topic: blankText,
  href: blankText,
  label: blankText,
  color: z.enum(PROGRAM_SESSION_COLORS),
  sort_order: dbInteger,
});

export const programRoomRowsSchema = z.array(programRoomRowSchema);
export const programDayRowsSchema = z.array(programDayRowSchema);
export const programSlotRowsSchema = z.array(programSlotRowSchema);
export const programSessionRowsSchema = z.array(programSessionRowSchema);

const GLANCE_YEAR_MIN = 2027;
const GLANCE_YEAR_MAX = 2035;

export const programGlanceResponseSchema = z.object({
  year: z.coerce.number().int().min(GLANCE_YEAR_MIN).max(GLANCE_YEAR_MAX),
  rooms: programRoomRowsSchema,
  days: programDayRowsSchema,
  timeSlots: programSlotRowsSchema,
  sessions: programSessionRowsSchema,
});

export type ProgramRoomRow = z.infer<typeof programRoomRowSchema>;
export type ProgramDayRow = z.infer<typeof programDayRowSchema>;
export type ProgramSlotRow = z.infer<typeof programSlotRowSchema>;
export type ProgramSessionRow = z.infer<typeof programSessionRowSchema>;
