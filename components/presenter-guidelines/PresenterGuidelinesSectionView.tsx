import type { ReactElement } from "react";
import { PresenterGuidelinesBlocks } from "@/components/presenter-guidelines/PresenterGuidelinesBlocks";
import { PresenterGuidelinesPosterSize } from "@/components/presenter-guidelines/PresenterGuidelinesPosterSize";
import { PresenterGuidelinesSection } from "@/components/presenter-guidelines/PresenterGuidelinesSection";
import type { PresenterSection } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesSectionViewProps {
  readonly section: PresenterSection;
}

const NOTICE_CLASS_NAME = "border border-[#e4e4e4] bg-[#e8eef5] px-5 py-5";

const POSTER_LAYOUT_CLASS_NAME =
  "grid grid-cols-1 items-start gap-6 min-[1100px]:grid-cols-[minmax(0,1fr)_auto] min-[1100px]:gap-10";

export function PresenterGuidelinesSectionView({
  section,
}: PresenterGuidelinesSectionViewProps): ReactElement {
  const body = <PresenterGuidelinesBlocks blocks={section.blocks} />;

  if (section.tone === "notice") {
    return <div className={NOTICE_CLASS_NAME}>{body}</div>;
  }

  if (!section.title) {
    return body;
  }

  return (
    <PresenterGuidelinesSection title={section.title}>
      {renderSectionBody(section.layout, body)}
    </PresenterGuidelinesSection>
  );
}

function renderSectionBody(
  layout: PresenterSection["layout"],
  body: ReactElement,
): ReactElement {
  if (layout === "stack") {
    return body;
  }

  return (
    <div className={POSTER_LAYOUT_CLASS_NAME}>
      {body}
      <PresenterGuidelinesPosterSize />
    </div>
  );
}
