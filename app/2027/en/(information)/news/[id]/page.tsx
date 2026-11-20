import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { getNewsPost } from "@/components/news/get-news";
import { NewsArticleDetails } from "@/components/news/NewsArticleDetails";

interface NewsArticlePageProps {
  readonly params: Promise<{
    readonly id: string;
  }>;
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getNewsPost(id);

  return {
    title: post?.title ?? "News",
  };
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps): Promise<ReactElement> {
  const { id } = await params;
  const post = await getNewsPost(id);

  if (!post) {
    notFound();
  }

  return <NewsArticleDetails post={post} />;
}
