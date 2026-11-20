import Link from "next/link";
import type { ReactElement } from "react";
import { getGalleryPageHref } from "@/components/photo-gallery/gallery-pages";

interface GalleryPageLinkProps {
  readonly pageNumber: number;
  readonly isCurrent: boolean;
}

const CURRENT_CLASS_NAME = "font-bold text-[#263238]";

const IDLE_CLASS_NAME = "text-[#9a9a9a] hover:text-primary";

export function GalleryPageLink({
  pageNumber,
  isCurrent,
}: GalleryPageLinkProps): ReactElement {
  if (isCurrent) {
    return (
      <span aria-current="page" className={CURRENT_CLASS_NAME}>
        {pageNumber}
      </span>
    );
  }

  return (
    <Link href={getGalleryPageHref(pageNumber)} className={IDLE_CLASS_NAME}>
      {pageNumber}
    </Link>
  );
}
