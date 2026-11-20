import type { ReactElement } from "react";
import { GalleryPageArrow } from "@/components/photo-gallery/GalleryPageArrow";
import { GalleryPageLink } from "@/components/photo-gallery/GalleryPageLink";
import { getGalleryPageNumbers } from "@/components/photo-gallery/gallery-pages";

interface GalleryPaginationProps {
  readonly page: number;
  readonly pageCount: number;
}

export function GalleryPagination({
  page,
  pageCount,
}: GalleryPaginationProps): ReactElement {
  const pageNumbers = getGalleryPageNumbers(pageCount);

  return (
    <nav
      aria-label="Gallery pages"
      className="mt-8 flex items-center justify-center gap-4 text-sm"
    >
      <GalleryPageArrow direction="prev" page={page} pageCount={pageCount} />
      {pageNumbers.map((pageNumber) => (
        <GalleryPageLink
          key={pageNumber}
          pageNumber={pageNumber}
          isCurrent={pageNumber === page}
        />
      ))}
      <GalleryPageArrow direction="next" page={page} pageCount={pageCount} />
    </nav>
  );
}
