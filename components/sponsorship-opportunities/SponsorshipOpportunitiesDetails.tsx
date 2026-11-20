import type { ReactElement } from "react";
import { SPONSORSHIP_HEADING } from "@/components/sponsorship-opportunities/sponsorship-opportunities-content";
import { SponsorshipInformation } from "@/components/sponsorship-opportunities/SponsorshipInformation";
import { SponsorshipInquiries } from "@/components/sponsorship-opportunities/SponsorshipInquiries";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function SponsorshipOpportunitiesDetails(): ReactElement {
  return (
    <SubpageFrame title={SPONSORSHIP_HEADING}>
      <SponsorshipInformation />
      <SponsorshipInquiries />
    </SubpageFrame>
  );
}
