import { readRegistrationBase } from "@/config/env";
import { buildGlanceUrl } from "@/config/registration-service";
import { assembleProgramGlance } from "@/components/program-glance/assemble-program-glance";
import { linkGlanceToScientificSessions } from "@/components/program-glance/link-glance-sessions";
import { LOCAL_PROGRAM_GLANCE } from "@/components/program-glance/program-glance-content";
import { getScientificProgram } from "@/components/scientific-program/get-scientific-program";
import type { ProgramGlancePage } from "@/components/program-glance/program-glance-model";
import { programGlanceResponseSchema } from "@/components/program-glance/program-glance-schema";

const PROGRAM_GLANCE_YEAR = 2027;
const REQUEST_TIMEOUT_MS = 8_000;

async function requestGlance(url: string): Promise<unknown | null> {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as unknown;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return null;
    }

    return null;
  }
}

async function fetchGlancePayload(url: string): Promise<unknown | null> {
  const first = await requestGlance(url);
  if (first !== null) {
    return first;
  }

  return requestGlance(url);
}

function pageFromGlancePayload(payload: unknown): ProgramGlancePage | null {
  const parsed = programGlanceResponseSchema.safeParse(payload);
  if (!parsed.success || parsed.data.year !== PROGRAM_GLANCE_YEAR) {
    return null;
  }

  return assembleProgramGlance({
    rooms: parsed.data.rooms,
    days: parsed.data.days,
    slots: parsed.data.timeSlots,
    sessions: parsed.data.sessions,
  });
}

async function readProgramGlance(): Promise<ProgramGlancePage | null> {
  const base = readRegistrationBase();
  if (!base) {
    return null;
  }

  const url = buildGlanceUrl(base, PROGRAM_GLANCE_YEAR);
  if (!url) {
    return null;
  }

  const payload = await fetchGlancePayload(url);
  if (!payload) {
    return null;
  }

  return pageFromGlancePayload(payload);
}

async function glanceWithSessionLinks(): Promise<ProgramGlancePage> {
  const [glance, scientific] = await Promise.all([
    readProgramGlance(),
    getScientificProgram(),
  ]);

  return linkGlanceToScientificSessions(
    glance ?? LOCAL_PROGRAM_GLANCE,
    scientific.categories,
  );
}

/** 등록 서버의 2027 시간표를 읽는다. 없거나 날짜가 비어 있으면 저장소의 시간표를 보여 준다. */
export async function getProgramGlance(): Promise<ProgramGlancePage> {
  try {
    return await glanceWithSessionLinks();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return LOCAL_PROGRAM_GLANCE;
    }

    return LOCAL_PROGRAM_GLANCE;
  }
}
