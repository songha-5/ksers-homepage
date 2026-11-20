import { cache } from "react";
import { readRegistrationBase } from "@/config/env";
import {
  buildNewsListUrl,
  buildNewsPostUrl,
} from "@/config/registration-service";
import type { NewsPost } from "@/components/news/news-model";
import {
  isNewsPublicId,
  newsListSchema,
  newsPostResponseSchema,
} from "@/components/news/news-schema";

const NEWS_YEAR = 2027;
const REQUEST_TIMEOUT_MS = 8_000;

async function requestJson(url: string): Promise<unknown | null> {
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

async function fetchJson(url: string): Promise<unknown | null> {
  const first = await requestJson(url);
  if (first !== null) {
    return first;
  }

  return requestJson(url);
}

function postsFromPayload(payload: unknown): readonly NewsPost[] | null {
  const parsed = newsListSchema.safeParse(payload);
  if (!parsed.success || parsed.data.year !== NEWS_YEAR) {
    return null;
  }

  return parsed.data.posts;
}

function postFromPayload(payload: unknown, id: string): NewsPost | null {
  const parsed = newsPostResponseSchema.safeParse(payload);
  if (!parsed.success || parsed.data.year !== NEWS_YEAR) {
    return null;
  }

  if (parsed.data.post.id !== id) {
    return null;
  }

  return parsed.data.post;
}

async function readNewsPosts(): Promise<readonly NewsPost[]> {
  const base = readRegistrationBase();
  if (!base) {
    return [];
  }

  const url = buildNewsListUrl(base, NEWS_YEAR);
  if (!url) {
    return [];
  }

  const payload = await fetchJson(url);
  if (!payload) {
    return [];
  }

  return postsFromPayload(payload) ?? [];
}

async function readNewsPost(id: string): Promise<NewsPost | null> {
  if (!isNewsPublicId(id)) {
    return null;
  }

  const base = readRegistrationBase();
  if (!base) {
    return null;
  }

  const url = buildNewsPostUrl(base, NEWS_YEAR, id);
  if (!url) {
    return null;
  }

  const payload = await fetchJson(url);
  if (!payload) {
    return null;
  }

  return postFromPayload(payload, id);
}

/** 등록 서버의 2027 소식 목록이다. 조회수는 올리지 않는다. */
export const getNewsPosts = cache(async (): Promise<readonly NewsPost[]> => {
  try {
    return await readNewsPosts();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return [];
    }

    return [];
  }
});

/** 등록 서버의 글 하나다. 없거나 미표출이면 null이고, 조회수는 올리지 않는다. */
export const getNewsPost = cache(
  async (id: string): Promise<NewsPost | null> => {
    try {
      return await readNewsPost(id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return null;
      }

      return null;
    }
  },
);
