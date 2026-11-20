import {
  POSTER_TEMPLATE_FILE_NAME,
  POSTER_TEMPLATE_HREF,
} from "@/components/presenter-guidelines/presenter-guidelines-content";
import {
  presenterItem,
  presenterParagraph,
  presenterText,
  type PresenterGuidelinesPairRow,
  type PresenterSection,
} from "@/components/presenter-guidelines/presenter-guidelines-model";

const POSTER_SCHEDULE_ROWS: readonly PresenterGuidelinesPairRow[] = [
  { id: "location", label: "Location", value: "Pine Room (3F)" },
  {
    id: "time",
    label: "Presentation Time",
    value: "April 24 (Fri), 17:30-18:30",
  },
  { id: "setup", label: "Poster Set-up", value: "April 24 (Fri), 07:00-11:00" },
  {
    id: "removal",
    label: "Poster Removal",
    value: "April 25 (Sat), from 10:30",
  },
  { id: "language", label: "Language", value: "English" },
];

export const POSTER_GUIDELINE_SECTIONS: readonly PresenterSection[] = [
  {
    id: "lead",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "lead-copy",
        items: [
          presenterParagraph("printed", [
            presenterText("printed-lead", "All Poster Presentation presenters must prepare "),
            presenterText("printed-value", "a printed poster", true),
            presenterText(
              "printed-tail",
              " (not an E-poster) and set it up on site, and be present in front of it during the poster presentation session, according to the guidelines.",
            ),
          ]),
        ],
      },
    ],
  },
  {
    id: "schedule",
    title: "1. Language / Time / Location",
    tone: "plain",
    layout: "stack",
    blocks: [
      { kind: "table", id: "schedule-table", rows: POSTER_SCHEDULE_ROWS },
      {
        kind: "group",
        id: "discussion",
        title: "Poster Presentation with Discussion",
        blocks: [
          {
            kind: "list",
            id: "discussion-list",
            items: [
              presenterItem("award", [
                presenterText(
                  "award",
                  "The best presenters will have the chance to win the award. The quality of the research presented will be evaluated and scored by judges using standardized evaluation forms.",
                ),
              ]),
              presenterItem(
                "stand",
                [
                  presenterText(
                    "stand",
                    "Presenting authors are required to stand in front of their poster and present their presentation at the designated (allocated) time.",
                  ),
                ],
                [
                  presenterItem("allocated", [
                    presenterText(
                      "allocated",
                      "Allocated Presentation Time: 7 min (5 min Presentation + 2 min Q&A).",
                    ),
                  ]),
                ],
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "format",
    title: "2. Poster Format",
    tone: "plain",
    layout: "poster",
    blocks: [
      {
        kind: "list",
        id: "format-list",
        items: [
          presenterItem("size", [
            presenterText("size-lead", "Paper Size should be "),
            presenterText("size-value", "A0 (118.9cm x 84cm)", true),
            presenterText("size-tail", " including the title page."),
          ]),
          presenterItem("panel", [
            presenterText(
              "panel",
              "A single poster panel (95cm width by 180cm in height) will be provided for each poster.",
            ),
          ]),
          presenterItem("english", [
            presenterText("english", "All Posters should be prepared in English."),
          ]),
          presenterItem("template", [
            presenterText("template-label", "Template Download:"),
            // 주석: 수정필요. Poster 템플릿 파일을 교체한다.
            {
              kind: "download",
              id: "template-file",
              href: POSTER_TEMPLATE_HREF,
              fileName: POSTER_TEMPLATE_FILE_NAME,
            },
          ]),
          presenterItem("page", [presenterText("page", "Page limit: 1 Page")]),
        ],
      },
    ],
  },
  {
    id: "rules",
    title: "3. Regulations",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "rules-list",
        items: [
          presenterItem("code", [
            presenterText("code", "Please refer to your allocated poster code on the poster list."),
          ]),
          presenterItem("legible", [
            presenterText(
              "legible",
              "Posters should be legible by viewers from one meter away. The poster title, author(s)'s name(s) and affiliation(s) should appear at the top. The message should be clear and understandable without an oral explanation.",
            ),
          ]),
          presenterItem("content", [
            presenterText(
              "content",
              "Posters should show the main content or main results of the paper.",
            ),
          ]),
          presenterItem("tape", [
            presenterText(
              "tape",
              "Only adhesive tape will be available to attach your poster to the panel (Tape will be provided in the poster session area).",
            ),
          ]),
          presenterItem("removal", [
            presenterText(
              "removal",
              "All presenters should remove posters at removal time. If not, posters will be removed by staff without notice and the organizing committee will not take any responsibility for any lost or damaged posters.",
            ),
          ]),
        ],
      },
    ],
  },
];
