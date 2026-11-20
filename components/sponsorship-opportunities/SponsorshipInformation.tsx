import type { ReactElement, ReactNode } from "react";
import {
  APPLICATION_FORM_FILE_NAME,
  APPLICATION_FORM_HREF,
  EXHIBITION_HEADING,
  EXHIBITION_PARAGRAPHS,
  PROSPECTUS_HREF,
  type ExhibitionPart,
} from "@/components/sponsorship-opportunities/sponsorship-opportunities-content";
import { SponsorshipFileLink } from "@/components/sponsorship-opportunities/SponsorshipFileLink";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

const STRONG_CLASS_NAME = "font-bold text-[#263238]";

function renderExhibitionPart(part: ExhibitionPart): ReactNode {
  switch (part.kind) {
    case "text":
      return part.value;
    case "strong":
      return <strong className={STRONG_CLASS_NAME}>{part.value}</strong>;
    default: {
      const unreachable: never = part;
      return unreachable;
    }
  }
}

export function SponsorshipInformation(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title={EXHIBITION_HEADING} />
      <div className="flex flex-col gap-5">
        {EXHIBITION_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.id}>
            {paragraph.parts.map((part) => (
              <span key={part.id}>{renderExhibitionPart(part)}</span>
            ))}
          </p>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-3 min-[768px]:flex-row min-[768px]:justify-center">
        <SponsorshipFileLink kind="open" href={PROSPECTUS_HREF}>
          Sponsorship Prospectus (Kor)
        </SponsorshipFileLink>
        <SponsorshipFileLink
          kind="download"
          href={APPLICATION_FORM_HREF}
          fileName={APPLICATION_FORM_FILE_NAME}
        >
          Application Form (Kor)
        </SponsorshipFileLink>
      </div>
    </div>
  );
}
