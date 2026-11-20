import type { NewsPost } from "@/components/news/news-model";

export const NEWS_HEADING = "News & Notices";

export const NEWS_PATH = "/2027/en/news";

export const NEWS_PAGE_SIZE = 10;

export const MAIN_NEWS_LIMIT = 2;

export const NEWS_EMPTY_MESSAGE = "현재 등록된 글이 없습니다.";

export const NEWS_COLUMNS = [
  { id: "title", label: "제목" },
  { id: "writtenAt", label: "작성시간" },
  { id: "viewCount", label: "조회수" },
] as const;

export function getNewsPageCount(postCount: number): number {
  if (postCount <= 0) {
    return 1;
  }

  return Math.ceil(postCount / NEWS_PAGE_SIZE);
}

export function readNewsPage(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const page = Number(raw);

  if (!Number.isInteger(page) || page < 1) {
    return 1;
  }

  return page;
}

export function resolveNewsPage(rawPage: number, postCount: number): number {
  const pageCount = getNewsPageCount(postCount);

  if (rawPage > pageCount) {
    return pageCount;
  }

  return rawPage;
}

export function getNewsPage(
  posts: readonly NewsPost[],
  page: number,
): readonly NewsPost[] {
  const start = (page - 1) * NEWS_PAGE_SIZE;
  return posts.slice(start, start + NEWS_PAGE_SIZE);
}

export function getMainNewsPosts(
  posts: readonly NewsPost[],
): readonly NewsPost[] {
  return posts.slice(0, MAIN_NEWS_LIMIT);
}

export function getNewsPageNumbers(pageCount: number): readonly number[] {
  return Array.from({ length: pageCount }, (_, index) => index + 1);
}

export function getNewsArticleHref(id: string): string {
  return `${NEWS_PATH}/${id}`;
}

export function getNewsPageHref(pageNumber: number): string {
  if (pageNumber === 1) {
    return NEWS_PATH;
  }

  return `${NEWS_PATH}?page=${pageNumber}`;
}
