import type { ReactElement } from "react";
import { PresenterGuidelinesInlines } from "@/components/presenter-guidelines/PresenterGuidelinesInlines";
import type { PresenterParagraph } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesParagraphsProps {
  readonly items: readonly PresenterParagraph[];
}

const EMPHASIS_CLASS_NAME = "font-bold text-[#263238]";

export function PresenterGuidelinesParagraphs({
  items,
}: PresenterGuidelinesParagraphsProps): ReactElement {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <p
          key={item.id}
          className={item.emphasis === true ? EMPHASIS_CLASS_NAME : undefined}
        >
          <PresenterGuidelinesInlines parts={item.parts} />
        </p>
      ))}
    </div>
  );
}
