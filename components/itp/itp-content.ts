export interface ItpFact {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

export interface ItpTextItem {
  readonly id: string;
  readonly text: string;
}

export const ITP_HEADING = "International Training Program (ITP)";

export const ITP_LEAD =
  "The Korean Society of Endoscopic & Robotic Surgery (KSERS) offers a one-month International Observership Program, providing medical professionals worldwide with an opportunity to gain hands-on experience in minimally invasive surgery.";

export const ITP_CLOSED_LABEL = "* Application Closed";

export const ITP_APPLICATION_DEADLINE = "January 31, 2026";

export const ITP_SECRETARIAT_EMAIL = "info@ksers.org";

export const ITP_FORM_HREF = "/KSERS2026_ITP_Application_Form.docx";

export const ITP_FORM_LABEL = "Click to download";

export const ITP_FACTS: readonly ItpFact[] = [
  {
    id: "duration",
    label: "Duration",
    value: "1 month (March ~ April, 2026)",
  },
  {
    id: "scholarship",
    label: "Scholarship",
    value: "2,000,000 KRW (covers accommodation, transportation, and airfare)",
  },
  {
    id: "placement",
    label: "Institution Placement",
    value: "Assigned based on the candidate's preference",
  },
];

export const ITP_ELIGIBILITY_LABEL = "Eligibility";

export const ITP_ELIGIBILITY_ITEMS: readonly ItpTextItem[] = [
  {
    id: "member",
    text: "The candidate must be a member of the Korean Society of Endo-Laparoscopic & Robotic Surgery (KSERS).",
  },
  {
    id: "age",
    text: "The candidate should be less than 40 years old.",
  },
  {
    id: "recommendation",
    text: "A letter of recommendation from the head of the candidate's institution is required.",
  },
  {
    id: "jmis",
    text: "It is desirable that the candidates have a paper published in the Journal of Minimally Invasive Surgery (JMIS) in the past as either the first or co-author",
  },
];

export const ITP_OBLIGATION_LABEL = "Obligations of Accepted Candidates";

export const ITP_OBLIGATION_ITEMS: readonly ItpTextItem[] = [
  {
    id: "report",
    text: "Accepted candidates should write a report entitled “Korea Observership: What I experienced in Korea and what I will practice in my country” after finishing the observership program. (The report will be published in the KSERS Newsletter.)",
  },
  {
    id: "abstract",
    text: "Accepted candidates are encouraged to submit an abstract to the KSERS annual meeting.",
  },
  {
    id: "master-class",
    text: "Accepted candidates are encouraged to attend the Minimally Invasive Surgery Master Class. (A hands-on animal lab exercise)",
  },
];

export const ITP_KEY_DATE_ROWS: readonly ItpFact[] = [
  {
    id: "submission",
    label: "Application Submission Deadline",
    value: "January 31, 2026",
  },
  {
    id: "confirmation",
    label: "Notification of Confirmation",
    value: "February 2026 (to be informed)",
  },
  {
    id: "placement",
    label: "Notification of Institution Placements",
    value: "End of March 2026 (to be informed)",
  },
];

export const ITP_DOWNLOAD_STEP =
  "Download the application form below and fill it out.";

export const ITP_SUBMIT_STEP =
  "Submit the following documents to the KSERS secretariat";

export const ITP_DOCUMENT_ITEMS: readonly ItpTextItem[] = [
  { id: "form", text: "Application Form" },
  { id: "cv", text: "A Copy of Curriculum Vitae" },
  { id: "letter", text: "A Letter of Recommendation" },
  { id: "passport", text: "A Copy of Passport" },
  {
    id: "jmis",
    text: "Title page of the published paper in JMIS (if applicable)",
  },
];
