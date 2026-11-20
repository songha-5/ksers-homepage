import {
  EPOSTER_SUBMIT_HREF,
  EPOSTER_TEMPLATE_FILE_NAME,
  EPOSTER_TEMPLATE_HREF,
  SECRETARIAT_EMAIL,
} from "@/components/presenter-guidelines/presenter-guidelines-content";
import {
  presenterItem,
  presenterParagraph,
  presenterText,
  type PresenterSection,
} from "@/components/presenter-guidelines/presenter-guidelines-model";

export const EPOSTER_GUIDELINE_SECTIONS: readonly PresenterSection[] = [
  {
    id: "lead",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "lead-copy",
        items: [
          presenterParagraph("deadline", [
            presenterText(
              "deadline-lead",
              "All E-Poster Exhibition presenters must submit their posters in E-poster format only (not printed posters) in advance ",
            ),
            presenterText("deadline-value", "by April 6, 2026", true),
            presenterText("deadline-tail", ", according to the guidelines."),
          ]),
        ],
      },
    ],
  },
  {
    id: "place",
    title: "1. Language / Time / Location",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "place-list",
        items: [
          presenterItem("english", [presenterText("english", "Official language: English")]),
          presenterItem("location", [
            presenterText("location", "Location: Sapphire Room (3F), Lotte Hotel Seoul"),
          ]),
          presenterItem("time", [
            presenterText(
              "time",
              "Presentation Time: There is no specific presentation time. E-Posters will be displayed at the venue during the congress.",
            ),
          ]),
        ],
      },
    ],
  },
  {
    id: "format",
    title: "2. E-Poster File Format",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "format-list",
        items: [
          presenterItem("english", [
            presenterText("english", "All E-Posters should be prepared in English."),
          ]),
          presenterItem("template", [
            presenterText("template-label", "Template Download:"),
            // 주석: 수정필요. E-Poster 템플릿 파일을 교체한다.
            {
              kind: "download",
              id: "template-file",
              href: EPOSTER_TEMPLATE_HREF,
              fileName: EPOSTER_TEMPLATE_FILE_NAME,
            },
          ]),
          presenterItem("ratio", [
            presenterText("ratio-label", "Screen Ratio: "),
            presenterText("ratio-value", "9:16", true),
          ]),
          presenterItem("page", [presenterText("page", "Page limit: 1 Page")]),
          presenterItem("font", [
            presenterText(
              "font",
              "Font: Use basic fonts such as Arial, Calibri, Times New Roman, etc.",
            ),
          ]),
          presenterItem("av", [presenterText("av", "Video & Audio will not be supported.")]),
        ],
      },
    ],
  },
  {
    id: "submit",
    title: "3. Submission E-Poster File",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "submit-copy",
        items: [
          presenterParagraph("deadline", [
            presenterText("deadline-lead", "Please submit the E-Poster file ("),
            presenterText("deadline-type", "JPG or PNG", true),
            presenterText("deadline-mid", ") to the below link "),
            presenterText("deadline-value", "by April 6, 2026", true),
            presenterText("deadline-tail", "."),
          ]),
        ],
      },
      {
        kind: "list",
        id: "submit-list",
        items: [
          presenterItem("link", [
            presenterText("link-label", "Submit to:"),
            // 주석: 수정필요. E-Poster 제출 링크를 교체한다.
            { kind: "open", id: "link-file", href: EPOSTER_SUBMIT_HREF },
          ]),
          presenterItem("email", [
            presenterText(
              "email",
              `If there are any problems uploading your file to this link, please submit it by email (${SECRETARIAT_EMAIL}).`,
            ),
          ]),
          presenterItem("filename", [
            presenterText(
              "filename",
              "Please title the submission file name as your abstract number and name. (i.e. ABS-0999_Gil Dong Hong)",
            ),
          ]),
          presenterItem("done", [
            presenterText(
              "done",
              "You will see the final screen when your presentation file is uploaded successfully.",
            ),
          ]),
        ],
      },
    ],
  },
];
