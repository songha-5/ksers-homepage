import Link from "next/link";
import type { ReactElement } from "react";
import { getNewsArticleHref } from "@/components/news/news-content";
import type { NewsPost } from "@/components/news/news-model";

interface NewsTableRowProps {
  readonly post: NewsPost;
}

const ROW_CLASS_NAME =
  "group grid w-full min-w-0 grid-cols-[minmax(0,1fr)_9rem_5rem] items-center border-b border-[#ececec] px-4 py-3.5 text-sm transition-colors hover:bg-[#f7f9fb]";

const META_CLASS_NAME = "text-center text-[#8d8d8d]";

export function NewsTableRow({ post }: NewsTableRowProps): ReactElement {
  return (
    <li>
      <Link href={getNewsArticleHref(post.id)} className={ROW_CLASS_NAME}>
        <span className="block min-w-0 truncate text-left text-[#263238] group-hover:text-primary">
          {post.title}
        </span>
        <span className={`${META_CLASS_NAME} shrink-0`}>{post.writtenAt}</span>
        <span className={`${META_CLASS_NAME} shrink-0`}>{post.viewCount}</span>
      </Link>
    </li>
  );
}
