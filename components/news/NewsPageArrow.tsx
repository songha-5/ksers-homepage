import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";
import { getNewsPageHref } from "@/components/news/news-content";

interface NewsPageArrowProps {
  readonly direction: "prev" | "next";
  readonly page: number;
  readonly pageCount: number;
}

const DISABLED_CLASS_NAME = "text-[#d0d0d0]";

const ENABLED_CLASS_NAME = "text-[#8d8d8d] hover:text-primary";

export function NewsPageArrow({
  direction,
  page,
  pageCount,
}: NewsPageArrowProps): ReactElement {
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
      href={getNewsPageHref(target)}
      aria-label={label}
      className={ENABLED_CLASS_NAME}
    >
      <Icon aria-hidden size={16} />
    </Link>
  );
}
