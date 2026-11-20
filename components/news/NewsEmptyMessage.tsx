import type { ReactElement } from "react";
import { NEWS_EMPTY_MESSAGE } from "@/components/news/news-content";

export function NewsEmptyMessage(): ReactElement {
  return (
    <p className="border-b border-[#ececec] px-4 py-8 text-center text-sm text-[#8d8d8d]">
      {NEWS_EMPTY_MESSAGE}
    </p>
  );
}
