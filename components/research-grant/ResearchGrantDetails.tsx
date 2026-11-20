import type { ReactElement } from "react";
import { ResearchGrantContribution } from "@/components/research-grant/ResearchGrantContribution";
import { ResearchGrantObligations } from "@/components/research-grant/ResearchGrantObligations";
import { ResearchGrantReview } from "@/components/research-grant/ResearchGrantReview";
import { ResearchGrantSchedule } from "@/components/research-grant/ResearchGrantSchedule";
import {
  RESEARCH_GRANT_HEADING,
  RESEARCH_GRANT_LEAD,
} from "@/components/research-grant/research-grant-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function ResearchGrantDetails(): ReactElement {
  return (
    <SubpageFrame title={RESEARCH_GRANT_HEADING}>
      {/* 주석: 수정필요. 소개 문구와 표 내용은 DB 내용으로 교체한다. */}
      <p>{RESEARCH_GRANT_LEAD}</p>
      <ResearchGrantSchedule />
      <ResearchGrantObligations />
      <ResearchGrantReview />
      <ResearchGrantContribution />
    </SubpageFrame>
  );
}
