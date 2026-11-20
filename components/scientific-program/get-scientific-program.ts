import { readRegistrationBase } from "@/config/env";
import { buildScientificUrl } from "@/config/registration-service";
import { assembleScientificProgram } from "@/components/scientific-program/assemble-scientific-program";
import { LOCAL_SCIENTIFIC_PROGRAM } from "@/components/scientific-program/scientific-program-content";
import type { ScientificProgramPage } from "@/components/scientific-program/scientific-program-model";
import { scientificProgramResponseSchema } from "@/components/scientific-program/scientific-program-schema";

const SCIENTIFIC_PROGRAM_YEAR = 2027;
const REQUEST_TIMEOUT_MS = 8_000;

async function requestScientificProgram(url: string): Promise<unknown | null> {
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

async function fetchScientificPayload(url: string): Promise<unknown | null> {
  const first = await requestScientificProgram(url);
  if (first !== null) {
    return first;
  }

  return requestScientificProgram(url);
}

function pageFromScientificPayload(
  payload: unknown,
): ScientificProgramPage | null {
  const parsed = scientificProgramResponseSchema.safeParse(payload);
  if (!parsed.success || parsed.data.year !== SCIENTIFIC_PROGRAM_YEAR) {
    return null;
  }

  return assembleScientificProgram(parsed.data.categories);
}

async function readScientificProgram(): Promise<ScientificProgramPage | null> {
  const base = readRegistrationBase();
  if (!base) {
    return null;
  }

  const url = buildScientificUrl(base, SCIENTIFIC_PROGRAM_YEAR);
  if (!url) {
    return null;
  }

  const payload = await fetchScientificPayload(url);
  if (!payload) {
    return null;
  }

  return pageFromScientificPayload(payload);
}

/** 등록 서버의 2027 프로그램을 읽는다. 없거나 탭이 없으면 저장소 데이터를 보여 준다. */
export async function getScientificProgram(): Promise<ScientificProgramPage> {
  try {
    const page = await readScientificProgram();
    return page ?? LOCAL_SCIENTIFIC_PROGRAM;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return LOCAL_SCIENTIFIC_PROGRAM;
    }

    return LOCAL_SCIENTIFIC_PROGRAM;
  }
}
