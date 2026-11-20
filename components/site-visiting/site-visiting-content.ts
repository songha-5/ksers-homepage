import type { SiteVisitingDateItem } from "@/components/site-visiting/site-visiting-model";

// 주석: 수정필요. 2026 행사 문구이며, 2027 일정과 신청 주소가 확정되면 교체한다.
export const SITE_VISITING_HEADING = "Master Class: Site Visiting Program";

export const SITE_VISITING_APPLY_LABEL = "Apply for Site Visiting Program";

export const SITE_VISITING_APPLY_HREF = "https://www.ksers.org";

export const SITE_VISITING_LEAD = [
  "This program is complimentary for KSERS 2026 participants!",
  "Participants can experience minimally invasive surgical skills and facilities in Korean major centers. Join and exchange your knowledge!",
] as const;

export const SITE_VISITING_EMAIL = "info@ksers.org";

export const SITE_VISITING_MATCH_NOTE =
  "After closing application submission, the organizing committee will match you to an institute. If applicants converge toward a few institutes, you might be allocated to an institute you did not select. If you have any inquiries about the Master Class, please feel free to contact the secretariat at";

export const SITE_VISITING_PROGRAM_DATE = "April 20-21 (2 days)";

export const SITE_VISITING_KEY_DATES: readonly SiteVisitingDateItem[] = [
  {
    id: "deadline",
    label: "Application Submission Deadline",
    value: "February 28, 2026",
  },
  {
    id: "matching",
    label: "Matching Participants to Institutions",
    value: "March 10, 2026",
  },
];

export const SITE_VISITING_SCHEDULE: readonly SiteVisitingDateItem[] = [
  {
    id: "visiting",
    label: "April 20 (Mon) - 21 (Tue)",
    value: "Site Visiting Program",
  },
  {
    id: "hands-on",
    label: "April 22 (Wed)",
    value:
      "Hands-On Meeting (Medtronic Innovation Center, Osong & Meerecompany REVO-I Training Room, Minjeong & Intuitive Center for Surgical Innovation, Sang-am)",
  },
  {
    id: "congress",
    label: "April 23 (Thu) - 25 (Sat)",
    value: "KSERS 2026 (Lotte Hotel Seoul)",
  },
];
