// 주석: 수정필요. 본문, 신청 링크, 제출 팝업은 DB 연결 후 교체한다.

export const MASTER_CLASS_HEADING = "Master Class: Hands-On Meeting";

export const MASTER_CLASS_APPLY_LABEL = "Apply for Hands-on Meeting";

export const MASTER_CLASS_SUBMIT_LABEL = "Click to submit";

export const MASTER_CLASS_LEAD = [
  "This program is ONLY for KSERS 2026 participants!",
  "Participants can experience minimally invasive surgical skills and take part in a hands-on animal lab exercise.",
  "Registration in Hands-on Meeting is optional when you register for KSERS 2026.",
  "As seats are limited, applications are accepted on a first-come, first-served basis.",
] as const;

export const MASTER_CLASS_PROGRAMS_TITLE = "Programs · April 22 (Wed), 2026";

export const MASTER_CLASS_PROGRAM_COLUMNS = [
  "No.",
  "Program",
  "Venue",
  "Registration Fee",
  "Limit",
  "Note",
] as const;

export interface MasterClassProgramRow {
  readonly id: string;
  readonly number: string;
  readonly program: string;
  readonly venue: string;
  readonly fee: string;
  readonly limit: string;
  readonly note: string | null;
}

export const MASTER_CLASS_PROGRAM_ROWS: readonly MasterClassProgramRow[] = [
  {
    id: "medtronic",
    number: "1",
    program:
      "[Master Class] Minimally Invasive Surgery (Medtronic Innovation Center)",
    venue: "Medtronic Innovation Center (Osong)",
    fee: "KRW 100,000 / USD 100",
    limit: "18 persons",
    note: null,
  },
  {
    id: "revo",
    number: "2",
    program:
      "[Master Class] Minimally Invasive Surgery – Robot (REVO-I) (meerecompany Robotic Surgery Innovation Center)",
    venue:
      "meerecompany Robotic Surgery Innovation Center (Songpa Nonghyup Building, 3rd Floor, Munjeong, Seoul)",
    fee: "KRW 100,000 / USD 100",
    limit: "6 persons",
    note: null,
  },
  {
    id: "intuitive",
    number: "3",
    program:
      "[Master Class] Minimally Invasive Surgery – Robot (Intuitive Center for Surgical Innovation)",
    venue: "Intuitive Center for Surgical Innovation (Seoul, Sang-am)",
    fee: "KRW 100,000 / USD 100",
    limit: "9 persons",
    note: "Fully Booked",
  },
];

export const MASTER_CLASS_PATH = "/2027/en/master-class";
