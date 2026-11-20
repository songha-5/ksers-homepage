"use client";

import { useEffect, useState, type ReactElement } from "react";
import { recordNewsView } from "@/components/news/record-news-view";

interface NewsViewCountProps {
  readonly id: string;
  readonly writtenAt: string;
  readonly viewCount: number;
}

const VIEW_GUARD_MS = 1_500;
const viewRequests = new Map<string, Promise<number | null>>();

function requestNewsView(id: string): Promise<number | null> {
  const current = viewRequests.get(id);
  if (current) {
    return current;
  }

  const request = recordNewsView(id);
  viewRequests.set(id, request);
  setTimeout(() => {
    if (viewRequests.get(id) === request) {
      viewRequests.delete(id);
    }
  }, VIEW_GUARD_MS);
  return request;
}

export function NewsViewCount({
  id,
  writtenAt,
  viewCount,
}: NewsViewCountProps): ReactElement {
  const [count, setCount] = useState(viewCount);

  useEffect(() => {
    let isCurrent = true;

    void requestNewsView(id).then((nextCount) => {
      if (isCurrent && nextCount !== null) {
        setCount(nextCount);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [id]);

  return (
    <p className="mt-3 text-sm text-[#8d8d8d]">
      {`${writtenAt} · 조회수 ${count}`}
    </p>
  );
}
