import type { ReactElement } from "react";
import { SITE_VISITING_PROGRAM_DATE } from "@/components/site-visiting/site-visiting-content";
import { SiteVisitingContentRow } from "@/components/site-visiting/SiteVisitingContentRow";
import { SiteVisitingHomepageRow } from "@/components/site-visiting/SiteVisitingHomepageRow";
import { SiteVisitingPairRow } from "@/components/site-visiting/SiteVisitingPairRow";
import type { SiteVisitingCenter } from "@/components/site-visiting/site-visiting-model";
interface SiteVisitingCenterTableProps {
  readonly center: SiteVisitingCenter;
}

const TABLE_CLASS_NAME =
  "w-full min-w-[720px] border-collapse text-sm text-[#595959]";

export function SiteVisitingCenterTable({
  center,
}: SiteVisitingCenterTableProps): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className={TABLE_CLASS_NAME}>
        <tbody>
          <SiteVisitingPairRow
            leftLabel="Department"
            leftValue={center.department}
            rightLabel="Program Date"
            rightValue={SITE_VISITING_PROGRAM_DATE}
          />
          <SiteVisitingPairRow
            leftLabel="Person"
            leftValue={center.personCount}
            rightLabel="Accommodation"
            rightValue={center.accommodation}
          />
          <SiteVisitingHomepageRow homepage={center.homepage} />
          <SiteVisitingContentRow content={center.content} />
        </tbody>
      </table>
    </div>
  );
}
