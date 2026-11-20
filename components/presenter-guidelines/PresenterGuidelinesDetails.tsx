import type { ReactElement } from "react";
import { PresenterGuidelinesTabs } from "@/components/presenter-guidelines/PresenterGuidelinesTabs";
import { PRESENTER_GUIDELINES_HEADING } from "@/components/presenter-guidelines/presenter-guidelines-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function PresenterGuidelinesDetails(): ReactElement {
  return (
    <SubpageFrame title={PRESENTER_GUIDELINES_HEADING}>
      {/* 주석: 수정필요. 탭 문구와 안내 내용은 DB 내용으로 교체한다. */}
      <PresenterGuidelinesTabs />
    </SubpageFrame>
  );
}
