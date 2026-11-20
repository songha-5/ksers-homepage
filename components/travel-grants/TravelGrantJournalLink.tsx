import type { ReactElement } from "react";
import { SubpageSecondaryLink } from "@/components/subpage/SubpageSecondaryLink";
import { JMIS_JOURNAL_URL } from "@/components/travel-grants/travel-grants-content";

const JOURNAL_SENTENCE =
  "Please submit your paper to the JMIS (Journal of Minimally Invasive Surgery), the official journal of KSERS.";

export function TravelGrantJournalLink(): ReactElement {
  return (
    <span>
      {JOURNAL_SENTENCE}{" "}
      {/* 주석: 수정필요. Click 링크는 DB 내용으로 교체한다. */}
      <SubpageSecondaryLink kind="blank" href={JMIS_JOURNAL_URL}>
        Click
      </SubpageSecondaryLink>
    </span>
  );
}
