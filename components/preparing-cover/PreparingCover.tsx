"use client";

import { usePathname } from "next/navigation";
import type { ReactElement, ReactNode } from "react";
import { PreparingNotice } from "@/components/preparing-cover/PreparingNotice";
import { findPreparingPage } from "@/config/preparing-pages";

interface PreparingCoverProps {
  readonly children: ReactNode;
}

/** 목록에 있는 페이지만 기존 화면을 흐리게 가린다. 없는 페이지는 그대로 둔다. */
export function PreparingCover({
  children,
}: PreparingCoverProps): ReactElement {
  const pathname = usePathname();
  if (!findPreparingPage(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-[70vh]">
      <div
        inert
        aria-hidden="true"
        className="pointer-events-none blur-md select-none"
      >
        {children}
      </div>
      <div className="absolute inset-0 bg-white/55">
        <div className="sticky top-24 z-10 flex justify-center px-5 pt-16 min-[1100px]:top-36 min-[1100px]:pt-24">
          <PreparingNotice />
        </div>
      </div>
    </div>
  );
}
