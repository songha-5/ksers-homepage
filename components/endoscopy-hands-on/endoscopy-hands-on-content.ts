export interface HandsOnFact {
  readonly id: string;
  readonly label: string;
  readonly text: string;
  readonly href: string | null;
}

export interface HandsOnProgramItem {
  readonly id: string;
  readonly text: string;
  readonly detail: string | null;
}

export interface HandsOnTable {
  readonly columns: readonly string[];
  readonly rows: readonly (readonly string[])[];
}

export interface HandsOnCourse {
  readonly id: string;
  readonly title: string;
  readonly facts: readonly HandsOnFact[];
  readonly programLabel: string;
  readonly program: readonly HandsOnProgramItem[];
  readonly table: HandsOnTable;
}

export const ENDOSCOPY_HANDS_ON_HEADING = "Endoscopy Hands-On Session";

export const KESEN_TITLE = "Korean Essentials of Surgical Endoscopy (KESEN)";

export const KESEN_LEAD =
  "This is a hands-on training course for surgical endoscopists who want to learn endoscopy. It will be a good opportunity to actually operate the endoscope or going further course.";

export const ENDOSCOPY_REGISTRATION_NOTE =
  "Registration in the Endoscopy Hands-on Session is optional when you register for KSERS 2026.";

// 주석: 수정필요. K-TEC 구글 지도 링크는 실제 장소 주소로 교체한다.
export const KTEC_MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=Olympus%20Korea%20Medical%20Training%20%26%20Education%20Center%20K-TEC%20Incheon%20Songdo";

const BASIC_TABLE: HandsOnTable = {
  columns: ["Category", "Time", "Gastroscopy", "Colonoscopy"],
  rows: [
    ["1st Round", "12:50 - 14:00", "4 persons", "4 persons"],
    ["2nd Round", "14:00 - 15:10", "4 persons", "4 persons"],
    ["3rd Round", "15:10 - 16:20", "4 persons", "4 persons"],
  ],
};

const ADVANCED_TABLE: HandsOnTable = {
  columns: ["Time", "Program"],
  rows: [
    ["09:30~10:00", "Registration"],
    [
      "10:00 - 10:20",
      "Lectures - Animal Experimental Ethics, Injection, Snaring, Clipping",
    ],
    ["10:20 - 10:30", "Break"],
    ["10:30 - 12:30", "Morning Practice - Injection, Snaring, Clipping"],
    ["12:30 - 13:10", "Lunch"],
    ["13:10 - 13:30", "Lectures - LECS or ESD"],
    ["13:30 - 15:30", "Afternoon Practice - LECS or ESD"],
    ["15:30 - 15:40", "Wrap-up"],
  ],
};

export const ENDOSCOPY_HANDS_ON_COURSES: readonly HandsOnCourse[] = [
  {
    id: "basic",
    title: "1. Basic Hand-on Course",
    facts: [
      {
        id: "date",
        label: "Date",
        text: "April 23 (Thu), 12:50 - 16:20",
        href: null,
      },
      {
        id: "venue",
        label: "Venue",
        text: "Lotte Hotel Seoul (3F)",
        href: null,
      },
      {
        id: "content",
        label: "Educational Content",
        text: "UGI/ CR Surgical Endoscopy Hands-on (Skill Simulator)",
        href: null,
      },
      {
        id: "fee",
        label: "Registration Fee",
        text: "KRW 50,000 / USD 50 (Limit. 24 persons)",
        href: null,
      },
    ],
    programLabel: "Program",
    program: [
      {
        id: "simulator",
        text: "Gastroscopy or Colonoscopy on Model Simulator (each session 70 min.)",
        detail: null,
      },
    ],
    table: BASIC_TABLE,
  },
  {
    id: "advanced",
    title: "2. Advanced Hands-on Course",
    facts: [
      {
        id: "date",
        label: "Date",
        text: "April 22 (Wed), 09:30 - 15:40",
        href: null,
      },
      {
        id: "venue",
        label: "Venue",
        text: "Olympus Korea Medical Training & Education Center, K-TEC (Incheon, Songdo)",
        href: KTEC_MAP_HREF,
      },
      {
        id: "fee",
        label: "Registration Fee",
        text: "KRW 250,000 / USD 250 (Limit. 16 persons)",
        href: null,
      },
    ],
    programLabel: "Program",
    program: [
      {
        id: "lecs",
        text: "A-course (LECS program): Injection, Snaring, Clipping + LECS",
        detail: "Laparoscopic Endoscopic Cooperative Surgery",
      },
      {
        id: "esd",
        text: "B-course (ESD program): Injection, Snaring, Clipping + ESD",
        detail: "Endoscopic Submucosal Dissection",
      },
    ],
    table: ADVANCED_TABLE,
  },
];
