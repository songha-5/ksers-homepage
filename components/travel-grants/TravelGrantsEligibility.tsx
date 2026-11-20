import type { ReactElement } from "react";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { TravelGrantJournalLink } from "@/components/travel-grants/TravelGrantJournalLink";
import { TRAVEL_GRANT_ELIGIBILITY } from "@/components/travel-grants/travel-grants-content";

export function TravelGrantsEligibility(): ReactElement {
  const laterItems = TRAVEL_GRANT_ELIGIBILITY.filter(
    (item) => item.id !== "accepted",
  );

  return (
    <SubpageBulletList
      items={[
        {
          id: "accepted",
          children: TRAVEL_GRANT_ELIGIBILITY[0].text,
        },
        { id: "jmis", children: <TravelGrantJournalLink /> },
        ...laterItems.map((item) => ({
          id: item.id,
          children: item.text,
        })),
      ]}
    />
  );
}
