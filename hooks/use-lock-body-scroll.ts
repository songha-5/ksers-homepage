"use client";

import { useEffect } from "react";

interface BodyScrollSnapshot {
  readonly position: string;
  readonly top: string;
  readonly width: string;
}

/** iOS에서는 overflow:hidden만으로 배경 스크롤이 멈추지 않는다. */
export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const scrollY = window.scrollY;
    const snapshot = lockBodyScroll(scrollY);

    return () => {
      restoreBodyScroll(snapshot, scrollY);
    };
  }, [isLocked]);
}

function lockBodyScroll(scrollY: number): BodyScrollSnapshot {
  const { style } = document.body;
  const snapshot = {
    position: style.position,
    top: style.top,
    width: style.width,
  };

  style.position = "fixed";
  style.top = `-${scrollY}px`;
  style.width = "100%";

  return snapshot;
}

function restoreBodyScroll(
  snapshot: BodyScrollSnapshot,
  scrollY: number,
): void {
  const { style } = document.body;
  style.position = snapshot.position;
  style.top = snapshot.top;
  style.width = snapshot.width;
  window.scrollTo(0, scrollY);
}
