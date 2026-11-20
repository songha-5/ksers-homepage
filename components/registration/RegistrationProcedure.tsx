import {
  CircleCheck,
  CreditCard,
  Laptop,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactElement } from "react";
import { ServicePageLink } from "@/components/auth/ServicePageLink";
import { REGISTRATION_STEPS } from "@/components/registration/registration-content";
import { SUBPAGE_PRIMARY_BUTTON_CLASS_NAME } from "@/components/subpage/SubpagePrimaryButton";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import { SubpageStepCard } from "@/components/subpage/SubpageStepCard";
import { SubpageStepList } from "@/components/subpage/SubpageStepList";
import { readServicePageUrl } from "@/config/read-service-url";
import { buildRegistrationUrl } from "@/config/registration-service";

const STEP_ICONS = {
  "sign-up": UserRound,
  online: Laptop,
  payment: CreditCard,
  letter: Mail,
  complete: CircleCheck,
} as const satisfies Record<
  (typeof REGISTRATION_STEPS)[number]["id"],
  LucideIcon
>;

export function RegistrationProcedure(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Registration Procedure" />
      <SubpageStepList>
        {REGISTRATION_STEPS.map((step) => (
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
          href={readServicePageUrl(buildRegistrationUrl)}
          className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}
        >
          Register Now
        </ServicePageLink>
      </p>
    </div>
  );
}
