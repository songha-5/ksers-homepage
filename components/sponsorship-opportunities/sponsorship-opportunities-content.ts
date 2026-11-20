interface ExhibitionTextPart {
  readonly id: string;
  readonly kind: "text";
  readonly value: string;
}

interface ExhibitionStrongPart {
  readonly id: string;
  readonly kind: "strong";
  readonly value: string;
}

export type ExhibitionPart = ExhibitionTextPart | ExhibitionStrongPart;

export interface ExhibitionParagraph {
  readonly id: string;
  readonly parts: readonly ExhibitionPart[];
}

export const SPONSORSHIP_HEADING = "Sponsorship Opportunities";

export const EXHIBITION_HEADING = "Exhibition & Sponsorship Information";

export const PROSPECTUS_HREF = "/KSERS2026_EXHIBITION_PROSPECTUS_kor.pdf";

export const APPLICATION_FORM_HREF =
  "/KSERS2026_Sponsorship_Application_Form.docx";

export const APPLICATION_FORM_FILE_NAME =
  "KSERS2026_Sponsorship_Application_Form.docx";

export const EXHIBITION_PARAGRAPHS = [
  {
    id: "milestone",
    parts: [
      { id: "milestone-lead", kind: "text", value: "KSERS 2026 marks a " },
      {
        id: "milestone-emphasis",
        kind: "strong",
        value: "special milestone—the 30th anniversary",
      },
      {
        id: "milestone-rest",
        kind: "text",
        value:
          " of the Korean Society of Endo-Laparoscopic & Robotic Surgery. Over the past three decades, the Society has led the advancement of minimally invasive surgery through continuous academic exchange and innovation.",
      },
    ],
  },
  {
    id: "platform",
    parts: [
      {
        id: "platform-lead",
        kind: "text",
        value:
          "The upcoming congress will not only celebrate this remarkable journey but also provide an important platform for industry partners to engage with global experts, ",
      },
      {
        id: "platform-emphasis",
        kind: "strong",
        value: "showcase the latest surgical technologies",
      },
      {
        id: "platform-rest",
        kind: "text",
        value: ", and explore new business opportunities.",
      },
    ],
  },
  {
    id: "invitation",
    parts: [
      {
        id: "invitation-text",
        kind: "text",
        value:
          "We sincerely invite your participation and support in making this commemorative event a success, as KSERS continues to shape the future of endoscopic, laparoscopic, and robotic surgery.",
      },
    ],
  },
] as const satisfies readonly ExhibitionParagraph[];

export const INQUIRY_HEADING = "General Sponsorship Inquiries";

export const INQUIRY_OFFICE = "KSERS 2026 Secretariat";

export const INQUIRY_PHONE_LABEL = "+82-70-4895-6129";

export const INQUIRY_PHONE_HREF = "tel:+827048956129";

export const INQUIRY_EMAIL = "info@ksers.org";
