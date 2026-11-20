import type { ReactElement } from "react";
import type { ResearchGrantListItem } from "@/components/research-grant/research-grant-content";

interface ResearchGrantNumberedListProps {
  readonly items: readonly ResearchGrantListItem[];
}

export function ResearchGrantNumberedList({
  items,
}: ResearchGrantNumberedListProps): ReactElement {
  return (
    <ol className="flex list-decimal flex-col gap-2 pl-5 text-left">
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
}
