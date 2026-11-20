import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import {
  VISA_NAVIGATOR_URL,
  VISA_SECRETARIAT_EMAIL,
} from "@/components/visa-assistance/visa-assistance-content";
import { VisaExternalButton } from "@/components/visa-assistance/VisaExternalButton";

export function VisaPassportSection(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Visa" />
      <div className="flex flex-col gap-5">
        <p>
          All foreign visitors entering the Republic of Korea must possess a
          valid passport. Participants, except those from countries who have
          visa exemption agreements with Korea, should apply for a Korean visa
          and should receive a Korean visa in their countries prior to
          departure.
        </p>
        <p>
          Please visit “Visa Navigator” below to check whether a visa is
          required. Participants who have to receive the invitation letters to
          issue their visa, please contact the secretariat (
          <ExternalTextLink href={`mailto:${VISA_SECRETARIAT_EMAIL}`}>
            {VISA_SECRETARIAT_EMAIL}
          </ExternalTextLink>
          ) after payment for registration fee.
        </p>
      </div>
      <p className="mt-8 text-center">
        <VisaExternalButton href={VISA_NAVIGATOR_URL}>
          Visa Navigator
        </VisaExternalButton>
      </p>
    </div>
  );
}
