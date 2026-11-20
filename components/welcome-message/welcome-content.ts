import type { StaticImageData } from "next/image";
import jinKim from "@/images/welcome_jinkim.jpeg";
import seongYeobRyu from "@/images/welcome_seongYeobRyu.jpeg";

export const WELCOME_TITLE = "Welcome Message";

export const WELCOME_GREETING = "Dear Colleagues and Friends,";

interface WelcomePlainPart {
  readonly id: string;
  readonly kind: "text";
  readonly text: string;
}

interface WelcomeStrongPart {
  readonly id: string;
  readonly kind: "strong";
  readonly text: string;
}

type WelcomeTextPart = WelcomePlainPart | WelcomeStrongPart;

export interface WelcomeParagraphContent {
  readonly id: string;
  readonly parts: readonly WelcomeTextPart[];
}

export interface WelcomeSignatureContent {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly image: StaticImageData;
}

const CONGRESS_NAME = "KSERS 2027 Congress & International Symposium";

const CONGRESS_SCHEDULE = "April 22 to 24, 2027, at Lotte Hotel Seoul, Seoul, Korea";

const CONGRESS_THEME = "“Evolving Together, Leading Surgical Innovation,”";

export const WELCOME_PARAGRAPHS = [
  {
    id: "invitation",
    parts: [
      {
        id: "invitation-lead",
        kind: "text",
        text: "It is my great pleasure and honor to invite you to join us for the ",
      },
      { id: "invitation-congress", kind: "strong", text: CONGRESS_NAME },
      {
        id: "invitation-held",
        kind: "text",
        text: ", which will be held from ",
      },
      { id: "invitation-date", kind: "strong", text: CONGRESS_SCHEDULE },
      { id: "invitation-end", kind: "text", text: "." },
    ],
  },
  {
    id: "society",
    parts: [
      {
        id: "society-body",
        kind: "text",
        text: "Since its establishment in 1996, the Korean Society of Endo-Laparoscopic & Robotic Surgery (KSERS) has continued to play an important role in advancing minimally invasive and robotic surgery and promoting its development both nationally and internationally. Over the years, KSERS has grown into a leading academic society, bringing together surgeons and experts from around the world to share knowledge, experience, and the latest innovations in surgical practice.",
      },
    ],
  },
  {
    id: "theme",
    parts: [
      {
        id: "theme-lead",
        kind: "text",
        text: "As the field of surgery continues to evolve, artificial intelligence and robotic technologies are opening new possibilities and shaping the future of surgical care. KSERS 2027 will focus on these rapidly evolving technologies and explore how AI and robotic surgery can further transform the surgical field. Under the theme ",
      },
      { id: "theme-name", kind: "strong", text: CONGRESS_THEME },
      {
        id: "theme-end",
        kind: "text",
        text: " we aim to bring together leading experts and colleagues to share new perspectives, exchange ideas, and envision the future of surgery.",
      },
    ],
  },
  {
    id: "program",
    parts: [
      {
        id: "program-body",
        kind: "text",
        text: "With distinguished experts from Korea and around the world, KSERS 2027 will offer a diverse and engaging scientific program covering the latest advances in endo-laparoscopic and robotic surgery, as well as emerging technologies in AI and robotic surgery. Through lectures, live surgery, interactive sessions, and international collaboration, we hope to create a meaningful platform where knowledge and innovation can be shared and new opportunities for the future can emerge.",
      },
    ],
  },
  {
    id: "invite",
    parts: [
      {
        id: "invite-body",
        kind: "text",
        text: "We truly believe that KSERS 2027 will be a highly rewarding and memorable international congress for all participants. We warmly invite you to join us in Seoul as we evolve together, share new ideas, and lead the next generation of surgical innovation.",
      },
    ],
  },
  {
    id: "closing",
    parts: [
      {
        id: "closing-body",
        kind: "text",
        text: "We look forward to welcoming you to KSERS 2027 at Lotte Hotel Seoul and sharing this exciting journey toward the future of surgery with you.",
      },
    ],
  },
  {
    id: "regards",
    parts: [{ id: "regards-body", kind: "text", text: "With Best Regards" }],
  },
] as const satisfies readonly WelcomeParagraphContent[];

export const WELCOME_SIGNATURES = [
  {
    id: "seong-yeob-ryu",
    name: "Seong Yeob Ryu",
    role: "President of the Korean Society of Endo-Laparoscopic & Robotic Surgery",
    image: seongYeobRyu,
  },
  {
    id: "jin-kim",
    name: "Jin Kim",
    role: "Chairman, Board of Directors of the Korean Society of Endoscopic & Laparoscopic Surgeons",
    image: jinKim,
  },
] as const satisfies readonly WelcomeSignatureContent[];
