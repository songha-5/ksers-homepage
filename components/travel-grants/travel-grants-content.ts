export const TRAVEL_GRANTS_HEADING = "Travel Grants";

export const TRAVEL_GRANT_LEAD =
  "KSERS 2026 Organizing Committee will offer Travel Grants to Oral/ Video presenters, especially from developing countries to attend. We encourage you to apply for a Travel Grant! The Scientific Committee will review and notify awardees by email.";

export const TRAVEL_GRANT_CATEGORY = "Travel Grants";

export const TRAVEL_GRANT_AMOUNT = "USD 500";

export const TRAVEL_GRANT_NOTIFICATION =
  "Notification has been sent to presenters on March 4, 2026.";

// 주석: 수정필요. 소개 문구와 Click 링크는 DB 내용으로 교체한다.
export const JMIS_JOURNAL_URL = "https://www.e-jmis.org/main.html";

export const TRAVEL_GRANT_ELIGIBILITY = [
  {
    id: "accepted",
    text: "Presenters of accepted abstracts are eligible.",
  },
  {
    id: "age",
    text: "Presenters must be under 40 years of age.",
  },
  {
    id: "registration",
    text: "Presenters need to register in the congress.",
  },
  {
    id: "developing-countries",
    text: "Participants from developing countries qualify as classified by the World Bank.",
  },
] as const;
