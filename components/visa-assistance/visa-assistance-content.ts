export const VISA_ASSISTANCE_HEADING = "Visa Assistance";

export const VISA_SECRETARIAT_EMAIL = "ksers2027@ksers.kr";

export const VISA_NAVIGATOR_URL =
  "https://www.visa.go.kr/openPage.do?MENU_ID=10101";

export const KETA_SITE_URL = "https://www.k-eta.go.kr";

export const KETA_APPLY_URL =
  "https://www.k-eta.go.kr/portal/apply/viewstep1.do";

export const KETA_NOTES = [
  {
    id: "age-exemption",
    text: "K-ETA requirement will be exempted for ages 17 years old and under, and 65 years old and above (Starting from July 3, 2023).",
  },
  {
    id: "temporary-exemption",
    text: "K-ETA will be temporarily exempted to the 22 countries/regions from April 1, 2023 to December 31, 2026 (KST).",
  },
  {
    id: "country-list",
    text: "List: Australia, Austria, Belgium, Canada, Denmark, Finland, France, Germany, Hong Kong, Italy, Japan, Macao, Netherlands, New Zealand, Norway, Poland, Singapore, Spain, Sweden, Taiwan, UK, US (including Guam)",
  },
] as const;

export const RELATED_VISA_SITES = [
  {
    id: "mofa",
    label: "Ministry of Foreign Affairs",
    href: "https://www.mofa.go.kr/eng/index.do",
  },
  {
    id: "immigration",
    label: "Immigration Bureau",
    href: "https://www.immigration.go.kr/immigration_eng/index.do",
  },
  {
    id: "visa-portal",
    label: "Korea Visa Portal",
    href: VISA_NAVIGATOR_URL,
  },
  {
    id: "k-eta",
    label: "K-ETA",
    href: "https://www.k-eta.go.kr/portal/apply/index.do?locale=EN",
  },
] as const;
