import type { ReactElement } from "react";
import { ResearchGrantNumberedList } from "@/components/research-grant/ResearchGrantNumberedList";
import { ResearchGrantRecordTable } from "@/components/research-grant/ResearchGrantRecordTable";
import {
  RESEARCH_GRANT_REVIEW_STEPS,
  RESEARCH_GRANT_SCORE_ROWS,
} from "@/components/research-grant/research-grant-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

const LABEL_WIDTH_CLASS_NAME = "w-[78%]";

export function ResearchGrantReview(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="연구과제 심사 및 선정" />
      <ResearchGrantNumberedList items={RESEARCH_GRANT_REVIEW_STEPS} />
      <div className="mt-4">
        <ResearchGrantRecordTable
          labelWidthClassName={LABEL_WIDTH_CLASS_NAME}
          header={{ label: "평가요소 (만점)", value: "점수" }}
          rows={RESEARCH_GRANT_SCORE_ROWS.map((row) => ({
            id: row.id,
            label: row.factor,
            children: row.score,
          }))}
        />
      </div>
    </div>
  );
}
