/**
 * Overview 한 페이지 분량의 데이터다.
 * CMS에서는 heading이 페이지 제목이고, rows 순서가 표 순서다.
 * 각 행의 lines는 줄바꿈, parts는 그 줄 안의 문장이다.
 * text의 isEmphasized는 굵은 강조, link는 href가 있는 메일·주소다.
 */
interface OverviewTextPart {
  readonly id: string;
  readonly kind: "text";
  readonly text: string;
  readonly isEmphasized: boolean;
}

interface OverviewLinkPart {
  readonly id: string;
  readonly kind: "link";
  readonly text: string;
  readonly href: string;
}

export type OverviewPart = OverviewTextPart | OverviewLinkPart;

export interface OverviewLine {
  readonly id: string;
  readonly parts: readonly OverviewPart[];
}

export interface OverviewRowContent {
  readonly id: string;
  readonly label: string;
  readonly lines: readonly OverviewLine[];
}

export interface OverviewPageContent {
  readonly heading: string;
  readonly rows: readonly OverviewRowContent[];
}

export const OVERVIEW_PAGE = {
  heading: "Overview",
  rows: [
    {
      id: "title",
      label: "Title",
      lines: [
        {
          id: "title-line",
          parts: [
            {
              id: "title-text",
              kind: "text",
              isEmphasized: true,
              text: "KSERS 2027: The 59th Congress of the Korean Society of Endo-Laparoscopic & Robotic Surgery (KSERS) & the 17th International Symposium -Commemorating the 31st Anniversary of KSERS",
            },
          ],
        },
      ],
    },
    {
      id: "date",
      label: "Date",
      lines: [
        {
          id: "date-line",
          parts: [
            {
              id: "date-text",
              kind: "text",
              isEmphasized: true,
              text: "April 22-24, 2027",
            },
          ],
        },
      ],
    },
    {
      id: "venue",
      label: "Venue",
      lines: [
        {
          id: "venue-line",
          parts: [
            {
              id: "venue-text",
              kind: "text",
              isEmphasized: true,
              text: "Lotte Hotel Seoul",
            },
          ],
        },
      ],
    },
    {
      id: "co-host",
      label: "Co-Host",
      lines: [
        {
          id: "co-host-line",
          parts: [
            {
              id: "co-host-text",
              kind: "text",
              isEmphasized: false,
              text: "The Korean Society of Endo-Laparoscopic & Robotic Surgery",
            },
          ],
        },
      ],
    },
    {
      id: "official-language",
      label: "Official Language",
      lines: [
        {
          id: "official-language-line",
          parts: [
            {
              id: "official-language-text",
              kind: "text",
              isEmphasized: false,
              text: "Eng, Kor",
            },
          ],
        },
      ],
    },
    {
      id: "secretariat",
      label: "Secretariat",
      lines: [
        {
          id: "secretariat-name",
          parts: [
            {
              id: "secretariat-name-text",
              kind: "text",
              isEmphasized: true,
              text: "KSERS 2027 Congress Secretariat [Fm,Inc.]",
            },
          ],
        },
        {
          id: "secretariat-address",
          parts: [
            {
              id: "secretariat-address-text",
              kind: "text",
              isEmphasized: false,
              text: "2F, 92, Geonji-ro 250 beon-gil, Seo-gu, Incheon, Korea",
            },
          ],
        },
        {
          id: "secretariat-contact",
          parts: [
            {
              id: "secretariat-tel-label",
              kind: "text",
              isEmphasized: false,
              text: "Tel: ",
            },
            {
              id: "secretariat-tel",
              kind: "link",
              text: "+82-2-2088-5945",
              href: "tel:+82-2-2088-5945",
            },
            {
              id: "secretariat-fax",
              kind: "text",
              isEmphasized: false,
              text: " F. +82-2-503-8379-6616",
            },
          ],
        },
        {
          id: "secretariat-email-line",
          parts: [
            {
              id: "secretariat-email-label",
              kind: "text",
              isEmphasized: false,
              text: "E. ",
            },
            {
              id: "secretariat-email",
              kind: "link",
              text: "ksers2027@ksers.kr",
              href: "mailto:ksers2027@ksers.kr",
            },
          ],
        },
      ],
    },
  ],
} as const satisfies OverviewPageContent;
