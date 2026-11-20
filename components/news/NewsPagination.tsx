import type { ReactElement } from "react";
import { getNewsPageNumbers } from "@/components/news/news-content";
import { NewsPageArrow } from "@/components/news/NewsPageArrow";
import { NewsPageLink } from "@/components/news/NewsPageLink";

interface NewsPaginationProps {
  readonly page: number;
  readonly pageCount: number;
}

export function NewsPagination({
  page,
  pageCount,
}: NewsPaginationProps): ReactElement {
  const pageNumbers = getNewsPageNumbers(pageCount);

  return (
    <nav
      aria-label="News pages"
      className="mt-8 flex items-center justify-center gap-4 text-sm"
    >
      <NewsPageArrow direction="prev" page={page} pageCount={pageCount} />
      {pageNumbers.map((pageNumber) => (
        <NewsPageLink
          key={pageNumber}
          pageNumber={pageNumber}
          isCurrent={pageNumber === page}
        />
      ))}
      <NewsPageArrow direction="next" page={page} pageCount={pageCount} />
    </nav>
  );
}
