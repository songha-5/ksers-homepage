import {
  POWERPOINT_GUIDE_HREF,
  SECRETARIAT_EMAIL,
  VIDEO_SUBMIT_HREF,
  VIDEO_TEMPLATE_FILE_NAME,
  VIDEO_TEMPLATE_HREF,
  ZOOM_GUIDE_HREF,
} from "@/components/presenter-guidelines/presenter-guidelines-content";
import {
  presenterItem,
  presenterParagraph,
  presenterText,
  type PresenterSection,
} from "@/components/presenter-guidelines/presenter-guidelines-model";

export const VIDEO_GUIDELINE_SECTIONS: readonly PresenterSection[] = [
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
              "All Video Exhibition should be made in voice-recorded video within 5 minutes and submitted ",
            ),
            presenterText("deadline-value", "by April 6, 2026", true),
            presenterText("deadline-tail", ", according to the guidelines."),
          ]),
        ],
      },
    ],
  },
  {
    id: "language",
    title: "1. Language / Time",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "language-list",
        items: [
          presenterItem("english", [presenterText("english", "Official language: English")]),
          presenterItem("time", [
            presenterText(
              "time",
              "Presentation Time: There is no specific presentation time. The Video Exhibition will be displayed at the venue during the congress.",
            ),
          ]),
        ],
      },
    ],
  },
  {
    id: "format",
    title: "2. Video Exhibition File Format",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "list",
        id: "format-list",
        items: [
          presenterItem("english", [
            presenterText("english", "All Video Exhibition should be prepared in English."),
          ]),
          presenterItem("template", [
            presenterText("template-label", "Template Download:"),
            // 주석: 수정필요. Video Exhibition 템플릿 파일을 교체한다.
            {
              kind: "download",
              id: "template-file",
              href: VIDEO_TEMPLATE_HREF,
              fileName: VIDEO_TEMPLATE_FILE_NAME,
            },
          ]),
          presenterItem("ratio", [presenterText("ratio", "Screen Ratio: 16:9")]),
          presenterItem("mp4", [presenterText("mp4", "Format: mp4 (up to 150MB)")]),
          presenterItem("font", [
            presenterText(
              "font",
              "Font: Use basic fonts such as Arial, Calibri, Times New Roman, etc.",
            ),
          ]),
          presenterItem("av", [presenterText("av", "Video & Audio should be included.")]),
        ],
      },
    ],
  },
  {
    id: "recording",
    title: "3. How to recording the Video",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "recording-lead",
        items: [
          presenterParagraph("ways", [
            presenterText(
              "ways",
              "You can choose one of two ways for making your video exhibition file.",
            ),
          ]),
        ],
      },
      {
        kind: "list",
        id: "recording-list",
        items: [
          presenterItem("zoom", [
            presenterText("zoom-lead", "Guidelines for recording your presentation using "),
            presenterText("zoom-value", "ZOOM", true),
            // 주석: 수정필요. ZOOM 녹화 안내 PDF를 교체한다.
            { kind: "open", id: "zoom-file", href: ZOOM_GUIDE_HREF },
          ]),
          presenterItem("ppt", [
            presenterText("ppt-lead", "Guidelines for recording your presentation using "),
            presenterText("ppt-value", "PPT (PowerPoint)", true),
            // 주석: 수정필요. PPT 녹화 안내 PDF를 교체한다.
            { kind: "open", id: "ppt-file", href: POWERPOINT_GUIDE_HREF },
          ]),
        ],
      },
    ],
  },
  {
    id: "submit",
    title: "4. Submission Video File",
    tone: "plain",
    layout: "stack",
    blocks: [
      {
        kind: "paragraphs",
        id: "submit-copy",
        items: [
          presenterParagraph("deadline", [
            presenterText("deadline-lead", "Please submit the Video file (MP4) to the below link "),
            presenterText("deadline-value", "by April 6, 2026", true),
            presenterText("deadline-tail", "."),
          ]),
          presenterParagraph("fallback", [
            presenterText(
              "fallback",
              "If the video for the exhibition has not been submitted by the deadline, the first file received when the abstract submission will be used.",
            ),
          ]),
        ],
      },
      {
        kind: "list",
        id: "submit-list",
        items: [
          presenterItem("link", [
            presenterText("link-label", "Submit to:"),
            // 주석: 수정필요. Video 제출 링크를 교체한다.
            { kind: "open", id: "link-file", href: VIDEO_SUBMIT_HREF },
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
