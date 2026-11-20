import type { ReactElement } from "react";
import { SiteVisitingApplyButton } from "@/components/site-visiting/SiteVisitingApplyButton";
import { SiteVisitingCenters } from "@/components/site-visiting/SiteVisitingCenters";
import { SiteVisitingIntro } from "@/components/site-visiting/SiteVisitingIntro";
import { SiteVisitingMatchNote } from "@/components/site-visiting/SiteVisitingMatchNote";
import {
  SITE_VISITING_HEADING,
  SITE_VISITING_KEY_DATES,
  SITE_VISITING_SCHEDULE,
} from "@/components/site-visiting/site-visiting-content";
import { SubpageDateList } from "@/components/subpage/SubpageDateList";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function SiteVisitingDetails(): ReactElement {
  return (
    <SubpageFrame title={SITE_VISITING_HEADING}>
      <SiteVisitingIntro />
      <div className="mt-8 flex justify-center">
        <SiteVisitingApplyButton />
      </div>
      <SubpageDateList title="Key Dates" items={SITE_VISITING_KEY_DATES} />
      <SiteVisitingMatchNote />
      <SubpageDateList title="Schedule" items={SITE_VISITING_SCHEDULE} />
      <SiteVisitingCenters />
    </SubpageFrame>
  );
}
