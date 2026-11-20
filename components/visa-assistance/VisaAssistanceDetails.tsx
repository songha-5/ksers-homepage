import type { ReactElement } from "react";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";
import { VISA_ASSISTANCE_HEADING } from "@/components/visa-assistance/visa-assistance-content";
import { VisaKetaSection } from "@/components/visa-assistance/VisaKetaSection";
import { VisaPassportSection } from "@/components/visa-assistance/VisaPassportSection";
import { VisaRelatedSites } from "@/components/visa-assistance/VisaRelatedSites";

export function VisaAssistanceDetails(): ReactElement {
  return (
    <SubpageFrame title={VISA_ASSISTANCE_HEADING}>
      <VisaPassportSection />
      <VisaKetaSection />
      <VisaRelatedSites />
    </SubpageFrame>
  );
}
