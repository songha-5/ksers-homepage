import {
  bodyCell,
  columnCell,
  gridRow,
  timeProgramRow,
} from "@/components/master-class/master-class-grid";
import {
  textFact,
  type MasterClassCourse,
  type MasterClassFact,
} from "@/components/master-class/master-class-model";

const REVO_TITLE =
  "2. [Master Class] Minimally Invasive Surgery – Robot (REVO-I) (meerecompany Robotic Surgery Innovation Center)";

const REVO_NOTICE =
  "* Notice: The final selection of participants will be communicated via individual notification email after the screening process. Please note that even if payment and document submission have been completed, it does not guarantee selection as a final participant.";

const REVO_FACTS: readonly MasterClassFact[] = [
  textFact("date", "Date", "April 22 (Wed), 2026"),
  textFact(
    "venue",
    "Venue",
    "meerecompany Robotic Surgery Innovation Center (Songpa Nonghyup Building, 3rd Floor, Munjeong, Seoul)",
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
    "KRW 100,000 / USD 100 (Limit. 6 persons)",
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
  textFact("notice", "Notice", REVO_NOTICE, "danger"),
  {
    id: "objective",
    kind: "lines",
    label: "Objective",
    lines: [
      "• To enhance participants’ understanding of the robotic system through structured, hands-on training based on the Revo-i Dry Lab",
      "• To strengthen system utilization skills by providing practical console operation experience using anatomy models",
    ],
  },
  {
    id: "format",
    kind: "lines",
    label: "Format (Rotational Training)",
    lines: [
      "• Participants will rotate through hands-on practice sessions according to the program structure",
      "• Practice time is limited to approximately 30 minutes per session per participant to ensure efficient operation",
    ],
  },
];

export const REVO_COURSE: MasterClassCourse = {
  id: "revo",
  title: REVO_TITLE,
  factsAlign: "left",
  facts: REVO_FACTS,
  schedules: [
    {
      id: "revo-program",
      title: `${REVO_TITLE} – Detailed Program`,
      rows: [
        gridRow("header", [
          columnCell("header-time", ["Time"]),
          columnCell("header-program", ["Program"]),
        ]),
        timeProgramRow(
          "overview",
          ["10:00-10:20"],
          [
            "• Overview & Basic Training",
            "• Welcome & Introduction to Revo-i",
          ],
        ),
        timeProgramRow(
          "basic",
          ["10:20-11:10"],
          [
            "• Revo-Sim Basic Training",
            "• Camera/Instrument Navigation, Peg Transfer, Lifting&Grasping",
          ],
        ),
        timeProgramRow(
          "advanced-1",
          ["11:10-11:50"],
          [
            "• Revo-Sim Advanced Training 1",
            "• Suturing & Anastomosis",
          ],
          2,
        ),
        gridRow("advanced-1-detail", [
          bodyCell(
            "advanced-1-detail-program",
            ["• Tissue Dissection", "• Lymph node & Vessel Dissection"],
            1,
            1,
            "left",
          ),
        ]),
        timeProgramRow("lunch", ["11:50-13:00"], ["• Lunch Break"]),
        timeProgramRow(
          "tissue",
          ["13:00-13:40"],
          ["• Tissue Dissection"],
          2,
        ),
        gridRow("tissue-detail", [
          bodyCell(
            "tissue-detail-program",
            ["• Revo-Sim Advanced Training 1"],
            1,
            1,
            "left",
          ),
        ]),
        timeProgramRow(
          "advanced-2",
          ["13:40-15:20"],
          [
            "• Revo-Sim Advanced Training 2",
            "• Procedure Training (Cholecystectomy)",
          ],
          2,
        ),
        gridRow("advanced-2-detail", [
          bodyCell(
            "advanced-2-detail-program",
            [
              "• Suture Session",
              "• End-to-end/ End-to-side Anastomosis",
            ],
            1,
            1,
            "left",
          ),
        ]),
        timeProgramRow(
          "wrap-up",
          ["15:20-16:00"],
          ["• Wrap-up & Certificate Ceremony"],
        ),
      ],
    },
  ],
};
