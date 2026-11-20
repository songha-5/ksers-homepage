import type { ReactElement } from "react";
import { ResearchGrantRecordTable } from "@/components/research-grant/ResearchGrantRecordTable";
import {
  RESEARCH_GRANT_BONUS_LEAD,
  RESEARCH_GRANT_BONUS_ROWS,
  RESEARCH_GRANT_CONTRIBUTION_ROWS,
  type ResearchGrantScoreRow,
} from "@/components/research-grant/research-grant-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

const LABEL_WIDTH_CLASS_NAME = "w-[40%]";

export function ResearchGrantContribution(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="학회 공헌도 평가 요소 및 가산점" />
      <ResearchGrantRecordTable
        labelWidthClassName={LABEL_WIDTH_CLASS_NAME}
        header={{ label: "학회 공헌도 평가 요소", value: "점수" }}
        rows={RESEARCH_GRANT_CONTRIBUTION_ROWS.map(toScoreRow)}
      />
      <SubpageSectionHeading title="가산점 항목" />
      <p className="mb-4">{RESEARCH_GRANT_BONUS_LEAD}</p>
      <ResearchGrantRecordTable
        labelWidthClassName={LABEL_WIDTH_CLASS_NAME}
        header={{ label: "가산점 항목", value: "점수" }}
        rows={RESEARCH_GRANT_BONUS_ROWS.map(toScoreRow)}
      />
    </div>
  );
}

function toScoreRow(row: ResearchGrantScoreRow): {
  readonly id: string;
  readonly label: string;
  readonly children: string;
} {
  return { id: row.id, label: row.factor, children: row.score };
}
