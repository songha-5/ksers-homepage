import type { ReactElement } from "react";
import { PresenterGuidelinesInline } from "@/components/presenter-guidelines/PresenterGuidelinesInline";
import type { PresenterInline } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesInlinesProps {
  readonly parts: readonly PresenterInline[];
}

export function PresenterGuidelinesInlines({
  parts,
}: PresenterGuidelinesInlinesProps): ReactElement {
  return (
    <>
      {parts.map((part) => (
        <PresenterGuidelinesInline key={part.id} part={part} />
      ))}
    </>
  );
}
