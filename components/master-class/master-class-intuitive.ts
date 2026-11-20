import {
  bodyCell,
  columnCell,
  gridRow,
  rowCell,
  wideProgramRow,
} from "@/components/master-class/master-class-grid";
import {
  textFact,
  type MasterClassCourse,
  type MasterClassFact,
} from "@/components/master-class/master-class-model";

const INTUITIVE_TITLE =
  "3. [Master Class] Minimally Invasive Surgery – Robot (Intuitive Center for Surgical Innovation) (* Fully Booked)";

const INTUITIVE_NOTICE =
  "* Notice: The final selection of participants will be communicated via individual notification email after the screening process. Please note that even if payment and document submission have been completed, it does not guarantee selection as a final participant.";

const INTUITIVE_FACTS: readonly MasterClassFact[] = [
  textFact("date", "Date", "April 22 (Wed), 2026"),
  textFact(
    "venue",
    "Venue",
    "Intuitive Center for Surgical Innovation (Seoul, Sang-am)",
    "danger",
  ),
  textFact(
    "content",
    "Educational Content",
    "HBP/ UGI/ CR Robot Surgery Hands-on",
  ),
  textFact(
    "fee",
    "Registration Fee",
    "KRW 100,000 / USD 100 (Limit. 9 persons)",
  ),
  textFact(
    "eligibility",
    "Eligibility",
    "Surgeon who has a robotic system in their hospital or has experience in robotic surgery",
  ),
  {
    id: "document",
    kind: "submit",
    label: "Required Document",
    text: "Curriculum Vitae (1-2 pages)",
  },
  textFact("notice", "Notice", INTUITIVE_NOTICE, "danger"),
];

export const INTUITIVE_COURSE: MasterClassCourse = {
  id: "intuitive",
  title: INTUITIVE_TITLE,
  factsAlign: "left",
  facts: INTUITIVE_FACTS,
  schedules: [
    {
      id: "intuitive-program",
      title: `${INTUITIVE_TITLE} – Detailed Program`,
      rows: [
        gridRow("header", [
          columnCell("header-time", ["Time"]),
          columnCell("header-program", ["Program"], 3),
        ]),
        wideProgramRow("opening", ["09:00-09:05"], ["Opening Remark"]),
        wideProgramRow(
          "intro",
          ["09:05-09:20"],
          ["Introduction of Master Class"],
        ),
        wideProgramRow(
          "scrub",
          ["09:20-09:30"],
          ["Change scrub & Move to Bay area"],
        ),
        gridRow("tracks", [
          columnCell("tracks-time", []),
          columnCell("tracks-hbp", ["HBP Hands-on"]),
          columnCell("tracks-ugi", ["UGI Hands-on"]),
          columnCell("tracks-cr", ["CR Hands-on"]),
        ]),
        wideProgramRow(
          "docking",
          ["09:30-10:00"],
          ["Port placement & Docking"],
        ),
        gridRow("model", [
          rowCell("model-time", ["10:00-12:00"]),
          bodyCell("model-hbp", ["HBP Model Practice"]),
          bodyCell("model-ugi", ["Stomach Model Practice"]),
          bodyCell("model-cr", ["CR Model Practice"]),
        ]),
        wideProgramRow("lunch", ["12:00-13:00"], ["Lunch"]),
        gridRow("practice", [
          rowCell("practice-time", ["13:00-16:30"]),
          bodyCell("practice-hbp", [
            "Pancreaticojejunostomy",
            "Hepaticojejunostomy",
            "Partial hepatectomy",
          ]),
          bodyCell("practice-ugi", [
            "Partial omentectomy & Lt. Gastroepiploic vessel ligation & #4sb",
            "Short gastric artery ligation & #4sa",
            "Rt. Gastroepiploic vessel ligation, #6, #5 & duodenum resection",
            "Rt. Gastric artery ligation & #7, #8, #9, Lt. gastric artery ligation",
          ]),
          bodyCell("practice-cr", [
            "LAR",
            "Intracorporeal anastomosis (stapling + suturing)",
            "Hernia",
          ]),
        ]),
        wideProgramRow("photo", ["16:30-16:50"], ["Certificate & Photo"]),
        wideProgramRow("closing", ["16:50-17:00"], ["Closing"]),
      ],
    },
  ],
};
