import type { ReactElement } from "react";
import { VENUE_SECTIONS } from "@/components/venue/venue-content";
import { VenuePhoto } from "@/components/venue/VenuePhoto";
import { VenueSection } from "@/components/venue/VenueSection";

const INTRO_CLASS_NAME =
  "grid grid-cols-1 gap-6 min-[1100px]:grid-cols-2 min-[1100px]:items-start min-[1100px]:gap-10";

export function VenueIntro(): ReactElement {
  return (
    <div className={INTRO_CLASS_NAME}>
      <VenuePhoto />
      {/* 주석: 수정필요. 소개 문구는 DB 내용으로 교체한다. */}
      <div className="flex flex-col gap-8">
        {VENUE_SECTIONS.map((section) => (
          <VenueSection
            key={section.id}
            title={section.title}
            body={section.body}
          />
        ))}
      </div>
    </div>
  );
}
