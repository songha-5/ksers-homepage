"use client";

import { useEffect } from "react";
import {
  scientificCategoryElementId,
  type ScientificCategory,
} from "@/components/scientific-program/scientific-program-model";

const MAX_SCROLL_ATTEMPTS = 60;

function scrollToElement(elementId: string): void {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "auto",
    block: "start",
  });
}

function readHash(): string {
  return decodeURIComponent(window.location.hash.replace(/^#/, ""));
}

function categoryIdForHash(
  categories: readonly ScientificCategory[],
  hash: string,
): string | null {
  const match = categories.find(
    (category) =>
      category.id === hash ||
      category.sessions.some((session) => session.id === hash),
  );
  return match?.id ?? null;
}

function elementIdForHash(
  categories: readonly ScientificCategory[],
  hash: string,
): string {
  for (const category of categories) {
    if (category.sessions.some((session) => session.id === hash)) {
      return hash;
    }
    if (category.id === hash) {
      return scientificCategoryElementId(category.id);
    }
  }
  return hash;
}

function scrollWhenArticleExists(elementId: string): () => void {
  let frame = 0;
  let attempts = 0;
  let cancelled = false;

  const tick = (): void => {
    if (cancelled) {
      return;
    }
    if (document.getElementById(elementId)) {
      scrollToElement(elementId);
      frame = window.requestAnimationFrame(() => {
        if (!cancelled) {
          scrollToElement(elementId);
        }
      });
      return;
    }
    attempts += 1;
    if (attempts < MAX_SCROLL_ATTEMPTS) {
      frame = window.requestAnimationFrame(tick);
    }
  };

  frame = window.requestAnimationFrame(tick);
  return () => {
    cancelled = true;
    window.cancelAnimationFrame(frame);
  };
}

/** #세션id는 그 article로 보낸다. 대분류 id는 탭만 켜고 해시로 바꾸지 않는다. */
export function useScientificProgramScroll(
  categories: readonly ScientificCategory[],
  onActivate: (categoryId: string) => void,
): (categoryId: string) => void {
  useEffect(() => {
    const hash = readHash();
    if (!hash) {
      return;
    }
    const categoryId = categoryIdForHash(categories, hash);
    if (categoryId) {
      onActivate(categoryId);
    }
    return scrollWhenArticleExists(elementIdForHash(categories, hash));
  }, [categories, onActivate]);

  return (categoryId: string) => {
    onActivate(categoryId);
    scrollToElement(scientificCategoryElementId(categoryId));
  };
}
