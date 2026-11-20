import type { ReactElement } from "react";
import { PresenterGuidelinesInlines } from "@/components/presenter-guidelines/PresenterGuidelinesInlines";
import type { PresenterListItem } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesListProps {
  readonly items: readonly PresenterListItem[];
}

export function PresenterGuidelinesList({
  items,
}: PresenterGuidelinesListProps): ReactElement {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.id} className="pl-3">
          <PresenterGuidelinesInlines parts={item.parts} />
          {renderNestedList(item.children)}
        </li>
      ))}
    </ul>
  );
}

function renderNestedList(
  children: readonly PresenterListItem[] | undefined,
): ReactElement | null {
  if (!children) {
    return null;
  }

  return (
    <div className="mt-2">
      <PresenterGuidelinesList items={children} />
    </div>
  );
}
