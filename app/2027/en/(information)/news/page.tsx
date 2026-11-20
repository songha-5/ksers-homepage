import type { Metadata } from "next";
import type { ReactElement } from "react";
import { getNewsPosts } from "@/components/news/get-news";
import { NewsDetails } from "@/components/news/NewsDetails";
import {
  NEWS_HEADING,
  readNewsPage,
  resolveNewsPage,
} from "@/components/news/news-content";

export const metadata: Metadata = {
  title: NEWS_HEADING,
};

interface NewsPageProps {
  readonly searchParams: Promise<{
    readonly page?: string | string[];
  }>;
}

export default async function NewsPage({
  searchParams,
}: NewsPageProps): Promise<ReactElement> {
  const params = await searchParams;
  const posts = await getNewsPosts();
  const page = resolveNewsPage(readNewsPage(params.page), posts.length);

  return <NewsDetails page={page} posts={posts} />;
}
