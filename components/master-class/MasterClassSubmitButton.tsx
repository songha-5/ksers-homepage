import type { ReactElement } from "react";
import { ServicePageLink } from "@/components/auth/ServicePageLink";
import { MASTER_CLASS_SUBMIT_LABEL } from "@/components/master-class/master-class-content";
import { SUBPAGE_SECONDARY_LINK_CLASS_NAME } from "@/components/subpage/SubpageSecondaryLink";
import { readServicePageUrl } from "@/config/read-service-url";
import { buildCvUrl } from "@/config/registration-service";

export function MasterClassSubmitButton(): ReactElement {
  return (
    <ServicePageLink
      href={readServicePageUrl(buildCvUrl)}
      className={SUBPAGE_SECONDARY_LINK_CLASS_NAME}
    >
      {MASTER_CLASS_SUBMIT_LABEL}
    </ServicePageLink>
  );
}
