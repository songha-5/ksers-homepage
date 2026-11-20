import type { ReactElement } from "react";
import { NEWS_COLUMNS } from "@/components/news/news-content";
import { NewsEmptyMessage } from "@/components/news/NewsEmptyMessage";
import { NewsTableRow } from "@/components/news/NewsTableRow";
import type { NewsPost } from "@/components/news/news-model";

interface NewsTableProps {
  readonly posts: readonly NewsPost[];
}

const HEADER_CLASS_NAME =
  "grid w-full min-w-0 grid-cols-[minmax(0,1fr)_9rem_5rem] border-y border-[#e4e4e4] bg-[#f7f7f7] px-4 py-3 text-center text-sm font-bold text-[#595959]";

export function NewsTable({ posts }: NewsTableProps): ReactElement {
  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div className="w-full min-w-0">
        <div className={HEADER_CLASS_NAME}>
          {NEWS_COLUMNS.map((column) => (
            <span
              key={column.id}
              className={
                column.id === "title"
                  ? "min-w-0 truncate text-left"
                  : "shrink-0"
              }
            >
              {column.label}
            </span>
          ))}
        </div>
        {posts.length === 0 ? (
          <NewsEmptyMessage />
        ) : (
          <ul>
            {posts.map((post) => (
              <NewsTableRow key={post.id} post={post} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
