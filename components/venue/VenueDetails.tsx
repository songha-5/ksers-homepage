import type { ReactElement } from "react";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";
import { VENUE_HEADING } from "@/components/venue/venue-content";
import { VenueIntro } from "@/components/venue/VenueIntro";
import { VenueMap } from "@/components/venue/VenueMap";

export function VenueDetails(): ReactElement {
  return (
    <SubpageFrame title={VENUE_HEADING}>
      <VenueIntro />
      <div className="mt-10">
        <VenueMap />
      </div>
    </SubpageFrame>
  );
}
