import type { ReactElement } from "react";
import { ResearchGrantFormButton } from "@/components/research-grant/ResearchGrantFormButton";
import { ResearchGrantNumberedList } from "@/components/research-grant/ResearchGrantNumberedList";
import { ResearchGrantRecordTable } from "@/components/research-grant/ResearchGrantRecordTable";
import {
  RESEARCH_GRANT_CONTACT,
  RESEARCH_GRANT_DEADLINE,
  RESEARCH_GRANT_ELIGIBILITY,
  RESEARCH_GRANT_FUNDING,
  RESEARCH_GRANT_PERIOD,
  RESEARCH_GRANT_TYPE,
} from "@/components/research-grant/research-grant-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

const LABEL_WIDTH_CLASS_NAME = "w-[22%]";

const DEADLINE_CLASS_NAME = "text-lg font-bold text-[#09428f]";

const SCHEDULE_ROWS = [
  {
    id: "deadline",
    label: "접수 마감",
    children: (
      <span className={DEADLINE_CLASS_NAME}>{RESEARCH_GRANT_DEADLINE}</span>
    ),
  },
  { id: "period", label: "신청 기간", children: RESEARCH_GRANT_PERIOD },
  {
    id: "eligibility",
    label: "지원 자격",
    children: <ResearchGrantNumberedList items={RESEARCH_GRANT_ELIGIBILITY} />,
  },
  { id: "type", label: "연구 형태", children: RESEARCH_GRANT_TYPE },
  {
    id: "funding",
    label: "연구비",
    children: <ResearchGrantNumberedList items={RESEARCH_GRANT_FUNDING} />,
  },
  { id: "contact", label: "접수처", children: RESEARCH_GRANT_CONTACT },
];

export function ResearchGrantSchedule(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="주요 일정" />
      <ResearchGrantRecordTable
        labelWidthClassName={LABEL_WIDTH_CLASS_NAME}
        header={{ label: "구분", value: "내용" }}
        rows={SCHEDULE_ROWS}
      />
      <ResearchGrantFormButton />
    </div>
  );
}
