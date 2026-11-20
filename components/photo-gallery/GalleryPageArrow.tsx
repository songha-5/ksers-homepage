import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";
import { getGalleryPageHref } from "@/components/photo-gallery/gallery-pages";

interface GalleryPageArrowProps {
  readonly direction: "prev" | "next";
  readonly page: number;
  readonly pageCount: number;
}

const DISABLED_CLASS_NAME = "text-[#d0d0d0]";

const ENABLED_CLASS_NAME = "text-[#8d8d8d] hover:text-primary";

export function GalleryPageArrow({
  direction,
  page,
  pageCount,
}: GalleryPageArrowProps): ReactElement {
  const target = direction === "prev" ? page - 1 : page + 1;
  const label = direction === "prev" ? "Previous page" : "Next page";
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  if (target < 1 || target > pageCount) {
    return (
      <span className={DISABLED_CLASS_NAME}>
        <Icon aria-hidden size={16} />
      </span>
    );
  }

  return (
    <Link
      href={getGalleryPageHref(target)}
      aria-label={label}
      className={ENABLED_CLASS_NAME}
    >
      <Icon aria-hidden size={16} />
    </Link>
  );
}
