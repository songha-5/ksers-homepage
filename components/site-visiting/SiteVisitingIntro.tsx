import type { ReactElement } from "react";
import { SITE_VISITING_LEAD } from "@/components/site-visiting/site-visiting-content";

export function SiteVisitingIntro(): ReactElement {
  return (
    <div className="text-center">
      <p className="text-base font-bold text-[#263238]">{SITE_VISITING_LEAD[0]}</p>
      <p className="mt-2">{SITE_VISITING_LEAD[1]}</p>
    </div>
  );
}
