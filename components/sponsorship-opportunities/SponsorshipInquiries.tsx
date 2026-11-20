import { Mail, Phone } from "lucide-react";
import type { ReactElement } from "react";
import {
  INQUIRY_EMAIL,
  INQUIRY_HEADING,
  INQUIRY_OFFICE,
  INQUIRY_PHONE_HREF,
  INQUIRY_PHONE_LABEL,
} from "@/components/sponsorship-opportunities/sponsorship-opportunities-content";
import { SponsorshipInquiryItem } from "@/components/sponsorship-opportunities/SponsorshipInquiryItem";

const INQUIRY_BOX_CLASS_NAME =
  "mt-8 border border-[#e4e4e4] bg-[#e8eef5] px-5 py-6 text-center";

const INQUIRY_HEADING_CLASS_NAME =
  "mb-2 font-(family-name:--font-roboto) text-lg leading-[1.4] font-bold text-[#263238]";

export function SponsorshipInquiries(): ReactElement {
  return (
    <div className={INQUIRY_BOX_CLASS_NAME}>
      <h3 className={INQUIRY_HEADING_CLASS_NAME}>{INQUIRY_HEADING}</h3>
      <p className="mb-4">{INQUIRY_OFFICE}</p>
      <div className="flex flex-col items-center justify-center gap-4 min-[768px]:flex-row min-[768px]:gap-8">
        <SponsorshipInquiryItem icon={Phone}>
          <a href={INQUIRY_PHONE_HREF}>{INQUIRY_PHONE_LABEL}</a>
        </SponsorshipInquiryItem>
        <SponsorshipInquiryItem icon={Mail}>
          <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>
        </SponsorshipInquiryItem>
      </div>
    </div>
  );
}
