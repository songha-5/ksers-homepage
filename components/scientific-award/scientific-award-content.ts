export const SCIENTIFIC_AWARD_HEADING = "Scientific Award";

export const SCIENTIFIC_AWARD_LEAD =
  "KSERS 2027 will present the Best Oral/Video/E-Poster Awards during the congress. The quality of the research presented will be evaluated and scored by judges using standardized evaluation forms.";

export const AWARD_GRADE_HEADERS = [
  "Grade",
  "Plenary",
  "Best Oral",
  "Best Video",
  "Best Mentor-Mentee Video",
  "Oral",
  "Video",
  "Best E-Poster",
] as const;

export const AWARD_PLENARY_PRIZES = [
  { id: "plenary-1st", text: "1st - KRW 1,000,000" },
  { id: "plenary-2nd", text: "2nd - KRW 500,000" },
  { id: "plenary-3rd", text: "3rd - KRW 400,000" },
] as const;

export const AWARD_SINGLE_PRIZES = [
  { id: "best-oral", amount: "KRW 300,000" },
  { id: "best-video", amount: "KRW 300,000" },
  { id: "best-mentor-mentee", amount: "KRW 200,000" },
  { id: "oral", amount: "KRW 200,000" },
  { id: "video", amount: "KRW 200,000" },
  { id: "best-e-poster", amount: "KRW 200,000" },
] as const;

export const AWARD_ELIGIBILITY = [
  {
    id: "presenter",
    text: "The applicant should be the presenter of the abstract accepted for either Oral/Video/E-Poster presentation.",
  },
  {
    id: "registration",
    text: "The applicant must pay the registration fees and attend the congress in-person.",
  },
] as const;

export const AWARD_NOTIFICATIONS = [
  {
    id: "announcement",
    text: "Award recipients will be announced after the congress and will receive a cash prize.",
  },
  {
    id: "attendance",
    text: "Awardees must attend the congress in-person.",
  },
] as const;
