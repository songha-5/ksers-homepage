import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";
import { NEWS_PATH } from "@/components/news/news-content";
import { SUBPAGE_PRIMARY_BUTTON_CLASS_NAME } from "@/components/subpage/SubpagePrimaryButton";

const BACK_CLASS_NAME = `${SUBPAGE_PRIMARY_BUTTON_CLASS_NAME} gap-1`;

export function NewsArticleBackLink(): ReactElement {
  return (
    <Link href={NEWS_PATH} className={BACK_CLASS_NAME}>
      <ChevronLeft aria-hidden size={18} />
      List
    </Link>
  );
}
