import {
  presenterItem,
  presenterParagraph,
  presenterText,
  type PresenterGuidelinesPairRow,
  type PresenterSection,
} from "@/components/presenter-guidelines/presenter-guidelines-model";

const PRESENTATION_TIME_ROWS: readonly PresenterGuidelinesPairRow[] = [
  {
    id: "invited",
    label: "Invited (Symposium)",
    value: "15-35 min. (Q&A Included)",
  },
  {
    id: "plenary",
    label: "Plenary *",
    value: "10 min. (7 min Presentation + 3 min Q&A)",
  },
  {
    id: "best-oral",
    label: "Best Oral/ Best Video *",
    value: "10 min. (7 min Presentation + 3 min Q&A)",
  },
  {
    id: "mentor",
    label: "Best Mentor-Mentee Video *",
    value: "10 min. (7 min Presentation + 3 min Q&A)",
  },
  {
    id: "oral",
    label: "Oral",
    value: "10 min. (7 min Presentation + 3 min Q&A)",
  },
  {
    id: "video",
    label: "Video",
    value: "7 min. (5 min Presentation + 2 min Q&A)",
  },
];

export const INVITED_OPENING_SECTIONS: readonly PresenterSection[] = [
  {
    id: "notice",
    tone: "notice",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "notice-copy",
        items: [
          presenterParagraph(
            "korean",
            [presenterText("korean", "모든 발표자는 현장 참석 및 발표를 진행해 주셔야 합니다.")],
            true,
          ),
          presenterParagraph("offline", [
            presenterText(
              "offline",
              "KSERS 2026 will be held offline congress, so we would like to inform that all participants must be present on-site.",
            ),
          ]),
          presenterParagraph("visa", [
            presenterText(
              "visa-lead",
              "Please check the entry requirements Visa or K-ETA in advance. ",
            ),
            { kind: "visa", id: "visa-link", label: "More details" },
          ]),
        ],
      },
    ],
  },
  {
    id: "language",
    title: "1. Language",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "language-list",
        items: [
          presenterItem("english", [presenterText("english", "Official language: English")]),
          presenterItem("korean-session", [
            presenterText(
              "korean-session",
              "Korean Session (한국어 세션) : Nurse Session / Resident Session / Community Hospital 1 / 연구비 공모 세션",
            ),
          ]),
        ],
      },
    ],
  },
  {
    id: "time",
    title: "2. Presentation Time",
    tone: "plain",
    layout: "stack",
    blocks: [
      { kind: "table", id: "time-table", rows: PRESENTATION_TIME_ROWS },
      {
        kind: "list",
        id: "time-notes",
        items: [
          presenterItem("award", [
            presenterText(
              "award",
              "The best presenters(*) will have the chance to win the award.",
            ),
          ]),
          presenterItem("judges", [
            presenterText(
              "judges",
              "The quality of the research presented will be evaluated and scored by judges using standardized evaluation forms.",
            ),
          ]),
        ],
      },
    ],
  },
];
