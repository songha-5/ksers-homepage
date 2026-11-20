import {
  LogIn,
  MousePointerClick,
  PenLine,
  Save,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactElement } from "react";
import type { AbstractStep } from "@/components/abstract-submission/abstract-submission-model";
import { ABSTRACT_STEPS } from "@/components/abstract-submission/abstract-submission-content";
import { ServicePageLink } from "@/components/auth/ServicePageLink";
import { SUBPAGE_PRIMARY_BUTTON_CLASS_NAME } from "@/components/subpage/SubpagePrimaryButton";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import { SubpageStepCard } from "@/components/subpage/SubpageStepCard";
import { SubpageStepList } from "@/components/subpage/SubpageStepList";
import { readServicePageUrl } from "@/config/read-service-url";
import { buildAbstractUrl } from "@/config/registration-service";

const STEP_ICONS = {
  select: MousePointerClick,
  login: LogIn,
  author: UserRound,
  write: PenLine,
  save: Save,
} as const satisfies Record<AbstractStep["id"], LucideIcon>;

export function AbstractSubmissionSteps(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Steps for Abstract Submission" />
      <SubpageStepList>
        {ABSTRACT_STEPS.map((step) => (
          <SubpageStepCard
            key={step.id}
            label={step.label}
            text={step.text}
            icon={STEP_ICONS[step.id]}
          />
        ))}
      </SubpageStepList>
      <p className="mt-8 text-center">
        <ServicePageLink
          href={readServicePageUrl(buildAbstractUrl)}
          className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}
        >
          Abstract Submission
        </ServicePageLink>
      </p>
    </div>
  );
}
