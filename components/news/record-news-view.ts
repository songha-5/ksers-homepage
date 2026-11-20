"use server";

import { readRegistrationBase } from "@/config/env";
import { buildNewsViewUrl } from "@/config/registration-service";
import {
  isNewsPublicId,
  newsViewResponseSchema,
} from "@/components/news/news-schema";

const NEWS_YEAR = 2027;
const REQUEST_TIMEOUT_MS = 8_000;

async function postNewsView(url: string, id: string): Promise<unknown | null> {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ id, year: String(NEWS_YEAR) }).toString(),
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

function viewCountFromPayload(payload: unknown, id: string): number | null {
  const parsed = newsViewResponseSchema.safeParse(payload);
  if (!parsed.success || parsed.data.id !== id) {
    return null;
  }

  return parsed.data.viewCount;
}

/** 상세 화면이 열릴 때 조회수를 1 올린다. 실패하면 null이다. */
export async function recordNewsView(id: string): Promise<number | null> {
  if (!isNewsPublicId(id)) {
    return null;
  }

  const base = readRegistrationBase();
  if (!base) {
    return null;
  }

  const url = buildNewsViewUrl(base);
  if (!url) {
    return null;
  }

  const payload = await postNewsView(url, id);
  if (!payload) {
    return null;
  }

  return viewCountFromPayload(payload, id);
}
