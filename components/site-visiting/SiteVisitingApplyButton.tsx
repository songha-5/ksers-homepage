import type { ReactElement } from "react";
import {
  SITE_VISITING_APPLY_HREF,
  SITE_VISITING_APPLY_LABEL,
} from "@/components/site-visiting/site-visiting-content";
import { SubpagePrimaryLink } from "@/components/subpage/SubpagePrimaryLink";

export function SiteVisitingApplyButton(): ReactElement {
  return (
    <SubpagePrimaryLink kind="blank" href={SITE_VISITING_APPLY_HREF}>
      {SITE_VISITING_APPLY_LABEL}
    </SubpagePrimaryLink>
  );
}
