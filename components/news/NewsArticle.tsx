import type { ReactElement } from "react";
import { NewsArticleBackLink } from "@/components/news/NewsArticleBackLink";
import { NewsArticleBody } from "@/components/news/NewsArticleBody";
import { NewsViewCount } from "@/components/news/NewsViewCount";
import type { NewsPost } from "@/components/news/news-model";

interface NewsArticleProps {
  readonly post: NewsPost;
}

export function NewsArticle({ post }: NewsArticleProps): ReactElement {
  return (
    <article>
      <NewsArticleBackLink />
      <h2 className="mt-8 font-(family-name:--font-roboto) text-xl leading-[1.4] font-bold text-[#263238] min-[1100px]:text-2xl">
        {post.title}
      </h2>
      <NewsViewCount
        key={post.id}
        id={post.id}
        writtenAt={post.writtenAt}
        viewCount={post.viewCount}
      />
      <NewsArticleBody html={post.body} />
    </article>
  );
}
