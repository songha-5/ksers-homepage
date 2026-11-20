import type { ReactElement } from "react";
import { AbstractBulletList } from "@/components/abstract-submission/AbstractBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import {
  ABSTRACT_ACCEPTANCE_NOTES,
  ABSTRACT_GUIDELINES,
  ABSTRACT_WITHDRAWAL_NOTES,
} from "@/components/abstract-submission/abstract-submission-content";

export function AbstractPolicySections(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Abstract Submission Guidelines" />
      <AbstractBulletList items={ABSTRACT_GUIDELINES} />
      <SubpageSectionHeading title="Notification of Acceptance" />
      <AbstractBulletList items={ABSTRACT_ACCEPTANCE_NOTES} />
      <SubpageSectionHeading title="Withdrawal of Abstracts" />
      <AbstractBulletList items={ABSTRACT_WITHDRAWAL_NOTES} />
    </div>
  );
}
