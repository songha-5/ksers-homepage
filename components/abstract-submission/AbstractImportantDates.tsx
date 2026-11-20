import type { ReactElement } from "react";
import {
  ABSTRACT_ACCEPTANCE_DATE,
  ABSTRACT_SUBMISSION_DEADLINE,
} from "@/components/abstract-submission/abstract-submission-content";
import { SubpageDateList } from "@/components/subpage/SubpageDateList";

const ABSTRACT_DATES = [
  {
    id: "deadline",
    label: "Abstract Submission Deadline",
    value: `${ABSTRACT_SUBMISSION_DEADLINE} (KST)`,
  },
  {
    id: "acceptance",
    label: "Notification of Acceptance",
    value: `${ABSTRACT_ACCEPTANCE_DATE} (KST)`,
  },
] as const;

export function AbstractImportantDates(): ReactElement {
  return <SubpageDateList title="Important Dates" items={ABSTRACT_DATES} />;
}
