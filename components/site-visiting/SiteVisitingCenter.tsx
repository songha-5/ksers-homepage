import type { ReactElement } from "react";
import { SiteVisitingCenterTable } from "@/components/site-visiting/SiteVisitingCenterTable";
import type { SiteVisitingCenter as SiteVisitingCenterData } from "@/components/site-visiting/site-visiting-model";

interface SiteVisitingCenterProps {
  readonly center: SiteVisitingCenterData;
}

const TITLE_CLASS_NAME =
  "mt-8 mb-3 font-(family-name:--font-roboto) text-lg leading-[1.4] font-bold text-primary min-[1100px]:text-xl";

export function SiteVisitingCenter({
  center,
}: SiteVisitingCenterProps): ReactElement {
  return (
    <section>
      <h3 className={TITLE_CLASS_NAME}>{center.title}</h3>
      <SiteVisitingCenterTable center={center} />
    </section>
  );
}
