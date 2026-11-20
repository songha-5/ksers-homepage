import type { ReactElement } from "react";
import { PresenterGuidelinesSectionView } from "@/components/presenter-guidelines/PresenterGuidelinesSectionView";
import type { PresenterSection } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesPanelProps {
  readonly sections: readonly PresenterSection[];
}

export function PresenterGuidelinesPanel({
  sections,
}: PresenterGuidelinesPanelProps): ReactElement {
  return (
    <div>
      {sections.map((section) => (
        <PresenterGuidelinesSectionView key={section.id} section={section} />
      ))}
    </div>
  );
}
