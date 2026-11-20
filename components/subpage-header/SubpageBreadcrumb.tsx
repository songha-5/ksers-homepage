"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { CONGRESS_HOME_PATH } from "@/config/navigation";
import { findBreadcrumb } from "@/components/subpage-header/find-breadcrumb";

const CRUMB_CLASS_NAME =
  "inline-flex items-center after:ml-[10px] after:mr-[15px] after:text-[#999] after:content-['>']";

export function SubpageBreadcrumb(): ReactElement | null {
  const pathname = usePathname();
  const trail = findBreadcrumb(pathname);

  if (!trail) {
    return null;
  }

  return (
    <nav
      aria-label="현재 위치"
      className="hidden bg-[#e8eaf6] min-[768px]:block"
    >
      <ContentContainer>
        <ol className="flex min-h-[50px] flex-wrap items-center justify-end text-sm text-[#595959]">
          <li className={CRUMB_CLASS_NAME}>
            <Link
              href={CONGRESS_HOME_PATH}
              aria-label="Home"
              className="inline-flex"
            >
              <Home aria-hidden size={16} />
            </Link>
          </li>
          {trail.category ? (
            <li className={CRUMB_CLASS_NAME}>{trail.category}</li>
          ) : null}
          <li aria-current="page" className="text-primary">
            {trail.current}
          </li>
        </ol>
      </ContentContainer>
    </nav>
  );
}
