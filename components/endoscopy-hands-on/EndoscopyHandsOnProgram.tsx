import type { ReactElement } from "react";
import type { HandsOnProgramItem } from "@/components/endoscopy-hands-on/endoscopy-hands-on-content";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";

interface EndoscopyHandsOnProgramProps {
  readonly label: string;
  readonly items: readonly HandsOnProgramItem[];
}

const LABEL_CLASS_NAME = "mt-4 mb-2 font-bold text-[#263238]";

export function EndoscopyHandsOnProgram({
  label,
  items,
}: EndoscopyHandsOnProgramProps): ReactElement {
  return (
    <div>
      <p className={LABEL_CLASS_NAME}>{label}</p>
      <SubpageBulletList
        items={items.map((item) => ({
          id: item.id,
          children: renderProgramItem(item),
        }))}
      />
    </div>
  );
}

function renderProgramItem(item: HandsOnProgramItem): ReactElement {
  if (!item.detail) {
    return <span>{item.text}</span>;
  }

  return (
    <span>
      {item.text}
      <span className="mt-1 block">{item.detail}</span>
    </span>
  );
}
