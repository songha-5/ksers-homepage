import type { ReactElement } from "react";
import { RegistrationConfirmation } from "@/components/registration/RegistrationConfirmation";
import { RegistrationDates } from "@/components/registration/RegistrationDates";
import { RegistrationFees } from "@/components/registration/RegistrationFees";
import { RegistrationPayment } from "@/components/registration/RegistrationPayment";
import { RegistrationProcedure } from "@/components/registration/RegistrationProcedure";
import { RegistrationRefund } from "@/components/registration/RegistrationRefund";
import { REGISTRATION_HEADING } from "@/components/registration/registration-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function RegistrationDetails(): ReactElement {
  return (
    <SubpageFrame title={REGISTRATION_HEADING}>
      <RegistrationProcedure />
      <RegistrationDates />
      <RegistrationFees />
      <RegistrationPayment />
      <RegistrationConfirmation />
      <RegistrationRefund />
    </SubpageFrame>
  );
}
