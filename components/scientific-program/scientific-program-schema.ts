import { z } from "zod";

const GLANCE_YEAR_MIN = 2027;
const GLANCE_YEAR_MAX = 2035;
const RECORD_ID_LENGTH = 36;

const dbInteger = z.coerce.number().int();

const blankText = z
  .string()
  .nullable()
  .transform((value) => (value === "" ? null : value));

const recordIdSchema = z.string().length(RECORD_ID_LENGTH);

const speakerRowSchema = z.object({
  id: recordIdSchema,
  badge: blankText,
  talk_title: z.string(),
  name: z.string(),
  affiliation: blankText,
  description: blankText,
  image_url: blankText,
  cv_url: blankText,
  abstract_url: blankText,
  sort_order: dbInteger,
});

const chairRowSchema = z.object({
  id: recordIdSchema,
  name: z.string(),
  sort_order: dbInteger,
});

const sessionRowSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  date_time: blankText,
  language: blankText,
  glance_id: blankText,
  sort_order: dbInteger,
  chairs: z.array(chairRowSchema),
  speakers: z.array(speakerRowSchema),
});

const categoryRowSchema = z.object({
  id: z.string().min(1),
  label: z.string(),
  sort_order: dbInteger,
  sessions: z.array(sessionRowSchema),
});

export const scientificProgramResponseSchema = z.object({
  year: z.coerce.number().int().min(GLANCE_YEAR_MIN).max(GLANCE_YEAR_MAX),
  categories: z.array(categoryRowSchema),
});

export type ScientificCategoryRow = z.infer<typeof categoryRowSchema>;
export type ScientificSessionRow = z.infer<typeof sessionRowSchema>;
export type ScientificSpeakerRow = z.infer<typeof speakerRowSchema>;
