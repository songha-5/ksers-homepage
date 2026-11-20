import type { NavigationLink, NavigationMenu } from "@/types/navigation";

export const CONGRESS_HOME_PATH = "/2027";

const ENGLISH_BASE_PATH = `${CONGRESS_HOME_PATH}/en`;

function englishPath(slug: string): string {
  return `${ENGLISH_BASE_PATH}/${slug}`;
}

const CONGRESS_INFO_ITEMS = [
  { label: "Welcome Message", href: englishPath("welcome") },
  { label: "Overview", href: englishPath("overview") },
  { label: "Committee", href: englishPath("committee") },
  { label: "Past Congresses", href: englishPath("congress") },
  { label: "Related Events", href: englishPath("related-events") },
] as const satisfies readonly NavigationLink[];

const PROGRAM_ITEMS = [
  { label: "Program at a Glance", href: englishPath("glance") },
  {
    label: "Master Class: Hands-On Meeting",
    href: englishPath("master-class"),
  },
  {
    label: "Master Class: Site Visiting Program",
    href: englishPath("site-visiting"),
  },
  { label: "Scientific Program", href: englishPath("scientific-program") },
  { label: "Endoscopy Hands-On", href: englishPath("endoscopy") },
  { label: "International Training", href: englishPath("training") },
  { label: "Social Program", href: englishPath("social-event") },
  { label: "Event", href: englishPath("event") },
] as const satisfies readonly NavigationLink[];

const ABSTRACT_ITEMS = [
  { label: "Abstract Submission", href: englishPath("submission") },
  { label: "Scientific Award", href: englishPath("award") },
  { label: "Travel Grants", href: englishPath("grants") },
  { label: "연구비 공모", href: "/2027/kr/research-grant" },
  { label: "Presenter Guidelines", href: englishPath("guidelines") },
] as const satisfies readonly NavigationLink[];

const REGISTRATION_ITEMS = [
  { label: "Registration", href: englishPath("registration") },
  { label: "Visa Assistance", href: englishPath("visa") },
] as const satisfies readonly NavigationLink[];

const SPONSORSHIP_ITEMS = [
  { label: "Sponsorship Opportunities", href: englishPath("sponsorship-oppt") },
  { label: "Our Sponsors", href: englishPath("our-sponsors") },
] as const satisfies readonly NavigationLink[];

const INFORMATION_ITEMS = [
  { label: "Venue", href: englishPath("venue") },
  { label: "Accommodation", href: englishPath("accommodation") },
  { label: "Transportation", href: englishPath("transportation") },
  { label: "News & Notices", href: englishPath("news") },
  { label: "Gallery", href: englishPath("photo-gallery") },
] as const satisfies readonly NavigationLink[];

export const NAVIGATION_MENUS = [
  {
    label: "Congress Info",
    href: CONGRESS_INFO_ITEMS[0].href,
    items: CONGRESS_INFO_ITEMS,
  },
  { label: "Program", href: PROGRAM_ITEMS[0].href, items: PROGRAM_ITEMS },
  { label: "Abstract", href: ABSTRACT_ITEMS[0].href, items: ABSTRACT_ITEMS },
  {
    label: "Registration",
    href: REGISTRATION_ITEMS[0].href,
    items: REGISTRATION_ITEMS,
  },
  {
    label: "Sponsorship",
    href: SPONSORSHIP_ITEMS[0].href,
    items: SPONSORSHIP_ITEMS,
  },
  {
    label: "Information",
    href: INFORMATION_ITEMS[0].href,
    items: INFORMATION_ITEMS,
  },
] as const satisfies readonly NavigationMenu[];

export const UTILITY_LINKS = [
  { label: "Home", href: CONGRESS_HOME_PATH },
  { label: "News & Notices", href: englishPath("news") },
  { label: "Contact us", href: CONGRESS_HOME_PATH },
] as const satisfies readonly NavigationLink[];
