"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import arrowTopIcon from "@/images/icon_arrow_top.png";

const SCROLL_TOP_LABEL = "Back to top";

function scrollToPageTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function ScrollTopButton(): ReactElement {
  return (
    <button
      type="button"
      aria-label={SCROLL_TOP_LABEL}
      onClick={scrollToPageTop}
      className="fixed right-0 bottom-0 z-30 flex h-[60px] w-[60px] items-center justify-center bg-[#f06292] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
    >
      <Image src={arrowTopIcon} alt="" width={17} height={10} loading="eager" />
    </button>
  );
}
