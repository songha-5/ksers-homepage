import type { ReactElement } from "react";
import { ServicePageLink } from "@/components/auth/ServicePageLink";
import {
  MASTER_CLASS_APPLY_LABEL,
  MASTER_CLASS_PATH,
} from "@/components/master-class/master-class-content";
import { SUBPAGE_PRIMARY_BUTTON_CLASS_NAME } from "@/components/subpage/SubpagePrimaryButton";
import { readRequestHomepageOrigin } from "@/config/read-homepage-origin";
import { readMemberSession } from "@/config/read-member-session";
import { readServicePageUrl } from "@/config/read-service-url";
import {
  buildLoginUrl,
  buildRegistrationUrl,
} from "@/config/registration-service";

export async function MasterClassApplyButton(): Promise<ReactElement> {
  const member = await readMemberSession();
  const origin = await readRequestHomepageOrigin();
  if (member) {
    return (
      <ServicePageLink
        href={readServicePageUrl(buildRegistrationUrl)}
        className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}
      >
        {MASTER_CLASS_APPLY_LABEL}
      </ServicePageLink>
    );
  }

  return (
    <ServicePageLink
      href={readServicePageUrl((base) =>
        buildLoginUrl(base, origin, MASTER_CLASS_PATH),
      )}
      className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}
    >
      {MASTER_CLASS_APPLY_LABEL}
    </ServicePageLink>
  );
}
