import type { ReactElement } from "react";
import { NewsArticle } from "@/components/news/NewsArticle";
import { NEWS_HEADING } from "@/components/news/news-content";
import type { NewsPost } from "@/components/news/news-model";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

interface NewsArticleDetailsProps {
  readonly post: NewsPost;
}

export function NewsArticleDetails({
  post,
}: NewsArticleDetailsProps): ReactElement {
  return (
    <SubpageFrame title={NEWS_HEADING}>
      <NewsArticle post={post} />
    </SubpageFrame>
  );
}
