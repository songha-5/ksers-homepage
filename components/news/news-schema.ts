import { z } from "zod";

const newsPostSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  writtenAt: z.string(),
  viewCount: z.coerce.number().int().nonnegative(),
  body: z.string(),
});

export const newsListSchema = z.object({
  year: z.coerce.number().int(),
  posts: z.array(newsPostSchema),
});

export const newsPostResponseSchema = z.object({
  year: z.coerce.number().int(),
  post: newsPostSchema,
});

export const newsViewResponseSchema = z.object({
  id: z.string().min(1),
  viewCount: z.coerce.number().int().nonnegative(),
});

/** 주소와 조회 요청에 넣을 수 있는 public_id인지 확인한다. */
export function isNewsPublicId(id: string): boolean {
  return id.length > 0 && id.length <= 100 && !/[\s/?#\\]/.test(id);
}
