import type { ReactElement } from "react";
import {
  getNewsPage,
  getNewsPageCount,
  NEWS_HEADING,
} from "@/components/news/news-content";
import type { NewsPost } from "@/components/news/news-model";
import { NewsPagination } from "@/components/news/NewsPagination";
import { NewsTable } from "@/components/news/NewsTable";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

interface NewsDetailsProps {
  readonly page: number;
  readonly posts: readonly NewsPost[];
}

export function NewsDetails({ page, posts }: NewsDetailsProps): ReactElement {
  return (
    <SubpageFrame title={NEWS_HEADING}>
      <NewsTable posts={getNewsPage(posts, page)} />
      <NewsPagination page={page} pageCount={getNewsPageCount(posts.length)} />
    </SubpageFrame>
  );
}
