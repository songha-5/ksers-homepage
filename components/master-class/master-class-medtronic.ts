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
} from "@/components/master-class/master-class-model";

const MEDTRONIC_TITLE =
  "1. [Master Class] Minimally Invasive Surgery (Medtronic Innovation Center)";

export const MEDTRONIC_COURSE: MasterClassCourse = {
  id: "medtronic",
  title: MEDTRONIC_TITLE,
  factsAlign: "center",
  facts: [
    textFact("date", "Date", "April 22 (Wed), 2026"),
    textFact(
      "venue",
      "Venue",
      "Medtronic Innovation Center (Osong)",
      "danger",
    ),
    textFact(
      "content",
      "Educational Content",
      "HBP/ UGI/ CR Surgery Hands-on",
    ),
    textFact(
      "fee",
      "Registration Fee",
      "KRW 100,000 / USD 100 (Limit. 18 persons)",
    ),
  ],
  schedules: [
    {
      id: "medtronic-program",
      title: `${MEDTRONIC_TITLE} – Detailed Program`,
      rows: [
        gridRow("header", [
          columnCell("header-time", ["Time"]),
          columnCell("header-program", ["Program"], 3),
        ]),
        wideProgramRow("opening", ["09:00-09:05"], ["Opening Remark"]),
        wideProgramRow(
          "intro",
          ["09:05-09:15"],
          ["Introduction of Master Class"],
        ),
        wideProgramRow(
          "hugo",
          ["09:20-09:50"],
          ["Introduction of Hugo Robotic System"],
        ),
        wideProgramRow(
          "procedures",
          ["09:50-10:10"],
          ["Introduction of Surgical Procedures"],
        ),
        wideProgramRow(
          "scrub",
          ["09:50-10:00"],
          ["Move to OR & Preparation for scrub"],
        ),
        gridRow("tracks", [
          columnCell("tracks-time", []),
          columnCell("tracks-hbp", ["HBP"]),
          columnCell("tracks-ugi", ["UGI"]),
          columnCell("tracks-crs", ["CRS"]),
        ]),
        gridRow("round-1", [
          rowCell("round-1-time", ["10:15-10:45", "(30min)"]),
          bodyCell("round-1-hbp", ["Hugo System"]),
          bodyCell(
            "round-1-ugi",
            [
              "Laparoscope",
              "Lymph node dissection",
              "Below pancreas (LN #4, 6)",
              "Duodenal transection and dissection",
              "(LN #5, 8a, 12a)",
              "Above pancreas (LN #7, 9, 11p)",
            ],
            1,
            2,
          ),
          bodyCell(
            "round-1-crs",
            [
              "Laparoscope",
              "Lap salpingectomy",
              "Lap small bowel resection & intracorporeal anastomosis",
            ],
            1,
            3,
          ),
        ]),
        gridRow("round-2", [
          rowCell("round-2-time", ["10:45-12:00", "(75min)"]),
          bodyCell(
            "round-2-hbp",
            [
              "Laparoscope",
              "Lap cholecystectomy",
              "Lap non-anatomical resection",
              "Lap glissonean approach",
              "Lap anatomical resection",
              "Lap hilar dissection",
            ],
            1,
            2,
          ),
        ]),
        gridRow("round-3", [
          rowCell("round-3-time", ["12:00-12:30", "(30min)"]),
          bodyCell("round-3-ugi", ["Hugo System"]),
        ]),
        wideProgramRow("lunch", ["12:30-13:30"], ["Lunch"]),
        gridRow("afternoon-tracks", [
          columnCell("afternoon-tracks-time", []),
          columnCell("afternoon-tracks-hbp", ["HBP"]),
          columnCell("afternoon-tracks-ugi", ["UGI"]),
          columnCell("afternoon-tracks-crs", ["CRS"]),
        ]),
        gridRow("afternoon-round-1", [
          rowCell("afternoon-round-1-time", ["13:30-14:00", "(30min)"]),
          bodyCell(
            "afternoon-round-1-hbp",
            [
              "Pancreas neck division and resection",
              "Lap distal pancreatectomy",
              "Pancreaticojejunostomy",
            ],
            1,
            2,
          ),
          bodyCell(
            "afternoon-round-1-ugi",
            [
              "Gastrectomy and anastomosis",
              "Distal gastrectomy with gastroduodenostomy, gastrojejunostomy",
              "Total gastrectomy, Esophagojejunostomy",
              "Stapled jejunojejunostomy",
            ],
            1,
            2,
          ),
          bodyCell("afternoon-round-1-crs", ["Hugo System"]),
        ]),
        gridRow("afternoon-round-2", [
          rowCell("afternoon-round-2-time", ["14:00-16:00", "(2hr)"]),
          bodyCell("afternoon-round-2-crs", [
            "TME (IMA ligation, pelvic dissection)",
            "TAPP",
            "Extracorporeal anastomosis",
          ]),
        ]),
        wideProgramRow("survey", ["16:00-16:10"], ["Survey"]),
        wideProgramRow(
          "photo",
          ["16:10-16:40"],
          ["Certification and Photo"],
        ),
        wideProgramRow(
          "closing",
          ["16:40"],
          ["Closing and Move to Osong Station"],
        ),
      ],
    },
  ],
};
