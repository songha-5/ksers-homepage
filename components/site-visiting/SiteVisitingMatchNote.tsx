import type { ReactElement } from "react";
import {
  SITE_VISITING_EMAIL,
  SITE_VISITING_MATCH_NOTE,
} from "@/components/site-visiting/site-visiting-content";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";

export function SiteVisitingMatchNote(): ReactElement {
  return (
    <p className="mt-4">
      {`${SITE_VISITING_MATCH_NOTE} `}
      <ExternalTextLink href={`mailto:${SITE_VISITING_EMAIL}`}>
        {SITE_VISITING_EMAIL}
      </ExternalTextLink>
      .
    </p>
  );
}
