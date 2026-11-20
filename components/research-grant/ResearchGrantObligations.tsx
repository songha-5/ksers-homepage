import type { ReactElement } from "react";
import { ResearchGrantNumberedList } from "@/components/research-grant/ResearchGrantNumberedList";
import { RESEARCH_GRANT_OBLIGATIONS } from "@/components/research-grant/research-grant-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function ResearchGrantObligations(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="연구 조건 및 기간 (연구비 수혜자의 의무)" />
      <ResearchGrantNumberedList items={RESEARCH_GRANT_OBLIGATIONS} />
    </div>
  );
}
