interface FooterTextPart {
  readonly kind: "text";
  readonly id: string;
  readonly lines: readonly string[];
}

interface FooterEmailPart {
  readonly kind: "email";
  readonly id: string;
  readonly email: string;
}

export type FooterPart = FooterTextPart | FooterEmailPart;

export interface FooterContact {
  readonly id: string;
  readonly title: string;
  readonly className: string;
  readonly parts: readonly FooterPart[];
}

const SECRETARIAT_CLASS_NAME = "min-[1100px]:w-1/2";
const SOCIETY_CLASS_NAME =
  "pt-5 min-[1100px]:w-1/2 min-[1100px]:pt-0 min-[1100px]:pl-10";

export const FOOTER_CONTACTS = [
  {
    id: "secretariat",
    title: "KSERS 2027 Congress Secretariat [Fm.inc]",
    className: SECRETARIAT_CLASS_NAME,
    parts: [
      {
        kind: "text",
        id: "secretariat-address",
        lines: [
          "2F, 92, Geonji-ro 250beon-gil, Seo-gu, Incheon, Republic of Korea",
        ],
      },
      {
        kind: "text",
        id: "secretariat-tel",
        lines: ["TEL. +82-2-2088-5945, +82-10-9116-9453"],
      },
      {
        kind: "text",
        id: "secretariat-fax",
        lines: ["FAX. +82-503-8379-6616"],
      },
      {
        kind: "email",
        id: "secretariat-email",
        email: "ksers2027@ksers.kr",
      },
    ],
  },
  {
    id: "society",
    title:
      "The Korean Society of Endo-Laparoscopic & Robotic Surgery [대한내시경로봇외과학회]",
    className: SOCIETY_CLASS_NAME,
    parts: [
      {
        kind: "text",
        id: "society-address",
        lines: [
          "서울특별시 종로구 창경궁로 109 세운스퀘어 별관 136호 대한내시경로봇외과학회",
        ],
      },
      {
        kind: "text",
        id: "society-tel",
        lines: ["TEL. +82-2-592-5009"],
      },
      {
        kind: "text",
        id: "society-fax",
        lines: ["FAX. +82-2-533-5009"],
      },
      {
        kind: "email",
        id: "society-email",
        email: "ksels2010@gmail.com",
      },
    ],
  },
] as const satisfies readonly FooterContact[];
