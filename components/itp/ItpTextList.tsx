import type { ReactElement } from "react";
import type { ItpTextItem } from "@/components/itp/itp-content";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";

interface ItpTextListProps {
  readonly items: readonly ItpTextItem[];
}

export function ItpTextList({ items }: ItpTextListProps): ReactElement {
  return (
    <SubpageBulletList
      items={items.map((item) => ({
        id: item.id,
        children: item.text,
      }))}
    />
  );
}
