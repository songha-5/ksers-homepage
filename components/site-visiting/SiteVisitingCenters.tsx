import type { ReactElement } from "react";
import { SiteVisitingCenter } from "@/components/site-visiting/SiteVisitingCenter";
import { SITE_VISITING_CENTERS } from "@/components/site-visiting/site-visiting-centers";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function SiteVisitingCenters(): ReactElement {
  return (
    <section>
      <SubpageSectionHeading title="Site Visiting Program Centers List" />
      {SITE_VISITING_CENTERS.map((center) => (
        <SiteVisitingCenter key={center.id} center={center} />
      ))}
    </section>
  );
}
