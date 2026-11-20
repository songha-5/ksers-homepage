"use client";

import { useEffect, useState } from "react";

/** 문서가 최상단에 붙어 있으면 false, 스크롤되면 true. */
export function useIsScrolled(): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return isScrolled;
}
