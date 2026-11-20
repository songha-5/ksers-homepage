import type {
  PastCongressEntry,
  PastCongressLink,
} from "@/components/past-congress/past-congress-model";

/**
 * Past Congresses 표 데이터다.
 */
export const PAST_CONGRESS_HEADING = "Past Congresses";

const NO_LINKS: readonly PastCongressLink[] = [];

function websiteLink(year: string, href: string): PastCongressLink {
  return { id: `${year}-website`, label: "Website", href };
}

export const PAST_CONGRESSES = [
  {
    id: "2026",
    name: "KSERS 2026",
    description: "(The 58th Congress of KSERS & 16th International Symposium)",
    date: "April 23 - 25, 2026",
    venue: "Lotte Hotel Seoul, Seoul, Korea",
    theme: "Shaping the Future of Surgery: Thirty Years of Innovation",
    links: [websiteLink("2026", "https://www.ksers.org/index.php")],
  },
  {
    id: "2025",
    name: "KSERS 2025",
    description: "(The 56th Congress of KSERS & 15th International Symposium)",
    date: "April 24 - 26, 2025",
    venue: "Lotte Hotel Seoul, Seoul, Korea",
    theme: "The New Era of Surgery: Precision Meets Innovation",
    links: [websiteLink("2025", "http://www.ksels.com/2025/")],
  },
  {
    id: "2024",
    name: "KSERS 2024",
    description: "(The 54th Congress of KSERS & 14th International Symposium)",
    date: "April 11-13, 2024",
    venue: "Daejeon Convention Center",
    theme: "Surgeons and Robots Uniting for Health Advancements!",
    links: [websiteLink("2024", "http://peop0022.pxpro.org/main.asp")],
  },
  {
    id: "2023",
    name: "KSERS 2023",
    description: "(The 52nd Congress of KSERS & 13th International Symposium)",
    date: "April 27-29, 2023",
    venue: "Lotte Hotel Seoul",
    theme: "Welcome to the New Generation for a Paradigm Shift",
    links: [websiteLink("2023", "http://www.ksels.com/2023/")],
  },
  {
    id: "2022",
    name: "KSELS 2022",
    description: "(The 50th Congress of KSELS & 12th International Symposium)",
    date: "April 28-30, 2022",
    venue: "EXCO, Daegu",
    theme: "The Future of MIS beyond the Pandemic!",
    links: [websiteLink("2022", "http://www.ksels.com/2022/")],
  },
  {
    id: "2021",
    name: "KSELS 2021",
    description: "(The 48th Congress of KSELS & 11th International Symposium)",
    date: "April 22-24, 2021",
    venue: "Virtual Congress",
    theme: "A Voyage beyond 25 Years of Excellence!",
    links: [websiteLink("2021", "http://www.ksels.com/2021/")],
  },
  {
    id: "2020",
    name: "KSELS 2020 & KAROS Congress",
    description:
      "(The 46th Congress of KSELS & 10th International Symposium in conjunction with the KAROS Congress)",
    date: "August 28-29, 2020",
    venue: "Virtual Congress",
    theme: "Toward Perfect Gold",
    links: [
      websiteLink("2020", "http://www.ksels.com/2020/"),
      {
        id: "2020-video",
        label: "Video",
        href: "https://www.youtube.com/watch?v=sdfHCxmo6oc&feature=youtu.be",
      },
    ],
  },
  {
    id: "2019",
    name: "KSELS 2019",
    description: "(The 44th Congress of KSELS & 9th International Symposium)",
    date: "April 25-27, 2019",
    venue: "Grand Walkerhill, Seoul",
    theme: "Be a Leader, Be a Pioneer",
    links: [
      websiteLink("2019", "http://www.ksels.com/2019/"),
      {
        id: "2019-photos",
        label: "Photos",
        href: "http://www.ksels.com/2019/sub01_06.php",
      },
    ],
  },
  {
    id: "2018",
    name: "KSELS 2018",
    description: "(The 42nd Congress of KSELS and 8th International Symposium)",
    date: "April 20-21, 2018",
    venue: "Lotte Hotel, Jeju",
    theme: "Safety Goes with Qualified Surgery",
    links: NO_LINKS,
  },
  {
    id: "2017",
    name: "KSELS 2017",
    description:
      "(The 40th Annual Meeting of KSELS and 2017 International Symposium)",
    date: "April 14-15, 2017",
    venue: "BEXCO, Busan",
    theme: "Quality Over Evidence",
    links: NO_LINKS,
  },
  {
    id: "2016",
    name: "KSELS 2016",
    description:
      "(The 38th Annual Meeting of KSELS and 20th anniversary International Symposium)",
    date: "April 29-30, 2016",
    venue: "Millennium Seoul Hilton, Seoul",
    theme: "Quantum Leap over 20 Years of Challenges",
    links: NO_LINKS,
  },
  {
    id: "2015",
    name: "KSELS 2015",
    description:
      "(The 36th Annual Meeting of KSELS and 2015 International Symposium)",
    date: "May 29-30, 2015",
    venue: "Hotel Silla, Jeju",
    theme: "Sharing Expertise Beyond Knowledge",
    links: NO_LINKS,
  },
  {
    id: "2014",
    name: "KSELS 2014",
    description:
      "(The 34th Annual Meeting of KSELS and 2014 International Symposium)",
    date: "April 24-25, 2014",
    venue: "Severance Hospital, Seoul",
    theme: "-",
    links: NO_LINKS,
  },
] as const satisfies readonly PastCongressEntry[];
