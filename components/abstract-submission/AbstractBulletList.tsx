import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import type { AbstractInlinePart } from "@/components/abstract-submission/abstract-submission-model";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";

interface AbstractBulletListProps {
  readonly items: readonly {
    readonly id: string;
    readonly parts: readonly AbstractInlinePart[];
  }[];
}

function renderPart(part: AbstractInlinePart): ReactElement {
  switch (part.kind) {
    case "text":
      return <span key={part.id}>{part.text}</span>;
    case "strong":
      return (
        <strong key={part.id} className="font-bold text-[#09428f]">
          {part.text}
        </strong>
      );
    case "link":
      return (
        <ExternalTextLink key={part.id} href={part.href}>
          {part.text}
        </ExternalTextLink>
      );
    default: {
      const unreachable: never = part;
      return unreachable;
    }
  }
}

export function AbstractBulletList({
  items,
}: AbstractBulletListProps): ReactElement {
  return (
    <SubpageBulletList
      items={items.map((item) => ({
        id: item.id,
        children: item.parts.map((part) => renderPart(part)),
      }))}
    />
  );
}
