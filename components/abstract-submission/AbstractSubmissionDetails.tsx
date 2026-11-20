import type { ReactElement } from "react";
import { AbstractPolicySections } from "@/components/abstract-submission/AbstractPolicySections";
import { AbstractPresentationGuide } from "@/components/abstract-submission/AbstractPresentationGuide";
import { AbstractSubmissionLead } from "@/components/abstract-submission/AbstractSubmissionLead";
import { AbstractSubmissionSteps } from "@/components/abstract-submission/AbstractSubmissionSteps";
import { AbstractTopicTables } from "@/components/abstract-submission/AbstractTopicTables";
import { ABSTRACT_SUBMISSION_HEADING } from "@/components/abstract-submission/abstract-submission-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function AbstractSubmissionDetails(): ReactElement {
  return (
    <SubpageFrame title={ABSTRACT_SUBMISSION_HEADING}>
      <AbstractSubmissionLead />
      <AbstractSubmissionSteps />
      <AbstractTopicTables />
      <AbstractPresentationGuide />
      <AbstractPolicySections />
    </SubpageFrame>
  );
}
