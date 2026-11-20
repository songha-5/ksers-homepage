import type { ReactElement } from "react";
import {
  OUR_SPONSORS_HEADING,
  SPONSOR_TIERS,
} from "@/components/our-sponsors/our-sponsors-content";
import { SponsorTier } from "@/components/our-sponsors/SponsorTier";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function OurSponsorsDetails(): ReactElement {
  return (
    <SubpageFrame title={OUR_SPONSORS_HEADING}>
      <div className="flex flex-col gap-10">
        {SPONSOR_TIERS.map((tier) => (
          <SponsorTier
            key={tier.id}
            id={tier.id}
            title={tier.title}
            sponsors={tier.sponsors}
          />
        ))}
      </div>
    </SubpageFrame>
  );
}
