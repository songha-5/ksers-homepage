import Link from "next/link";
import type { ReactElement } from "react";
import { getNewsPageHref } from "@/components/news/news-content";

interface NewsPageLinkProps {
  readonly pageNumber: number;
  readonly isCurrent: boolean;
}

const CURRENT_CLASS_NAME = "font-bold text-[#263238]";

const IDLE_CLASS_NAME = "text-[#9a9a9a] hover:text-primary";

export function NewsPageLink({
  pageNumber,
  isCurrent,
}: NewsPageLinkProps): ReactElement {
  if (isCurrent) {
    return (
      <span aria-current="page" className={CURRENT_CLASS_NAME}>
        {pageNumber}
      </span>
    );
  }

  return (
    <Link href={getNewsPageHref(pageNumber)} className={IDLE_CLASS_NAME}>
      {pageNumber}
    </Link>
  );
}
